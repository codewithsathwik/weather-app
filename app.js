import {strCaps} from "./src/utilities.js";
import { API_KEY } from "./src/utilities.js";

let searchBtn = document.querySelector("#search-btn");
let cityHead = document.querySelector("#location");
let weather = document.querySelector("#weather");
let description = document.querySelector("#description");
let errorMsg = document.querySelector("#error-msg h2");
let detailsCon = document.querySelector("#details-container");


searchBtn.addEventListener("click", async () => {
    let cityName = document.querySelector("#cityName").value.trim();
    if (!cityName) {
        if (errorMsg) {
            errorMsg.classList.add("hidden");
        }
        document.querySelector("#enter-msg").classList.remove("hidden");
        detailsCon.classList.add("hidden");
        return;
    }
    document.querySelector("#enter-msg").classList.add("hidden");
    

    try {
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
        let response = await fetch(url);
        let data = await response.json();
        // console.log(response);
        // console.log(data);
        if (response.ok) {
            let wea = `${data.main.temp} °C`;
            let des = data.weather[0].description;
            addContent(cityName, wea, des);
            detailsCon.classList.remove("hidden");
        } else {
            showError(cityName);
        }
    } catch (error) {
        showError("Cannot fetch the data, Try agin lator.")
    }
});

function addContent(city, wea, des) {
    cityHead.textContent = strCaps(city);
    weather.textContent = wea;
    description.textContent = strCaps(des);
}

function showError(cityName) {
    detailsCon.classList.add("hidden");
    errorMsg.classList.remove("hidden");
    if(cityName.length > 25){
        errorMsg.textContent = cityName;
    }else{
        errorMsg.textContent = `City not found.`;
    }
    errorMsg.style.color = "red";
}