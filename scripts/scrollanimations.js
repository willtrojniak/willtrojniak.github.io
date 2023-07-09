// From https://stackoverflow.com/questions/27462306/css3-animate-elements-if-visible-in-viewport-page-scroll

const inViewport = (entries, observer) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("isInViewport", entry.isIntersecting);
    });
  };
  
  const Obs = new IntersectionObserver(inViewport);
  const obsOptions = {}; //See: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API#Intersection_observer_options
  
  // Attach observer to every [data-inviewport] element:
  const ELs_inViewport = document.querySelectorAll('[data-inviewport]');
  ELs_inViewport.forEach(EL => {
    Obs.observe(EL, obsOptions);
  });