const http = new easyHTTP;

// Get posts
http.get('https://jsonplaceholder.typicode.com/posts', 
function(posts) {
  console.log(posts );
});
