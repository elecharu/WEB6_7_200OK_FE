# 🍂 WindFall (윈드폴)

> **"거래를 '피로'가 아닌 '경험'으로 재구성하다"**  
> 네덜란드식 경매(하락형 경매) 기반의 전국 중고거래 플랫폼

## 📖 프로젝트 소개

**WindFall**은 기존 중고거래의 가장 큰 문제점인 '가격 협상의 피로'와 '비효율적인 소통'을 해결하기 위해 기획되었습니다. 시간이 지날수록 가격이 내려가는 **네덜란드식 경매(Dutch Auction)** 방식을 도입하여, 구매자에게는 눈치 게임의 몰입감을, 판매자에게는 협상 없는 신속한 판매 경험을 제공합니다.

- **구매자:** "지금 살까, 더 기다릴까?" 운 좋게 싸게 사는 경험(Windfall)과 몰입감 제공
- **판매자:** 네고 스트레스 없이 합리적인 가격에 재고 회전
- **서비스 특징:** 시간 압박형 거래 구조, 실시간 인터랙티브, 웹소켓 기반 실시간 사용자 집계

---

## 👥 200OK (Team A2)

### Frontend Team
| 이름 | Role | 담당 업무 |
|:---:|:---:|:---|
| **한성수** | **Frontend Lead** | **경매 등록, 실시간 채팅, 배포 환경 구성** |
| 김세현 | Frontend | 경매 상세 조회, 경매 구매, 결제 페이지 |
| 이서진 | Frontend | 디자인 시스템, UI/UX 설계, 메인/목록 페이지, FSD 아키텍처 |
| 이제원 | Frontend | 사용자 페이지, 로그인(OAuth), 마이페이지 |

### Backend Team
- **유호준 (Lead):** 실시간 채팅/알림, 자동화 배포
- **최지혁 (PO):** 결제 API 연동, 로그인
- **서명진:** 경매 CRUD, 검색, 알림 조회
- **윤예지:** 실시간 접속자, 경매 상세, 시작 알림
- **이창중:** 유저 상세, 리뷰, 대시보드
- **주정윤:** 태그 검색, 좋아요, 알림 설정

---

## 🛠️ Frontend Tech Stack

최신 웹 기술 트렌드와 안정적인 서비스를 위해 다음과 같은 기술 스택을 도입했습니다.

### Core
- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Library:** React 19

### State Management & Data Fetching
- **Server State:** TanStack Query (React Query) v5
- **Client State:** Zustand

### Styling & UI
- **Styling:** Tailwind CSS v4
- **Components:** shadcn/ui (@radix-ui)
- **Animation:** Motion (Framer Motion), Lottie React Player
- **Icons:** Lucide React

### Real-time Communication
- **WebSocket:** SockJS, StompJS (실시간 채팅 및 알림)
- **Events:** Server-Sent Events (SSE)

### Form & Validation
- **Form:** React Hook Form
- **Schema Validation:** Zod

### Payments & External
- **Payments:** Toss Payments SDK
- **Login:** OAuth 2.0 (Kakao, Google, Naver)

### Testing & Quality
- **Linting:** ESLint, Prettier, Husky, Commitlint

---

## 👨‍💻 Frontend Lead (한성수) 기여 내용

팀의 **Frontend Lead**로서 프로젝트 전반의 기술적 의사결정과 개발 문화를 주도하며 다음과 같은 핵심 기능을 구현했습니다.

### 1. 핵심 기능 개발
- **경매 물품 등록 프로세스:** 복잡한 경매 옵션 설정을 직관적인 UI로 구현하고 유효성 검사를 체계화했습니다.
- **실시간 채팅 (WebSocket/Stomp):** 판매자와 구매자 간의 실시간 1:1 채팅 기능을 구현하였습니다.
- **배포 환경 구성:** CI/CD 파이프라인 구축 및 배포 자동화를 담당하여 팀의 개발 생산성을 향상시켰습니다.

### 2. 기술적 도전 및 성과
- **성능 최적화:** 이미지 업로드 시 파일 크기 압축 및 리사이징을 통해 로딩 속도와 트래픽 비용을 절감했습니다.
- **아키텍처 설계:** 모듈화와 확장성을 고려한 프로젝트 구조(FSD/Atomic 디자인 고려)를 설계하여 유지보수성을 확보했습니다.
- **코드 리뷰 문화 정착:** 활발한 코드 리뷰와 토론 문화를 주도하여 코드 품질을 상향 평준화했습니다.

### 3. 협업 및 리더십
- 주도적인 일정 관리와 의견 조율로 프로젝트 전 과정을 안정적으로 이끌었으며, 팀워크 극대화에 기여한 공로로 최종 프로젝트 리더십 상을 수상하는 성과를 거두었습니다.
- 협업 시 발생할 수 있는 도메인 이슈를 백엔드 팀과의 사전 소통으로 최소화하여, 기술적 문제 해결과 팀 화합을 동시에 이끌어냈습니다.

---

## 🚀 Getting Started

로컬 환경에서 프로젝트를 실행하는 방법입니다.

### Installation

```bash
# 의존성 설치 (pnpm 권장)
pnpm install
```

### Run Development Server

```bash
pnpm dev
```
