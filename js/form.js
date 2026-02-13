/* ==========================================
   문의하기 폼
   ========================================== */

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;
    
    // 실제 구현시에는 백엔드 API나 이메일 서비스 연동
    // 현재는 알림만 표시
    alert(`문의가 접수되었습니다.\n\n이름: ${name}\n연락처: ${phone}\n\n빠른 시일 내에 연락드리겠습니다.`);
    
    // 폼 초기화
    contactForm.reset();
});
