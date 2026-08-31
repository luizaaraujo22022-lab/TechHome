/**
 * NovaMart - Plataforma de E-Commerce & Suporte Humano ao Vivo
 * JavaScript Moderno (ES6+) - Sistema de Salas de Atendimento Separadas por Especialista
 */

// ==========================================================================
// 1. BASE DE DADOS DO CATÁLOGO DE PRODUTOS
// ==========================================================================
const PRODUCTS = [
  {
    id: 1,
    name: "Headphone Sem Fio Aura Pro ANC",
    category: "audio",
    categoryLabel: "Áudio & Som",
    price: 1399.00,
    originalPrice: 1749.00,
    rating: 4.9,
    reviewsCount: 342,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&auto=format&fit=crop&q=80",
    badge: "MAIS VENDIDO",
    discountPercent: 20,
    inStock: true,
    stockCount: 14,
    description: "Cancelamento ativo de ruído híbrido (ANC) de última geração com drivers de 40mm, áudio espacial 360°, bateria de 45 horas e almofadas de espuma com memória.",
    features: [
      "Cancelamento Ativo de Ruído Híbrido (ANC)",
      "45 Horas de Bateria com Carregamento Rápido USB-C",
      "Bluetooth 5.3 Multiponto e Suporte a Codec LDAC",
      "Quatro Microfones com IA para Chamadas Cristalinas"
    ]
  },
  {
    id: 2,
    name: "Smartwatch ChronoMax Ultra 2",
    category: "wearables",
    categoryLabel: "Smartwatches",
    price: 999.00,
    originalPrice: 1249.00,
    rating: 4.8,
    reviewsCount: 215,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
    badge: "SUPER OFERTA",
    discountPercent: 20,
    inStock: true,
    stockCount: 8,
    description: "Estrutura robusta em titânio aeroespacial com tela AMOLED de safira, monitoramento contínuo de ECG, oxímetro SpO2, GPS integrado de dupla frequência e 14 dias de bateria.",
    features: [
      "Tela AMOLED de Safira 1.43\" Ultra Brilhante (1000 nits)",
      "Monitoramento Contínuo de Frequência Cardíaca e Sono",
      "Resistência à Água 5ATM + IP68 (Mergulho até 50m)",
      "GPS Integrado de Dupla Frequência com Bússola Digital"
    ]
  },
  {
    id: 3,
    name: "Teclado Mecânico ApexStrike RGB",
    category: "gaming",
    categoryLabel: "Games & Periféricos",
    price: 699.00,
    originalPrice: 849.00,
    rating: 4.9,
    reviewsCount: 188,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&auto=format&fit=crop&q=80",
    badge: "ESCOLHA GAMER",
    discountPercent: 18,
    inStock: true,
    stockCount: 19,
    description: "Switches ópticos lineares hot-swappable ultrarrápidos, iluminação RGB tecla por tecla, estrutura gasket mount com espuma acústica Poron e placa de alumínio CNC.",
    features: [
      "Switches Ópticos Lineares Hot-Swappable",
      "Estrutura Gasket Mounted com Isolamento Acústico",
      "Conexão Tri-Mode (2.4GHz sem fio, Bluetooth 5.0 e Cabo Type-C)",
      "Keycaps em PBT Double-Shot de Alta Durabilidade"
    ]
  },
  {
    id: 4,
    name: "Luminária Inteligente CyberDesk RGB",
    category: "smarthome",
    categoryLabel: "Casa Inteligente",
    price: 449.00,
    originalPrice: 599.00,
    rating: 4.7,
    reviewsCount: 94,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&auto=format&fit=crop&q=80",
    badge: "NOVIDADE",
    discountPercent: 25,
    inStock: true,
    stockCount: 22,
    description: "Luminária de mesa com 16 milhões de cores, sincronização com ritmo musical, base com carregador por indução Qi Fast Charge de 15W e integração com Alexa e Apple Home.",
    features: [
      "16 Milhões de Cores e Efeitos de Degradê Dinâmicos",
      "Base com Carregador por Indução Qi de 15W Integrada",
      "Modo Ritmo Musical com Microfone de Alta Precisão",
      "Compatível com Matter, Apple HomeKit, Alexa e Google Home"
    ]
  },
  {
    id: 5,
    name: "Fones de Ouvido Sem Fio AeroTune",
    category: "audio",
    categoryLabel: "Áudio & Som",
    price: 599.00,
    originalPrice: 749.00,
    rating: 4.8,
    reviewsCount: 164,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&auto=format&fit=crop&q=80",
    badge: "PROMOÇÃO",
    discountPercent: 20,
    inStock: true,
    stockCount: 30,
    description: "Fones de ouvido ultraleves com graves encorpados, modo transparência adaptável, estojo compacto com até 32 horas de reprodução total e resistência a suor IPX5.",
    features: [
      "Drivers Dinâmicos de Berílio de 11mm para Áudio Premium",
      "32 Horas de Bateria Total com Estojo de Carregamento Sem Fio",
      "Cancelamento de Ruído Ambiental em Chamadas",
      "Certificação IPX5 Resistente a Suor e Chuva"
    ]
  },
  {
    id: 6,
    name: "Carregador Rápido OmniPower 100W GaN",
    category: "accessories",
    categoryLabel: "Acessórios & Energia",
    price: 249.00,
    originalPrice: 349.00,
    rating: 4.9,
    reviewsCount: 420,
    image: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=800&auto=format&fit=crop&q=80",
    badge: "ESSENCIAL",
    discountPercent: 29,
    inStock: true,
    stockCount: 50,
    description: "Carregador de tomada compacto com tecnologia Nitreto de Gálio (GaN III), com 4 portas simultâneas capazes de carregar notebooks, celulares e tablets na velocidade máxima.",
    features: [
      "Saída Máxima de 100W Power Delivery (PD 3.0 e Quick Charge 4+)",
      "3 Portas USB-C + 1 Porta USB-A Inteligentes",
      "40% Menor que os Carregadores Convencionais de Silicone",
      "Proteção Avançada contra Sobreaquecimento e Picos de Tensão"
    ]
  },
  {
    id: 7,
    name: "Anel Inteligente PulseFit Titanium",
    category: "wearables",
    categoryLabel: "Smartwatches",
    price: 1149.00,
    originalPrice: 1399.00,
    rating: 4.7,
    reviewsCount: 88,
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&auto=format&fit=crop&q=80",
    badge: "INOVAÇÃO",
    discountPercent: 18,
    inStock: true,
    stockCount: 12,
    description: "Anel inteligente em titânio polido para monitoramento de saúde 24/7, estágios do sono, pontuação de prontidão física, temperatura corporal e bateria para até 7 dias.",
    features: [
      "Construção em Titânio de Grau Médico Ultraleve",
      "Monitoramento Detalhado do Sono e Níveis de Estresse",
      "Sensor de Variação de Frequência Cardíaca (HRV)",
      "Resistente à Água até 100m de Profundidade"
    ]
  },
  {
    id: 8,
    name: "Mouse Gamer Sem Fio HyperGlide",
    category: "gaming",
    categoryLabel: "Games & Periféricos",
    price: 399.00,
    originalPrice: 499.00,
    rating: 4.8,
    reviewsCount: 147,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=800&auto=format&fit=crop&q=80",
    badge: "PRO GAMER",
    discountPercent: 20,
    inStock: true,
    stockCount: 25,
    description: "Mouse gamer ultraleve de apenas 49 gramas com sensor óptico de 26.000 DPI, skates 100% PTFE virgem e taxa de atualização sem atrasos de 4000Hz.",
    features: [
      "Chassi Ultraleve de 49g sem Furos Externos",
      "Sensor Óptico de Precisão com 26.000 DPI",
      "Switches Ópticos com Vida Útil de 90 Milhões de Cliques",
      "Até 80 Horas de Autonomia de Bateria Contínua"
    ]
  },
  {
    id: 9,
    name: "Caixa de Som Portátil AuraSound 360",
    category: "audio",
    categoryLabel: "Áudio & Som",
    price: 949.00,
    originalPrice: 1149.00,
    rating: 4.9,
    reviewsCount: 172,
    image: "https://images.unsplash.com/photo-1545454675-3531b543be5d?w=800&auto=format&fit=crop&q=80",
    badge: "TOP AVALIADO",
    discountPercent: 17,
    inStock: true,
    stockCount: 16,
    description: "Som envolvente em 360 graus com subwoofer ativo direcionado para baixo, revestimento acústico resistente, emparelhamento estéreo TWS e 24 horas de reprodução.",
    features: [
      "Áudio Espacial Imersivo 360 Graus",
      "Dois Radiadores Passivos para Graves Profundos de 40Hz",
      "Certificação IPX7 Totalmente à Prova D'água",
      "Bateria para 24 Horas Contínuas com Powerbank Integrado"
    ]
  },
  {
    id: 10,
    name: "Suporte e Carregador MagSafe 3 em 1",
    category: "accessories",
    categoryLabel: "Acessórios & Energia",
    price: 349.00,
    originalPrice: 449.00,
    rating: 4.8,
    reviewsCount: 230,
    image: "https://images.unsplash.com/photo-1622445262464-84b1456045b6?w=800&auto=format&fit=crop&q=80",
    badge: "POPULAR",
    discountPercent: 22,
    inStock: true,
    stockCount: 40,
    description: "Estação de carregamento elegante em liga de alumínio usinada para recarregar iPhone (MagSafe 15W), Apple Watch e estojo de fones simultaneamente.",
    features: [
      "Alinhamento Magnético MagSafe Rápido de 15W Oficial",
      "Base Maciça em Alumínio Anodizado com Peso de Estabilidade",
      "Suporte Giratório para Uso em Modo Horizontal ou Vertical",
      "Acompanha Fonte de 36W e Cabo Trançado Reforçado"
    ]
  }
];

