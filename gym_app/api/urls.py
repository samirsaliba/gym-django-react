from rest_framework import routers

from .views import ModalidadeViewSet

router = routers.DefaultRouter()
router.register('modalidades', ModalidadeViewSet, 'modalidades')
# router.register('<The URL prefix>', <The viewset class>, '<The URL name>')

urlpatterns = router.urls