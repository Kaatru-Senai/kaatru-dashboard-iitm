var points = [
  {
    lat: "12.993456",
    lng: "80.237703",
    price: 14,
  },
  {
    lat: "13.001874",
    lng: "80.241817",
    price: 18,
  },
  {
    lat: "12.984923",
    lng: "80.238909",
    price: 15,
  },
];
let cfg = {
  radius: 70,
  useLocalExtrema: true,
  valueField: "price",
};

let heatmapLayer = new HeatmapOverlay(cfg);

let baseLayer = L.tileLayer(
  "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
);

// var map = L.map('map');

var map = L.map('map').setView([12.993456, 80.237703], 15);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
}).addTo(map);

// let propertyHeatMap = new L.Map("map", {
//   center: new L.LatLng(12.993456, 80.237703),
//   zoom: 15,
//   layers: [baseLayer, heatmapLayer],
// });

var customIcon = L.divIcon({
  className: "custom-marker",
  html: `<div class="marker">
    <h3>MSB</h3>
    <p>32°C</p>
</div>`,
});

const deg=52;
var markerDiv=document.getElementsByClassName('marker')
if(deg>44)
    element.style.backgroundColor = "rgba(255, 255, 255, .15);";

// heatmapLayer.setData({
//   min: 25,
//   max: 45,
//   data: points,
// });

// var greenIcon = L.icon({
//   iconUrl: "/assets/marker.png",
//   iconSize: [30, 35], // size of the icon
//   shadowSize: [50, 64], // size of the shadow
//   iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
//   shadowAnchor: [4, 62], // the same for the shadow
//   popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
// });

L.marker([12.993456, 80.237703], { icon: customIcon }).addTo(map);

// var heat = L.heatLayer(
//   [
//     [12.993456, 80.237703, 0.2], // lat, lng, intensity
//     [12.987836, 80.227294, 0.5],
//     [12.984145, 80.233749, 0.7],
//     [12.984923, 80.238909, 0.4],
//     [12.994233, 80.232815, 0.2],
//     [12.997746, 80.238367, 0.8],
//     [13.001874, 80.241817, 0.9],
//     [13.00273, 80.24633025, 1.0],
//     [13.006362, 80.241236, 0.5],
//   ],
//   { radius: 50, minOpacity: 1, max: 1 }
// ).addTo(map);
