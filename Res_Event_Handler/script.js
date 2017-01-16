// eEvent Handle

// var Observable = Rx.Observable;

var button = document.getElementById('button');

 var handler = function(e) {
 alert('clicked');
 button.removeEventListener('click', handler);
 };

 button.addEventListener('click', handler);



