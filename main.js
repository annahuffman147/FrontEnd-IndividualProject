
//document ready
//event listener
$(document).ready(function(){
  $('#submit').on('click', function(event){
    event.preventDefault();
    city = $('#city').val();
    state = $('#state').val();
    AJAX(city, state)
  })
});

function AJAX(city, state){
  var weatherURL = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22' + city + '%2C%20' + state +  '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys'
  $.get(weatherURL, function(weatherYahoo){
    display(weatherYahoo)
    console.log(weatherYahoo)
  })
}
function display(weatherYahoo) {
  displayTemp(weatherYahoo)
  displaySkies(weatherYahoo)
}

function displayTemp(data){
  var temperature = data.query.results.channel.item.condition.temp
  $('#temperature').text(temperature)
};
function displaySkies(data){
  var skies = data.query.results.channel.item.condition.text
  $('#skies').text(skies)
}



AJAX('denver', 'co')
