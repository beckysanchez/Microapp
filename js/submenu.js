document.addEventListener('DOMContentLoaded', () => {
  const cat = getCurrentCategory();
  document.getElementById('category-title').textContent = cat.label;

  const pathogensInCat = Object.values(DB.pathogens).filter(p => p.category === cat.id);
  const container = document.getElementById('pathogens-list');

  container.innerHTML = pathogensInCat.map(p => `
    <button class="menu-btn" onclick="selectPathogen('${p.id}')">
      <div class="badge-circle gold">${p.abbr}</div>
      <div class="menu-btn-content">
        <div class="menu-btn-title italic">${p.name}</div>
      </div>
      <div class="menu-btn-arrow">›</div>
    </button>
  `).join('');
});

function selectPathogen(pathogenId) {
  localStorage.setItem('selectedPathogen', pathogenId);
  window.location.href = 'hub.html';
}
