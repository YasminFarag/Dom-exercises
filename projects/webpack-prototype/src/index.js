import {apiKey} from './token.js';

let button = document.querySelector('#btn')
button.addEventListener('click', ()=>{
  let city= document.querySelector('.inpt').value;
  let value = apiKey
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${value}&units=metric`
  fetch(url)
  .then(function(resp) { return resp.json() })
.then(function(data) {
  weatherdemo(data);
  console.log(data.main.temp)
})
.catch(error =>{
  console.log(error);
  

})

});

function weatherdemo(serverRequest){

  switch(serverRequest.weather[0].main){

    case 'Clear':
    document.body.style.backgroundImage= 'url("./src/sunny.jpeg")';
    styling();
    
    break;

    case 'Clouds':
    document.body.style.backgroundImage= 'url("./src/clouds.jpeg")';
    styling();
    
    break;

    case 'Rain':
    case 'Drizzle':
    case 'Mist':
    document.body.style.backgroundImage= 'url("./src/cloudy.jpeg")';
    styling();
    break;

    case 'thunderstorm':
    document.body.style.backgroundImage= 'url("./src/lightning.jpg")';
    styling()
    break;

    case 'Snow':
    document.body.style.backgroundImage= 'url("./src/snowy.jpg")';
    styling();

    break;
    default:
  }
console.log(serverRequest);


let cityName= document.querySelector('#cityname')
let weatherDescription= document.querySelector('#weatherdescription')
let humidity= document.querySelector('#humidty');
let tempreature= document.querySelector('#tempreature');
let wind= document.querySelector('#wind');
 let image = document.querySelector('.img')

// print city name
cityName.innerHTML=serverRequest.name


// weather description
let result = serverRequest.weather[0].description
weatherDescription.innerText= result;


tempreature.innerHTML=Math.floor
(serverRequest.main.temp) ;


// Fahrenheit
let temp = document.querySelector('#farenheit');
      temp.innerHTML= Math.round(((parseFloat(serverRequest.main.temp)-273.15)*1.8)+32) + '&#x2109;'; 



humidity.innerHTML= 'Humidity: ' +  Math.floor(serverRequest.main.humidity) + ' % '

wind.innerHTML= 'Wind : ' + Math.floor(serverRequest.wind.speed) + ' km/hr'

image.src= `http://openweathermap.org/img/wn/${serverRequest.weather[0].icon}@2x.png` 


 
/* let fhButton= document.querySelector('.f');
    fhButton.addEventListener('click', ()=>{
  temp.innerHTML = Math.round(((parseFloat(temp.innerHTML)-273.15)*1.8)+32); 
}); */
 


 let hidden= document.querySelector('.hidden');
 hidden.classList.toggle('hidden')

 // date

 
 let today= new Date();
 let newDate= today.getDate()
 let weekDays= ["Sun", "Mon", "Tue", "Wed", 'Thur', 'Fri','Sat']
let getDay= weekDays[today.getDay()] 

// Month

let months = ["jan", "feb", "mar", "apr", "May", 'June', 'July', 'August', 'September', 'November', 'December'];
let getMonth= months[today.getMonth()]


// year
let year = today.getFullYear();

console.log(`${getDay} ${getMonth} ${year}`);


// to print "st, nd ,rd and th in date"


function format(num){
  if(num >3 & num < 21)
    return 'th'
  
  switch(num % 10){
    case 1 :
    return 'st';
    case 2 :
    return 'nd';
    case 3 :
    return 'rd';
    default:
    return 'th'
  
  }
 
}
let date = document.querySelector('#date');
 date.innerHTML= getDay + ' ' +  newDate + format(newDate) + ' ' + getMonth+ ' ' + 

 today.getFullYear();

 
};  

function styling(){

  let line = document.querySelector('#line');
  
 
  let container= document.querySelector('#container') ;
    line.innerHTML='';
    container.style.backgroundColor= 'grey';
    container.style.width= '300px';
    container.style.height= 'max-content';
    container.style.opacity= '0.8';
    container.style.marginLeft= '520px';
    container.style.paddingTop= '30px';
    container.style.color= 'whitesmoke';
    container.style.borderRadius= '10%';


 
    line.innerHTML= '<hr>';
};


