$(document).ready(function () {
	/* google maps -----------------------------------------------------*/
	google.maps.event.addDomListener(window, 'load', initialize);

	function initialize() {

        var myLatLng = {lat: 47.487350, lng: 19.058476}
		 var map = new google.maps.Map(document.getElementById('map-canvas'), {
    center: myLatLng,
    scrollwheel: false,
    draggable: false,
    zoom: 17
  });
        
        var marker = new google.maps.Marker({
    position: myLatLng,
    map: map
  });
        
	};

	/* end google maps -----------------------------------------------------*/
});
