fetch("https://api.giphy.com/v1/gifs/random?api_key=YOUR KEY HERE&tag=artificial+intelligence&rating=g")
    

.then(function(response){
    if (response.status == 200){
        return response.json();
    }
    
    else{
        console.log("Whoops! Error!");
    }

})
.then(function(jsonData){
    console.log(jsonData);
    var gifUrl = jsonData.data.images.original.url;
    console.log(gifUrl);
    var gifImg = document.createElement("Img");
    gifImg.setAttribute("src", gifUrl);
    document.body.appendChild(gifImg);
    var gifTitle = jsonData.data.title;
    var caption = document.createElement("H3", gifTitle);
    caption.innerHTML = gifTitle;
    document.body.appendChild(caption);

})
.catch(function(error){
    console.log("There was an error", error);
})
