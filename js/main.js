
/*var name  = "navButton"*/
var navButton = document.querySelector('.nav-icon');
navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});

/*var name  = "closeButton"*/
var closeButton = document.querySelector('.close-icon');
closeButton.addEventListener('click', function() {
  console.log('close it!');
  document
    .querySelector('body')
    .classList
    .toggle('nav-open');
});

/* Notes
1. menu nav item clicked --->add .nav-open class
2. close button clicked ---> remove .nav-open class
toggles 
Method --is toggle here
*/