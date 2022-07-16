import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import animejs from "https://cdn.skypack.dev/animejs@3.2.1";

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
  output.innerHTML = this.value;
  $(".darkside").css("width", this.value * 6 + "px");
  $(".lightside").css("width", this.value * 6 * -1 + "px");
  if (this.value >= 2) {
    $(".darkside").css("box-shadow", "0px 0px 10px 5px red");
  } else {
    $(".darkside").css("box-shadow", "none");
  }
  if (this.value <= -2) {
    $(".lightside").css("box-shadow", "0px 0px 10px 5px blue");
  } else {
    $(".lightside").css("box-shadow", "none");
  }
};