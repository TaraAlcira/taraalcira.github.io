const container = document.querySelector('.slinger');  
const images = container.querySelectorAll('img');  

let lastScrollPosition = 0; 

// start position is width of screen
images.forEach((image, index) => {  
  image.style.transform = `translateX(${index * window.innerWidth}px)`;  
});

// Move the images horizontally as the user scrolls vertically
window.addEventListener('scroll', () => {  
  const scrollPosition = window.scrollY;  
  // const scrollPositionDelta = scrollPosition - lastScrollPosition;
  const containerHeight = container.offsetHeight;  
  const imageWidth = images[0].offsetWidth;  
  
  // Calculate the horizontal scroll position based on the vertical scroll position  
  const horizontalScrollPosition = (scrollPosition / containerHeight) * imageWidth * 0.2; // Slow down the movement by multiplying by 0.2  
  
  // Adjust the position of the images as the user scrolls
  images.forEach((image, index) => {  
    image.style.transform = `translateX(${horizontalScrollPosition + (index * imageWidth)}px)`;  
  });

  lastScrollPosition = scrollPosition;  
});
