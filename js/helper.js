
var HTMLheaderName = '<h1 id="name"">%data%</h1>';
var HTMLheaderRole = '<span id="work-title">%data%</span><hr>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="white-text">%data%</span></li>';
var HTMLmobile = '<a href="#"><li class="flex-item"><span >mobile</span><span class="white-text">%data%</span></li></a>';
var HTMLemail = '<a href="#" target="_top"><li class="flex-item"><span >email</span><span class="white-text">%data%</span></li></a><br class="hidden-lg hidden-xl hidden-md">';
var HTMLtwitter = '<a href="#" target="_blank><li class="flex-item"><span >twitter</span><span class="white-text">%data%</span></li></a>';
var HTMLgithub = '<a href="#" target="_blank><li class="flex-item"><span >github</span><span class="white-text">%data%</span></li></a>';
var HTMLblog = '<li class="flex-item"><span >blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<a href="#"><li class="flex-item"><span >location</span><span class="white-text">%data%</span></li></a>';

var HTMLbioPic = '<div class="col-md-2 hidden-md hidden-sm hidden-xs"><img src="%data%" class="biopic"></div>';
var HTMLwelcomeMsg = '<div class="col-md-10"><span class="welcome-message em">%data%</span>';

var HTMLskillsStart = '<div class="col-md-10"><h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var HTMLskills = '<li class="flex-item"><span class="white-text">%data%</span></li></div>';

var HTMLskillsEnd = "</div>";

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<div class="row"><div class="col-md-12"><a class="work-employer" href="#">%data%';
var HTMLworkTitle = ' - %data%</a>';
var HTMLworkDates = '<div class="date-text">%data%</div>';
var HTMLworkLocation = '<div class="location-text">%data%</div>';
var HTMLworkDescription = '<div class="work-description"><p>%data%</p></div></div>';

var HTMLprojectStart = '<div class="project-entry"></div>';
var HTMLprojectTitle = '<div class="row "><div class="col-md-12"><a href="#">%data%</a></div></div>';
var HTMLprojectDates = '<div class="row"><div class="col-md-12 date-text">%data%</div></div>';
var HTMLprojectDescription = '<div class="row"><div class="col-md-12"><p>%data%</p></div></div>';
var HTMLprojectImage = '<img class="project-img hidden-sm hidden-xs" src="%data%">';
var HTMLprojectURL = '<a href="#">%data%</a>';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<div class="row"><div class="col-md-12"><a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a></div></div>';
var HTMLschoolMajor = '<div class="row"><div class="col-md-12"><em>Major: %data%</em></div></div>';
var HTMLschoolDates = '<div class="row"><div class="col-md-12"><div class="date-text">%data%</div></div></div>';
var HTMLschoolLocation = '<div class="location-text">%data%</div>';


var HTMLonlineClasses = '<div class="row"><div class="col-md-12"><h3>Online Classes &amp; Programs</h3></div></div>';
var HTMLonlineTitle = '<div class="row"><div class="col-md-12"><a href="#">%data% -- %onlineSchool%</div></div>';
var HTMLonlineDates = '<div class="row"><div class="col-md-12"><div class="date-text">%data%</div></div></div>';
var HTMLonlineURL = '<a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

$(document).ready(function() {
    $('button').click(function() {
        var iName = inName() || function() {};
        $('#name').html(iName);
    });
}); 

clickLocations = [];

function logClicks(x, y) {
    clickLocations.push({
        x: x,
        y: y
    });
    console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    
    logClicks (x,y);
}); 


/*
This is the fun part. Here's where we generate the custom Google Map for the website.
See the documentation below for more details.
https://developers.google.com/maps/documentation/javascript/reference
*/
var map; // declares a global map variable


/*
Start here! initializeMap() is called when page is loaded.
*/
function initializeMap() {

    var locations;

    var mapOptions = {
        disableDefaultUI: true
    };

    /* 
    For the map to be displayed, the googleMap var must be
    appended to #mapDiv in resumeBuilder.js. 
    */
    map = new google.maps.Map(document.querySelector('#map'), mapOptions);


    /*
    locationFinder() returns an array of every location string from the JSONs
    written for bio, education, and work.
    */
    function locationFinder() {
     
        var locations = [];
        locations.push(bio.contacts.location);//        
        education.schools.forEach(function(school) {
            locations.push(school.location);
        });
        work.jobs.forEach(function(job) {
            locations.push(job.location);
        });

        return locations;
    }

    /*
    createMapMarker(placeData) reads Google Places search results to create map pins.
    placeData is the object returned from search results containing information
    about a single location.
    */
    function createMapMarker(placeData) {

        // The next lines save location data from the search result object to local variables
        var lat = placeData.geometry.location.lat(); // latitude from the place service
        var lon = placeData.geometry.location.lng(); // longitude from the place service
        var name = placeData.formatted_address; // name of the place from the place service
        var bounds = window.mapBounds; // current boundaries of the map window

        // marker is an object with additional data about the pin for a single location
        var marker = new google.maps.Marker({
            map: map,
            position: placeData.geometry.location,
            title: name
        });

        // infoWindows are the little helper windows that open when you click
        // or hover over a pin on a map. They usually contain more information
        // about a location.
        var infoWindow = new google.maps.InfoWindow({
            content: name
        });

        // hmmmm, I wonder what this is about...
        google.maps.event.addListener(marker, 'click', function() {
            // your code goes here!
        });

        // this is where the pin actually gets added to the map.
        // bounds.extend() takes in a map location object
        bounds.extend(new google.maps.LatLng(lat, lon));
        // fit the map to the new marker
        map.fitBounds(bounds);
        // center the map
        map.setCenter(bounds.getCenter());
    }

    /*
    callback(results, status) makes sure the search returned results for a location.
    If so, it creates a new map marker for that location.
    */
    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            createMapMarker(results[0]);
        }
    }

    /*
    pinPoster(locations) takes in the array of locations created by locationFinder()
    and fires off Google place searches for each location
    */
    function pinPoster(locations) {

        // creates a Google place search service object. PlacesService does the work of
        // actually searching for location data.
        var service = new google.maps.places.PlacesService(map);

        // Iterates through the array of locations, creates a search object for each location
        locations.forEach(function(place) {
            // the search request object
            var request = {
                query: place
            };

            // Actually searches the Google Maps API for location data and runs the callback
            // function with the search results after each search.
            service.textSearch(request, callback);
        });
    }

    // Sets the boundaries of the map based on pin locations
    window.mapBounds = new google.maps.LatLngBounds();

    // locations is an array of location strings returned from locationFinder()
    locations = locationFinder();

    // pinPoster(locations) creates pins on the map for each location in
    // the locations array
    pinPoster(locations);

}

/*
Uncomment the code below when you're ready to implement a Google Map!
*/

// Calls the initializeMap() function when the page loads
window.addEventListener('load', initializeMap);

// Vanilla JS way to listen for resizing of the window
// and adjust map bounds
window.addEventListener('resize', function(e) {
    //Make sure the map bounds get updated on page resize
    map.fitBounds(mapBounds);
});