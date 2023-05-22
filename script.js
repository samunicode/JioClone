document.addEventListener("DOMContentLoaded", function () {
    new Splide(".splide", {
      type: "loop",
      autoplay: true,
      interval: 1800, // Adjust the interval (in milliseconds) as per your needs
      arrows: false,
      pagination: false,
    }).mount();
  });

  document.addEventListener('DOMContentLoaded', function () {
    new Splide('#infinite-slider', {
      type: 'loop',
      autoplay: true,
      interval: 0,
      perPage: 4, // Number of visible slides at a time
      perMove: 1, // Number of slides to move on each transition
      gap: '20px', // Adjust the gap between slides as per your preference
      speed: 125000, // Transition speed in milliseconds
      arrows: false,
      pagination: false,
    }).mount();
  });

  