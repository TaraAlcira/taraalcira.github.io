const container = document.querySelector('.slinger');  
const images = container.querySelectorAll('img');  

let lastScrollPosition = 0;  
  
window.addEventListener('scroll', () => {  
  const scrollPosition = window.scrollY;  
  const containerHeight = container.offsetHeight;  
  const imageWidth = images[0].offsetWidth;  
  
  // Calculate the horizontal scroll position based on the vertical scroll position  
  const horizontalScrollPosition = (scrollPosition / containerHeight) * imageWidth * 0.2; // Slow down the movement by multiplying by 0.2  
  
  // Check if the user is scrolling up or down  
  if (scrollPosition < lastScrollPosition) {  
   // User is scrolling up, move the images back to the left  
   images.forEach((image, index) => {  
    image.style.transform = `translateX(${horizontalScrollPosition - (index * imageWidth)}px)`;  
   });  
  } else {  
   // User is scrolling down, move the images to the right  
   images.forEach((image, index) => {  
    image.style.transform = `translateX(${horizontalScrollPosition + (index * imageWidth)}px)`;  
   });  
  }  
  
  lastScrollPosition = scrollPosition;  
});
