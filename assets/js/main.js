/* ============================================================
   DONA GASOLINA – Restaurante Italiano
   main.js  |  Lógica principal do site
   ============================================================

   ÍNDICE:
   01. Dados do cardápio (menuItems)
   02. Dados da galeria (galleryItems)
   03. Renderização do cardápio (renderMenu / buildMenuCard)
   04. Renderização da galeria (buildGallery)
   05. Lightbox (openLightbox / closeLightbox)
   06. Hero background + parallax
   07. Seção "Sobre" – imagens
   08. Navbar – scroll e hamburguer
   09. Filtros do cardápio
   10. IntersectionObserver – animação reveal
   11. Inicialização (DOMContentLoaded)
   ============================================================ */


/* ============================================================
   01. DADOS DO CARDÁPIO
   Cada item tem: key (chave da imagem em IMGS), name, desc,
   price, category e popular (boolean).
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
   Cada item tem: key (chave em IMGS) e classes CSS opcionais
   (tall = 2 linhas, wide = 2 colunas, '' = normal).
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

/**
 * Constrói o HTML de um card individual do cardápio.
 * @param {Object} item - Objeto do array menuItems
 * @returns {string} - String HTML do card
 */
function buildMenuCard(item) {
  const imgSrc = IMGS[item.key] || '';

  // Badge "Popular" só aparece se item.popular === true
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
            <small>A partir de </small>${item.price}
          </span>
          <button class="menu-card-btn" aria-label="Ver ${item.name}">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </article>
  `;
}

/**
 * Renderiza o grid do cardápio, opcionalmente filtrando por categoria.
 * @param {string} filter - Categoria ('all' para mostrar todos)
 */
function renderMenu(filter = 'all') {
  const grid = document.getElementById('menuGrid');

  // Filtra os itens conforme a categoria selecionada
  const items = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  // Injeta os cards no DOM
  grid.innerHTML = items.map(buildMenuCard).join('');

  // Re-observa os novos elementos para a animação de entrada
  grid.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
}


/* ============================================================
   04. RENDERIZAÇÃO DA GALERIA
   ============================================================ */

/**
 * Constrói o HTML do grid da galeria e insere no DOM.
 * Cada item é clicável e abre o lightbox.
 */
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
        <img src="${src}"
             alt="Foto do restaurante Dona Gasolina"
             loading="lazy">
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

/**
 * Abre o lightbox exibindo a imagem correspondente à chave informada.
 * @param {string} key - Chave da imagem no objeto IMGS
 */
function openLightbox(key) {
  const lightbox = document.getElementById('lightbox');
  const img      = document.getElementById('lightbox-img');

  img.src = IMGS[key] || '';
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden'; // Impede scroll do fundo
}

/**
 * Fecha o lightbox e restaura o scroll da página.
 */
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

// Fecha ao clicar no botão "×"
document.getElementById('lightbox-close')
  .addEventListener('click', closeLightbox);

// Fecha ao clicar fora da imagem (no overlay)
document.getElementById('lightbox')
  .addEventListener('click', function (e) {
    if (e.target === this) closeLightbox();
  });

// Fecha com tecla Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeLightbox();
});


/* ============================================================
   06. HERO – BACKGROUND E PARALLAX
   ============================================================ */

/**
 * Define a imagem de fundo do hero a partir do IMGS embutido.
 * Usa lasagne como imagem principal de fundo.
 */
function setupHeroBg() {
  const bg = document.getElementById('heroBg');
  const heroKey = IMGS['dona_gasolina'] ? 'dona_gasolina' : 'lasagne';
  if (IMGS[heroKey]) {
    bg.style.backgroundImage = `url(${IMGS[heroKey]})`;
  }
}

/**
 * Efeito parallax suave: move o fundo conforme o scroll.
 * Escuta passivamente para não bloquear o scroll.
 */
function initParallax() {
  const bg = document.getElementById('heroBg');

  window.addEventListener('scroll', () => {
    const offset = window.scrollY;
    bg.style.transform = `scale(1.05) translateY(${offset * 0.25}px)`;
  }, { passive: true });
}


/* ============================================================
   07. SEÇÃO "SOBRE" – IMAGENS
   ============================================================ */

/**
 * Define as imagens do bloco visual da seção Sobre.
 */
function setupSobreImgs() {
  const imgMain   = document.getElementById('sobreImgMain');
  const imgAccent = document.getElementById('sobreImgAccent');

  if (IMGS['rondelli_ao_sugo']) imgMain.src   = IMGS['rondelli_ao_sugo'];
  if (IMGS['petit_gateau'])     imgAccent.src = IMGS['petit_gateau'];
}


/* ============================================================
   08. NAVBAR – SCROLL E HAMBURGUER
   ============================================================ */

const navbar       = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu   = document.getElementById('mobileMenu');

/**
 * Adiciona/remove a classe .scrolled na navbar conforme o scroll.
 * Essa classe ativa o fundo com blur.
 */
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/**
 * Alterna a visibilidade do menu mobile ao clicar no hamburguer.
 */
hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
});

/**
 * Fecha o menu mobile (chamado pelos links do menu mobile via onclick).
 * Exportado como função global para uso no HTML inline.
 */
function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  hamburgerBtn.setAttribute('aria-expanded', 'false');
}


/* ============================================================
   09. FILTROS DO CARDÁPIO
   ============================================================ */

/**
 * Adiciona listener de clique a cada botão de filtro.
 * Ao clicar, ativa o botão clicado e re-renderiza o cardápio.
 */
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove 'active' de todos os botões
    document.querySelectorAll('.filter-btn')
      .forEach(b => b.classList.remove('active'));

    // Ativa o botão clicado
    btn.classList.add('active');

    // Re-renderiza o grid com o filtro selecionado
    renderMenu(btn.dataset.filter);
  });
});


/* ============================================================
   10. INTERSECTIONOBSERVER – ANIMAÇÃO REVEAL
   ============================================================ */

/**
 * Observer que adiciona a classe .visible aos elementos .reveal
 * quando eles entram na viewport, disparando a animação CSS.
 * Usa threshold de 12% para ativar um pouco antes do elemento
 * estar totalmente visível.
 */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // Para de observar após animar
    }
  });
}, { threshold: 0.12 });

/**
 * Registra todos os elementos .reveal atuais no observer.
 * Chamada na inicialização e após renderizar novos cards.
 */
function observeRevealElements() {
  document.querySelectorAll('.reveal')
    .forEach(el => revealObserver.observe(el));
}


/* ============================================================
   11. INICIALIZAÇÃO
   Aguarda o DOM estar pronto antes de executar tudo.
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setupHeroBg();       // Aplica imagem de fundo no hero
  setupSobreImgs();    // Aplica imagens na seção Sobre
  initParallax();      // Inicia o efeito parallax
  renderMenu();        // Renderiza todos os pratos do cardápio
  buildGallery();      // Monta o grid da galeria
  observeRevealElements(); // Inicia as animações de entrada
});
