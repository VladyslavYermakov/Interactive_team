const area = document.querySelector('.area');
const ball = document.getElementById('ball');

document.addEventListener('mousemove', event => {
  const areaRect = area.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();

  const newLeft = event.clientX - ballRect.width / 2;
  const newTop = event.clientY - ballRect.height / 2;

  ball.style.left = newLeft + 'px';
  ball.style.top = newTop + 'px';
newLeft = Math.max(0, Math.min(newLeft, areaRect.width - ballRect.width));

newTop = Math.max(0, Math.min(newTop, areaRect.height - ballRect.height));
});
