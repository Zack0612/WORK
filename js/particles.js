particlesJS('particles-js', {
  particles: {
    number: { value: 20, density: { enable: false, value_area: 0 } },
    color: { value: '#fc00a3' },
    shape: {
      type: 'image',
      stroke: { width: 0, color: '#ff153c' },
      polygon: { nb_sides: 3 },
      image: { src: './images/fire.png', width: 40, height: 30 },
    },
    opacity: {
      value: 0.5,
      random: true,
      anim: { enable: false, speed: 3, opacity_min: 0.8, sync: false },
    },
    size: {
      value: 30,
      random: true,
      anim: { enable: true, speed: 3, size_min: 0, sync: true },
    },
    line_linked: {
      enable: false,
      distance: 0,
      color: '#ffffff',
      opacity: 0,
      width: 0,
    },
    move: {
      enable: true,
      speed: 20,
      direction: 'top-left',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false,
      attract: { enable: false, rotateX: 1200, rotateY: 1000 },
    },
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: false, mode: 'repulse' },
      onclick: { enable: false, mode: 'repulse' },
      resize: true,
    },
    modes: {
      grab: { distance: 0, line_linked: { opacity: 0 } },
      bubble: { distance: 0, size: 0, duration: 0, opacity: 0, speed: 3 },
      repulse: { distance: 65, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: false,
})
