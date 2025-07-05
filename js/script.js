let current = 0;

function nextSection() {
  const currentSection = document.getElementById(`section${current}`);
  if (current < 6) {
    current++;
    const nextSection = document.getElementById(`section${current}`);
    currentSection.classList.remove("active");
    nextSection.classList.add("active");
  }
}

function prevSection() {
  const currentSection = document.getElementById(`section${current}`);
  if (current > 0) {
    current--;
    const prevSection = document.getElementById(`section${current}`);
    currentSection.classList.remove("active");
    prevSection.classList.add("active");
  }
}
