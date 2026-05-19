export interface SourceLink {
  label: string;
  url: string;
}

export interface ResearchHighlight {
  title: string;
  body: string;
}

export interface ShippingPriorityItem {
  rank: number;
  title: string;
  shippingModel: string;
  assembly: string;
  reason: string;
  caution: string;
}

export interface ResearchTable {
  columns: string[];
  rows: string[][];
}

export interface ResearchChecklistGroup {
  title: string;
  items: string[];
}

export interface ResearchTopicSection {
  title: string;
  intro?: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: ResearchTable;
  checklistGroups?: ResearchChecklistGroup[];
}

export interface ResearchTopic {
  slug: string;
  eyebrow: string;
  question: string;
  title: string;
  summary: string;
  excerpt: string;
  readingTime: string;
  stats: string[];
  keyTakeaways: string[];
  sections: ResearchTopicSection[];
  sources: SourceLink[];
}

export const researchDashboardMeta = {
  title: "맞춤가구 사업 리서치 대시보드",
  updatedAt: "2026-05-15",
  sourceDocument: "인테리어 트렌드 + 네이밍/사업준비 리서치",
  oneLineConclusion:
    "2026 공간 트렌드와 배송 가능한 첫 라인업을 기준으로 잡되, 사업 시작 전에는 상호명·스토어명·브랜드명 구조와 사업자등록·통신판매업 신고 순서를 먼저 정리해야 합니다.",
  operatingModel:
    "초기 운영은 상호명=스토어명=브랜드명 단일 구조를 기본으로 검토하고, 첫 상품은 일반 택배 + 고객 직접 조립 모델에서 시작하는 편이 가장 현실적입니다.",
};

export const researchDashboardHighlights: ResearchHighlight[] = [
  {
    title: "트렌드 방향",
    body:
      "차가운 블랙/골드 미니멀보다 웜 뉴트럴, 짙은 우드, 곡선, 무광 질감, 홈카페형 다이닝이 2026의 중심입니다.",
  },
  {
    title: "운영 병목",
    body:
      "일반 택배는 세 변 합 160cm, 최장변 100cm, 20kg 안팎이 사실상 첫 라인업 상한이라 제품 구조부터 다시 봐야 합니다.",
  },
  {
    title: "첫 판매 전략",
    body:
      "거울·테이블 같은 히어로 제품은 촬영용으로 유지하되, 실제 첫 매출은 트레이·북엔드·플랜트 스탠드·분해형 사이드테이블이 더 안전합니다.",
  },
  {
    title: "네이밍·행정 준비",
    body:
      "현재 후보는 반듯제작소, 손길제작소, 온집제작소입니다. 소규모 제작소 초반에는 상호명·스토어명·브랜드명을 분리하기보다 하나로 통일하는 쪽이 운영과 신뢰 모두에 유리합니다.",
  },
];

export const shippingPriorityItems: ShippingPriorityItem[] = [
  {
    rank: 1,
    title: "디테일 강조형 월넛/오크 트레이",
    shippingModel: "일반 택배",
    assembly: "조립 없음",
    reason:
      "포장과 반품이 가장 쉽고 홈카페 수요와 바로 연결됩니다. 첫 포장 프로세스를 익히는 테스트 상품으로도 좋습니다.",
    caution:
      "그냥 쟁반으로 가면 가격 경쟁에 묻히므로 곡선 손잡이, 브론즈 포인트, 적층 디테일이 필요합니다.",
  },
  {
    rank: 2,
    title: "곡선 북엔드 / 매거진랙",
    shippingModel: "일반 택배",
    assembly: "조립 없음 또는 1단 결합",
    reason:
      "크기가 작아 박스 규격 관리가 쉽고, 사진발과 차별화가 모두 살아 있습니다.",
    caution:
      "과한 조형으로 가면 수납 기능이 약해질 수 있어 실사용 안정성을 먼저 확인해야 합니다.",
  },
  {
    rank: 3,
    title: "분해형 플랜트 스탠드 / 플랜트 라이저",
    shippingModel: "일반 택배",
    assembly: "볼트 체결 5분 내외",
    reason:
      "플랜테리어 흐름과 맞고, 분해형 구조로 설계하면 택배와 고객 조립 모두 무난합니다.",
    caution:
      "하중과 흔들림 테스트를 반드시 해봐야 하며, 화분 지름별 호환 규격을 미리 정해야 합니다.",
  },
  {
    rank: 4,
    title: "분해형 C형 사이드테이블",
    shippingModel: "일반 택배",
    assembly: "상판 + 프레임 결합",
    reason:
      "소형 가구이면서 사용 장면이 선명하고, 프레임과 상판을 분리하면 택배 규격에 맞추기 좋습니다.",
    caution:
      "상판 흔들림과 모서리 파손 방지 설계가 필요합니다.",
  },
  {
    rank: 5,
    title: "소형 브라켓형 / 탁상형 선반",
    shippingModel: "일반 택배",
    assembly: "벽 설치형 또는 거치형 선택",
    reason:
      "곡선 선반의 디자인 언어는 살리되, 무지주 고정 리스크를 줄인 구조로 시작할 수 있습니다.",
    caution:
      "벽 타공이 필요한 모델은 설치 책임이 커지므로 탁상형 또는 짧은 브라켓형부터 검증하는 편이 낫습니다.",
  },
];

