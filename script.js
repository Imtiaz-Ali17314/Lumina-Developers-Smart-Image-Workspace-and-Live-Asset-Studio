/* ==========================================================================
   LUMINA SYSTEM CONTROLLER
   ========================================================================== */

// 1. App Configuration & State
const state = {
  activeImage: null,
  activePalette: [],
  activeFormat: 'html-srcset',
  activeTab: 'tab-palette',
  selectedTextHex: '#FFFFFF',
  selectedBgHex: '#0B0F19',
  studioAlign: 'center',
  studioFont: 'Outfit',
  studioGridPos: 'middle-center',
  page: 1,
  currentQuery: '',
  unsplashKey: 'te0rr_oBGAZuoz0kXGYrV69HwltYQ_U_DnmnPXNTVJc',
  duotoneEnabled: false,
  apiMode: 'unsplash'
};

// 2. Mock Image Database (Failsafe offline data)
const mockDatabase = [
  {
    id: 'm1',
    urls: {
      regular: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&auto=format&fit=crop&q=80'
    },
    user: { name: 'Domenico Loia', username: 'domenicoloia' },
    links: { html: 'https://unsplash.com/photos/hHdHCfAifHU' },
    tags: ['workspace', 'laptop', 'minimalist', 'tech'],
    orientation: 'landscape',
    defaultPalette: ['#1A1A1A', '#A8A29E', '#E7E5E4', '#78716C', '#D6D3D1']
  },
  {
    id: 'm2',
    urls: {
      regular: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&auto=format&fit=crop&q=80'
    },
    user: { name: 'Markus Spiske', username: 'markusspiske' },
    links: { html: 'https://unsplash.com/photos/iar-afB0QQw' },
    tags: ['tech', 'code', 'blue', 'developer'],
    orientation: 'landscape',
    defaultPalette: ['#0A192F', '#172A45', '#306EE8', '#64FFDA', '#8892B0']
  },
  {
    id: 'm3',
    urls: {
      regular: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80'
    },
    user: { name: 'Sean Oulashin', username: 'oulashin' },
    links: { html: 'https://unsplash.com/photos/KMn4VEeEPR8' },
    tags: ['nature', 'beach', 'minimalist', 'warm'],
    orientation: 'landscape',
    defaultPalette: ['#1C3A5E', '#D9A05B', '#F1D3B3', '#8B9A46', '#EEEEEE']
  },
  {
    id: 'm4',
    urls: {
      regular: 'https://images.unsplash.com/photo-1494438639946-1ebd1d2038b5?w=1200&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1494438639946-1ebd1d2038b5?w=600&auto=format&fit=crop&q=80'
    },
    user: { name: 'Luca Bravo', username: 'lucabravo' },
    links: { html: 'https://unsplash.com/photos/OQMZwNd3ThU' },
    tags: ['minimalist', 'interior', 'lamp', 'gray'],
    orientation: 'portrait',
    defaultPalette: ['#111111', '#4A4A4A', '#8C8C8C', '#D9D9D9', '#F2F2F2']
  },
  {
    id: 'm5',
    urls: {
      regular: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=1200&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&auto=format&fit=crop&q=80'
    },
    user: { name: 'C. Valenzuela', username: 'cvalenzuela' },
    links: { html: 'https://unsplash.com/photos/n1B6o51gA74' },
    tags: ['workspace', 'music', 'headphones', 'tech'],
    orientation: 'landscape',
    defaultPalette: ['#1E1E24', '#FB5607', '#FF006E', '#8338EC', '#3A86C8']
  },
  {
    id: 'm6',
    urls: {
      regular: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&auto=format&fit=crop&q=80'
    },
    user: { name: 'Joel Filipe', username: 'joelfilipe' },
    links: { html: 'https://unsplash.com/photos/y31g8S5B_OM' },
    tags: ['abstract', 'art', 'liquid', 'cool'],
    orientation: 'squarish',
    defaultPalette: ['#03071E', '#370617', '#6A040F', '#D00000', '#FAA307']
  },
  {
    id: 'm7',
    urls: {
      regular: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&auto=format&fit=crop&q=80'
    },
    user: { name: 'Alexandre Debiève', username: 'alexandre_debieve' },
    links: { html: 'https://unsplash.com/photos/FO7JIlwElhk' },
    tags: ['tech', 'hardware', 'processor', 'minimalist'],
    orientation: 'landscape',
    defaultPalette: ['#0F172A', '#1E293B', '#334155', '#475569', '#64748B']
  },
  {
    id: 'm8',
    urls: {
      regular: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=1200&auto=format&fit=crop&q=80',
      small: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=600&auto=format&fit=crop&q=80'
    },
    user: { name: 'jake' },
    links: { html: 'https://unsplash.com/photos/random' },
    tags: ['nature', 'forest', 'green', 'minimalist'],
    orientation: 'landscape',
    defaultPalette: ['#1C2E24', '#3E5C48', '#6A8E77', '#A3C6B1', '#E5EFE9']
  }
];

// DOM elements
const searchForm = document.querySelector("#search-form");
const searchBox = document.querySelector("#search-box");
const searchResult = document.querySelector("#search-result");
const showMoreBtn = document.querySelector("#show-more-btn");
const filterOrientation = document.querySelector("#filter-orientation");
const filterColor = document.querySelector("#filter-color");
const filterComposition = document.querySelector("#filter-composition");
const apiModeSelect = document.querySelector("#api-mode");
const galleryStatus = document.querySelector("#gallery-status");

