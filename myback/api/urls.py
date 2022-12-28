from django.urls import path
from .views import *
from rest_framework_simplejwt import views as jwt_views

urlpatterns = [
    path('nicknames', NicknameList.as_view()),
    path('wishes', WishList.as_view()),

    path('nicknames/get_all', NicknameListAll.as_view()),
    path('nicknames/create', NicknameCreate.as_view()),
    path('nicknames/drop/<int:pk>', NicknameDetail.as_view()),

    path('wishes/get_all', WishListAll.as_view()),
    path('wishes/create', WishCreate.as_view()),
    path('wishes/drop/<int:pk>', WishDetail.as_view()),

    path('auth_api/token', jwt_views.TokenObtainPairView.as_view()),
    path('auth_api/refresh', jwt_views.TokenRefreshView.as_view()),

    path('auth_api/signup', CreateUser.as_view())

]
