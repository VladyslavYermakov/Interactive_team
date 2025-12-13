const area = document.querySelector('.area');
const ball = document.getElementById('ball');

document.addEventListener('mousemove', event => {
  const areaRect = area.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();

  const newLeft = event.clientX - ballRect.width / 2;
  const newTop = event.clientY - ballRect.height / 2;

  ball.style.left = newLeft + 'px';
  ball.style.top = newTop + 'px';
});
