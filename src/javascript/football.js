const area = document.querySelector('.area');
const ball = document.getElementById('ball');

document.addEventListener('mousemove', event => {
  const areaRect = area.getBoundingClientRect();
  const ballRect = ball.getBoundingClientRect();
  const mouseX = event.clientX - areaRect.left;
  const mouseY = event.clientY - areaRect.top;

  const ballRadiusX = ballRect.width / 2;
  const ballRadiusY = ballRect.height / 2;

  let newLeft = mouseX - ballRadiusX;
  let newTop = mouseY - ballRadiusY;

  ball.style.left = newLeft + 'px';
  ball.style.top = newTop + 'px';
});
