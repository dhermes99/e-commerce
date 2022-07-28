from rest_framework import serializers


class BaseModelSerializer(serializers.ModelSerializer):
    deleted_at = serializers.DateTimeField(read_only=True)
