// Requires Google Maps script tag in page with your key
let stgMap;
function initMap(elementId='map', center={ lat: 12.9716, lng: 77.5946 }, zoom=12) {
  const el = document.getElementById(elementId);
  if (!el || !window.google) return;
  stgMap = new google.maps.Map(el, { center, zoom, mapId: 'DEMO_MAP_ID' });
  new google.maps.Marker({ position: center, map: stgMap });
}

function placeMarker(lat, lng) {
  if (!stgMap) return;
  new google.maps.Marker({ position: {lat, lng}, map: stgMap });
  stgMap.setCenter({ lat, lng });
}