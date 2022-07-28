from rest_framework import serializers

from api.models.product import Product
from api.serializers.base_model_serializer import BaseModelSerializer


class ProductSerializer(BaseModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