// Workspace modal elements
const workspaceModal = document.querySelector("#workspace-modal");
const closeModalBtn = document.querySelector("#close-modal-btn");
const workspaceMainImg = document.querySelector("#workspace-main-image");
const imageLoader = document.querySelector("#image-loader");
const assetMetaTitle = document.querySelector("#asset-meta-title");
const hiddenCanvas = document.querySelector("#hidden-extraction-canvas");

// Brand Harmonizer elements
const toggleDuotone = document.querySelector("#toggle-duotone");
const pickerShadow = document.querySelector("#picker-shadow");
const pickerHighlight = document.querySelector("#picker-highlight");
const shadowPreviewColor = document.querySelector("#shadow-preview-color");
const highlightPreviewColor = document.querySelector("#highlight-preview-color");
const duotoneMatrixEl = document.querySelector("#duotone-matrix-el");

// Tabs & Swatches elements
const tabButtons = document.querySelectorAll(".tab-btn");
const tabPanels = document.querySelectorAll(".tab-panel");
const paletteSwatches = document.querySelector("#palette-swatches");

// Contrast checker elements
const textSwatchDropdown = document.querySelector("#text-swatch-dropdown");
const bgSwatchDropdown = document.querySelector("#bg-swatch-dropdown");
const swapContrastBtn = document.querySelector("#swap-contrast-colors");
const contrastRatioVal = document.querySelector("#contrast-ratio-val");
const verdictNormal = document.querySelector("#verdict-normal");
const verdictLarge = document.querySelector("#verdict-large");
const contrastTextPreview = document.querySelector("#contrast-text-preview");

// Code Generator elements
const codeFormatButtons = document.querySelectorAll(".code-format-btn");
const codeDisplay = document.querySelector("#code-display");
const codeFormatTitle = document.querySelector("#code-format-title");
const copyCodeBtn = document.querySelector("#copy-code-btn");

// Studio Editor elements
const studioHeading = document.querySelector("#studio-heading");
const studioSubheading = document.querySelector("#studio-subheading");
const studioCta = document.querySelector("#studio-cta");
const gridCells = document.querySelectorAll(".grid-cell");
const studioAlignLeft = document.querySelector("#studio-align-left");
const studioAlignCenter = document.querySelector("#studio-align-center");
const studioAlignRight = document.querySelector("#studio-align-right");
const studioFontSans = document.querySelector("#studio-font-sans");
const studioFontSerif = document.querySelector("#studio-font-serif");
const sliderVignette = document.querySelector("#slider-vignette");
const sliderBlur = document.querySelector("#slider-blur");
const sliderShadow = document.querySelector("#slider-shadow");
const vignetteValLabel = document.querySelector("#vignette-val");
const blurValLabel = document.querySelector("#blur-val");
const shadowValLabel = document.querySelector("#shadow-intensity-val");
const downloadBannerBtn = document.querySelector("#download-banner-btn");

// Global studio canvas used for workspace design rendering
let studioCanvas = null;

// Initialize app event handlers
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  // Perform an initial search with placeholder keywords
  state.currentQuery = "aesthetic workspace";
  searchBox.value = state.currentQuery;
  executeSearch(true);
});

