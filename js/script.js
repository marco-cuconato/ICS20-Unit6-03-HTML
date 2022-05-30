/* Created by: Marco Cuconato
   Created on: April 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) { 
  navigator.serviceWorker.register("/ICS20-Unit6-03-HTML/sw.js", {
    scope: "/ICS20-Unit6-03-HTML/",
  })
}

/**
 * Finds the temperature using an API.
 */
 const getTemperature = async (URL) => {
  try {
    const result = await fetch(URL)
    const jsonData = await result.json()
    console.log(jsonData)
    const temperature = jsonData.main.temp - 273.15
    const feeling = jsonData.weather[0]
    const image = feeling.icon
    document.getElementById("current-weather").innerHTML = "<h5>The current weather is " + temperature.toFixed(0) + "°C</h5>"
    document.getElementById("api-image").innerHTML = "<img src='http://openweathermap.org/img/wn/" + image + "@2x.png' alt='Weather Icon' width='10%'>"
  } catch (error) {
    console.log(error)
    document.getElementById("current-weather").innerHTML = "An error occured"
  }
}

getTemperature("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")