console.log("front end js connected");
// scripts for the face-doodle

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
 
var painting = document.getElementById('paint');
var paint_style = getComputedStyle(painting);
canvas.width = parseInt(paint_style.getPropertyValue('width'));
canvas.height = parseInt(paint_style.getPropertyValue('height'));

var mouse = {x: 0, y:-50};
 
canvas.addEventListener('mousemove', function(e) {
    console.log("mouse move ");
//   mouse.x = e.pageX + $(this).offset().left - $(this).position().left;
mouse.x = e.pageX  -  $(this).offset().left
console.log("pageX " +e.pageX);
//   mouse.y = e.pageY + $(this).offset().top - $(this).position().top;
mouse.y = e.pageY - $(this).offset().top
  console.log("pageY " + e.pageY);
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

// script for the shake
// $( document ).click(function() {
//     $( "#title-1" ).effect( "shake" );
//   });

  // script for modal 
  $("#login").click(function() {
    $(".modal").addClass("is-active");  
  });
  
  $(".modal-close").click(function() {
     $(".modal").removeClass("is-active");
  });
  
  //script for side nav bar (profile)
   // Initialize collapse button
   $(".button-collapse").sideNav();
   // Initialize collapsible (uncomment the line below if you use the dropdown variation)
//    $('.collapsible').collapsible();
   