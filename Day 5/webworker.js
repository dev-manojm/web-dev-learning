var i = 0;
function count() {
  if (i < 1000) {
    i = i + 1;
    postMessage(i);
  }
  setTimeout("count()", 500);
}
count();
