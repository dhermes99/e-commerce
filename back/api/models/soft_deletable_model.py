from django.db import models
from django.utils import timezone


class SoftDeletableManager(models.Manager):
    def get_queryset(self):
        qs = super().get_queryset()
        return qs.filter(deleted_at=None)


class SoftDeletableModel(models.Model):
    """
    Abstract model that overrides the delete method.
    """

    deleted_at = models.DateTimeField(null=True, blank=True)

    objects = models.Manager()
    available_objects = SoftDeletableManager()

    class Meta:

        abstract = True

    def delete(self, using=None, keep_parents=False, soft=True):
        if soft:
            self.deleted_at = timezone.now()
            self.save(using=using)
        else:
            return super().delete(using=using, keep_parents=keep_parents)
