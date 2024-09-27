
    // Функция для отображения модального окна
    function showModal() {
        document.getElementById('myModal').style.display = "flex";
    }

    // Функция для скрытия всплывающего окна
    function hideModal() {
        document.getElementById('myModal').style.display = "none";
    }

    // Добавление обработчиков событий после загрузки DOM
    document.addEventListener('DOMContentLoaded', function () {
        // Показывать окно через 10-15 секунд после загрузки страницы
        const showModalTimeout = Math.floor(Math.random() * (15000 - 10000 + 1)) + 10000; // Рандомное время от 10 до 15 секунд
        setTimeout(showModal, showModalTimeout);

        // Закрытие модального окна по клику на крестик
        const closeButton = document.querySelector('.close');
        if (closeButton) {
            closeButton.addEventListener('click', function () {
                hideModal();
            });
        }
    });
