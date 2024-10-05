const divCity = document.getElementById("city");
const divCountry = document.getElementById("country");
const searchBtn = document.getElementById("search");
const input = document.getElementById("searchInput");
const tempDiv = document.getElementById("temp");
const heeader = document.querySelector("header")

let wetherApi = (city) => {
//   let city = input.value;
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=RM6TEEP8AGFTDPLV26AF2S94D&contentType=json`
  )
    .then((res,) => {
      return res.json();
    })
    .then((data) => {        
      divCity.children[1].innerHTML = data.address;
      divCountry.children[0].innerHTML = data.resolvedAddress;
      tempDiv.children[1].innerHTML = `
        ${data.currentConditions.temp}°C
    `;
    })
    .catch(err=>{
            alert("Oops,there is no such city")
           
    })
    input.value = "" 
};

searchBtn.addEventListener("click", ()=>{
    wetherApi(input.value)
});



function currentCityName() {
    let center;
    if (YMaps.location) {
        center = new YMaps.GeoPoint(YMaps.location.longitude, YMaps.location.latitude);
    }
    wetherApi(YMaps.location.city)
  }
  currentCityName()