// ==========================================================================
// 2. EQUIPE DE ESPECIALISTAS DE SUPORTE
// ==========================================================================
const SUPPORT_AGENTS = {
  sarah: {
    id: "sarah",
    name: "Sarah Miller",
    role: "Sucesso do Cliente & Vendas",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    specialty: "Atendimento Geral, Pedidos e Cupons",
    greeting: "Olá! 👋 Sou a **Sarah** da equipe de atendimento e vendas. Como posso te ajudar hoje? Pode me perguntar sobre preços, cupons de desconto, prazos de entrega ou formas de pagamento!"
  },
  alex: {
    id: "alex",
    name: "Alex Rivera",
    role: "Especialista em Áudio & Games",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    specialty: "Especificações Técnicas, Compatibilidade e Periféricos",
    greeting: "E aí, tudo bem? Aqui é o **Alex** do suporte técnico! 🎧 Precisa de ajuda com especificações de fones, teclados mecânicos, mouses gamers ou checar compatibilidade com o seu setup? Só me falar!"
  },
  david: {
    id: "david",
    name: "David Chen",
    role: "Logística & Devoluções",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    specialty: "Envios, Prazos de Entrega e Garantia",
    greeting: "Olá! Sou o **David** do time de logística e pós-venda. 📦 Posso te ajudar a rastrear encomendas em trânsito, tirar dúvidas sobre prazos de frete, trocas ou sobre nossa garantia de 2 anos!"
  }
};

// ==========================================================================
// 3. ESTADO GLOBAL DA APLICAÇÃO (COM SALAS DE CHAT SEPARADAS)
// ==========================================================================
const AppState = {
  cart: JSON.parse(localStorage.getItem("novamart_cart") || "[]"),
  wishlist: JSON.parse(localStorage.getItem("novamart_wishlist") || "[]"),
  appliedPromo: JSON.parse(localStorage.getItem("novamart_promo") || "null"),
  theme: localStorage.getItem("novamart_theme") || "dark",
  soundEnabled: JSON.parse(localStorage.getItem("novamart_sound") || "true"),
  
  // Filtros do Catálogo
  currentCategory: "all",
  searchQuery: "",
  sortBy: "featured",
  maxPrice: 5000,
  inStockOnly: false,
  
  // Estado do Chat e Salas Separadas por Especialista
  activeAgent: "sarah",
  attachedProduct: null,
  isAgentTyping: false,
  unreadCount: 0,
  
  // Salas de conversa isoladas para cada atendente
  agentRooms: {
    sarah: {
      messages: [
        {
          id: 1,
          sender: "agent",
          agentId: "sarah",
          html: SUPPORT_AGENTS.sarah.greeting,
          time: formatCurrentTime(),
          product: null,
          ticketId: null
        }
      ]
    },
    alex: {
      messages: [
        {
          id: 2,
          sender: "agent",
          agentId: "alex",
          html: SUPPORT_AGENTS.alex.greeting,
          time: formatCurrentTime(),
          product: null,
          ticketId: null
        }
      ]
    },
    david: {
      messages: [
        {
          id: 3,
          sender: "agent",
          agentId: "david",
          html: SUPPORT_AGENTS.david.greeting,
          time: formatCurrentTime(),
          product: null,
          ticketId: null
        }
      ]
    }
  },
  
  // Modais Ativos
  activeModal: null
};

// Cupons de Desconto Válidos
const VALID_PROMOS = {
  DESCONTO20: { discountPercent: 20, description: "Desconto de 20% aplicado com sucesso!" },
  SAVE20: { discountPercent: 20, description: "Desconto de 20% aplicado com sucesso!" },
  FRETELIVRE: { freeShipping: true, description: "Frete grátis aplicado ao seu pedido!" },
  FREESHIP: { freeShipping: true, description: "Frete grátis aplicado ao seu pedido!" },
  BEMVINDO10: { discountPercent: 10, description: "Desconto de boas-vindas de 10% aplicado!" },
  VIP50: { flatDiscount: 150, minSubtotal: 800, description: "Desconto VIP de R$ 150,00 aplicado!" }
};

