var $ = function(id) {
  return document.getElementById(id);
}

function dog(mode) {
  if (mode=="feed") {
    var food = $('fd');
    var foodn = food.innerHTML;
    foodn = parseFloat(foodn);
    if (foodn<100) {
      foodn++;
    }
    food.innerHTML = foodn + "%";
  } else if (mode=="water") {
    var water = $('wtr');
    var watern = water.innerHTML;
    watern = parseFloat(watern);
    if (watern<100) {
      watern++;
    }
    water.innerHTML = watern + "%";
  } else if (mode=="sub") {
    var water = $('wtr');
    var watern = water.innerHTML;
    watern = parseFloat(watern);
    var food = $('fd');
    var foodn = food.innerHTML;
    foodn = parseFloat(foodn);
    if (foodn <= 0 || watern <= 0) {
      clearInterval(needs);
      alert("Your dog has passed away!");
      window.location = window.location;
    }
    foodn--;
    watern--;
    water.innerHTML = watern + "%";
    food.innerHTML = foodn + "%";
  }
}
var needs = setInterval(function() {dog("sub")}, 1000);