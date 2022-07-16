import animejs from "https://cdn.skypack.dev/animejs@3.2.1";
import $ from "https://cdn.skypack.dev/jquery@3.6.0";
// PEÇAS
// TORRES
$("#h1, #a1").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/torre2.png" />'
);
$("#h8, #a8").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/torre1.png" />'
);
// CAVALOS
$("#g1, #b1").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/cavalo2.png" />'
);
$("#g8, #b8").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/cavalo1.png" />'
);
// BISPOS
$("#f1, #c1").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/bispo2.png" />'
);
$("#f8, #c8").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/bispo1.png" />'
);
// RAINHAS
$("#d1").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/rainha2.png" />'
);
$("#d8").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/rainha1.png" />'
);
// REIS
$("#e1").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/rei2.png" />'
);
$("#e8").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/rei1.png" />'
);

// PEOES

$("#a2, #b2, #c2, #d2, #e2, #f2, #g2, #h2").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/pawn2.png" />'
);
$("#a7, #b7, #c7, #d7, #e7, #f7, #g7, #h7").prepend(
  '<img id="torre" src="https://paulogmello.com/assets/files/pawn1.png" />'
);

// Animations

let start = animejs.timeline({
  easing: "easeOutSine",
  duration: 500
  // autoplay: false
});
start
  .add({
    targets: "#e2 img",
    translateY: -80
  })
  .add({
    targets: "#e7 img",
    translateY: 80
  })
  .add({
    targets: "#f1 img",
    translateY: -120,
    translateX: -120
  })
  .add({
    targets: "#b8 img",
    keyframes: [{ translateY: 80 }, { translateX: 40 }]
  })
  .add({
    targets: "#d1 img",
    translateY: -160,
    translateX: 160
  })
  .add({
    targets: "#g8 img",
    keyframes: [{ translateY: 80 }, { translateX: -40 }]
  })
  .add({
    targets: "#d1 img",
    translateY: -240,
    translateX: 80
  })
  .add({
    targets: "#f7 img",
    opacity: 0,
    duration: 100
  })
  .add({
    targets: "#e8, #f7",
    backgroundColor: "#FFFF07",
    duration: 100
  });

document.querySelector("#start").onclick = start.restart;