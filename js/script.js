let current = 0;

  function nextSection() {
    const currentSection = document.getElementById(`section${current}`);
    current++;
    const nextSection = document.getElementById(`section${current}`);
    if (currentSection) currentSection.classList.remove("active");
    if (nextSection) {
      nextSection.classList.add("active");
      window.scrollTo(0, 0); // Volver arriba
    }
  }

  function prevSection() {
    const currentSection = document.getElementById(`section${current}`);
    current--;
    const prevSection = document.getElementById(`section${current}`);
    if (currentSection) currentSection.classList.remove("active");
    if (prevSection) {
      prevSection.classList.add("active");
      window.scrollTo(0, 0); // Volver arriba
    }
  }

  function goToStart() {
    const currentSection = document.getElementById(`section${current}`);
    current = 0;
    const startSection = document.getElementById(`section0`);
    if (currentSection) currentSection.classList.remove("active");
    if (startSection) {
      startSection.classList.add("active");
      window.scrollTo(0, 0);
    }
  }