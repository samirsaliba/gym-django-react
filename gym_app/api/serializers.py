
from rest_framework import serializers

from gym_app.models import (
    Modalidade, Turma, Plano, Exame, MatriculaPlano, MatriculaTurma )


class ModalidadeSerializer(serializers.Serializer):    
    tipo = serializers.CharField(max_length=200)
    descricao = serializers.CharField(max_length=200)
    imagem = serializers.ImageField()
    print(imagem)

class TurmasClienteSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    turma__modalidade__tipo = serializers.CharField(label='modalidade', max_length=20)
    turma__dia = serializers.DateTimeField()
    turma__horario = serializers.CharField(max_length=5)


class PlanosClienteSerializer(serializers.Serializer):
    id = serializers.IntegerField()
    plano__modalidade__tipo = serializers.CharField(max_length=20)
    plano__vezes_por_semana = serializers.IntegerField()
    plano__tipo = serializers.CharField(max_length=15)
    plano__valor = serializers.DecimalField(max_digits=6, decimal_places=2)

class ExameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exame
        fields = '__all__'

class PlanoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plano
        fields = '__all__'

class TurmaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turma
        fields = '__all__'