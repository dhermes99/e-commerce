from django.urls import path
from django.urls.conf import include

from rest_framework import routers

from .views import (
    product,
)

router = routers.DefaultRouter()

router.register(r"product", product.ProductViewSet, basename="product")

app_name = "api"
urlpatterns = [path("", include(router.urls))]
