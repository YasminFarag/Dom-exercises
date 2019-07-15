import {apiKey} from "./token";



let button= document.querySelector('#btn').addEventListener('click',()=>{

// function weatherBalloon() {
  var key = apiKey;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=Berlin&APPID=${key}`)  
  .then(function(resp) { return resp.json() }) // Convert data to json
  .then(function(data) {
    console.log(data);
  })
  .catch(function(error) {
    // catch any errors
    console.log(error);
    
  });
});

//weatherBalloon()






/* import createBanner from "./banner.js";

import WebpackImg from "./webpack-logo.png"; */


/* const createElement = message => {
  const element = document.createElement("div");
  element.innerHTML = message;
  return element;
};

const createImage = image => {
  const element = document.createElement("div");
  const imageElement = new Image();
  imageElement.src = image;
  element.appendChild(imageElement);
  return element;
};

document.body.appendChild(
  createElement("Welcome to The weather App.")
);

document.body.appendChild(createBanner());
document.body.appendChild(createImage(WebpackImg)); */


