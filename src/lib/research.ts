export interface ResearchQuote {
  text: string;
  source: string;
}

export interface ResearchSource {
  label: string;
  url: string;
}

export interface ResearchCard {
  title: string;
  summary: string[];
  quotes?: ResearchQuote[];
  sources?: ResearchSource[];
  tag?: string;
}

export interface ResearchSection {
  title: string;
  subtitle?: string;
  cards: ResearchCard[];
}

export const researchMeta = {
  updatedAt: "2026-04-11",
  rawFiles: [
    "raw/raw-07-고객-디자인-보이스.md",
    "raw/raw-08-세그먼트-수요-디자인차별화.md",
  ],
  totalSources: 60,
};

export const researchSections: ResearchSection[] = [
  {
    title: "핵심 발견",
    subtitle: "raw-07·08 리서치에서 도출된 가장 중요한 5가지",
    cards: [
      {
        title: "① 다리 디자인이 전체를 좌우한다",
        tag: "최중요 인용",
        summary: [
          "원목 식탁 만족도의 핵심은 상판이 아닌 '다리 디자인'이라는 시장 합의가 존재합니다.",
          "경쟁사 대부분은 상판(원목)과 다리(철제)를 따로 공급 → 매칭 실패 빈번.",
          "우리의 '원스톱 원목+철제 제작'이 정확히 해결하는 pain point입니다.",
        ],
        quotes: [
          {
            text:
              "원목 테이블 디자인의 생명은 다리 디자인이며, 같은 우드슬랩 조각이어도 어떤 다리를 함께 배치해주느냐에 따라 그 분위기는 완전히 달라진다. 가구의 용도, 공간의 분위기, 공간에서 가구의 역할에 따라 가공법과 디자인이 함께 병행되어야 그 시너지 효과를 낼 수 있습니다.",
            source: "여덟번째쉼표 블로그",
          },
        ],
        sources: [
          {
            label: "여덟번째쉼표 — 원목 식탁 우드슬랩 다리 디자인",
            url: "https://www.8th-restnote.com/blog/?bmode=view&idx=83780182",
          },
        ],
      },
      {
        title: "② 만족의 핵심 언어는 '예쁘다'가 아닌 '어울린다'",
        tag: "포지셔닝 전환",
        summary: [
          "긍정 리뷰의 공통 언어는 '우리 집과 너무나 잘 어울려요' 류.",
          "이는 제작자의 '공간 조율 감각'에 대한 평가입니다.",
          "포지셔닝 어조를 '마감 품질' → '디자인 조율'로 재조정이 필요합니다.",
        ],
        quotes: [
          {
            text:
              "쓸수록 고급스러워지는 원목가구의 매력을 베이직가구 덕분에 매일 느끼고 있습니다. 시간이 흐를수록 애정이 더해지고 볼수록 디자인이 고급스럽습니다.",
            source: "베이직가구 고객 후기",
          },
          {
            text: "우리 집과 너무나 잘 어울려요.",
            source: "베이직가구 고객 후기",
          },
        ],
        sources: [
          { label: "베이직가구", url: "https://www.basicgagu.com/" },
        ],
      },
      {
        title: "③ 우드슬랩은 우리 강점과 불일치 — Phase 2~3로 이동",
        tag: "전략 조정",
        summary: [
          "우드슬랩은 마감 품질(연마·오일)이 매출 결정 요인입니다.",
          "경쟁사 10년 이상 전문 공방 다수 존재 → 승부 지점이 아닙니다.",
          "사업 주체의 강점(디자인 감각)과 맞지 않으므로 핵심 상품에서 축소, Phase 2~3에서 외주 연계로 이동 권고.",
        ],
        quotes: [
          {
            text: "손이 다치지 않아야 하고 옷이 걸리지 말아야 비로소 큰 문제없이 사용할 수 있습니다.",
            source: "여덟번째쉼표 (우드슬랩 가공 언급)",
          },
        ],
        sources: [
          {
            label: "여덟번째쉼표 — 우드슬랩 vs 제재목 식탁",
            url: "https://www.8th-restnote.com/blog/?bmode=view&idx=18097849",
          },
          {
            label: "오스카퍼니처 — 우드슬랩 용어 정착",
            url: "https://oscarfurnitureinc.com/%EC%9A%B0%EB%93%9C%EC%8A%AC%EB%9E%A9%EC%9D%B4%EB%9E%80/",
          },
        ],
      },
      {
        title: "④ 국내 곡선 철제 다리 시장은 해외 대비 10년 격차",
        tag: "기회 공백",
        summary: [
          "국내 주요 철제 다리 셀러 10곳 조사 결과 모두 X/U/헤어핀 직선 중심.",
          "해외 Etsy는 Saber(사브르)·Cabriole(카브리올)·Splayed(벌어진)·Crescent(초승달) 등 곡선이 상시 유통.",
          "곡선 철제 다리 국내 이식 = 즉시 공백 선점 가능 → 'Curvature' 서브 컬렉션 신설 권고.",
        ],
        sources: [
          {
            label: "Etsy — Curved Dining Table Legs",
            url: "https://www.etsy.com/market/curved_dining_table_legs",
          },
          {
            label: "Cabinfield — Table Leg Styles Visual Guide",
            url: "https://www.cabinfield.com/blog/types-of-table-leg-styles-complete-visual-guide/",
          },
          {
            label: "온움가구 (국내 직선 중심 사례)",
            url: "https://onumgagu.com/category/%EC%B2%A0%EC%A0%9C%EB%8B%A4%EB%A6%AC%EA%B5%AD%EB%82%B4%EC%A0%9C%EC%9E%91/67/",
          },
        ],
      },
      {
        title: "⑤ 가장 큰 구매 후회는 '공간 지배 과잉'",
        tag: "FAQ 필수",
        summary: [
          "23평 아파트에 6인용 180cm 식탁 = '거실이 끝났다'는 후회.",
          "쇼룸 감각과 실제 집 공간 감각의 차이가 실패의 주요 원인.",
          "상세페이지에 '실제 집 공간 배치 예' + 상담 시 '고객 공간 사진 → 비례 제안' 프로세스 필수.",
        ],
        quotes: [
          {
            text: "이거 하나 놓고 나니 거실이 끝났다. 두 명 집엔 160cm도 괜찮지 않았을까?",
            source: "kimsgotmoney 블로그",
          },
          {
            text:
              "좋게 말하면 존재감이 확실하고 나쁘게 말하면 부담스럽습니다. 20평 중반에 180cm는 확실히 크고 존재감이 다릅니다.",
            source: "원목식탁 후기 블로그",
          },
          {
            text:
              "첫 날 짬뽕을 시켜서 먹고 닦으니 그릇모양대로 동그랗게 얼룩이 생겼다. 식사시간은 마치 상호감시체제 같이 되어 누가 흘리면 서로 야단치고 분위기 엉망.",
            source: "82cook 커뮤니티",
          },
        ],
        sources: [
          { label: "kimsgotmoney — 23평 6인용 원목식탁 1년 후기", url: "https://kimsgotmoney.com/12" },
          { label: "82cook — 원목식탁 관리 고민", url: "https://www.82cook.com/entiz/read.php?num=1466666" },
        ],
      },
    ],
  },
  {
    title: "2026 시장·트렌드",
    subtitle: "거시 지표와 2026년 핵심 트렌드 키워드",
    cards: [
      {
        title: "홈리모델링·홈퍼니싱 시장 54조 성장",
        tag: "상승장",
        summary: [
          "2021년 38조원 → 2026년 54조원 (매년 7% 복리 성장).",
          "리모델링만: 2020년 30조 → 2030년 44조~46조 (한국건설산업연구원).",
          "Phase 1 진입 타이밍이 상승장과 맞물려 최적입니다.",
        ],
        sources: [
          { label: "서울신문 — 홈리모델링 시장 전망", url: "https://www.seoul.co.kr/news/newsView.php?id=20230324014001" },
          {
            label: "대한전문건설신문 — 리모델링 2030년 46조",
            url: "http://www.koscaj.com/news/articleView.html?idxno=111927",
          },
        ],
      },
      {
        title: "트렌드코리아 2026 — 우리 사업 직결 4개 키워드",
        tag: "포지셔닝 정합",
        summary: [
          "🎯 근본이즘 (Returning to the Fundamentals) — 원목·금속 기본 소재, MDF 반작용",
          "🎯 필코노미 (The Feelconomy) — '얼마나 필요한가'보다 '어떤 기분이 드는가' → 맞춤 상담의 가치",
          "🎯 1.5가구 (Everyone Is an Island) — 1인 가구 800만 독립성 강화",
          "🎯 프라이스 디코딩 (Price Decoding) — '이 가격의 이유' 투명성 요구",
        ],
        sources: [
          { label: "트렌드 코리아 2026 요약 (Giftishow)", url: "https://biz.giftishow.com/blog/trend-korea-keywords" },
          { label: "KB Think — 2026 MZ 소비 트렌드", url: "https://kbthink.com/life/card/mz-consumption-trends.html" },
          { label: "교보문고 — 트렌드 코리아 2026", url: "https://product.kyobobook.co.kr/detail/S000217467412" },
        ],
      },
      {
        title: "아일랜드 식탁 몰락 → 페닌슐라 + 다이닝 조합",
        tag: "배치 트렌드",
        summary: [
          "2026년 주방 트렌드로 '페닌슐라(반도형) + 다이닝 테이블 조합'이 부상.",
          "아일랜드는 20~30평대 아파트에서 '공간 잠식'으로 인식되어 철거 사례 급증.",
          "아일랜드 철거 → 새 식탁 들이기 리모델링 수요가 Phase 2~3 핵심 기회입니다.",
        ],
        quotes: [
          {
            text:
              "아일랜드 식탁을 철거한 자리에 원형 식탁을 여유롭게 둘 수 있어서 좋았어요. 좁은 아파트에서 거실과 주방의 경계를 없애 개방감 확보.",
            source: "다음 뉴스 인테리어 기사",
          },
        ],
        sources: [
          {
            label: "레이디경향 2026-02-23 — 아일랜드 식탁 저물었다",
            url: "https://lady.khan.co.kr/living/article/202602231636001",
          },
          {
            label: "다음 뉴스 — 식탁 없앴더니 인테리어 대박",
            url: "https://v.daum.net/v/fUGbJPnXM9?f=m",
          },
        ],
      },
      {
        title: "2026 인테리어 트렌드 — 곡선 미학·뉴트로 우드·소프트 미니멀리즘",
        tag: "디자인 방향",
        summary: [
          "곡선 미학·튜브 형태가 가구 주류 (6개 트렌드 기사 공통 명시).",
          "뉴트로 우드 — 티크·월넛 짙은 우드 복귀.",
          "소프트 미니멀리즘 — 차갑지 않은 따뜻한 중성톤 미니멀.",
          "2026 팔레트: 갈색·모래·올리브·슬레이트·점토·테라코타 (블랙/골드에서 이동).",
        ],
        sources: [
          {
            label: "NordicNest Korea — 2026 스칸디나비아 트렌드",
            url: "https://www.nordicnest.kr/inspiration-tips/trends-and-styles/scandinvian-interior-design-trends-2026/",
          },
          {
            label: "Oppolia Home — 2026 인테리어 디자인 트렌드",
            url: "https://www.oppoliahome.com/ko/2026%EB%85%84-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8A%B8%EB%A0%8C%EB%93%9C/",
          },
          {
            label: "StoneBC — 2026 인테리어 트렌드",
            url: "https://stonebc.com/archives/46776",
          },
        ],
      },
    ],
  },
  {
    title: "타겟 세그먼트 5종",
    subtitle: "디자인 차별화가 먹히는 고객 세그먼트와 Phase별 진입 순서",
    cards: [
      {
        title: "🥇 신혼 2030 — Phase 1 최우선",
        tag: "우선순위 1",
        summary: [
          "디자인 민감도: ⭐⭐⭐⭐⭐ (최상)",
          "예산: 혼수 가구 600~1,500만원 중 식탁 30~100만원+",
          "평생 첫 가구 = '평생 쓸' 감정 투자 수용, 인스타·집들이 과시 수요.",
          "'원스톱 디자인 조율'이 가장 강력하게 먹히는 유형.",
        ],
        sources: [
          {
            label: "공여사들 — 혼수 가구 리스트·비용 2026",
            url: "https://gongysd.com/wedding-notion/?bmode=view&idx=166744001",
          },
          { label: "다이렉트결혼준비 — 신혼가구 식탁편", url: "https://www.directwedding.co.kr/blog/sinhon-tabel" },
        ],
      },
      {
        title: "🥈 1인 가구 25~34세 — Phase 1~2 병행",
        tag: "우선순위 2",
        summary: [
          "규모: 800만 가구 (전체 36.1%), 트렌드코리아 '1.5가구' 키워드",
          "예산: 원형 1000mm 15~40만원 주력",
          "가치소비·프리미엄 하이엔드 수용, '내 집 자랑' 욕구 강함.",
          "원형 1000mm + 곡선 싱글 다리 제품이 즉시 차별화 가능.",
        ],
        sources: [
          { label: "KB — 2024 한국 1인가구 보고서", url: "https://www.kbfg.com/kbresearch/report/reportView.do?reportId=2000512" },
          { label: "CEO매거진 — 1인 가구 800만 시대", url: "https://www.ceomagazine.co.kr/ko-kr/articles/34470" },
          {
            label: "베이비뉴스 — 1인가구 인테리어 주목",
            url: "https://www.ibabynews.com/news/articleView.html?idxno=131017",
          },
        ],
      },
      {
        title: "🥉 리모델링 4050 — Phase 2~3 숨겨진 경쟁 우위",
        tag: "우선순위 3",
        summary: [
          "규모: 2026 리모델링·홈퍼니싱 54조원 시장",
          "예산: 40평 올수리 4,500~7,000만원 + 가구 수백만~수천만원",
          "아일랜드 철거 → 페닌슐라 + 다이닝 테이블 트렌드 파생 수요.",
          "인테리어 디자이너 B2B 협업 = 기존 철거업 네트워크 활용 가능한 숨겨진 우위.",
        ],
        sources: [
          {
            label: "한국건설산업연구원 — 리모델링 시장 전망",
            url: "http://www.conslove.co.kr/news/articleView.html?idxno=65857",
          },
          { label: "레이디경향 — 페닌슐라 주방 트렌드", url: "https://lady.khan.co.kr/living/article/202602231636001" },
        ],
      },
      {
        title: "카페·상업공간 B2B — Phase 2 진입",
        tag: "우선순위 4",
        summary: [
          "규모: 전국 카페 93,000개 (2024), 2021→2024 +12% 증가",
          "창업자 연령: 30~50대 71.4%, 맞춤 상담 지불 의지 높음.",
          "인테리어가 매출 결정 요인 → '사진 잘 나오는' 가구 수요.",
          "같은 디자인 5~20개 대량 주문 → 안정적 매출원.",
        ],
        sources: [
          { label: "소상공인 컨설팅 — 2025 카페 창업 시장 현황", url: "https://gyver.co.kr/cafe-startup-market-analysis/" },
          { label: "사이더랩 — 2025 카페 창업 비용 가이드", url: "https://siderlab.kr/blog/0034-cafe-startup-complete-guide/" },
        ],
      },
      {
        title: "아이디어스 감성층 — Phase 3~4 입점",
        tag: "우선순위 5",
        summary: [
          "핸드메이드·수공예 전문 플랫폼, 감성·개성·한정 가치",
          "'15년 금속 장인 + 디자인 감각' 인물 브랜딩이 가장 강력하게 매칭.",
          "필코노미·근본이즘 키워드와 정면 결합.",
          "같은 상품을 스마트스토어보다 프리미엄 포지셔닝으로 판매 가능.",
        ],
        sources: [
          { label: "아이디어스 — 주문제작가구", url: "https://idus.com/search?word=%EC%A3%BC%EB%AC%B8%EC%A0%9C%EC%9E%91%EA%B0%80%EA%B5%AC" },
          { label: "아이디어스 가구 인기 작품", url: "https://www.idus.com/w/main/popular-category/e866743b-0a33-4030-80c1-3a1ec943b0e4" },
        ],
      },
    ],
  },
  {
    title: "우리 전략 변화",
    subtitle: "VoC·시장 분석 결과를 반영한 포지셔닝·상품·상세페이지 권고",
    cards: [
      {
        title: "포지셔닝 어조 재조정",
        tag: "브랜딩",
        summary: [
          "기존: '15년 금속 장인의 마감 품질' → 수정: '15년 금속 장인의 디자인 조율'",
          "기존: '정밀한 용접과 마감' → 수정: '공간에 맞추는 비례와 조합'",
          "기존: '단단하게 만드는' → 수정: '어울리게 만드는'",
          "'15년 금속 장인' 문구는 유지하되, 강조점을 기술력에서 감각으로 이동.",
        ],
      },
      {
        title: "상품 라인업 재조정 — 우드슬랩 축소, 원형·곡선 신설",
        tag: "상품 전략",
        summary: [
          "⚠️ 우드슬랩 식탁: Phase 1 핵심 상품 → Phase 2~3 선별 수주/외주",
          "🆕 원형 1000mm 식탁 신설: 2026 트렌드 + 국내 공백 선점 (20~40만원대)",
          "🆕 'Curvature' 곡선 철제 다리 서브 컬렉션: 국내 최초 (15~30만원대)",
          "원목+철제 다이닝 (기본형): 최우선 상품 — '원스톱 조율' 증명 핵심",
        ],
      },
      {
        title: "상세페이지 설계 원칙 변경",
        tag: "상세페이지",
        summary: [
          "히어로 컷: 쇼룸 배경 → '실제 집 공간 3곳 배치 비교'",
          "'이 가격의 이유' 섹션 — 트렌드코리아 '프라이스 디코딩' 부합",
          "'이런 걱정 있으신가요?' FAQ — 공간 지배·관리 스트레스·톤 매칭 선제 해소",
          "'5년 뒤 이 가구' 에이징 스토리 (1주/6개월/1년 비교)",
          "인물 섹션: '15년 금속 장인'에서 '디자인 이야기'로 확장",
        ],
      },
      {
        title: "상담 프로세스 제도화",
        tag: "운영",
        summary: [
          "1. 고객 공간 사진 요청 (거실/식탁 위치)",
          "2. 층고·창 위치·바닥·벽 톤 확인",
          "3. 비례 제안 (상판 두께·길이·다리 높이·각도)",
          "4. 소재 조합 샘플 이미지 3~5개 제시",
          "5. 간이 3D 목업 (포토샵 합성 가능)",
          "6. 견적서 송부 — 이 프로세스 자체가 구매 후회 예방 장치이자 차별화.",
        ],
      },
    ],
  },
];
