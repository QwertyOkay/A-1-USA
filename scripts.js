
        // setTimeout(function() {
        //     document.getElementById('myModal').style.display = "flex";
        // }, 15000); // Show modal after 15 seconds

        // document.querySelector('.close').addEventListener('click', function() {
        //     document.getElementById('myModal').style.display = "none";
        // });

document.addEventListener('DOMContentLoaded', function() {
    // Проверяем наличие модального окна в DOM
    const modal = document.getElementById('myModal');
    const closeButton = document.querySelector('.close');
    
    if (!modal || !closeButton) {
        console.error('Модальное окно или кнопка закрытия не найдены в DOM!');
        return;
    }

    // Проверяем в локальном хранилище, закрывалось ли уже модальное окно
    if (!localStorage.getItem('modalClosed')) {
        // Если не закрывалось, показываем модальное окно через 15 секунд
        setTimeout(function() {
            modal.style.display = "flex";  // Убедитесь, что используете правильное свойство CSS
        }, 15000); // Показываем модальное окно через 15 секунд
    }

    // Обработчик нажатия на кнопку закрытия модального окна
    closeButton.addEventListener('click', function() {
        modal.style.display = "none";
        // Сохраняем информацию о том, что модальное окно было закрыто
        localStorage.setItem('modalClosed', 'true');
    });
});