export const researchTopics: ResearchTopic[] = [
  {
    slug: "trend-direction",
    eyebrow: "01 / Trend direction",
    question: "2026 공간 무드는 어디로 이동하는가",
    title: "트렌드 방향 재정의",
    summary: "블랙/골드 미니멀 중심 가설을 웜 뉴트럴·짙은 우드·곡선·무광 기준으로 다시 정리한 글",
    excerpt:
      "초기 취향은 출발점으로만 두고, 글로벌 트렌드와 국내 노출 신호를 함께 읽어 2026의 중심 무드를 다시 판정했습니다.",
    readingTime: "5분",
    stats: ["기존 가정 6개 재판정", "핵심 컨셉 6개", "메인 팔레트 수정"],
    keyTakeaways: [
      "웜 뉴트럴 + 짙은 우드 + 곡선 + 무광이 메인입니다.",
      "블랙/골드는 메인이 아니라 브론즈·무광 골드 포인트로 내리는 편이 안전합니다.",
      "테이블 단독보다 여러 소형 아이템을 한 공간 톤으로 묶어 제안해야 설득력이 커집니다.",
    ],
    sections: [
      {
        title: "핵심 방향 요약",
        paragraphs: [
          "2026 인테리어는 차가운 하이컨트라스트 미니멀에서 한 단계 물러나, 따뜻한 중성톤과 짙은 우드, 생활감 있는 무광 질감, 곡선 실루엣으로 무게 중심이 이동했습니다.",
          "기존 프로젝트의 얇은 비례와 원목+철제 조합 감각은 여전히 유효합니다. 다만 차갑고 강한 대비보다 부드러운 재료 밸런스와 공간 전체의 조율감이 더 중요해졌습니다.",
        ],
        bullets: [
          "메인 무드: 웜 뉴트럴, 월넛/브라운, 곡선, 무광",
          "보조 포인트: 차콜, 브론즈, 브러시드 골드",
          "공간 연출: 홈카페형 다이닝, 플랜테리어, 조용한 고급감",
        ],
      },
      {
        title: "기존 가정 재판정",
        table: {
          columns: ["항목", "판정", "이유"],
          rows: [
            ["얇은 비례, 날렵한 라인", "유지", "곡선·라운드·가벼운 비례가 글로벌/국내 자료에서 반복됩니다."],
            ["무광 질감 선호", "유지", "무광, 자연 질감, 생활감 있는 마감이 2026 핵심 무드와 일치합니다."],
            ["블랙/골드 조합", "수정", "완전 폐기보다 브론즈·무광 골드 포인트로 낮추는 편이 더 자연스럽습니다."],
            ["원목+철제 혼합 소재", "유지", "우드와 메탈 조합은 유효하지만 산업풍보다 부드러운 밸런스가 중요합니다."],
            ["대형 우드슬랩을 첫 주력으로", "폐기", "트렌드 신호와 제작·배송 리스크를 같이 보면 첫 샘플로 비효율적입니다."],
            ["테이블만 먼저 가는 전략", "수정", "소품·중소형 가구와 함께 공간 단위로 제안해야 브랜드 감각이 더 잘 보입니다."],
          ],
        },
      },
      {
        title: "2026 컨셉 지도",
        table: {
          columns: ["컨셉", "핵심 신호", "잘 맞는 제품"],
          rows: [
            ["소프트 미니멀", "따뜻한 절제미, 큰 러그, 낮은 가구, 여백 있는 배치", "벽선반, 트레이, 간접조명, 사이드테이블"],
            ["뉴트로 우드", "밝은 오크 일변도에서 짙은 브라운/월넛 복귀", "콘솔, 벤치, 프레임 거울, 테이블"],
            ["곡선/튜브 플레이", "아치 거울, 라운드 가구, 튜브 실루엣 반복", "곡선 선반, 버섯 조명, 원형 테이블"],
            ["조용한 고급감", "유광 과시보다 촉감·광량·마감", "테이블 램프, 브론즈 포인트 거울, 콘솔"],
            ["홈카페/캐주얼 다이닝", "round table, nook, portable light, tray 수요", "원형 800 테이블, 트레이, 무드등"],
            ["바이오필릭 레이어링", "식물+선반+조명 조합", "플랜트 스탠드, 화분 받침, 선반"],
          ],
        },
      },
    ],
    sources: [
      { label: "오늘의집 2026 거실 트렌드", url: "https://ohou.se/advices/12448" },
      { label: "Vogue Korea 2026 인테리어 트렌드", url: "https://www.vogue.co.kr/2026/01/10/2026%EB%85%84-%ED%95%B5%EC%8B%AC-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8A%B8%EB%A0%8C%EB%93%9C-11" },
      { label: "NordicNest 2026 트렌드", url: "https://www.nordicnest.kr/inspiration-tips/trends-and-styles/scandinvian-interior-design-trends-2026/" },
      { label: "LX Z:IN 근본이즘", url: "https://www.lxzin.com/styling/style-trend/detail/8180" },
      { label: "Homes & Gardens 2026 Dining Room Trends", url: "https://www.homesandgardens.com/interior-design/dining-room-trends-2026" },
      { label: "Bontempi 2026 materials/colors/shapes", url: "https://www.bontempi.it/en/2026-interior-design-trends-materials-colors-and-shapes-to-know/" },
    ],
  },
  {
    slug: "market-signals",
    eyebrow: "02 / Market signal",
    question: "국내 채널에서 실제로 읽히는 형태는 무엇인가",
    title: "국내 시장성 신호",
    summary: "오늘의집 검색·리뷰·반복 노출 기준으로 어떤 카테고리가 이미 대중 언어가 되었는지 정리한 글",
    excerpt:
      "판매량 데이터는 아니지만, 사용자가 실제로 무엇을 반복적으로 찾고 어떤 형태가 익숙해졌는지 보기에는 검색 결과와 리뷰 수가 충분히 강한 신호입니다.",
    readingTime: "4분",
    stats: ["오늘의집 신호 6개", "대중 시장 3개", "틈새 공백 2개"],
    keyTakeaways: [
      "원형 식탁, 아치 거울, 버섯 조명은 이미 대중 언어입니다.",
      "곡선 선반은 메인 시장보다 공급 공백이 보이는 차별화 카테고리입니다.",
      "트레이는 수요가 확실하지만 레드오션이라 디테일이 핵심입니다.",
    ],
    sections: [
      {
        title: "신호를 읽는 기준",
        paragraphs: [
          "이번 판단은 판매량 그 자체보다, 검색 결과 수와 리뷰가 붙은 대표 상품 수, 그리고 동일한 형태가 반복 노출되는지에 더 무게를 뒀습니다.",
          "즉, 고객이 이미 머릿속에 어떤 제품 언어를 갖고 있는지 파악하고, 그 안에서 대중형과 틈새형을 나누는 접근입니다.",
        ],
      },
      {
        title: "오늘의집 기준 국내 신호",
        table: {
          columns: ["항목", "오늘의집 신호", "해석", "시사점"],
          rows: [
            ["원형 식탁", "검색 212,494 / 쇼핑 18,681 / 대표 리뷰 13,005·4,677·4,065개", "800~1000mm 홈카페·2~4인 구간이 이미 메인 시장입니다.", "테이블 카테고리는 직사각보다 원형 800~1000이 더 현재적입니다."],
            ["아치 거울", "검색 26,014 / 쇼핑 795 / 대표 리뷰 11,922·7,105·1,885개", "아치형은 이미 익숙한 대중 취향이 되었습니다.", "시장 반응은 강하지만 대형 벽거울은 배송 리스크를 함께 봐야 합니다."],
            ["버섯 조명", "검색 93,093 / 쇼핑 831 / 대표 리뷰 7,288·3,892·3,116개", "형태성 있는 무드 조명이 잘 먹히고 있습니다.", "전기 인증과 포장만 해결되면 매우 강한 카테고리입니다."],
            ["원목 트레이", "검색 28,387 / 쇼핑 1,664 / 대표 리뷰 2,643·289·104개", "수요는 넓지만 경쟁이 매우 빽빽합니다.", "디테일, 적층, 금속 포인트 없이는 가격 경쟁으로 갑니다."],
            ["곡선 선반", "검색 4,130 / 쇼핑 132 / 다수 상품 리뷰 소수", "아직 메인 시장은 아니지만 공급 공백이 보입니다.", "대중형보다 차별화 라인으로 접근하는 편이 맞습니다."],
            ["골드 조명", "검색 45,512 / 쇼핑 6,837", "골드는 죽지 않았지만 2026에는 무광·브러시드 포인트로 읽는 편이 자연스럽습니다.", "블랙+골드 풀세트보다 웜 우드 + 브론즈 포인트가 안전합니다."],
          ],
        },
      },
      {
        title: "시장 해석 체크포인트",
        checklistGroups: [
          {
            title: "대중 시장으로 본 항목",
            items: [
              "원형 식탁",
              "아치 계열 거울",
              "버섯형 조명",
            ],
          },
          {
            title: "차별화 카테고리로 본 항목",
            items: [
              "곡선 선반",
              "곡선 북엔드 / 매거진랙",
              "플랜트 스탠드",
            ],
          },
          {
            title: "레드오션 경계 항목",
            items: [
              "단순 원목 트레이",
              "기능이 약한 장식 소품",
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "오늘의집 검색 — 원형 식탁", url: "https://ohou.se/search/index?query=%EC%9B%90%ED%98%95%20%EC%8B%9D%ED%83%81&search_affect_type=Typing" },
      { label: "오늘의집 검색 — 아치 거울", url: "https://ohou.se/search/index?query=%EC%95%84%EC%B9%98%20%EA%B1%B0%EC%9A%B8&search_affect_type=Typing" },
      { label: "오늘의집 검색 — 버섯 조명", url: "https://ohou.se/search/index?query=%EB%B2%84%EC%84%AF%20%EC%A1%B0%EB%AA%85&search_affect_type=Typing" },
      { label: "오늘의집 검색 — 원목 트레이", url: "https://ohou.se/search/index?query=%EC%9B%90%EB%AA%A9%20%ED%8A%B8%EB%A0%88%EC%9D%B4&search_affect_type=Typing" },
      { label: "오늘의집 검색 — 곡선 선반", url: "https://ohou.se/search/index?query=%EA%B3%A1%EC%84%A0%20%EC%84%A0%EB%B0%98&search_affect_type=Typing" },
      { label: "오늘의집 검색 — 골드 조명", url: "https://ohou.se/search/index?query=%EA%B3%A8%EB%93%9C%20%EC%A1%B0%EB%AA%85&search_affect_type=Typing" },
    ],
  },
  {
    slug: "logistics-strategy",
    eyebrow: "03 / Logistics strategy",
    question: "남양주 제작소 기준으로 무엇이 실제로 배송 가능한가",
    title: "배송·설치 운영 전략",
    summary: "택배 규격, 화물택배 한계, 직접배송·설치 제휴의 현실을 기준으로 첫 상품군의 상한선을 정리한 글",
    excerpt:
      "이번 리서치의 핵심 추가 축은 배송입니다. 1인 소규모 사업에서는 예쁜 제품보다 반복 가능한 포장과 파손·반품 대응이 먼저 성립해야 합니다.",
    readingTime: "6분",
    stats: ["일반 택배 상한 160cm", "배송 모델 4개 비교", "포장 체크리스트 2종"],
    keyTakeaways: [
      "일반 택배 + 고객 직접 조립이 첫 라인업의 기본 모델입니다.",
      "화물택배는 가능하지만 고객 경험과 반품 부담이 커서 2단계 확장용으로 제한해야 합니다.",
      "설치 배송 제휴는 바로 도입할 게 아니라 수도권 테스트 이후 2단계 옵션으로 두는 편이 낫습니다.",
    ],
    sections: [
      {
        title: "왜 배송이 첫 병목인가",
        paragraphs: [
          "대형 식탁과 벽거울은 트렌드 상 매력적이지만, 남양주 제작소에서 1인 체제로 시작한다면 배송이 바로 병목이 됩니다. 직접 배송은 건당 시간이 많이 들고, 일반 택배는 규격 제한이 엄격하며, 화물택배는 고객 경험과 반품 리스크가 무거워집니다.",
          "즉 첫 상품은 만들 수 있는지보다, 같은 품질로 포장해 반복 발송할 수 있는지부터 봐야 합니다. 이 기준에서 제품 구조와 우선순위가 많이 바뀝니다.",
        ],
      },
      {
        title: "공식 규격과 실무 해석",
        table: {
          columns: ["출처", "기준", "실무 해석"],
          rows: [
            ["찾기쉬운 생활법령정보", "세 변 합 160cm 초과, 최장변 100cm 초과, 택배사 상한 중량 초과 시 수탁 거절 가능", "원형 800~1000 테이블, 대형 벽거울은 일반 택배 기본 모델에서 빠집니다."],
            ["우체국 소포", "30kg 이하, 세 변 합 160cm 이하 구간만 요금표 제공", "작은 소품·분해형 중소형 가구까지만 안정적으로 다룰 수 있습니다."],
            ["CJ대한통운", "최장변 100cm 이내, 세 변 합 160cm 이하, 20kg 이하 구간 운영", "박스 외경과 무게를 설계 단계에서 먼저 잡아야 합니다."],
            ["롯데택배 FAQ", "세 변 합 160cm 이하, 최장변 120cm 이하, 20kg 이하. 유리 제품은 접수 어려움", "아치 벽거울은 크기뿐 아니라 유리 파손 리스크 때문에 첫 주력으로 부적합합니다."],
            ["경동택배", "부피 구간별 표준운임 운영", "일반 택배를 넘는 제품은 가능하지만 비용과 반품 부담이 빠르게 커집니다."],
          ],
        },
      },
      {
        title: "배송 모델 비교",
        table: {
          columns: ["모델", "장점", "리스크", "추천 용도"],
          rows: [
            ["일반 택배 + 고객 직접 조립", "가장 확장성이 높고 전국 운영이 쉽습니다.", "조립 난이도와 포장 완성도가 곧 CS가 됩니다.", "첫 라인업 기본 모델"],
            ["화물택배 + 고객 직접 조립", "큰 제품도 보낼 수 있습니다.", "비용, 수령 경험, 반품 부담, 파손 대응이 무거워집니다.", "2단계 확장용"],
            ["직접배송", "설치 품질을 직접 통제할 수 있습니다.", "건당 시간 소모가 커서 1인 운영에서 쉽게 병목이 됩니다.", "수도권 한정 테스트 주문"],
            ["설치 제휴", "고객 경험이 좋고 대형 상품 확장에 유리합니다.", "최소 물량, 수수료, A/S 책임, 파손 책임을 따져야 합니다.", "주문이 붙은 뒤 2단계 도입"],
          ],
        },
      },
      {
        title: "포장·반품 체크리스트",
        checklistGroups: [
          {
            title: "포장 설계 필수 조건",
            items: [
              "목표 박스 외경을 세 변 합 160cm 안쪽으로 먼저 설계할 것",
              "상판, 프레임, 브라켓, 부속 나사를 각각 분리 보호할 것",
              "작은 부품은 라벨된 봉투에 묶고 설명서와 함께 동봉할 것",
              "모서리 보호재, 완충재, 흔들림 방지 패드를 표준화할 것",
              "고객이 반품할 때 다시 넣기 쉬운 박스 구조인지 확인할 것",
            ],
          },
          {
            title: "파손·반품 대응 기준",
            items: [
              "운송장에 물품가액을 기재할 것",
              "수령 후 14일 이내 파손 통지 원칙을 안내할 것",
              "벽 설치형 제품은 설치 책임 범위를 명확히 고지할 것",
              "화물택배 제품은 권역별 추가비와 반품비를 상세페이지에 먼저 적을 것",
            ],
          },
        ],
      },
      {
        title: "설치 제휴는 언제 필요한가",
        bullets: [
          "전국 설치를 기본값으로 열기보다, 수도권 직접배송 테스트에서 설치 동선과 시간을 먼저 측정해야 합니다.",
          "설치 파트너는 견적, 최소 물량, 해피콜 방식, A/S 범위, 파손 책임을 받은 뒤 비교해야 합니다.",
          "대형 아치 거울, 원형 900~1000 테이블, 붙박이성 선반은 제휴 검토 대상이지만 첫 매출용 기본 라인업은 아닙니다.",
        ],
      },
    ],
    sources: [
      { label: "찾기쉬운 생활법령정보 — 택배 수탁 거절", url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=663&ccfNo=2&cciNo=2&cnpClsNo=3" },
      { label: "우체국 소포 요금", url: "https://parcel.epost.go.kr/parcel/use_guide/charge_1.jsp" },
      { label: "CJ대한통운 배송운임검색", url: "https://www.cjlogistics.com/ko/utility/parcel-price" },
      { label: "롯데택배 FAQ", url: "https://www.lotteglogis.com/mobile/customs/faq" },
      { label: "경동택배 표준운임", url: "https://kdexp.com/service/charge/package_standard.do" },
      { label: "하우저 서비스 소개", url: "https://service.howser.co.kr/" },
      { label: "Shopify 가구 배송 가이드", url: "https://www.shopify.com/kr/blog/how-to-ship-furniture" },
      { label: "찾기쉬운 생활법령정보 — 택배 파손 보상", url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=663&ccfNo=3&cciNo=1&cnpClsNo=3" },
    ],
  },
  {
    slug: "buildability",
    eyebrow: "04 / Buildability",
    question: "무엇을 어떤 구조로 바꿔야 실제 판매가 가능한가",
    title: "제작 가능성 재해석",
    summary: "기존 후보를 그대로 만들지 말고, 배송과 고객 설치를 감안해 어떤 구조로 변형해야 하는지 정리한 글",
    excerpt:
      "같은 아이템이라도 구조를 어떻게 잡느냐에 따라 택배 가능 여부와 고객 CS가 크게 달라집니다. 첫 라인업은 디자인보다 구조 전환이 더 중요합니다.",
    readingTime: "5분",
    stats: ["구조 전환안 6개", "고위험 품목 3개", "회의 질문 6개"],
    keyTakeaways: [
      "무지주 벽선반, 대형 아치 거울, 900mm 이상 원형 테이블은 그대로 출시하지 않는 편이 낫습니다.",
      "분해형 프레임, 짧은 모듈, 브라켓형 구조로 바꾸면 같은 디자인 언어를 더 안전하게 검증할 수 있습니다.",
      "아버지와의 다음 회의는 예쁜 디자인보다 포장, 하중, 조립 시간, 보관 공간부터 확인해야 합니다.",
    ],
    sections: [
      {
        title: "제품 구조 전환안",
        table: {
          columns: ["원래 아이템", "바꿔야 할 구조", "고객 설치", "판정"],
          rows: [
            ["아치형 벽거울", "대형 벽걸이보다 탁상형 / 중형 프레임 / 스탠드형으로 시작", "설치 없음 또는 간단 거치", "첫 주력 하향"],
            ["곡선 무지주 벽선반", "무지주 대신 짧은 브라켓형 또는 탁상형 모듈 선반", "드라이버 또는 거치형", "구조 수정 후 유지"],
            ["2단 플랜트 스탠드", "상판과 프레임을 분리한 볼트 조립형", "5분 내 조립 가능", "주력 유지"],
            ["C형 사이드테이블", "상판 + 프레임 분해형, 평판 포장 구조", "간단 체결", "주력 상향"],
            ["버섯형 테이블 램프", "소형 규격 + 전기 파트 조달 + 완충 포장 강화", "조립 적음", "조건부 유지"],
            ["원형 홈카페 식탁 800~1000", "800mm 우선, 상판/다리 분리, 화물 또는 직접배송 전제", "조립 가능하나 무거움", "2단계 확장"],
          ],
        },
      },
      {
        title: "1인 제작소 기준 유지할 원칙",
        bullets: [
          "한 사람이 반복 포장 가능한 구조일 것",
          "고객이 특별 공구 없이 조립할 수 있을 것",
          "파손이 나도 부분 재발송이 가능한 구조일 것",
          "보관 공간을 과도하게 먹지 않을 것",
          "같은 톤으로 세트 촬영이 가능한 제품군일 것",
        ],
      },
      {
        title: "다음 회의에서 반드시 확인할 질문",
        checklistGroups: [
          {
            title: "생산·포장 질문",
            items: [
              "남양주 제작소에서 직접 포장 가능한 최대 박스 크기와 보관 공간은 어느 정도인가?",
              "완성품 배송보다 분해형 설계를 받아들일 수 있는가?",
              "제품 1개당 포장에 쓸 수 있는 시간과 자재비 상한은 얼마인가?",
            ],
          },
          {
            title: "조립·배송 질문",
            items: [
              "고객 직접 조립은 육각렌치 수준까지 가능한가, 드라이버 수준까지 가능한가?",
              "수도권 직접배송을 한다면 월 몇 건까지 가능한가?",
              "파손 시 재제작·수리·환불 중 어떤 원칙을 둘 것인가?",
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "Shopify 가구 배송 가이드", url: "https://www.shopify.com/kr/blog/how-to-ship-furniture" },
      { label: "하우저 서비스 소개", url: "https://service.howser.co.kr/" },
      { label: "찾기쉬운 생활법령정보 — 택배 수탁 거절", url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=663&ccfNo=2&cciNo=2&cnpClsNo=3" },
      { label: "롯데택배 FAQ", url: "https://www.lotteglogis.com/mobile/customs/faq" },
    ],
  },
  {
    slug: "priority-roadmap",
    eyebrow: "05 / Priority roadmap",
    question: "그럼 실제로 무엇부터 만들어야 하는가",
    title: "최종 우선순위 로드맵",
    summary: "트렌드, 시장성, 배송, 제작 가능성을 합쳐 첫 매출용 주력, 2단계 확장, 히어로 제품을 다시 정렬한 글",
    excerpt:
      "이제 기준은 예쁜가가 아니라, 팔릴 가능성이 있고 배송 가능한가입니다. 첫 매출용 제품과 브랜드를 보여주는 히어로 제품을 분리해야 합니다.",
    readingTime: "6분",
    stats: ["1차 주력 5개", "2단계 확장 3개", "히어로/보류 4개"],
    keyTakeaways: [
      "첫 매출 주력은 트레이, 북엔드, 플랜트 스탠드, 분해형 사이드테이블, 소형 선반 쪽입니다.",
      "원형 테이블과 대형 아치 거울은 브랜드를 보여주는 히어로 이미지로는 좋지만, 첫 판매 주력으로는 무겁습니다.",
      "1차 샘플 묶음도 택배형 4개 + 조건부 확장 1개 구조로 바꾸는 편이 더 현실적입니다.",
    ],
    sections: [
      {
        title: "배송 기준 1차 주력 5개",
        table: {
          columns: ["순위", "아이템", "배송 모델", "핵심 이유"],
          rows: [
            ["1", "디테일 강조형 월넛/오크 트레이", "일반 택배", "포장과 반품이 가장 쉽고 홈카페 수요와 바로 연결됩니다."],
            ["2", "곡선 북엔드 / 매거진랙", "일반 택배", "작고 차별화가 쉬우며 사진발이 좋습니다."],
            ["3", "분해형 플랜트 스탠드 / 플랜트 라이저", "일반 택배", "플랜테리어 흐름과 맞고 고객 조립이 비교적 쉽습니다."],
            ["4", "분해형 C형 사이드테이블", "일반 택배", "소형 가구이면서 사용 장면이 선명하고 택배 구조화가 가능합니다."],
            ["5", "소형 브라켓형 / 탁상형 선반", "일반 택배", "곡선 선반의 언어를 유지하면서 설치 리스크를 낮출 수 있습니다."],
          ],
        },
      },
      {
        title: "2단계 확장 후보",
        table: {
          columns: ["아이템", "조건", "비고"],
          rows: [
            ["버섯형 테이블 램프", "전기 인증·조달·완충 포장 기준 확보", "디자인 매력은 높지만 운영 변수가 있습니다."],
            ["원형 홈카페 식탁 800mm", "상판/다리 분리 + 화물 또는 직접배송 안내", "대표 가구로는 좋지만 첫 매출 모델은 아닙니다."],
            ["중형 프레임 거울", "유리 파손 대응 프로세스 확보", "대형 벽거울보다 한 단계 쉬운 확장 모델입니다."],
          ],
        },
      },
      {
        title: "히어로 / 보류 제품",
        table: {
          columns: ["아이템", "왜 보류하는가", "언제 다시 보나"],
          rows: [
            ["대형 아치 벽거울", "유리 파손, 크기, 벽 설치 책임이 큽니다.", "직접배송 또는 설치 제휴가 성립한 뒤"],
            ["원형 900~1000 테이블", "규격과 반품 비용이 무겁습니다.", "화물/직접배송 프로세스가 잡힌 뒤"],
            ["반원 콘솔", "부피와 보관 공간 부담이 큽니다.", "주문제작 흐름이 붙은 뒤"],
            ["붙박이형 대형 수납가구", "시공 프로젝트에 가까워집니다.", "사업이 가구 판매에서 시공으로 확장된 뒤"],
          ],
        },
      },
      {
        title: "택배형 1차 샘플 묶음",
        checklistGroups: [
          {
            title: "추천 조합",
            items: [
              "트레이 1종",
              "곡선 북엔드 또는 매거진랙 1종",
              "플랜트 스탠드 1종",
              "분해형 C형 사이드테이블 1종",
              "소형 선반 1종 또는 조건부로 버섯형 램프 1종",
            ],
          },
          {
            title: "이 조합이 현실적인 이유",
            items: [
              "모두 일반 택배 또는 일반 택배 근접 규격으로 설계할 수 있습니다.",
              "한 공간에 묶어 촬영하면 여전히 브랜드 감각을 보여줄 수 있습니다.",
              "파손이 나도 부분 재발송이나 재포장이 가능한 구조로 설계하기 쉽습니다.",
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "찾기쉬운 생활법령정보 — 택배 수탁 거절", url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=663&ccfNo=2&cciNo=2&cnpClsNo=3" },
      { label: "우체국 소포 요금", url: "https://parcel.epost.go.kr/parcel/use_guide/charge_1.jsp" },
      { label: "경동택배 표준운임", url: "https://kdexp.com/service/charge/package_standard.do" },
      { label: "Shopify 가구 배송 가이드", url: "https://www.shopify.com/kr/blog/how-to-ship-furniture" },
      { label: "오늘의집 검색 — 원형 식탁", url: "https://ohou.se/search/index?query=%EC%9B%90%ED%98%95%20%EC%8B%9D%ED%83%81&search_affect_type=Typing" },
      { label: "오늘의집 검색 — 아치 거울", url: "https://ohou.se/search/index?query=%EC%95%84%EC%B9%98%20%EA%B1%B0%EC%9A%B8&search_affect_type=Typing" },
    ],
  },
  {
    slug: "naming-strategy",
    eyebrow: "06 / Naming strategy",
    question: "소규모 제작소는 상호명·스토어명·브랜드명을 어떻게 가져가야 하는가",
    title: "상호명·스토어명·브랜드명 전략",
    summary:
      "반듯제작소, 손길제작소, 온집제작소 세 후보를 기준으로 네이버 쇼핑 운영 구조와 브랜드 운용 방식을 비교한 글",
    excerpt:
      "지금 단계의 핵심은 예쁜 브랜드 구조를 만드는 것이 아니라, 고객이 한 번에 이해하고 영수증·스토어·상세페이지에서 같은 이름을 반복해 보게 만드는 것입니다.",
    readingTime: "5분",
    stats: ["후보 3개 비교", "운영 구조 3안", "지금 단계 권고 1개"],
    keyTakeaways: [
      "초기 소규모 제작소는 상호명=스토어명=브랜드명을 통일하는 쪽이 운영과 신뢰 모두에 유리합니다.",
      "반듯제작소는 상호명 안전성이 가장 높고, 온집제작소는 스토어·브랜드 감각이 좋으며, 손길제작소는 따뜻하지만 차별성은 약한 편입니다.",
      "이름을 나누는 구조는 제품군과 유입 채널이 충분히 생긴 뒤에 검토해도 늦지 않습니다.",
    ],
    sections: [
      {
        title: "왜 지금은 이름을 나누지 않는 편이 유리한가",
        paragraphs: [
          "상호명은 세금계산서, 현금영수증, 사업자 정보에 노출되고, 스토어명은 네이버 쇼핑과 상세페이지에서 반복 노출됩니다. 브랜드명까지 따로 두면 고객은 같은 제작소를 세 이름으로 기억해야 합니다.",
          "아직 상품군이 많지 않고 대표 제품도 막 정리하는 단계라면, 이름을 나누는 전략보다 한 이름을 반복 노출해 신뢰를 쌓는 전략이 더 효율적입니다. 상담, 톡톡 응대, 배송 안내, 리뷰 축적까지 모두 한 축으로 묶이는 장점이 큽니다.",
        ],
        bullets: [
          "고객이 스토어에서 본 이름과 영수증에 찍히는 이름이 같아 신뢰감이 높아집니다.",
          "상품등록, 상담, 후기 관리에서 이름 설명 비용이 줄어듭니다.",
          "인스타그램, 스마트스토어, 상세페이지, 포장물까지 한 이름으로 맞추기 쉬워집니다.",
        ],
      },
      {
        title: "후보 3개 비교",
        table: {
          columns: ["후보", "상호명 적합도", "스토어 첫인상", "브랜드 확장", "메모"],
          rows: [
            ["반듯제작소", "높음", "단정하고 신뢰감 있음", "무난함", "가장 안전하지만 조금 차갑게 읽힐 수 있어 카피 보완이 필요합니다."],
            ["손길제작소", "중간", "따뜻하고 사람 냄새 남", "약간 약함", "정서는 좋지만 핸드메이드/공예 쪽으로 넓게 읽힐 수 있습니다."],
            ["온집제작소", "중상", "생활감과 인테리어 감각이 바로 옴", "좋음", "브랜드감은 좋지만 반듯보다 법적 상호의 안정감은 약간 덜합니다."],
          ],
        },
      },
      {
        title: "운영 구조 3안",
        table: {
          columns: ["구조", "설명", "장점", "리스크"],
          rows: [
            ["A. 모두 통일", "상호명=스토어명=브랜드명", "가장 단순하고 초반 신뢰 구축에 유리", "브랜드 레이어를 따로 주기 어렵습니다."],
            ["B. 상호명/스토어명 통일 + 브랜드 카피만 분리", "법적·판매 이름은 같고, 부제/카피로 감성 보완", "운영은 단순하고 분위기 조절이 가능", "카피 설계가 약하면 차별성이 약해질 수 있습니다."],
            ["C. 상호명과 스토어명/브랜드명 분리", "법적 이름과 소비자-facing 이름을 다르게 운용", "브랜드감은 좋을 수 있음", "작은 제작소 초반에는 고객 혼선과 관리 복잡도가 큽니다."],
          ],
        },
      },
      {
        title: "지금 시점 권고",
        checklistGroups: [
          {
            title: "우선 권장",
            items: [
              "초기에는 상호명=스토어명=브랜드명을 통일합니다.",
              "스토어 상단 부제와 한 줄 소개로 따뜻함·장인성·공간 조율 메시지를 보완합니다.",
              "최종 확정 전에는 네이버 쇼핑, 인스타그램, 도메인, KIPRIS를 한 번에 점검합니다.",
            ],
          },
          {
            title: "후보별 현재 해석",
            items: [
              "반듯제작소: 가장 현실적인 1안",
              "온집제작소: 브랜드감이 좋아 끝까지 비교할 가치가 큼",
              "손길제작소: 따뜻하지만 차별성 점검이 더 필요함",
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "KIPRIS 특허정보 검색서비스", url: "https://www.kipris.or.kr/" },
      { label: "네이버 스마트스토어센터", url: "https://sell.smartstore.naver.com/" },
      { label: "정부24", url: "https://www.gov.kr/" },
      { label: "홈택스", url: "https://www.hometax.go.kr/" },
    ],
  },
  {
    slug: "business-setup-next-steps",
    eyebrow: "07 / Business setup",
    question: "네이밍을 정한 뒤 어떤 행정·판매 준비를 순서대로 밟아야 하는가",
    title: "네이밍 이후 사업 준비 순서",
    summary:
      "작업장 용도지역 확인부터 사업자등록, 스마트스토어 가입, 통신판매업 신고, 스토어 세팅까지 실제 의존성 순서대로 정리한 글",
    excerpt:
      "상호명만 정해놓고 바로 상품 촬영이나 광고로 가면 중간에 사업자·통신판매업·스토어 개설 단계에서 반드시 막힙니다. 초기 제작소는 행정 순서를 먼저 닫아야 뒤의 실행이 매끄럽습니다.",
    readingTime: "5분",
    stats: ["최우선 블로커 3개", "행정 순서 6단계", "확정 전/후 체크리스트"],
    keyTakeaways: [
      "네이밍 직후 가장 먼저 확인할 것은 작업장 용도지역과 사업자등록 가능 여부입니다.",
      "사업자등록 후 스마트스토어 가입으로 구매안전서비스 확인증을 발급받아야 통신판매업 신고가 가능합니다.",
      "상품·상세페이지 작업은 행정 절차와 병행할 수 있지만, 스토어 오픈은 통신판매업 신고번호가 있어야 마무리됩니다.",
    ],
    sections: [
      {
        title: "왜 네이밍 다음에 바로 행정 순서를 닫아야 하는가",
        paragraphs: [
          "상호명은 사업자등록에 바로 들어가고, 사업자등록증이 있어야 스마트스토어 가입과 통신판매업 신고가 가능합니다. 즉 네이밍은 브랜딩 이슈이면서 동시에 행정 선행 조건입니다.",
          "특히 제작소형 사업은 작업장 주소와 용도지역 이슈가 함께 묶입니다. 주거지역 등 제조가 어려운 주소라면 이후 절차 전체가 멈출 수 있으므로, 이름 확정 직후에 작업장 조건부터 점검하는 편이 안전합니다.",
        ],
      },
      {
        title: "실제 진행 순서",
        table: {
          columns: ["순서", "할 일", "핵심 이유", "끝나야 열리는 다음 단계"],
          rows: [
            ["1", "상호명 최종 확정", "사업자등록 상호와 스토어/브랜드 구조를 정해야 합니다.", "사업자등록"],
            ["2", "작업장 용도지역 확인", "제조 가능 여부가 최우선 블로커입니다.", "사업자등록 가능 여부"],
            ["3", "사업자등록 (제조업 + 전자상거래소매업)", "가구 사업 전용 사업자를 따로 두는 편이 세무와 상호 관리가 깔끔합니다.", "스마트스토어 가입, 통신판매업 준비"],
            ["4", "스마트스토어 가입", "구매안전서비스 확인증을 받아야 통신판매업 신고가 가능합니다.", "통신판매업 신고"],
            ["5", "통신판매업 신고", "온라인 판매 필수 절차이며 신고번호가 있어야 스토어 오픈을 마무리할 수 있습니다.", "스토어 세팅 완료"],
            ["6", "스토어/상품 세팅", "상세페이지, 교환반품 정책, 첫 상품 등록을 진행합니다.", "실판매 시작"],
          ],
        },
      },
      {
        title: "사업자등록과 통신판매업 신고 핵심",
        table: {
          columns: ["항목", "권장안", "메모"],
          rows: [
            ["사업자 형태", "신규 사업자등록 권장", "기존 철거업 사업자에 업종 추가도 가능하지만 세무와 상호 노출이 섞입니다."],
            ["업종코드", "제조업 320999 + 전자상거래 소매업 525101", "주문제작 가구 제조와 스마트스토어 운영을 같이 커버합니다."],
            ["과세 유형", "초기 간이과세자 우선 검토", "연매출 8,000만원 미만 구간에서 부담이 적습니다."],
            ["통신판매업 서류", "사업자등록증 + 구매안전서비스 이용확인증", "스마트스토어 가입 뒤 확인증 발급이 선행됩니다."],
            ["통신판매업 비용/기간", "등록면허세 약 2만~4만원대 + 지방교육세 / 3~5영업일", "지역에 따라 비용 차이가 있습니다."],
          ],
        },
      },
      {
        title: "네이밍 확정 전/후 체크리스트",
        checklistGroups: [
          {
            title: "네이밍 확정 전",
            items: [
              "후보 3~5개에 대해 네이버 쇼핑 중복, 인스타그램 계정명, 도메인, KIPRIS를 확인합니다.",
              "상호명=스토어명=브랜드명으로 갈지, 또는 카피만 분리할지 구조를 정합니다.",
              "세금계산서에 찍혀도 어색하지 않은지 다시 읽어봅니다.",
            ],
          },
          {
            title: "네이밍 확정 직후",
            items: [
              "토지이음 등으로 작업장 용도지역을 확인합니다.",
              "사업자 명의와 과세 유형을 결정합니다.",
              "홈택스에서 사업자등록을 진행하고, 스마트스토어 가입까지 바로 연결합니다.",
            ],
          },
          {
            title: "스토어 오픈 전",
            items: [
              "통신판매업 신고번호를 받아 스토어에 입력합니다.",
              "교환/반품 정책과 주문제작 고지 문구를 준비합니다.",
              "첫 상품 3~5개와 상세페이지, 배송/포장 정책을 정리합니다.",
            ],
          },
        ],
      },
      {
        title: "다음 인터뷰에서 바로 물어볼 질문",
        checklistGroups: [
          {
            title: "행정 결정 질문",
            items: [
              "상호명 최종 1안은 무엇인가?",
              "사업자 명의는 누구로 갈 것인가?",
              "초기 과세 유형은 간이과세자와 일반과세자 중 어느 쪽이 맞는가?",
              "작업장 주소와 용도지역 확인은 끝났는가?",
            ],
          },
          {
            title: "스토어 운영 질문",
            items: [
              "상호명과 스토어명을 동일하게 갈 것인가?",
              "첫 스토어 소개 문구는 어떤 톤으로 잡을 것인가?",
              "첫 상품은 택배형 소품·중소형 가구로 어디까지 좁힐 것인가?",
            ],
          },
        ],
      },
    ],
    sources: [
      { label: "정부24", url: "https://www.gov.kr/" },
      { label: "홈택스", url: "https://www.hometax.go.kr/" },
      { label: "네이버 스마트스토어센터", url: "https://sell.smartstore.naver.com/" },
      { label: "KIPRIS 특허정보 검색서비스", url: "https://www.kipris.or.kr/" },
      { label: "토지이음", url: "https://www.eum.go.kr/" },
    ],
  },
  {
    slug: "meeting-1-action-plan",
    eyebrow: "08 / Meeting action",
    question: "첫 회의에서 무엇을 결정했고 각자 무엇을 해야 하는가",
    title: "1회차 미팅 실행계획",
    summary:
      "반듯제작소 1회차 미팅에서 정한 결정 사항과 김기선·김성찬의 다음 회의 전 할 일을 우선순위와 확인 산출물 기준으로 정리한 글",
    excerpt:
      "회의 내용은 길어도 결국 누가 무엇을 어디까지 가져오느냐로 좁혀집니다. 첫 상품을 간접 조명으로 좁히고, 그 결정을 다음 회의 전에 검증하기 위해 두 사람이 분담할 일을 모았습니다.",
    readingTime: "5분",
    stats: ["회의 결정 7건", "김기선 to-do 7건", "김성찬 to-do 6건"],
    keyTakeaways: [
      "첫 상품은 간접 조명/테이블 램프로 좁히고, 10만원 이하·일반 택배 기준으로 검증합니다.",
      "김기선은 제작·자재·전기·포장 가능 여부를 직접 확인합니다.",
      "김성찬은 시장조사·디자인 시안·사업 준비·가격 모델을 다음 회의 전에 준비합니다.",
    ],
    sections: [
      {
        title: "회의 결정 요약",
        intro:
          "1회차 미팅에서 정한 결정 항목입니다. 변경되면 이 글을 갱신합니다.",
        table: {
          columns: ["항목", "결정", "메모"],
          rows: [
            ["상호명", "반듯 제작소 / 손길 제작소 중 선택", "최종 선택은 김기선이 한다"],
            ["우선 자재", "철재 > 목재 > 유리", "플라스틱은 제외, 유리는 외주 가공 후 단계적으로 학습"],
            ["첫 상품", "간접 조명(테이블 램프)", "사이드 테이블·플랜트 스탠드는 조명 안정화 후 확장"],
            ["가격", "첫 상품 10만원 이하 + 무료배송 노출", "택배비는 가격에 흡수, 마감 정밀도가 단가 인상의 근거"],
            ["배송", "일반 택배 3변합 160cm 이하 우선", "지역 가맹점 기사와 직접 계약, 박스는 공장 무지 박스 5,500원/5개"],
            ["차별화", "AI 배치 시안 + 옵션화(원목 색상·전구 색상·밝기) + 앱 제어 가능성", "다른 제작소가 안 하는 서비스로 구매 결정률을 올린다"],
            ["보류", "테이블·거울·카페 B2B·인더스트리얼 철재 버전", "조명 안정화 이후 재검토"],
          ],
        },
      },
      {
        title: "지금 좁혀둔 첫 상품 가설",
        paragraphs: [
          "간접 조명은 자재비가 작고 배송 부피가 작아 첫 상품으로 검증 비용이 가장 낮습니다. 목재 1.5m × 4cm 한 토막이 5천원대고, 전구·소켓은 1~1.5만원에 수급 가능합니다.",
          "디자인 컨셉은 사각 목재 기둥 안쪽에 줄형 LED를 매입하는 형태이며, 기둥은 모서리 라운드 가공, 받침은 부채꼴, 1m를 넘으면 부채꼴 밑에 철판으로 무게 중심을 잡습니다. 길이 한도는 1m 20cm로 정합니다.",
        ],
        bullets: [
          "옵션: 원목 색상 3~4종(오일스텐 무취 마감)",
          "옵션: 전구 색상 2~3종(주광·전구색 등)",
          "옵션: 밝기 조절(리모컨 또는 인라인 스위치)",
          "중장기 옵션: 핸드폰 앱 제어(블루투스/와이파이)",
        ],
      },
      {
        title: "김기선 to-do",
        intro:
          "다음 회의 전에 김기선이 직접 확인하거나 가져올 항목입니다. 우선순위는 다음 회의의 의사결정을 막는 정도를 기준으로 정렬했습니다.",
        table: {
          columns: ["우선순위", "할 일", "확인 산출물"],
          rows: [
            ["P0", "상호명 후보 중 최종 선택", "최종 상호명 1안"],
            ["P0", "목재 제재소 2~3곳 방문 조사", "종류별 가격·사이즈·샘플 사진(전체샷·디테일샷·재질 클로즈업·치수)"],
            ["P0", "전구·소켓·스마트 연동 가능성 확인", "색상·밝기 옵션, 리모컨/앱 연동 가능 여부, 구매처와 단가"],
            ["P1", "박스 공장 견적 확인", "사이즈별 단가, 최소 주문량, 납기"],
            ["P1", "오일스텐 색상 정리", "3~4가지 색상 후보와 샘플 사진"],
            ["P1", "디자인 특허 침해 여부 확인 방법 조사", "검색 절차·주의 기준 메모"],
            ["P2", "시안 수령 후 샘플 1개 제작", "제작 시간, 공정 문제, 자재 소모량"],
          ],
        },
      },
      {
        title: "김성찬 to-do",
        intro:
          "다음 회의 전에 김성찬이 정리해서 보낼 항목입니다. 디자인·가격·행정 준비가 다음 회의의 결정 안건이 됩니다.",
        table: {
          columns: ["우선순위", "할 일", "확인 산출물"],
          rows: [
            ["P0", "오늘의집 간접 조명 시장 조사", "가격대·리뷰·차별화 포인트·고객 불만 메모"],
            ["P0", "조명 디자인 시안 1종 확정", "정면·측면·대각선 이미지와 치수"],
            ["P0", "스마트 조명 하드웨어 호환성 조사", "블루투스/와이파이/앱 연동 모듈 후보"],
            ["P1", "사업자등록·통신판매업신고·로고 일정 정리", "상호명 확정 후 실행 순서표"],
            ["P1", "택배사 계약 옵션 비교", "로젠/경동 등 지역 가맹점 컨택 후보"],
            ["P1", "무료배송 가격 모델 시뮬레이션", "자재·인건비·수수료·택배비 포함 단가표"],
          ],
        },
      },
      {
        title: "보류 / 다음 논의 예정",
        checklistGroups: [
          {
            title: "조명 안정화 이후 재검토",
            items: [
              "사이드 테이블, 플랜트 스탠드를 2~3번째 카테고리로 확장",
              "카페 B2B 채널, 인더스트리얼 철재 버전을 같은 폼팩터로 자재만 교체해 검토",
            ],
          },
          {
            title: "초기 라인업에서 제외",
            items: [
              "단순 사각 테이블과 원목 슬랩",
              "거울(파손 위험과 초보 단계 부적합)",
            ],
          },
        ],
      },
      {
        title: "다음 회의에서 확인할 질문",
        bullets: [
          "상호명 최종 결정과 사업자등록 시점",
          "샘플 조명의 최종 치수·형태·받침 구조",
          "전구 제어 방식(리모컨/인라인/앱) 최종 선택",
          "박스 규격과 일반 택배 가능 여부",
          "예상 판매가와 무료배송 흡수 후 마진",
        ],
      },
    ],
    sources: [],
  },
];

export const legacyResearchArchive = {
  title: "기존 고객 VoC·세그먼트 아카이브",
  description:
    "초기 인터뷰와 웹 리서치 기반 카드형 아카이브입니다. 새 대시보드는 의사결정용으로, 이 아카이브는 원자료 참고용으로 유지합니다.",
  href: "/#research-legacy",
};

export const interiorResearchSources: SourceLink[] = [
  { label: "오늘의집 2026 거실 트렌드", url: "https://ohou.se/advices/12448" },
  { label: "오늘의집 검색 — 원형 식탁", url: "https://ohou.se/search/index?query=%EC%9B%90%ED%98%95%20%EC%8B%9D%ED%83%81&search_affect_type=Typing" },
  { label: "오늘의집 검색 — 아치 거울", url: "https://ohou.se/search/index?query=%EC%95%84%EC%B9%98%20%EA%B1%B0%EC%9A%B8&search_affect_type=Typing" },
  { label: "오늘의집 검색 — 버섯 조명", url: "https://ohou.se/search/index?query=%EB%B2%84%EC%84%AF%20%EC%A1%B0%EB%AA%85&search_affect_type=Typing" },
  { label: "오늘의집 검색 — 원목 트레이", url: "https://ohou.se/search/index?query=%EC%9B%90%EB%AA%A9%20%ED%8A%B8%EB%A0%88%EC%9D%B4&search_affect_type=Typing" },
  { label: "오늘의집 검색 — 곡선 선반", url: "https://ohou.se/search/index?query=%EA%B3%A1%EC%84%A0%20%EC%84%A0%EB%B0%98&search_affect_type=Typing" },
  { label: "오늘의집 검색 — 골드 조명", url: "https://ohou.se/search/index?query=%EA%B3%A8%EB%93%9C%20%EC%A1%B0%EB%AA%85&search_affect_type=Typing" },
  { label: "Vogue Korea 2026 인테리어 트렌드", url: "https://www.vogue.co.kr/2026/01/10/2026%EB%85%84-%ED%95%B5%EC%8B%AC-%EC%9D%B8%ED%85%8C%EB%A6%AC%EC%96%B4-%EB%94%94%EC%9E%90%EC%9D%B8-%ED%8A%B8%EB%A0%8C%EB%93%9C-11" },
  { label: "NordicNest 2026 트렌드", url: "https://www.nordicnest.kr/inspiration-tips/trends-and-styles/scandinvian-interior-design-trends-2026/" },
  { label: "LX Z:IN 근본이즘", url: "https://www.lxzin.com/styling/style-trend/detail/8180" },
  { label: "Homes & Gardens 2026 Dining Room Trends", url: "https://www.homesandgardens.com/interior-design/dining-room-trends-2026" },
  { label: "Bontempi 2026 materials/colors/shapes", url: "https://www.bontempi.it/en/2026-interior-design-trends-materials-colors-and-shapes-to-know/" },
  { label: "Lifebase 홈카페 인테리어", url: "https://lifebase.kr/blog/0434-homecafe-interior-props-and-layout-tips/" },
  { label: "Grand View Research South Korea Home Furnishing Outlook", url: "https://www.grandviewresearch.com/horizon/outlook/home-furnishing-market/south-korea" },
  { label: "찾기쉬운 생활법령정보 — 택배 수탁 거절", url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=663&ccfNo=2&cciNo=2&cnpClsNo=3" },
  { label: "우체국 소포 요금", url: "https://parcel.epost.go.kr/parcel/use_guide/charge_1.jsp" },
  { label: "CJ대한통운 배송운임검색", url: "https://www.cjlogistics.com/ko/utility/parcel-price" },
  { label: "롯데택배 FAQ", url: "https://www.lotteglogis.com/mobile/customs/faq" },
  { label: "경동택배 표준운임", url: "https://kdexp.com/service/charge/package_standard.do" },
  { label: "하우저 서비스 소개", url: "https://service.howser.co.kr/" },
  { label: "Shopify 가구 배송 가이드", url: "https://www.shopify.com/kr/blog/how-to-ship-furniture" },
  { label: "찾기쉬운 생활법령정보 — 택배 파손 보상", url: "https://easylaw.go.kr/CSP/CnpClsMain.laf?popMenu=ov&csmSeq=663&ccfNo=3&cciNo=1&cnpClsNo=3" },
  { label: "네이버 스마트스토어센터", url: "https://sell.smartstore.naver.com/" },
  { label: "정부24", url: "https://www.gov.kr/" },
  { label: "홈택스", url: "https://www.hometax.go.kr/" },
  { label: "KIPRIS 특허정보 검색서비스", url: "https://www.kipris.or.kr/" },
  { label: "토지이음", url: "https://www.eum.go.kr/" },
];

export function getResearchTopicBySlug(slug: string): ResearchTopic | undefined {
  return researchTopics.find((topic) => topic.slug === slug);
}
