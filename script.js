// Sheikhs Data - 24 sheikhs (12 Egyptian + 12 Saudi)
const sheikhs = [
    // Egyptian Sheikhs (12)
    {
        id: 1,
        name: "الشيخ عبد الباسط عبد الصمد",
        country: "مصر",
        description: "أحد أشهر قراء القرآن الكريم في العالم الإسلامي، يتميز بصوته العذب وأدائه الفريد.",
        image: "https://images.unsplash.com/photo-1541250628459-d8f2f8b9d585?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 120,
        type: "egyptian"
    },
    {
        id: 2,
        name: "الشيخ محمد صديق المنشاوي",
        country: "مصر",
        description: "يعتبر من أبرز القراء في العالم الإسلامي، صوته يتميز بالخشوع والقوة.",
        image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 85,
        type: "egyptian"
    },
    {
        id: 3,
        name: "الشيخ محمود خليل الحصري",
        country: "مصر",
        description: "أول من سجل القرآن الكريم برواية حفص عن عاصم، صوته مميز بالدقة والتجويد.",
        image: "https://images.unsplash.com/photo-1541250584645-cb7b0e0c7f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 150,
        type: "egyptian"
    },
    {
        id: 4,
        name: "الشيخ مصطفى إسماعيل",
        country: "مصر",
        description: "شيخ القراء، صوته قوي وجميل ويتميز بأدائه المميز والتلوين الصوتي الرائع.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 95,
        type: "egyptian"
    },
    {
        id: 5,
        name: "الشيخ محمد رفعت",
        country: "مصر",
        description: "القارئ الشيخ، أول من افتتح الإذاعة المصرية بقراءة القرآن، صوته عذب وجميل.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 110,
        type: "egyptian"
    },
    {
        id: 6,
        name: "الشيخ علي الحذيفي",
        country: "مصر",
        description: "صوته مميز بالهدوء والخشوع، من أشهر القراء في العالم الإسلامي.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 80,
        type: "egyptian"
    },
    {
        id: 7,
        name: "الشيخ أحمد الرزيقي",
        country: "مصر",
        description: "قارئ مصري شهير، صوته عذب ويتميز بأدائه المميز والتجويد الدقيق.",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 130,
        type: "egyptian"
    },
    {
        id: 8,
        name: "الشيخ كامل يوسف البهتيمي",
        country: "مصر",
        description: "قارئ مصري شهير، صوته مميز بالخشوع والقوة، من تلاميذ الشيخ محمد رفعت.",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 75,
        type: "egyptian"
    },
    {
        id: 9,
        name: "الشيخ عبد العزيز حصان",
        country: "مصر",
        description: "قارئ مصري شهير، صوته عذب ويتميز بأدائه المميز وقراءته المرتلة.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 90,
        type: "egyptian"
    },
    {
        id: 10,
        name: "الشيخ محمود علي البنا",
        country: "مصر",
        description: "قارئ مصري شهير، صوته مميز بالخشوع والهدوء، من أشهر قراء القرن العشرين.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 100,
        type: "egyptian"
    },
    {
        id: 11,
        name: "الشيخ محمد جبريل",
        country: "مصر",
        description: "إمام مسجد الإمام الشافعي، صوته قوي وجميل ويتميز بأدائه المميز.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 85,
        type: "egyptian"
    },
    {
        id: 12,
        name: "الشيخ سعيد عبد الصمد الزناتي",
        country: "مصر",
        description: "قارئ مصري شهير، صوته عذب ويتميز بأدائه المميز وقراءته المرتلة.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "المصري",
        recitations: 70,
        type: "egyptian"
    },
    
    // Saudi Sheikhs (12)
    {
        id: 13,
        name: "الشيخ سعود الشريم",
        country: "السعودية",
        description: "إمام الحرم المكي، يتميز بأدائه القوي وصوته الجهوري العذب.",
        image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 95,
        type: "saudi"
    },
    {
        id: 14,
        name: "الشيخ ماهر المعيقلي",
        country: "السعودية",
        description: "إمام الحرم المكي، صوته مميز بالخشوع والترتيل الجميل.",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 110,
        type: "saudi"
    },
    {
        id: 15,
        name: "الشيخ أحمد العجمي",
        country: "السعودية",
        description: "صوته قوي وجميل، من أشهر قراء القرآن الكريم في العصر الحديث.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 130,
        type: "saudi"
    },
    {
        id: 16,
        name: "الشيخ ياسر الدوسري",
        country: "السعودية",
        description: "إمام الحرم المكي، صوته عذب وجميل ويتميز بأدائه المميز.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 75,
        type: "saudi"
    },
    {
        id: 17,
        name: "الشيخ ناصر القطامي",
        country: "السعودية",
        description: "قارئ سعودي شهير، صوته عذب ويتميز بتلاوته الهادئة.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 90,
        type: "saudi"
    },
    {
        id: 18,
        name: "الشيخ علي جابر",
        country: "السعودية",
        description: "إمام الحرم المكي السابق، صوته مميز بالخشوع والهدوء.",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 80,
        type: "saudi"
    },
    {
        id: 19,
        name: "الشيخ أبو بكر الشاطري",
        country: "السعودية",
        description: "قارئ يمني مقيم بالسعودية، صوته عذب ويتميز بأدائه المميز.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 100,
        type: "saudi"
    },
    {
        id: 20,
        name: "الشيخ محمد أيوب",
        country: "السعودية",
        description: "إمام الحرم المدني، صوته قوي وجميل ويتميز بأدائه المميز.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 110,
        type: "saudi"
    },
    {
        id: 21,
        name: "الشيخ عبد الله عواد الجهني",
        country: "السعودية",
        description: "إمام الحرم النبوي، صوته عذب ويتميز بأدائه المميز.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 85,
        type: "saudi"
    },
    {
        id: 22,
        name: "الشيخ فيصل غزاوي",
        country: "السعودية",
        description: "قارئ سعودي شهير، صوته مميز بالخشوع والترتيل الجميل.",
        image: "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 95,
        type: "saudi"
    },
    {
        id: 23,
        name: "الشيخ بندر بليله",
        country: "السعودية",
        description: "إمام الحرم المكي، صوته عذب ويتميز بأدائه المميز.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 70,
        type: "saudi"
    },
    {
        id: 24,
        name: "الشيخ عبد الرحمن السديس",
        country: "السعودية",
        description: "إمام الحرم المكي، صوته مميز بالخشوع والقوة.",
        image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
        style: "الحجازي",
        recitations: 120,
        type: "saudi"
    }
];

