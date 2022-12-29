from django.urls import path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('wishes', WishList.as_view()),

    path('wishes/get_all', WishListAll.as_view()),
    path('wishes/create', WishCreate.as_view()),
    path('wishes/drop/', DeleteWish.as_view()),
    path('wishes/get_by_user', GetWishesByUser.as_view()),

    path('auth_api/token', jwt_views.TokenObtainPairView.as_view()),
    path('auth_api/refresh', jwt_views.TokenRefreshView.as_view()),

    path('auth_api/signup', CreateUser.as_view())

]
