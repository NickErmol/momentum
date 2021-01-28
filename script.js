// DOM Elements
const time = document.querySelector('.time'),
timeHours = document.querySelector('.timeHours'),
timeMinutes = document.querySelector('.timeMinutes'),
timeSeconds = document.querySelector('.timeSeconds'),
  dateInfo = document.querySelector('.date'),
  greeting = document.querySelector('.greeting'),
  name = document.querySelector('.name'),
  focus = document.querySelector('.focus');

//Weather
const weatherIcon = document.querySelector('.weather-icon'),
  temperature = document.querySelector('.temperature'),
  weatherDescription = document.querySelector('.weather-description'),
  city = document.querySelector('.city'),
  humidity = document.querySelector('.humidity'),
  windSpeed = document.querySelector('.windSpeed');

  //Quote
const blockquote = document.querySelector('blockquote'),
  figcaption = document.querySelector('figcaption'),
  btnChangeQuote = document.querySelector('#btnChangeQuote');

  //Background
const base = 'https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/',
  images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg', '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg', '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg', '17.jpg', '18.jpg', '19.jpg', '20.jpg'];
  imagesSrcArr = [];

const btnChangeBGNext = document.querySelector('.btnNext'),
btnChangeBGPrev = document.querySelector('.btnPrev');
let currentHour = getCurrentHour();


// Options
const showAmPm = true;

// Show Time
function showDateAndTime() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds(),
    date = today.getDate(),
    day = days[today.getDay()],
    month = months[today.getMonth()];

  dateInfo.innerHTML = `${day}<span>,</span> ${date}<span> </span>${month}`;
  timeHours.innerHTML = `  ${hour}<span>:</span>`;
  timeMinutes.innerHTML = `  ${addZero(min)}<span>:</span>`;
  timeSeconds.innerHTML = `${addZero(sec)}`;
  setTimeout(showDateAndTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

function getCurrentHour() {
  let date = new Date();
  return date.getHours();
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour > 6 && hour <= 12) {
    // Morning
    greeting.textContent = 'Good Morning, ';
  } else if (hour > 12 && hour <= 18) {
    // Afternoon
    greeting.textContent = 'Good Afternoon, ';
  } else if (hour > 18 && hour <= 24) {
    // Evening
    greeting.textContent = 'Good Evening, ';
  } else {
    // Night
    greeting.textContent = 'Good Night, ';
    document.body.style.color = 'white';
  }
}

function getName() {
  if (localStorage.getItem('userName') === null) {
    name.textContent = '[Enter your name]';
    localStorage.setItem('userName', '[Enter your name]');
  } else {
    name.textContent = localStorage.getItem('userName');
  }
}

function setName(event) {
  if (event.type === 'keypress') {
    if (event.which == 13 || event.keyCode == 13) {
      if (event.target.innerText.trim() === '') {
        event.preventDefault();
        name.textContent = localStorage.getItem('userName');
      } else {
        localStorage.setItem('userName', event.target.innerText);
        name.blur();
      }
    }
  } else {
    if (event.target.innerText.trim() === '') {
      name.textContent = localStorage.getItem('userName');
    } else {
      localStorage.setItem('userName', event.target.innerText);
      name.blur();
    }
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
    localStorage.setItem('focus', '[Enter Focus]');
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if (e.target.innerText.trim() === '') {
        e.preventDefault();
        focus.textContent = localStorage.getItem('focus');
      } else {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    }
  } else {
    if (e.target.innerText.trim() === '') {
      focus.textContent = localStorage.getItem('focus');
    } else {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  }
}

//Get City
function getCity(e) {
  if (localStorage.getItem("city") === null) {
    city.textContent = "[Enter your city]";
    localStorage.setItem('city', '[Enter your city]');
  } else {
    city.textContent = localStorage.getItem("city");
  }
}
// str.match(/^[a-zA-Z ]+$/) 
// Set City
function setCity(e) {
  if (e.type === 'keypress') {
    if ((e.which == 13 || e.keyCode == 13)) {
      if (e.target.innerText.trim() === '') {
        e.preventDefault();
        city.textContent = localStorage.getItem('city');
      } else {
        localStorage.setItem('city', e.target.innerText);
        city.blur();
      }
    }
  } else {
    if (e.target.innerText.trim() === '') {
      city.textContent = localStorage.getItem('city');
    } else {
      localStorage.setItem('city', e.target.innerText);
      city.blur();
    }
    
    getWeather();
  }
  
}

name.addEventListener('keypress', setName);
name.addEventListener('click', (event) => {
  event.target.innerText = '';
  name.focus();
});
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', (event) => {
  event.target.innerText = '';
  focus.focus();
});
document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);
city.addEventListener('blur', setCity);
city.addEventListener('click', (event) => {
  event.target.innerText = '';
  city.focus();
});
document.addEventListener('DOMContentLoaded', getQuote);
btnChangeQuote.addEventListener('click', getQuote);
btnChangeQuote.addEventListener('click', () => {
  
});

