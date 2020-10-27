from rest_framework import viewsets, permissions

from .serializers import (
    ModalidadeSerializer, TurmaSerializer, PlanoSerializer, ExameSerializer,
    PlanosClienteSerializer, TurmasClienteSerializer )

from gym_app.models import (
    Modalidade, Turma, Plano, MatriculaPlano, MatriculaTurma, Exame, Cliente )


class ModalidadeViewSet(viewsets.ModelViewSet):
    queryset = Modalidade.objects.all()
    serializer_class = ModalidadeSerializer

class TurmaViewSet(viewsets.ModelViewSet):
    queryset = Turma.objects.all()
    serializer_class = TurmaSerializer

class PlanoViewSet(viewsets.ModelViewSet):
    #queryset2 = Plano.objects.all()
    #print(queryset2)
    queryset = Plano.objects.values('id', 'modalidade_id__tipo', 'tipo','vezes_por_semana', 'valor')
    serializer_class = PlanoSerializer

class ExameViewSet(viewsets.ModelViewSet):
    serializer_class = ExameSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        cliente = Cliente.objects.get(user=self.request.user)
        return Exame.objects.filter(cliente=cliente)

class MatriculaPlanoViewSet(viewsets.ModelViewSet):
    serializer_class = PlanosClienteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        cliente = Cliente.objects.get(user=self.request.user)
        planos = MatriculaPlano.objects.filter(cliente=cliente).values('id', 'plano__modalidade__tipo', 'plano__vezes_por_semana', 'plano__tipo', 'plano__valor')
        return planos

class MatriculaTurmaViewSet(viewsets.ModelViewSet):
    serializer_class = TurmasClienteSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        cliente = Cliente.objects.get(user=self.request.user)
        turmas = MatriculaTurma.objects.filter(cliente=cliente).values('id', 'turma__modalidade__tipo', 'turma__dia', 'turma__horario')
        return turmas



