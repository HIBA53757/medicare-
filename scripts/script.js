document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  // Show only the first slide at start
  slides.forEach((slide, index) => {
    if (index === 0) {
      slide.style.display = "block";
    } else {
      slide.style.display = "none";
    }
  });

  function NextSlide() {
    
    // Hide current slide
    slides[current].style.display = "none";

    // Move to next slid 
    current = current + 1;
    if (current >= slides.length) {
      current = 0;
    }

    // Show next slide
    slides[current].style.display = "block";
  }

  // Change slid every 3 s
  setInterval(NextSlide, 3000);
});


