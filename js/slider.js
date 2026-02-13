/* ==========================================
   Hero 이미지 슬라이더
   ========================================== */

let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const dots = document.querySelectorAll('.dot');
const slideInterval = 3000; // 3초

function showSlide(index) {
    // 모든 슬라이드 비활성화
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // 현재 슬라이드 활성화
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// 자동 슬라이드
let autoSlide = setInterval(nextSlide, slideInterval);

// 닷 클릭 이벤트
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        
        // 자동 슬라이드 재시작
        clearInterval(autoSlide);
        autoSlide = setInterval(nextSlide, slideInterval);
    });
});
