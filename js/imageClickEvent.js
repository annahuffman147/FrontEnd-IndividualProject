
$(document).ready(function(){
  $('#clothesImages').on('click', function(event){
    console.log(true);
    // var temperature = data.query.results.channel.item.condition.temp;
    console.log($("#temperature").text());
  });
  $('#clothesImages').on('click', '.gloves', function(event){
    console.log('gloves');
    var temperature = $("#temperature").text()
    if (temperature <= 60){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag);
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.winterHat', function(event){
    console.log('winterHat');
    var temperature = $("#temperature").text()
    if (temperature <= 60){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.hoodie', function(event){
    console.log('hoodie');
    var temperature = $("#temperature").text()
    if (temperature <= 70){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag )
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.boots', function(event){
    console.log('boots');
    var temperature = $("#temperature").text()
    if (temperature <= 60){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag )
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.mittens', function(event){
    console.log('mittens');
    var temperature = $("#temperature").text()
    if (temperature <= 60){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.scarf', function(event){
    console.log('scarf');
    var temperature = $("#temperature").text()
    if (temperature <= 60){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.longPants', function(event){
    console.log('longPants');
    var temperature = $("#temperature").text()
    if (temperature <= 70){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.longSleeveShirt', function(event){
    console.log('longSleeveShirt');
    var temperature = $("#temperature").text()
    if (temperature < 65){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.shortSleeveTshirt', function(event){
    console.log('shortSleeveTshirt');
    var temperature = $("#temperature").text()
    if (temperature >= 65){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.shorts', function(event){
    console.log('shorts');
    var temperature = $("#temperature").text()
    if (temperature > 70){
      $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
    }
    else {
      $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
    }
  });
  $('#clothesImages').on('click', '.sunglasses', function(event){
    console.log('sunglasses');
      $(this).html('Sunglasses are always a good idea during the day.').html(clickEventImg[0].imageTag)
  });
  //
  //
  // $('#clothesImages').on('click', '.rainBoots', function(event){
  //   console.log(rainBoots);
  //   var skies = data.query.results.channel.item.condition.text
  //   if (indexof TRUE){
  //     $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
  //   }
  //   else {
  //     $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
  //   }
  // });
  // $('#clothesImages').on('click', 'baseballHat', function(event){
  //   console.log(baseballHat);
  //   var skies = data.query.results.channel.item.condition.text
  //   if (indexof NOT){
  //     $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
  //   }
  //   else {
  //     $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
  //   }
  // });
  // $('#clothesImages').on('click', '.rainBoots', function(event){
  //   console.log(rainBoots);
  //   var skies = data.query.results.channel.item.condition.text
  //   if (indexof NOT){
  //     $(this).html(clickEventImg[0].Response).html(clickEventImg[0].imageTag)
  //   }
  //   else {
  //     $(this).html(clickEventImg[1].imageTag).html(clickEventImg[1].Response)
  //   }
  // });
});
