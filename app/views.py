from django.shortcuts import render, redirect
from urllib.parse import quote, unquote
from django.http import HttpResponse

def index_page(request):
    team = request.COOKIES.get('team', unquote('Не выбрано', encoding='utf-8'))
    theme = request.COOKIES.get('theme', 'light')
    language = request.COOKIES.get('language', 'ru')

    return render(request, 'index.html', {
        'theme': theme,
        'language': language,
        'team': team
    })

def save_theme(request):
    if request.method == 'POST':
        theme = request.POST.get('theme')
        if theme in ['light', 'dark']:
            response = HttpResponse("Theme saved")
            response.set_cookie('theme', theme, max_age=365*24*60*60)  # Кука на 1 год
            return response
    return HttpResponse("Invalid request", status=400)


def save_settings(request):
    if request.method == 'POST':
        response = redirect('index')
        response.set_cookie('team', quote(request.POST.get('team'), encoding='utf-8'))
        response.set_cookie('theme', request.POST.get('theme'))
        response.set_cookie('language', request.POST.get('language'))
        return response
