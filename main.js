var map = L.map("map").setView([12.993456, 80.237703], 15);
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 18,
}).addTo(map);

let data;
let forecast;
var markers = [];

async function getData() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  data = getMock();
  forecast = getForecast();
  var forecastDiv = document.getElementById("forecast");
  forecast.map((item) => {
    var forecastItem = document.createElement("div");
    forecastItem.className = "forecast_item";
    forecastItem.innerHTML = `
    <div class="forecast_temp">
      <img src="./assets/weather/cloudy-day-1.svg" alt="">
      <p>${item.temp}°C</p>
    </div>
    <p>${item.date}</p>
    <p>${item.day}</p>`;
    forecastDiv.appendChild(forecastItem);
  });
  data.forEach((item) => {
    var latitude = item.lat;
    var longitude = item.lon;

    // Create a custom div element for each marker
    var divElement = document.createElement("div");
    divElement.className = "marker";

    const deg = item.temp;
    var imageSrc =
      deg > 36
        ? "./assets/weather/cloudy-day-1.svg"
        : "./assets/weather/rainy-1.svg";

    divElement.innerHTML = `
      <h3>${item.location}</h3>
      <img src="${imageSrc}" alt="">
      <div class="values">
        <p>${item.temp}°C</p>        
        <p>${item.humidity}</p>
      </div>
    `;

    var customIcon = L.divIcon({
      className: "custom-marker",
      html: divElement,
    });

    // Create a marker with the extracted latitude and longitude
    var marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(
      map
    );
    markers.push(marker);
  });

  // Call the flyToMarkers function after markers have been added
  flyToMarkers();
}

function flyToMarkers() {
  var index = 0;

  function fly() {
    if (index < markers.length) {
      var marker = markers[index];
      map.flyTo(marker.getLatLng(), 18, {
        duration: 5,
        animate: true,
        easeLinearity: 0.25,
      });
      index = (index + 1) % markers.length; // Loop back to the first marker
    }
    setTimeout(fly, 5000);
  }

  fly();
}

// Call the getData function
getData();
