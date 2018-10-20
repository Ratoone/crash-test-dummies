window.onload = function () {
  var mapOptions = {
    center: new google.maps.LatLng(21, 78),
    zoom: 5,
    maxZoom: 6
  };

  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  var getTileUrl = function (tile, zoom) {
    return 'tiles/' +
      zoom + '/' + tile.y + '/' +
      tile.x + '.jpg';
  };

  var layerOptions = {
    alt: 'MODIS_Terra_Aerosol',
    getTileUrl: getTileUrl,
    maxZoom: 13,
    minZoom: 1,
    name: 'MODIS_Terra_Aerosol',
    tileSize: new google.maps.Size(256, 256),
    opacity: 0.5
  };

  var imageMapType = new google.maps.ImageMapType(layerOptions);
  map.overlayMapTypes.insertAt(0, imageMapType);
};