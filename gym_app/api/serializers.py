
from rest_framework import serializers

from gym_app.models import Modalidade


class ModalidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modalidade
        fields = '__all__'