// ============================================
// Sheikhs Data - 24 sheikhs (12 Egyptian + 12 Saudi)
// ============================================
const sheikhs = [
    // Egyptian Sheikhs (12)
    {
        id: 1,
        name: "الشيخ عبد الباسط عبد الصمد",
        country: "مصر",
        description: "أحد أشهر قراء القرآن الكريم في العالم الإسلامي، يتميز بصوته العذب وأدائه الفريد.",
        image: "https://i.ibb.co/4JqXv8Q/abdulbasit.jpg",
        style: "المصري",
        recitations: 120,
        type: "egyptian"
    },
    {
        id: 2,
        name: "الشيخ محمد صديق المنشاوي",
        country: "مصر",
        description: "يعتبر من أبرز القراء في العالم الإسلامي، صوته يتميز بالخشوع والقوة.",
        image: "https://i.ibb.co/5Bh6mYt/minshawi.jpg",
        style: "المصري",
        recitations: 85,
        type: "egyptian"
    },
    {
        id: 3,
        name: "الشيخ محمود خليل الحصري",
        country: "مصر",
        description: "أول من سجل القرآن الكريم برواية حفص عن عاصم، صوته مميز بالدقة والتجويد.",
        image: "https://i.ibb.co/5B9p4sW/husary.jpg",
        style: "المصري",
        recitations: 150,
        type: "egyptian"
    },
    {
        id: 4,
        name: "الشيخ مصطفى إسماعيل",
        country: "مصر",
        description: "شيخ القراء، صوته قوي وجميل ويتميز بأدائه المميز والتلوين الصوتي الرائع.",
        image: "https://i.ibb.co/SNLgVQc/mostafa-ismail.jpg",
        style: "المصري",
        recitations: 95,
        type: "egyptian"
    },
    {
        id: 5,
        name: "الشيخ محمد رفعت",
        country: "مصر",
        description: "القارئ الشيخ، أول من افتتح الإذاعة المصرية بقراءة القرآن، صوته عذب وجميل.",
        image: "https://i.ibb.co/4PqNQDj/mohamed-refaat.jpg",
        style: "المصري",
        recitations: 110,
        type: "egyptian"
    },
    {
        id: 6,
        name: "الشيخ علي الحذيفي",
        country: "مصر",
        description: "صوته مميز بالهدوء والخشوع، من أشهر القراء في العالم الإسلامي.",
        image: "https://i.ibb.co/5vjQmDq/ali-huthaifi.jpg",
        style: "المصري",
        recitations: 80,
        type: "egyptian"
    },
    {
        id: 7,
        name: "الشيخ أحمد الرزيقي",
        country: "مصر",
        description: "قارئ مصري شهير، صوته عذب ويتميز بأدائه المميز والتجويد الدقيق.",
        image: "https://i.ibb.co/RQdDcPj/ahmed-el-razaq.jpg",
        style: "المصري",
        recitations: 130,
        type: "egyptian"
    },
    {
        id: 8,
        name: "الشيخ كامل يوسف البهتيمي",
        country: "مصر",
        description: "قارئ مصري شهير، صوته مميز بالخشوع والقوة، من تلاميذ الشيخ محمد رفعت.",
        image: "https://i.ibb.co/0mzQMz6/kamel-youssef.jpg",
        style: "المصري",
        recitations: 75,
        type: "egyptian"
    },
    {
        id: 9,
        name: "الشيخ عبد العزيز حصان",
        country: "مصر",
        description: "قارئ مصري شهير، صوته عذب ويتميز بأدائه المميز وقراءته المرتلة.",
        image: "https://i.ibb.co/vZ3K62S/aziz-hassan.jpg",
        style: "المصري",
        recitations: 90,
        type: "egyptian"
    },
    {
        id: 10,
        name: "الشيخ محمود علي البنا",
        country: "مصر",
        description: "قارئ مصري شهير، صوته مميز بالخشوع والهدوء، من أشهر قراء القرن العشرين.",
        image: "https://i.ibb.co/0GkG5fL/mahmoud-albana.jpg",
        style: "المصري",
        recitations: 100,
        type: "egyptian"
    },
    {
        id: 11,
        name: "الشيخ محمد جبريل",
        country: "مصر",
        description: "إمام مسجد الإمام الشافعي، صوته قوي وجميل ويتميز بأدائه المميز.",
        image: "https://i.ibb.co/6XS6km2/mohamed-gibreel.jpg",
        style: "المصري",
        recitations: 85,
        type: "egyptian"
    },
    {
        id: 12,
        name: "الشيخ سعيد عبد الصمد الزناتي",
        country: "مصر",
        description: "قارئ مصري شهير، صوته عذب ويتميز بأدائه المميز وقراءته المرتلة.",
        image: "https://i.ibb.co/P4tSTFW/said-zanaty.jpg",
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
        image: "https://i.ibb.co/5Tf4zDX/saud-al-shuraim.jpg",
        style: "الحجازي",
        recitations: 95,
        type: "saudi"
    },
    {
        id: 14,
        name: "الشيخ ماهر المعيقلي",
        country: "السعودية",
        description: "إمام الحرم المكي، صوته مميز بالخشوع والترتيل الجميل.",
        image: "https://i.ibb.co/Kx23kxb/maher-al-muaiqly.jpg",
        style: "الحجازي",
        recitations: 110,
        type: "saudi"
    },
    {
        id: 15,
        name: "الشيخ أحمد العجمي",
        country: "السعودية",
        description: "صوته قوي وجميل، من أشهر قراء القرآن الكريم في العصر الحديث.",
        image: "https://i.ibb.co/pjv9X0g/ahmed-al-ajmi.jpg",
        style: "الحجازي",
        recitations: 130,
        type: "saudi"
    },
    {
        id: 16,
        name: "الشيخ ياسر الدوسري",
        country: "السعودية",
        description: "إمام الحرم المكي، صوته عذب وجميل ويتميز بأدائه المميز.",
        image: "https://i.ibb.co/9pL55gK/yasser-al-dosari.jpg",
        style: "الحجازي",
        recitations: 75,
        type: "saudi"
    },
    {
        id: 17,
        name: "الشيخ ناصر القطامي",
        country: "السعودية",
        description: "قارئ سعودي شهير، صوته عذب ويتميز بتلاوته الهادئة.",
        image: "https://i.ibb.co/MV0tN1x/nasser-al-qatami.jpg",
        style: "الحجازي",
        recitations: 90,
        type: "saudi"
    },
    {
        id: 18,
        name: "الشيخ علي جابر",
        country: "السعودية",
        description: "إمام الحرم المكي السابق، صوته مميز بالخشوع والهدوء.",
        image: "https://i.ibb.co/fxNz9Mw/ali-jaber.jpg",
        style: "الحجازي",
        recitations: 80,
        type: "saudi"
    },
    {
        id: 19,
        name: "الشيخ أبو بكر الشاطري",
        country: "السعودية",
        description: "قارئ يمني مقيم بالسعودية، صوته عذب ويتميز بأدائه المميز.",
        image: "https://i.ibb.co/1qYNf7R/abu-bakr-al-shatri.jpg",
        style: "الحجازي",
        recitations: 100,
        type: "saudi"
    },
    {
        id: 20,
        name: "الشيخ محمد أيوب",
        country: "السعودية",
        description: "إمام الحرم المدني، صوته قوي وجميل ويتميز بأدائه المميز.",
        image: "https://i.ibb.co/Cb4d8Yz/mohamed-ayyub.jpg",
        style: "الحجازي",
        recitations: 110,
        type: "saudi"
    },
    {
        id: 21,
        name: "الشيخ عبد الله عواد الجهني",
        country: "السعودية",
        description: "إمام الحرم النبوي، صوته عذب ويتميز بأدائه المميز.",
        image: "https://i.ibb.co/1X8L4sR/abdullah-al-juhani.jpg",
        style: "الحجازي",
        recitations: 85,
        type: "saudi"
    },
    {
        id: 22,
        name: "الشيخ فيصل غزاوي",
        country: "السعودية",
        description: "قارئ سعودي شهير، صوته مميز بالخشوع والترتيل الجميل.",
        image: "https://i.ibb.co/NT7Z2y0/faisal-ghazzawi.jpg",
        style: "الحجازي",
        recitations: 95,
        type: "saudi"
    },
    {
        id: 23,
        name: "الشيخ بندر بليله",
        country: "السعودية",
        description: "إمام الحرم المكي، صوته عذب ويتميز بأدائه المميز.",
        image: "https://i.ibb.co/6WRSvsv/bandar-bleleh.jpg",
        style: "الحجازي",
        recitations: 70,
        type: "saudi"
    },
    {
        id: 24,
        name: "الشيخ عبد الرحمن السديس",
        country: "السعودية",
        description: "إمام الحرم المكي، صوته مميز بالخشوع والقوة.",
        image: "https://i.ibb.co/cyNvGyt/abdulrahman-al-sudais.jpg",
        style: "الحجازي",
        recitations: 120,
        type: "saudi"
    }
];

