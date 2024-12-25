const City = document.getElementById("city1");
const dateElement = document.getElementById("date1"); // 
const temp = document.getElementById("temp1");
const time = document.getElementById("time1");
const cityInput = document.getElementById("city-input");
const Humidity = document.getElementById("humidity1");
const Pressure = document.getElementById("pressure1");
const Feelslike = document.getElementById("feelslike1");
const UVIndex = document.getElementById("UVIndex1");
const Visibility = document.getElementById("Visibility1");
const Dew = document.getElementById("dew1");


async function getweatherdata() {
  const userCityInput = cityInput.value;
  if (!userCityInput) {
    alert("Enter City");
    return;
  }

  const dateObject = new Date();
  const year = dateObject.getFullYear(); // e.g., 2024
  const month = dateObject.getMonth() + 1; // e.g., 12
  const todaysdate = dateObject.getDate(); // e.g., 01

  try {
    const data = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${userCityInput}/${year}-${month}-${todaysdate}?key=UYHMPVGP4MTZKXZUHM65LDGFF`
    );
    const obj = await data.json();

    console.log(obj); // Debugging: Log the response

    // Update the DOM with weather data
    City.innerText = `${obj.resolvedAddress}`;
    dateElement.innerText = obj.days[0].datetime; // Updated to use dateElement
    time.innerText = obj.currentConditions.datetime;
    temp.innerText = `${obj.currentConditions.temp}\u00B0c`;
    Humidity.innerText = `${obj.currentConditions.humidity}`;
    Pressure.innerText = `${obj.currentConditions.pressure}`;
     Feelslike.innerText = `${obj.currentConditions.feelslike}`;
      UVIndex.innerText = `${obj.currentConditions.uvindex}`;
      Visibility.innerText = `${obj.currentConditions.visibility}`;  
       Dew.innerText = `${obj.currentConditions.dew}`;
  } catch (error) {
    console.error(error);
 }
}
