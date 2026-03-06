from rest_framework.routers import DefaultRouter
from .views import BookingViewSet, CarViewSet, CustomerViewSet

router = DefaultRouter()
router.register(r'cars', CarViewSet)
router.register(r'customers', CustomerViewSet)
router.register(r'bookings', BookingViewSet)

urlpatterns = router.urls