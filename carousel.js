if (localStorage.getItem('notShow') != "true") {
  const content = [
    'content for section 1',
    'content for section 2',
    'content for section 3',
    'content for section 4'
  ]

  const container = document.querySelector('.container');
  const slider = document.querySelector('.slider')
  const dots = document.querySelector('.control ul')

  const left = document.querySelector('.left');
  const right = document.querySelector('.right');
  const checkBox = document.querySelector('.checkbox');
  const btnClose = document.querySelector('.buttonClose');

  content.forEach(src => {
    slider.innerHTML += `<section>${src}</section>`
    dots.innerHTML += '<li></li>'
  })

  const indicators = document.querySelectorAll('.control li');
  let index = 0;
  indicators[index].classList.add('selected')

  indicators.forEach((indicator, i) => {
    indicator.addEventListener('click', () => {
      document.querySelector('.control .selected').classList.remove('selected');
      indicator.classList.add('selected');
      slider.style.transform = 'translateX(' + (i) * -25 + '%)';
      index = i;
    });
  });

  function prev() {
    index--
    index = (index < 0) ? (indicators.length - 1) : index
    document.querySelector('.control .selected').classList.remove('selected');
    indicators[index].classList.add('selected');
    slider.style.transform = 'translateX(' + (index) * -25 + '%)';
  }
  function next() {
    index++
    index = (index < indicators.length) ? index : 0
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

  setTimeout(function () { container.style.display = 'block'; }, 5000);
}