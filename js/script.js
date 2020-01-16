fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=0aQk19tdETuiM8F0sa5NCmVwNGTHILMnPWp9lO0j")
.then(function(response){return response.json()})
.then(function(response) {
    
    rover = response;
    //console.log(rover.photos[i].img_src);

    let img = "";
    for (i = 0; i < rover.photos.length; i++){
        
        
        img += "<img src='" + rover.photos[i].img_src + "'>";
        document.getElementById("rover-image").innerHTML = img;
    }
    
})

.catch(function(response) {

  console.log('Error! Please try again');
});