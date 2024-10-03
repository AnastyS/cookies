// Функция для установки темы
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
        // Меняем цвет всех ссылок на белый при тёмной теме
        let links = document.querySelectorAll('a');
        links.forEach(function(link) {
            link.style.color = '#fff';
        });    
    }
}

// Функция для сохранения темы в cookies
function saveTheme(theme) {
    document.cookie = "theme=" + theme + "; path=/; max-age=" + (60 * 60 * 24 * 365); // Кука на 1 год
}

// Получение сохраненной темы из cookies
function getSavedTheme() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'theme') {
            return value;
        }
    }
    console.warn("темы нет");
    return null;
}

// Инициализация темы при загрузке страницы
window.onload = function() {
    const savedTheme = getSavedTheme();
    if (savedTheme) {
        setTheme(savedTheme);
    }
    const savedSearch = getSavedSearch();
    if (savedSearch) {
        document.getElementById('search-input').value = savedSearch;
    }
}

// Обработчик изменения темы
function onThemeChange(theme) {
    setTheme(theme);
    saveTheme(theme); // Сохраняем тему
}



// Функция для сохранения данных поиска в куки
function saveSearch() {
    const searchInput = document.getElementById('search-input').value;
    document.cookie = "search=" + searchInput + "; path=/; max-age=" + (60 * 60 * 24 * 365); // Кука на 1 год
    document.getElementById('search-form').submit(); // Отправляем форму
}

// Функция для получения сохраненных данных поиска из куки
function getSavedSearch() {
    const cookies = document.cookie.split(';');
    for (let cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if (name === 'search') {
            return value;
        }
    }
    return null;
}
