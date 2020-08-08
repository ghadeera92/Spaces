$(function() {

// Get Date
var date = new Date(),
year = date.getFullYear(),
month = date.getMonth(),
day = date.getUTCDate(),
months = [ "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

document.getElementById('daymonthyear').innerHTML = day + " " + months[month] + " " + year;

// Get Time
function addZero(i) {
// This checks to see if the number is below 10 and then prepends a '0' - clever shit :P
if (i < 10) {
    i = "0" + i;
}
return i;
}

function newTime() {
var d = new Date();
var h = addZero(d.getHours());
var m = addZero(d.getMinutes());
var s = addZero(d.getSeconds());
var x = document.getElementById("hourminutesecond");

x.innerHTML = h + " : " + m + " : " + s;
}

newTime();
setInterval(newTime, 1000);

const icons = {
    clear: '🌧',
    rain: '️🌧',
    storm: '⛈',
    snow: '🌨',
    mist: '🌫',
    clouds: '☁',
  };

  

//     //api of images
fetch(`https://source.unsplash.com/1600x900/?trees`).then((response) => {   
       
    document.body.style.backgroundImage = `url("${response.url}")`;
    document.body.style.backgroundRepeat= "no-repeat";
    document.body.style.backgroundSize = "cover"
    
  }).catch((error) => {
    console.log(error);
});


//api of weather
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=Jeddah&units=metric&APPID=28a2bd8eb9a1dd27589d6cdd509169e4`)
  .then((response) => response.json() )       
    .then((data) => {       
console.log(data)
    $('#weather').append(` ${data.main.temp}° `) 

  let weather;
 // console.log(res.data.weather)
 data.weather.forEach(element => {
      weather = element.main;
  });

  for(i in icons){
  //  console.log(i)
    if(i == weather.toLowerCase()){
       
      $('#weather').append(` ${(icons[i])}, ${data.name}`) 

    }
  }
  


  let date = new Date()
  let now = date.getHours();

  function displayGreeting() {
    if (now < 11) {
      return 'good morning';
    } if ( now > 17) {
      return 'good evening';
    } else {
      return 'good afternoon';
    }
  }
  
  document.getElementById('greeting').innerHTML = displayGreeting().toUpperCase();
  
}).catch((error) => {
    console.log(error);
});

fetch(`https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en`)
.then(response => response.json())
  .then(data => {

  console.log(data)
  $('#text').html(` "${data.quoteText}"`)
})
.catch((error) => {
  console.log(error);
});

})