// ==========================================================================
// 4. SINTETIZADOR DE EFEITOS SONOROS (Web Audio API)
// ==========================================================================
const SoundFx = {
  ctx: null,
  
  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
  },
  
  playChime() {
    if (!AppState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5
      
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  },
  
  playClick() {
    if (!AppState.soundEnabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = "triangle";
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }
};

// ==========================================================================
// 5. CACHE DE ELEMENTOS DO DOM
// ==========================================================================
const DOM = {
  html: document.documentElement,
  themeToggleBtn: document.getElementById("themeToggleBtn"),
  toastContainer: document.getElementById("toastContainer"),
  
  // Cabeçalho e Gatilhos de Suporte
  globalSearchForm: document.getElementById("globalSearchForm"),
  globalSearchInput: document.getElementById("globalSearchInput"),
  clearSearchBtn: document.getElementById("clearSearchBtn"),
  headerSupportBtn: document.getElementById("headerSupportBtn"),
  topChatTriggerBtn: document.getElementById("topChatTriggerBtn"),
  heroSupportTriggerBtn: document.getElementById("heroSupportTriggerBtn"),
  calloutSupportBtn: document.getElementById("calloutSupportBtn"),
  bannerOpenChatBtn: document.getElementById("bannerOpenChatBtn"),
  footerChatBtn: document.getElementById("footerChatBtn"),
  footerTrackBtn: document.getElementById("footerTrackBtn"),
  footerReturnsBtn: document.getElementById("footerReturnsBtn"),
  footerPromoBtn: document.getElementById("footerPromoBtn"),
  
  // Catálogo e Filtros
  productsGrid: document.getElementById("productsGrid"),
  categoriesNav: document.querySelector(".categories-nav"),
  sortSelect: document.getElementById("sortSelect"),
  priceMaxRange: document.getElementById("priceMaxRange"),
  priceRangeValue: document.getElementById("priceRangeValue"),
  inStockCheckbox: document.getElementById("inStockCheckbox"),
  resultsCount: document.getElementById("resultsCount"),
  activeFiltersBar: document.getElementById("activeFiltersBar"),
  filterTagsContainer: document.getElementById("filterTagsContainer"),
  clearAllFiltersBtn: document.getElementById("clearAllFiltersBtn"),
  emptyState: document.getElementById("emptyState"),
  resetFiltersEmptyBtn: document.getElementById("resetFiltersEmptyBtn"),
  askSupportEmptyBtn: document.getElementById("askSupportEmptyBtn"),
  
  // Gaveta do Carrinho
  cartToggleBtn: document.getElementById("cartToggleBtn"),
  cartDrawer: document.getElementById("cartDrawer"),
  cartOverlay: document.getElementById("cartOverlay"),
  closeCartBtn: document.getElementById("closeCartBtn"),
  cartCount: document.getElementById("cartCount"),
  cartDrawerCount: document.getElementById("cartDrawerCount"),
  cartTotalHeader: document.getElementById("cartTotalHeader"),
  cartItemsList: document.getElementById("cartItemsList"),
  shippingProgressBar: document.getElementById("shippingProgressBar"),
  shippingProgressText: document.getElementById("shippingProgressText"),
  promoCodeInput: document.getElementById("promoCodeInput"),
  applyPromoBtn: document.getElementById("applyPromoBtn"),
  promoMessage: document.getElementById("promoMessage"),
  discountRow: document.getElementById("discountRow"),
  appliedPromoTag: document.getElementById("appliedPromoTag"),
  cartSubtotal: document.getElementById("cartSubtotal"),
  cartDiscount: document.getElementById("cartDiscount"),
  cartShipping: document.getElementById("cartShipping"),
  cartTax: document.getElementById("cartTax"),
  cartTotal: document.getElementById("cartTotal"),
  proceedToCheckoutBtn: document.getElementById("proceedToCheckoutBtn"),
  cartNeedHelpBtn: document.getElementById("cartNeedHelpBtn"),
  
  // Gaveta de Favoritos (Wishlist)
  wishlistToggleBtn: document.getElementById("wishlistToggleBtn"),
  wishlistDrawer: document.getElementById("wishlistDrawer"),
  closeWishlistBtn: document.getElementById("closeWishlistBtn"),
  wishlistCount: document.getElementById("wishlistCount"),
  wishlistDrawerCount: document.getElementById("wishlistDrawerCount"),
  wishlistItemsList: document.getElementById("wishlistItemsList"),
  
  // Modal de Visualização Rápida
  quickViewModal: document.getElementById("quickViewModal"),
  closeQuickViewBtn: document.getElementById("closeQuickViewBtn"),
  quickViewContent: document.getElementById("quickViewContent"),
  
  // Modal de Checkout
  checkoutModal: document.getElementById("checkoutModal"),
  closeCheckoutBtn: document.getElementById("closeCheckoutBtn"),
  checkoutForm: document.getElementById("checkoutForm"),
  checkoutItemsPreview: document.getElementById("checkoutItemsPreview"),
  checkoutSubtotal: document.getElementById("checkoutSubtotal"),
  checkoutDiscountRow: document.getElementById("checkoutDiscountRow"),
  checkoutDiscount: document.getElementById("checkoutDiscount"),
  checkoutShipping: document.getElementById("checkoutShipping"),
  checkoutTax: document.getElementById("checkoutTax"),
  checkoutGrandTotal: document.getElementById("checkoutGrandTotal"),
  
  // Modal de Confirmação de Pedido
  orderSuccessModal: document.getElementById("orderSuccessModal"),
  confirmedOrderId: document.getElementById("confirmedOrderId"),
  copyOrderIdBtn: document.getElementById("copyOrderIdBtn"),
  orderConfirmationDetails: document.getElementById("orderConfirmationDetails"),
  trackInChatBtn: document.getElementById("trackInChatBtn"),
  continueShoppingBtn: document.getElementById("continueShoppingBtn"),
  
  // Chat de Suporte ao Vivo e Abas de Especialistas
  liveChatWidget: document.getElementById("liveChatWidget"),
  chatLauncherBtn: document.getElementById("chatLauncherBtn"),
  chatUnreadBadge: document.getElementById("chatUnreadBadge"),
  chatWindowCard: document.getElementById("chatWindowCard"),
  closeChatWindowBtn: document.getElementById("closeChatWindowBtn"),
  chatAgentAvatar: document.getElementById("chatAgentAvatar"),
  chatAgentName: document.getElementById("chatAgentName"),
  chatAgentRole: document.getElementById("chatAgentRole"),
  chatAgentStatus: document.getElementById("chatAgentStatus"),
  switchAgentDropdownBtn: document.getElementById("switchAgentDropdownBtn"),
  agentSelectMenu: document.getElementById("agentSelectMenu"),
  chatAgentTabsBar: document.getElementById("chatAgentTabsBar"),
  toggleSoundBtn: document.getElementById("toggleSoundBtn"),
  createTicketBtn: document.getElementById("createTicketBtn"),
  chatQuickActions: document.getElementById("chatQuickActions"),
  chatMessagesStream: document.getElementById("chatMessagesStream"),
  typingIndicator: document.getElementById("typingIndicator"),
  typingAgentAvatar: document.getElementById("typingAgentAvatar"),
  typingAgentLabel: document.getElementById("typingAgentLabel"),
  chatFeedbackPrompt: document.getElementById("chatFeedbackPrompt"),
  chatAttachedProduct: document.getElementById("chatAttachedProduct"),
  attachedProductImg: document.getElementById("attachedProductImg"),
  attachedProductTitle: document.getElementById("attachedProductTitle"),
  attachedProductPrice: document.getElementById("attachedProductPrice"),
  removeAttachedProductBtn: document.getElementById("removeAttachedProductBtn"),
  chatMessageForm: document.getElementById("chatMessageForm"),
  chatTextInput: document.getElementById("chatTextInput"),
  chatEmojiBtn: document.getElementById("chatEmojiBtn"),
  
  heroQuickBuyBtn: document.getElementById("heroQuickBuyBtn"),
  newsletterForm: document.getElementById("newsletterForm")
};

// ==========================================================================
// 6. INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================================================
function initApp() {
  applyTheme(AppState.theme);
  renderProducts();
  updateCartUI();
  updateWishlistUI();
  initSupportChat();
  attachEventListeners();
}

// ==========================================================================
// 7. GERENCIAMENTO DE TEMA (ESCURO / CLARO)
// ==========================================================================
function applyTheme(theme) {
  AppState.theme = theme;
  DOM.html.setAttribute("data-theme", theme);
  localStorage.setItem("novamart_theme", theme);
}

function toggleTheme() {
  const newTheme = AppState.theme === "dark" ? "light" : "dark";
  applyTheme(newTheme);
  SoundFx.playClick();
  showToast("Tema Atualizado", `Alternado para o modo ${newTheme === 'dark' ? 'Escuro' : 'Claro'}`, "🎨");
}

// ==========================================================================
// 8. NOTIFICAÇÕES TOAST E FORMATAÇÃO DE MOEDA
// ==========================================================================
function showToast(title, message, icon = "🔔", duration = 3500) {
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `
    <span class="toast-icon">${icon}</span>
    <div class="toast-body">
      <strong class="toast-title">${title}</strong>
      <span class="toast-message">${message}</span>
    </div>
    <button class="toast-close" aria-label="Fechar notificação">&times;</button>
  `;
  
  const closeBtn = toast.querySelector(".toast-close");
  closeBtn.addEventListener("click", () => removeToast(toast));
  
  DOM.toastContainer.appendChild(toast);
  
  const timer = setTimeout(() => {
    removeToast(toast);
  }, duration);
  
  function removeToast(el) {
    clearTimeout(timer);
    el.classList.add("toast-hiding");
    setTimeout(() => {
      if (el.parentElement) el.parentElement.removeChild(el);
    }, 300);
  }
}

function formatMoney(amount) {
  return amount.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

// ==========================================================================
// 9. RENDERIZAÇÃO E FILTRAGEM DO CATÁLOGO
// ==========================================================================
function getFilteredProducts() {
  return PRODUCTS.filter(p => {
    if (AppState.currentCategory !== "all" && p.category !== AppState.currentCategory) {
      return false;
    }
    
    if (AppState.searchQuery.trim() !== "") {
      const q = AppState.searchQuery.toLowerCase();
      const matchName = p.name.toLowerCase().includes(q);
      const matchDesc = p.description.toLowerCase().includes(q);
      const matchCat = p.categoryLabel.toLowerCase().includes(q);
      if (!matchName && !matchDesc && !matchCat) return false;
    }
    
    if (p.price > AppState.maxPrice) {
      return false;
    }
    
    if (AppState.inStockOnly && !p.inStock) {
      return false;
    }
    
    return true;
  }).sort((a, b) => {
    switch (AppState.sortBy) {
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      case "rating":
        return b.rating - a.rating;
      case "discount":
        return b.discountPercent - a.discountPercent;
      case "featured":
      default:
        return a.id - b.id;
    }
  });
}

function renderProducts() {
  const filtered = getFilteredProducts();
  DOM.productsGrid.innerHTML = "";
  
  DOM.resultsCount.textContent = `Exibindo ${filtered.length} produto${filtered.length === 1 ? '' : 's'}`;
  renderFilterTags();
  
  if (filtered.length === 0) {
    DOM.emptyState.style.display = "block";
    DOM.productsGrid.style.display = "none";
    return;
  }
  
  DOM.emptyState.style.display = "none";
  DOM.productsGrid.style.display = "grid";
  
  filtered.forEach(product => {
    const isWishlisted = AppState.wishlist.some(id => id === product.id);
    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("data-product-id", product.id);
    
    card.innerHTML = `
      <div class="product-card-img-wrap">
        <img src="${product.image}" alt="${product.name}" class="product-card-img" loading="lazy">
        
        <div class="product-badge-wrap">
          <span class="badge-pill badge-discount">-${product.discountPercent}%</span>
          ${product.badge ? `<span class="badge-pill badge-tag">${product.badge}</span>` : ''}
        </div>
        
        <div class="card-floating-actions">
          <button class="card-action-btn ${isWishlisted ? 'wishlist-active' : ''}" data-action="toggle-wishlist" data-id="${product.id}" title="Favoritar Produto" aria-label="Favoritar Produto">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <button class="card-action-btn" data-action="quick-view" data-id="${product.id}" title="Visualização Rápida" aria-label="Visualização Rápida">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </button>
        </div>
      </div>
      
      <div class="product-card-body">
        <div class="product-meta-row">
          <span class="product-category-tag">${product.categoryLabel}</span>
          <div class="product-rating">
            <span>★</span> ${product.rating.toFixed(1)} <span class="product-rating-count">(${product.reviewsCount})</span>
          </div>
        </div>
        
        <h3 class="product-title" title="${product.name}">${product.name}</h3>
        <p class="product-short-desc">${product.description}</p>
        
        <div class="product-price-row">
          <span class="product-price">${formatMoney(product.price)}</span>
          <span class="product-old-price">${formatMoney(product.originalPrice)}</span>
        </div>
        
        <div class="product-card-actions">
          <button class="btn btn-primary btn-block" data-action="add-to-cart" data-id="${product.id}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Comprar
          </button>
          <button class="btn-ask-support-card" data-action="ask-support" data-id="${product.id}" title="Tirar dúvida sobre este produto no chat" aria-label="Tirar dúvida no chat">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          </button>
        </div>
      </div>
    `;
    
    DOM.productsGrid.appendChild(card);
  });
}

function renderFilterTags() {
  DOM.filterTagsContainer.innerHTML = "";
  let hasFilters = false;
  
  if (AppState.currentCategory !== "all") {
    hasFilters = true;
    addTag(`Categoria: ${AppState.currentCategory}`, () => {
      AppState.currentCategory = "all";
      updateCategoryPillActive();
      renderProducts();
    });
  }
  
  if (AppState.searchQuery.trim() !== "") {
    hasFilters = true;
    addTag(`Busca: "${AppState.searchQuery}"`, () => {
      AppState.searchQuery = "";
      DOM.globalSearchInput.value = "";
      DOM.clearSearchBtn.style.display = "none";
      renderProducts();
    });
  }
  
  if (AppState.maxPrice < 5000) {
    hasFilters = true;
    addTag(`Preço Máx: ${formatMoney(AppState.maxPrice)}`, () => {
      AppState.maxPrice = 5000;
      DOM.priceMaxRange.value = 5000;
      DOM.priceRangeValue.textContent = "R$ 5.000";
      renderProducts();
    });
  }
  
  if (AppState.inStockOnly) {
    hasFilters = true;
    addTag(`Apenas em Estoque`, () => {
      AppState.inStockOnly = false;
      DOM.inStockCheckbox.checked = false;
      renderProducts();
    });
  }
  
  DOM.activeFiltersBar.style.display = hasFilters ? "flex" : "none";
  
  function addTag(label, onRemove) {
    const tag = document.createElement("span");
    tag.className = "filter-badge";
    tag.innerHTML = `<span>${label}</span><button aria-label="Remover filtro">&times;</button>`;
    tag.querySelector("button").addEventListener("click", onRemove);
    DOM.filterTagsContainer.appendChild(tag);
  }
}

function updateCategoryPillActive() {
  document.querySelectorAll(".cat-pill").forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === AppState.currentCategory);
  });
}

function resetAllFilters() {
  AppState.currentCategory = "all";
  AppState.searchQuery = "";
  AppState.maxPrice = 5000;
  AppState.inStockOnly = false;
  AppState.sortBy = "featured";
  
  DOM.globalSearchInput.value = "";
  DOM.clearSearchBtn.style.display = "none";
  DOM.priceMaxRange.value = 5000;
  DOM.priceRangeValue.textContent = "R$ 5.000";
  DOM.inStockCheckbox.checked = false;
  DOM.sortSelect.value = "featured";
  
  updateCategoryPillActive();
  renderProducts();
  SoundFx.playClick();
}

