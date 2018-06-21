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


/**
 * Pure JavaScript implementation of zoom.js.
 *
 * Original preamble:
 * zoom.js - It's the best way to zoom an image
 * @version v0.0.2
 * @link https://github.com/fat/zoom.js
 * @license MIT
 *
 * Needs a related CSS file to work. See the README at
 * https://github.com/nishanths/zoom.js for more info.
 *
 * This is a fork of the original zoom.js implementation by @fat.
 * Copyrights for the original project are held by @fat. All other copyright
 * for changes in the fork are held by Nishanth Shanmugham.
 *
 * Copyright (c) 2013 @fat
 * The MIT License. Copyright © 2016 Nishanth Shanmugham.
 */

import { ZoomImage } from "./zoom-image.js";
import { windowWidth, windowHeight } from "./utils.js";

var current = null;
var offset = 80;
var initialScrollPos = -1;
var initialTouchPos = -1;

var setup = (elem) => {
    elem.addEventListener("click", prepareZoom);
};

var prepareZoom = e => {
    if (document.body.classList.contains("zoom-overlay-open")) {
        return;
    }

    if (e.metaKey || e.ctrlKey) {
        window.open((e.target.getAttribute("data-original") || e.target.src), "_blank");
        return;
    }

    if (e.target.width >= windowWidth() - offset) {
        return;
    }

    closeCurrent(true);

    current = new ZoomImage(e.target, offset);
    current.zoom();

    addCloseListeners();
};

var closeCurrent = force => {
    if (current == null) {
        return;
    }
    if (force) {
        current.dispose();
    } else {
        current.close();
    }
    removeCloseListeners();
    current = null;
};

var addCloseListeners = () => {
    document.addEventListener("scroll", handleScroll);
    document.addEventListener("keyup", handleKeyup);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("click", handleClick, true);
};

var removeCloseListeners = () => {
    document.removeEventListener("scroll", handleScroll);
    document.removeEventListener("keyup", handleKeyup);
    document.removeEventListener("touchstart", handleTouchStart);
    document.removeEventListener("click", handleClick, true);
};

var handleScroll = () => {
    if (initialScrollPos == -1) {
        initialScrollPos = window.pageYOffset;
    }

    var deltaY = Math.abs(initialScrollPos - window.pageYOffset);
    if (deltaY >= 40) {
        closeCurrent();
    }
};

var handleKeyup = e => {
    if (e.keyCode == 27) {
        closeCurrent();
    }
};

var handleTouchStart = e => {
    var t = e.touches[0];
    if (t == null) {
        return;
    }

    initialTouchPos = t.pageY;
    e.target.addEventListener("touchmove", handleTouchMove);
};

var handleTouchMove = e => {
    var t = e.touches[0];
    if (t == null) {
        return;
    }

    if (Math.abs(t.pageY - initialTouchPos) > 10) {
        closeCurrent();
        e.target.removeEventListener("touchmove", handleTouchMove);
    }
};

var handleClick = () => {
    closeCurrent();
};

var zoom = Object.create(null);
zoom.setup = setup;

export { zoom };
