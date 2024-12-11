const cursor = document.getElementById('cursor');

    // Update cursor position
    document.addEventListener('mousemove', (e) => {
      cursor.style.top = `${e.clientY}px`;
      cursor.style.left = `${e.clientX}px`;
    });

    // Handle hover effect for video thumbnails
    document.querySelectorAll('.video-thumbnail').forEach(thumbnail => {
      thumbnail.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
      });

      thumbnail.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
      });
    });