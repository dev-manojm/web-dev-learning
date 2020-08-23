function playpause() {
  if (vd.pause()) {
    vd.play();
  } else {
    vd.pause();
  }
}
var vd = document.getElementById("vid");

function makesmall() {
  vd.width = 240;
}
function makenormal() {
  vd.width = 320;
}
function makebig() {
  vd.width = 640;
}