// Suras Data
const suras = [
    { number: 1, name: "الفاتحة", verses: 7, place: "مكية" },
    { number: 2, name: "البقرة", verses: 286, place: "مدنية" },
    { number: 3, name: "آل عمران", verses: 200, place: "مدنية" },
    { number: 4, name: "النساء", verses: 176, place: "مدنية" },
    { number: 5, name: "المائدة", verses: 120, place: "مدنية" },
    { number: 6, name: "الأنعام", verses: 165, place: "مكية" },
    { number: 7, name: "الأعراف", verses: 206, place: "مكية" },
    { number: 8, name: "الأنفال", verses: 75, place: "مدنية" },
    { number: 9, name: "التوبة", verses: 129, place: "مدنية" },
    { number: 10, name: "يونس", verses: 109, place: "مكية" },
    { number: 11, name: "هود", verses: 123, place: "مكية" },
    { number: 12, name: "يوسف", verses: 111, place: "مكية" },
    { number: 13, name: "الرعد", verses: 43, place: "مدنية" },
    { number: 14, name: "إبراهيم", verses: 52, place: "مكية" },
    { number: 15, name: "الحجر", verses: 99, place: "مكية" },
    { number: 16, name: "النحل", verses: 128, place: "مكية" },
    { number: 17, name: "الإسراء", verses: 111, place: "مكية" },
    { number: 18, name: "الكهف", verses: 110, place: "مكية" },
    { number: 19, name: "مريم", verses: 98, place: "مكية" },
    { number: 20, name: "طه", verses: 135, place: "مكية" },
    { number: 21, name: "الأنبياء", verses: 112, place: "مكية" },
    { number: 22, name: "الحج", verses: 78, place: "مدنية" },
    { number: 23, name: "المؤمنون", verses: 118, place: "مكية" },
    { number: 24, name: "النور", verses: 64, place: "مدنية" },
    { number: 25, name: "الفرقان", verses: 77, place: "مكية" }
];

