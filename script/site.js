const cursorGraphic = document.querySelector('.cursor');

const moveImageWithCursor = (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const offsetX = 20;
  const offsetY = 20;

  const newImageX = mouseX + offsetX;
  const newImageY = mouseY + offsetY;

  cursorGraphic.style.left = `${newImageX}px`;
  cursorGraphic.style.top = `${newImageY}px`;
};

window.addEventListener('mousemove', moveImageWithCursor);

window.addEventListener('scroll', () => {
  moveImageWithCursor({
    clientX: event.clientX,
    clientY: event.clientY
  });
});
