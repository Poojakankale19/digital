document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("reviewForm");
    const reviewList = document.getElementById("review-list");

    reviewForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = this.querySelector("#name").value;
        const message = this.querySelector("#message").value;

        if (name.trim() !== "" && message.trim() !== "") {
            const review = document.createElement("div");
            review.classList.add("review");
            review.innerHTML =