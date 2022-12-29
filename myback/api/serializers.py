from rest_framework import serializers
from .models import *

class WishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wish
        fields = ['title', 'text', 'nickname']
