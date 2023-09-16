// script.js
const image = document.querySelector(".image");
const divElement = document.querySelector(".div-element");
const eyes2 = document.getElementById("eye-socket-left");
const eyes1 = document.getElementById("eye-socket-right");
//Proximity effect
const eyes = document.querySelectorAll(".eye");
const anchor = document.querySelector(".image");
const rect = anchor.getBoundingClientRect();
const anchorX = rect.left + rect.width / 2;
const anchorY = rect.top + rect.height / 2;

image.addEventListener("mouseover", () => {
  // When the cursor enters the image

  image.style.transition = "top 0.3s ease-in-out"; // Add smooth transition
  image.style.top = `32px`; // Move the image down
  eyes2.style.transition = "top 0.3s ease-in-out"; // Add smooth transition
  eyes2.style.top = `60px`;
  eyes1.style.transition = "top 0.3s ease-in-out"; // Add smooth transition
  eyes1.style.top = `60px`;
});

image.addEventListener("mouseleave", () => {
  // When the cursor leaves the image
  image.style.transition = "top 0.3s ease-in-out"; // Add smooth transition
  image.style.top = "0"; // Reset the image to its initial position
  eyes2.style.transition = "top 0.3s ease-in-out"; // Add smooth transition
  eyes2.style.top = "28px"; // Reset the image to its initial position
  eyes1.style.transition = "top 0.3s ease-in-out"; // Add smooth transition
  eyes1.style.top = "28px";
});

document.addEventListener("mousemove", (e) => {
  //   console.log(e);
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
  //   console.log(angleDeg);

  eyes.forEach((eye) => {
    eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    anchor.style.filter = `hue-rotate(${angleDeg}deg)`;
    eye.style.filter = `hue-rotate(${angleDeg}deg)`;
    document.body.style.filter = `hue-rotate(${angleDeg}deg)`;
  });
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rand = Math.atan2(dy, dx);
  const deg = (rand * 180) / Math.PI;
  return deg;
}
