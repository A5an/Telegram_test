from django.urls import path
from . import views



urlpatterns = [
    path('', views.client, name = 'client'),
    path('lobbi/<str:pk>',views.lobbi, name = 'lobbi')
]
