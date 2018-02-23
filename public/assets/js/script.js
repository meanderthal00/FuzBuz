console.log("front end js connected");
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
  // script for modal 
  $("#login").click(function() {
    $(".modal").addClass("is-active");  
    console.log("Hi");
  });
  
  $(".modal-close").click(function() {
     $(".modal").removeClass("is-active");
  });
  
  //script for side nav bar (profile)
   // Initialize collapse button
//    $(".button-collapse").sideNav();
   // Initialize collapsible (uncomment the line below if you use the dropdown variation)
//    $('.collapsible').collapsible();

function openNav() {
    document.getElementById("sideNavigation").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}
 
function closeNav() {
    document.getElementById("sideNavigation").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
 
//   ==========================SCRIPTS FOR THE COMMENTS=========================

	$("[type = submit]").click(function () {
		var lang    = $("select").val();
		var comment = $("[type = text]").val();
        $("<p lang=" + lang + ">" + comment + "</p>").appendTo("#comment-1");
        
	});
function resetFunction() {
        document.getElementById("#my-form").reset();
        }

        // ==============DISQUS=================


// /**
// *  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
// *  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/

// var disqus_config = function () {
// this.page.url = hidden-basin-13000.herokuapp.com/#;
//   // Replace PAGE_URL with your page's canonical URL variable
// this.page.identifier = "comment section"; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
// };
// (function() {  // DON'T EDIT BELOW THIS LINE
// var d = document, s = d.createElement('script');

// s.src = 'https://fuzbuz.disqus.com/embed.js';

// s.setAttribute('data-timestamp', +new Date());
// (d.head || d.body).appendChild(s);
// })();
// </script>
// <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript" rel="nofollow">comments powered by Disqus.</a></noscript>
