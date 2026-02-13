/* ==========================================
   매뉴얼 아코디언
   ========================================== */

document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion-button');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 현재 버튼의 활성화 상태 토글
            const isActive = this.classList.contains('active');
            
            // 모든 아코디언 닫기
            accordionButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.classList.remove('active');
            });
            
            // 클릭한 아코디언만 열기 (이미 열려있었으면 닫힌 상태 유지)
            if (!isActive) {
                this.classList.add('active');
                this.nextElementSibling.classList.add('active');
            }
        });
    });
});
