# HEART FOOT 웹사이트

발마사지 기기 브랜드 홈페이지 (데모)

## 📁 디렉토리 구조

```
heartfoot-demo/
├── index.html              # 메인 HTML 파일
├── css/
│   └── style.css          # 스타일시트
├── js/
│   └── script.js          # JavaScript
└── images/                # 이미지 폴더
    ├── logo.png
    ├── product-front-white.png
    ├── product-front-black.jpg
    ├── product-side-white.png
    ├── product-side-black.jpg
    ├── product-lifestyle.jpg
    ├── catalog-cover.jpg
    ├── catalog-features.jpg
    ├── catalog-certifications.jpg
    ├── catalog-target.jpg
    ├── catalog-usage.jpg
    └── catalog-circulation.jpg
```

## 🚀 GitHub Pages 배포 방법

### 1. GitHub 저장소에 업로드

```bash
# 저장소 클론 (이미 만들었음)
git clone git@github.com:hancoding0520/heartfoot-demo.git

# 파일들을 저장소로 복사
# (이 폴더의 모든 파일을 heartfoot-demo 저장소로 복사)

# Git 커밋 및 푸시
cd heartfoot-demo
git add .
git commit -m "Initial commit: HEART FOOT website"
git push origin main
```

### 2. GitHub Pages 활성화

1. GitHub 저장소 페이지로 이동
2. **Settings** 클릭
3. 왼쪽 메뉴에서 **Pages** 클릭
4. **Source**에서 **main** 브랜치 선택
5. **Save** 클릭

### 3. 배포 완료

몇 분 후 다음 URL에서 접속 가능:
```
https://hancoding0520.github.io/heartfoot-demo/
```

## 🎨 디자인 특징

- **색상**: 베이지/크림 배경 (#F5F1ED), 레드 포인트 (#C8102E)
- **스타일**: 모던 카탈로그 느낌
- **레이아웃**: 반응형 (모바일/태블릿/데스크톱)

## 📱 반응형 지원

- 데스크톱: 1200px 이상
- 태블릿: 768px ~ 1200px
- 모바일: 768px 이하

## ✨ 주요 기능

- 부드러운 스크롤 애니메이션
- 모바일 햄버거 메뉴
- 문의 폼 (현재는 알림만, 추후 백엔드 연동 필요)
- 스크롤 시 요소 페이드인 효과

## 🔧 수정 방법

### 텍스트 수정
`index.html` 파일에서 직접 수정

### 색상 변경
`css/style.css` 파일 상단 `:root` 변수 수정:
```css
:root {
    --color-primary: #C8102E;  /* 메인 색상 */
    --color-bg: #F5F1ED;       /* 배경 색상 */
}
```

### 이미지 교체
`images/` 폴더의 파일을 같은 이름으로 교체

## 📞 연락처

- 전화: 010-8784-0199
- 주소: 부산광역시 동래구 금강로 69 (2층)
- 웹사이트: www.heartfoot.kr

## 📝 라이선스

© 2025 HEART FOOT. All rights reserved.
