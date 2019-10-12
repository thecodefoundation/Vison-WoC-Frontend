// Function to set the location data to an element
// with id #location.
// FORMAT: {city}, {region}, {country_code}
function setLocationDisplay(content) {
  document.getElementById("location").innerHTML = content;
}

// Function to get the geo-location data.
function getLocationData() {
  // Perform GET request to ifify.org to get Client's IP address.
  var ipify_request = new XMLHttpRequest();
  ipify_request.open("GET", "https://api.ipify.org", true);

  ipify_request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
      ip = this.response;

      // Perform GET request to ip-api.com to get Client's Geo-Location
      // based on IP address.
      var ip_api_request = new XMLHttpRequest();
      ip_api_request.open("GET", "http://ip-api.com/json/" + ip, true);

      ip_api_request.onload = function() {
        if (this.status >= 200 && this.status < 400) {
          var data = JSON.parse(this.response);
          var region = data.regionName;
          var countryCode = data.countryCode;
          var location = region + ", " + countryCode;

          setLocationDisplay(location);
        } else {
          setLocationDisplay("N/A");
        }
      };

      ip_api_request.onerror = function() {
        setLocationDisplay("N/A");
      };

      ip_api_request.send();
    } else {
      setLocationDisplay("N/A");
    }
  };

  ipify_request.onerror = function() {
    setLocationDisplay("N/A");
  };

  ipify_request.send();
}

// Make sure DOM is fully loaded before executing this script.
document.addEventListener("DOMContentLoaded", function(event) {
  getLocationData();
});