btnChangeBGNext.addEventListener('click', () => { 
  if (currentHour === 23) {
  currentHour = 0;
} else currentHour++;
  });
btnChangeBGPrev.addEventListener('click', () => { 
  if (currentHour === 0) {
  currentHour = 23;
} else currentHour--;
  });

btnChangeBGNext.addEventListener('click', getImage);
btnChangeBGPrev.addEventListener('click', getImage);

let weatherData,weatherUrl;
async function getWeather() {

  if (!city.textContent.trim()) {
    city.textContent = '[Enter your city]';
    return;
  }
  if (city.textContent.trim() !== '[Enter your city]') {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=00542faab82e3605539b4e0179d4e5f0&units=metric`);
  if (!(response.ok)) {
    alert('Try to choose city again, please.');
    localStorage.setItem('city', '[Enter your city]');
    city.textContent = '[Enter your city]';
    document.querySelector(".weather-data-container").style.display = 'none'
  } else {
    document.querySelector(".weather-data-container").style.display = 'block'
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=00542faab82e3605539b4e0179d4e5f0&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    weatherData = data;
    weatherUrl = url;
  
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    humidity.textContent = `Humidity: ${data.main.humidity.toFixed(0)}%`;
    windSpeed.textContent = `Wind speed: ${data.wind.speed.toFixed(0)}m/s`;
    weatherDescription.textContent = data.weather[0].description;
   }
  }


}

async function getQuote() {  
  const url = `https://api.quotable.io/random`;
  const res = await fetch(url);
  const data = await res.json(); 
  if (data.content.length > 90){
    getQuote();
    
  } else {
    blockquote.textContent = data.content;
  figcaption.textContent = data.author;
  }
  

}

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');
  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src}),url(https://raw.githubusercontent.com/irinainina/ready-projects/momentum/momentum/assets/images/overlay.png)`;
  }; 
}

 function setImage() {
  let i = Math.floor(Math.random() * 20) + 1;
  let index = i % images.length
  for (i = 1; i < 25; i++) {
    if ( index === 19) index = 0;
    if (i > 6 && i <= 12) {
      imagesSrcArr.push(`${base}morning/${images[index]}`);
    } else if (i > 12 && i <= 18) {
      imagesSrcArr.push(`${base}day/${images[index]}`);
    } else if (i > 18 && i <= 24) {
      imagesSrcArr.push(`${base}evening/${images[index]}`);
    } else {
      imagesSrcArr.push(`${base}night/${images[index]}`);
    }index++;
  }
}

 function getImage() {
  const imageSrc = imagesSrcArr[currentHour]; 
  viewBgImage(imageSrc);
  btnChangeBGPrev.disabled = true; 
  btnChangeBGNext.disabled = true;
  setTimeout(function() { btnChangeBGPrev.disabled = false;
    btnChangeBGNext.disabled = false }, 1000);
  
} 

function changeBGEveryHour() {
  const nextAlert = new Date();
  nextAlert.setHours(nextAlert.getHours() + 1);
  nextAlert.setMinutes(0);
  nextAlert.setSeconds(0);
  nextAlert.setMilliseconds(0);

  let timeToNextAlert = nextAlert - new Date();

  setTimeout(function() {
    currentHour = getCurrentHour(); 
    getImage();

    changeBGEveryHour();
  }, timeToNextAlert);    
}

// Run
changeBGEveryHour();
setImage();
getWeather();
showDateAndTime();
setBgGreet();
getCity();
getName();
getFocus();
getImage();