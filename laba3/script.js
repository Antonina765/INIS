// Найти элементы на странице
const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

// Получаем сохранённое значение из localStorage
let count = localStorage.getItem("likes");

// Если лайков ещё нет
if (count === null) {
    count = 0;
} else {
    count = Number(count);
}

// Показываем значение на странице
likeCount.textContent = count;

// Обработчик клика
likeBtn.addEventListener("click", function () {
    count++;                    
    likeCount.textContent = count; 

    // сохраняем в браузере
    localStorage.setItem("likes", count);
});