// ==========================================================================
// 10. LÓGICA DO CARRINHO DE COMPRAS
// ==========================================================================
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  const existingIndex = AppState.cart.findIndex(item => item.id === productId);
  if (existingIndex > -1) {
    AppState.cart[existingIndex].quantity += quantity;
  } else {
    AppState.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    });
  }
  
  saveCart();
  updateCartUI();
  SoundFx.playChime();
  showToast("Adicionado ao Carrinho! 🛍️", `${product.name} (x${quantity})`, "✓");
}

function updateCartQuantity(productId, newQty) {
  if (newQty <= 0) {
    removeFromCart(productId);
    return;
  }
  const item = AppState.cart.find(i => i.id === productId);
  if (item) {
    item.quantity = newQty;
    saveCart();
    updateCartUI();
  }
}

function removeFromCart(productId) {
  const item = AppState.cart.find(i => i.id === productId);
  AppState.cart = AppState.cart.filter(i => i.id !== productId);
  saveCart();
  updateCartUI();
  if (item) {
    showToast("Item Removido", `${item.name} foi removido do carrinho`, "🗑️");
  }
}

function saveCart() {
  localStorage.setItem("novamart_cart", JSON.stringify(AppState.cart));
}

function calculateCartTotals() {
  const subtotal = AppState.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discount = 0;
  let shipping = subtotal >= 250 || subtotal === 0 ? 0 : 29.90;
  
  if (AppState.appliedPromo) {
    const promo = AppState.appliedPromo;
    if (promo.discountPercent) {
      discount = subtotal * (promo.discountPercent / 100);
    } else if (promo.flatDiscount && subtotal >= (promo.minSubtotal || 0)) {
      discount = promo.flatDiscount;
    }
    if (promo.freeShipping) {
      shipping = 0;
    }
  }
  
  const tax = 0;
  const total = Math.max(0, subtotal - discount + (subtotal > 0 ? shipping : 0));
  
  return { subtotal, discount, shipping, tax, total };
}

function updateCartUI() {
  const totalCount = AppState.cart.reduce((sum, item) => sum + item.quantity, 0);
  DOM.cartCount.textContent = totalCount;
  DOM.cartDrawerCount.textContent = totalCount;
  
  const totals = calculateCartTotals();
  DOM.cartTotalHeader.textContent = formatMoney(totals.total);
  
  const freeShipThreshold = 250.0;
  const progressPercent = Math.min(100, (totals.subtotal / freeShipThreshold) * 100);
  DOM.shippingProgressBar.style.width = `${progressPercent}%`;
  
  if (totals.subtotal >= freeShipThreshold) {
    DOM.shippingProgressText.innerHTML = `🎉 <strong>Parabéns!</strong> Você ganhou <strong>FRETE GRÁTIS EXPRESSO</strong>!`;
  } else {
    const remaining = (freeShipThreshold - totals.subtotal);
    DOM.shippingProgressText.innerHTML = `Adicione mais <strong>${formatMoney(remaining)}</strong> para desbloquear <strong>FRETE GRÁTIS EXPRESSO</strong>!`;
  }
  
  DOM.cartItemsList.innerHTML = "";
  if (AppState.cart.length === 0) {
    DOM.cartItemsList.innerHTML = `
      <div class="drawer-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
        <h4>Seu carrinho está vazio</h4>
        <p>Explore nosso catálogo ou peça recomendações no chat de suporte!</p>
      </div>
    `;
    DOM.proceedToCheckoutBtn.disabled = true;
  } else {
    DOM.proceedToCheckoutBtn.disabled = false;
    AppState.cart.forEach(item => {
      const el = document.createElement("div");
      el.className = "cart-item-card";
      el.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <strong class="cart-item-title">${item.name}</strong>
          <span class="cart-item-price">${formatMoney(item.price * item.quantity)}</span>
          <div class="cart-qty-controls">
            <button class="qty-btn" data-cart-action="decrease" data-id="${item.id}">-</button>
            <span class="qty-count">${item.quantity}</span>
            <button class="qty-btn" data-cart-action="increase" data-id="${item.id}">+</button>
          </div>
        </div>
        <button class="btn-remove-item" data-cart-action="remove" data-id="${item.id}" title="Remover item" aria-label="Remover item">&times;</button>
      `;
      DOM.cartItemsList.appendChild(el);
    });
  }
  
  DOM.cartSubtotal.textContent = formatMoney(totals.subtotal);
  DOM.cartShipping.textContent = totals.subtotal === 0 ? "R$ 0,00" : (totals.shipping === 0 ? "GRÁTIS" : formatMoney(totals.shipping));
  DOM.cartTax.textContent = "Incluso";
  DOM.cartTotal.textContent = formatMoney(totals.total);
  
  if (totals.discount > 0 && AppState.appliedPromo) {
    DOM.discountRow.style.display = "flex";
    DOM.appliedPromoTag.textContent = AppState.appliedPromo.code;
    DOM.cartDiscount.textContent = `-${formatMoney(totals.discount)}`;
  } else {
    DOM.discountRow.style.display = "none";
  }
}

function applyPromoCode(code) {
  const cleanCode = code.trim().toUpperCase();
  if (!cleanCode) return;
  
  const promo = VALID_PROMOS[cleanCode];
  if (promo) {
    AppState.appliedPromo = { code: cleanCode, ...promo };
    localStorage.setItem("novamart_promo", JSON.stringify(AppState.appliedPromo));
    DOM.promoMessage.className = "promo-message success";
    DOM.promoMessage.textContent = promo.description;
    updateCartUI();
    SoundFx.playChime();
    showToast("Cupom Aplicado! 🏷️", promo.description, "🎉");
  } else {
    DOM.promoMessage.className = "promo-message error";
    DOM.promoMessage.textContent = "Cupom inválido. Tente 'DESCONTO20' ou peça um cupom no chat!";
  }
}

// ==========================================================================
// 11. LISTA DE DESEJOS (FAVORITOS)
// ==========================================================================
function toggleWishlist(productId) {
  const index = AppState.wishlist.indexOf(productId);
  const product = PRODUCTS.find(p => p.id === productId);
  
  if (index > -1) {
    AppState.wishlist.splice(index, 1);
    showToast("Removido dos Favoritos", product ? product.name : "", "🤍");
  } else {
    AppState.wishlist.push(productId);
    SoundFx.playChime();
    showToast("Salvo nos Favoritos! ❤️", product ? product.name : "", "✨");
  }
  
  localStorage.setItem("novamart_wishlist", JSON.stringify(AppState.wishlist));
  updateWishlistUI();
  renderProducts();
}

function updateWishlistUI() {
  const count = AppState.wishlist.length;
  DOM.wishlistCount.textContent = count;
  DOM.wishlistDrawerCount.textContent = count;
  
  DOM.wishlistItemsList.innerHTML = "";
  if (count === 0) {
    DOM.wishlistItemsList.innerHTML = `
      <div class="drawer-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
        <h4>Sua lista de favoritos está vazia</h4>
        <p>Clique no ícone de coração em qualquer produto para salvar.</p>
      </div>
    `;
  } else {
    AppState.wishlist.forEach(id => {
      const product = PRODUCTS.find(p => p.id === id);
      if (!product) return;
      
      const item = document.createElement("div");
      item.className = "cart-item-card";
      item.innerHTML = `
        <img src="${product.image}" alt="${product.name}" class="cart-item-img">
        <div class="cart-item-info">
          <strong class="cart-item-title">${product.name}</strong>
          <span class="cart-item-price">${formatMoney(product.price)}</span>
          <button class="btn btn-primary btn-sm" style="margin-top:0.35rem;" data-wishlist-action="move-to-cart" data-id="${product.id}">
            Mover para o Carrinho
          </button>
        </div>
        <button class="btn-remove-item" data-wishlist-action="remove" data-id="${product.id}" title="Remover dos favoritos" aria-label="Remover">&times;</button>
      `;
      DOM.wishlistItemsList.appendChild(item);
    });
  }
}

// ==========================================================================
// 12. MODAL DE VISUALIZAÇÃO RÁPIDA
// ==========================================================================
function openQuickView(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  DOM.quickViewContent.innerHTML = `
    <div class="qv-gallery">
      <img src="${product.image}" alt="${product.name}" class="qv-main-img">
    </div>
    <div class="qv-info">
      <span class="qv-category">${product.categoryLabel}</span>
      <h2 class="qv-title">${product.name}</h2>
      
      <div class="qv-rating-row">
        <span style="color:var(--accent-amber);">★★★★★</span>
        <strong>${product.rating.toFixed(1)} / 5.0</strong>
        <span style="color:var(--text-muted);">(${product.reviewsCount} avaliações de compradores)</span>
      </div>
      
      <div class="qv-price-row">
        <span class="qv-current-price">${formatMoney(product.price)}</span>
        <span class="qv-old-price">${formatMoney(product.originalPrice)}</span>
        <span class="badge-pill badge-discount">ECONOMIZE ${product.discountPercent}%</span>
      </div>
      
      <p class="qv-desc">${product.description}</p>
      
      <ul class="qv-features">
        ${product.features.map(f => `<li>${f}</li>`).join('')}
      </ul>
      
      <div class="qv-actions">
        <div class="qv-btn-row">
          <button class="btn btn-primary btn-lg btn-block" id="qvAddToCartBtn" data-id="${product.id}">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
            Comprar Agora
          </button>
          <button class="btn btn-secondary btn-lg" id="qvWishlistBtn" data-id="${product.id}" title="Salvar nos Favoritos">
            ❤️
          </button>
        </div>
        
        <button class="btn btn-glass btn-block" id="qvAskSupportBtn" data-id="${product.id}">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          Tirar dúvidas deste produto com ${SUPPORT_AGENTS[AppState.activeAgent].name}
        </button>
      </div>
    </div>
  `;
  
  document.getElementById("qvAddToCartBtn").addEventListener("click", () => {
    addToCart(product.id, 1);
  });
  document.getElementById("qvWishlistBtn").addEventListener("click", () => {
    toggleWishlist(product.id);
  });
  document.getElementById("qvAskSupportBtn").addEventListener("click", () => {
    closeModal(DOM.quickViewModal);
    openSupportChatWithProduct(product.id);
  });
  
  openModal(DOM.quickViewModal);
}

// ==========================================================================
// 13. FLUXO DE CHECKOUT E PROCESSAMENTO DO PEDIDO
// ==========================================================================
function openCheckoutModal() {
  if (AppState.cart.length === 0) {
    showToast("Carrinho Vazio", "Adicione produtos antes de ir para o pagamento.", "⚠️");
    return;
  }
  
  closeDrawer(DOM.cartDrawer);
  
  DOM.checkoutItemsPreview.innerHTML = "";
  AppState.cart.forEach(item => {
    const el = document.createElement("div");
    el.className = "checkout-item-mini";
    el.innerHTML = `
      <span>${item.name} × ${item.quantity}</span>
      <strong>${formatMoney(item.price * item.quantity)}</strong>
    `;
    DOM.checkoutItemsPreview.appendChild(el);
  });
  
  const totals = calculateCartTotals();
  DOM.checkoutSubtotal.textContent = formatMoney(totals.subtotal);
  DOM.checkoutShipping.textContent = totals.shipping === 0 ? "GRÁTIS" : formatMoney(totals.shipping);
  DOM.checkoutTax.textContent = "Incluso";
  DOM.checkoutGrandTotal.textContent = formatMoney(totals.total);
  
  if (totals.discount > 0) {
    DOM.checkoutDiscountRow.style.display = "flex";
    DOM.checkoutDiscount.textContent = `-${formatMoney(totals.discount)}`;
  } else {
    DOM.checkoutDiscountRow.style.display = "none";
  }
  
  openModal(DOM.checkoutModal);
}

function processCheckout(event) {
  event.preventDefault();
  
  const submitBtn = document.getElementById("submitOrderBtn");
  submitBtn.disabled = true;
  submitBtn.innerHTML = `<span>Processando Pagamento Seguro...</span>`;
  
  setTimeout(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg><span>Pagar & Confirmar Pedido</span>`;
    
    const randomNum = Math.floor(10000 + Math.random() * 90000);
    const orderId = `ORD-${randomNum}`;
    const email = document.getElementById("checkEmail").value || "cliente@exemplo.com";
    const totals = calculateCartTotals();
    
    DOM.confirmedOrderId.textContent = orderId;
    DOM.orderConfirmationDetails.innerHTML = `
      <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
        <span>Destinatário:</span>
        <strong>${document.getElementById("checkFirstName").value} ${document.getElementById("checkLastName").value}</strong>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
        <span>Comprovante Enviado Para:</span>
        <strong>${email}</strong>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:0.4rem;">
        <span>Valor Pago:</span>
        <strong style="color:var(--primary); font-size:1.05rem;">${formatMoney(totals.total)}</strong>
      </div>
      <div style="display:flex; justify-content:space-between;">
        <span>Previsão de Entrega:</span>
        <strong>2 a 4 Dias Úteis (Sedex Expresso)</strong>
      </div>
    `;
    
    AppState.cart = [];
    AppState.appliedPromo = null;
    localStorage.removeItem("novamart_promo");
    saveCart();
    updateCartUI();
    
    closeModal(DOM.checkoutModal);
    openModal(DOM.orderSuccessModal);
    SoundFx.playChime();
  }, 1200);
}

// ==========================================================================
// 14. MOTOR DE SALAS DE CHAT ISOLADAS POR ESPECIALISTA
// ==========================================================================
function initSupportChat() {
  const currentAgent = SUPPORT_AGENTS[AppState.activeAgent];
  updateActiveAgentUI(currentAgent);
  renderAgentRoomMessages(AppState.activeAgent);
}

function updateActiveAgentUI(agent) {
  DOM.chatAgentAvatar.src = agent.avatar;
  DOM.chatAgentName.textContent = agent.name;
  DOM.chatAgentRole.textContent = agent.role;
  DOM.typingAgentAvatar.src = agent.avatar;
  DOM.typingAgentLabel.textContent = `${agent.name.split(' ')[0]} está digitando`;
  
  // Atualizar botões de abas no topo do chat
  document.querySelectorAll(".agent-tab-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.agent === agent.id);
  });
  
  // Atualizar opções do dropdown
  document.querySelectorAll(".agent-select-opt").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.agent === agent.id);
  });
}

