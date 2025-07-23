# 🎮 Steve Armor Selector
React의 `useState` 훅과 상태 관리의 기본 개념을 연습하기 위해 제작한 간단한 프로젝트입니다.  
사용자는 버튼 클릭을 통해 무작위로 Steve 캐릭터의 장비(머리, 몸통, 다리)를 변경할 수 있습니다.

## 📸 미리보기
<img width="609" height="647" alt="capture" src="https://github.com/user-attachments/assets/9a0c38d8-ed75-4c52-9971-92fb97f250f9" />


---

## 🛠️ 기술 스택 (Tech Stack)

- **React** (with Vite)
- **JavaScript (ES6+)**
- **CSS Modules**
- **goormIDE**

---

## ✨ 주요 기능 (Features)

- 🎲 버튼 클릭으로 모든 장비 변경
- 🧧 장비 부위별 무작위 선택
- 📦 상태 초기화 함수 활용 (`generateGameBoard` 등)
- 🧠 `useState` 훅을 활용한 상태 관리 실습
- 🧩 컴포넌트 분리 연습 (`HeadArmor`, `BodyArmor` 등)

---

## 📝 학습 포인트

- `useState`를 이용한 배열 및 객체 상태 다루기
- `setState`로 부분 업데이트와 전체 덮어쓰기 실습
- `Object.entries`, `Math.random`, 배열 매핑 등 JS 기초 개념 적용
- React 이벤트 핸들링 (`onClick`)

---

## 📁 프로젝트 구조

src/
├── components/
│ ├── HeadArmor.jsx
│ └── BodyArmor.jsx
│ └── LegArmor.jsx
├── App.jsx
├── main.jsx
└── index.css


---

## 📌 사용법

# 1. 프로젝트 클론
git clone https://github.com/guswnsj0112/minecraft-style-armor-simulator.git

# 2. 패키지 설치
npm install

# 3. 로컬 서버 실행
npm run dev

📚 앞으로 해볼 개선
상태를 Context API로 리팩토링

장비 아이콘 혹은 이미지 추가

선택된 장비 이력 로그 남기기

반응형 디자인 적용

🙋‍♂️ 만든 사람
장현준
프론트엔드 개발자 지망생으로, 기획과 개발을 모두 아우르는 PM(Personal Maker)을 목표로 성장 중입니다.
꾸준한 사이드 프로젝트와 학습을 통해 커리어 기반을 다져나가고 있습니다.

📧 문의: [guswnsj0112@naver.com]
🐱 깃허브: github.com/guswnsj0112

