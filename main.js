//Hide and Show

$("#homepage").show();
$("#catering").hide();
$("#menu").hide();
$("#about").hide();

$(".home").click(function(){
  $("#homepage").show();
  $("#catering").hide();
  $("#menu").hide();
  $("#about").hide();
});

$(".cater").click(function(){
  $("#homepage").hide();
  $("#catering").show();
  $("#menu").hide();
  $("#about").hide();
  console.log ("I'm here.");
});

$(".menu").click(function(){
  $("#homepage").hide();
  $("#catering").hide();
  $("#menu").show();
  $("#about").hide();
});
$(".about").click(function(){
  $("#homepage").hide();
  $("#catering").hide();
  $("#menu").hide();
  $("#about").show();
});