function renderAgentRoomMessages(agentId) {
  DOM.chatMessagesStream.innerHTML = "";
  const room = AppState.agentRooms[agentId];
  if (!room || !room.messages) return;

  room.messages.forEach(msg => {
    renderSingleMessage(msg);
  });

  scrollChatToBottom();
}

function renderSingleMessage(msg) {
  const msgRow = document.createElement("div");
  
  if (msg.sender === "user") {
    msgRow.className = "msg-row msg-user";
    let attachmentHtml = "";
    if (msg.attached) {
      attachmentHtml = `
        <div class="chat-product-card">
          <img src="${msg.attached.image}" alt="${msg.attached.name}" class="chat-product-img">
          <div class="chat-product-details">
            <strong>${msg.attached.name}</strong>
            <span>${formatMoney(msg.attached.price)}</span>
          </div>
        </div>
      `;
    }
    
    msgRow.innerHTML = `
      <div class="msg-bubble-wrap">
        <div class="msg-bubble">
          ${msg.text ? escapeHtml(msg.text) : ''}
          ${attachmentHtml}
        </div>
        <span class="msg-timestamp">${msg.time} • Você</span>
      </div>
    `;
  } else {
    // Mensagem do Atendente
    const agent = SUPPORT_AGENTS[msg.agentId || AppState.activeAgent];
    msgRow.className = "msg-row msg-agent";
    
    let productHtml = "";
    if (msg.product) {
      productHtml = `
        <div class="chat-product-card">
          <img src="${msg.product.image}" alt="${msg.product.name}" class="chat-product-img">
          <div class="chat-product-details">
            <strong>${msg.product.name}</strong>
            <span>${formatMoney(msg.product.price)}</span>
          </div>
          <button class="btn-chat-product-view" data-quick-id="${msg.product.id}">Ver Detalhes</button>
        </div>
      `;
    }
    
    let ticketHtml = "";
    if (msg.ticketId) {
      ticketHtml = `
        <div class="chat-ticket-badge">
          <span>📋 Protocolo Registrado: <strong>#${msg.ticketId}</strong></span>
          <span>Prioridade: Alta ⚡</span>
        </div>
      `;
    }
    
    msgRow.innerHTML = `
      <img src="${agent.avatar}" alt="${agent.name}" class="msg-avatar">
      <div class="msg-bubble-wrap">
        <div class="msg-bubble">
          ${msg.html}
          ${productHtml}
          ${ticketHtml}
        </div>
        <span class="msg-timestamp">${agent.name.split(' ')[0]} • ${msg.time}</span>
      </div>
    `;
    
    const viewBtn = msgRow.querySelector(".btn-chat-product-view");
    if (viewBtn) {
      viewBtn.addEventListener("click", () => {
        openQuickView(parseInt(viewBtn.dataset.quickId));
      });
    }
  }
  
  DOM.chatMessagesStream.appendChild(msgRow);
}

function switchAgent(agentId) {
  if (!SUPPORT_AGENTS[agentId] || agentId === AppState.activeAgent) {
    DOM.agentSelectMenu.style.display = "none";
    return;
  }
  
  AppState.activeAgent = agentId;
  const agent = SUPPORT_AGENTS[agentId];
  updateActiveAgentUI(agent);
  DOM.agentSelectMenu.style.display = "none";
  
  // Limpa o chat atual e carrega a sala exclusiva deste atendente
  renderAgentRoomMessages(agentId);
  SoundFx.playClick();
  
  // Se for o primeiro acesso a essa sala, garante saudação
  if (!AppState.agentRooms[agentId] || AppState.agentRooms[agentId].messages.length === 0) {
    AppState.agentRooms[agentId] = {
      messages: [
        {
          id: Date.now(),
          sender: "agent",
          agentId: agentId,
          html: agent.greeting,
          time: formatCurrentTime(),
          product: null,
          ticketId: null
        }
      ]
    };
    renderAgentRoomMessages(agentId);
  }
}

function openSupportChat() {
  DOM.chatWindowCard.classList.add("active");
  DOM.chatWindowCard.setAttribute("aria-hidden", "false");
  AppState.unreadCount = 0;
  DOM.chatUnreadBadge.style.display = "none";
  DOM.chatTextInput.focus();
  scrollChatToBottom();
}

function closeSupportChat() {
  DOM.chatWindowCard.classList.remove("active");
  DOM.chatWindowCard.setAttribute("aria-hidden", "true");
  DOM.agentSelectMenu.style.display = "none";
}

function toggleSupportChat() {
  if (DOM.chatWindowCard.classList.contains("active")) {
    closeSupportChat();
  } else {
    openSupportChat();
  }
}

function openSupportChatWithProduct(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  
  AppState.attachedProduct = product;
  DOM.attachedProductImg.src = product.image;
  DOM.attachedProductTitle.textContent = product.name;
  DOM.attachedProductPrice.textContent = formatMoney(product.price);
  DOM.chatAttachedProduct.style.display = "flex";
  
  openSupportChat();
  DOM.chatTextInput.focus();
  DOM.chatTextInput.placeholder = `Pergunte sobre ${product.name}...`;
}

function removeAttachedProduct() {
  AppState.attachedProduct = null;
  DOM.chatAttachedProduct.style.display = "none";
  DOM.chatTextInput.placeholder = "Digite sua dúvida ou mensagem...";
}

