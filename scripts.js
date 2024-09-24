let lastCloseTime = 0; // Переменная для отслеживания времени последнего закрытия окна

// Функция для показа всплывающего окна
function showModal() {
    const currentTime = new Date().getTime();
    
    // Проверяем, что прошло хотя бы 3 секунды с момента закрытия окна
    if (currentTime - lastCloseTime >= 3000) {
        document.getElementById('myModal').style.display = "flex";
    }
}

// Функция для скрытия всплывающего окна
function hideModal() {
    document.getElementById('myModal').style.display = "none";
    lastCloseTime = new Date().getTime(); // Запоминаем время закрытия
}

// Показывать окно каждые 3-5 секунд
setInterval(function() {
    showModal();
}, Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000); // Интервал случайный между 3 и 5 сек

// Закрытие модального окна по клику
document.querySelector('.close').addEventListener('click', function() {
    hideModal();
});