// 3. Search Engine Logic
function setupEventListeners() {
  // Form submission
  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    state.page = 1;
    state.currentQuery = searchBox.value.trim();
    executeSearch(true);
  });

  // Filter triggers
  filterOrientation.addEventListener("change", () => { state.page = 1; executeSearch(true); });
  filterColor.addEventListener("change", () => { state.page = 1; executeSearch(true); });
  filterComposition.addEventListener("change", () => { state.page = 1; executeSearch(true); });
  apiModeSelect.addEventListener("change", (e) => {
    state.apiMode = e.target.value;
    state.page = 1;
    executeSearch(true);
  });

  // Load more pagination
  showMoreBtn.addEventListener("click", () => {
    state.page++;
    executeSearch(false);
  });

  // Modal interactions
  closeModalBtn.addEventListener("click", closeWorkspace);
  
  // Close modal when clicking background overlay
  workspaceModal.addEventListener("click", (e) => {
    if (e.target === workspaceModal) closeWorkspace();
  });

  // Tabs layout
  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanels.forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      
      const tabId = btn.getAttribute("data-tab");
      document.getElementById(tabId).classList.add("active");
      state.activeTab = tabId;

      // Handle workspace layout adaptations for Studio tab
      if (tabId === 'tab-studio') {
        initStudioCanvas();
      } else {
        restoreImagePreview();
      }
    });
  });

  // Duotone dynamic parameters
  toggleDuotone.addEventListener("change", (e) => {
    state.duotoneEnabled = e.target.checked;
    updateSVGDuotoneMatrix();
    if (state.activeTab === 'tab-studio') {
      renderStudioCanvas();
    }
  });

  pickerShadow.addEventListener("input", (e) => {
    const hex = e.target.value;
    shadowPreviewColor.style.backgroundColor = hex;
    updateSVGDuotoneMatrix();
    if (state.activeTab === 'tab-studio') renderStudioCanvas();
  });

  pickerHighlight.addEventListener("input", (e) => {
    const hex = e.target.value;
    highlightPreviewColor.style.backgroundColor = hex;
    updateSVGDuotoneMatrix();
    if (state.activeTab === 'tab-studio') renderStudioCanvas();
  });

  // Swapping contrast checker selection
  swapContrastBtn.addEventListener("click", swapContrastColors);

  // Responsive Code Gen switching
  codeFormatButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      codeFormatButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.activeFormat = btn.getAttribute("data-format");
      updateCodeSnippet();
    });
  });

  // Code copy mechanism
  copyCodeBtn.addEventListener("click", () => {
    const code = codeDisplay.textContent;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = copyCodeBtn.innerHTML;
      copyCodeBtn.innerHTML = `
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>Copied!</span>
      `;
      setTimeout(() => { copyCodeBtn.innerHTML = originalText; }, 2000);
    });
  });

  // Social Overlay Inputs & Live Render bindings
  studioHeading.addEventListener("input", renderStudioCanvas);
  studioSubheading.addEventListener("input", renderStudioCanvas);
  studioCta.addEventListener("input", renderStudioCanvas);

  gridCells.forEach(cell => {
    cell.addEventListener("click", () => {
      gridCells.forEach(c => c.classList.remove("active"));
      cell.classList.add("active");
      state.gridCellPos = cell.getAttribute("data-pos");
      renderStudioCanvas();
    });
  });

  // Alignment selectors
  studioAlignLeft.addEventListener("click", () => {
    setSelectedAlignment(studioAlignLeft, 'left');
  });
  studioAlignCenter.addEventListener("click", () => {
    setSelectedAlignment(studioAlignCenter, 'center');
  });
  studioAlignRight.addEventListener("click", () => {
    setSelectedAlignment(studioAlignRight, 'right');
  });

  // Font selectors
  studioFontSans.addEventListener("click", () => {
    setSelectedFont(studioFontSans, 'Outfit');
  });
  studioFontSerif.addEventListener("click", () => {
    setSelectedFont(studioFontSerif, 'Georgia');
  });

  // Sliders binding
  sliderVignette.addEventListener("input", (e) => {
    vignetteValLabel.textContent = `${e.target.value}%`;
    renderStudioCanvas();
  });

  sliderBlur.addEventListener("input", (e) => {
    blurValLabel.textContent = `${e.target.value}px`;
    renderStudioCanvas();
  });

  sliderShadow.addEventListener("input", (e) => {
    shadowValLabel.textContent = `${e.target.value}%`;
    renderStudioCanvas();
  });

  // Downloader
  downloadBannerBtn.addEventListener("click", downloadBannerPNG);
}

// Set studio alignment
function setSelectedAlignment(element, align) {
  [studioAlignLeft, studioAlignCenter, studioAlignRight].forEach(b => b.classList.remove("active"));
  element.classList.add("active");
  state.studioAlign = align;
  renderStudioCanvas();
}

// Set studio font
function setSelectedFont(element, font) {
  [studioFontSans, studioFontSerif].forEach(b => b.classList.remove("active"));
  element.classList.add("active");
  state.studioFont = font;
  renderStudioCanvas();
}

// Execute search
async function executeSearch(clearGrid = true) {
  if (clearGrid) {
    searchResult.innerHTML = `<div class="image-card-loader" style="grid-column: 1/-1; height: 100px; border-radius: var(--radius-md);"></div>`;
    showMoreBtn.style.display = "none";
  }

  const query = state.currentQuery || "aesthetic background";
  
  // Custom compositional search terms injection
  let finalQuery = query;
  const composition = filterComposition.value;
  if (composition === "copyspace") {
    finalQuery += " copyspace negative space";
  } else if (composition === "minimalist") {
    finalQuery += " minimalist clean background";
  }

  const orientation = filterOrientation.value !== "all" ? `&orientation=${filterOrientation.value}` : "";
  const colorTone = filterColor.value !== "all" ? `&color=${filterColor.value}` : "";

  galleryStatus.style.display = "block";
  galleryStatus.innerHTML = `Searching for "<strong>${query}</strong>"...`;

  if (state.apiMode === 'unsplash') {
    try {
      const url = `https://api.unsplash.com/search/photos?page=${state.page}&query=${encodeURIComponent(finalQuery)}${orientation}${colorTone}&client_id=${state.unsplashKey}&per_page=12`;
      
      const response = await fetch(url);
      if (!response.ok) throw new Error(`API returned status ${response.status}`);
      
      const data = await response.json();
      
      if (clearGrid) searchResult.innerHTML = "";
      
      if (data.results.length === 0) {
        galleryStatus.innerHTML = `No results found on Unsplash for "<strong>${query}</strong>". Try another keyword or swap engine.`;
        return;
      }

      galleryStatus.innerHTML = `Found ${data.total} images on Unsplash for "<strong>${query}</strong>".`;
      renderImagesToGrid(data.results);
      showMoreBtn.style.display = "block";
    } catch (err) {
      console.warn("Unsplash API failure, switching to Fallback engine: ", err.message);
      galleryStatus.innerHTML = `<span style="color:var(--warning)">⚠️ API limit reached or offline. Loaded local high-res templates.</span>`;
      // Load fallback images matching the query
      loadMockFallback(finalQuery, clearGrid);
    }
  } else {
    // Force mock local data
    galleryStatus.innerHTML = `Loaded offline fallback studio data for "<strong>${query}</strong>".`;
    loadMockFallback(finalQuery, clearGrid);
  }
}

