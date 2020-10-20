from django.shortcuts import render
from django.views.generic.detail import DetailView

from gym_app.models import Modalidade, Turma, Plano


def index(request):
    return render(request, 'frontend/index.html')


class ModalidadeDetailView(DetailView):
    model = Modalidade
    template_name = 'frontend/index.html'

class TurmaDetailView(DetailView):
    model = Turma
    template_name = 'frontend/index.html'

class PlanoDetailView(DetailView):
    model = Plano
    template_name = 'frontend/index.html'