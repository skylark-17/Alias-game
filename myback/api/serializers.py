from rest_framework import serializers
from .models import *

class WishSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wish
        fields = ['title', 'text', 'nickname']

class NicknameSerializer(serializers.ModelSerializer):
    wishes = WishSerializer(many=True, read_only=True)
    class Meta:
        model = Nickname
        fields = ['name', 'wishes']
