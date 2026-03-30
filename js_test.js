const search_word = "Arcata"



const request_url = `https://api.mapbox.com/search/geocode/v6/forward?q=${search_word}&access_token=pk.eyJ1IjoidGFubmVybTQyOSIsImEiOiJjbTd6OXNzcmswaDFnMmpvamZwZmNwMmdxIn0.2XdzpVErWz9BA-Y3U9uBJg`
geojson2 = 'default';

fetch(request_url)
  .then(function(response) {
    // The response is a Response instance.
    // You parse the data into a useable format using `.json()`
    return response.json();
  }).then(function(data) {
    // `data` is the parsed version of the JSON returned from the above endpoint.
    console.log(data);  // { "userId": 1, "id": 1, "title": "...", "body": "..." }
  });
/*
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('Error:', error);
});
*/
console.log(geojson2);