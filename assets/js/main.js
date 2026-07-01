let currentSlide = 0;
  const totalSlides = 4;
  let autoplayInterval;

  function updateCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((d, i) => {
      d.classList.toggle('active', i === currentSlide);
    });
  }

  function carouselMove(dir) {
    currentSlide = (currentSlide + dir + totalSlides) % totalSlides;
    updateCarousel();
    resetAutoplay();
  }

  function carouselGoTo(idx) {
    currentSlide = idx;
    updateCarousel();
    resetAutoplay();
  }

  function startAutoplay() {
    autoplayInterval = setInterval(() => carouselMove(1), 6000);
  }

  function resetAutoplay() {
    clearInterval(autoplayInterval);
    startAutoplay();
  }

  // Touch swipe
  let touchStartX = 0;
  const track = document.getElementById('carouselTrack');
  if (track) {
    track.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) carouselMove(dx > 0 ? -1 : 1);
    }, { passive: true });
  }

  updateCarousel();
  startAutoplay();
