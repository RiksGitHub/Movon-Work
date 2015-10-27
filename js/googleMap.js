// Het in elkaar draaien van het Google kaartje met marker:

//Choose a location on the map and name it 'position'
var position = [51.98340598, 4.7296973];

//Create a function to initialize the map:
function initialize() { 
  
  //Use position to fill the 'latLng' object with the Google API function 'google.maps.LatLng':
  var latLng = new google.maps.LatLng(position[0], position[1]);
  
  //In the initialize function, create an object 'mapProp' to define the properties for the map:
  var mapProp = {  
    center:latLng, // make LatLng the 'center' of the map
    zoom:12, //Higher value is closer
    streetViewControl: false, // hide the yellow Street View pegman
	scaleControl: true, // allow users to zoom the Google Map
    mapTypeId:google.maps.MapTypeId.ROADMAP //Choose from ROADMAP, SATELLITE, HYBRID, TERRAIN
  };
  
  //Create new map (using the Google API function 'google.maps.Map') inside the <div> element 'googleMap', using the 'mapProp' parameters (removing everything inside the div?):
  var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
  
  // Show the default red marker at the location
  marker = new google.maps.Marker({
		position:latLng,
		map: map,
		draggable: false,
		animation: google.maps.Animation.DROP
  });
}

//Add a DOM listener that will execute the initialize() function when the page is loaded
google.maps.event.addDomListener(window, 'load', initialize);