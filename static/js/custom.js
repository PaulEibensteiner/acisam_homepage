// mein Menu
/*(function() {
  // Bind Click event to the drop down navigation button
  document.querySelector('.nav-button').addEventListener('click', function() {
		
      var dropdowns = document.getElementsByClassName("menü");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('open') && openDropdown != this.parentNode)  {
        openDropdown.classList.remove('open');
      }
		}
			
    this.parentNode.classList.toggle('open')
  }, false);
})();*/



/*

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("slides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 3000); // Change image every 2 seconds
}
*/


// manuelle slides

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("badge");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
     dots[i].className = dots[i].className.replace(" bg-white ", " bg-white-60 ");
  }
  x[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" bg-white-60 ", " bg-white ");
}

// automatische slides?

carousel();

function carousel() {
	plusDivs(1);
  setTimeout(carousel, 3000); // Change image every 2 seconds
	
}