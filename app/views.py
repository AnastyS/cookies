from django.shortcuts import render, redirect #используется для рендеринга шаблонов.
from urllib.parse import quote, unquote #используется для декодирования URL-кодированных строк.
from django.http import HttpResponse #используется для создания HTTP-ответов.

#получение данных из кукис
#request = запрос
def index_page(request):
    team = request.COOKIES.get('team', unquote('Не выбрано', encoding='utf-8')) #Получает значение куки team. Если куки нет, используется значение по умолчанию 'Не выбрано', декодированное из URL-кодированного формата.
    theme = request.COOKIES.get('theme', 'light')#Получает значение куки theme. Если куки нет, используется значение по умолчанию 'light'.

#get - метод получения запроса с сервера
#рендеринг шаблона
    return render(request, 'index.html', {
        'theme': theme,
        'team': team
    })

def save_theme(request):
    if request.method == 'POST': #Проверяет, что запрос является POST-запросом.
        theme = request.POST.get('theme')#Получает значение параметра theme из POST-запроса.
        if theme in ['light', 'dark']:#Проверяет какая тема
            response = HttpResponse("Theme saved")#Создает HTTP-ответ с сообщением 
            response.set_cookie('theme', theme, max_age=365*24*60*60)  # Кука на 1 год
            return response
    return HttpResponse("Invalid request", status=400)

#сохранение кукис 
def save_settings(request):
    if request.method == 'POST':
        response = redirect('index') #Создает ответ с перенаправлением на страницу
        response.set_cookie('team', quote(request.POST.get('team'), encoding='utf-8'))
        response.set_cookie('theme', request.POST.get('theme'))
        response.set_cookie('language', request.POST.get('language'))
        return response
    
#set_cookie - устанавливает и отправляет кукис пользователю, сохраняет запросы до тех пор пока не выключится браузер