function sendUserMessage(text) {
  const cleanText = text.trim();
  if (!cleanText && !AppState.attachedProduct) return;
  
  const currentAgentId = AppState.activeAgent;
  const attached = AppState.attachedProduct;
  const timeStr = formatCurrentTime();
  
  const userMsgObj = {
    id: Date.now(),
    sender: "user",
    text: cleanText,
    attached: attached,
    time: timeStr
  };
  
  // Salva na sala do atendente atual
  if (!AppState.agentRooms[currentAgentId]) {
    AppState.agentRooms[currentAgentId] = { messages: [] };
  }
  AppState.agentRooms[currentAgentId].messages.push(userMsgObj);
  
  // Renderiza no stream
  renderSingleMessage(userMsgObj);
  scrollChatToBottom();
  SoundFx.playClick();
  
  DOM.chatTextInput.value = "";
  removeAttachedProduct();
  
  processAgentResponse(cleanText, attached, currentAgentId);
}

function addAgentMessageToRoom(agentId, htmlContent, playSound = true, embeddedProduct = null, ticketId = null) {
  const timeStr = formatCurrentTime();
  const agent = SUPPORT_AGENTS[agentId];
  
  const agentMsgObj = {
    id: Date.now() + Math.random(),
    sender: "agent",
    agentId: agentId,
    html: htmlContent,
    time: timeStr,
    product: embeddedProduct,
    ticketId: ticketId
  };
  
  if (!AppState.agentRooms[agentId]) {
    AppState.agentRooms[agentId] = { messages: [] };
  }
  AppState.agentRooms[agentId].messages.push(agentMsgObj);
  
  // Se o usuário ainda estiver na sala deste atendente, renderiza diretamente
  if (AppState.activeAgent === agentId) {
    renderSingleMessage(agentMsgObj);
    scrollChatToBottom();
  }
  
  if (playSound) {
    SoundFx.playChime();
    if (!DOM.chatWindowCard.classList.contains("active")) {
      AppState.unreadCount++;
      DOM.chatUnreadBadge.style.display = "flex";
      DOM.chatUnreadBadge.textContent = AppState.unreadCount;
      showToast(`Nova mensagem de ${agent.name}`, htmlContent.replace(/<[^>]*>/g, '').substring(0, 70) + "...", "💬");
    }
  }
}

function simulateAgentTyping(callback, delay = 900) {
  AppState.isAgentTyping = true;
  DOM.typingIndicator.style.display = "flex";
  scrollChatToBottom();
  
  setTimeout(() => {
    AppState.isAgentTyping = false;
    DOM.typingIndicator.style.display = "none";
    callback();
  }, delay);
}

// ==========================================================================
// RESPOSTAS CONTEXTUAIS PERSONALIZADAS POR ESPECIALISTA
// ==========================================================================
function processAgentResponse(userInput, attachedProduct, targetAgentId) {
  const q = userInput.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const agent = SUPPORT_AGENTS[targetAgentId];
  
  simulateAgentTyping(() => {
    // 1. DÚVIDA SOBRE PRODUTO ANEXADO ESPECÍFICO
    if (attachedProduct) {
      if (targetAgentId === "alex") {
        addAgentMessageToRoom(
          targetAgentId,
          `Análise técnica do **${attachedProduct.name}**: Esse modelo entrega excelente fidelidade e construção de alto nível.<br><br>` +
          `• **Especificações:** Possui recursos de ponta com baixíssima latência e alta durabilidade.<br>` +
          `• **Estoque:** Temos ${attachedProduct.stockCount} unidades prontas para envio.<br>` +
          `• **Preço Especial:** Está por **${formatMoney(attachedProduct.price)}**. Quer saber sobre compatibilidade com algum aparelho seu?`,
          true,
          attachedProduct
        );
      } else if (targetAgentId === "david") {
        addAgentMessageToRoom(
          targetAgentId,
          `Sobre o envio do **${attachedProduct.name}**: Ele já está embalado em nosso centro logístico com despacho prioritário via Sedex Expresso.<br><br>` +
          `• **Garantia de Envio:** Inclui 2 anos de garantia com substituição imediata.<br>` +
          `• **Devolução:** 30 dias de prazo com etiqueta reversa gratuita se precisar trocar.`,
          true,
          attachedProduct
        );
      } else {
        addAgentMessageToRoom(
          targetAgentId,
          `Ótima escolha! O **${attachedProduct.name}** está com preço promocional de **${formatMoney(attachedProduct.price)}** (com ${attachedProduct.discountPercent}% de desconto).<br><br>` +
          `• **Estoque:** Temos ${attachedProduct.stockCount} unidades no centro de distribuição.<br>` +
          `• **Garantia:** 2 anos de garantia oficial com substituição expressa.<br>` +
          `• **Dica:** Você pode usar o cupom **DESCONTO20** para ganhar mais 20% OFF!`,
          true,
          attachedProduct
        );
      }
      return;
    }

    // 2. BUSCA DINÂMICA POR PRODUTOS NO CATÁLOGO
    const matchedProduct = PRODUCTS.find(p => {
      const pName = p.name.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      return q.includes(pName) || 
             (q.includes("fone") && (p.id === 1 || p.id === 5)) ||
             (q.includes("headphone") && p.id === 1) ||
             (q.includes("smartwatch") && p.id === 2) ||
             (q.includes("relogio") && p.id === 2) ||
             (q.includes("teclado") && p.id === 3) ||
             (q.includes("luminaria") && p.id === 4) ||
             (q.includes("lampada") && p.id === 4) ||
             (q.includes("carregador") && (p.id === 6 || p.id === 10)) ||
             (q.includes("anel") && p.id === 7) ||
             (q.includes("mouse") && p.id === 8) ||
             (q.includes("caixa de som") && p.id === 9) ||
             (q.includes("magsafe") && p.id === 10);
    });

    if (matchedProduct && (q.includes("preco") || q.includes("quanto") || q.includes("valor") || q.includes("custa") || q.includes("informac") || q.includes("detalhe") || q.includes("sobre"))) {
      addAgentMessageToRoom(
        targetAgentId,
        `O **${matchedProduct.name}** está saindo por **${formatMoney(matchedProduct.price)}** (de ~~${formatMoney(matchedProduct.originalPrice)}~~).<br><br>` +
        `**Principais Destaques:**<br>` +
        matchedProduct.features.map(f => `• ${f}`).join('<br>') +
        `<br><br>Ele possui nota **${matchedProduct.rating.toFixed(1)}/5 estrelas** e está com envio expresso!`,
        true,
        matchedProduct
      );
      return;
    }

    // 3. SAUDAÇÕES & CUMPRIMENTOS
    if (/^(oi|ola|bom dia|boa tarde|boa noite|e ai|tudo bem|opa|fala|hey|hello)\b/.test(q)) {
      addAgentMessageToRoom(
        targetAgentId,
        `Olá! Tudo ótimo por aqui! 😊<br>` +
        `Sou **${agent.name}** (${agent.role}). Como posso te auxiliar com ${agent.specialty.toLowerCase()} hoje?`
      );
      return;
    }

    // 4. IDENTIDADE / QUEM É VOCÊ / É HUMANO?
    if (q.includes("quem e voce") || q.includes("seu nome") || q.includes("robo") || q.includes("humano") || q.includes("pessoa") || q.includes("voce e real")) {
      addAgentMessageToRoom(
        targetAgentId,
        `Sou **${agent.name}**, especialista em **${agent.specialty}** na NovaMart! 🤝<br><br>` +
        `Aqui cada atendente possui sua própria sala de conversa individual para responder detalhadamente sobre a sua área de especialidade.`
      );
      return;
    }

    // 5. CUPONS DE DESCONTO & PROMOÇÕES
    if (q.includes("cupom") || q.includes("desconto") || q.includes("promo") || q.includes("codigo") || q.includes("oferta") || q.includes("voucher") || q.includes("barato")) {
      addAgentMessageToRoom(
        targetAgentId,
        `Temos cupons especiais ativos para você hoje! 🎉<br><br>` +
        `• **DESCONTO20** → Garante **20% de desconto** em todo o carrinho hoje.<br>` +
        `• **FRETELIVRE** → Libera frete grátis sem valor mínimo.<br><br>` +
        `Basta colar o código na gaveta do carrinho e clicar em **Aplicar**!`
      );
      return;
    }

    // 6. RASTREIO DE PEDIDOS & STATUS DE ENTREGA
    if (q.includes("rastre") || q.includes("meu pedido") || q.includes("onde esta") || q.includes("status") || q.includes("ord-") || q.includes("codigo de rastreio")) {
      const match = userInput.match(/ORD-\d+/i);
      const orderId = match ? match[0].toUpperCase() : "ORD-89241";
      addAgentMessageToRoom(
        targetAgentId,
        `Localizei o rastreamento do pedido **${orderId}** no sistema logístico 📦:<br><br>` +
        `• **Status:** Em trânsito para o seu endereço (Sedex Expresso)<br>` +
        `• **Última Atualização:** Despachado do Centro de Distribuição<br>` +
        `• **Previsão de Chegada:** Próximo dia útil até às 17h<br><br>` +
        `Se precisar alterar dados da entrega, pode falar comigo aqui!`
      );
      return;
    }

    // 7. PRAZOS DE ENTREGA & FRETE
    if (q.includes("prazo") || q.includes("frete") || q.includes("entrega") || q.includes("demora") || q.includes("envio") || q.includes("tempo")) {
      addAgentMessageToRoom(
        targetAgentId,
        `Prazos e condições de envio da NovaMart 🚚:<br><br>` +
        `• **Capitais:** 2 a 4 dias úteis via Sedex Expresso.<br>` +
        `• **Demais Regiões:** 3 a 7 dias úteis.<br>` +
        `• **Frete Grátis:** Automático para compras a partir de **R$ 250,00**.`
      );
      return;
    }

    // 8. FORMAS DE PAGAMENTO / PIX / CARTÃO / PARCELAMENTO
    if (q.includes("pagamento") || q.includes("pagar") || q.includes("pix") || q.includes("cartao") || q.includes("parcel") || q.includes("boleto")) {
      addAgentMessageToRoom(
        targetAgentId,
        `Formas de pagamento aceitas com segurança 💳:<br><br>` +
        `• **Pix:** Aprovação instantânea e despacho mais rápido.<br>` +
        `• **Cartão de Crédito:** Em até **12x sem juros** (Visa, Master, Elo, Amex).<br>` +
        `• **Boleto Bancário:** Compensação em até 1 dia útil.<br>` +
        `• **Apple Pay:** Pagamento por aproximação com 256-bit SSL.`
      );
      return;
    }

    // 9. TROCAS, DEVOLUÇÕES & REEMBOLSO
    if (q.includes("troca") || q.includes("devol") || q.includes("reembols") || q.includes("cancel") || q.includes("arrependi")) {
      addAgentMessageToRoom(
        targetAgentId,
        `Nossa política de devolução é transparente e sem complicações 🛡️:<br><br>` +
        `• **30 Dias:** Para testar o produto com tranquilidade.<br>` +
        `• **Etiqueta Grátis:** Geramos o frete reverso dos Correios sem nenhum custo.<br>` +
        `• **Reembolso:** Estorno integral no mesmo método de pagamento.`
      );
      return;
    }

    // 10. GARANTIA & ASSISTÊNCIA TÉCNICA
    if (q.includes("garantia") || q.includes("defeito") || q.includes("quebr") || q.includes("estrag") || q.includes("assistencia") || q.includes("original") || q.includes("nota fiscal")) {
      addAgentMessageToRoom(
        targetAgentId,
        `Todos os produtos na NovaMart contam com **Garantia Total de 2 Anos** e Nota Fiscal Eletrônica! 📄<br><br>` +
        `Cobrimos qualquer problema técnico de fábrica ou bateria com troca expressa por uma unidade nova.`
      );
      return;
    }

    // 11. RECOMENDAÇÃO DE FONES DE OUVIDO & SOM
    if (q.includes("fone") || q.includes("audio") || q.includes("headphone") || q.includes("som") || q.includes("musica") || q.includes("ouvido") || q.includes("headset")) {
      const bestAudio = PRODUCTS.find(p => p.id === 1);
      addAgentMessageToRoom(
        targetAgentId,
        `Recomendo fortemente o **Headphone Sem Fio Aura Pro ANC**! 🎧<br><br>` +
        `Possui cancelamento ativo de ruído híbrido de 40dB, 45 horas de bateria e suporte ao codec LDAC de alta fidelidade:`,
        true,
        bestAudio
      );
      return;
    }

    // 12. RECOMENDAÇÃO DE GAMES & PERIFÉRICOS
    if (q.includes("teclado") || q.includes("mouse") || q.includes("gamer") || q.includes("jogo") || q.includes("mecanico")) {
      const keyboard = PRODUCTS.find(p => p.id === 3);
      addAgentMessageToRoom(
        targetAgentId,
        `Para jogos e digitação profissional, a melhor opção é o **Teclado Mecânico ApexStrike RGB**! 🎮<br><br>` +
        `Vem com switches ópticos lineares de resposta imediata, estrutura gasket mounted e conexão sem fio tri-mode:`,
        true,
        keyboard
      );
      return;
    }

    // 13. RECOMENDAÇÃO DE SMARTWATCHES & WEARABLES
    if (q.includes("smartwatch") || q.includes("relogio") || q.includes("pulseira") || q.includes("treino") || q.includes("saude")) {
      const watch = PRODUCTS.find(p => p.id === 2);
      addAgentMessageToRoom(
        targetAgentId,
        `Para treinos e saúde, recomendo o **Smartwatch ChronoMax Ultra 2**! ⌚<br><br>` +
        `Estrutura em titânio, tela AMOLED de safira de 1000 nits, ECG contínuo e 14 dias de bateria:`,
        true,
        watch
      );
      return;
    }

    // 14. O QUE VOCÊS VENDEM? / CATÁLOGO GERAL
    if (q.includes("produtos") || q.includes("catalogo") || q.includes("vende") || q.includes("tem na loja") || q.includes("quais")) {
      addAgentMessageToRoom(
        targetAgentId,
        `Temos uma linha completa de eletrônicos premium! 🚀<br><br>` +
        `• 🎧 **Áudio & Som:** Headphones ANC e fones True Wireless.<br>` +
        `• ⌚ **Smartwatches:** Relógios em titânio e anéis inteligentes.<br>` +
        `• 🎮 **Games:** Teclados mecânicos e mouses ultraleves.<br>` +
        `• 🏠 **Casa Inteligente:** Luminárias RGB com ritmo musical.<br>` +
        `• 🔌 **Acessórios:** Carregadores GaN 100W e bases MagSafe.`
      );
      return;
    }

    // 15. ABRIR PROTOCOLO VIP
    if (q.includes("protocolo") || q.includes("atendente") || q.includes("ticket") || q.includes("ajuda humana")) {
      const randomTicket = "SUP-" + Math.floor(10000 + Math.random() * 90000);
      addAgentMessageToRoom(
        targetAgentId,
        `Protocolo de atendimento gerado na minha sala: **#${randomTicket}**! 📋<br><br>` +
        `Estou à sua inteira disposição. Pode me enviar sua dúvida em detalhes!`,
        true,
        null,
        randomTicket
      );
      return;
    }

    // 16. RESPOSTA DE AGRADECIMENTO / DESPEDIDA
    if (q.includes("obrigad") || q.includes("valeu") || q.includes("perfeito") || q.includes("otimo") || q.includes("show") || q.includes("tchau") || q.includes("ate mais")) {
      addAgentMessageToRoom(
        targetAgentId,
        `Por nada! Fico muito contente em ajudar! 😊 Se precisar de mais informações, nossa conversa fica salva aqui na minha sala. Boas compras!`
      );
      return;
    }

    // 17. RESPOSTA PADRÃO PERSONALIZADA PELO PAPEL DO ESPECIALISTA
    addAgentMessageToRoom(
      targetAgentId,
      `Entendi sua pergunta! Como especialista em **${agent.specialty.toLowerCase()}**, posso tirar dúvidas sobre nossos produtos, prazo de entrega, descontos ou especificações técnicas.<br><br>` +
      `Como posso te ajudar especificamente?`
    );
    
    setTimeout(() => {
      DOM.chatFeedbackPrompt.style.display = "block";
      scrollChatToBottom();
    }, 4000);
  }, 800);
}

