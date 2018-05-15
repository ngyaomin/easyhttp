function easyHTTP() {
  this.http = new XMLHttpRequest(); 
}

// make an Http get request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);
  
  this.Http.onload = function() {
    if(this.http.status === 200) {
      console.log(this.http.responseText);
    }
  };
  
  this.http.send();
}

// make an Http post request


// make an Http put request

// make an Http del request