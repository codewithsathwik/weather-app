let searchBtn = document.querySelector("#search-btn");


searchBtn.addEventListener("click", () => {
    let cityName = document.querySelector("#cityName").value.trim();
    if (!cityName) {
        return;
    }
    document.querySelector("#enter-msg").classList.add("hidden");
});

