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

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("js-badge");
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



 var initial = window.setTimeout(
        function() {
            plusDivs(1)
        }, 3000);

function reset() {
    window.clearTimeout(initial);
    initial = window.setTimeout(
        function() {
            plusDivs(1)
        }, 3000);
}

function plusDivs(n) {
  showDivs(slideIndex += n);
    reset();
}

function currentDiv(n) {
  showDivs(slideIndex = n);
    reset();
}

// mobiles menu

function removeClass(elements, myClass) {

  // if there are no elements, we're done
  if (!elements) { return; }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }

  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }

  // create pattern to find class name
  var reg = new RegExp('(^| )'+myClass+'($| )','g');

  // remove class from all chosen elements
  for (var i=0; i<elements.length; i++) {
    elements[i].className = elements[i].className.replace(reg,' ');
  }
}

function addClass(elements, myClass) {

  // if there are no elements, we're done
  if (!elements) { return; }

  // if we have a selector, get the chosen elements
  if (typeof(elements) === 'string') {
    elements = document.querySelectorAll(elements);
  }

  // if we have a single DOM element, make it an array to simplify behavior
  else if (elements.tagName) { elements=[elements]; }

  // add class to all chosen elements
  for (var i=0; i<elements.length; i++) {

    // if class is not already found
    if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {

      // add class
      elements[i].className += ' ' + myClass;
    }
  }
}

function toggle(subjekt) {
    if (subjekt.parentElement.classList.contains('cliked')) {
            subjekt.parentElement.classList.toggle("cliked");
            
        }
    else {
        removeClass(subjekt.parentElement.parentElement.children, "cliked");
        addClass(subjekt.parentElement, "cliked");
    }
    
}

// button animation

function showmenu(subjekt) {
    document.getElementById( 'nav' ).classList.toggle("dn");
    document.getElementById( "header" ).classList.toggle("mb7");
    subjekt.classList.toggle("opened");
}

// modal
function openModal(subjektid) {
  document.getElementById(subjektid).style.display = "block";
}

function closeModal(subjektid) {
  document.getElementById(subjektid).style.display = "none";
}