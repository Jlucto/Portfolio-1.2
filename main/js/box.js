$('#toggle').click(function() {
    $(this).toggleClass('active');
    $('#overlay').toggleClass('open');
});

document.addEventListener('mousemove', function(event) {
    var cursor = document.querySelector('.cursor');
    cursor.style.top = event.clientY + 'px';
    cursor.style.left = event.clientX + 'px';
  });

// Get the eye-follow-container and eye-follow-box elements
var container1 = document.querySelectorAll('.eye-follow-container')[0];
//var eyeBox1 = document.getElementById('eye1');
var container2 = document.querySelectorAll('.eye-follow-container')[1];
//var eyeBox2 = document.getElementById('eye2');

// Calculate the container's boundaries for eye 1
//var containerRect1 = container1.getBoundingClientRect();
//var containerLeft1 = containerRect1.left;
//var containerTop1 = containerRect1.top;
//var containerWidth1 = containerRect1.width;
//var containerHeight1 = containerRect1.height;

// Calculate the container's boundaries for eye 2
//var containerRect2 = container2.getBoundingClientRect();
//var containerLeft2 = containerRect2.left;
//var containerTop2 = containerRect2.top;
//var containerWidth2 = containerRect2.width;
//var containerHeight2 = containerRect2.height;

// Define padding value
var padding = 3;

// Listen for mousemove event on the document
document.addEventListener('mousemove', function(e) {
  // Get the current mouse position
  var mouseX = e.pageX;
  var mouseY = e.pageY;

  // Apply transitions and rotations to the eye-follow-boxes
  eyeBox1.style.transition = 'transform 0.3s';
  eyeBox1.style.transform = `translate(${translateX1}px, ${translateY1}px) rotateX(${rotationX1}deg) rotateY(${rotationY1}deg)`;

  eyeBox2.style.transition = 'transform 0.3s';
  eyeBox2.style.transform = `translate(${translateX2}px, ${translateY2}px) rotateX(${rotationX2}deg) rotateY(${rotationY2}deg)`;
});



 filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.querySelector(".project-nav");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});
