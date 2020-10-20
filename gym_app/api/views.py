from rest_framework import viewsets

from .serializers import (
    ModalidadeSerializer, TurmaSerializer, PlanoSerializer )

from gym_app.models import (
    Modalidade, Turma, Plano )


class ModalidadeViewSet(viewsets.ModelViewSet):
    queryset = Modalidade.objects.all()
    serializer_class = ModalidadeSerializer

class TurmaViewSet(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class PlanoViewSet(viewsets.ModelViewSet):
    queryset = Plano.objects.all()
    serializer_class = PlanoSerializer