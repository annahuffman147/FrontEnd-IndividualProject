//clothes will be an array of objects with the following defined: temp range, season, condition,


//document ready
//event listener
$(document).ready(function(){
  loadFromLocalStorage ();
  $('#submit').on('click', function(event){
    event.preventDefault();
    city = $('#city').val();
    state = $('#state').val();
    AJAX(city, state);
    checkToSave()
  })
});

function checkToSave () {
  debugger;
  if ($('#checkToSave').is(':checked')) {
    localStorage.setItem('city', $('#city').val());
    var city = localStorage.getItem('city')
      console.log(city)
    localStorage.setItem('state', $('#state').val())
    var state = localStorage.getItem('state')
      console.log(state)
  }
}

function loadFromLocalStorage () {
  $('#city').val(localStorage.getItem("city"))
  $('#state').val(localStorage.getItem("state"))
}

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
  displayDate(weatherYahoo)
  correctSeason(weatherYahoo)
  correctCondition(weatherYahoo)
  searchDescription(weatherYahoo)
  var copyClothes = Clothes.slice(0);
  displayClothes1(weatherYahoo)
  displayClothes2(weatherYahoo)
  displayClothes3(weatherYahoo)
  displayClothes4(weatherYahoo)
  displayClothes5(weatherYahoo)
  displayClothes6(weatherYahoo)
  Clothes = copyClothes.slice(0);
}

var rnd = Math.floor(Math.random() * Clothes.length)

function displayClothes1 () {
  var rnd = Math.floor(Math.random() * Clothes.length);
  $('#clothes1').html(Clothes[rnd].imageTag).addClass(Clothes[rnd].clothingName);
  Clothes.splice(rnd,1);
}
function displayClothes2 () {
  var rnd = Math.floor(Math.random() * Clothes.length);
  $('#clothes2').html(Clothes[rnd].imageTag).addClass(Clothes[rnd].clothingName);
  Clothes.splice(rnd,1);
}
function displayClothes3 () {
  var rnd = Math.floor(Math.random() * Clothes.length);
  $('#clothes3').html(Clothes[rnd].imageTag).addClass(Clothes[rnd].clothingName);
  Clothes.splice(rnd,1);
}
function displayClothes4 () {
  var rnd = Math.floor(Math.random() * Clothes.length);
  $('#clothes4').html(Clothes[rnd].imageTag).addClass(Clothes[rnd].clothingName);
  Clothes.splice(rnd,1);
}
function displayClothes5 () {
  var rnd = Math.floor(Math.random() * Clothes.length);
  $('#clothes5').html(Clothes[rnd].imageTag).addClass(Clothes[rnd].clothingName);
  Clothes.splice(rnd,1);
}
function displayClothes6 () {
  var rnd = Math.floor(Math.random() * Clothes.length);
  $('#clothes6').html(Clothes[rnd].imageTag).addClass(Clothes[rnd].clothingName);
  Clothes.splice(rnd,1);
}

function displayTemp(data){
  var temperature = data.query.results.channel.item.condition.temp
  $('#temperature').text(temperature)
  $('#largeTemp').text(temperature)
};
function displaySkies(data){
  // console.log(data);
  var skies = data.query.results.channel.item.condition.text
  $('#skies').text(skies)
  return skies
};

function correctCondition (data) {
  var imgData = data.query.results.channel.item.condition.text
  var splitCondition = imgData.split('/');
  console.log(splitCondition);
  return splitCondition
}
console.log(Conditions[5]);
console.log(arraylength);

function searchDescription (data){
  console.log(data)
  for (var i=0; i<arraylength; i++) {
    if (Conditions[i].description.toLowerCase() === displaySkies(data).toLowerCase()) {
      console.log(Conditions[i].imageTag);
      $('#conditionImage').html(Conditions[i].imageTag);
      return;
    }
  }
  console.log('Couldn\'t find');
}

var fullYear = (new Date().getFullYear())

function getFirstDayThisSpring (){
  var dateThisSpring = '20 March ' + fullYear + ' 00:00:00'
  var firstThisSpring = new Date(dateThisSpring);
  var n = firstThisSpring.valueOf();
  return n
};

function getFirstDaySummer (){
  var dateSummer = '20 June ' + fullYear + ' 00:00:00'
  var firstSummer = new Date(dateSummer);
  var n = firstSummer.valueOf();
  return n
};

function getFirstDayFall (){
  var dateFall = '23 September ' + fullYear
  var firstFall = new Date(dateFall);
  var n = firstFall.valueOf();
  return n
};

function getFirstDayWinter (){
  var dateWinter ='22 December ' + fullYear + ' 00:00:00'
  var firstWinter = new Date(dateWinter);
  var n = firstWinter.valueOf();
  return n
};

function getFirstDayNextSpring (){
  var nextYear = fullYear + 1
  var dateNextSpring = '20 March ' + nextYear + ' 00:00:00'
  var firstNextSpring = new Date(dateNextSpring);
  var n = firstNextSpring.valueOf();
  return n
};


var seasonFall = './images/fall.svg'
var seasonWinter = './images/winter.svg'
var seasonSummer = './images/summer.svg'
var seasonSpring = './images/spring.svg'

var seasonImg = [seasonSpring, seasonSummer, seasonFall, seasonWinter]

function displayDate(data) {
  var date = data.query.results.channel.item.condition.date
  console.log(date);
  $('#date').text(date)
};


function correctSeason (data) {
  var d = new Date();
  var numToday = d.valueOf();
  var numSpring = getFirstDayThisSpring();
  var numSummer = getFirstDaySummer();
  var numFall = getFirstDayFall();
  var numWinter = getFirstDayWinter();
  console.log(numToday);
  if (numToday >= numSpring && numToday < numSummer) {
    console.log('Spring');
    $('.Seasons').html('<img src="'+seasonImg[0]+'">');
  }
  else if (numToday >= numSummer && numToday < numFall) {
    console.log('Summer');
    $('.Seasons').html('<img src="'+seasonImg[1]+'">');
  }
  else if (numToday >= numFall && numToday < numWinter) {
    console.log('Fall');
    $('.Seasons').html('<img src="'+seasonImg[2]+'">');
  }
  else {
    console.log('Winter');
    $('.Seasons').html('<img src="'+seasonImg[3]+'">');
    }
  }
