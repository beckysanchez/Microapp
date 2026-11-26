document.addEventListener('DOMContentLoaded', () => {
  const pathogen = getCurrentPathogen();
  document.getElementById('pathogen-subtitle').textContent = pathogen.name;
  document.getElementById('clinica-epi').textContent = pathogen.epidemiologia;
  document.getElementById('clinica-llega').textContent = pathogen.comoLlega;
  document.getElementById('clinica-muestra').textContent = pathogen.muestraPedida;
  document.getElementById('clinica-veriamos').textContent = pathogen.queVeriamos;
});
