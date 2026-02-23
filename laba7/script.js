document.addEventListener("DOMContentLoaded", function () {
    // Прогресс-бар
    const progressBar = document.getElementById("readingProgress");
    const article = document.querySelector("article.post");

    window.addEventListener("scroll", function () {
        const scrollTop = window.scrollY;
        const articleHeight = article.scrollHeight - window.innerHeight;
        const scrolled = Math.min((scrollTop / articleHeight) * 100, 100);
        progressBar.style.width = scrolled + "%";
    });

    // Динамическая секция комментариев
    const commentForm = document.getElementById("commentForm");
    const commentsList = document.getElementById("commentsList");
    let likeCounters = {};

    // Создаем элемент для анимированного сообщения
    const successMessage = document.createElement("div");
    successMessage.id = "successMessage";
    successMessage.textContent = "Комментарий успешно отправлен!";
    document.body.appendChild(successMessage);

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("commentName");
        const textInput = document.getElementById("commentText");
        const name = nameInput.value.trim();
        const text = textInput.value.trim();
        if (!name || !text) return;

        // Создаем комментарий
        const commentDiv = document.createElement("div");
        commentDiv.classList.add("comment");

        const commentId = Date.now();
        likeCounters[commentId] = 0;

        const commentText = document.createElement("p");
        commentText.textContent = `${name}: ${text}`;

        const likeBtn = document.createElement("button");
        likeBtn.textContent = `👍 Like (${likeCounters[commentId]})`;
        likeBtn.style.marginLeft = "10px";

        likeBtn.addEventListener("click", function () {
            likeCounters[commentId]++;
            likeBtn.textContent = `👍 Like (${likeCounters[commentId]})`;
        });

        commentDiv.append(commentText, likeBtn);
        commentsList.append(commentDiv);

        // Очистка формы
        nameInput.value = "";
        textInput.value = "";

        // Показ анимированного сообщения
        successMessage.classList.add("show");
        setTimeout(() => successMessage.classList.remove("show"), 2000);
    });
});