// DOM Elements
const sheikhsContainer = document.getElementById('sheikhsContainer');
const audioPlayer = document.getElementById('audioPlayer');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progress = document.getElementById('progress');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const closePlayer = document.getElementById('closePlayer');
const downloadModal = document.getElementById('downloadModal');
const closeModal = document.getElementById('closeModal');
const surasList = document.getElementById('surasList');
const searchInput = document.getElementById('searchInput');
const filterAll = document.getElementById('filterAll');
const filterEgypt = document.getElementById('filterEgypt');
const filterSaudi = document.getElementById('filterSaudi');
const downloadCurrentBtn = document.getElementById('downloadCurrentBtn');
const totalSheikhsEl = document.getElementById('totalSheikhs');
const egyptianSheikhsEl = document.getElementById('egyptianSheikhs');
const saudiSheikhsEl = document.getElementById('saudiSheikhs');

// Stats calculation
const egyptianSheikhsCount = sheikhs.filter(s => s.type === 'egyptian').length;
const saudiSheikhsCount = sheikhs.filter(s => s.type === 'saudi').length;

totalSheikhsEl.textContent = sheikhs.length;
egyptianSheikhsEl.textContent = egyptianSheikhsCount;
saudiSheikhsEl.textContent = saudiSheikhsCount;

// Audio variables
let audio = new Audio();
let isPlaying = false;
let currentSheikh = null;
let currentSuraIndex = 0;
let currentFilter = 'all';

// Initialize the page
function init() {
    renderSheikhs();
    setupEventListeners();
    updateFilterButtons();
}

// Render sheikhs to the page
function renderSheikhs(filteredSheikhs = sheikhs) {
    sheikhsContainer.innerHTML = '';
    
    filteredSheikhs.forEach(sheikh => {
        const isEgyptian = sheikh.type === 'egyptian';
        const cardClass = isEgyptian ? 'sheikh-card egyptian' : 'sheikh-card';
        
        const sheikhCard = document.createElement('div');
        sheikhCard.className = cardClass;
        sheikhCard.innerHTML = `
            <div class="sheikh-img" style="background-image: url('${sheikh.image}')">
                <div class="sheikh-overlay">
                    <h3 class="sheikh-name">${sheikh.name}</h3>
                </div>
            </div>
            <div class="sheikh-info">
                <span class="sheikh-country">${sheikh.country}</span>
                <p class="sheikh-description">${sheikh.description}</p>
                <div class="recitations-count">
                    <i class="fas fa-play-circle"></i>
                    <span>${sheikh.recitations} تسجيل متوفر</span>
                </div>
                <div class="sheikh-actions">
                    <button class="action-btn listen-btn" data-id="${sheikh.id}">
                        <i class="fas fa-play"></i> استماع
                    </button>
                    <button class="action-btn download-btn" data-id="${sheikh.id}">
                        <i class="fas fa-download"></i> تنزيل
                    </button>
                </div>
            </div>
        `;
        sheikhsContainer.appendChild(sheikhCard);
    });
    
    // Add event listeners to buttons
    document.querySelectorAll('.listen-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const sheikhId = parseInt(this.getAttribute('data-id'));
            playSheikh(sheikhId);
        });
    });
    
    document.querySelectorAll('.download-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const sheikhId = parseInt(this.getAttribute('data-id'));
            openDownloadModal(sheikhId);
        });
    });
}