// Fallback Mock Logic
function loadMockFallback(query, clearGrid) {
  if (clearGrid) searchResult.innerHTML = "";
  
  // Simple regex matching against local database tags
  const terms = query.toLowerCase().split(/\s+/);
  let matched = mockDatabase.filter(img => {
    return terms.some(t => img.tags.includes(t) || t === "aesthetic" || t === "background" || t === "stock");
  });

  // If nothing matched, just return all mocks
  if (matched.length === 0) matched = mockDatabase;

  renderImagesToGrid(matched);
  showMoreBtn.style.display = "none"; // Mocks are finite, hide pagination
}

// Render results
function renderImagesToGrid(results) {
  results.forEach(result => {
    const card = document.createElement("div");
    card.className = "image-card";
    
    // Backdrop placeholder styling while loading regular assets
    const accentColors = ['#1e1b4b', '#0f172a', '#172554', '#311042', '#022c22'];
    const randomAccent = accentColors[Math.floor(Math.random() * accentColors.length)];
    card.style.backgroundColor = randomAccent;

    // Build wrappers for responsive grid
    const wrapper = document.createElement("div");
    wrapper.className = "image-card-img-wrapper";
    
    const img = document.createElement("img");
    img.src = result.urls.small;
    img.alt = result.alt_description || "Lumina Searched Stock";
    img.loading = "lazy";
    
    // Meta data overlay
    const overlay = document.createElement("div");
    overlay.className = "card-meta-overlay";
    
    const authorRow = document.createElement("div");
    authorRow.className = "author-row";
    
    if (result.user && result.user.profile_image) {
      const avatar = document.createElement("img");
      avatar.src = result.user.profile_image.small;
      avatar.className = "author-avatar";
      authorRow.appendChild(avatar);
    }
    
    const authorName = document.createElement("span");
    authorName.className = "author-name";
    authorName.textContent = result.user ? result.user.name : "Creative Artist";
    authorRow.appendChild(authorName);
    
    const tagRow = document.createElement("div");
    tagRow.className = "composition-tags";
    
    // Mock or extract tag properties
    const sampleTags = result.tags ? (Array.isArray(result.tags) ? result.tags.slice(0, 2) : []) : ['Web Design', 'Stock'];
    if (sampleTags.length === 0) {
      if (result.width > result.height) sampleTags.push("Landscape");
      else sampleTags.push("Portrait");
      sampleTags.push("High Contrast");
    }
    
    sampleTags.forEach(t => {
      const tagSpan = document.createElement("span");
      tagSpan.className = "card-tag";
      tagSpan.textContent = typeof t === 'string' ? t : (t.title || 'Studio');
      tagRow.appendChild(tagSpan);
    });
    
    overlay.appendChild(authorRow);
    overlay.appendChild(tagRow);
    
    wrapper.appendChild(img);
    wrapper.appendChild(overlay);
    card.appendChild(wrapper);
    
    // Add interaction to launch developer details workspace panel
    card.addEventListener("click", () => {
      openWorkspace(result);
    });

    searchResult.appendChild(card);
  });
}

// 4. Color Palette Harvester (Client-side Canvas pixel reading)
function openWorkspace(result) {
  state.activeImage = result;
  state.duotoneEnabled = false;
  toggleDuotone.checked = false;
  
  // Clear styles
  workspaceMainImg.style.filter = "none";
  duotoneMatrixEl.setAttribute("values", "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0");

  // Show Modal
  workspaceModal.classList.add("open");
  
  // Set meta metadata details
  const name = result.user ? result.user.name : "Creative Artist";
  const userLink = result.user ? `https://unsplash.com/@${result.user.username}` : "#";
  assetMetaTitle.innerHTML = `Photo by <a href="${userLink}" target="_blank" style="color:var(--accent-primary);text-decoration:none;">${name}</a> via Unsplash`;

  // Start image load
  imageLoader.classList.add("active");
  workspaceMainImg.src = result.urls.regular;

  // Trigger color extraction once image is downloaded
  workspaceMainImg.onload = () => {
    imageLoader.classList.remove("active");
    extractPaletteFromImg();
  };

  workspaceMainImg.onerror = () => {
    console.error("Workspace image loading failed. Using fallback simulation.");
    imageLoader.classList.remove("active");
    // Failsafe default palettes
    state.activePalette = result.defaultPalette || ['#1A202C', '#2D3748', '#4A5568', '#718096', '#A0AEC0'];
    renderSwatches();
  };
}

function closeWorkspace() {
  workspaceModal.classList.remove("open");
  restoreImagePreview();
}

function restoreImagePreview() {
  workspaceMainImg.style.display = "block";
  if (studioCanvas && studioCanvas.parentNode) {
    studioCanvas.style.display = "none";
  }
}

