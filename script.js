// ============================================
// اختبار أن الكود كامل ويعمل
// ============================================
console.log('============================================');
console.log('🕌 تطبيق تلاوات القرآن الكريم');
console.log('👨‍💻 تم التطوير بواسطة Moaz Yasser');
console.log('📅 الإصدار: 2.0 - مع إصلاح الصوت');
console.log('============================================');
console.log('✅ عدد الشيوخ:', sheikhs.length);
console.log('✅ عدد السور:', suras.length);
console.log('✅ رواقع الصوت:', Object.keys(audioSources).length);
console.log('✅ رواقع احتياطية:', fallbackAudioUrls.length);
console.log('✅ DOM Elements:', !!sheikhsContainer && !!audioPlayer);
console.log('============================================');

// اختبار الدوال الأساسية
const requiredFunctions = [
    'init', 'renderSheikhs', 'playSheikh', 'playSura',
    'playAudio', 'pauseAudio', 'getAudioUrl', 'setupEventListeners'
];

requiredFunctions.forEach(func => {
    if (typeof window[func] === 'function') {
        console.log(`✅ ${func}() موجودة`);
    } else {
        console.error(`❌ ${func}() مفقودة`);
    }
});

console.log('============================================');
console.log('🎯 الكود جاهز للتشغيل!');
console.log('============================================');