// Update filter buttons state
function updateFilterButtons() {
    filterAll.classList.remove('active');
    filterEgypt.classList.remove('active');
    filterSaudi.classList.remove('active');
    
    if (currentFilter === 'all') {
        filterAll.classList.add('active');
    } else if (currentFilter === 'egyptian') {
        filterEgypt.classList.add('active');
    } else if (currentFilter === 'saudi') {
        filterSaudi.classList.add('active');
    }
}

// Filter sheikhs by type
function filterSheikhs(type) {
    currentFilter = type;
    
    let filteredSheikhs;
    if (type === 'all') {
        filteredSheikhs = sheikhs;
    } else {
        filteredSheikhs = sheikhs.filter(sheikh => sheikh.type === type);
    }
    
    renderSheikhs(filteredSheikhs);
    updateFilterButtons();
}

// Play a sheikh's recitation
function playSheikh(sheikhId) {
    const sheikh = sheikhs.find(s => s.id === sheikhId);
    if (!sheikh) return;
    
    currentSheikh = sheikh;
    
    // Set audio source (using a placeholder URL for demonstration)
    audio.src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3`;
    
    // Update player UI
    document.getElementById('playerSheikhImg').src = sheikh.image;
    document.getElementById('playerTitle').textContent = `استماع إلى ${sheikh.name}`;
    document.getElementById('playerSubtitle').textContent = 'سورة الفاتحة';
    
    // Show player
    audioPlayer.style.display = 'block';
    
    // Play audio
    playAudio();
}

// Play audio
function playAudio() {
    audio.play();
    isPlaying = true;
    playBtn.innerHTML = '<i class="fas fa-pause"></i>';
}

// Pause audio
function pauseAudio() {
    audio.pause();
    isPlaying = false;
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

// Open download modal
function openDownloadModal(sheikhId) {
    const sheikh = sheikhs.find(s => s.id === sheikhId);
    if (!sheikh) return;
    
    document.getElementById('modalTitle').textContent = `تنزيل تلاوات ${sheikh.name}`;
    
    // Render suras list
    surasList.innerHTML = '';
    suras.forEach(sura => {
        const suraItem = document.createElement('div');
        suraItem.className = 'sura-item';
        suraItem.innerHTML = `
            <div class="sura-number">${sura.number}</div>
            <div class="sura-name">سورة ${sura.name}</div>
            <div class="sura-details">${sura.verses} آية | ${sura.place}</div>
            <div class="download-option">
                <button class="action-btn download-btn" onclick="downloadSura(${sheikhId}, ${sura.number})" style="padding: 5px 10px; font-size: 0.9rem;">
                    <i class="fas fa-download"></i> تنزيل
                </button>
                <button class="action-btn listen-btn" onclick="playSura(${sheikhId}, ${sura.number})" style="padding: 5px 10px; font-size: 0.9rem;">
                    <i class="fas fa-play"></i> استماع
                </button>
            </div>
        `;
        surasList.appendChild(suraItem);
    });
    
    // Show modal
    downloadModal.style.display = 'flex';
}

// Download sura function
function downloadSura(sheikhId, suraNumber) {
    const sheikh = sheikhs.find(s => s.id === sheikhId);
    const sura = suras.find(s => s.number === suraNumber);
    
    if (!sheikh || !sura) return;
    
    // In a real application, this would link to an actual audio file
    // For this demo, we'll simulate a download with an alert
    alert(`سيبدأ تنزيل سورة ${sura.name} بصوت ${sheikh.name}\n\nفي التطبيق الحقيقي، هذا الزر سيحمل الملف الفعلي.`);
    
    // Simulate download
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${sheikh.name.replace(/\s+/g, '_')}_${sura.name}.mp3`;
    link.click();
}