// Core Color Palette Harvester
function extractPaletteFromImg() {
  try {
    const ctx = hiddenCanvas.getContext('2d');
    
    // Sample small aspect ratio to prevent DOM blocking thread
    const sampleWidth = 50;
    const sampleHeight = 50;
    
    hiddenCanvas.width = sampleWidth;
    hiddenCanvas.height = sampleHeight;
    
    // Draw onto canvas to analyze image bitmap
    ctx.drawImage(workspaceMainImg, 0, 0, sampleWidth, sampleHeight);
    
    // Read bitmap pixel data
    const imgData = ctx.getImageData(0, 0, sampleWidth, sampleHeight).data;
    
    // Group and cluster colors (k-means approximation)
    const colorMap = {};
    const step = 4; // Sample every 4th pixel to make it extremely snappy
    
    for (let i = 0; i < imgData.length; i += step * 4) {
      const r = imgData[i];
      const g = imgData[i+1];
      const b = imgData[i+2];
      const a = imgData[i+3];
      
      // Filter out transparent and pure black/white to obtain colorful accent tones
      if (a < 200) continue;
      const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      if (gray < 20 || gray > 240) continue;
      
      // Quantize to group similar colors (reduce color space)
      const qr = Math.round(r / 16) * 16;
      const qg = Math.round(g / 16) * 16;
      const qb = Math.round(b / 16) * 16;
      const hex = rgbToHex(qr, qg, qb);
      
      colorMap[hex] = (colorMap[hex] || 0) + 1;
    }
    
    // Sort extracted colors by popularity
    let sortedColors = Object.keys(colorMap).sort((a, b) => colorMap[b] - colorMap[a]);
    
    // Filter out colors that are visually too similar (Euclidean distance threshold)
    const filteredPalette = [];
    for (let color of sortedColors) {
      if (filteredPalette.length >= 5) break;
      
      const rgb = hexToRgb(color);
      const isTooSimilar = filteredPalette.some(existingColor => {
        const extRgb = hexToRgb(existingColor);
        const distance = Math.sqrt(
          Math.pow(rgb.r - extRgb.r, 2) +
          Math.pow(rgb.g - extRgb.g, 2) +
          Math.pow(rgb.b - extRgb.b, 2)
        );
        return distance < 45; // Similarity threshold
      });
      
      if (!isTooSimilar) {
        filteredPalette.push(color);
      }
    }
    
    // If we didn't get enough variety, pad with default image colors
    while (filteredPalette.length < 5) {
      const fallbacks = state.activeImage.defaultPalette || ['#1E293B', '#334155', '#475569', '#64748B', '#94A3B8'];
      const nextFallback = fallbacks.find(f => !filteredPalette.includes(f));
      if (nextFallback) filteredPalette.push(nextFallback);
      else break;
    }
    
    state.activePalette = filteredPalette;
    renderSwatches();
  } catch (error) {
    console.warn("Canvas bitmap reading blocked due to CORS safety. Falling back to simulated colors.", error);
    // CORS fallback: generate a beautiful simulated palette based on a random color or default
    state.activePalette = state.activeImage.defaultPalette || ['#1A202C', '#2D3748', '#4A5568', '#718096', '#A0AEC0'];
    renderSwatches();
  }
}

function renderSwatches() {
  paletteSwatches.innerHTML = "";
  
  state.activePalette.forEach((hex, idx) => {
    const card = document.createElement("div");
    card.className = "swatch-card";
    
    const colorDiv = document.createElement("div");
    colorDiv.className = "swatch-color";
    colorDiv.style.backgroundColor = hex;
    
    const hexSpan = document.createElement("span");
    hexSpan.className = "swatch-hex";
    hexSpan.textContent = hex;
    
    card.appendChild(colorDiv);
    card.appendChild(hexSpan);
    
    // Clipboard interaction
    card.addEventListener("click", () => {
      navigator.clipboard.writeText(hex).then(() => {
        // Micro feedback badge
        const badge = document.createElement("div");
        badge.className = "copied-badge";
        badge.textContent = "Copied!";
        colorDiv.appendChild(badge);
        setTimeout(() => badge.remove(), 800);
      });
    });
    
    paletteSwatches.appendChild(card);
  });

  // Re-build dropdown menus for accessibility contrast validator
  buildContrastSelectors();
  
  // Update generated asset code snippets
  updateCodeSnippet();
}

// 5. WCAG 2.1 Contrast Checker Calculations
function buildContrastSelectors() {
  textSwatchDropdown.innerHTML = "";
  bgSwatchDropdown.innerHTML = "";

  // Set default contrast comparison values
  state.selectedTextHex = "#FFFFFF";
  state.selectedBgHex = state.activePalette[0] || "#0B0F19";

  // Text dropdown populator
  setupContrastDropdown(textSwatchDropdown, 'text', state.selectedTextHex);
  // Background dropdown populator
  setupContrastDropdown(bgSwatchDropdown, 'bg', state.selectedBgHex);

  calculateContrastRating();
}

