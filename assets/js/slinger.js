const container = document.querySelector('.slinger');
const images = container.querySelectorAll('img');

let lastScrollPosition = 0;
const imageWidth = images[0].offsetWidth;

// Set the initial position of the images to start further to the right
images.forEach((image, index) => {
  image.style.transform = `translateX(${index * imageWidth + window.innerWidth}px)`; // Start off-screen to the right
});

// Move the images horizontally as the user scrolls vertically
window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const containerHeight = container.offsetHeight;

  // Calculate the horizontal scroll position based on the vertical scroll position
  const horizontalScrollPosition = (scrollPosition / containerHeight) * imageWidth * 0.2; // Slow down the movement by multiplying by 0.2

  // Adjust the position of the images as the user scrolls
  images.forEach((image, index) => {
    // Move images to the left but start further to the right
    image.style.transform = `translateX(${-(horizontalScrollPosition + (index * imageWidth)) + window.innerWidth}px)`;
  });

  lastScrollPosition = scrollPosition;
});
