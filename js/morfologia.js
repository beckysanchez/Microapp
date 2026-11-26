let activeTab = 'intro';
let pathogen = null;

document.addEventListener('DOMContentLoaded', () => {
  pathogen = getCurrentPathogen();
  
  // Llenar encabezado y modelo 3D
  document.getElementById('pathogen-subtitle').textContent = pathogen.name;
  const viewer = document.getElementById('viewer-3d');
  viewer.setAttribute('src', pathogen.modelPath);
  viewer.setAttribute('alt', `Modelo 3D de ${pathogen.name}`);

  // Configurar hotspot de ejemplo conectado a la primera estructura
  const hotspotBtn = document.getElementById('hotspot-btn-0');
  if (pathogen.structures[0]) {
    hotspotBtn.textContent = pathogen.structures[0].name;
    hotspotBtn.onclick = () => selectTab(0);
  }

  renderTabs();
  renderContent();
});

function renderTabs() {
  const tabs = [
    { id: 'intro', label: 'Introducción' },
    ...pathogen.structures.map((s, i) => ({ id: i, label: s.name })),
    { id: 'infectiva', label: 'Forma Infectiva' }
  ];

  const tabsContainer = document.getElementById('morf-tabs-container');
  tabsContainer.innerHTML = tabs.map(t => `
    <button class="morf-tab-btn ${activeTab == t.id ? 'active' : ''}" 
            onclick="selectTab('${t.id}')">
      ${t.label}
    </button>
  `).join('');
}

function selectTab(tabId) {
  activeTab = tabId;
  // Como NO redibujamos toda la página, el scroll del carrusel se mantiene solito!
  renderTabs();
  renderContent();
}

function renderContent() {
  const contentArea = document.getElementById('morf-content-area');
  
  if (activeTab === 'intro') {
    contentArea.innerHTML = `<div class="card">${pathogen.morfIntro}</div>`;
  } else if (activeTab === 'infectiva') {
    contentArea.innerHTML = `
      <div class="card-highlight">
        <strong class="text-primary">Forma Infectiva / Característica:</strong><br><br>
        ${pathogen.formaInfectiva}
      </div>`;
  } else {
    const struct = pathogen.structures[activeTab];
    contentArea.innerHTML = `
      <div class="card">
        <strong class="text-primary">${struct.name}</strong>
        <p class="mt-sm">${struct.desc}</p>
      </div>`;
  }
}
