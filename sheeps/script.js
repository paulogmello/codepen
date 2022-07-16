import animejs from "https://cdn.skypack.dev/animejs@3.2.1";
import $ from "https://cdn.skypack.dev/jquery@3.6.0";

//CONTADOR//
let n = 0;
let btn = document.getElementById("btn");
let disp = document.getElementById("display");

btn.onclick = function () {
  n++;
  disp.innerHTML = n;
  buttonanim.restart();
  numberanim.restart();
  ovelhaanim.restart();
};

//ANIMAÇÕES//
let buttonanim = animejs({
  targets: "#btn",
  autoplay: false,
  direction: "alternate",
  scale: 1.2,
  rotate: 5,
  duration: 400
});

let ovelhaanim = animejs({
  targets: ".ovelha",
  autoplay: false,
  direction: "alternate",
  translateY: -350,
  easing: "easeOutQuint",
  duration: 600
});

let numberanim = animejs({
  targets: "#display",
  autoplay: false,
  scale: 1.2
});