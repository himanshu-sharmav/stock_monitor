from django.urls import path
from .views import UserList, UserDetail, WatchlistList, WatchlistDetail, stock_data,logout
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('users/', UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', UserDetail.as_view(), name='user-detail'),
    path('watchlists/', WatchlistList.as_view(), name='watchlist-list'),
    path('watchlists/<int:pk>/', WatchlistDetail.as_view(), name='watchlist-detail'),
    path('stock/<str:symbol>/', stock_data, name='stock-data'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
     path('logout/', logout, name='logout'),
]
