/* ============================================================
   DONA GASOLINA – Lógica principal
   main.js  |  Redesign moderno
   ============================================================ */


/* ============================================================
   01. DADOS DO CARDÁPIO
   ============================================================ */
const menuItems = [
  {
    key:      'parmegiana_acompanha_arroz_e_fritas',
    name:     'Parmegiana de Frango',
    desc:     'Filé de frango empanado com molho de tomate, queijo gratinado. Acompanha arroz e fritas.',
    price:    'R$ 49,90',
    category: 'carnes',
    popular:  true,
  },
  {
    key:      'polpetone',
    name:     'Polpetone',
    desc:     'Almôndega gigante recheada com queijo, coberta com molho de tomate artesanal.',
    price:    'R$ 44,90',
    category: 'carnes',
    popular:  true,
  },
  {
    key:      'lasanha_a_bolonhesa',
    name:     'Lasanha à Bolonhesa',
    desc:     'Massa fresca em camadas com molho bolonhesa, bechamel e queijo gratinado.',
    price:    'R$ 47,90',
    category: 'massas',
    popular:  true,
  },
  {
    key:      'rondelli_ao_sugo',
    name:     'Rondelli ao Sugo',
    desc:     'Massa recheada enrolada banhada em tradicional molho sugo de tomate italiano.',
    price:    'R$ 42,90',
    category: 'massas',
    popular:  true,
  },
  {
    key:      'risotto',
    name:     'Risotto',
    desc:     'Arroz arbóreo cremoso preparado no método tradicional italiano com parmesão.',
    price:    'R$ 48,90',
    category: 'massas',
    popular:  false,
  },
  {
    key:      'fafalle_com_tomate_eseco_e_rucula',
    name:     'Farfalle com Tomate Seco e Rúcula',
    desc:     'Massa borboleta com tomate seco, rúcula fresca e azeite extravirgem.',
    price:    'R$ 38,90',
    category: 'massas',
    popular:  false,
  },
  {
    key:      'massa_com_mignon_e_azeitona',
    name:     'Massa com Mignon e Azeitona',
    desc:     'Massa ao molho com filé mignon fatiado e azeitonas selecionadas.',
    price:    'R$ 54,90',
    category: 'massas',
    popular:  false,
  },
  {
    key:      'conchiglone_de_mussarerla_e_abobora',
    name:     'Conchiglione de Mussarela e Abóbora',
    desc:     'Concha gigante recheada com mussarela cremosa e purê de abóbora.',
    price:    'R$ 46,90',
    category: 'massas',
    popular:  false,
  },
  {
    key:      'conchiglone_de_carne_seca_com_requeijo',
    name:     'Conchiglione de Carne Seca',
    desc:     'Concha recheada com carne seca desfiada e requeijão cremoso. Irresistível!',
    price:    'R$ 49,90',
    category: 'massas',
    popular:  false,
  },
  {
    key:      'cassoulet',
    name:     'Cassoulet',
    desc:     'Prato robusto com linguiças, carnes e feijão branco ao estilo europeu.',
    price:    'R$ 52,90',
    category: 'carnes',
    popular:  false,
  },
  {
    key:      'feijoada_sabado',
    name:     'Feijoada de Sábado',
    desc:     'Feijoada completa especial aos sábados. Acompanha arroz, couve, farofa e laranja.',
    price:    'R$ 44,90',
    category: 'carnes',
    popular:  false,
  },
  {
    key:      'poro_de_frango_a_passarinho',
    name:     'Porção de Frango à Passarinho',
    desc:     'Pedaços de frango crocantes temperados com alho e ervas. Perfeito para compartilhar.',
    price:    'R$ 38,90',
    category: 'carnes',
    popular:  false,
  },
  {
    key:      'panqueca_com_borcolis',
    name:     'Panqueca de Brócolis',
    desc:     'Panqueca recheada com brócolis refogado e cream cheese ao molho branco.',
    price:    'R$ 32,90',
    category: 'carnes',
    popular:  false,
  },
  {
    key:      'file_frango_a_parmegiana',
    name:     'Filé de Frango à Parmegiana',
    desc:     'Filé suculento com molho especial, queijo derretido e acompanhamentos.',
    price:    'R$ 46,90',
    category: 'carnes',
    popular:  false,
  },
  {
    key:      'chopp',
    name:     'Chopp',
    desc:     'Chopp gelado artesanal. Refrescante e perfeito para acompanhar qualquer prato.',
    price:    'R$ 12,90',
    category: 'bebidas',
    popular:  true,
  },
  {
    key:      'soda_italiana',
    name:     'Soda Italiana',
    desc:     'Bebida refrescante com água gaseificada e xaropes de frutas naturais.',
    price:    'R$ 14,90',
    category: 'bebidas',
    popular:  false,
  },
  {
    key:      'vinho_halberth',
    name:     'Vinho Halberth',
    desc:     'Vinho tinto encorpado, notas de frutas vermelhas. Harmoniza com massas e carnes.',
    price:    'R$ 89,90',
    category: 'bebidas',
    popular:  false,
  },
  {
    key:      'petit_gateau',
    name:     'Petit Gâteau',
    desc:     'Bolinho quente de chocolate com centro derretido, acompanhado de sorvete de creme.',
    price:    'R$ 22,90',
    category: 'sobremesas',
    popular:  true,
  },
];


