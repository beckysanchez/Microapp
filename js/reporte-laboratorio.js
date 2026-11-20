document.addEventListener('DOMContentLoaded', () => {
  const pathogen = getCurrentPathogen();
  document.getElementById('pathogen-subtitle').textContent = pathogen.name;
  document.getElementById('lab-muestra').textContent = pathogen.labMuestra;
  document.getElementById('lab-tecnica').textContent = pathogen.labTecnica;
  document.getElementById('lab-caption').textContent = pathogen.labCaption;
});
