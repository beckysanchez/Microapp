document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('categories-list');
  
  container.innerHTML = DB.categories.map(c => `
    <button class="menu-btn" ${c.disabled ? 'disabled' : ''} onclick="selectCategory('${c.id}')">
      <div class="badge-circle">${c.abbr}</div>
      <div class="menu-btn-content">
        <div class="menu-btn-title">${c.label}</div>
        <div class="menu-btn-sub">${c.sub}</div>
      </div>
      <div class="menu-btn-arrow">›</div>
    </button>
  `).join('');
});

function selectCategory(categoryId) {
  localStorage.setItem('selectedCategory', categoryId);
  window.location.href = 'submenu.html';
}
