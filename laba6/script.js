document.addEventListener("DOMContentLoaded", function () {
    const commentForm = document.getElementById("commentForm");
    const commentsList = document.getElementById("commentsList");

    let likeCounters = {};

    commentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("commentName");
        const textInput = document.getElementById("commentText");

        const name = nameInput.value.trim();
        const text = textInput.value.trim();

        if (!name || !text) return;

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

        nameInput.value = "";
        textInput.value = "";
    });
});