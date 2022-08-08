
// Initialize and add the map
function initMap() {

  
  var canvas = document.getElementById('map-canvas');
var myLatlng = new google.maps.LatLng(12.971599,77.594566 ); 

var mapOptions = {
    zoom:8 ,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(canvas, mapOptions);


var marker = new google.maps.Marker({
  position: map.getCenter(),
  map: map,
  
  
});

var circleOptions = {
    draggable: true,
    editable: true,
       strokeColor: 'BLACK',
       strokeOpacity: 0.8,
       strokeWeight: 1,
       fillColor: 'purple',
       fillOpacity: 0.5,
       map: map,
       center: myLatlng,
       radius: 40000
};

var circle = new google.maps.Circle(circleOptions);

google.maps.event.addListener(circle, 'center_changed', update);
google.maps.event.addListener(circle, 'radius_changed', update);
    
function update() {
    var debug = document.getElementById("debug");
    var d = Math.pow(10,5);
    
    debug.innerHTML = "Latitude: " + Math.round(circle.getCenter().lat()*d)/d + "<br>";
    debug.innerHTML += "longitude: " + Math.round(circle.getCenter().lng()*d)/d + "<br>";
    debug.innerHTML += "Area: " + circle.getRadius()*circle.getRadius()*3.14 + " m2<br>";
    
    
   
}

update();

}

window.initMap = initMap;