/* ============================================================
   02. DADOS DA GALERIA
   ============================================================ */
const galleryItems = [
  { key: 'lasagne',                             classes: 'tall' },
  { key: 'parmegiana_acompanha_arroz_e_fritas', classes: '' },
  { key: 'rondelli_ao_sugo',                    classes: '' },
  { key: 'polpetone',                           classes: '' },
  { key: 'risotto',                             classes: '' },
  { key: 'lasanha_a_bolonhesa',                 classes: 'wide' },
  { key: 'petit_gateau',                        classes: '' },
  { key: 'chopp',                               classes: '' },
  { key: 'fafalle_com_tomate_eseco_e_rucula',   classes: '' },
  { key: 'massa_com_mignon_e_azeitona',         classes: 'tall' },
  { key: 'cassoulet',                           classes: '' },
  { key: 'feijoada_sabado',                     classes: '' },
];


/* ============================================================
   03. RENDERIZAÇÃO DO CARDÁPIO
   ============================================================ */
function buildMenuCard(item) {
  const imgSrc = IMGS[item.key] || '';

  const popularBadge = item.popular
    ? `<div class="badge-popular">
         <i class="fa-solid fa-fire"></i> Popular
       </div>`
    : '';

  return `
    <article class="menu-card reveal" data-category="${item.category}" role="article">
      <div class="menu-card-img-wrap">
        <img class="menu-card-img"
             src="${imgSrc}"
             alt="${item.name}"
             loading="lazy">
        ${popularBadge}
      </div>
      <div class="menu-card-body">
        <h3 class="menu-card-name">${item.name}</h3>
        <p class="menu-card-desc">${item.desc}</p>
        <div class="menu-card-footer">
          <span class="menu-card-price">
            <small>A partir de</small>${item.price}
          </span>
          <button class="menu-card-btn" aria-label="Ver ${item.name}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');
  const items = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  grid.innerHTML = items.map(buildMenuCard).join('');
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}


/* ============================================================
   04. RENDERIZAÇÃO DA GALERIA
   ============================================================ */
function buildGallery() {
  const grid = document.getElementById('galleryGrid');

  grid.innerHTML = galleryItems.map(({ key, classes }) => {
    const src = IMGS[key] || '';
    return `
      <div class="gallery-item ${classes}"
           role="button"
           tabindex="0"
           aria-label="Ver imagem ampliada"
           onclick="openLightbox('${key}')"
           onkeydown="if(event.key === 'Enter') openLightbox('${key}')">
        <img src="${src}" alt="Foto do restaurante Dona Gasolina" loading="lazy">
        <div class="gallery-item-overlay" aria-hidden="true">
          <i class="fa-solid fa-magnifying-glass-plus"></i>
        </div>
      </div>
    `;
  }).join('');
}


/* ============================================================
   05. LIGHTBOX
   ============================================================ */
function openLightbox(key) {
  const lightbox = document.getElementById('lightbox');
  const img      = document.getElementById('lightbox-img');
  img.src = IMGS[key] || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
document.getElementById('lightbox').addEventListener('click', function(e) {
  if (e.target === this) closeLightbox();
});
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});


/* ============================================================
   06. HERO BACKGROUND + PARALLAX
   ============================================================ */
function setupHeroBg() {
  const bg = document.getElementById('heroBg');
  if (bg && IMGS.lasagne) {
    bg.style.backgroundImage = `url('${IMGS.lasagne}')`;
  }
}

function initParallax() {
  const bg = document.getElementById('heroBg');
  if (!bg) return;
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    bg.style.transform = `scale(1.05) translateY(${scrollY * 0.25}px)`;
  }, { passive: true });
}


/* ============================================================
   07. SEÇÃO SOBRE – IMAGENS
   ============================================================ */
function setupSobreImgs() {
  const main   = document.getElementById('sobreImgMain');
  const accent = document.getElementById('sobreImgAccent');
  if (main   && IMGS.dona_gasolina) main.src   = IMGS.dona_gasolina;
  if (accent && IMGS.risotto)       accent.src = IMGS.risotto;
}


/* ============================================================
   08. NAVBAR – SCROLL E HAMBURGUER
   ============================================================ */
function setupNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  const hamburger  = document.getElementById('hamburgerBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
  });
}

function closeMobileMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburgerBtn').setAttribute('aria-expanded', 'false');
}


/* ============================================================
   09. FILTROS DO CARDÁPIO
   ============================================================ */
function setupFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(btn.dataset.filter);
    });
  });
}


/* ============================================================
   10. INTERSECTION OBSERVER – ANIMAÇÃO REVEAL
   ============================================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

function initReveal() {
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}


/* ============================================================
   11. INICIALIZAÇÃO
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setupHeroBg();
  initParallax();
  setupSobreImgs();
  setupNavbar();
  renderMenu('all');
  buildGallery();
  setupFilters();
  initReveal();
});
