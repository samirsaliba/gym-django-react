from rest_framework import routers

from .views import (
    ModalidadeViewSet, TurmaViewSet, PlanoViewSet )

router = routers.DefaultRouter()
router.register('modalidades', ModalidadeViewSet, 'modalidades')
router.register('turmas', TurmaViewSet, 'turmas')
router.register('planos', PlanoViewSet, 'planos')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls