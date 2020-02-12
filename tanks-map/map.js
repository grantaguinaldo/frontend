
// These data come from POST Response
var facilityLocation = [33.9463, -118.16704];
var facilityAssetLocation = [33.9463, -118.16704];
var facilityName = 'Lunday-Thagard Company';
var assetName = 'Tank 10001';


var markerText = '<b>' + facilityName + '</b>' + '<br>' + assetName;
var token = 'pk.eyJ1IjoiZ3JhbnRhZ3VpbmFsZG8iLCJhIjoiY2plbHBnZ3NnNGxodzJ3cWU4Z3NtOWVnbyJ9.jp4qDIfhOO-GkoeSvRm-0Q'

var myMap = L.map('map').setView(facilityLocation, 13);
var marker = L.marker(facilityAssetLocation).addTo(myMap);

L.marker(facilityAssetLocation).addTo(myMap)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 21,
  id: 'mapbox/streets-v11',
  accessToken: token
}).addTo(myMap);

marker.bindPopup(markerText).openPopup();
