from rest_framework import viewsets, permissions

from .serializers import (
    ModalidadeSerializer, TurmaSerializer, PlanoSerializer, ExameSerializer,
    MatriculaPlanoSerializer, MatriculaTurmaSerializer )

from gym_app.models import (
    Modalidade, Turma, Plano, MatriculaPlano, MatriculaTurma, Exame )


class ModalidadeViewSet(viewsets.ModelViewSet):
    queryset = Modalidade.objects.all()
    serializer_class = ModalidadeSerializer

class TurmaViewSet(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class PlanoViewSet(viewsets.ModelViewSet):
    queryset = Plano.objects.all()
    serializer_class = PlanoSerializer

class ExameViewSet(viewsets.ModelViewSet):
    serializer_class = ExameSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.exames.all()

class MatriculaPlanoViewSet(viewsets.ModelViewSet):
    serializer_class = MatriculaPlanoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.planos.all()

class MatriculaTurmaViewSet(viewsets.ModelViewSet):
    serializer_class = MatriculaTurmaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.request.user.turmas.all()