// Play sura function
function playSura(sheikhId, suraNumber) {
    const sheikh = sheikhs.find(s => s.id === sheikhId);
    const sura = suras.find(s => s.number === suraNumber);
    
    if (!sheikh || !sura) return;
    
    currentSheikh = sheikh;
    currentSuraIndex = suraNumber - 1;
    
    // Set audio source
    audio.src = `https://www.soundhelix.com/examples/mp3/SoundHelix-Song-${suraNumber}.mp3`;
    
    // Update player UI
    document.getElementById('playerSheikhImg').src = sheikh.image;
    document.getElementById('playerTitle').textContent = `${sheikh.name}`;
    document.getElementById('playerSubtitle').textContent = `سورة ${sura.name}`;
    
    // Show player
    audioPlayer.style.display = 'block';
    
    // Play audio
    playAudio();
    
    // Close modal
    downloadModal.style.display = 'none';
}

// Setup event listeners
function setupEventListeners() {
    // Play/Pause button
    playBtn.addEventListener('click', () => {
        if (isPlaying) {
            pauseAudio();
        } else {
            playAudio();
        }
    });
    
    // Previous button
    prevBtn.addEventListener('click', () => {
        if (currentSuraIndex > 0) {
            currentSuraIndex--;
            const sura = suras[currentSuraIndex];
            playSura(currentSheikh.id, sura.number);
        }
    });
    
    // Next button
    nextBtn.addEventListener('click', () => {
        if (currentSuraIndex < suras.length - 1) {
            currentSuraIndex++;
            const sura = suras[currentSuraIndex];
            playSura(currentSheikh.id, sura.number);
        }
    });
    
    // Close player
    closePlayer.addEventListener('click', () => {
        audioPlayer.style.display = 'none';
        pauseAudio();
    });
    
    // Close modal
    closeModal.addEventListener('click', () => {
        downloadModal.style.display = 'none';
    });
    
    // Close modal when clicking outside
    downloadModal.addEventListener('click', (e) => {
        if (e.target === downloadModal) {
            downloadModal.style.display = 'none';
        }
    });
    
    // Download current sura
    downloadCurrentBtn.addEventListener('click', () => {
        if (currentSheikh) {
            const currentSura = suras[currentSuraIndex];
            downloadSura(currentSheikh.id, currentSura.number);
        }
    });
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const filteredSheikhs = sheikhs.filter(sheikh => 
            (sheikh.name.toLowerCase().includes(searchTerm) || 
             sheikh.country.toLowerCase().includes(searchTerm) ||
             sheikh.description.toLowerCase().includes(searchTerm)) &&
            (currentFilter === 'all' || sheikh.type === currentFilter)
        );
        renderSheikhs(filteredSheikhs);
    });
    
    // Filter buttons
    filterAll.addEventListener('click', () => filterSheikhs('all'));
    filterEgypt.addEventListener('click', () => filterSheikhs('egyptian'));
    filterSaudi.addEventListener('click', () => filterSheikhs('saudi'));
    
    // Audio time update
    audio.addEventListener('timeupdate', () => {
        const currentTime = audio.currentTime;
        const duration = audio.duration;
        
        // Update progress bar
        const progressPercent = (currentTime / duration) * 100;
        progress.style.width = `${progressPercent}%`;
        
        // Update time display
        currentTimeEl.textContent = formatTime(currentTime);
        durationEl.textContent = formatTime(duration);
    });
    
    // Audio ended
    audio.addEventListener('ended', () => {
        isPlaying = false;
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
        
        // Auto-play next sura
        if (currentSuraIndex < suras.length - 1) {
            setTimeout(() => {
                currentSuraIndex++;
                const sura = suras[currentSuraIndex];
                playSura(currentSheikh.id, sura.number);
            }, 1000);
        }
    });
    
    // Progress bar click
    progressBar.addEventListener('click', (e) => {
        const width = progressBar.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        
        audio.currentTime = (clickX / width) * duration;
    });
}

// Format time (seconds to mm:ss)
function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// Initialize the app when page loads
document.addEventListener('DOMContentLoaded', init);