// ============================================
// Suras Data
// ============================================
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

// ============================================
// DOM Elements
// ============================================
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

// ============================================
// App Variables
// ============================================
let audio = new Audio();
let isPlaying = false;
let currentSheikh = null;
let currentSuraIndex = 0;
let currentFilter = 'all';

// ============================================
// Initialize Statistics
// ============================================
const egyptianSheikhsCount = sheikhs.filter(s => s.type === 'egyptian').length;
const saudiSheikhsCount = sheikhs.filter(s => s.type === 'saudi').length;

totalSheikhsEl.textContent = sheikhs.length;
egyptianSheikhsEl.textContent = egyptianSheikhsCount;
saudiSheikhsEl.textContent = saudiSheikhsCount;

// ============================================
// Main Functions
// ============================================

// Initialize the application
function init() {
    renderSheikhs();
    setupEventListeners();
    updateFilterButtons();
    preloadImages();
}

// Preload images for better performance
function preloadImages() {
    console.log('🚀 جاري تحميل صور الشيوخ...');
    
    sheikhs.forEach((sheikh, index) => {
        const img = new Image();
        img.onload = () => {
            console.log(`✅ صورة ${sheikh.name} محملة بنجاح`);
        };
        img.onerror = () => {
            console.log(`⚠️ خطأ في تحميل صورة ${sheikh.name}`);
            // Use fallback image
            sheikh.image = `https://via.placeholder.com/500x300/1a472a/ffffff?text=${encodeURIComponent(sheikh.name)}`;
        };
        img.src = sheikh.image;
    });
}

