let searchBtn = document.querySelector("#search-btn");
let cityHead = document.querySelector("#location");
let weather = document.querySelector("#weather");
let description = document.querySelector("#description");
let errorMsg = document.querySelector("#error-msg h2");

const API_KEY = "879dced3a1e103263502e51f8559d2f0";


searchBtn.addEventListener("click", async () => {

    let cityName = document.querySelector("#cityName").value.trim();
    if (!cityName) {
        if (errorMsg) {
            errorMsg.classList.add("hidden");
        }
        document.querySelector("#enter-msg").classList.remove("hidden");
        return;
    }
    document.querySelector("#enter-msg").classList.add("hidden");

    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();

        console.log(response);
        console.log(data);
        if (response.ok) {
            let wea = `${data.main.temp} °C`;
            let des = data.weather[0].description;
            addContent(cityName, wea, des);
        } else {
            showError(cityName);
        }
    } catch (error) {
        showError("Cannot fetch the data, Try agin lator.")
    }
});

function addContent(city, wea, des) {
    cityHead.textContent = city.toUpperCase();
    weather.textContent = wea;
    description.textContent = des;
}


function showError(cityName) {
    errorMsg.classList.remove("hidden");
    errorMsg.textContent =  cityName;
    errorMsg.style.color = "red";
}