function setupContrastDropdown(container, type, defaultSelection) {
  // Clear any existing contents
  container.innerHTML = "";

  const selectedDot = document.createElement("div");
  selectedDot.className = "selected-dot";
  selectedDot.style.backgroundColor = defaultSelection;

  const selectedText = document.createElement("span");
  selectedText.className = "selected-text";
  selectedText.textContent = defaultSelection;

  const arrow = document.createElement("div");
  arrow.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>`;

  container.appendChild(selectedDot);
  container.appendChild(selectedText);
  container.appendChild(arrow);

  // Build the list popover
  const list = document.createElement("div");
  list.className = "swatch-dropdown-list";

  // Provide basic white & dark shades alongside palette colors for convenience
  const options = ["#FFFFFF", "#0B0F19", ...state.activePalette];
  
  options.forEach(color => {
    const item = document.createElement("div");
    item.className = "dropdown-option";
    
    const dot = document.createElement("div");
    dot.className = "selected-dot";
    dot.style.backgroundColor = color;
    
    const txt = document.createElement("span");
    txt.className = "selected-text";
    txt.textContent = color;

    item.appendChild(dot);
    item.appendChild(txt);

    item.addEventListener("click", (e) => {
      e.stopPropagation();
      selectedDot.style.backgroundColor = color;
      selectedText.textContent = color;
      list.classList.remove("show");

      if (type === 'text') state.selectedTextHex = color;
      else state.selectedBgHex = color;

      calculateContrastRating();
    });

    list.appendChild(item);
  });

  container.appendChild(list);

  container.addEventListener("click", (e) => {
    e.stopPropagation();
    // Close other dropdowns
    document.querySelectorAll(".swatch-dropdown-list").forEach(el => {
      if (el !== list) el.classList.remove("show");
    });
    list.classList.toggle("show");
  });

  // Dismiss dropdowns when clicking outside
  document.addEventListener("click", () => {
    list.classList.remove("show");
  });
}

function swapContrastColors() {
  const temp = state.selectedTextHex;
  state.selectedTextHex = state.selectedBgHex;
  state.selectedBgHex = temp;

  // Sync UI elements
  setupContrastDropdown(textSwatchDropdown, 'text', state.selectedTextHex);
  setupContrastDropdown(bgSwatchDropdown, 'bg', state.selectedBgHex);

  calculateContrastRating();
}

function calculateContrastRating() {
  const rgbText = hexToRgb(state.selectedTextHex);
  const rgbBg = hexToRgb(state.selectedBgHex);

  const L1 = getLuminance(rgbText.r, rgbText.g, rgbText.b);
  const L2 = getLuminance(rgbBg.r, rgbBg.g, rgbBg.b);

  const ratio = getContrastRatio(L1, L2);
  contrastRatioVal.textContent = `${ratio.toFixed(2)}:1`;

  // Verdict thresholds
  const normalAA = ratio >= 4.5;
  const normalAAA = ratio >= 7.0;
  const largeAA = ratio >= 3.0;
  const largeAAA = ratio >= 4.5;

  setVerdictStyle(verdictNormal, normalAA, normalAAA);
  setVerdictStyle(verdictLarge, largeAA, largeAAA);

  // Update Live Preview Sandbox styling
  contrastTextPreview.style.color = state.selectedTextHex;
  contrastTextPreview.style.backgroundColor = state.selectedBgHex;
}

function setVerdictStyle(el, passAA, passAAA) {
  if (passAAA) {
    el.textContent = "AAA Pass";
    el.className = "verdict-badge pass";
  } else if (passAA) {
    el.textContent = "AA Pass";
    el.className = "verdict-badge pass";
    el.style.borderColor = "var(--warning)";
    el.style.color = "var(--warning)";
    el.style.backgroundColor = "rgba(245, 158, 11, 0.1)";
  } else {
    el.textContent = "Fail";
    el.className = "verdict-badge fail";
    el.style = ""; // Clear custom style overlays
  }
}

function getLuminance(r, g, b) {
  const [R, G, B] = [r, g, b].map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * R + 0.7152 * G + 0.0722 * B;
}

function getContrastRatio(lum1, lum2) {
  const max = Math.max(lum1, lum2);
  const min = Math.min(lum1, lum2);
  return (max + 0.05) / (min + 0.05);
}

// 6. SVG Brand Harmonizer Matrix calculations
function updateSVGDuotoneMatrix() {
  if (!state.duotoneEnabled) {
    workspaceMainImg.style.filter = "none";
    return;
  }

  const darkRgb = hexToRgb(pickerShadow.value);
  const lightRgb = hexToRgb(pickerHighlight.value);

  // Calculate normalized colors
  const rDiff = (lightRgb.r - darkRgb.r) / 255;
  const gDiff = (lightRgb.g - darkRgb.g) / 255;
  const bDiff = (lightRgb.b - darkRgb.b) / 255;

  // Grayscale weights mapping: R: 0.2126, G: 0.7152, B: 0.0722
  const matrix = [
    rDiff * 0.2126, rDiff * 0.7152, rDiff * 0.0722, 0, darkRgb.r / 255,
    gDiff * 0.2126, gDiff * 0.7152, gDiff * 0.0722, 0, darkRgb.g / 255,
    bDiff * 0.2126, bDiff * 0.7152, bDiff * 0.0722, 0, darkRgb.b / 255,
    0,              0,              0,              1, 0
  ].join(" ");

  duotoneMatrixEl.setAttribute("values", matrix);
  workspaceMainImg.style.filter = "url(#svg-brand-filter)";
}

// 7. Responsive Web Asset Code Generator Templates
function updateCodeSnippet() {
  if (!state.activeImage) return;

  const url = state.activeImage.urls.regular;
  const smallUrl = state.activeImage.urls.small;
  const author = state.activeImage.user ? state.activeImage.user.name : "Unsplash Creator";
  
  // Extract dominant tones for micro-SVG placeholder gradient
  const primaryTone = state.activePalette[0] || '#6366F1';
  const secondaryTone = state.activePalette[1] || '#A855F7';

  // Base64 encode an inline micro SVG preview gradient
  const svgPlaceholder = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${primaryTone}" />
        <stop offset="100%" stop-color="${secondaryTone}" />
      </linearGradient>
    </defs>
    <rect width="10" height="6" fill="url(#g)" />
  </svg>`;
  const base64Svg = btoa(svgPlaceholder);
  const dataUri = `data:image/svg+xml;base64,${base64Svg}`;

  let codeMarkup = "";

  if (state.activeFormat === 'html-srcset') {
    codeFormatTitle.textContent = "HTML5 (Srcset + Inline Blur gradient)";
    codeMarkup = `<!-- Responsive Image Asset: Photo by ${author} -->
<div class="img-wrapper" style="background-image: url('${dataUri}'); background-size: cover; aspect-ratio: 16/10; border-radius: 8px; overflow: hidden;">
  <img 
    src="${url}" 
    srcset="${smallUrl} 600w, ${url} 1200w" 
    sizes="(max-width: 768px) 100vw, 50vw" 
    alt="Web Asset by ${author}" 
    loading="lazy" 
    style="width: 100%; height: 100%; object-fit: cover; display: block;"
  />
</div>`;
  } else if (state.activeFormat === 'react-jsx') {
    codeFormatTitle.textContent = "React 19 Functional Component";
    codeMarkup = `import React from 'react';

export const AdaptiveAsset = () => {
  return (
    <div 
      className="relative overflow-hidden rounded-xl bg-cover bg-center aspect-[16/10]" 
      style={{ backgroundImage: \`url("${dataUri}")\` }}
    >
      <img
        src="${url}"
        srcSet="${smallUrl} 600w, ${url} 1200w"
        sizes="(max-width: 768px) 100vw, 50vw"
        alt="Adaptive workspace layout"
        loading="lazy"
        className="w-full h-full object-cover block transition-opacity duration-500 ease-in-out"
      />
    </div>
  );
};`;
  } else {
    codeFormatTitle.textContent = "CSS Progressive Loading variables";
    codeMarkup = `/* Asset container layout custom properties */
.asset-container {
  --dominant-gradient: linear-gradient(135deg, ${primaryTone}, ${secondaryTone});
  --fallback-blur: url('${dataUri}');
  
  display: block;
  width: 100%;
  aspect-ratio: 1.6;
  border-radius: 12px;
  background: var(--dominant-gradient);
  background-image: var(--fallback-blur);
  background-size: cover;
  overflow: hidden;
}

.asset-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.asset-image[loaded] {
  opacity: 1;
}`;
  }

  codeDisplay.textContent = codeMarkup;
}