// Render sheikhs to the page
function renderSheikhs(filteredSheikhs = sheikhs) {
    sheikhsContainer.innerHTML = '';
    
    // Show loading state
    if (filteredSheikhs.length === 0) {
        sheikhsContainer.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>لم يتم العثور على شيوخ</h3>
                <p>جرب بحثًا مختلفًا أو اختر فلترًا آخر</p>
            </div>
        `;
        return;
    }
    
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
                <span class="sheikh-country">
                    <i class="fas fa-map-marker-alt" style="margin-left: 5px;"></i>
                    ${sheikh.country}
                </span>
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
    currentSuraIndex = 0;
    
    // Set audio source (demo URL)
    audio.src = `https://download.quranicaudio.com/quranaudio/001.mp3`;
    
    // Update player UI
    document.getElementById('playerSheikhImg').src = sheikh.image;
    document.getElementById('playerTitle').textContent = `استماع إلى ${sheikh.name}`;
    document.getElementById('playerSubtitle').textContent = 'سورة الفاتحة - تجويد';
    
    // Show player
    audioPlayer.style.display = 'block';
    
    // Play audio
    playAudio();
}

// Play audio
function playAudio() {
    audio.play()
        .then(() => {
            isPlaying = true;
            playBtn.innerHTML = '<i class="fas fa-pause"></i>';
        })
        .catch(error => {
            console.error('خطأ في تشغيل الصوت:', error);
            showNotification('⚠️ تعذر تشغيل الصوت، جرب سورة أخرى', 'warning');
        });
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
    
    // Create realistic download URL
    const sheikhNameFormatted = sheikh.name
        .replace(/الشيخ /g, '')
        .replace(/\s+/g, '_')
        .toLowerCase();
    
    // Demo download URL
    const downloadUrl = `https://download.quranicaudio.com/quran/${sheikhNameFormatted}/${String(suraNumber).padStart(3, '0')}.mp3`;
    
    // Create download link
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = `${sheikh.name}_سورة_${sura.name}.mp3`;
    link.target = '_blank';
    
    // Show download status
    showNotification(`جاري تنزيل سورة ${sura.name} بصوت ${sheikh.name}...`, 'info');
    
    // Start download
    setTimeout(() => {
        link.click();
        showNotification(`✅ تم بدء تنزيل سورة ${sura.name}`, 'success');
    }, 500);
}

// Play sura function
function playSura(sheikhId, suraNumber) {
    const sheikh = sheikhs.find(s => s.id === sheikhId);
    const sura = suras.find(s => s.number === suraNumber);
    
    if (!sheikh || !sura) return;
    
    currentSheikh = sheikh;
    currentSuraIndex = suraNumber - 1;
    
    // Create realistic audio URL
    const sheikhNameFormatted = sheikh.name
        .replace(/الشيخ /g, '')
        .replace(/\s+/g, '_')
        .toLowerCase();
    
    // Demo audio URL
    audio.src = `https://download.quranicaudio.com/quran/${sheikhNameFormatted}/${String(suraNumber).padStart(3, '0')}.mp3`;
    
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

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = 'download-status';
    
    let icon = 'fa-info-circle';
    if (type === 'success') icon = 'fa-check-circle';
    if (type === 'warning') icon = 'fa-exclamation-triangle';
    if (type === 'error') icon = 'fa-times-circle';
    
    notification.innerHTML = `
        <i class="fas ${icon}" style="font-size: 1.2rem;"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ============================================
// Helper Functions
// ============================================

// Format time (seconds to mm:ss)
function formatTime(seconds) {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ============================================
// Event Listeners Setup
// ============================================
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
        if (duration && !isNaN(duration)) {
            durationEl.textContent = formatTime(duration);
        }
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
        
        if (duration && !isNaN(duration)) {
            audio.currentTime = (clickX / width) * duration;
        }
    });
    
    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Space bar to play/pause
        if (e.code === 'Space' && audioPlayer.style.display !== 'none') {
            e.preventDefault();
            if (isPlaying) {
                pauseAudio();
            } else {
                playAudio();
            }
        }
        
        // Escape to close modals
        if (e.code === 'Escape') {
            if (downloadModal.style.display === 'flex') {
                downloadModal.style.display = 'none';
            }
            if (audioPlayer.style.display !== 'none') {
                audioPlayer.style.display = 'none';
                pauseAudio();
            }
        }
    });
    
    // Prevent right-click on images
    document.addEventListener('contextmenu', (e) => {
        if (e.target.classList.contains('sheikh-img') || 
            e.target.classList.contains('player-sheikh-img')) {
            e.preventDefault();
            showNotification('🕌 هذه الصورة محمية بحقوق النشر', 'warning');
        }
    });
}

// ============================================
// Make functions available globally
// ============================================
window.downloadSura = downloadSura;
window.playSura = playSura;

// ============================================
// Initialize the application
// ============================================
document.addEventListener('DOMContentLoaded', init);

// Log initialization
console.log('🚀 تطبيق تلاوات القرآن الكريم جاهز!');
console.log(`📊 عدد الشيوخ: ${sheikhs.length}`);
console.log(`📊 عدد السور: ${suras.length}`);
console.log('👨‍💻 تم التطوير بواسطة Moaz Yasser');
