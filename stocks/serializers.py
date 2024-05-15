from rest_framework import serializers
from .models import Watchlist
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    password =serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'email','password']

    def create(self,validated_data):
        user=User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user


class WatchlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Watchlist
        fields = ['id', 'symbol']
