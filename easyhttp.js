function easyHTTP() {
  this.http = new XMLHttpRequest(); 
}

// make an Http get request
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  
  let self = this;
  this.http.onload = function() {
    if(self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error: ' + self.http.status);
    }
  };
  
  this.http.send();
}

// make an Http post request
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  
  let self = this;
  this.http.onload = function() {
    callback(null, self.http.responseText);
  };
  
  this.send(JSON.stringify(data));
}

// make an Http put request

// make an Http del request