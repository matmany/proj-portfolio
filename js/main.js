
  var menu = document.querySelector('#menu');
  var main = document.querySelector('main');
  var drw = document.querySelector('.navegation');

  menu.addEventListener('click', function(e) {
    drw.classList.toggle('open');
    e.stopPropagation();
  });
  main.addEventListener('click', function() {
    drw.classList.remove('open');
  });
