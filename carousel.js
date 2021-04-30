if (localStorage.getItem('notShow') != "true") {
  const container = document.querySelector('.container');
  const slider = document.querySelector('.slider');

  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const checkBox = document.querySelector('.checkbox');
  const btnClose = document.querySelector('.buttonClose');

  const indicators = document.querySelectorAll('.control li');
  let index = 0;

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      document.querySelector('.control .selected').classList.remove('selected');
      indicator.classList.add('selected');
      slider.style.transform = 'translateX(' + (i) * -25 + '%)';
      index = i;
    });
  });

  function prev() {
    index = (index > 0) ? index - 1 : 0;
    document.querySelector('.control .selected').classList.remove('selected');
    indicators[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
  }
  function next() {
    index = (index < 4 - 1) ? index + 1 : 3;
    document.querySelector('.control .selected').classList.remove('selected');
    indicators[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
  }
  function close() {
    container.style.display = 'none';
    localStorage.setItem('notShow', checkBox.checked)
  }

  left.addEventListener('click', prev);
  right.addEventListener('click', next);
  btnClose.addEventListener('click', close);

  setTimeout(function () { container.style.display = 'block'; }, 0);
}