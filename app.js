let searchBtn = document.querySelector("#search-btn");
let cityHead = document.querySelector("#location");
let weather = document.querySelector("#weather");
let description = document.querySelector("#description");


searchBtn.addEventListener("click", () => {
    let cityName = document.querySelector("#cityName").value.trim();
    if (!cityName) return;
    document.querySelector("#enter-msg").classList.add("hidden");
});

