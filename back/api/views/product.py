from rest_framework import viewsets, permissions

from api.models.product import Product
from api.serializers.product import ProductSerializer


class ProductViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    serializer_class = ProductSerializer
    queryset = Product.objects.filter(deleted_at__isnull=True)
