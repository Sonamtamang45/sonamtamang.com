

//----

      // Function to check if the user agent is a mobile device (phone or iPad)
    //----             function isMobileDevice() {
  //----                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
   //----                }
  
      // Function to redirect to the custom 404 page
 //----          function redirectTo404() {
  //----         window.location.href = '404.html'; // Replace '404.html' with the actual URL of your custom 404 page
   //----   }
  
      // Check if the user agent is a mobile device, if so, redirect to 404 page
  //----    if (isMobileDevice()) {
  //----      redirectTo404();
   //----       }



//



//cursor//
// script.js
const cursor = document.querySelector('#cursor');
const cursorRadius = Math.round(cursor.getBoundingClientRect().width / 3);

const mouse = { x: 300, y: 300 };
const pos = { x: 0, y: 0 };
const ratio = 0.06;

const draw = () => {
  pos.x += (mouse.x - cursorRadius - pos.x) * ratio;
  pos.y += (mouse.y - cursorRadius - pos.y) * ratio;
  cursor.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`;
};

const update = e => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
};

window.addEventListener('mousemove', update, { capture: false, passive: true });

function animate() {
  draw();
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

document.addEventListener('mousemove', (event) => {
  const dot = document.querySelector('.dot');
  dot.style.left = `${event.pageX - 5}px`;
  dot.style.top = `${event.pageY - 5}px`;
});



