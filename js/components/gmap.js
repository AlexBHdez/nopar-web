"use strict";

window.initMap = function() {
  var customMapType = new google.maps.StyledMapType([
    {
      stylers: [
        {'saturation': -100},
        {'lightness': 50},
        {'visibility': 'simplified'}
      ]
    },
    {
      elementType: 'labels',
      stylers: [{visibility: 'on'}]
    },
    {
      featureType: 'road',
      stylers: [{color: '#bbb'}]
    }
  ], {
    name: 'Dublin'
  });

  var image = new google.maps.MarkerImage(
  	'img/widgets/nopar-gmap-pin.png',
  	new google.maps.Size(48,54),
  	new google.maps.Point(0,0),
  	new google.maps.Point(24,54)
	);

  var customMapTypeId = 'custom_style';

  var brooklyn = {lat: 41.850, lng: -73.961};
  var noparSolutions = { lat: 41.403437114002074, lng: 2.137543800000003};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    scrollwheel: false,
    streetViewControl: false,
    mapTypeControl: false,
    center: noparSolutions, // Muntaner, 494.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });

  var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Nopar Solutions</h1>'+
    '<div id="bodyContent">'+
    '<p>Carrer Muntaner, 494 <br> Barcelona, 08022, España</p>'+
    '<p><a href="tel:+34111222333"><i class="icon-screen-smartphone blue-color"></i> +34 111 222 333</a></p>'+
    '<p><a href="mailto:hola@noparsolutions.com?subject=Contacto Web"><i class="icon-envelope blue-color"></i> hola@noparsolutions.com</a></p>'
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 350
  });

  var marker = new google.maps.Marker({
    map: map,
    clickable: true,
    icon: image,
    title: 'NoparSolutions',
    position: noparSolutions
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);
}