function handleQuickAction(action) {
  switch (action) {
    case "track_order":
      sendUserMessage("Como faço para rastrear meu pedido?");
      break;
    case "discount_code":
      sendUserMessage("Quais são os cupons de desconto ativos para hoje?");
      break;
    case "returns_help":
      sendUserMessage("Como funciona a política de trocas e devolução de 30 dias?");
      break;
    case "recommend_audio":
      sendUserMessage("Qual o melhor fone de ouvido com cancelamento de ruído?");
      break;
    case "warranty_info":
      sendUserMessage("O que está coberto pela garantia de 2 anos da loja?");
      break;
    case "human_agent":
      sendUserMessage("Gostaria de abrir um protocolo de atendimento prioritário.");
      break;
  }
}

function scrollChatToBottom() {
  DOM.chatMessagesStream.scrollTop = DOM.chatMessagesStream.scrollHeight;
}

function createNewSupportTicket() {
  const ticketId = "SUP-" + Math.floor(10000 + Math.random() * 90000);
  addAgentMessageToRoom(
    AppState.activeAgent,
    `Gerei um protocolo VIP de atendimento para você: <strong>#${ticketId}</strong>. O histórico da nossa conversa foi registrado no sistema com sucesso!`,
    true,
    null,
    ticketId
  );
  SoundFx.playChime();
  showToast("Protocolo Gerado", `Protocolo #${ticketId} criado com sucesso`, "📋");
}

