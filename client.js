$(document).ready(function(){

var longitude, latitude;
var kelvin, farheneit, celcius;
var windSpeed, weatherType, city;
var flag = true;



if(navigator.geolocation){

  navigator.geolocation.getCurrentPosition(function(position){
    longitude = position.coords.longitude;
    latitude = position.coords.latitude;

    // $("#p1").html("latitude :" + position.coords.latitude + "<br/>longitude: " + position.coords.longitude);
    // console.log("current position", position);
    console.log(" current latitude: ",position.coords.latitude);
    console.log("current longitude: ",position.coords.longitude);





var url= 'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&appid=c9a7cc96b9778b3b93b658601622b71f';

  $.getJSON(url, function(data){
  console.log("url data", data);
  console.log("latitude: ",data.coord.lat);
  console.log("longitude: ",data.coord.lon);


  city =  data.name;
  kelvin = data.main.temp;
  farheneit = ((kelvin)*(9/5)-459.67).toFixed(1);
  celcius = (kelvin - 273).toFixed(1);
  weatherType =  data.weather[0].description;
  windSpeed = (data.wind.speed).toFixed(1);


  console.log(url);
  console.log(data.name); // name of the city
  console.log(data.weather[0].main); // clouds, overcast etc.
  console.log(data.main.temp); // temperature in kelvin


  $("#city").html(city);
  $("#farheneit").html(farheneit + "&#8457");
  $("#celcius").html(celcius + "&#8451");
  $("#weatherType").html(weatherType);
  $("#windSpeed").html(windSpeed + "m/s");


});
});

}


// clicking on the farheneit shall change the value between celcius and farheneit.
  $("#farheneit").click(function(){
    if(flag === false){
      $("#farheneit").html(farheneit + "&#8457");
      flag = true;
    } else{

      $("#farheneit").html(celcius + "&#8451");
      flag = false;
    }

  });




// $("#button1").on("click", function(){
//   getWeather();
// });




});
