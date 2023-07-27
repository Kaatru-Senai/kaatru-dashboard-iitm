// let map;

// async function initMap() {
//   // The location of Uluru
//   const position = { lat: 12.991555 ,lng: 80.240746, };
//   // Request needed libraries.
//   //@ts-ignore
//   const { Map } = await google.maps.importLibrary("maps");
//   const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");

//   // The map, centered at Uluru
//   map = new Map(document.getElementById("map"), {
//     zoom: 14,
//     center: position,
//     mapId: "91c2b3008fb84ca1",
//   });
  
//   data = getMock();

//   data.forEach((item) => {
//     var latitude = item.lat;
//     var longitude = item.lon;

//     // Create a custom div element for each marker
//     var divElement = document.createElement("div");
//     divElement.className = "marker";

//     const deg = item.temp;
//     var imageSrc =
//       deg > 36
//         ? "./assets/weather/cloudy-day-1.svg"
//         : "./assets/weather/rainy-1.svg";

//     divElement.innerHTML = `
//       <h3>${item.location}</h3>
//       <img src="${imageSrc}" alt="">
//       <div class="values">
//         <p>${item.temp}°C</p>        
//         <p>${item.humidity}</p>
//       </div>
//     `;

//     var customIcon = L.divIcon({
//       className: "custom-marker",
//       html: divElement,
//     });

//     // Create a marker with the extracted latitude and longitude
//     var marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(
//       map
//     );
//     markers.push(marker);
//   });

//   // The marker, positioned at Uluru
//   const marker = new AdvancedMarkerElement({
//     map: map,
//     position: position,
//     title: "Uluru",
//   });
// }

// async function getData() {
//   await new Promise((resolve) => setTimeout(resolve, 2000));
//   data = getMock();
//   forecast = getForecast();
//   var forecastDiv = document.getElementById("forecast");
//   forecast.map((item) => {
//     var forecastItem = document.createElement("div");
//     forecastItem.className = "forecast_item";
//     forecastItem.innerHTML = `
//     <div class="forecast_temp">
//       <img src="./assets/weather/cloudy-day-1.svg" alt="">
//       <p>${item.temp}°C</p>
//     </div>
//     <p>${item.date}</p>
//     <p>${item.day}</p>`;
//     forecastDiv.appendChild(forecastItem);
//   });
//   data.forEach((item) => {
//     var latitude = item.lat;
//     var longitude = item.lon;

//     // Create a custom div element for each marker
//     var divElement = document.createElement("div");
//     divElement.className = "marker";

//     const deg = item.temp;
//     var imageSrc =
//       deg > 36
//         ? "./assets/weather/cloudy-day-1.svg"
//         : "./assets/weather/rainy-1.svg";

//     divElement.innerHTML = `
//       <h3>${item.location}</h3>
//       <img src="${imageSrc}" alt="">
//       <div class="values">
//         <p>${item.temp}°C</p>        
//         <p>${item.humidity}</p>
//       </div>
//     `;

//     var customIcon = L.divIcon({
//       className: "custom-marker",
//       html: divElement,
//     });

//     // Create a marker with the extracted latitude and longitude
//     var marker = L.marker([latitude, longitude], { icon: customIcon }).addTo(
//       map
//     );
//     markers.push(marker);
//   });

//   // Call the flyToMarkers function after markers have been added
//   flyToMarkers();
// }

// function flyToMarkers() {
//   var index = 0;

//   function fly() {
//     if (index < markers.length) {
//       var marker = markers[index];
//       map.flyTo(marker.getLatLng(), 18, {
//         duration: 5,
//         animate: true,
//         easeLinearity: 0.25,
//       });
//       index = (index + 1) % markers.length; // Loop back to the first marker
//     }
//     setTimeout(fly, 5000);
//   }
//   fly();
// }

// // Call the getData function

// async function loop(){
//   setInterval(()=>{
//     fetch('http://127.0.0.1:8000/').then((e)=>console.log(e))
//     let socket = new WebSocket("wss://bw06.kaatru.org/stream/coloc4/LM27/sen");

//     socket.onmessage = function(event) {
//       data=JSON.parse(event.data)
//       console.log(data.data[0])
//       var updateDiv = document.getElementById("srvtime")
//       updateDiv.innerHTML=data.data[0].srvtime
//     };
//     console.log("websocket")
//   },5000)
// }

// loop();
// getData();


// window.initMap = initMap;


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

async function loop(){
  setInterval(()=>{
    fetch('http://127.0.0.1:8000/').then((e)=>console.log(e))
    let socket = new WebSocket("wss://bw06.kaatru.org/stream/coloc4/LM27/sen");

    socket.onmessage = function(event) {
      data=JSON.parse(event.data)
      console.log(data.data[0])
      var updateDiv = document.getElementById("srvtime")
      updateDiv.innerHTML=data.data[0].srvtime
    };
    console.log("websocket")
  },5000)
}

loop();
getData();