// ==========================================================================
// 15. CONTROLES DE MODAIS E GAVETAS LATERAIS
// ==========================================================================
function openDrawer(drawer) {
  drawer.classList.add("active");
  drawer.setAttribute("aria-hidden", "false");
  DOM.cartOverlay.classList.add("active");
  DOM.cartOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeDrawer(drawer) {
  drawer.classList.remove("active");
  drawer.setAttribute("aria-hidden", "true");
  DOM.cartOverlay.classList.remove("active");
  DOM.cartOverlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function openModal(modal) {
  modal.classList.add("active");
  modal.setAttribute("aria-hidden", "false");
  AppState.activeModal = modal;
  document.body.style.overflow = "hidden";
}

function closeModal(modal) {
  modal.classList.remove("active");
  modal.setAttribute("aria-hidden", "true");
  AppState.activeModal = null;
  document.body.style.overflow = "";
}

// ==========================================================================
// 16. REGISTRO DE EVENTOS (LISTENERS)
// ==========================================================================
function attachEventListeners() {
  DOM.themeToggleBtn.addEventListener("click", toggleTheme);
  
  DOM.globalSearchInput.addEventListener("input", (e) => {
    AppState.searchQuery = e.target.value;
    DOM.clearSearchBtn.style.display = e.target.value ? "flex" : "none";
    renderProducts();
  });
  
  DOM.clearSearchBtn.addEventListener("click", () => {
    DOM.globalSearchInput.value = "";
    AppState.searchQuery = "";
    DOM.clearSearchBtn.style.display = "none";
    renderProducts();
  });
  
  DOM.globalSearchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    renderProducts();
  });
  
  DOM.categoriesNav.addEventListener("click", (e) => {
    const pill = e.target.closest(".cat-pill");
    if (!pill) return;
    AppState.currentCategory = pill.dataset.category;
    updateCategoryPillActive();
    renderProducts();
    SoundFx.playClick();
  });
  
  document.querySelectorAll("[data-category]").forEach(link => {
    if (!link.classList.contains("cat-pill")) {
      link.addEventListener("click", () => {
        const cat = link.dataset.category;
        if (cat) {
          AppState.currentCategory = cat;
          updateCategoryPillActive();
          renderProducts();
        }
      });
    }
  });
  
  DOM.sortSelect.addEventListener("change", (e) => {
    AppState.sortBy = e.target.value;
    renderProducts();
  });
  
  DOM.priceMaxRange.addEventListener("input", (e) => {
    AppState.maxPrice = parseFloat(e.target.value);
    DOM.priceRangeValue.textContent = formatMoney(AppState.maxPrice);
    renderProducts();
  });
  
  DOM.inStockCheckbox.addEventListener("change", (e) => {
    AppState.inStockOnly = e.target.checked;
    renderProducts();
  });
  
  DOM.clearAllFiltersBtn.addEventListener("click", resetAllFilters);
  DOM.resetFiltersEmptyBtn.addEventListener("click", resetAllFilters);
  DOM.askSupportEmptyBtn.addEventListener("click", () => {
    openSupportChat();
  });
  
  DOM.productsGrid.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    
    const action = btn.dataset.action;
    const productId = parseInt(btn.dataset.id);
    
    if (action === "add-to-cart") {
      addToCart(productId, 1);
    } else if (action === "toggle-wishlist") {
      toggleWishlist(productId);
    } else if (action === "quick-view") {
      openQuickView(productId);
    } else if (action === "ask-support") {
      openSupportChatWithProduct(productId);
    }
  });
  
  if (DOM.heroQuickBuyBtn) {
    DOM.heroQuickBuyBtn.addEventListener("click", () => {
      addToCart(1, 1);
    });
  }
  
  // Eventos do Carrinho
  DOM.cartToggleBtn.addEventListener("click", () => openDrawer(DOM.cartDrawer));
  DOM.closeCartBtn.addEventListener("click", () => closeDrawer(DOM.cartDrawer));
  DOM.cartOverlay.addEventListener("click", () => {
    closeDrawer(DOM.cartDrawer);
    closeDrawer(DOM.wishlistDrawer);
  });
  
  DOM.cartItemsList.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.cartAction;
    const id = parseInt(btn.dataset.id);
    const item = AppState.cart.find(i => i.id === id);
    
    if (action === "increase" && item) {
      updateCartQuantity(id, item.quantity + 1);
    } else if (action === "decrease" && item) {
      updateCartQuantity(id, item.quantity - 1);
    } else if (action === "remove") {
      removeFromCart(id);
    }
  });
  
  DOM.applyPromoBtn.addEventListener("click", () => {
    applyPromoCode(DOM.promoCodeInput.value);
  });
  
  DOM.promoCodeInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      applyPromoCode(DOM.promoCodeInput.value);
    }
  });
  
  DOM.proceedToCheckoutBtn.addEventListener("click", openCheckoutModal);
  
  DOM.cartNeedHelpBtn.addEventListener("click", () => {
    closeDrawer(DOM.cartDrawer);
    openSupportChat();
  });
  
  // Eventos dos Favoritos
  DOM.wishlistToggleBtn.addEventListener("click", () => openDrawer(DOM.wishlistDrawer));
  DOM.closeWishlistBtn.addEventListener("click", () => closeDrawer(DOM.wishlistDrawer));
  
  DOM.wishlistItemsList.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    const action = btn.dataset.wishlistAction;
    const id = parseInt(btn.dataset.id);
    
    if (action === "move-to-cart") {
      addToCart(id, 1);
      toggleWishlist(id);
    } else if (action === "remove") {
      toggleWishlist(id);
    }
  });
  
  // Fechamento de Modais
  DOM.closeQuickViewBtn.addEventListener("click", () => closeModal(DOM.quickViewModal));
  DOM.closeCheckoutBtn.addEventListener("click", () => closeModal(DOM.checkoutModal));
  DOM.quickViewModal.addEventListener("click", (e) => {
    if (e.target === DOM.quickViewModal) closeModal(DOM.quickViewModal);
  });
  DOM.checkoutModal.addEventListener("click", (e) => {
    if (e.target === DOM.checkoutModal) closeModal(DOM.checkoutModal);
  });
  DOM.orderSuccessModal.addEventListener("click", (e) => {
    if (e.target === DOM.orderSuccessModal) closeModal(DOM.orderSuccessModal);
  });
  
  DOM.checkoutForm.addEventListener("submit", processCheckout);
  
  document.querySelectorAll(".pay-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".pay-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
    });
  });
  
  DOM.copyOrderIdBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(DOM.confirmedOrderId.textContent);
    showToast("Copiado com Sucesso! 📋", DOM.confirmedOrderId.textContent, "✓");
  });
  
  DOM.trackInChatBtn.addEventListener("click", () => {
    const orderId = DOM.confirmedOrderId.textContent;
    closeModal(DOM.orderSuccessModal);
    switchAgent("david"); // Redireciona para o especialista de logística
    openSupportChat();
    sendUserMessage(`Como está o andamento do meu pedido ${orderId}?`);
  });
  
  DOM.continueShoppingBtn.addEventListener("click", () => {
    closeModal(DOM.orderSuccessModal);
  });
  
  // GATILHOS DO CHAT DE SUPORTE
  DOM.chatLauncherBtn.addEventListener("click", toggleSupportChat);
  DOM.closeChatWindowBtn.addEventListener("click", closeSupportChat);
  DOM.headerSupportBtn.addEventListener("click", openSupportChat);
  DOM.topChatTriggerBtn.addEventListener("click", openSupportChat);
  DOM.heroSupportTriggerBtn.addEventListener("click", openSupportChat);
  DOM.calloutSupportBtn.addEventListener("click", openSupportChat);
  DOM.bannerOpenChatBtn.addEventListener("click", openSupportChat);
  DOM.footerChatBtn.addEventListener("click", openSupportChat);
  
  DOM.footerTrackBtn.addEventListener("click", () => {
    switchAgent("david");
    openSupportChat();
    DOM.chatTextInput.value = "Gostaria de rastrear meu pedido: ";
    DOM.chatTextInput.focus();
  });
  DOM.footerReturnsBtn.addEventListener("click", () => {
    switchAgent("david");
    openSupportChat();
    DOM.chatTextInput.value = "Como funciona a garantia e devolução?";
    DOM.chatTextInput.focus();
  });
  DOM.footerPromoBtn.addEventListener("click", () => {
    switchAgent("sarah");
    openSupportChat();
    DOM.chatTextInput.value = "Quais cupons de desconto estão ativos?";
    DOM.chatTextInput.focus();
  });
  
  // CLIQUE NAS ABAS DE ESPECIALISTAS (SALAS SEPARADAS)
  if (DOM.chatAgentTabsBar) {
    DOM.chatAgentTabsBar.addEventListener("click", (e) => {
      const tabBtn = e.target.closest(".agent-tab-btn");
      if (!tabBtn) return;
      const agentId = tabBtn.dataset.agent;
      switchAgent(agentId);
    });
  }
  
  // Menu de Troca de Atendentes via Dropdown
  DOM.switchAgentDropdownBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    const isHidden = DOM.agentSelectMenu.style.display === "none";
    DOM.agentSelectMenu.style.display = isHidden ? "block" : "none";
  });
  
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".dropdown-wrapper")) {
      DOM.agentSelectMenu.style.display = "none";
    }
  });
  
  DOM.agentSelectMenu.addEventListener("click", (e) => {
    const opt = e.target.closest(".agent-select-opt");
    if (!opt) return;
    switchAgent(opt.dataset.agent);
  });
  
  // Alternador de Som
  DOM.toggleSoundBtn.addEventListener("click", () => {
    AppState.soundEnabled = !AppState.soundEnabled;
    localStorage.setItem("novamart_sound", JSON.stringify(AppState.soundEnabled));
    const soundOn = DOM.toggleSoundBtn.querySelector(".sound-on-icon");
    const soundOff = DOM.toggleSoundBtn.querySelector(".sound-off-icon");
    
    if (AppState.soundEnabled) {
      soundOn.style.display = "block";
      soundOff.style.display = "none";
      SoundFx.playChime();
      showToast("Sons Ativados", "Você ouvirá notificações sonoras ao receber mensagens", "🔊");
    } else {
      soundOn.style.display = "none";
      soundOff.style.display = "block";
      showToast("Sons Desativados", "Notificações sonoras foram silenciadas", "🔇");
    }
  });
  
  DOM.createTicketBtn.addEventListener("click", createNewSupportTicket);
  
  DOM.chatQuickActions.addEventListener("click", (e) => {
    const chip = e.target.closest(".quick-chip");
    if (!chip) return;
    handleQuickAction(chip.dataset.action);
  });
  
  DOM.chatMessageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    sendUserMessage(DOM.chatTextInput.value);
  });
  
  DOM.removeAttachedProductBtn.addEventListener("click", removeAttachedProduct);
  
  DOM.chatEmojiBtn.addEventListener("click", () => {
    const emojis = ["😊", "👍", "🔥", "❤️", "⚡", "🎧", "📦", "🎉"];
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    DOM.chatTextInput.value += " " + randomEmoji;
    DOM.chatTextInput.focus();
  });
  
  DOM.chatFeedbackPrompt.addEventListener("click", (e) => {
    const starBtn = e.target.closest(".star-btn");
    if (!starBtn) return;
    DOM.chatFeedbackPrompt.innerHTML = `<p style="color:var(--accent-emerald);">⭐ Muito obrigado pela sua avaliação! Ficamos felizes em ajudar.</p>`;
    SoundFx.playChime();
  });
  
  if (DOM.newsletterForm) {
    DOM.newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const input = DOM.newsletterForm.querySelector("input");
      showToast("Acesso VIP Confirmado! 🎁", `Cupom DESCONTO20 liberado para ${input.value}.`, "🎉");
      input.value = "";
    });
  }
  
  window.addEventListener("scroll", () => {
    const header = document.getElementById("siteHeader");
    if (window.scrollY > 40) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
}

// ==========================================================================
// 17. FUNÇÕES AUXILIARES
// ==========================================================================
function formatCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  return `${hours}:${minutes}`;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

document.addEventListener("DOMContentLoaded", initApp);
