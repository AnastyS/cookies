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
        // Меняем цвет текста в навигации и футере на черный
        let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(function(link) {
            link.style.color = '#000';
        });
        let footer = document.querySelector('footer p');
        footer.style.color = '#000';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        let links = document.querySelectorAll('a');
        links.forEach(function(link) {
            link.style.color = ''; // Восстанавливаем цвет
        });
        // Восстанавливаем цвет текста в навигации и футере
        let navLinks = document.querySelectorAll('.navbar-nav .nav-link');
        navLinks.forEach(function(link) {
            link.style.color = '';
        });
        let footer = document.querySelector('footer p');
        footer.style.color = '';
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



// // Функция для установки темы console.log(document.cookie);
// function setTheme(theme) {
//     if (theme === 'dark') {
//         document.body.style.backgroundColor = '#333';
//         document.body.style.color = '#fff';
//         // Меняем цвет всех ссылок на белый при тёмной теме
//         let links = document.querySelectorAll('a');
//         links.forEach(function(link) {
//             link.style.color = '#fff';
//         });

//     } else {
//         document.body.style.backgroundColor = '#fff';
//         document.body.style.color = '#000';

//         let links = document.querySelectorAll('a');
//         links.forEach(function(link) {
//             link.style.color = ''; //Восстанавливаем цвет
//         });

//     }
// }

// // Функция для сохранения темы в cookies
// function saveTheme(theme) {
//     document.cookie = "theme=" + theme + "; path=/; max-age=" + (60*60*24*365); // Кука на 1 год
// }

// // Получение сохраненной темы из cookies
// function getSavedTheme() {
//     const cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//         const [name, value] = cookie.trim().split('=');
//         if (name === 'theme') {
//             return value;
//         }
//     }
//     console.warn("темы нет")
//     return null;
// }

// // Инициализация темы при загрузке страницы
// window.onload = function() {
//     const savedTheme = getSavedTheme();
//     if (savedTheme) {
//         setTheme(savedTheme);
//         document.getElementById('theme').value = savedTheme;
//     }
    
//     const savedLanguage = getSavedLanguage();
//     if (savedLanguage) {
//         setLanguage(savedLanguage);
//         document.getElementById('language').value = savedLanguage;
//     }
// }


// // Обработчик изменения темы
// function onThemeChange() {
//     const theme = document.getElementById('theme').value;
//     setTheme(theme);
//     saveTheme(theme); // Сохраняем тему
// }

// // ДЛЯ ЯЗЫКА

// // Функция для установки языка интерфейса
// function setLanguage(language) {    
//     if (language === 'ru') {
//         languageswitch.textContent = 'Выберите язык интерфейса:';
//         languagetheme.textContent = 'Выберите тему:';
//         lightth.textContent = 'Светлая';
//         darkth.textContent = 'Темная';
//         commandtxt.textContent = 'Настройка любимых команд'
//         teamtxt.textContent = 'Выберите любимую команду:'
//         savetxt.textContent = 'Сохранить'
//         checktxt.textContent = 'Посмотреть сохраненные настройки'
//     } else {
//         languageswitch.textContent = 'Select interface language:';
//         languagetheme.textContent = 'Select a topic:';
//         lightth.textContent = 'Light';
//         darkth.textContent = 'Dark';
//         commandtxt.textContent = 'Setting up your favorite commands'
//         teamtxt.textContent = 'Choose your favorite team:'
//         savetxt.textContent = 'Save'
//         checktxt.textContent = 'View saved settings'
//     }
// }

// // Функция для сохранения выбранного языка в cookies
// function saveLanguage(language) {
//     document.cookie = "language=" + language + "; path=/; max-age=" + (60*60*24*365); // Сохраняем куку на 1 год
//     console.log(document.cookie);
// }

// // Получение сохраненного языка из cookies
// function getSavedLanguage() {
//     console.log("Все куки: ", document.cookie);
//     const cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//         const [name, value] = cookie.trim().split('=');
//         if (name === 'language') {
//             return value;
//         }
//     }
//     console.warn("языка нет")
//     return null;
// }

// // Обработчик изменения языка
// function onLanguageChange() {
//     const language = document.getElementById('language').value;
//     setLanguage(language); // Применяем новый язык интерфейса
//     saveLanguage(language); // Сохраняем выбор языка в cookies
// }


