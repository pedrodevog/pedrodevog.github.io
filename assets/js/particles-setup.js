(function () {
  const PARTICLE_CONTAINER_ID = 'particles-js';
  let themeToggleListenerAttached = false;

  function getCssVar(name, fallbackValue) {
    const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    return value || fallbackValue;
  }

  function destroyParticles() {
    if (!window.pJSDom || !window.pJSDom.length) {
      return;
    }

    window.pJSDom.forEach((instance) => {
      const destroy = instance?.pJS?.fn?.vendors?.destroypJS;
      if (typeof destroy === 'function') {
        destroy();
      }
    });

    window.pJSDom = [];
  }

  function ensureContainer() {
    let container = document.getElementById(PARTICLE_CONTAINER_ID);

    if (!container) {
      container = document.createElement('div');
      container.id = PARTICLE_CONTAINER_ID;
      container.setAttribute('aria-hidden', 'true');
      document.body.prepend(container);
    }

    return container;
  }

  function initParticles() {
    if (typeof window.particlesJS !== 'function') {
      return;
    }

    ensureContainer();
    destroyParticles();

    const themeColor = getCssVar('--global-theme-color', '#116eee');
    const lineColor = getCssVar('--global-divider-color', '#888888');

    window.particlesJS(PARTICLE_CONTAINER_ID, {
      particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: themeColor },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3, random: true },
        line_linked: {
          enable: true,
          distance: 150,
          color: lineColor,
          opacity: 0.4,
          width: 1,
        },
        move: { enable: true, speed: 2 },
      },
      interactivity: {
        detect_on: 'window',
        events: {
          onhover: { enable: true, mode: 'grab' },
          onclick: { enable: true, mode: 'push' },
          resize: true,
        },
        modes: {
          grab: { distance: 200, line_linked: { opacity: 1 } },
          push: { particles_nb: 4 },
        },
      },
      retina_detect: true,
    });
  }

  function scheduleInit() {
    window.setTimeout(initParticles, 120);
  }

  document.addEventListener('DOMContentLoaded', function () {
    scheduleInit();

    if (!themeToggleListenerAttached) {
      const toggle = document.getElementById('light-toggle');
      if (toggle) {
        toggle.addEventListener('click', scheduleInit);
      }
      themeToggleListenerAttached = true;
    }
  });
})();
