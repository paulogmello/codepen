import $ from "https://cdn.skypack.dev/jquery@3.6.0";
import animejs from "https://cdn.skypack.dev/animejs@3.2.1";

let btn = document.getElementById("strange");

btn.onclick = function () {
  abrir.play();
  aberto.play();
  local.play();
  second.play();
};

let abrir = animejs({
  targets: "#openportal",
  autoplay: false,
  keyframes: [{ opacity: 1 }, { opacity: 0, delay: 1500 }]
});

let aberto = animejs({
  targets: "#portalopened",
  autoplay: false,
  delay: 1800,
  keyframes: [
    {
      opacity: 1
    }
  ]
});
let local = animejs({
  targets: "#local",
  autoplay: false,
  opacity: 1,
  easing: "easeOutQuad",
  delay: 2000,
  update: function () {
    $("#local").attr("src", "https://picsum.photos/200");
  }
});

let second = animejs({
  targets: "button",
  autoplay: false,
  opacity: 0,
  delay: 1000,
  duration: 500,
  easing: "easeInQuad"
});