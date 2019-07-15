import {apiKey} from "./token";

let unit= 'celsius'; // present which unit either metric or imperial
let searchMethod; // represents either zip code or queue 




function searchWeather(term) {
 let key = apiKey;
  fetch(`https://api.openweathermap.org/data/2.5/weather?${searchMethod}=${term}&APPID=${key}`)  
  .then(result=> { return result.json() }) // Convert data to json
  .then(result => {
    init(result); // calling the result from the server 
  })
  .catch(function(error) {
    // catch any errors
    console.log(error);
    
  });

}
searchWeather()

function init(serverResult){
  
  switch(serverResult.weather[0].main){

    case 'Clouds':
    document.body.style.backgroundImage = 'url("clouds-cloudporn-weather-lookup-158163.jpeg")'
    break;
  }

}
 

let button= document.querySelector('.container').addEventListener('click',()=>{
  let search = document.querySelector('.inpt').value  

});

