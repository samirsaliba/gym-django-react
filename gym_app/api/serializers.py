
from rest_framework import serializers

from gym_app.models import (
    Modalidade, Turma, Plano, Exame, MatriculaPlano, MatriculaTurma )


class ModalidadeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Modalidade
        fields = '__all__'

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'

class PlanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plano
        fields = '__all__'

class ExameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exame
        fields = '__all__'

class MatriculaPlanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatriculaPlano
        fields = '__all__'

class MatriculaTurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = MatriculaTurma
        fields = '__all__'