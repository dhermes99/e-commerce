from uuid import uuid4

from django.db import models

from .soft_deletable_model import SoftDeletableModel


class TimeStampedModel(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class UUIDModel(models.Model):
    id = models.UUIDField(
        default=uuid4, editable=False, unique=True, db_index=True, primary_key=True
    )

    class Meta:
        abstract = True


class BaseModel(TimeStampedModel, UUIDModel, SoftDeletableModel):
    """
    Abstract base model for all models
    """

    class Meta:
        abstract = True

    def _stringify(self, fields):
        for key in fields:
            fields[key] = str(fields[key])

        return fields
