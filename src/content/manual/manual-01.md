---
title: 부엉이 ATS 사용자 설명서 - 1장 시작하기 전에
---

# 1. 시작하기 전에

## 1.1 이 문서에 대하여

이 문서는 **부엉이 주식자동매매 프로그램 (부엉이 ATS)**의 공식 사용자 설명서입니다. 초보 사용자부터 숙련된 사용자까지 프로그램의 모든 기능을 올바르게 활용할 수 있도록 가이드합니다.

### 이 문서가 다루는 내용

설명서는 사용자의 원활한 프로그램 운용을 위해 다음 내용을 중심으로 구성되어 있습니다

이 문서가 다루는 내용

이 문서는 다음 내용을 중심으로 구성되어 있습니다.

<table><tbody><tr><td><p>구분</p></td><td><p>내용</p></td></tr><tr><td><p><strong>설치 및 초기 설정</strong></p></td><td><p>프로그램 설치 방법과 처음 사용하기 위한 필수 설정</p></td></tr><tr><td><p><strong>화면(UI) 조작 방법</strong></p></td><td><p>각 화면의 구성 요소와 조작 순서</p></td></tr><tr><td><p><strong>기능 활용 방법</strong></p></td><td><p>자동 매매 전략 설정, AI 뉴스 분석, 스케줄러 등 주요 기능 사용법</p></td></tr><tr><td><p><strong>결과물 확인 방법</strong></p></td><td><p>매매 체결 결과, 수익률, 계좌 잔고, 로그 등 확인 방법</p></td></tr><tr><td><p><strong>오류 해결 및 FAQ</strong></p></td><td><p>자주 발생하는 문제와 해결 방법</p></td></tr></tbody></table>

### 적용 버전

이 문서는 아래 버전을 기준으로 작성되었습니다.

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>프로그램명</strong></p></td><td><p>부엉이 주식자동매매 프로그램 (부엉이 ATS )</p></td></tr><tr><td><p><strong>문서 적용 버전</strong></p></td><td><p>V1.0</p></td></tr><tr><td><p><strong>운영체제</strong></p></td><td><p>Windows 10 이상 (64비트)</p></td></tr><tr><td><p><strong>필수 연동 서비스</strong></p></td><td><p>키움증권 REST API</p></td></tr></tbody></table>

⚠️ **주의:** 이후 버전에서는 화면 구성이나 기능이 일부 변경될 수 있습니다.  
사용 중인 프로그램 버전과 이 문서의 적용 버전이 다를 경우, 메뉴 **[도움말 → 프로그램 정보]** 에서 현재 버전을 확인하신 후 해당 버전의 최신 문서를 참고하시기 바랍니다.

### 표기 약속

이 문서에서 사용하는 표기 방식은 다음과 같습니다.

<table><tbody><tr><td><p>표기</p></td><td><p>의미</p></td></tr><tr><td><p><strong>[버튼명]</strong></p></td><td><p>화면에서 클릭하는 버튼을 나타냅니다. 예: <strong>[조회]</strong>, <strong>[저장]</strong></p></td></tr><tr><td><p><strong>[메뉴명 → 항목]</strong></p></td><td><p>메뉴 이동 경로를 나타냅니다. 예: <strong>[설정 → 일반 설정]</strong></p></td></tr><tr><td><p><strong>고정폭 텍스트</strong></p></td><td><p>설정 파일의 항목명, 입력값 예시를 나타냅니다. 예: Microsoft.CodeAnalysis.Workspaces.MSBuild.BuildHost.runtimeconfig.json</p></td></tr><tr><td><p>⚠️ <strong>주의</strong></p></td><td><p>잘못 조작하면 오류가 발생하거나 의도치 않은 주문이 실행될 수 있는 항목입니다.</p></td></tr><tr><td><p>💡 <strong>팁</strong></p></td><td><p>기능을 더 편리하게 활용할 수 있는 추가 정보입니다.</p></td></tr><tr><td><p>📌 <strong>참고</strong></p></td><td><p>이해를 돕기 위한 보충 설명입니다.</p></td></tr></tbody></table>

### 관련 문서 및 참고 자료

이 문서와 함께 참고할 수 있는 자료는 다음과 같습니다.

*   **키움증권 Rest API 공식 문서** : https://apiportal.koreainvestment.com  
    _(키움 REST API 앱키 발급, TR 코드 상세 사양 참고)_
*   **Google Gemini API 공식 문서** : https://ai.google.dev  
    _(AI 뉴스 분석 기능 사용 시 API 키 발급 참고)_

### 문서 개정 이력

<table><tbody><tr><td><p>버전</p></td><td><p>개정일</p></td><td><p>주요 변경 내용</p></td></tr><tr><td><p>V1.0</p></td><td><p>2026년 –</p></td><td><p>최초 작성</p></td></tr></tbody></table>

## 1.2 부엉이 ATS 란?

**부엉이 ATS(Automated Trading System)**는 키움증권 REST API를 기반으로 종목 선정부터 매수·매도 주문 실행까지 전 과정을 자동화하는 **Windows 전용 주식 자동매매 프로그램**입니다. 복잡한 코딩 지식 없이도 사용자가 설정한 전략과 규칙에 따라 프로그램이 실시간으로 시장을 감시하고 대응하도록 설계되었습니다.

### 프로그램 탄생 배경

 **기술적 장벽 완화**: 일반적인 API 연동에 필요한 복잡한 코딩 지식 없이, 조건과 규칙 설정만으로 자동매매가 가능하도록 구현되었습니다.

 **이름의 유래**: 밤낮없이 시장을 감시하며 기회를 포착하는 부엉이의 특성에서 착안하여 명명되었습니다.

### 지원 증권사 및 필수 조건

부엉이 ATS를 사용하기 위해서는 아래의 요건이 반드시 충족되어야 합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>지원 증권사</strong></p></td><td><p>키움증권 (키움 REST API 전용)</p></td></tr><tr><td><p><strong>계좌 유형</strong></p></td><td><p>실계좌 및 모의투자 계좌 모두 지원</p></td></tr><tr><td><p><strong>API 키</strong></p></td><td><p>키움증권 Rest API 앱키(App Key) 및 시크릿키(Secret Key) 필요</p></td></tr><tr><td><p><strong>운영체제</strong></p></td><td><p>Windows 10 이상 (64비트)</p></td></tr><tr><td><p><strong>지원 시장</strong></p></td><td><p>코스피, 코스닥, ETF, ETN</p></td></tr></tbody></table>

⚠️ **주의:** 이 프로그램은 키움증권 계좌와 API 키가 없으면 사용할 수 없습니다.  
API 키 발급은 키움증권 Rest API 포털에서 신청하시기 바랍니다.

### 핵심 기능 요약

#### ① 자동 매매 전략

매매 전략의 핵심은 **"어떤 종목을 언제 사고팔 것인가"** 를 사전에 규칙으로 정의하는 것입니다.  
**종목 선정 방식**: 키움증권 HTS 조건검색식 활용 또는 사용자가 직접 종목을 지정할 수 있습니다.

#### ② 유연한 매수·매도 조건 설정

단순히 종목을 고르는 것을 넘어, **언제 사고 팔 것인지 세밀하게 조건을 설정**할 수 있습니다.

*   **준비 조건** : 매수 대기 상태 진입을 위한 선행 조건 (예: 조건검색식 포착 신호 수신)
*   **실행 조건** : 실제 주문 실행 시점을 결정하는 조건 (예: 체결 강도 기준, 현재가 조건)
*   **매도 조건** : 목표 수익률 도달, 손절 기준, 지정 시간 일괄 매도 등
*   **금액 표현식** : 주문 금액을 수식으로 설정 (예: 보유 현금의 N%, 고정 금액 등)

#### ③ 리스크 관리 기능

자동매매의 가장 큰 위험인 **과도한 손실을 방지**하기 위한 다양한 안전장치가 내장되어 있습니다.

<table><tbody><tr><td><p>리스크 관리 항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>일일 최대 매수 금액 제한</strong></p></td><td><p>하루 동안 매수에 사용할 수 있는 최대 금액 설정</p></td></tr><tr><td><p><strong>동일 종목 일일 최대 매수 횟수</strong></p></td><td><p>같은 종목을 하루에 최대 몇 번까지 살 수 있는지 제한</p></td></tr><tr><td><p><strong>연속 동일 매수 주문 제한</strong></p></td><td><p>같은 조건의 매수 주문이 연속으로 실행되는 것을 방지</p></td></tr><tr><td><p><strong>보유 종목 수 제한</strong></p></td><td><p>동시에 보유할 수 있는 종목 수 상한선 설정</p></td></tr><tr><td><p><strong>당일 동일 종목 재매수 제한</strong></p></td><td><p>당일 이미 거래한 종목의 재매수를 차단</p></td></tr><tr><td><p><strong>거래 제외 종목 기준</strong></p></td><td><p>특정 조건의 종목(예: 관리종목, 거래 정지)을 거래 대상에서 자동 제외</p></td></tr><tr><td><p><strong>지정 시간 일괄 매도</strong></p></td><td><p>장 마감 전 지정된 시각에 보유 종목 전체 자동 매도</p></td></tr></tbody></table>

#### ④ 다양한 주문 유형 지원

**주문 유형**: 지정가, 시장가 및 시간외 단일가 주문을 모두 지원합니다.

#### ⑤ 자동 실행 스케줄러

요일 및 시간대별로 매매 시작/종료를 예약할 수 있으며, 전략별로 독립된 실행 시간대(A/B 구간) 설정이 가능합니다.

⑥ 멀티 앱키 운용

하나의 프로그램에서 **여러 개의 키움 앱키를 동시에 등록하고 운용**할 수 있습니다.  
각 앱키별로 독립적인 매매 전략을 실행할 수 있어 계좌 분리 운용이 가능합니다.

프로그램 동작 흐름 (한눈에 보기)

![](/images/manual/image-2.png)

이 프로그램이 적합한 사용자

✅ 키움증권 조건검색식을 이미 활용하고 있는 사용자  
✅ 자동매매를 시작하고 싶지만 코딩 없이 설정만으로 운용하고 싶은 사용자  
✅ 여러 개의 매매 전략을 동시에 실행하고 결과를 모니터링하고 싶은 사용자  
✅ AI 뉴스 분석을 매매 전략에 접목하고 싶은 사용자

이 프로그램이 적합하지 않은 사용자

❌ 키움증권 계좌가 없거나 API 키를 발급받지 않은 사용자  
❌ 복잡한 초기 설정 없이 바로 사용하고 싶은 사용자  
❌ 삼성증권, 미래에셋 등 타 증권사 계좌 사용자

⚠️ **투자 위험 고지**  
부엉이 ATS 은 매매 실행을 자동화하는 도구이며, **수익을 보장하지 않습니다.**  
설정한 매매 전략과 시장 상황에 따라 손실이 발생할 수 있습니다.  
**모든 투자 결과에 대한 책임은 사용자 본인에게 있습니다.**  
실계좌 사용 전 반드시 **모의투자 계좌로 충분히 테스트**하시기 바랍니다.

## 1.3 주요 기능 한눈에 보기

부엉이 ATS는 실시간 시장 감시부터 복잡한 매매 전략 실행까지, 주식 투자의 전 과정을 사용자 중심의 직관적인 인터페이스로 자동화합니다.

① 대시보드 — 메인 화면에서 한 번에 확인

프로그램을 시작하면 메인 화면에서 아래 정보를 실시간으로 확인할 수 있습니다.

<table><tbody><tr><td><p>대시보드 패널</p></td><td><p>표시 정보</p></td><td><p>참고 챕터</p></td></tr><tr><td><p><strong>계좌 상태</strong></p></td><td><p>예수금, 출금 가능 금액, 연결 계좌 정보</p></td><td></td></tr><tr><td><p><strong>자동 매매 스위치</strong></p></td><td><p>전략별 ON/OFF 상태, 즉시 전환 버튼</p></td><td></td></tr><tr><td><p><strong>주식 잔고</strong></p></td><td><p>보유 종목 목록, 종목별 평가 손익</p></td><td></td></tr><tr><td><p><strong>오늘 매매 현황</strong></p></td><td><p>당일 매수·매도 체결 내역 요약</p></td><td></td></tr><tr><td><p><strong>미체결 주문</strong></p></td><td><p>아직 체결되지 않은 주문 목록</p></td><td></td></tr><tr><td><p><strong>체결 주문</strong></p></td><td><p>당일 체결 완료된 주문 목록</p></td><td></td></tr><tr><td><p><strong>조건검색식 포착 종목</strong></p></td><td><p>실시간 조건검색식에 포착된 종목 목록</p></td><td></td></tr><tr><td><p><strong>업종 지수</strong></p></td><td><p>코스피·코스닥 업종별 지수 실시간 현황</p></td><td></td></tr><tr><td><p><strong>시스템 정보</strong></p></td><td><p>API 연결 상태, CPU·메모리 사용량</p></td><td></td></tr><tr><td><p><strong>로그</strong></p></td><td><p>실시간 프로그램 동작 로그</p></td><td></td></tr></tbody></table>

② 자동 매매 — 핵심 기능

매매 전략 만들기 (3가지 편집기)

<table><tbody><tr><td><p>편집기 유형</p></td><td><p>특징</p></td><td><p>추천 사용자</p></td></tr><tr><td><p><strong>조건검색식 자동매매</strong></p></td><td><p>키움 HTS에서 만든 조건검색식을 그대로 활용</p></td><td><p>키움 조건검색식 사용 경험자</p></td></tr><tr><td><p><strong>사용자 정의 자동매매</strong></p></td><td><p>실시간 순위·호가창·AI 뉴스 등 다양한 조건 조합</p></td><td><p>세밀한 전략 설정을 원하는 사용자</p></td></tr><tr><td><p><strong>맞춤조건 자동매매</strong></p></td><td><p>종목·조건을 직접 지정하여 단순하게 설정</p></td><td><p>별도 제작 사용자</p></td></tr></tbody></table>

전략 구성 요소

<table><tbody><tr><td><p>설정 항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>종목 선정 방식</strong></p></td><td><p>조건검색식 / 직접 지정</p></td></tr><tr><td><p><strong>주문 전략</strong></p></td><td><p>최초 매수 조건, 추가 매수 조건, 매도 조건</p></td></tr><tr><td><p><strong>조건 표현식</strong></p></td><td><p>현재가·체결 강도·수익률 등 수식으로 조건 설정</p></td></tr><tr><td><p><strong>금액 표현식</strong></p></td><td><p>주문 금액을 수식으로 설정 (예: 보유 현금의 20%)</p></td></tr><tr><td><p><strong>매매 시간 설정</strong></p></td><td><p>전략별 매수·매도 허용 시간대 A·B 구간 설정</p></td></tr><tr><td><p><strong>일괄 매도</strong></p></td><td><p>지정 시각에 보유 종목 전량 자동 매도</p></td></tr><tr><td><p><strong>거래 제외 기준</strong></p></td><td><p>관리 종목·거래 정지 등 제외 조건 설정</p></td></tr></tbody></table>

리스크 관리 설정

<table><tbody><tr><td><p>제한 항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>일일 최대 매수 금액</strong></p></td><td><p>하루 동안 매수에 쓸 수 있는 금액 상한선</p></td></tr><tr><td><p><strong>동일 종목 일일 매수 횟수</strong></p></td><td><p>같은 종목 하루 최대 매수 가능 횟수</p></td></tr><tr><td><p><strong>연속 동일 매수 제한</strong></p></td><td><p>동일 조건 매수 주문이 연속으로 쌓이는 것 방지</p></td></tr><tr><td><p><strong>보유 종목 수 제한</strong></p></td><td><p>동시 보유 가능한 최대 종목 수</p></td></tr><tr><td><p><strong>당일 재매수 차단</strong></p></td><td><p>오늘 이미 거래한 종목의 재매수 방지</p></td></tr></tbody></table>

자동 매매 모니터링

<table><tbody><tr><td><p>화면</p></td><td><p>확인 가능 내용</p></td></tr><tr><td><p><strong>자동 매매 현황</strong></p></td><td><p>전략 → 작업 → 명세 → 주문 → 체결 5단계 계층 구조로 상세 현황 확인</p></td></tr><tr><td><p><strong>자동 매매 스위치 대시보드</strong></p></td><td><p>전략별 ON/OFF 전환 및 실시간 상태 확인</p></td></tr><tr><td><p><strong>자동 매매 이력</strong></p></td><td><p>날짜별 과거 매매 내역 및 결과 조회</p></td></tr><tr><td><p><strong>수익률 순위</strong></p></td><td><p>전략별 수익률 비교</p></td></tr><tr><td><p><strong>오늘 매매 현황</strong></p></td><td><p>당일 자동매매 체결 결과 요약</p></td></tr></tbody></table>

③ 종목 및 계좌 조회

종목 조회

<table><tbody><tr><td><p>기능</p></td><td><p>확인 가능 내용</p></td></tr><tr><td><p><strong>종목 목록 조회</strong></p></td><td><p>코스피·코스닥·ETF·ETN 전체 종목 검색</p></td></tr><tr><td><p><strong>종목 현재가 실시간 조회</strong></p></td><td><p>현재가, 호가창, 실시간 체결 내역</p></td></tr><tr><td><p><strong>종목 기본 정보 조회</strong></p></td><td><p>상장일, 자본금, 액면가, 대주주 등</p></td></tr><tr><td><p><strong>종목 요약 정보 조회</strong></p></td><td><p>52주 최고·최저, PER, 시가총액 등</p></td></tr><tr><td><p><strong>시간외 단일가 조회</strong></p></td><td><p>장 마감 후 단일가 거래 정보 조회</p></td></tr></tbody></table>

차트 데이터 조회

<table><tbody><tr><td><p>기능</p></td><td><p>지원 단위</p></td></tr><tr><td><p><strong>분봉 차트</strong></p></td><td><p>1분 / 3분 / 5분 / 10분 / 15분 / 30분 / 45분 / 60분</p></td></tr><tr><td><p><strong>일봉 차트</strong></p></td><td><p>일 단위 OHLC(시가·고가·저가·종가) 데이터</p></td></tr><tr><td><p><strong>업종 차트</strong></p></td><td><p>업종별 일봉 차트 데이터</p></td></tr><tr><td><p><strong>업종 지수</strong></p></td><td><p>코스피·코스닥 업종 지수 실시간 현황</p></td></tr></tbody></table>

계좌 조회

<table><tbody><tr><td><p>기능</p></td><td colspan="2"><p>확인 가능 내용</p></td></tr><tr><td><p><strong>예수금 상세 현황</strong></p></td><td><p>예수금, 출금 가능 금액, 담보 대출 현황</p></td></tr><tr><td><p><strong>계좌 평가 잔고</strong></p></td><td><p>종목별 보유 수량, 평균 단가, 평가 손익</p></td></tr><tr><td><p><strong>계좌 평가 현황</strong></p></td><td><p>계좌 전체 총 평가금액, 총 손익률</p></td></tr></tbody></table>

④ 스케줄러

<table><tbody><tr><td><p>기능</p></td><td><p>내용</p></td></tr><tr><td><p><strong>자동 시작·종료</strong></p></td><td><p>지정 시각에 자동매매 자동 시작 및 종료</p></td></tr><tr><td><p><strong>요일별 설정</strong></p></td><td><p>월~일 요일별로 실행 여부 개별 설정</p></td></tr><tr><td><p><strong>전략별 시간대</strong></p></td><td><p>전략마다 매수·매도 허용 시간대를 A·B 2구간으로 설정</p></td></tr></tbody></table>

⑤ 설정 관리

<table><tbody><tr><td><p>설정 항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>키움 API 키 관리</strong></p></td><td><p>여러 개의 앱키·시크릿키 등록 및 계좌 연결 관리</p></td></tr><tr><td><p><strong>Gemini AI 키 설정</strong></p></td><td><p>AI 뉴스 분석용 Google Gemini API 키 등록</p></td></tr><tr><td><p><strong>일반 설정</strong></p></td><td><p>로그 파일 자동 업로드 등 기타 옵션 설정</p></td></tr><tr><td><p><strong>테마 설정</strong></p></td><td><p>밝은 테마 / 어두운 테마 전환</p></td></tr></tbody></table>

⑥ 로그 및 시스템 정보

<table><tbody><tr><td><p>기능</p></td><td><p>내용</p></td></tr><tr><td><p><strong>실시간 로그 대시보드</strong></p></td><td><p>프로그램 동작 로그 실시간 확인</p></td></tr><tr><td><p><strong>로그 매니저</strong></p></td><td><p>날짜별 과거 로그 파일 조회 및 검색</p></td></tr><tr><td><p><strong>로그 파일 업로드</strong></p></td><td><p>문의·오류 신고 시 로그 파일 자동 업로드</p></td></tr><tr><td><p><strong>시스템 정보 대시보드</strong></p></td><td><p>CPU·메모리 사용량, API 서버 연결 상태 확인</p></td></tr><tr><td><p><strong>API 사용 제한 현황</strong></p></td><td><p>키움 REST API 호출 횟수 한도 실시간 모니터링</p></td></tr><tr><td><p><strong>프로그램 정보</strong></p></td><td><p>현재 설치된 버전 확인</p></td></tr></tbody></table>

## 1.4 화면 구성 미리보기

이 항목은 부엉이 ATS 의 전체 화면 구성을 미리 파악하고  
각 영역이 어떤 역할을 하는지 이해하는 데 도움을 줍니다.

메인 화면 전체 레이아웃

프로그램 실행 후 보이는 메인 창의 전체 구성은 다음과 같습니다.  
![](/images/manual/image-3.png)

각 영역 상세 설명

❶ 메뉴 바

화면 최상단에 위치하며, 프로그램의 모든 기능에 접근하는 진입점입니다.

<table><tbody><tr><td><p>메뉴</p></td><td><p>하위 항목</p></td></tr><tr><td><p><strong>종목정보</strong></p></td><td><p>전체 종목정보, 주식기본정보, 주식현재정보, 주식정보요약, 시간외단일가</p></td></tr><tr><td><p><strong>계좌정보</strong></p></td><td><p>예수금 상세 현황, 계좌평가잔고내역, 계좌평가현황</p></td></tr><tr><td><p><strong>조건검색식</strong></p></td><td><p>키움 조건검색식, 키움 조건검색식(실시간)</p></td></tr><tr><td><p><strong>자동매매</strong></p></td><td><p>간편 매매, 자동매매 만들기 (3가지 방식), 시스템조건식 만들기, 주문금액 계산식 만들기, 자동매매 현황, 자동매매 주문 내역</p></td></tr><tr><td><p><strong>차트 데이터</strong></p></td><td><p>분봉 차트 데이터, 일봉 차트 데이터, 업종 일봉 차트 데이터</p></td></tr><tr><td><p><strong>설정</strong></p></td><td><p>로그인, 키움 REST API KEY 등록, GEMINI API KEY 등록, 자동시작 스케줄러</p></td></tr><tr><td><p><strong>도움말</strong></p></td><td><p>프로그램 정보, Log 관리, 후원하기</p></td></tr><tr><td><p><strong>테마</strong></p></td><td><p>Light Theme, Dark Theme, Primary 색상 변경(Blue/Green/Orange)</p></td></tr></tbody></table>

💡 **팁:** 대부분의 조회 기능은 별도 창으로 열립니다. 이미 열려 있는 창을 다시 메뉴에서 선택하면 기존 창이 자동으로 앞으로 이동합니다.

❷ 계좌 현황 패널

메인 화면 왼쪽 상단에 고정된 패널입니다.  
연결된 키움 계좌의 현재 자산 상태를 한눈에 확인할 수 있습니다.

![](/images/manual/image-4.png)

<table><tbody><tr><td><p>표시 항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>현재 선택된 계좌 (▼ 클릭으로 계좌 전환 가능)</p></td></tr><tr><td><p><strong>예수금</strong></p></td><td><p>계좌 내 현금 잔액</p></td></tr><tr><td><p><strong>총 평가금액</strong></p></td><td><p>현금 + 보유 종목 평가금액 합계</p></td></tr><tr><td><p><strong>총 손익</strong></p></td><td><p>보유 종목 전체 평가 손익</p></td></tr></tbody></table>

❸ 자동매매 스위치 패널

등록된 매매 전략 목록과 각 전략의 실행 상태를 보여줍니다.  
버튼 한 번으로 전략을 즉시 시작하거나 중지할 수 있습니다.

![](/images/manual/image-5.png)

<table><tbody><tr><td><p>상태 표시</p></td><td><p>의미</p></td></tr><tr><td><p>● <strong>실행</strong> (녹색)</p></td><td><p>현재 이 전략이 활성화되어 매매 신호를 감시 중</p></td></tr><tr><td><p>○ <strong>정지</strong> (회색)</p></td><td><p>현재 이 전략이 비활성화된 상태</p></td></tr></tbody></table>

⚠️ **주의:** **[시작]** 버튼을 누르는 순간 해당 전략이 즉시 활성화됩니다.  
실계좌에서 사용 시 실제 주문이 자동 실행될 수 있으므로 주의하십시오.

❹ 일반 설정 패널

앱키별 리스크 관리 설정값을 메인 화면에서 바로 확인하고 수정할 수 있습니다.

![](/images/manual/image-6.png)

❺ API 사용 제한 현황 패널

키움 REST API의 실시간 사용량을 표시합니다.  
한도를 초과하면 자동매매가 지연될 수 있어 수시로 확인이 필요합니다.

![](/images/manual/image-7.png)

<table><tbody><tr><td><p>항목</p></td><td><p>한도 설명</p></td></tr><tr><td><p><strong>실시간 체결 등록 종목수</strong></p></td><td><p>동시에 실시간 시세를 수신할 수 있는 최대 종목 수</p></td></tr><tr><td><p><strong>실시간 조건검색식 요청</strong></p></td><td><p>동시에 실행 가능한 실시간 조건검색식 수</p></td></tr></tbody></table>

❻ 하단 탭 패널

메인 화면 하단의 핵심 정보 탭입니다.  
탭 헤더의 숫자 배지(🔴)는 현재 데이터 건수를 실시간으로 표시합니다.

![](/images/manual/image-8.png)

<table><tbody><tr><td><p>탭 이름</p></td><td><p>표시 내용</p></td><td><p>실시간 갱신</p></td></tr><tr><td><p><strong>잔고</strong></p></td><td><p>현재 보유 중인 종목 목록, 수량, 평균 단가, 평가 손익률</p></td><td><p>✅</p></td></tr><tr><td><p><strong>당일매매</strong></p></td><td><p>오늘 자동매매로 체결된 매수·매도 내역 요약</p></td><td><p>✅</p></td></tr><tr><td><p><strong>체결</strong></p></td><td><p>오늘 체결된 모든 주문 (자동·수동 포함)</p></td><td><p>✅</p></td></tr><tr><td><p><strong>미체결</strong></p></td><td><p>아직 체결되지 않고 대기 중인 주문 목록</p></td><td><p>✅</p></td></tr><tr><td><p><strong>조건검색식</strong></p></td><td><p>실시간 조건검색식에 포착된 종목 목록</p></td><td><p>✅</p></td></tr><tr><td><p><strong>로그</strong></p></td><td><p>프로그램 동작 로그 실시간 출력</p></td><td><p>✅</p></td></tr><tr><td><p><strong>시스템 정보</strong></p></td><td><p>API 연결 상태, 실시간 데이터 수신 지연 현황</p></td><td><p>✅</p></td></tr></tbody></table>

탭 ① 잔고

![](/images/manual/image-9.png)

탭 ② 당일매매

![](/images/manual/image-10.png)

탭 ③ 체결 / ④ 미체결

![](/images/manual/image-11.png)

![](/images/manual/image-12.png)

탭 ⑤ 조건검색식

![](/images/manual/image-13.png)

탭 ⑥ 로그

![](/images/manual/image-14.png)

❼ 업종 지수 바

메인 창 하단 근처에 위치하며, 주요 업종 지수를 실시간으로 스크롤하여 표시합니다.

![](/images/manual/image-15.png)

❽ 상태 표시줄

창 맨 아래에 위치하며, 현재 프로그램의 동작 상태 메시지를 표시합니다.

![](/images/manual/image-16.png)

<table><tbody><tr><td><p>표시 요소</p></td><td><p>설명</p></td></tr><tr><td><p><strong>신호 표시기</strong></p></td><td><p>실시간 자동매매 신호 발생 여부를 시각적으로 표시</p></td></tr><tr><td><p><strong>후원하기 버튼</strong></p></td><td><p>개발자 후원 계좌 정보 팝업 표시</p></td></tr></tbody></table>

별도 창으로 열리는 화면 목록

메뉴에서 선택 시 메인 창과 별도로 독립 창이 열리는 화면입니다.  
여러 창을 동시에 열어 나란히 배치하여 사용할 수 있습니다.

<table><tbody><tr><td><p>메뉴 경로</p></td><td><p>열리는 창</p></td></tr><tr><td><p>종목정보 → 주식현재정보</p></td><td><p>실시간 현재가 + 호가창</p></td></tr><tr><td><p>종목정보 → 주식기본정보</p></td><td><p>종목 기본 정보</p></td></tr><tr><td><p>종목정보 → 시간외단일가</p></td><td><p>시간외 단일가 조회</p></td></tr><tr><td><p>계좌정보 → 예수금 상세 현황</p></td><td><p>예수금 상세 조회</p></td></tr><tr><td><p>계좌정보 → 계좌평가잔고내역</p></td><td><p>계좌 평가 잔고 조회</p></td></tr><tr><td><p>계좌정보 → 계좌평가현황</p></td><td><p>계좌 평가 현황 조회</p></td></tr><tr><td><p>조건검색식 → 키움 조건검색식</p></td><td><p>조건검색식 목록 조회</p></td></tr><tr><td><p>자동매매 → 자동매매 만들기</p></td><td><p>매매 전략 편집기</p></td></tr><tr><td><p>자동매매 → 자동매매 현황</p></td><td><p>5단계 계층 현황 모니터</p></td></tr><tr><td><p>자동매매 → 자동매매 주문 내역</p></td><td><p>매매 이력 조회</p></td></tr><tr><td><p>차트 데이터 → 분봉/일봉</p></td><td><p>차트 데이터 조회</p></td></tr><tr><td><p>도움말 → Log 관리</p></td><td><p>로그 파일 조회</p></td></tr></tbody></table>

📌 **참고:** 이미 열려 있는 창을 메뉴에서 다시 선택하면 새 창이 생성되지 않고 기존 창이 화면 앞으로 활성화됩니다.

테마 변경

**[테마]** 메뉴에서 밝은 화면과 어두운 화면 중 원하는 테마를 선택할 수 있습니다.

<table><tbody><tr><td><p>테마</p></td><td><p>특징</p></td></tr><tr><td><p><strong>Light Theme</strong></p></td><td><p>흰색 배경의 밝은 테마 (낮 사용 권장)</p></td></tr><tr><td><p><strong>Dark Theme</strong></p></td><td><p>어두운 배경의 다크 테마 (장시간 사용·야간 권장)</p></td></tr><tr><td><p><strong>Primary Blue</strong></p></td><td><p>강조색을 파란색 계열로 변경</p></td></tr><tr><td><p><strong>Primary Green</strong></p></td><td><p>강조색을 초록색 계열로 변경</p></td></tr><tr><td><p><strong>Primary Orange</strong></p></td><td><p>강조색을 주황색 계열로 변경</p></td></tr></tbody></table>

# 2. 설치 및 초기 설정
