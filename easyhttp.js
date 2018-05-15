function easyHTTP() {
  this.http = new XMLHttpRequest(); 
}

// make an Http get request
easyHTTP.prototype.get = function(url) {
  this.http.open('GET', url, true);
  
  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
    return  self.http.responseText;
    }
  };
  
  this.http.send();
}

// make an Http post request


// make an Http put request

// make an Http del request