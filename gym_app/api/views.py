from rest_framework import viewsets, permissions

from .serializers import (
    ModalidadeSerializer, TurmaSerializer, PlanoSerializer, ExameSerializer,
    MatriculaPlanoSerializer, MatriculaTurmaSerializer )

from gym_app.models import (
    Modalidade, Turma, Plano, MatriculaPlano, MatriculaTurma, Exame, Cliente )


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
        cliente = Cliente.objects.get(user=self.request.user)
        return Exame.objects.filter(cliente=cliente)

class MatriculaPlanoViewSet(viewsets.ModelViewSet):
    serializer_class = PlanoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        cliente = Cliente.objects.get(user=self.request.user)

        planos_id = list(MatriculaPlano.objects.filter(cliente=cliente).values_list('plano_id', flat=True))
        planos = Plano.objects.filter(id__in=planos_id)

        return planos

class MatriculaTurmaViewSet(viewsets.ModelViewSet):
    serializer_class = TurmaSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        cliente = Cliente.objects.get(user=self.request.user)

        turmas_id = list(MatriculaTurma.objects.filter(cliente=cliente).values_list('turma_id', flat=True))
        turmas = Turma.objects.filter(id__in=turmas_id)

        return turmas



