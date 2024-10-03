"""
URL configuration for blOOging project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path #Импортирует функцию path из модуля django.urls, которая используется для определения маршрутов.
from app import views #Импортирует модуль views из приложения app, в котором определены представления, которые будут обрабатывать запросы.

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index_page, name='index'), #Определяет маршрут для главной страницы.
    path('', views.save_settings, name='save_settings' ), #Определяет маршрут для сохранения настроек.
    path('save_theme/', views.save_theme, name='save_theme') #Определяет маршрут для сохранения темы.
]
