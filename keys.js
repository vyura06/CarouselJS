document.addEventListener('keydown', function (event) {
    var key = event.key;
    if (key == 'ArrowLeft') {
       prev();
    } else if (key == 'ArrowRight') {
       next();
    } else if (key == 'Escape') {
       close();
    }
 });