const divCity = document.getElementById("city");
const divCountry = document.getElementById("country");
const searchBtn = document.getElementById("search");
const input = document.getElementById("searchInput");
const tempDiv = document.getElementById("temp");
const heeader = document.querySelector("header")
const API_URL = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "fd48bdf8a8b87b3c140f17625f4e2d57";

let wetherApi = (city) => {
  
  fetch(`${API_URL}${city}&appid=${API_KEY}&units=metric`) 
  .then((res) => {
      return res.json();l
    })
    .then((data) => {  
      divCity.children[1].innerHTML = data.name;
      divCountry.children[0].innerHTML = data.sys.country;
      tempDiv.children[1].innerHTML = `
        ${data.main.temp}°C
    `;
  })
  .catch(err=>{
    divCity.children[1].innerHTML = "City not found";
    divCountry.children[0].innerHTML = "";
    tempDiv.children[1].innerHTML = '';
  })
  .finally(()=>{
    input.value = ""
  })
  
};

searchBtn.addEventListener("click", ()=>{  
    wetherApi(input.value)
});
window.addEventListener("keyup",(e)=>{
  if(e.key === "Enter"){
    wetherApi(input.value)
  }
})



function currentCityName(crd) {
    let center;    

    if (YMaps.location) {
        center = new YMaps.GeoPoint(crd.coords.latitude,crd.coords.longitude );
    }    
    wetherApi(YMaps.location.city)
  } 
navigator.geolocation.getCurrentPosition(currentCityName)

