// script.js



window.addEventListener('DOMContentLoaded', function() {

  // This script dynamically changes the page title for a subtle, engaging effect.

  // It operates independently of the main animation sequence, which is handled by CSS.

  var titles = ['Power to the Collectors 🏴‍☠️', 'Power to the Creators 🏴‍☠️', 'Power to the Players 🏴‍☠️'];

  var currentIndex = 0;

  var intervalDuration = 2222;



  function changeTitle() {

    document.title = titles[currentIndex];

    currentIndex = (currentIndex + 1) % titles.length;

  }



  // Set the initial title immediately

  changeTitle();



  // Start the interval to cycle through the titles

  setInterval(changeTitle, intervalDuration);

});