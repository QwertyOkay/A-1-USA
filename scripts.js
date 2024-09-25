let lastCloseTime = 0; // Переменная для отслеживания времени последнего закрытия окна

// Функция для показа всплывающего окна
function showModal() {
    const currentTime = new Date().getTime();
    
    // Проверяем, что прошло хотя бы 1 минута (60000 миллисекунд) с момента закрытия окна
    if (currentTime - lastCloseTime >= 60000) {
        document.getElementById('myModal').style.display = "flex";
    }
}

// Функция для скрытия всплывающего окна
function hideModal() {
    document.getElementById('myModal').style.display = "none";
    lastCloseTime = new Date().getTime(); // Запоминаем время закрытия
}

// Показывать окно каждые 1 минуту
setInterval(function() {
    showModal();
}, 60000); // Интервал 1 минута (60000 миллисекунд)

// Закрытие модального окна по клику
document.querySelector('.close').addEventListener('click', function() {
    hideModal();
});