// 8. Live Canvas Studio Designer & PNG Renderer
function initStudioCanvas() {
  workspaceMainImg.style.display = "none";
  
  // Set up high-performance Canvas element if not existing
  if (!studioCanvas) {
    studioCanvas = document.createElement("canvas");
    studioCanvas.id = "studio-editor-canvas";
    studioCanvas.style.width = "100%";
    studioCanvas.style.height = "auto";
    studioCanvas.style.display = "block";
    studioCanvas.style.borderRadius = "var(--radius-md)";
    studioCanvas.style.border = "1px solid var(--bg-card-border)";
    workspaceMainImg.parentNode.appendChild(studioCanvas);
  } else {
    studioCanvas.style.display = "block";
  }

  // Auto set resolution to 16:10 format matching preview window
  studioCanvas.width = 1200;
  studioCanvas.height = 750;

  renderStudioCanvas();
}

function renderStudioCanvas() {
  if (state.activeTab !== 'tab-studio' || !state.activeImage) return;

  const ctx = studioCanvas.getContext('2d');
  const tempImg = new Image();
  tempImg.crossOrigin = "anonymous";
  tempImg.src = state.activeImage.urls.regular;

  // Once image resources are resolved, draw the composition stack
  tempImg.onload = () => {
    ctx.clearRect(0, 0, studioCanvas.width, studioCanvas.height);

    // Apply canvas filters (Blur from slider)
    const blurAmount = parseInt(sliderBlur.value);
    ctx.filter = blurAmount > 0 ? `blur(${blurAmount}px)` : 'none';

    // 1. Draw scaled background image
    const scale = Math.max(studioCanvas.width / tempImg.width, studioCanvas.height / tempImg.height);
    const x = (studioCanvas.width / 2) - (tempImg.width / 2) * scale;
    const y = (studioCanvas.height / 2) - (tempImg.height / 2) * scale;
    ctx.drawImage(tempImg, x, y, tempImg.width * scale, tempImg.height * scale);
    ctx.filter = 'none'; // reset filter for overlays

    // 2. Apply Brand color Matrix duotone logic on canvas if enabled
    if (state.duotoneEnabled) {
      applyCanvasDuotone(ctx);
    }

    // 3. Apply Dark vignette gradient protection overlay
    const vignetteOpacity = parseInt(sliderVignette.value) / 100;
    if (vignetteOpacity > 0) {
      const grad = ctx.createLinearGradient(0, 0, 0, studioCanvas.height);
      grad.addColorStop(0, `rgba(9, 13, 22, ${vignetteOpacity * 0.4})`);
      grad.addColorStop(0.5, `rgba(9, 13, 22, ${vignetteOpacity * 0.6})`);
      grad.addColorStop(1, `rgba(9, 13, 22, ${vignetteOpacity * 0.95})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, studioCanvas.width, studioCanvas.height);
    }

    // 4. Render typography text layers
    drawStudioText(ctx);
  };
}

// Applies hardware simulated duotone filtering to canvas pixel buffer
function applyCanvasDuotone(ctx) {
  const imgData = ctx.getImageData(0, 0, studioCanvas.width, studioCanvas.height);
  const data = imgData.data;

  const darkRgb = hexToRgb(pickerShadow.value);
  const lightRgb = hexToRgb(pickerHighlight.value);

  const rDiff = (lightRgb.r - darkRgb.r) / 255;
  const gDiff = (lightRgb.g - darkRgb.g) / 255;
  const bDiff = (lightRgb.b - darkRgb.b) / 255;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i+1];
    const b = data[i+2];

    // Standard grayscale value representation
    const gray = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    data[i]     = gray * rDiff + darkRgb.r; // New Red
    data[i+1]   = gray * gDiff + darkRgb.g; // New Green
    data[i+2]   = gray * bDiff + darkRgb.b; // New Blue
  }

  ctx.putImageData(imgData, 0, 0);
}

// Handles rule-of-thirds text layouts and drawing typography onto canvas
function drawStudioText(ctx) {
  const headingVal = studioHeading.value.trim();
  const subheadingVal = studioSubheading.value.trim();
  const ctaVal = studioCta.value.trim();

  // Set base typography parameters
  const fontName = state.studioFont === 'Outfit' ? 'Outfit, sans-serif' : 'Georgia, serif';
  ctx.textAlign = state.studioAlign;
  ctx.fillStyle = "#FFFFFF";

  // Calculate dynamic boundaries from layout selections
  let targetX = studioCanvas.width / 2;
  let targetY = studioCanvas.height / 2;
  const paddingX = 100;
  const paddingY = 120;

  const layout = state.gridCellPos || 'middle-center';

  if (layout.includes('left')) {
    targetX = paddingX;
    ctx.textAlign = 'left';
  } else if (layout.includes('right')) {
    targetX = studioCanvas.width - paddingX;
    ctx.textAlign = 'right';
  } else {
    targetX = studioCanvas.width / 2;
    ctx.textAlign = 'center';
  }

  if (layout.includes('top')) {
    targetY = paddingY;
  } else if (layout.includes('bottom')) {
    targetY = studioCanvas.height - paddingY - (ctaVal ? 60 : 0);
  } else {
    // Middle vertical alignment takes the typography blocks total size into account
    let contentHeight = 0;
    if (headingVal) contentHeight += 60;
    if (subheadingVal) contentHeight += 40;
    if (ctaVal) contentHeight += 70;
    targetY = (studioCanvas.height / 2) - (contentHeight / 2) + 40;
  }

  // Draw shadow text protectors
  const shadowOpacity = parseInt(sliderShadow.value) / 100;
  ctx.shadowColor = `rgba(0, 0, 0, ${shadowOpacity})`;
  ctx.shadowBlur = shadowOpacity * 20;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 4;

  // 1. Draw Title Headline
  if (headingVal) {
    ctx.font = `bold 54px ${fontName}`;
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(headingVal, targetX, targetY);
    targetY += 56;
  }

  // 2. Draw Subheading Description
  ctx.shadowBlur = shadowOpacity * 12; // decrease blur slightly for details
  if (subheadingVal) {
    ctx.font = `400 24px ${fontName}`;
    ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
    ctx.fillText(subheadingVal, targetX, targetY);
    targetY += 48;
  }

  // Reset shadow parameters for solid button background
  ctx.shadowColor = 'transparent';
  ctx.shadowBlur = 0;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 0;

  // 3. Draw Call-to-Action button shape and label
  if (ctaVal) {
    targetY += 20;
    const btnText = ctaVal.toUpperCase();
    ctx.font = `bold 16px ${fontName}`;
    ctx.letterSpacing = "2px";
    
    const textWidth = ctx.measureText(btnText).width;
    const btnWidth = textWidth + 48;
    const btnHeight = 46;

    let btnX = targetX;
    if (ctx.textAlign === 'center') {
      btnX = targetX - btnWidth / 2;
    } else if (ctx.textAlign === 'right') {
      btnX = targetX - btnWidth;
    }

    // Set button gradient colors (Accent colors from active palette)
    const primaryBtnColor = state.activePalette[0] || '#a855f7';
    const secondaryBtnColor = state.activePalette[2] || '#ec4899';
    
    const btnGrad = ctx.createLinearGradient(btnX, targetY, btnX + btnWidth, targetY);
    btnGrad.addColorStop(0, primaryBtnColor);
    btnGrad.addColorStop(1, secondaryBtnColor);
    
    // Draw rounded rect shape
    ctx.fillStyle = btnGrad;
    drawRoundedRect(ctx, btnX, targetY, btnWidth, btnHeight, 6);
    ctx.fill();

    // Draw button text centered
    ctx.fillStyle = "#FFFFFF";
    ctx.textAlign = 'center';
    ctx.fillText(btnText, btnX + btnWidth / 2, targetY + 28);
  }
}

function drawRoundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

// Download canvas as High-Res PNG
function downloadBannerPNG() {
  if (!studioCanvas) return;
  
  const link = document.createElement('a');
  link.download = `lumina-banner-${state.activeImage.id || 'export'}.png`;
  link.href = studioCanvas.toDataURL('image/png');
  link.click();
}

// 9. Color Parsing Helper functions
function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
}

function hexToRgb(hex) {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  const fullHex = hex.replace(shorthandRegex, (m, r, g, b) => r + r + g + g + b + b);
  
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : { r: 0, g: 0, b: 0 };
}
