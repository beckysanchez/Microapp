document.addEventListener('DOMContentLoaded', () => {
  const pathogen = getCurrentPathogen();
  document.getElementById('pathogen-subtitle').textContent = pathogen.name;

  const container = document.getElementById('virulence-list');
  container.innerHTML = pathogen.virulencia.map(v => `
    <div class="virulence-item">
      <div class="bullet-dot"></div>
      <div>${v}</div>
    </div>
  `).join('');
});
