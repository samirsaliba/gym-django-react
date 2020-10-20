from rest_framework import routers

from .views import (
    ModalidadeViewSet, TurmaViewSet, PlanoViewSet,
    ExameViewSet, MatriculaPlanoViewSet,
    MatriculaTurmaViewSet )

router = routers.DefaultRouter()
router.register('modalidades', ModalidadeViewSet, 'modalidades')
router.register('turmas', TurmaViewSet, 'turmas')
router.register('planos', PlanoViewSet, 'planos')

router.register('exames', ExameViewSet, 'planos')
router.register('matricula_turmas', MatriculaTurmaViewSet, 'matricula_turmas')
router.register('matricula_planos', MatriculaPlanoViewSet, 'matricula_planos')


# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls