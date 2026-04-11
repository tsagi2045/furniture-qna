export type InputType = "text" | "radio-text" | "checkbox-text";

export interface Link {
  label: string;
  url: string;
}

export interface Question {
  id: string;
  question: string;
  descriptions?: string[];
  type: InputType;
  options?: string[];
  textPlaceholder?: string;
  links?: Link[];
}

export interface Category {
  id: string;
  label: string;
  title: string;
  questions: Question[];
}

export interface Answer {
  radio?: string;
  checkboxes?: string[];
  text?: string;
}

export type Answers = Record<string, Answer>;

export const categories: Category[] = [
  {
    id: "A",
    label: "A",
    title: "작업장 & 법적 준비",
    questions: [
      {
        id: "A1",
        question: "작업장 용도지역 확인이 완료되었나요?",
        descriptions: [
          "주거지역이면 제조 활동 불가 — 전체 일정 지연의 최우선 블로커입니다.",
          "토지이음(eum.go.kr)에서 1분 내 무료 조회 가능합니다.",
        ],
        type: "radio-text",
        options: [
          "예 — 제조 가능 지역 확인 완료",
          "예 — 제조 불가 지역 (이전 필요)",
          "아직 확인 전",
        ],
        textPlaceholder: "확인한 용도지역 또는 특이사항을 입력해주세요",
        links: [{ label: "토지이음", url: "https://www.eum.go.kr/" }],
      },
      {
        id: "A2",
        question: "작업장 면적은 몇 ㎡입니까?",
        descriptions: [
          "500㎡ 미만이면 공장등록 면제 대상입니다.",
          "500㎡ 이상이면 공장등록 절차가 추가로 필요합니다.",
        ],
        type: "text",
        textPlaceholder: "예: 120㎡",
      },
      {
        id: "A3",
        question: "사업자등록 상태는 어떻게 됩니까?",
        descriptions: [
          "기존 '아재 철거'는 세금계산서 노출 문제로 가구 사업에 부적합합니다.",
          "제조업(320999) + 전자상거래소매업(525101) 동시 등록이 권장됩니다.",
        ],
        type: "radio-text",
        options: [
          "신규 등록 예정",
          "기존 사업자에 업종 추가 예정",
          "이미 등록 완료",
        ],
        textPlaceholder: "등록 예정일 또는 완료일을 입력해주세요",
      },
      {
        id: "A4",
        question: "초기 과세 유형은 무엇으로 하시겠습니까?",
        descriptions: [
          "초기에는 간이과세자가 세 부담이 적어 일반적으로 권장됩니다.",
          "매입세액 공제가 많이 필요하면 일반과세자가 유리할 수 있습니다.",
        ],
        type: "radio-text",
        options: ["간이과세자", "일반과세자", "아직 결정 전"],
        textPlaceholder: "선택 이유가 있으면 입력해주세요",
      },
      {
        id: "A5",
        question: "통신판매업 신고 예정일은 언제입니까?",
        descriptions: [
          "스마트스토어 '구매안전서비스 확인증' 발급 후 정부24에서 신고합니다.",
          "처리 기간은 약 3~5 영업일이며 비용은 약 5만원입니다.",
        ],
        type: "text",
        textPlaceholder: "예: 사업자등록 완료 후 즉시, 또는 구체 날짜",
      },
    ],
  },
  {
    id: "B",
    label: "B",
    title: "브랜드 & 네이밍",
    questions: [
      {
        id: "B1",
        question: "네이밍 방향을 선택해주세요.",
        descriptions: [
          "경쟁사 '{형용사}+가구' 패턴은 포화 상태입니다.",
          "핵심 메시지 '세상에 하나뿐인 가구'와 '15년 금속 장인' 포지셔닝에 맞는 방향을 고르는 것이 핵심입니다.",
        ],
        type: "checkbox-text",
        options: [
          "소재 강조 (철제+원목 역량 반영)",
          "장인/수작업 (제작자 감성, 공방)",
          "맞춤/유니크 (주문제작 본질)",
          "기타 방향",
        ],
        textPlaceholder: "기타 방향이 있으면 입력해주세요",
      },
      {
        id: "B2",
        question: "브랜드명 후보 3~5개를 적어주세요.",
        descriptions: [
          "2~4음절, 한글/영문 발음이 자연스럽고 전화 상담 시 알아듣기 쉬운 이름이 좋습니다.",
          "필수 체크: 세금계산서 노출 적합성, 네이버 쇼핑 중복 없음, 인스타 계정 확보, 도메인 확보.",
        ],
        type: "text",
        textPlaceholder: "예: 후보1, 후보2, 후보3...",
      },
      {
        id: "B3",
        question: "후보별 체크 완료 항목을 선택해주세요.",
        descriptions: [
          "4가지 모두 확인한 후보만 최종 선정이 가능합니다.",
        ],
        type: "checkbox-text",
        options: [
          "네이버 쇼핑 중복 확인",
          "인스타그램 계정명 확인",
          "도메인 확인 (가비아)",
          "키프리스 상표 검색 (kipris.or.kr)",
        ],
        textPlaceholder: "후보별 체크 상태를 입력해주세요",
        links: [
          { label: "키프리스", url: "https://www.kipris.or.kr/" },
          { label: "가비아", url: "https://www.gabia.com/" },
        ],
      },
      {
        id: "B4",
        question: "최종 선정 브랜드명과 결정 근거를 적어주세요.",
        type: "text",
        textPlaceholder: "예: 브랜드명 — 선정 이유",
      },
    ],
  },
  {
    id: "C",
    label: "C",
    title: "초기 상품 라인업",
    questions: [
      {
        id: "C1",
        question: "Phase 1에 제작할 상품을 선택해주세요.",
        descriptions: [
          "권장 조합: 바로구매 3개(철제 다리·선반·원목+철제 테이블) + 견적문의 2개(업소용·우드슬랩).",
          "철제 다리는 '리뷰 엔진', 우드슬랩은 '브랜드 빌더' 역할입니다.",
        ],
        type: "checkbox-text",
        options: [
          "철제 테이블 다리 (X형/U형/헤어핀/아치)",
          "철제 월선반/행거",
          "원목+철제 다이닝 테이블 (기본형)",
          "업소용 카페 테이블 세트",
          "우드슬랩 식탁 (완전 맞춤)",
          "기타 상품",
        ],
        textPlaceholder: "기타 상품이 있으면 입력해주세요",
      },
      {
        id: "C2",
        question: "철제 다리 가격대를 얼마로 잡으시겠습니까?",
        descriptions: [
          "권장 가격대는 5~20만원입니다. 진입 장벽이 낮아 리뷰 축적에 유리합니다.",
          "형태(X/U/헤어핀/아치)별 차등 가격도 가능합니다.",
        ],
        type: "text",
        textPlaceholder: "예: 기본 5만원, 아치형 20만원",
      },
      {
        id: "C3",
        question: "바로구매와 견적문의 상품 배분은 어떻게 하시겠습니까?",
        descriptions: [
          "바로구매 상품은 네이버 쇼핑 노출 + 리뷰 축적에 유리합니다.",
          "견적문의 상품은 고마진 + 브랜드 빌딩에 유리합니다.",
        ],
        type: "text",
        textPlaceholder: "예: 바로구매 3개, 견적문의 2개",
      },
      {
        id: "C4",
        question: "Phase 1 샘플 제작 수량은 몇 개입니까?",
        descriptions: [
          "Phase 1 기본 목표는 샘플 가구 5~10개 제작입니다.",
          "제작 과정 사진/영상 촬영이 병행되어야 합니다.",
        ],
        type: "text",
        textPlaceholder: "예: 상품별 2개씩 총 10개",
      },
    ],
  },
  {
    id: "D",
    label: "D",
    title: "상세페이지 & 차별화",
    questions: [
      {
        id: "D1",
        question: "차별화 3전략 중 가장 우선 적용할 것은?",
        descriptions: [
          "원스톱 스토리: 경쟁사 대부분 상판/다리 한쪽만 제작, 우리는 양쪽 동시 제작이 최대 차별점.",
          "금속 장인: 15년 금속 가공 기술력 강조, 프로세스 이코노미 콘텐츠 기반.",
          "소비자 우선순위 역순: 사이즈/소재/마감 등 불안 요소 선제 해소.",
        ],
        type: "checkbox-text",
        options: [
          "원스톱 스토리 (상판+다리 동시 제작 과정)",
          "금속 장인 포지셔닝 (15년 기술력 강조)",
          "소비자 우선순위 역순 공략 (불안 선제 해소)",
        ],
        textPlaceholder: "우선순위 이유가 있으면 입력해주세요",
      },
      {
        id: "D2",
        question: "'철거' 경력 노출 방침은 어떻게 하시겠습니까?",
        descriptions: [
          "최근 브랜딩 방향 수정: 철거 스토리 대신 '15년 금속 장인' 포지셔닝으로 확정됨.",
          "철거 언급 시 가구 사업의 고급감/신뢰도가 약화될 수 있습니다.",
        ],
        type: "radio-text",
        options: [
          "미포함 (금속 가공 기술력만 강조)",
          "제한적 언급 (경력의 한 줄 정도만)",
          "적극 포함 (철거 서사를 브랜딩에 활용)",
        ],
        textPlaceholder: "방침의 이유를 적어주세요",
      },
      {
        id: "D3",
        question: "촬영 1회로 3채널(상세페이지·인스타·블로그) 생산 계획이 있나요?",
        descriptions: [
          "타임랩스→릴스→GIF, 소재 클로즈업→피드→비교표 등 재가공 전략.",
          "촬영 효율화 없이는 콘텐츠 볼륨 확보가 어렵습니다.",
        ],
        type: "radio-text",
        options: ["예 — 계획 수립 완료", "아이디어 있음 — 구체화 필요", "아직 미정"],
        textPlaceholder: "추가 설명이 있으면 입력해주세요",
      },
      {
        id: "D4",
        question: "우드슬랩 풀다큐 촬영은 어떻게 진행하시겠습니까?",
        descriptions: [
          "우드슬랩은 '브랜드 빌더' 역할 — 10단계 제작 다큐가 핵심 자산이 됩니다.",
          "히어로 이미지, 만든 사람 섹션, 수종 비교, 실측 사진까지 필요합니다.",
        ],
        type: "radio-text",
        options: [
          "직접 촬영 (스마트폰/DSLR 보유)",
          "장비 추가 필요 (조명/삼각대 등)",
          "외주 촬영 (전문 스튜디오)",
        ],
        textPlaceholder: "예산/일정 고려사항이 있으면 입력해주세요",
      },
    ],
  },
  {
    id: "E",
    label: "E",
    title: "교환/반품 정책",
    questions: [
      {
        id: "E1",
        question: "바로구매 상품 단순변심 반품 기간은?",
        descriptions: [
          "법정 기준은 수령일로부터 7일입니다.",
          "바로구매(옵션 선택)는 '주문제작'으로 인정 안 됨 — 반품 거부 불가.",
          "배송비는 고객 부담 조건으로 설정 권장.",
        ],
        type: "text",
        textPlaceholder: "예: 수령 후 7일 이내, 배송비 고객 부담",
      },
      {
        id: "E2",
        question: "견적문의 상품 청약철회 제한 시점은?",
        descriptions: [
          "제작 착수 전까지는 법적으로 철회 가능 — 착수 시점을 명확히 정의해야 합니다.",
          "사전 서면 동의(체크박스) 없이는 반품 거부 불가(전자상거래법 제17조).",
        ],
        type: "text",
        textPlaceholder: "예: 결제 후 24시간 이내 전액 환불, 이후 제작 착수 시 제한",
      },
      {
        id: "E3",
        question: "정책 고지는 어느 채널에 게시하시겠습니까?",
        descriptions: [
          "3곳 모두 고지 + 결제 전 동의 체크박스가 법적 안전장치의 핵심입니다.",
          "한 곳이라도 누락되면 반품 거부 효력이 없습니다.",
        ],
        type: "checkbox-text",
        options: [
          "상세페이지 (교환/반품 섹션)",
          "결제 전 동의 체크박스 (스마트스토어 주문제작상품 기능)",
          "견적서 안내사항",
        ],
        textPlaceholder: "추가 고지 위치가 있으면 입력해주세요",
      },
    ],
  },
];

export const totalQuestions = categories.reduce(
  (sum, cat) => sum + cat.questions.length,
  0
);
