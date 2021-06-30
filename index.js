var d = new Date();
var hours = d.getHours();
var min = d.getMinutes();
var sec = d.getSeconds();
if (hours >= 0 && hours <= 9) {
  $(".time").html("0" + hours + " :" + min);
  if (min >= 0 && min <= 9) {
    $(".time").html("0" + hours + " :0" + min);
  } else {
    $(".time").html("0" + hours + " :" + min);
  }
} else {
  $(".time").html(hours + " : " + min);
}


if (hours >= 0 && hours < 12) {
  $("video").html('<source src="header3.mp4" type="video/mp4"></source>');
  $(".btn").removeClass("bio");
  $(".btn").addClass("bio-morning");

  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();
    if (window.scrollY <= 150) { // Just an example
      nav.style.backgroundColor = ' #66000000'; // or default color
    } else {
      nav.style.backgroundColor = '#053742';
    }
  });

  const navLinks = document.querySelectorAll('.nav-item')
  const menuToggle = document.getElementById('navbarSupportedContent')
  const bsCollapse = new bootstrap.Collapse(menuToggle)
  navLinks.forEach((l) => {
    l.addEventListener('click', () => {
      bsCollapse.toggle()
    })
  });

  $(".btn-cv").css("background-color", "#053742");
  $(".time-text").html("Good Morning From Boye");

  $(".header").css("background-color", "#39A2DB");
  $("#about").css("background-color", "#39A2DB");
  $(".mor").removeClass("btn-cv");
  $(".mor").addClass("btn-cv-morning");
  $("strong").removeClass("name");
  $("strong").addClass("name-morning");
  $(".fab").removeClass("po");
  $(".fab").addClass("po-morning");
  $(".cor").removeClass("co");
  $(".cor").addClass("co-morning");
  $(".hrs").removeClass("hr-odd");
  $(".hrs").addClass("hr-odd-morning");
  $(".fl").removeClass("front");
  $(".fl").addClass("front-morning");
  $(".bm").removeClass("back-measure");
  $(".bm").addClass("back-measure-morning");
  $(".far").removeClass("fars");
  $(".far").addClass("fars-morning");
  $(".fa").removeClass("f-a");
  $(".fa").addClass("f-a-morning");
  $(".fas").removeClass("fs");
  $(".fas").addClass("fs-morning");
  $(".proj").css("background-color", "#39A2DB");
  $(".cont").css("background-color", "#39A2DB");
  $(".but").removeClass("btn-submit");
  $(".but").addClass("btn-submit-morning");
  $(".inp").removeClass("forms");
  $(".inp").addClass("forms-morning");
  $("textarea").removeClass("texta");
  $("textarea").addClass("texta-morning");
} else if (hours >= 12 && hours < 18) {
  $("video").html('<source src="header3.mp4" type="video/mp4"></source>');
  $(".btn").removeClass("bio");
  $(".btn").addClass("bio-morning");
  $(".time-text").html("Good Afternoon From Boye");



  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();
    if (window.scrollY <= 150) { // Just an example
      nav.style.backgroundColor = ' #66000000'; // or default color
    } else {
      nav.style.backgroundColor = '#053742';
    }
  });

  const navLinks = document.querySelectorAll('.nav-item')
  const menuToggle = document.getElementById('navbarSupportedContent')
  const bsCollapse = new bootstrap.Collapse(menuToggle)
  navLinks.forEach((l) => {
    l.addEventListener('click', () => {
      bsCollapse.toggle()
    })
  });

  $(".header").css("background-color", "#39A2DB");
  $("#about").css("background-color", "#39A2DB");
  $(".mor").removeClass("btn-cv");
  $(".mor").addClass("btn-cv-morning");
  $("strong").removeClass("name");
  $("strong").addClass("name-morning");
  $(".fab").removeClass("po");
  $(".fab").addClass("po-morning");
  $(".cor").removeClass("co");
  $(".cor").addClass("co-morning");
  $(".hrs").removeClass("hr-odd");
  $(".hrs").addClass("hr-odd-morning");
  $(".fl").removeClass("front");
  $(".fl").addClass("front-morning");
  $(".bm").removeClass("back-measure");
  $(".bm").addClass("back-measure-morning");
  $(".far").removeClass("fars");
  $(".far").addClass("fars-morning");
  $(".fa").removeClass("f-a");
  $(".fa").addClass("f-a-morning");
  $(".fas").removeClass("fs");
  $(".fas").addClass("fs-morning");
  $(".proj").css("background-color", "#39A2DB");
  $(".cont").css("background-color", "#39A2DB");
  $(".but").removeClass("btn-submit");
  $(".but").addClass("btn-submit-morning");
  $(".inp").removeClass("forms");
  $(".inp").addClass("forms-morning");
  $("textarea").removeClass("texta");
  $("textarea").addClass("texta-morning");
}

else if (hours >= 18 && hours < 24) {
  $("video").html('<source src="night.mp4" type="video/mp4"></source>');
  $(".video-text").css("color", "white");
  $(".talk").removeClass("bot");
  $(".talk").addClass("bot-night");
  $(".border-text").css({
    'color': 'white',
    'border-bottom': '2px solid black'
  });
  $(".time-text").html("Good Evening From Boye");
  $(".header").css("background-color", "#555555");


  $(".navbar-toggler").click(function() {
    $("nav").toggleClass("navbar-color");
  })
  $('.navbar-collapse a').click(function() {
    $(".navbar-collapse").collapse('hide');
  });


  var nav = document.querySelector('nav');
  window.addEventListener('scroll', function(event) { // To listen for event
    event.preventDefault();
    if (window.scrollY <= 150) { // Just an example
      nav.style.backgroundColor = ' #66000000'; // or default color
    } else {
      nav.style.backgroundColor = 'rgba(85.5, 0, 21.6, 0.99)';
    }
  });


}


var app = document.getElementById('mytext');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('<strong>Web Developer</strong> ')
  .pauseFor(200)
  .deleteChars(14)
  .typeString('<strong>Phytoneer</strong>')
  .pauseFor(1000)
  .deleteChars(10)
  .typeString('<strong>Data Scientist</strong>')
  .start();
