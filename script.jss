console.log('hi');

$(".container").hide();

var flint = 0;
$(".flint").click(function() {
  $(".container:not(#flint)").hide();
  if(flint == 0){
    $("#flint").slideDown();
    flint++;
    document.documentElement.scrollTop = 10000;
  } else{
    $(".container").hide();
    flint--;
    document.documentElement.scrollTop = 0;
  }
  
  deepWater = 0;
  pacific = 0;
  goldKing = 0;
});

var deepWater = 0;
$(".deepWater").click(function() {
  $(".container:not(#gulf)").hide();
  if(deepWater == 0){
    $("#gulf").slideDown();
    deepWater++;
    document.documentElement.scrollTop = 10000;
  } else{
    $(".container").hide();
    deepWater--;
    document.documentElement.scrollTop = 0;
  }
  
  flint = 0;
  pacific = 0;
  goldKing = 0;
});

var pacific = 0;
$(".pacific").click(function() {
  $(".container:not(#pacific)").hide();
  if(pacific == 0){
    $("#pacific").slideDown();
    pacific++;
    document.documentElement.scrollTop = 10000;
  } else{
    $(".container").hide();
    pacific--;
    document.documentElement.scrollTop = 0;
  }
  
  flint = 0;
  deepWater = 0;
  goldKing = 0;
});

var goldKing = 0;
$(".goldKing").click(function() {
  $(".container:not(#goldKing)").hide();
  if(goldKing == 0){
    $("#goldking").slideDown();
    goldKing++;
    document.documentElement.scrollTop = 10000;
  } else{
    $(".container").hide();
    goldKing = 0;
    document.documentElement.scrollTop = 0;
  }
  
  flint = 0;
  deepWater = 0;
  pacific = 0;
});

// $(".solutions").css(, green);
