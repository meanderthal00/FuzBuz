// ========================SCRIPTS FOR FACE DOODLE================================

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
//  console.log("i am 1");
var painting = document.getElementById('paint');
// console.log("i am 2");
var paint_style = getComputedStyle(painting);
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));
// console.log("I am 3");
var mouse = {x: 0, y:-50};
 
canvas.addEventListener('mousemove', function(e) {
    // console.log("mouse move ");
//   mouse.x = e.pageX + $(this).offset().left - $(this).position().left;
mouse.x = e.pageX  -  $(this).offset().left
// console.log("pageX " +e.pageX);
//   mouse.y = e.pageY + $(this).offset().top - $(this).position().top;
mouse.y = e.pageY - $(this).offset().top
//   console.log("pageY " + e.pageY);
}, false);

ctx.lineWidth = 10;
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.strokeStyle = '#564706';
 
canvas.addEventListener('mousedown', function(e) {
    ctx.beginPath();
    ctx.moveTo(mouse.x, mouse.y);
 
    canvas.addEventListener('mousemove', onPaint, false);
}, false);
 
canvas.addEventListener('mouseup', function() {
    canvas.removeEventListener('mousemove', onPaint, false);
}, false);
 
var onPaint = function() {
    ctx.lineTo(mouse.x, mouse.y);
    ctx.stroke();
};

// clear canvas button
var canvas = document.getElementById('myCanvas');
      var context = canvas.getContext('2d');

document.getElementById('clear-canvas').addEventListener('click', function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  }, false);

// ========================END OF FACE DOODLE SCRIPTS=========================