---
title: 부엉이 트레이더 사용자 설명서
version: 1.5.10
lastUpdated: 2026. 7. 13.
---


# 1. 시작하기 전에


## 1.1 이 문서에 대하여

이 문서는 <strong>부엉이 주식자동매매 프로그램 (부엉이 트레이더)</strong>의 공식 사용자 설명서입니다. 초보 사용자부터 숙련된 사용자까지 프로그램의 모든 기능을 올바르게 활용할 수 있도록 가이드합니다.

### 이 문서가 다루는 내용

설명서는 사용자의 원활한 프로그램 운용을 위해 다음 내용을 중심으로 구성되어 있습니다.

<table><tbody><tr><td><p>구분</p></td><td><p>내용</p></td></tr><tr><td><p><strong>설치 및 초기 설정</strong></p></td><td><p>프로그램 설치 방법과 처음 사용하기 위한 필수 설정</p></td></tr><tr><td><p><strong>화면(UI) 조작 방법</strong></p></td><td><p>각 화면의 구성 요소와 조작 순서</p></td></tr><tr><td><p><strong>기능 활용 방법</strong></p></td><td><p>자동 매매 전략 설정, 조건검색, 스케줄러 등 주요 기능 사용법</p></td></tr><tr><td><p><strong>결과물 확인 방법</strong></p></td><td><p>매매 체결 결과, 수익률, 계좌 잔고, 로그 등 확인 방법</p></td></tr><tr><td><p><strong>오류 해결 및 FAQ</strong></p></td><td><p>자주 발생하는 문제와 해결 방법</p></td></tr></tbody></table>

### 적용 버전

이 문서는 아래 버전을 기준으로 작성되었습니다.

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>프로그램명</strong></p></td><td><p>부엉이 주식자동매매 프로그램 (부엉이 트레이더 )</p></td></tr><tr><td><p><strong>문서 적용 버전</strong></p></td><td><p>V1.0</p></td></tr><tr><td><p><strong>운영체제</strong></p></td><td><p>Windows 10 이상 (64비트)</p></td></tr><tr><td><p><strong>필수 연동 서비스</strong></p></td><td><p>키움증권 REST API</p></td></tr></tbody></table>

⚠️ <strong>주의:</strong> 이후 버전에서는 화면 구성이나 기능이 일부 변경될 수 있습니다.  
사용 중인 프로그램 버전과 이 문서의 적용 버전이 다를 경우, 메뉴 <strong>\[도움말 → 프로그램 정보\]</strong> 에서 현재 버전을 확인하신 후 해당 버전의 최신 문서를 참고하시기 바랍니다.

### 표기 약속

이 문서에서 사용하는 표기 방식은 다음과 같습니다.

<table><tbody><tr><td><p>표기</p></td><td><p>의미</p></td></tr><tr><td><p><strong>[버튼명]</strong></p></td><td><p>화면에서 클릭하는 버튼을 나타냅니다. 예: <strong>[조회]</strong>, <strong>[저장]</strong></p></td></tr><tr><td><p><strong>[메뉴명 → 항목]</strong></p></td><td><p>메뉴 이동 경로를 나타냅니다. 예: <strong>[설정 → 일반 설정]</strong></p></td></tr><tr><td><p><strong>고정폭 텍스트</strong></p></td><td><p>설정 파일의 항목명, 입력값 예시를 나타냅니다. 예: Microsoft.CodeAnalysis.Workspaces.MSBuild.BuildHost.runtimeconfig.json</p></td></tr><tr><td><p>⚠️ <strong>주의</strong></p></td><td><p>잘못 조작하면 오류가 발생하거나 의도치 않은 주문이 실행될 수 있는 항목입니다.</p></td></tr><tr><td><p>💡 <strong>팁</strong></p></td><td><p>기능을 더 편리하게 활용할 수 있는 추가 정보입니다.</p></td></tr><tr><td><p>📌 <strong>참고</strong></p></td><td><p>이해를 돕기 위한 보충 설명입니다.</p></td></tr></tbody></table>

### 관련 문서 및 참고 자료

이 문서와 함께 참고할 수 있는 자료는 다음과 같습니다.

*   <strong>키움증권 Rest API 공식 문서</strong> : https://apiportal.koreainvestment.com  
    _(키움 REST API 앱키 발급, TR 코드 상세 사양 참고)_

### 문서 개정 이력

<table><tbody><tr><td><p>버전</p></td><td><p>개정일</p></td><td><p>주요 변경 내용</p></td></tr><tr><td><p>V1.0</p></td><td><p>2026년 –</p></td><td><p>최초 작성</p></td></tr></tbody></table>

## 1.2 부엉이 트레이더 란?

<strong>부엉이 트레이더(Automated Trading System)</strong>는 키움증권 REST API를 기반으로 종목 선정부터 매수·매도 주문 실행까지 전 과정을 자동화하는 <strong>Windows 전용 주식 자동매매 프로그램</strong>입니다. 복잡한 코딩 지식 없이도 사용자가 설정한 전략과 규칙에 따라 프로그램이 실시간으로 시장을 감시하고 대응하도록 설계되었습니다.

### 프로그램 탄생 배경

 <strong>기술적 장벽 완화</strong>: 일반적인 API 연동에 필요한 복잡한 코딩 지식 없이, 조건과 규칙 설정만으로 자동매매가 가능하도록 구현되었습니다.

 <strong>이름의 유래</strong>: 밤낮없이 시장을 감시하며 기회를 포착하는 부엉이의 특성에서 착안하여 명명되었습니다.

### 지원 증권사 및 필수 조건

부엉이 트레이더를 사용하기 위해서는 아래의 요건이 반드시 충족되어야 합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>지원 증권사</strong></p></td><td><p>키움증권 (키움 REST API 전용)</p></td></tr><tr><td><p><strong>계좌 유형</strong></p></td><td><p>실계좌 및 모의투자 계좌 모두 지원</p></td></tr><tr><td><p><strong>API 키</strong></p></td><td><p>키움증권 Rest API 앱키(App Key) 및 시크릿키(Secret Key) 필요</p></td></tr><tr><td><p><strong>운영체제</strong></p></td><td><p>Windows 10 이상 (64비트)</p></td></tr><tr><td><p><strong>지원 시장</strong></p></td><td><p>코스피, 코스닥, ETF, ETN</p></td></tr></tbody></table>

⚠️ <strong>주의:</strong> 이 프로그램은 키움증권 계좌와 API 키가 없으면 사용할 수 없습니다.  
API 키 발급은 키움증권 Rest API 포털에서 신청하시기 바랍니다.

### 핵심 기능 요약

#### ① 자동 매매 전략

매매 전략의 핵심은 <strong>"어떤 종목을 언제 사고팔 것인가"</strong> 를 사전에 규칙으로 정의하는 것입니다.  
<strong>종목 선정 방식</strong>: 키움증권 HTS 조건검색식 활용 또는 사용자가 직접 종목을 지정할 수 있습니다.

#### ② 유연한 매수·매도 조건 설정

단순히 종목을 고르는 것을 넘어, <strong>언제 사고 팔 것인지 세밀하게 조건을 설정</strong>할 수 있습니다.

*   <strong>준비 조건</strong> : 매수 대기 상태 진입을 위한 선행 조건 (예: 조건검색식 포착 신호 수신)
*   <strong>실행 조건</strong> : 실제 주문 실행 시점을 결정하는 조건 (예: 체결 강도 기준, 현재가 조건)
*   <strong>매도 조건</strong> : 목표 수익률 도달, 손절 기준, 지정 시간 일괄 매도 등
*   <strong>금액 표현식</strong> : 주문 금액을 수식으로 설정 (예: 보유 현금의 N%, 고정 금액 등)

#### ③ 리스크 관리 기능

자동매매의 가장 큰 위험인 <strong>과도한 손실을 방지</strong>하기 위한 다양한 안전장치가 내장되어 있습니다.

<table><tbody><tr><td><p>리스크 관리 항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>일일 최대 매수 금액 제한</strong></p></td><td><p>하루 동안 매수에 사용할 수 있는 최대 금액 설정</p></td></tr><tr><td><p><strong>동일 종목 일일 최대 매수 횟수</strong></p></td><td><p>같은 종목을 하루에 최대 몇 번까지 살 수 있는지 제한</p></td></tr><tr><td><p><strong>연속 동일 매수 주문 제한</strong></p></td><td><p>같은 조건의 매수 주문이 연속으로 실행되는 것을 방지</p></td></tr><tr><td><p><strong>보유 종목 수 제한</strong></p></td><td><p>동시에 보유할 수 있는 종목 수 상한선 설정</p></td></tr><tr><td><p><strong>당일 동일 종목 재매수 제한</strong></p></td><td><p>당일 이미 거래한 종목의 재매수를 차단</p></td></tr><tr><td><p><strong>거래 제외 종목 기준</strong></p></td><td><p>특정 조건의 종목(예: 관리종목, 거래 정지)을 거래 대상에서 자동 제외</p></td></tr><tr><td><p><strong>지정 시간 일괄 매도</strong></p></td><td><p>장 마감 전 지정된 시각에 보유 종목 전체 자동 매도</p></td></tr></tbody></table>

#### ④ 다양한 주문 유형 지원

<strong>주문 유형</strong>: 지정가, 시장가 및 시간외 단일가 주문을 모두 지원합니다.

#### ⑤ 자동 실행 스케줄러

요일 및 시간대별로 매매 시작/종료를 예약할 수 있으며, 전략별로 독립된 실행 시간대(A/B 구간) 설정이 가능합니다.

⑥ 멀티 앱키 운용

하나의 프로그램에서 <strong>여러 개의 키움 앱키를 동시에 등록하고 운용</strong>할 수 있습니다.  
각 앱키별로 독립적인 매매 전략을 실행할 수 있어 계좌 분리 운용이 가능합니다.

프로그램 동작 흐름 (한눈에 보기)

![](/images/manual/image-2.png)

이 프로그램이 적합한 사용자

✅ 키움증권 조건검색식을 이미 활용하고 있는 사용자  
✅ 자동매매를 시작하고 싶지만 코딩 없이 설정만으로 운용하고 싶은 사용자  
✅ 여러 개의 매매 전략을 동시에 실행하고 결과를 모니터링하고 싶은 사용자  
✅ 실시간 순위·호가 등 다양한 조건을 조합하고 싶은 사용자

이 프로그램이 적합하지 않은 사용자

❌ 키움증권 계좌가 없거나 API 키를 발급받지 않은 사용자  
❌ 복잡한 초기 설정 없이 바로 사용하고 싶은 사용자  
❌ 삼성증권, 미래에셋 등 타 증권사 계좌 사용자

⚠️ <strong>투자 위험 고지</strong>  
부엉이 트레이더 은 매매 실행을 자동화하는 도구이며, <strong>수익을 보장하지 않습니다.</strong>  
설정한 매매 전략과 시장 상황에 따라 손실이 발생할 수 있습니다.  
<strong>모든 투자 결과에 대한 책임은 사용자 본인에게 있습니다.</strong>  
실계좌 사용 전 반드시 <strong>모의투자 계좌로 충분히 테스트</strong>하시기 바랍니다.

## 1.3 주요 기능 한눈에 보기

부엉이 트레이더는 실시간 시장 감시부터 복잡한 매매 전략 실행까지, 주식 투자의 전 과정을 사용자 중심의 직관적인 인터페이스로 자동화합니다.

① 대시보드 — 메인 화면에서 한 번에 확인

프로그램을 시작하면 메인 화면에서 아래 정보를 실시간으로 확인할 수 있습니다.

<table><tbody><tr><td><p>대시보드 패널</p></td><td><p>표시 정보</p></td><td><p>참고 챕터</p></td></tr><tr><td><p><strong>계좌 상태</strong></p></td><td><p>예수금, 출금 가능 금액, 연결 계좌 정보</p></td><td></td></tr><tr><td><p><strong>자동 매매 스위치</strong></p></td><td><p>전략별 ON/OFF 상태, 즉시 전환 버튼</p></td><td></td></tr><tr><td><p><strong>주식 잔고</strong></p></td><td><p>보유 종목 목록, 종목별 평가 손익</p></td><td></td></tr><tr><td><p><strong>오늘 매매 현황</strong></p></td><td><p>당일 매수·매도 체결 내역 요약</p></td><td></td></tr><tr><td><p><strong>미체결 주문</strong></p></td><td><p>아직 체결되지 않은 주문 목록</p></td><td></td></tr><tr><td><p><strong>체결 주문</strong></p></td><td><p>당일 체결 완료된 주문 목록</p></td><td></td></tr><tr><td><p><strong>조건검색식 포착 종목</strong></p></td><td><p>실시간 조건검색식에 포착된 종목 목록</p></td><td></td></tr><tr><td><p><strong>업종 지수</strong></p></td><td><p>코스피·코스닥 업종별 지수 실시간 현황</p></td><td></td></tr><tr><td><p><strong>시스템 정보</strong></p></td><td><p>API 연결 상태, CPU·메모리 사용량</p></td><td></td></tr><tr><td><p><strong>로그</strong></p></td><td><p>실시간 프로그램 동작 로그</p></td><td></td></tr></tbody></table>

② 자동 매매 — 핵심 기능

매매 전략 만들기 (3가지 편집기)

<table><tbody><tr><td><p>편집기 유형</p></td><td><p>특징</p></td><td><p>추천 사용자</p></td></tr><tr><td><p><strong>단일종목 자동매매</strong></p></td><td><p>특정 종목을 지정하여 단순하게 설정</p></td><td><p>매매할 종목을 직접 고르는 사용자</p></td></tr><tr><td><p><strong>키움 조건검색식 자동매매</strong></p></td><td><p>키움 HTS에서 만든 조건검색식을 그대로 활용</p></td><td><p>키움 조건검색식 사용 경험자</p></td></tr><tr><td><p><strong>사용자 정의 자동매매</strong></p></td><td><p>실시간 순위·호가창 등 다양한 조건 조합</p></td><td><p>세밀한 전략 설정을 원하는 사용자</p></td></tr></tbody></table>

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

<table><tbody><tr><td><p>설정 항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>키움 API 키 관리</strong></p></td><td><p>여러 개의 앱키·시크릿키 등록 및 계좌 연결 관리</p></td></tr><tr><td><p><strong>시스템 환경 설정</strong></p></td><td><p>로그 파일 자동 업로드 등 기타 옵션 설정</p></td></tr><tr><td><p><strong>테마 설정</strong></p></td><td><p>밝은 테마 / 어두운 테마 전환</p></td></tr></tbody></table>

⑥ 로그 및 시스템 정보

<table><tbody><tr><td><p>기능</p></td><td><p>내용</p></td></tr><tr><td><p><strong>실시간 로그 대시보드</strong></p></td><td><p>프로그램 동작 로그 실시간 확인</p></td></tr><tr><td><p><strong>로그 매니저</strong></p></td><td><p>날짜별 과거 로그 파일 조회 및 검색</p></td></tr><tr><td><p><strong>로그 파일 업로드</strong></p></td><td><p>문의·오류 신고 시 로그 파일 자동 업로드</p></td></tr><tr><td><p><strong>시스템 정보 대시보드</strong></p></td><td><p>CPU·메모리 사용량, API 서버 연결 상태 확인</p></td></tr><tr><td><p><strong>API 사용 제한 현황</strong></p></td><td><p>키움 REST API 호출 횟수 한도 실시간 모니터링</p></td></tr><tr><td><p><strong>프로그램 정보</strong></p></td><td><p>현재 설치된 버전 확인</p></td></tr></tbody></table>

## 1.4 화면 구성 미리보기

이 항목은 부엉이 트레이더 의 전체 화면 구성을 미리 파악하고  
각 영역이 어떤 역할을 하는지 이해하는 데 도움을 줍니다.

메인 화면 전체 레이아웃

프로그램 실행 후 보이는 메인 창의 전체 구성은 다음과 같습니다.  
![](/images/manual/image-3.png)

각 영역 상세 설명

❶ 메뉴 바

화면 최상단에 위치하며, 프로그램의 모든 기능에 접근하는 진입점입니다.

<table><tbody><tr><td><p>메뉴</p></td><td><p>하위 항목</p></td></tr><tr><td><p><strong>종목정보</strong></p></td><td><p>전체 종목정보, 주식기본정보, 주식현재정보, 주식정보요약, 시간외단일가</p></td></tr><tr><td><p><strong>계좌정보</strong></p></td><td><p>예수금 상세 현황, 계좌평가잔고내역, 계좌평가현황</p></td></tr><tr><td><p><strong>조건검색식</strong></p></td><td><p>키움 조건검색식, 키움 조건검색식(실시간)</p></td></tr><tr><td><p><strong>자동매매</strong></p></td><td><p>간편 매매, 자동매매 만들기 (3가지 방식), 시스템조건식 만들기, 주문금액 계산식 만들기, 자동매매 현황, 자동매매 주문 내역</p></td></tr><tr><td><p><strong>차트 데이터</strong></p></td><td><p>분봉 차트 데이터, 일봉 차트 데이터, 업종 일봉 차트 데이터</p></td></tr><tr><td><p><strong>설정</strong></p></td><td><p>로그인, 키움 REST API KEY 등록, GEMINI API KEY 등록, 자동시작 스케줄러</p></td></tr><tr><td><p><strong>도움말</strong></p></td><td><p>프로그램 정보, Log 관리, 후원하기</p></td></tr><tr><td><p><strong>테마</strong></p></td><td><p>Light Theme, Dark Theme, Primary 색상 변경(Blue/Green/Orange)</p></td></tr></tbody></table>

💡 <strong>팁:</strong> 대부분의 조회 기능은 별도 창으로 열립니다. 이미 열려 있는 창을 다시 메뉴에서 선택하면 기존 창이 자동으로 앞으로 이동합니다.

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

⚠️ <strong>주의:</strong> <strong>\[시작\]</strong> 버튼을 누르는 순간 해당 전략이 즉시 활성화됩니다.  
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

<table><tbody><tr><td><p>탭 이름</p></td><td><p>표시 내용</p></td><td><p>실시간 갱신</p></td></tr><tr><td><p><strong>키움잔고</strong></p></td><td><p>키움서버 기준 보유 종목 목록, 수량, 평균 단가, 평가 손익률</p></td><td><p>✅</p></td></tr><tr><td><p><strong>시스템잔고</strong></p></td><td><p>프로그램 내부 관리 기준 보유 종목 현황 (키움잔고와 대조용)</p></td><td><p>✅</p></td></tr><tr><td><p><strong>당일매매</strong></p></td><td><p>오늘 자동매매로 체결된 매수·매도 내역 요약</p></td><td><p>✅</p></td></tr><tr><td><p><strong>당일실현손익</strong></p></td><td><p>오늘 매도로 확정된 실현 손익 (설정에 따라 표시)</p></td><td><p>✅</p></td></tr><tr><td><p><strong>체결</strong></p></td><td><p>오늘 체결된 모든 주문 (자동·수동 포함)</p></td><td><p>✅</p></td></tr><tr><td><p><strong>미체결</strong></p></td><td><p>아직 체결되지 않고 대기 중인 주문 목록</p></td><td><p>✅</p></td></tr><tr><td><p><strong>조건검색식</strong></p></td><td><p>실시간 조건검색식에 포착된 종목 목록</p></td><td><p>✅</p></td></tr><tr><td><p><strong>매매제한 현황</strong></p></td><td><p>일일 매수 한도·보유 수 제한·재매수 차단 등 리스크 제한의 실시간 적용 상태 (5장 참조)</p></td><td><p>✅</p></td></tr><tr><td><p><strong>로그</strong></p></td><td><p>프로그램 동작 로그 실시간 출력</p></td><td><p>✅</p></td></tr><tr><td><p><strong>시스템 정보</strong></p></td><td><p>API 연결 상태, 실시간 데이터 수신 지연 현황</p></td><td><p>✅</p></td></tr></tbody></table>

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

📌 <strong>참고:</strong> 이미 열려 있는 창을 메뉴에서 다시 선택하면 새 창이 생성되지 않고 기존 창이 화면 앞으로 활성화됩니다.

테마 변경

<strong>\[테마\]</strong> 메뉴에서 밝은 화면과 어두운 화면 중 원하는 테마를 선택할 수 있습니다.

<table><tbody><tr><td><p>테마</p></td><td><p>특징</p></td></tr><tr><td><p><strong>Light Theme</strong></p></td><td><p>흰색 배경의 밝은 테마 (낮 사용 권장)</p></td></tr><tr><td><p><strong>Dark Theme</strong></p></td><td><p>어두운 배경의 다크 테마 (장시간 사용·야간 권장)</p></td></tr><tr><td><p><strong>Primary Blue</strong></p></td><td><p>강조색을 파란색 계열로 변경</p></td></tr><tr><td><p><strong>Primary Green</strong></p></td><td><p>강조색을 초록색 계열로 변경</p></td></tr><tr><td><p><strong>Primary Orange</strong></p></td><td><p>강조색을 주황색 계열로 변경</p></td></tr></tbody></table>

# 2. 설치 및 초기 설정

## 2.1 시스템 요구 사항

부엉이 트레이더 을 정상적으로 사용하기 위해 필요한 하드웨어, 소프트웨어, 네트워크 환경을 안내합니다.  
설치 전에 아래 요구 사항을 반드시 확인하시기 바랍니다.

### 하드웨어 요구 사항

<table><tbody><tr><td><p>항목</p></td><td><p>최소 사양</p></td><td><p>권장 사양</p></td></tr><tr><td><p><strong>CPU</strong></p></td><td><p>2코어 이상 (1.6 GHz)</p></td><td><p>4코어 이상 (2.5 GHz 이상)</p></td></tr><tr><td><p><strong>RAM (메모리)</strong></p></td><td><p>4 GB</p></td><td><p>8 GB 이상</p></td></tr><tr><td><p><strong>저장 공간</strong></p></td><td><p>1 GB 이상 여유 공간</p></td><td><p>5 GB 이상 여유 공간</p></td></tr><tr><td><p><strong>화면 해상도</strong></p></td><td><p>1280 × 768 이상</p></td><td><p>1920 × 1080 (Full HD) 이상</p></td></tr><tr><td><p><strong>네트워크</strong></p></td><td><p>유선 또는 Wi-Fi 인터넷 연결</p></td><td><p>유선 인터넷 (안정적인 연결 권장)</p></td></tr></tbody></table>

⚠️ <strong>주의:</strong> 자동매매 중 프로그램이 비정상 종료되면 미체결 주문이 남을 수 있습니다.  
안정적인 PC 사양과 네트워크 환경에서 사용하시기 바랍니다.

💡 <strong>팁:</strong> 실시간 시세 수신, 다수 전략 동시 실행 등 여러 기능을 동시에 사용하면  
메모리 사용량이 증가합니다. <strong>8 GB 이상의 RAM을 권장합니다.</strong>

### 운영체제 요구 사항

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>지원 OS</strong></p></td><td><p>Windows 10 / Windows 11</p></td></tr><tr><td><p><strong>아키텍처</strong></p></td><td><p>64비트 (x64) 권장</p></td></tr><tr><td><p><strong>언어</strong></p></td><td><p>한국어 Windows 환경 권장</p></td></tr></tbody></table>

📌 <strong>참고:</strong> 부엉이 트레이더 의 프로그램은 <strong>.NET 10 (Windows)</strong> 기반으로 작성되었습니다.  

### 필수 소프트웨어

① .NET 런타임

부엉이 트레이더 은 Microsoft .NET 10 기반으로 개발되었습니다.  
인스톨러 실행 시 자동으로 설치 여부를 확인하지만, 사전에 설치되어 있으면 더 빠르게 시작할 수 있습니다.

💡 <strong>팁:</strong> .NET 런타임은 아래 Microsoft 공식 사이트에서 무료로 다운로드할 수 있습니다.  
https://dotnet.microsoft.com/download

② 키움증권 관련 필수 요건

<table><tbody><tr><td><p>항목</p></td><td><p>요건</p></td><td><p>설명</p></td></tr><tr><td><p><strong>키움증권 계좌</strong></p></td><td><p>필수</p></td><td><p>국내 주식 위탁 거래 계좌 (실계좌 또는 모의투자)</p></td></tr><tr><td><p><strong>키움 REST API 앱키 발급</strong></p></td><td><p>필수</p></td><td><p>키움 Rest API 포털에서 앱키(App Key) 및 시크릿키(Secret Key) 발급</p></td></tr><tr><td><p><strong>모의투자 계좌 (권장)</strong></p></td><td><p>권장</p></td><td><p>실계좌 사용 전 테스트 목적으로 사용</p></td></tr></tbody></table>

저장 공간 사용 현황

<table><tbody><tr><td><p>저장 위치</p></td><td><p>용도</p></td><td><p>예상 크기</p></td></tr><tr><td><p><strong>프로그램 설치 폴더</strong></p></td><td><p>실행 파일 및 리소스</p></td><td><p>약 200 ~ 400 MB</p></td></tr><tr><td><p><strong>내 문서\SageLine\SageStockPilot\</strong></p></td><td><p>설정 파일 (appsettings.json)</p></td><td><p>수 KB</p></td></tr><tr><td><p><strong>내 문서\SageLine\SageStockPilot\logs\</strong></p></td><td><p>로그 파일 (일자별, 최대 20개 보관)</p></td><td><p>파일당 최대 1 GB</p></td></tr><tr><td><p><strong>내 문서\SageLine\SageStockPilot\</strong></p></td><td><p>SQLite DB 파일 (전략, 주문, 이력 등)</p></td><td><p>수 MB ~ 수십 MB</p></td></tr></tbody></table>

💡 <strong>팁:</strong> 로그 파일은 하루 1개씩 생성되며, 최대 20일치가 보관됩니다.  
디스크 여유 공간이 부족해지면 오래된 로그 파일을 수동으로 삭제하시기 바랍니다.  
로그 파일 위치: <strong>내 문서 > SageLine > 부엉이 트레이더 > logs</strong>

지원 여부 요약표

<table><tbody><tr><td><p>환경</p></td><td><p>지원 여부</p></td><td><p>비고</p></td></tr><tr><td><p>Windows 11 (64비트)</p></td><td><p>✅ 완전 지원</p></td><td><p>권장 환경</p></td></tr><tr><td><p>Windows 10 (64비트)</p></td><td><p>✅ 완전 지원</p></td><td><p>권장 환경</p></td></tr></tbody></table>

⚠️ <strong>투자 안정성 주의:</strong>  
자동매매 프로그램 특성상 <strong>PC가 절전 모드, 화면 보호기, 또는 자동 재시작</strong>되면 실행 중인 전략이 중단됩니다.  
자동매매 실행 중에는 아래 설정을 확인하세요.

*   Windows 절전 모드 → <strong>해제</strong>
*   화면 보호기 → <strong>해제</strong>
*   Windows 자동 업데이트 강제 재시작 → <strong>활성 시간 설정</strong>으로 재시작 방지

## 2.2 프로그램 설치

설치 전 체크리스트

<table><tbody><tr><td><p>번호</p></td><td><p>확인 항목</p></td><td><p>비고</p></td></tr><tr><td><p>☐</p></td><td><p>Windows 10 이상 운영체제인지 확인</p></td><td><p>64비트 권장</p></td></tr><tr><td><p>☐</p></td><td><p>키움 앱키(App Key) 및 시크릿키(Secret Key) 발급 여부 확인</p></td><td><p>Rest API 포털에서 발급</p></td></tr><tr><td><p>☐</p></td><td><p>기존에 설치된 이전 버전이 있다면 프로그램 종료 후 진행</p></td><td><p>실행 중 재설치 시 오류 가능</p></td></tr><tr><td><p>☐</p></td><td><p>Windows 백신·보안 프로그램 실시간 검사 일시 중지</p></td><td><p>설치 파일 오탐 방지</p></td></tr></tbody></table>

네이버까페 자료실에서 부엉이 트레이더 프로그램 설치 파일 다운로드 및 설치

[https://cafe.naver.com/f-e/cafes/31344003/menus/11?t=1773202258583](https://cafe.naver.com/f-e/cafes/31344003/menus/11?t=1773202258583)

※ 설치방법은 게시물을 참조하시 바랍니다.

![](/images/manual/image-17.png)

처음 실행 시 자동 생성 파일

메인 화면이 처음 실행될 때 아래 파일들이 <strong>내 문서</strong> 폴더에 자동으로 생성됩니다.  
삭제하거나 수정할 필요는 없으며, 편의 기능으로 활용할 수 있습니다.

<table><tbody><tr><td><p>파일명</p></td><td><p>위치</p></td><td><p>설명</p></td></tr><tr><td><p><strong>Start부엉이 트레이더 .bat</strong></p></td><td><p><strong>내 문서\SageLine\</strong></p></td><td><p>프로그램 실행 배치 파일</p></td></tr><tr><td><p><strong>Start부엉이 트레이더 .vbs</strong></p></td><td><p><strong>내 문서\SageLine\</strong></p></td><td><p><strong>관리자 권한</strong>으로 실행하는 스크립트</p></td></tr><tr><td><p><strong>Exit부엉이 트레이더 .bat</strong></p></td><td><p><strong>내 문서\SageLine\</strong></p></td><td><p>프로그램 강제 종료 배치 파일</p></td></tr></tbody></table>

💡 <strong>팁:</strong> 매일 자동매매를 사용한다면 <strong>Start부엉이 트레이더 .vbs</strong> 파일의 바로 가기를  
Windows <strong>시작 프로그램</strong> 폴더에 등록하면 PC 부팅 시 자동으로 실행됩니다.

중요한 자동 동작 안내

프로그램에는 아래 두 가지 자동 동작이 내장되어 있습니다.  
반드시 숙지하시기 바랍니다.

① 오전 6시 — 종료 예고 알림

프로그램 자동 종료 (실행 중인 자동매매 전략 포함)

⚠️ <strong>주의:</strong> 매일 오전 <strong>6시 5분에 프로그램이 자동 종료</strong>됩니다.  
이는 키움증권 서버 점검 시간과 새벽 시간대의 불안정한 데이터 수신을 방지하기 위한 설계입니다.  
자동매매가 계속 필요하다면 <strong>Start부엉이 트레이더 .vbs</strong>를 <strong>Windows 작업 스케줄러</strong>에 등록하여 오전 7시 30분 이후 자동 재시작하도록 설정하는 것을 권장합니다.  
② 오전 6시 ~ 7시 30분 — 조기 실행 경고

키 미등록 상태에서 최초 실행 시 — API 키 등록 창

등록된 키움 API 키가 없거나 키가 유효하지 않으면 메인 화면 대신  
<strong>키움 REST API KEY 등록 창</strong>이 자동으로 표시됩니다.

![](/images/manual/image-18.png)

⚠️ <strong>주의:</strong> 이 창에서 <strong>\[취소\]</strong> 를 클릭하면 프로그램이 자동으로 종료됩니다.  
API 키를 발급받은 후 다시 실행하십시오.  

## 2.3 필수 초기 설정

### 2.3.1 키움 API 앱키 등록

이 설정이 필요한 이유

부엉이 트레이더 은 키움증권 REST API를 통해 주문 실행, 계좌 조회, 실시간 시세 수신 등 모든 핵심 기능을 수행합니다.  
이를 위해서는 키움증권 Rest API 포털에서 발급받은 <strong>앱키(App Key)</strong> 와 <strong>시크릿키(Secret Key)</strong> 를 프로그램에 등록해야 합니다.

⚠️ <strong>주의:</strong> 앱키와 시크릿키가 등록되지 않으면 프로그램의 <strong>모든 기능을 사용할 수 없습니다.</strong>

STEP 1 — 키움 Rest API 앱키 발급

까페 자료실의 키움증권\_REST\_API\_사용신청\_설명서\_20260302.pptx 문서 참조

발급 시 확인 사항

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>서버 구분</strong></p></td><td><p>실서버 계좌용 또는 모의투자 계좌용 구분 발급</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>앱키와 연결할 거래 계좌번호 확인</p></td></tr><tr><td><p><strong>App Key</strong></p></td><td><p>공개 식별자 (32자 내외 문자열)</p></td></tr><tr><td><p><strong>Secret Key</strong></p></td><td><p>비공개 인증키 (64자 내외 문자열, <strong>절대 타인에게 공개 금지</strong>)</p></td></tr></tbody></table>

⚠️ <strong>Secret Key는 절대로 타인에게 공개하지 마십시오.</strong>  
유출 시 타인이 귀하의 계좌로 주문을 실행할 수 있습니다.  
유출이 의심되면 키움 Rest API 포털에서 즉시 앱키를 재발급하십시오.

STEP 2 — 키움 REST API KEY 등록 창 열기

두 가지 방법으로 등록 창을 열 수 있습니다.

<table><tbody><tr><td><p>방법</p></td><td><p>설명</p></td></tr><tr><td><p><strong>방법 1. 자동 표시</strong></p></td><td><p>앱키 미등록 상태에서 프로그램 시작 시 자동으로 등록 창이 열림</p></td></tr><tr><td><p><strong>방법 2. 메뉴에서 열기</strong></p></td><td><p>메인 화면 메뉴 <strong>[설정 → 키움증권 REST API KEY 등록]</strong> 클릭</p></td></tr></tbody></table>

메인 화면 메뉴바

│

└── \[설정\]

└── \[키움증권 REST API KEY 등록\] ← 클릭

STEP 3 — 키움 REST API KEY 등록 창 화면 구성

![](/images/manual/image-19.png)

<table><tbody><tr><td><p>입력 항목</p></td><td><p>설명</p></td><td><p>예시</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>키움증권 국내 주식 계좌번호</p></td><td><p><strong>1234567890</strong></p></td></tr><tr><td><p><strong>서버 구분</strong></p></td><td><p>연결할 서버 선택</p></td><td><p><strong>● 실서버</strong> 또는 <strong>● 모의투자</strong></p></td></tr><tr><td><p><strong>App Key</strong></p></td><td><p>키움 포털에서 발급받은 앱키</p></td><td><p><strong>PSxxxxxxxxxxxxxxxxxxxxxxxxxxx</strong></p></td></tr><tr><td><p><strong>Secret Key</strong></p></td><td><p>키움 포털에서 발급받은 시크릿키</p></td><td><p><strong>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</strong></p></td></tr></tbody></table>

📌 <strong>참고:</strong> 기본값은 <strong>모의투자</strong> 서버로 설정되어 있습니다.  
실제 거래 계좌를 사용하려면 반드시 <strong>● 실서버</strong> 로 변경하십시오.

STEP 4 — 계좌 및 키 입력

입력 방법

① 계좌번호 입력

계좌번호란 클릭 → 키움증권 계좌번호 입력 (하이픈(-) 없이 숫자만)

예: 1234567890

② 서버 구분 선택

● 실서버 ← 실제 거래 (실제 돈이 거래됨) ⚠️

● 모의투자 ← 테스트용 (가상 자금으로 연습)

③ App Key 입력

키움 Rest API 포털에서 발급받은 App Key 붙여넣기

④ Secret Key 입력

키움 Rest API 포털에서 발급받은 Secret Key 붙여넣기

⚠️ <strong>처음 사용자는 반드시 모의투자 계좌로 먼저 테스트하십시오.</strong>  
실서버 등록 후 자동매매를 시작하면 <strong>실제 돈으로 주문이 실행</strong>됩니다.

여러 계좌 등록 (멀티 앱키)

목록의 빈 행에 추가 계좌 정보를 입력하면 <strong>여러 개의 계좌/앱키를 동시에 등록</strong>할 수 있습니다.

💡 <strong>팁:</strong> 여러 앱키를 등록하면 API 호출 한도를 분산시킬 수 있습니다.  
각 앱키별로 독립적인 매매 전략을 할당하여 운용할 수 있습니다.

STEP 5 — 유효성 검사 및 저장

<strong>\[저장\]</strong> 버튼을 클릭하면 아래 절차가 자동으로 진행됩니다.

① 입력값 유효성 검사

② 키움 API 서버에 실제 접속하여 키 유효성 확인

③ Windows 자격 증명 관리자에 암호화 저장

④ 저장 완료 메시지 표시

⑤ 창 자동 닫힘

STEP 6 — 프로그램 재시작

등록이 완료되면 반드시 프로그램을 재시작해야 변경 내용이 적용됩니다.

저장 위치 및 보안

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>저장 위치</strong></p></td><td><p>Windows 자격 증명 관리자 (Credential Manager)</p></td></tr><tr><td><p><strong>저장 키 이름</strong></p></td><td><p><strong>SageLine .SageStockPilot.{계좌번호}</strong></p></td></tr><tr><td><p><strong>저장 방식</strong></p></td><td><p>App Key는 사용자 이름, Secret Key는 비밀번호로 암호화 저장</p></td></tr><tr><td><p><strong>확인 방법</strong></p></td><td><p>Windows 제어판 → 자격 증명 관리자 → Windows 자격 증명</p></td></tr></tbody></table>

💡 <strong>팁:</strong> 앱키는 PC 재부팅 후에도 유지됩니다.  
Windows 자격 증명 관리자에 저장되므로 별도 파일로 평문 보관하지 않아 보안에 안전합니다.

오류 메시지 및 해결 방법

<table><tbody><tr><td><p>오류 메시지</p></td><td><p>원인</p></td><td><p>해결 방법</p></td></tr><tr><td><p><strong>App Key, Secret Key를 입력해주세요.</strong></p></td><td><p>입력 항목 누락</p></td><td><p>3개 항목 모두 입력 후 재시도</p></td></tr><tr><td><p><strong>계좌번호가 중복되었습니다.</strong></p></td><td><p>같은 계좌를 두 번 입력</p></td><td><p>중복된 행 삭제 후 재시도</p></td></tr><tr><td><p><strong>App Key, Secret Key가 유효하지 않습니다.</strong></p></td><td><p>잘못된 키 입력 또는 키 만료</p></td><td><p>키움 포털에서 키 재확인 또는 재발급</p></td></tr><tr><td><p><strong>키움 API 서버에 연결할 수 없습니다.</strong></p></td><td><p>인터넷 연결 문제 또는 키움 서버 점검</p></td><td><p>인터넷 연결 확인 후 재시도</p></td></tr><tr><td><p><strong>유효한 App Key, Secret Key를 입력해주세요.</strong></p></td><td><p>유효한 키가 하나도 없음</p></td><td><p>올바른 계좌와 키 입력 후 재시도</p></td></tr></tbody></table>

등록 완료 후 확인 방법

프로그램 재시작 후 메인 화면 <strong>계좌 현황 패널</strong>에서 계좌가 정상 연결되었는지 확인합니다.

![](/images/manual/image-20.png)

계좌 현황 패널에 실제 잔고 데이터가 표시되면 앱키 등록이 완료된 것입니다.

📌 <strong>참고:</strong> 모의투자 계좌는 잔고가 가상 금액으로 표시됩니다.  
처음에는 키움증권에서 지정한 모의투자 초기 자금이 표시됩니다.

# 3. 로그인

※ 회원가입은 하지 않아도 됩니다.

## 3.1 로그인 화면 안내

상단 메뉴의 <strong>[로그인]</strong> 버튼을 클릭하면 로그인 화면이 나타납니다.

화면 구성

![](/images/manual/image-21.png)

<table><tbody><tr><td><p>구성 요소</p></td><td><p>설명</p></td></tr><tr><td><p><strong>고객 ID</strong></p></td><td><p>SageLine 회원 가입 시 등록한 아이디를 입력합니다.</p></td></tr><tr><td><p><strong>비밀번호</strong></p></td><td><p>SageLine 계정 비밀번호를 입력합니다.</p></td></tr><tr><td><p><strong>비밀번호 저장</strong></p></td><td><p>체크 시 다음 실행부터 비밀번호를 자동 입력합니다.</p></td></tr><tr><td><p><strong>자동 로그인</strong></p></td><td><p>체크 시 다음 실행부터 로그인 창 없이 자동으로 인증합니다. (3.2절 참조)</p></td></tr><tr><td><p><strong>로그인</strong></p></td><td><p>입력된 정보로 SageLine 서버에 인증을 요청합니다.</p></td></tr><tr><td><p><strong>닫기</strong></p></td><td><p>로그인 창을 닫습니다. 로그인하지 않아도 일부 기능은 사용 가능합니다.</p></td></tr><tr><td><p><strong>회원가입</strong></p></td><td><p>기본 브라우저를 열어 SageLine 회원가입 페이지(<strong>www.sageline.co.kr</strong>)로 이동합니다.</p></td></tr><tr><td><p><strong>비번찾기</strong></p></td><td><p>비밀번호 재설정 페이지로 이동합니다.</p></td></tr><tr><td><p><strong>홈페이지</strong></p></td><td><p>SageLine 공식 홈페이지(<strong>www.sageline.co.kr</strong>)로 이동합니다.</p></td></tr><tr><td><p><strong>네이버카페</strong></p></td><td><p>SageLine 공식 네이버 카페로 이동합니다.</p></td></tr></tbody></table>

⚠️ <strong>투자 책임 고지</strong> 로그인 화면 하단에 표시된 안내문과 같이, 본 프로그램은 투자 판단 지원 도구이며 사용자의 투자 결정 및 손실에 대한 책임은 사용자 본인에게 있습니다.

## 3.2 자동 로그인 설정 방법

부엉이 트레이더에는 두 가지 독립적인 자동 로그인 기능이 있습니다.

① 부엉이 트레이더 자동 로그인 (<strong>IsAutoLogin</strong>)

SageLine 서버 인증(프로그램 라이선스 확인)을 자동으로 처리합니다.

<strong>설정 방법</strong>

1.  로그인 화면 우측 폼에서 <strong>"자동 로그인"</strong> 체크박스를 활성화합니다.
2.  정상적으로 로그인이 완료되면 해당 설정이 <strong>usersettings.json</strong>에 저장됩니다.

# 4. 메인 화면 안내

## 4.1 메인 화면 전체 구성

부엉이 트레이더 의 메인 화면은 <strong>4개의 영역</strong>으로 구성됩니다.

![](/images/manual/image-22.png)

① 메뉴바

화면 최상단에 위치하며, 프로그램의 모든 기능에 접근할 수 있는 메인 메뉴입니다.

<table><tbody><tr><td><p>메뉴</p></td><td><p>주요 기능</p></td></tr><tr><td><p><strong>종목정보</strong></p></td><td><p>전체 종목정보, 주식기본정보, 주식현재정보, 주식정보요약, 시간외단일가, 변동성완화장치(VI) 발동종목 조회</p></td></tr><tr><td><p><strong>계좌정보</strong></p></td><td><p>예수금 상세 현황, 계좌평가잔고내역, 계좌평가현황 조회</p></td></tr><tr><td><p><strong>조건검색식</strong></p></td><td><p>키움 조건검색식 목록 조회, 실시간 조건검색식 포착 종목 확인</p></td></tr><tr><td><p><strong>자동매매</strong></p></td><td><p>자동매매 전략 생성 (단일종목·키움 조건검색식·사용자 정의), 시스템조건식 만들기, 주문금액 계산식 만들기, 자동매매 현황·주문내역·수익률 조회, 간편 매매</p></td></tr><tr><td><p><strong>차트 데이터</strong></p></td><td><p>분봉·일봉·업종 일봉 차트, 기술적 지표(피벗·볼린저밴드·일목균형표) 조회</p></td></tr><tr><td><p><strong>설정</strong></p></td><td><p>로그인/로그아웃, 키움 API 키 등록, Discord·Telegram 알림 설정, 매매조건 처리시간 모니터, 시스템 환경 설정, 자동시작 스케줄러</p></td></tr><tr><td><p><strong>도움말</strong></p></td><td><p>프로그램 정보, 로그 관리, 후원하기</p></td></tr><tr><td><p><strong>테마</strong></p></td><td><p>Light/Dark 테마 전환 및 포인트 컬러 변경</p></td></tr></tbody></table>

② 대시보드 패널 (상단 4구역)

메뉴바 아래에 가로로 나란히 배치된 4개의 상시 표시 패널입니다. 프로그램을 사용하는 동안 항상 화면에 고정되어 있어 핵심 정보를 한눈에 확인할 수 있습니다.

계좌현황 (좌측 첫 번째)

등록된 계좌 목록과 선택한 계좌의 실시간 평가 현황을 표시합니다.

<table><tbody><tr><td><p>표시 항목</p></td><td><p>설명</p></td></tr><tr><td><p>계좌번호 목록</p></td><td><p>등록된 키움 계좌 목록 (클릭으로 계좌 전환 가능)</p></td></tr><tr><td><p>총매입금액</p></td><td><p>현재 보유 종목들의 총 매입 원가 합계</p></td></tr><tr><td><p>총평가금액</p></td><td><p>현재가 기준 보유 종목들의 총 평가금액</p></td></tr><tr><td><p>총수익률</p></td><td><p>전체 보유 종목 평균 수익률 (%)</p></td></tr><tr><td><p>총평가손익금액</p></td><td><p>총 매입금액 대비 평가 손익</p></td></tr><tr><td><p>예수금</p></td><td><p>계좌 내 주문 가능한 현금 잔액</p></td></tr><tr><td><p>새로고침 버튼 (↺)</p></td><td><p>계좌 정보를 키움 서버에서 다시 조회합니다</p></td></tr></tbody></table>

자동매매 실행 스위치 (두 번째)

등록된 자동매매 전략 목록과 각 전략의 실행 ON/OFF 스위치를 표시합니다.

<table><tbody><tr><td><p>표시 항목</p></td><td><p>설명</p></td></tr><tr><td><p>전략 이름</p></td><td><p>등록된 자동매매 전략의 이름</p></td></tr><tr><td><p>토글 스위치</p></td><td><p>해당 전략의 자동매매 실행 여부 제어 (■ OFF / ● ON)</p></td></tr></tbody></table>

*   스위치를 <strong>ON</strong>으로 전환하면 해당 전략이 즉시 자동매매를 시작합니다.
*   여러 전략을 동시에 활성화할 수 있습니다.
*   등록된 전략이 없으면 목록이 비어 있습니다. <strong>\[자동매매\]</strong> 메뉴에서 전략을 먼저 생성하세요.

일반설정 (세 번째)

거래 안전 한도를 설정하는 패널입니다. 계좌(앱키)별로 적용됩니다.

<table><tbody><tr><td><p>설정 항목</p></td><td><p>설명</p></td></tr><tr><td><p>일일 총 매수 금액 제한</p></td><td><p>하루 동안 자동매매가 매수할 수 있는 최대 금액 (원)</p></td></tr><tr><td><p>일일 동일 종목 매수 횟수 제한</p></td><td><p>계좌별로 하루 동안 동일한 종목에 대해 매수 주문을 넣을 수 있는 최대 횟수를 제한합니다.<br>- 과매수 방지: 전략이 같은 종목에 무한히 분할 매수하는 것을 방지<br>- 버그/오작동 안전망: 전략 로직 오류로 동일 종목에 계속 매수 신호가 발생하는 경우를 방지</p></td></tr><tr><td><p>동일 매수주문 연속 제한</p></td><td><p>완전히 동일한 조건(종목코드, 매수매도구분, 거래구분, 가격, 수량)의 주문이 연속으로 반복될 때 제한합니다.<br>- 주문 폭주 버그 방지: 전략 루프 오류 등으로 동일 주문이 반복 발생하는 경우 차단<br>- API 과호출 방지: 증권사 API(키움) 에 동일 주문이 무분별하게 전달되는 것을 막음</p></td></tr><tr><td><p>저장 버튼</p></td><td><p>변경된 설정을 <strong>usersettings.json</strong>에 저장</p></td></tr></tbody></table>

키움 Rest API 제한 현황 (네 번째)

키움증권 REST API의 현재 사용 제한 현황을 표시합니다.

<table><tbody><tr><td><p>표시 항목</p></td><td><p>설명</p></td></tr><tr><td><p>실시간 주식 체결 데이터 요청 제한(종목수)</p></td><td><p>계좌별로 실시간 주식 체결 정보를 받을 수 있는 최대 종목 수를 제한합니다.<br>- 한 계좌에서 실시간 주식 체결 정보를 받을 수 있는 최대 종목수는 90개입니다.<br>그래서 매수할 수 있는 종목은 최대 90개까지 가능합니다.<br>사용자에게 이런 상황을 알리기 위함입니다.<br><br>※ 키움 REST API 에서 실제 제한은 100개까지 입니다.<br>하지만 프로그램에서 원할한 처리를 위하여 90개로 제한하고 있습니다.</p></td></tr><tr><td><p>실시간 조건검색식 요청 제한</p></td><td><p>현재 활성화된 실시간 조건검색식 수 및 제한값<br>계좌별로 실시간 조건검색식 요청을 보낼 수 있는 최대 개수를 제한됩니다.<br>이부분 키움 REST API 제약 사항입니다.<br>영웅문HTS 에서 조건검색식을 아무리 많이 만들어도 모두 사용할 수 없습니다.<br>프로그램에서는 최대 10개까지만 사용 할 수 있습니다.</p></td></tr></tbody></table>

API 제한 상세 내용은 <strong>15장 키움 API 사용 제한 관리</strong>를 참고하세요.

③ 탭 패널 (하단 중앙)

대시보드 패널 아래에 위치하며, 실시간 거래 현황 및 시스템 정보를 탭으로 구분하여 표시합니다. 각 탭 이름 옆의 <strong>숫자 뱃지</strong>는 해당 탭에 표시된 항목 수를 나타냅니다.

<table><tbody><tr><td><p>탭 이름</p></td><td><p>표시 내용</p></td></tr><tr><td><p><strong>잔고</strong></p></td><td><p>현재 보유 중인 주식 종목 목록과 평가 손익 현황</p></td></tr><tr><td><p><strong>당일매매</strong></p></td><td><p>오늘 발생한 매수·매도 체결 내역 요약</p></td></tr><tr><td><p><strong>체결</strong></p></td><td><p>실시간으로 체결된 주문 목록</p></td></tr><tr><td><p><strong>미체결</strong></p></td><td><p>아직 체결되지 않고 대기 중인 주문 목록</p></td></tr><tr><td><p><strong>조건검색식</strong></p></td><td><p>현재 실시간 조건검색식에 포착된 종목 목록</p></td></tr><tr><td><p><strong>로그</strong></p></td><td><p>프로그램 동작 실시간 로그 출력</p></td></tr><tr><td><p><strong>시스템 정보</strong></p></td><td><p>CPU·메모리 사용량, 서버 연결 상태, 버전 정보 등</p></td></tr></tbody></table>

업종지수 바

탭 패널과 상태바 사이에 위치하며, 주요 시장 지수를 실시간으로 표시합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>KOSPI</strong></p></td><td><p>한국거래소 코스피 지수 및 등락 정보</p></td></tr><tr><td><p><strong>KOSDAK</strong></p></td><td><p>코스닥 지수 및 등락 정보</p></td></tr></tbody></table>

④ 상태바

화면 최하단에 위치하며, 프로그램 동작 상태를 실시간으로 표시합니다.

<strong>좌측 — 상태 메시지</strong>

현재 프로그램이 수행 중인 작업이나 최근 처리 결과를 텍스트로 표시합니다.

<strong>우측 — 신호 표시 영역</strong>

\[👤 아이디\] ● ● ● ● \[후원하기\]

<table><tbody><tr><td><p>신호</p></td><td><p>설명</p></td><td><p>색상 변화</p></td></tr><tr><td><p>① TR 요청 신호</p></td><td><p>키움 API TR(데이터 요청) 발생 시 점등</p></td><td><p>회색 → 초록 → 서서히 회색 (1초)</p></td></tr><tr><td><p>② 서버 Ping 신호</p></td><td><p>키움 서버로부터 Ping 응답 수신 시 점등</p></td><td><p>회색 → 초록 → 서서히 회색 (5초)</p></td></tr><tr><td><p>③ 실시간 데이터 수신 신호</p></td><td><p>WebSocket을 통해 실시간 데이터 수신 시 점등</p></td><td><p>회색 → 초록 → 빠르게 회색 (0.3초)</p></td></tr><tr><td><p>④ 연결 상태 신호</p></td><td><p>키움 서버와의 WebSocket 상시 연결 상태 표시</p></td><td><p>연결됨: 초록 / 끊김: 회색 또는 빨강</p></td></tr></tbody></table>

*   신호등에 마우스를 올리면 <strong>툴팁</strong>으로 해당 신호의 누적 횟수를 확인할 수 있습니다.
*   <strong>④ 연결 상태 신호</strong>가 회색이면 실시간 데이터가 수신되지 않는 상태입니다. 키움 서버 연결을 확인하세요.

<strong>후원하기 버튼</strong>

클릭 시 후원 계좌 정보(카카오뱅크)가 팝업으로 표시됩니다. 도움말 메뉴에서도 동일하게 접근할 수 있습니다.

## 4.2 메뉴 및 탭 설명

### 4.2.1 메뉴바 상세 설명

메인 화면 최상단에 위치한 메뉴바에서 프로그램의 모든 기능 화면을 열 수 있습니다.

📌 종목정보

주식 종목의 기본 정보와 현재가 시세를 조회하는 기능들이 모여 있습니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td><td><p>관련 장</p></td></tr><tr><td><p>전체 종목정보</p></td><td><p>상장된 전체 종목의 코드·이름 목록 조회</p></td><td></td></tr><tr><td><p>주식기본정보</p></td><td><p>종목별 상장일, 자본금, 액면가 등 기본 정보 조회</p></td><td></td></tr><tr><td><p>주식현재정보</p></td><td><p>선택 종목의 실시간 현재가 및 호가 조회</p></td><td></td></tr><tr><td><p>주식정보요약</p></td><td><p>종목의 핵심 지표를 요약하여 조회</p></td><td></td></tr><tr><td><p>시간외단일가</p></td><td><p>장 종료 후 시간외 단일가 시세 조회</p></td><td></td></tr></tbody></table>

📌 계좌정보

키움증권 계좌의 잔고, 평가 손익, 예수금 현황을 상세 조회하는 기능들이 모여 있습니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td><td><p>관련 장</p></td></tr><tr><td><p>예수금 상세 현황</p></td><td><p>출금 가능 금액, 주문 가능 금액 등 예수금 세부 현황</p></td><td></td></tr><tr><td><p>계좌평가잔고내역</p></td><td><p>보유 종목별 평가금액 및 손익 목록</p></td><td></td></tr><tr><td><p>계좌평가현황</p></td><td><p>종목별 평가 손익 현황 요약</p></td><td></td></tr></tbody></table>

📌 조건검색식

키움증권 HTS에 등록된 조건검색식을 불러와 실시간으로 포착 종목을 확인하는 기능입니다.

⚠️ 메뉴 항목이 <strong>빨간색</strong>으로 표시된 것은 키움 API 사용 횟수 제한에 민감한 기능임을 나타냅니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td><td><p>관련 장</p></td></tr><tr><td><p>키움 조건검색식</p></td><td><p>키움 HTS에 저장된 조건검색식 목록을 불러와 조회</p></td><td></td></tr><tr><td><p>키움 조건검색식 (실시간)</p></td><td><p>조건검색식에 실시간으로 편입/이탈되는 종목을 모니터링</p></td><td></td></tr></tbody></table>

📌 자동매매

자동매매 전략을 설계하고 실행하는 프로그램의 핵심 기능들이 집약되어 있습니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td><td><p>관련 장</p></td></tr><tr><td><p><strong>간편 매매</strong></p></td><td><p>간단한 수동 매수·매도 주문 실행 화면</p></td><td></td></tr><tr><td><p><strong>자동매매 만들기 (단일종목)</strong></p></td><td><p>특정 종목 하나를 대상으로 자동매매 전략 생성</p></td><td></td></tr><tr><td><p><strong>자동매매 만들기 (키움 조건검색식)</strong></p></td><td><p>키움 조건검색식에 편입되는 종목을 자동 선정하는 전략 생성</p></td><td></td></tr><tr><td><p><strong>자동매매 만들기 (사용자 정의)</strong></p></td><td><p>사용자가 직접 종목 목록을 지정하는 전략 생성</p></td><td></td></tr><tr><td><p><strong>시스템조건식 만들기</strong></p></td><td><p>매수·매도 발동 조건을 수식으로 정의하는 편집기</p></td><td></td></tr><tr><td><p><strong>주문금액 계산식 만들기</strong></p></td><td><p>주문 금액을 수식으로 계산하는 편집기</p></td><td></td></tr><tr><td><p><strong>자동매매 현황</strong></p></td><td><p>현재 실행 중인 전략의 보유 종목과 손익 현황</p></td><td></td></tr><tr><td><p><strong>자동매매 주문 내역</strong></p></td><td><p>자동매매로 처리된 과거 주문 이력 조회</p></td><td></td></tr></tbody></table>

📌 차트 데이터

종목과 업종의 과거 가격 데이터를 조회합니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td><td><p>관련 장</p></td></tr><tr><td><p>분봉 차트 데이터</p></td><td><p>1~60분 단위 분봉 가격 데이터 조회</p></td><td></td></tr><tr><td><p>일봉 차트 데이터</p></td><td><p>일별 시가·고가·저가·종가 데이터 조회</p></td><td></td></tr><tr><td><p>업종 일봉 차트 데이터</p></td><td><p>업종 코드별 일봉 데이터 조회</p></td><td></td></tr></tbody></table>

💡 틱·주봉·월봉 차트는 현재 준비 중인 기능으로 추후 업데이트될 예정입니다.

📌 설정

프로그램 운영에 필요한 계정 및 API 키 등록과 자동화 스케줄을 설정합니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td><td><p>관련 장</p></td></tr><tr><td><p>키움증권 REST API KEY 등록</p></td><td><p>키움 Rest API 앱키·시크릿키·계좌번호 등록 및 관리</p></td><td></td></tr><tr><td><p>Discord·Telegram 알림 설정</p></td><td><p>매매 알림을 Discord/Telegram으로 전송하도록 설정</p></td><td><p>9장</p></td></tr><tr><td><p>자동시작 스케줄러</p></td><td><p>자동매매 시작·종료 시간 및 요일 설정</p></td><td></td></tr></tbody></table>

📌 도움말

프로그램 정보 확인과 지원 관련 기능입니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td></tr><tr><td><p>프로그램 정보</p></td><td><p>현재 설치된 부엉이 트레이더 의 버전 정보와 라이선스 안내 표시</p></td></tr><tr><td><p>Log 관리</p></td><td><p>날짜별 과거 로그 파일 조회 및 서버 업로드 기능</p></td></tr><tr><td><p>후원하기</p></td><td><p>SageLine 후원 계좌 정보(카카오뱅크) 팝업 표시</p></td></tr></tbody></table>

📌 테마

프로그램 전체 화면의 색상 테마를 변경합니다. 설정은 즉시 적용됩니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td></tr><tr><td><p>Light Theme</p></td><td><p>흰 배경의 밝은 테마로 전환</p></td></tr><tr><td><p>Dark Theme</p></td><td><p>어두운 배경의 다크 테마로 전환</p></td></tr><tr><td><p><em>(구분선)</em></p></td><td></td></tr><tr><td><p>Primary : Blue</p></td><td><p>포인트 컬러를 파란색으로 변경</p></td></tr><tr><td><p>Primary : Green</p></td><td><p>포인트 컬러를 초록색으로 변경</p></td></tr><tr><td><p>Primary : Orange</p></td><td><p>포인트 컬러를 주황색으로 변경</p></td></tr></tbody></table>

💡 야간 장시간 모니터링 시에는 <strong>Dark Theme</strong>를 사용하면 눈의 피로를 줄일 수 있습니다. 테마 변경 상세 방법은 <strong>4.4절</strong>을 참고하세요.

### 4.2.2 탭 패널 상세 설명

메인 화면 하단 탭 패널에는 총 7개의 탭이 있으며, 각 탭 이름 옆의 <strong>숫자 뱃지(🔢)</strong> 는 현재 해당 탭에 표시된 항목의 총 건수를 나타냅니다. 숫자가 변하면 새로운 데이터가 수신된 것입니다.

🗂️ 잔고 탭

현재 보유 중인 주식 종목 목록을 실시간으로 표시합니다.

<table><tbody><tr><td><p>컬럼명</p></td><td><p>설명</p></td></tr><tr><td><p>종목코드</p></td><td><p>보유 종목의 6자리 고유 코드</p></td></tr><tr><td><p>종목명</p></td><td><p>보유 종목 이름</p></td></tr><tr><td><p>보유수량</p></td><td><p>현재 보유 중인 주식 수</p></td></tr><tr><td><p>현재가</p></td><td><p>실시간 현재 주가 (원)</p></td></tr><tr><td><p>매입단가</p></td><td><p>매수 시 평균 단가 (원)</p></td></tr><tr><td><p>매입금액</p></td><td><p>보유수량 × 매입단가 (원)</p></td></tr><tr><td><p>평가금액</p></td><td><p>보유수량 × 현재가 (원)</p></td></tr><tr><td><p>손익률</p></td><td><p>(현재가 - 매입단가) / 매입단가 × 100 (%)</p></td></tr><tr><td><p>평가손익</p></td><td><p>평가금액 - 매입금액 (원)</p></td></tr></tbody></table>

*   우측 상단의 <strong>↺ 새로고침</strong> 버튼을 누르면 키움 서버에서 잔고를 다시 조회합니다.
*   보유 종목이 없으면 목록이 비어 있습니다.

🗂️ 당일매매 탭

오늘 하루 동안 발생한 매수·매도 거래를 종목별로 집계하여 표시합니다.

<table><tbody><tr><td><p>컬럼명</p></td><td><p>설명</p></td></tr><tr><td><p>종목코드</p></td><td><p>거래된 종목 코드</p></td></tr><tr><td><p>종목명</p></td><td><p>거래된 종목 이름</p></td></tr><tr><td><p>매수수량</p></td><td><p>당일 매수 체결 수량</p></td></tr><tr><td><p>매수평균가</p></td><td><p>당일 매수 평균 체결가 (원)</p></td></tr><tr><td><p>매도수량</p></td><td><p>당일 매도 체결 수량</p></td></tr><tr><td><p>매도평균가</p></td><td><p>당일 매도 평균 체결가 (원)</p></td></tr><tr><td><p>손익률</p></td><td><p>매도평균가 기준 수익률 (%)</p></td></tr><tr><td><p>손익금액</p></td><td><p>당일 해당 종목의 실현 손익 (원)</p></td></tr></tbody></table>

*   매수만 하고 매도하지 않은 종목도 표시됩니다.
*   당일 장 종료 후 다음 날 초기화됩니다.

🗂️ 체결 탭

당일 체결된 주문 내역을 건별로 실시간 표시합니다. 자동매매와 수동 주문 모두 포함됩니다.

<table><tbody><tr><td><p>컬럼명</p></td><td><p>설명</p></td></tr><tr><td><p>주문번호</p></td><td><p>키움증권이 부여한 고유 주문 번호</p></td></tr><tr><td><p>종목코드</p></td><td><p>주문 종목 코드</p></td></tr><tr><td><p>종목명</p></td><td><p>주문 종목 이름</p></td></tr><tr><td><p>주문구분</p></td><td><p>매수 / 매도 구분</p></td></tr><tr><td><p>주문가격</p></td><td><p>요청한 주문 가격 (원)</p></td></tr><tr><td><p>주문수량</p></td><td><p>요청한 주문 수량</p></td></tr><tr><td><p>체결가</p></td><td><p>실제 체결된 가격 (원)</p></td></tr><tr><td><p>체결량</p></td><td><p>실제 체결된 수량</p></td></tr><tr><td><p>미체결수량</p></td><td><p>아직 체결되지 않은 잔여 수량</p></td></tr><tr><td><p>당일매매수수료</p></td><td><p>해당 거래에서 발생한 매매 수수료 (원)</p></td></tr><tr><td><p>당일매매세금</p></td><td><p>해당 거래에서 발생한 매매 세금 (원)</p></td></tr><tr><td><p>매매구분</p></td><td><p>자동매매 / 수동 등 거래 종류</p></td></tr><tr><td><p>주문시간</p></td><td><p>주문이 접수된 시각</p></td></tr></tbody></table>

🗂️ 미체결 탭

주문을 냈으나 아직 체결되지 않고 대기 중인 주문 목록을 실시간으로 표시합니다.

<table><tbody><tr><td><p>컬럼명</p></td><td><p>설명</p></td></tr><tr><td><p>주문번호</p></td><td><p>키움증권이 부여한 고유 주문 번호</p></td></tr><tr><td><p>종목코드</p></td><td><p>주문 종목 코드</p></td></tr><tr><td><p>종목명</p></td><td><p>주문 종목 이름</p></td></tr><tr><td><p>주문구분</p></td><td><p>매수 / 매도 구분</p></td></tr><tr><td><p>주문가격</p></td><td><p>요청한 주문 가격 (원)</p></td></tr><tr><td><p>주문수량</p></td><td><p>요청한 전체 주문 수량</p></td></tr><tr><td><p>체결가</p></td><td><p>부분 체결된 경우 체결 가격 (원)</p></td></tr><tr><td><p>체결량</p></td><td><p>부분 체결된 수량</p></td></tr><tr><td><p>미체결수량</p></td><td><p>아직 체결되지 않은 잔여 수량</p></td></tr><tr><td><p>당일매매수수료</p></td><td><p>부분 체결분에 대한 수수료 (원)</p></td></tr><tr><td><p>당일매매세금</p></td><td><p>부분 체결분에 대한 세금 (원)</p></td></tr><tr><td><p>매매구분</p></td><td><p>자동매매 / 수동 등 거래 종류</p></td></tr><tr><td><p>주문시간</p></td><td><p>주문이 접수된 시각</p></td></tr></tbody></table>

💡 지정가 주문 시 원하는 가격에 매수·매도가 이루어지지 않으면 이 탭에 미체결 상태로 남습니다. 주문 취소는 <strong>10.4 주문 취소 방법</strong>을 참고하세요.

🗂️ 조건검색식 탭

현재 활성화된 실시간 조건검색식에 편입되거나 이탈한 종목 이력을 실시간으로 표시합니다. 화면은 <strong>좌측 목록</strong>과 <strong>우측 세부내역</strong> 두 영역으로 구성되며, 가운데 구분선을 드래그하여 비율을 조절할 수 있습니다.

<strong>좌측 — 포착 종목 목록</strong>

<table><tbody><tr><td><p>컬럼명</p></td><td><p>설명</p></td></tr><tr><td><p>일련번호</p></td><td><p>포착 순서 번호</p></td></tr><tr><td><p>조건검색식 이름</p></td><td><p>해당 종목을 포착한 조건검색식 이름</p></td></tr><tr><td><p>종목코드</p></td><td><p>포착된 종목 코드</p></td></tr><tr><td><p>종목명</p></td><td><p>포착된 종목 이름</p></td></tr><tr><td><p>매수/매도</p></td><td><p>편입(매수 신호) 또는 이탈(매도 신호) 구분</p></td></tr><tr><td><p>검색일시</p></td><td><p>조건검색식에 처음 포착된 시각 (HH:mm:ss)</p></td></tr><tr><td><p>편입횟수</p></td><td><p>해당 종목이 조건검색식에 편입된 누적 횟수</p></td></tr><tr><td><p>이탈횟수</p></td><td><p>해당 종목이 조건검색식에서 이탈한 누적 횟수</p></td></tr></tbody></table>

<strong>우측 — 세부내역</strong>

좌측 목록에서 종목을 선택하면 해당 종목의 편입·이탈 세부 기록이 우측에 표시됩니다.

<table><tbody><tr><td><p>컬럼명</p></td><td><p>설명</p></td></tr><tr><td><p>검색종류</p></td><td><p>실시간 조건 신호의 유형</p></td></tr><tr><td><p>매도/매수</p></td><td><p>편입 또는 이탈 구분</p></td></tr><tr><td><p>생성일</p></td><td><p>해당 이벤트가 발생한 시각 (HH:mm:ss)</p></td></tr></tbody></table>

🗂️ 로그 탭

프로그램의 동작 로그를 실시간으로 출력합니다.

*   API 요청·응답, 주문 실행, 오류 발생 등의 내역이 시간 순서로 누적됩니다.
*   로그 내용을 마우스로 선택하여 복사할 수 있습니다.
*   스크롤을 올려 이전 로그를 확인할 수 있습니다.
*   과거 날짜의 로그 파일은 <strong>\[도움말\] → \[Log 관리\]</strong> 에서 조회하세요.

🗂️ 시스템 정보 탭

프로그램의 내부 성능 지표를 실시간으로 표시합니다.

<strong>실시간 주식 체결 데이터 지연 정보 (최근 100만 건 기준)</strong>

WebSocket으로 수신된 실시간 체결 데이터의 처리 지연 시간 분포를 구간별로 표시합니다.

<table><tbody><tr><td><p>지연 구간</p></td><td><p>의미</p></td></tr><tr><td><p><strong>0 ~ 1,000ms</strong></p></td><td><p>정상적인 실시간 처리 범위</p></td></tr><tr><td><p><strong>1,000 ~ 2,000ms</strong></p></td><td><p>약간의 지연 발생 — 네트워크 또는 시스템 부하 확인 권장</p></td></tr><tr><td><p><strong>2,000 ~ 5,000ms</strong></p></td><td><p>처리 지연 심화 — 자동매매 타이밍에 영향을 줄 수 있음</p></td></tr><tr><td><p><strong>5,000ms 이상</strong></p></td><td><p>심각한 지연 — 네트워크 상태 및 PC 리소스 점검 필요</p></td></tr></tbody></table>

💡 지연 건수가 많거나 5,000ms 이상 구간이 증가하는 경우 <strong>17장 시스템 정보 확인</strong>을 참고하여 원인을 점검하세요.

## 4.3 상태 표시 영역 읽는 방법 (연결 상태, 로그인 상태)

상태 표시 영역은 메인 화면 <strong>최하단 상태바</strong>에 위치하며, 좌측과 우측 두 부분으로 나뉩니다.

\[상태 메시지\] \[👤 아이디\] ① ② ③ ④ \[후원하기\]

좌측 — 상태 메시지

프로그램이 현재 수행 중인 작업 또는 가장 최근의 처리 결과를 텍스트로 표시합니다.

<table><tbody><tr><td><p>표시 예시</p></td><td><p>의미</p></td></tr><tr><td><p><strong>Ready</strong></p></td><td><p>프로그램이 정상 대기 중 (초기 상태)</p></td></tr><tr><td><p><strong>로그인 중...</strong></p></td><td><p>SageLine 서버 인증 처리 중</p></td></tr><tr><td><p><strong>키움 API 연결 중...</strong></p></td><td><p>키움 REST API 토큰 발급 요청 중</p></td></tr><tr><td><p><strong>주문 처리 중...</strong></p></td><td><p>매수 또는 매도 주문 전송 중</p></td></tr><tr><td><p>오류 메시지 텍스트</p></td><td><p>오류 발생 시 내용 요약 표시</p></td></tr></tbody></table>

우측 — 신호 표시 영역 상세 안내

우측에는 <strong>로그인한 계정 정보</strong>와 <strong>4개의 신호등 원형 아이콘(●)</strong> 이 순서대로 표시됩니다.

👤 아이디 표시

\[👤\] 홍길동

*   현재 SageLine 서비스에 로그인된 계정의 <strong>사용자 ID</strong>를 표시합니다.
*   로그인하지 않은 상태이면 <strong>Guest</strong>로 표시됩니다.
*   아이디 변경은 <strong>\[설정\] → \[로그인\]</strong> 을 통해 다시 로그인하면 갱신됩니다.

① TR 요청 신호등

● ← TR 요청 신호

키움증권 REST API에 <strong>데이터 조회 요청(TR)</strong> 이 발생할 때마다 점등됩니다.

<table><tbody><tr><td><p>상태</p></td><td><p>색상</p></td><td><p>설명</p></td></tr><tr><td><p><strong>대기</strong></p></td><td><p>⚫ 회색 (DimGray)</p></td><td><p>TR 요청 없음</p></td></tr><tr><td><p><strong>점등</strong></p></td><td><p>🟢 초록 (Lime)</p></td><td><p>TR 요청 발생</p></td></tr><tr><td><p><strong>소등</strong></p></td><td><p>⚫ 서서히 회색으로 복귀 (1초)</p></td><td><p>요청 완료 후 자동 복귀</p></td></tr></tbody></table>

*   마우스를 올리면 툴팁으로 <strong>"TR 요청 N건"</strong> (누적 횟수)이 표시됩니다.
*   장 중 조회 기능 사용 시 활발하게 깜빡입니다.
*   이 신호가 전혀 점등되지 않으면 API 요청 자체가 발생하지 않는 상태입니다.

② 키움 서버 Ping 수신 신호등

● ← Ping 수신 신호

키움 서버가 보내는 <strong>WebSocket Ping 메시지</strong>를 수신할 때 점등됩니다. WebSocket 연결이 살아있음을 확인하는 심박 신호입니다.

<table><tbody><tr><td><p>상태</p></td><td><p>색상</p></td><td><p>설명</p></td></tr><tr><td><p><strong>대기</strong></p></td><td><p>⚫ 회색</p></td><td><p>Ping 수신 없음</p></td></tr><tr><td><p><strong>점등</strong></p></td><td><p>🟢 초록</p></td><td><p>Ping 수신</p></td></tr><tr><td><p><strong>소등</strong></p></td><td><p>⚫ 서서히 회색으로 복귀 (5초)</p></td><td><p>자동 복귀</p></td></tr></tbody></table>

*   마우스를 올리면 툴팁으로 <strong>"키움 서버 Ping 수신 N건"</strong> 이 표시됩니다.
*   키움 서버와 연결된 정상 상태에서는 일정 주기로 자동 점등됩니다.
*   Ping이 <strong>수 분 이상 점등되지 않으면</strong> 연결이 단절된 상태일 수 있습니다. ④ 연결 상태 신호등도 함께 확인하세요.

③ 실시간 데이터 수신 신호등

● ← 실시간 데이터 수신 신호

WebSocket을 통해 <strong>실시간 시세·체결 데이터</strong>가 수신될 때마다 점등됩니다.

<table><tbody><tr><td><p>상태</p></td><td><p>색상</p></td><td><p>설명</p></td></tr><tr><td><p><strong>대기</strong></p></td><td><p>⚫ 회색</p></td><td><p>실시간 데이터 없음</p></td></tr><tr><td><p><strong>점등</strong></p></td><td><p>🟢 초록</p></td><td><p>데이터 수신</p></td></tr><tr><td><p><strong>소등</strong></p></td><td><p>⚫ 매우 빠르게 회색 복귀 (0.3초)</p></td><td><p>자동 복귀</p></td></tr></tbody></table>

*   마우스를 올리면 툴팁으로 <strong>"실시간 데이터 수신 N건"</strong> 이 표시됩니다.
*   자동매매 실행 중, 또는 실시간 조건검색식이 활성화된 상태에서 빠르게 깜빡입니다.
*   장 중에 이 신호가 <strong>전혀 점등되지 않으면</strong> 실시간 시세 수신이 중단된 상태입니다.

④ 통신 연결 상태 신호등

● ← 연결 상태 신호 (펄스 애니메이션)

키움 서버와의 <strong>WebSocket 상시 연결 상태</strong>를 나타냅니다. 1.5초 주기로 색상이 천천히 펄스(점멸)되어 현재 연결 상태를 직관적으로 알 수 있습니다.

<table><tbody><tr><td><p>연결 상태</p></td><td><p>색상</p></td><td><p>설명</p></td><td><p>조치 방법</p></td></tr><tr><td><p><strong>전체 연결</strong> (<strong>AllConnections</strong>)</p></td><td><p>🟢 초록 (Lime)</p></td><td><p>키움 서버 WebSocket 정상 연결</p></td><td><p>— (정상 상태)</p></td></tr><tr><td><p><strong>일부 연결</strong> (<strong>PartialConnections</strong>)</p></td><td><p>🟠 주황 (Orange)</p></td><td><p>여러 연결 채널 중 일부만 연결됨</p></td><td><p>네트워크 상태 점검</p></td></tr><tr><td><p><strong>연결 없음</strong> (<strong>NotConnections</strong>)</p></td><td><p>🔴 빨강 (Red)</p></td><td><p>WebSocket 연결 전혀 없음</p></td><td><p>아래 조치 방법 참고</p></td></tr></tbody></table>

<strong>④ 신호등이 빨간색일 때 점검 순서:</strong>

1.  인터넷 연결이 정상인지 확인합니다.
2.  <strong>\[설정\] → \[키움증권 REST API KEY 등록\]</strong> 에서 앱키와 시크릿키가 올바르게 등록되어 있는지 확인합니다.
3.  키움증권 서버 점검 시간이 아닌지 확인합니다.
4.  프로그램을 완전히 종료 후 재시작합니다.

신호등 전체 요약

\[👤 아이디\] ① ② ③ ④

TR Ping 실시간 연결

요청 수신 데이터 상태

<table><tbody><tr><td><p>신호</p></td><td><p>점등 조건</p></td><td><p>점등 지속 시간</p></td><td><p>건강한 상태</p></td></tr><tr><td><p>① TR 요청</p></td><td><p>데이터 조회 API 호출 시</p></td><td><p>1초 후 소등</p></td><td><p>조회 시마다 깜빡임</p></td></tr><tr><td><p>② Ping 수신</p></td><td><p>서버 Ping 수신 시</p></td><td><p>5초 후 소등</p></td><td><p>주기적으로 깜빡임</p></td></tr><tr><td><p>③ 실시간 수신</p></td><td><p>WebSocket 데이터 수신 시</p></td><td><p>0.3초 후 소등</p></td><td><p>빠르게 빈번히 깜빡임</p></td></tr><tr><td><p>④ 연결 상태</p></td><td><p>항상 표시 (펄스 반복)</p></td><td><p>상시 펄스</p></td><td><p>🟢 초록 펄스</p></td></tr></tbody></table>

## 4.4 테마 변경 방법

부엉이 트레이더 은 <strong>Material Design</strong> 기반의 테마 엔진을 사용하며, 메뉴바의 <strong>\[테마\]</strong> 메뉴에서 화면 전체의 색상을 즉시 변경할 수 있습니다.

배경 테마 전환

배경색과 전체 색조를 변경합니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>결과</p></td><td><p>추천 사용 환경</p></td></tr><tr><td><p><strong>Light Theme</strong></p></td><td><p>흰색 배경, 어두운 텍스트의 밝은 화면</p></td><td><p>낮 시간, 밝은 환경</p></td></tr><tr><td><p><strong>Dark Theme</strong></p></td><td><p>어두운 배경, 밝은 텍스트의 다크 화면</p></td><td><p>야간 모니터링, 어두운 환경</p></td></tr></tbody></table>

<strong>변경 방법:</strong>

1.  메뉴바에서 <strong>\[테마\]</strong> 를 클릭합니다.
2.  <strong>\[Light Theme\]</strong> 또는 <strong>\[Dark Theme\]</strong> 를 클릭합니다.
3.  클릭 즉시 전체 화면 테마가 전환됩니다.

포인트 컬러 변경

메뉴, 버튼, 탭 등 강조 색상(포인트 컬러)을 변경합니다. 배경 테마(Light/Dark)와 독립적으로 적용됩니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>색상</p></td><td><p>RGB 값</p></td></tr><tr><td><p><strong>Primary : Blue</strong></p></td><td><p>🔵 인디고 블루</p></td><td><p><strong>RGB(58, 80, 178)</strong></p></td></tr><tr><td><p><strong>Primary : Green</strong></p></td><td><p>🟢 초록</p></td><td><p><strong>RGB(0, 128, 0)</strong></p></td></tr><tr><td><p><strong>Primary : Orange</strong></p></td><td><p>🟠 진한 주황</p></td><td><p><strong>DarkOrange</strong></p></td></tr></tbody></table>

<strong>변경 방법:</strong>

1.  메뉴바에서 <strong>\[테마\]</strong> 를 클릭합니다.
2.  <strong>\[Primary : Blue\]</strong>, <strong>\[Primary : Green\]</strong>, <strong>\[Primary : Orange\]</strong> 중 원하는 항목을 클릭합니다.
3.  메뉴바, 탭, 버튼 등의 강조 색상이 즉시 변경됩니다.

테마 조합 예시

<table><tbody><tr><td><p>조합</p></td><td><p>분위기</p></td></tr><tr><td><p>Light Theme + Blue</p></td><td><p>기본 설정, 깔끔하고 전문적인 느낌</p></td></tr><tr><td><p>Dark Theme + Blue</p></td><td><p>야간 모니터링에 적합, 눈의 피로 최소화</p></td></tr><tr><td><p>Dark Theme + Green</p></td><td><p>주식 거래 특유의 트레이딩 화면 분위기</p></td></tr><tr><td><p>Light Theme + Orange</p></td><td><p>따뜻하고 활동적인 느낌</p></td></tr></tbody></table>

⚠️ <strong>주의</strong>: 현재 선택한 테마 설정은 프로그램 재시작 시 초기화됩니다. 매번 원하는 테마를 다시 선택하거나, 향후 업데이트를 통해 설정 저장 기능이 추가될 예정입니다.
# 5. 자동 매매 전략 설정

## 5.1 자동 매매 전략이란?

### 1. 개요

<strong>자동 매매 전략</strong>은 사용자가 사전에 정의한 규칙에 따라 <strong>종목 선정 → 매수 → 매도</strong>의 전 과정을 프로그램이 스스로 수행하도록 하는 '투자 알고리즘 묶음'입니다. 전략을 한 번 설정해 두면, 장중에 사용자가 PC 앞에 없어도 프로그램이 실시간으로 시장을 감시하며 조건 충족 시 즉시 주문을 실행합니다.

![](/images/manual/image-23.png)

### 2. 전략의 2계층 구조

부엉이 트레이더 의 자동 매매는 <strong>매매 전략(TradeStrategy)</strong> 과 그 하위의 <strong>주문 전략(OrderStrategy)</strong> 으로 나뉘어 있습니다.

매매 전략 (TradeStrategy) ← "무엇을 어떤 계좌로 거래하는가?"

├── 주문 전략 1 (OrderStrategy) ← "매수: 어떤 조건에서 얼마나 살 것인가?"

├── 주문 전략 2 (OrderStrategy) ← "매도: 어떤 조건에서 얼마나 팔 것인가?"

└── 거래 제외 조건 ← "어떤 종목은 거래하지 않을 것인가?"

### 3. 주요 설정 항목 가이드

#### ① 매매 전략 (상위 단계: 운영 환경 설정)

매매 전략은 거래의 전체 틀을 정의합니다.

<table><tbody><tr><td><p>설정 항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>전략 이름</strong></p></td><td><p>전략을 구분하는 이름</p></td></tr><tr><td><p><strong>연결 계좌</strong></p></td><td><p>이 전략이 주문을 전송할 증권 계좌</p></td></tr><tr><td><p><strong>종목 선정 방식</strong></p></td><td><p>어떻게 거래 대상 종목을 고를 것인지 (아래 별도 설명)</p></td></tr><tr><td><p><strong>보유 종목 수 제한</strong></p></td><td><p>이 전략이 동시에 보유할 수 있는 최대 종목 수</p></td></tr><tr><td><p><strong>당일 동일 종목 재매수 제한</strong></p></td><td><p>오늘 이미 매도한 종목을 다시 매수하지 않도록 제한</p></td></tr><tr><td><p><strong>자동 거래 시간대</strong></p></td><td><p>자동 매수·매도가 실행될 허용 시간 구간 (A/B 2개 구간 설정 가능)</p></td></tr><tr><td><p><strong>지정 일시 자동 완료</strong></p></td><td><p>설정한 시각이 되면 전략 실행을 자동으로 종료</p></td></tr><tr><td><p><strong>지정 일시 일괄 매도</strong></p></td><td><p>설정한 시각이 되면 보유 종목을 일괄 매도</p></td></tr></tbody></table>

#### ② 주문 전략 (하위 단계: 실행 규칙 설정)

주문 전략은 하나의 매수 또는 매도 규칙을 나타냅니다. 하나의 매매 전략 안에 여러 개의 주문 전략을 추가할 수 있으며, 각각 독립적으로 동작합니다.

<table><tbody><tr><td><p>설정 항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>준비 조건</strong></p></td><td><p>주문을 '대기' 상태로 만들기 위한 선행 조건 (키움 조건검색식 또는 조건 표현식)</p></td></tr><tr><td><p><strong>실행 조건</strong></p></td><td><p>준비 조건이 충족된 이후 실제 주문을 전송하기 위한 최종 조건</p></td></tr><tr><td><p><strong>매수/매도 구분</strong></p></td><td><p>이 주문 전략이 매수인지 매도인지</p></td></tr><tr><td><p><strong>주문 유형</strong></p></td><td><p>시장가, 지정가 등 주문 방식</p></td></tr><tr><td><p><strong>호가 기준 틱 조정</strong></p></td><td><p>현재가 기준으로 ±N 틱 떨어진 가격에 지정가 주문 전송</p></td></tr><tr><td><p><strong>주문 금액 표현식</strong></p></td><td><p>이 주문에 사용할 금액을 수식으로 정의 (고정 금액, 비율, 잔고 연동 등)</p></td></tr><tr><td><p><strong>실행 주기</strong></p></td><td><p>조건 충족 시 1회만 실행할지, 반복 실행할지</p></td></tr></tbody></table>

### 4. 종목 선정 방식 (3가지)

매매 전략이 어떤 종목을 감시하고 거래할지를 결정하는 방식입니다.

<table><tbody><tr><td><p>방식</p></td><td><p>설명</p></td></tr><tr><td><p><strong>키움 조건검색식</strong></p></td><td><p>키움증권 HTS에서 작성한 조건검색식을 기반으로 종목을 자동 선정합니다. 조건에 '포착'되거나 '편입'된 종목을 거래 대상으로 삼습니다.</p></td></tr><tr><td><p><strong>단일 종목</strong></p></td><td><p>사용자가 직접 특정 종목 코드를 지정합니다. 해당 종목만 감시하고 거래합니다.</p></td></tr><tr><td><p><strong>사용자 정의</strong></p></td><td><p>별도 제작</p></td></tr></tbody></table>

조건 표현식이란?

주문 전략의 준비/실행 조건에는 <strong>조건 표현식</strong>을 사용할 수 있습니다. 조건 표현식은 현재가, 등락률, 거래량, 이동평균 등 다양한 시세 데이터를 수식으로 조합하여 사용자 고유의 매매 기준을 정밀하게 표현하는 기능입니다.

예) <strong>A: 현재가 &gt; 전일종가 * 1.03</strong> → "전일 종가 대비 3% 이상 상승했을 때"

조건 표현식은 별도의 <strong>조건 표현식 편집기</strong>에서 작성하고 저장하며, 여러 전략에 재사용할 수 있습니다.

### 5. 한눈에 보는 전략 실행 흐름

<strong>\[전략 시작\]</strong>

<strong>↓</strong>

<strong>종목 선정 방식에 따라 감시 대상 종목 결정</strong>

<strong>↓</strong>

<strong>실시간 시세 수신 (체결가, 호가 등)</strong>

<strong>↓</strong>

<strong>주문 전략의 준비 조건 충족 여부 확인</strong>

<strong>↓ (충족 시)</strong>

<strong>주문 전략의 실행 조건 충족 여부 확인</strong>

<strong>↓ (충족 시)</strong>

<strong>거래 제외 조건 검사 (해당 종목이 제외 대상인지 확인)</strong>

<strong>↓ (제외 아닌 경우)</strong>

<strong>보유 수 제한, 재매수 제한, 일일 한도 검사</strong>

<strong>↓ (통과 시)</strong>

<strong>주문 금액 계산 → 주문 전송 (매수 또는 매도)</strong>

<strong>↓</strong>

<strong>체결 결과 수신 및 포지션 업데이트</strong>

<strong>↓</strong>

<strong>지정 시각이 되면 일괄 매도 또는 전략 자동 완료</strong>

여러 전략 동시 운영

부엉이 트레이더 은 복수의 매매 전략을 동시에 실행할 수 있습니다. 각 전략은 서로 다른 계좌, 다른 종목, 다른 시간대로 독립적으로 구성하고 실행할 수 있습니다.

예를 들어 아래와 같이 구성하는 것도 가능합니다:

*   <strong>전략 A</strong>: 오전 9시~10시, 조건검색식 기반, 계좌 1번
*   <strong>전략 B</strong>: 오후 2시~3시, 조건검색식 기반, 계좌 2번
*   <strong>전략 C</strong>: 종일, 단일 종목(삼성전자), 계좌 1번

각 전략의 ON/OFF는 <strong>자동 매매 스위치 대시보드</strong>에서 개별적으로 제어할 수 있습니다.

## 5.2 매매 전략 목록 확인 방법

### 5.2.1 매매 전략 목록 화면 열기

메인 메뉴에서 <strong>\[자동매매\] → \[자동매매 편집기\]</strong> 를 클릭하면 자동매매 편집기 창이 열립니다. 창의 왼쪽 패널에 현재 등록된 모든 매매 전략 목록이 표시됩니다.

![](/images/manual/image-24.png)

### 5.2.2 목록 구성 요소

매매 전략 목록은 등록된 전략을 한 행씩 나열하며, 각 행에는 다음 정보가 표시됩니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>전략 이름</strong></p></td><td><p>사용자가 부여한 매매 전략의 명칭</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>해당 전략이 연동된 거래 계좌</p></td></tr><tr><td><p><strong>종목 선정 방식</strong></p></td><td><p><strong>키움조건검색식</strong> / <strong>단일종목</strong> / <strong>사용자정의</strong> 중 하나</p></td></tr><tr><td><p><strong>사용 여부</strong></p></td><td><p><strong>사용중</strong> / <strong>사용중지</strong></p></td></tr><tr><td><p><strong>실행 여부</strong></p></td><td><p><strong>실행중</strong> / <strong>실행중지</strong></p></td></tr><tr><td><p><strong>상태</strong></p></td><td><p><strong>정상</strong> / <strong>오류</strong></p></td></tr></tbody></table>

### 5.2.3 전략 상태 표시 (정상 / 오류)

각 전략 행의 상태 열에는 현재 전략의 이상 여부가 표시됩니다.

*   <strong>정상</strong>: 전략 구성에 문제가 없으며 실행 가능한 상태입니다.
*   <strong>오류</strong> (🔴 빨간색 강조): 전략 구성에 오류가 감지된 상태입니다. 오류가 있는 전략은 <strong>자동매매 스위치 대시보드에 표시되지 않으며</strong>, 실행되지 않습니다.

⚠️ <strong>주의</strong>: 오류 상태의 전략은 자동매매가 동작하지 않습니다. 원인을 파악하려면 해당 전략을 선택한 뒤 내용을 확인하고 오류를 수정한 후 저장하십시오.

### 5.2.4 실행 중인 전략 구별

<strong>사용 여부</strong> 및 <strong>실행 여부</strong> 열을 통해 각 전략이 현재 동작 중인지 확인할 수 있습니다.

*   <strong>사용중 + 실행중</strong>: 전략이 활성화되어 자동매매가 진행 중입니다.
*   <strong>사용중 + 실행중지</strong>: 전략은 등록되어 있으나 현재 실행되고 있지 않습니다.
*   <strong>사용중지</strong>: 해당 전략이 비활성화된 상태로, 자동매매 스위치 대시보드에 표시되지 않습니다.

⚠️ <strong>주의</strong>: <strong>실행중</strong> 상태인 전략을 수정하면 예상치 못한 오류나 누락 거래가 발생할 수 있습니다. 전략 수정 전 반드시 해당 전략의 실행을 <strong>중지</strong>한 후 수정하는 것을 권장합니다.

### 5.2.5 전략 상세 정보 확인

목록에서 전략 항목을 <strong>클릭</strong>하면 오른쪽 패널에 해당 전략의 상세 설정 내용이 표시됩니다.

확인할 수 있는 정보:

*   전략 이름 / 연결 계좌 / 종목 선정 방식
*   기본 주문 금액 / 보유 종목 수 제한
*   자동 거래 시간대 설정 (A/B 구간)
*   매수·매도 시간 제한 설정
*   하위 <strong>주문 전략 목록</strong> (오른쪽 패널에 별도 표시)

### 5.2.6 목록에서 가능한 작업

전략 목록 위에서 <strong>마우스 우클릭</strong>하면 컨텍스트 메뉴가 나타납니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>새로 만들기</strong></p></td><td><p>빈 매매 전략을 새로 생성합니다. 기본 이름 "새 자동매매"로 생성되며 목록 맨 아래에 추가됩니다.</p></td></tr><tr><td><p><strong>삭제</strong></p></td><td><p>현재 선택된 전략을 삭제합니다. 진행 중인 주문이 있는 경우 확인 메시지가 표시됩니다.</p></td></tr><tr><td><p><strong>가져오기</strong></p></td><td><p>외부 JSON 파일에서 매매 전략을 불러옵니다. 가져오기 전 계좌를 선택해야 합니다.</p></td></tr><tr><td><p><strong>내보내기</strong></p></td><td><p>선택된 전략을 JSON 파일로 저장합니다. 다른 PC나 계정에 전략을 공유할 때 사용합니다.</p></td></tr></tbody></table>

⚠️ <strong>삭제 시 주의</strong>: 전략에 종속된 매매 이력(주문, 체결 내역)이 존재하는 경우 함께 삭제됩니다. 삭제 전 반드시 확인 메시지를 읽어보십시오.

⚠️ <strong>가져오기 시 주의</strong>: 외부에서 가져오는 전략에 키움 조건검색식이 포함된 경우, 해당 조건검색식 이름이 <strong>내 영웅문 HTS에 동일하게 등록되어 있어야</strong> 합니다.

### 5.2.7 전략 순서 변경

목록 오른쪽 하단의 <strong>▲ / ▼ 버튼</strong>을 사용하여 전략의 실행 우선 순서를 변경할 수 있습니다.

*   <strong>▲ (위로 이동)</strong>: 선택된 전략을 목록에서 한 칸 위로 이동합니다.
*   <strong>▼ (아래로 이동)</strong>: 선택된 전략을 목록에서 한 칸 아래로 이동합니다.

변경된 순서는 즉시 데이터베이스에 저장되며, 다음에 화면을 열어도 유지됩니다.

💡 가장 위에 있는 전략이 선택 상태일 때는 ▲ 버튼이 비활성화됩니다. 목록 맨 아래 전략은 ▼ 버튼이 비활성화됩니다.

#### 제한 사항

<table><tbody><tr><td><p>항목</p></td><td><p>제한</p></td></tr><tr><td><p>최대 전략 수</p></td><td><p>전략 유형별 최대 <strong>30개</strong>까지 생성 가능합니다. 30개 초과 시 생성 오류 메시지가 표시됩니다.</p></td></tr><tr><td><p>계좌 유효성</p></td><td><p>전략에 연결된 계좌번호가 현재 등록된 앱키에 존재하지 않으면, 해당 전략은 <strong>오류 상태(빨간색)</strong> 로 표시되고 자동 실행이 중지됩니다.</p></td></tr></tbody></table>

.8

### 5.2.8 오류 상태 전략 처리 방법

목록에서 전략 이름이 <strong>빨간색</strong>으로 표시되면 다음을 확인하십시오.

1.  해당 전략을 클릭하여 <strong>연결된 계좌번호</strong>가 올바른지 확인합니다.

## 5.3 새 매매 전략 만들기

### 5.3.1 전략 이름 및 계좌 설정

화면 위치

<strong>자동매매 만들기</strong> 창에서 왼쪽 전략 목록의 항목을 선택하면, 오른쪽 패널 상단에 전략의 기본 설정 영역이 표시됩니다. 이 영역은 크게 <strong>① 이름</strong>, <strong>② 기본 설정</strong>, <strong>③ 자동 실행 시간대</strong> 세 부분으로 구성됩니다.

![](/images/manual/image-25.png)

① 전략 이름 설정

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>이름</strong></p></td><td><p>이 전략을 식별하는 고유한 이름을 입력합니다.</p></td></tr></tbody></table>

*   새 전략을 생성하면 기본 이름 <strong>"새 자동매매"</strong> 로 자동 설정됩니다.
*   이름이 겹치는 경우 "새 자동매매 (1)", "새 자동매매 (2)" 형식으로 번호가 붙습니다.
*   이름은 <strong>반드시 입력</strong>해야 합니다. 비어 있으면 저장이 되지 않으며 입력창 아래에 경고 문구가 표시됩니다.
*   이름은 언제든지 수정할 수 있으며, 수정 후 <strong>저장</strong> 버튼을 클릭해야 반영됩니다.

💡 전략 목적이 명확히 드러나는 이름을 사용하면 여러 전략을 관리할 때 편리합니다. 예) <strong>갭 상승 편입 매매</strong>, <strong>오전 단기 모멘텀</strong>, <strong>오후 모멘텀</strong>

② 기본 설정

계좌번호

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>이 전략의 주문이 전송될 증권 계좌를 드롭다운 목록에서 선택합니다.</p></td></tr></tbody></table>

*   목록에는 <strong>2.3.1 키움 API 앱키 등록</strong> 에서 등록된 계좌만 표시됩니다.
*   등록된 계좌가 없으면 목록이 비어 있으며, 먼저 앱키를 등록해야 합니다.
*   하나의 전략에는 <strong>하나의 계좌만</strong> 연결할 수 있습니다.
*   서로 다른 전략에 동일한 계좌를 중복 연결하는 것은 허용됩니다.

⚠️ <strong>계좌 변경 시 주의</strong>: 이미 진행 중인 주문이나 매매 이력이 있는 전략의 계좌번호를 변경하면 예상치 못한 문제가 발생할 수 있습니다. 변경 시 경고 메시지를 반드시 확인하십시오.

최초 매수 방법 (키움 조건검색식 전략 전용)

<table><tbody><tr><td><p>선택값</p></td><td><p>설명</p></td></tr><tr><td><p><strong>포착</strong></p></td><td><p>키움 HTS에서 조건검색식을 <strong>직접 조회</strong>하는 시점에 해당 종목을 매수 대상으로 등록합니다.</p></td></tr><tr><td><p><strong>편입</strong></p></td><td><p>실시간 조건검색식 모니터링 중 종목이 조건에 <strong>새로 편입</strong>되는 순간을 감지하여 매수 대상으로 등록합니다.</p></td></tr></tbody></table>

💡 일반적으로 <strong>편입</strong>은 조건에 방금 부합한 종목을 즉시 포착하므로 단기 매매에 적합합니다. <strong>포착</strong>은 설정된 시간에 조건을 만족하는 모든 종목을 한 번에 조회합니다.

### 기본 매수 금액

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>기본 매수 금액</strong></p></td><td><p>주문 전략에서 금액 표현식이 참조하는 기준 금액(원)입니다.</p></td></tr></tbody></table>

*   숫자만 입력하며, 천 단위 구분 기호(<strong>,</strong>)가 자동으로 표시됩니다.
*   입력 가능 범위: <strong>0원 이상 ~ 10,000,000원 이하</strong>
*   범위를 벗어나면 입력창 아래에 경고 문구가 표시되며 저장이 차단됩니다.
*   새 전략의 기본값은 <strong>100,000원</strong>입니다.

⚠️ 이 금액이 <strong>곧 1회 주문 금액이 되는 것은 아닙니다</strong>. 실제 주문 금액은 주문 전략에 설정된 <strong>금액 표현식</strong>의 계산 결과에 따라 결정되며, 이 기본 매수 금액은 표현식 내에서 변수로 활용될 수 있습니다. (→ 5.3.5 주문 금액 설정 참고)

### ③ 자동 실행 시간대 설정

전략이 자동으로 매매를 실행할 수 있는 허용 시간 구간을 설정합니다. 각 항목은 체크박스로 <strong>활성화/비활성화</strong>를 제어하며, 비활성화된 항목은 시간 제한 없이 동작합니다.

### 자동 실행 시간 (A/B)

전략 전체의 자동 매수·매도가 실행될 수 있는 시간대를 설정합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>자동 실행 시간 (A)</strong></p></td><td><p>1차 허용 시간 구간. 체크박스로 활성화 후 시작 ~ 종료 시간을 입력합니다.</p></td></tr><tr><td><p><strong>자동 실행 시간 (B)</strong></p></td><td><p>2차 허용 시간 구간. A 구간 외 추가 시간대가 필요할 때 사용합니다.</p></td></tr></tbody></table>

예) 오전 9:00~10:30 / 오후 14:00~15:00 두 시간대만 거래하고 싶은 경우 A와 B를 각각 설정합니다.

자동 매수 실행 시간 (A/B)

<strong>매수 주문만</strong> 허용할 시간 구간을 별도로 지정합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>자동 매수 실행 시간 (A)</strong></p></td><td><p>1차 매수 허용 시간 구간</p></td></tr><tr><td><p><strong>자동 매수 실행 시간 (B)</strong></p></td><td><p>2차 매수 허용 시간 구간</p></td></tr></tbody></table>

💡 자동 실행 시간과 자동 매수 실행 시간이 <strong>모두 설정</strong>된 경우, 매수 주문은 두 조건을 <strong>모두 만족하는 시간대</strong>에만 실행됩니다.

자동 매도 실행 시간 (A/B)

<strong>매도 주문만</strong> 허용할 시간 구간을 별도로 지정합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>자동 매도 실행 시간 (A)</strong></p></td><td><p>1차 매도 허용 시간 구간</p></td></tr><tr><td><p><strong>자동 매도 실행 시간 (B)</strong></p></td><td><p>2차 매도 허용 시간 구간</p></td></tr></tbody></table>

### ④ 지정 일시 자동 완료

설정한 일시가 되면 전략의 실행을 자동으로 종료합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>활성화 체크박스</strong></p></td><td><p>체크 시 자동 완료 기능이 활성화됩니다.</p></td></tr><tr><td><p><strong>완료 일자 기준</strong></p></td><td><p>드롭다운에서 선택: 당일 / 익일 / 2일 후 / 3일 후 / 4일 후 / 5일 후</p></td></tr><tr><td><p><strong>완료 시간</strong></p></td><td><p>완료 처리가 실행될 시각을 입력합니다.</p></td></tr></tbody></table>

예) <strong>"익일 15:30"</strong> 설정 → 매매 작업이 생성된 다음 날 오후 3시 30분에 전략 실행이 자동으로 종료됩니다.

### ⑤ 지정 일시 일괄 매도

설정한 일시에 이 전략이 보유한 모든 종목을 일괄 매도합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>활성화 체크박스</strong></p></td><td><p>체크 시 일괄 매도 기능이 활성화됩니다.</p></td></tr><tr><td><p><strong>일괄 매도 일자</strong></p></td><td><p>매매 작업 생성 시점 기준으로 N일 후에 실행합니다. (직접 숫자 입력)</p></td></tr><tr><td><p><strong>일괄 매도 시간</strong></p></td><td><p>일괄 매도 주문을 전송할 시각을 입력합니다.</p></td></tr><tr><td><p><strong>주문유형</strong></p></td><td><p>지정가 또는 시장가 중 선택합니다.</p></td></tr><tr><td><p><strong>틱 조정</strong></p></td><td><p>지정가 선택 시, 현재가 기준으로 ±N 틱 조정된 가격으로 주문합니다. (예: <strong>-5틱</strong>)</p></td></tr></tbody></table>

⚠️ <strong>일괄 매도와 자동 완료 함께 사용 시</strong>: 일괄 매도 시각보다 자동 완료 시각이 빠르면 매도 전에 전략이 종료될 수 있습니다. 두 시각의 순서를 반드시 확인하십시오.

저장 방법

모든 설정 입력이 완료되면 화면 우측 하단의 <strong>\[저장\]</strong> 버튼을 클릭합니다.

*   <strong>신규 전략</strong>: 새 전략이 데이터베이스에 등록됩니다.
*   <strong>기존 전략 수정</strong>: 이미 진행 중인 주문이 있을 경우 추가 확인 메시지가 표시됩니다.
*   저장 성공 시 "저장이 완료 되었습니다." 메시지가 표시됩니다.

💡 <strong>저장하지 않고 창을 닫으면 변경 내용이 사라집니다.</strong> 수정 후 반드시 저장 버튼을 클릭하십시오.

## 5.3.2 종목 선정 방식 선택

자동 매매 전략이 어떤 종목을 대상으로 매매를 실행할지를 결정하는 핵심 설정입니다. 부엉이 트레이더 는 2가지 종목 선정 방식을 제공하며, 각 방식은 독립된 전략 편집 창으로 구분됩니다.

<table><tbody><tr><td><p>종목 선정 방식</p></td><td><p>진입 메뉴</p></td><td><p>특징</p></td></tr><tr><td><p>키움 조건검색식 기반</p></td><td><p>자동매매 만들기 (키움 조건검색식)</p></td><td><p>HTS 조건검색식에 부합하는 종목을 자동 포착·편입</p></td></tr><tr><td><p>사용자 지정 종목</p></td><td><p>자동매매 만들기 (단일종목)</p></td><td><p>사용자가 직접 특정 종목 1개를 지정</p></td></tr></tbody></table>

### ① 조건검색식 기반 자동 선정

개요

키움증권 HTS(영웅문)에서 사용자가 직접 작성·저장한 <strong>키움 조건검색식</strong>을 사용하여 매매 대상 종목을 자동으로 선정합니다. 조건검색식에 해당하는 종목이 감지되는 순간 전략이 반응하여 주문 조건 평가를 시작합니다.

포착과 편입의 차이

이 방식에서는 조건검색식을 종목에 적용하는 <strong>시점</strong>을 포착과 편입 중 하나로 선택합니다.

<table><tbody><tr><td><p>구분</p></td><td><p>설명</p></td><td><p>적합한 상황</p></td></tr><tr><td><p><strong>포착 (Search)</strong></p></td><td><p>설정된 주기로 조건검색식을 직접 조회하여, 조건에 부합하는 종목 전체를 한 번에 가져옵니다.</p></td><td><p>일정 시간마다 조건을 만족하는 종목 목록 전체를 스캔할 때</p></td></tr><tr><td><p><strong>편입 (Inclusion)</strong></p></td><td><p>실시간 모니터링 중 새로운 종목이 조건검색식에 <strong>진입(I)</strong> 하는 순간을 즉시 포착합니다.</p></td><td><p>조건에 방금 부합한 신규 진입 종목만 대상으로 할 때 (단기 매매에 권장)</p></td></tr></tbody></table>

💡 <strong>편입</strong> 방식은 조건검색식 이탈 신호는 처리하지 않으며, 새로 편입되는 종목만 추적합니다.

동작 흐름 (편입 방식 기준)

키움 API → 실시간 조건검색식 편입 신호 수신

↓

전략에 설정된 조건검색식 이름과 수신된 신호 비교

↓ (일치 시)

해당 종목에 대한 매매 전략 작업(Job) 자동 생성

↓

주문 전략의 준비 조건 / 실행 조건 평가 시작

↓

조건 충족 시 매수/매도 주문 전송

사용 전 필수 확인 사항

*   키움증권 HTS(영웅문)에서 해당 조건검색식이 <strong>등록되어 있어야</strong> 합니다.
*   전략에 설정한 조건검색식 이름과 HTS에 저장된 이름이 <strong>정확히 일치</strong>해야 합니다.
*   KRX 종목은 <strong>오전 9:00 ~ 오후 3:30</strong> 사이의 데이터만 처리됩니다.

### ② 사용자 지정 종목

개요

사용자가 거래할 종목을 <strong>직접 1개</strong> 지정하는 방식입니다. 해당 종목만 지속적으로 감시하며, 주문 전략의 조건이 충족될 때 매수·매도 주문을 전송합니다.

종목 선택 방법

1.  전략 설정 화면에서 <strong>종목</strong> 항목 옆의 🔍 (돋보기) 버튼을 클릭합니다.
2.  종목 선택 창이 열립니다.
3.  검색창에 <strong>종목코드</strong> 또는 <strong>종목명 일부</strong>를 입력하면 목록이 실시간으로 필터링됩니다.
4.  목록에서 원하는 종목을 선택한 후 <strong>확인</strong> 버튼을 클릭합니다.
5.  전략 화면에 선택된 종목코드와 종목명이 표시됩니다.

⚠️ 단일 종목 방식에서는 <strong>보유 종목 수 제한</strong>과 <strong>동일 종목 재매수 제한</strong> 옵션이 이 1개 종목에 대해서만 적용됩니다.

💡 단일 종목 방식은 특정 종목에 집중하여 세밀한 조건을 걸어두고 싶을 때 적합합니다. 예) 항상 삼성전자만 거래하는 전용 전략을 만들 때.

## 5.3.3 매수 조건 설정 (조건 표현식 편집기)

### 개요

매수 조건 설정은 <strong>주문 전략 편집기</strong>에서 이루어집니다. 하나의 주문 전략은 <strong>준비 조건</strong>과 <strong>실행 조건</strong> 두 단계로 구성되며, 두 조건이 순서대로 충족될 때 매수 주문이 전송됩니다.

\[준비 조건 충족\] → \[실행 조건 충족\] → 매수 주문 전송

### 주문 전략 편집기 열기

전략 목록 화면 오른쪽의 <strong>매매 전략 상세</strong> 영역에서:

*   <strong>\[+\] 버튼</strong>: 새 주문 전략 생성
*   <strong>\[✏ 연필\] 버튼</strong>: 선택된 주문 전략 수정

클릭하면 <strong>"주문전략상세 편집"</strong> 창이 열립니다.

### 편집기 화면 구성

![](/images/manual/image-26.png)

① 매수/매도 구분

창 상단 좌측에서 이 주문 전략이 매수인지 매도인지를 선택합니다.

<table><tbody><tr><td><p>선택값</p></td><td><p>설명</p></td></tr><tr><td><p><strong>최초매수</strong></p></td><td><p>이 종목에 대해 처음으로 실행하는 매수 주문입니다. 보유 수량이 0인 상태에서만 실행됩니다.</p></td></tr><tr><td><p><strong>매수</strong></p></td><td><p>이미 최초매수가 체결된 이후 추가로 매수하는 주문입니다. 최초 매수가 체결되지 않은 상태에서는 실행되지 않습니다.</p></td></tr><tr><td><p><strong>매도</strong></p></td><td><p>보유 종목을 매도하는 주문입니다. (→ 11.3.4 참고)</p></td></tr></tbody></table>

💡 <strong>매수 전략 구성 예시</strong>: 최초매수 1개 + 추가매수(매수) 1개를 함께 설정하면, 최초 진입 후 조건 충족 시 물타기/분할 매수가 가능합니다.

② 주문유형 및 틱 조정

<table><tbody><tr><td><p>항목</p></td><td><p>선택값</p></td><td><p>설명</p></td></tr><tr><td><p><strong>주문유형</strong></p></td><td><p>시장가</p></td><td><p>현재 시장 가격으로 즉시 체결을 시도합니다.</p><p>NXT는 프리마켓, 애프터마켓에서 시장가 주문이 안되므로, 되도록 현재가를 사용하시기 바랍니다.</p></td></tr><tr><td></td><td><p>현재가</p></td><td><p>현재가 기준 ±N 틱 조정된 가격으로 지정가 주문을 전송합니다. 틱 조정 콤보박스가 함께 표시됩니다.</p></td></tr><tr><td></td><td><p>시간외단일가</p></td><td><p>시간외 단일가 주문으로 전송합니다. 틱 조정 콤보박스가 함께 표시됩니다.</p></td></tr><tr><td><p><strong>틱 조정</strong></p></td><td><p>+50틱 ~ -50틱</p></td><td><p>현재가에서 지정한 틱 수만큼 위/아래 가격으로 주문합니다. <strong>0틱</strong>이면 현재가 그대로 지정가 주문합니다.</p></td></tr></tbody></table>

③ 실행주기

조건이 충족될 때 이 주문 전략을 몇 번 실행할지를 결정합니다.

<table><tbody><tr><td><p>선택값</p></td><td><p>설명</p></td></tr><tr><td><p><strong>1회 (Single)</strong></p></td><td><p>조건이 충족되면 1번만 주문을 전송합니다.</p></td></tr><tr><td><p><strong>매일 (Daily)</strong></p></td><td><p>매 거래일마다 조건이 충족되면 반복적으로 주문을 전송합니다.</p></td></tr></tbody></table>

④ 준비 조건 설정

<strong>준비 조건</strong>은 매수 주문을 전송하기 전에 먼저 충족되어야 하는 선행 조건입니다. 우측 상단의 <strong>\[사용\] 토글</strong>로 활성화/비활성화할 수 있습니다.

조건 타입 선택

<table><tbody><tr><td><p>타입</p></td><td><p>설명</p></td></tr><tr><td><p><strong>시스템조건식</strong></p></td><td><p>사용자가 직접 작성한 수식 조건을 사용합니다. (조건 표현식 편집기에서 작성)</p></td></tr><tr><td><p><strong>키움 조건검색식</strong></p></td><td><p>키움 HTS의 조건검색식이 신호를 발생시키는 시점을 준비 조건으로 사용합니다.</p></td></tr><tr><td><p><strong>사용자 정의</strong></p></td><td><p>별도 제작 전략</p></td></tr></tbody></table>

<strong>\[시스템조건식\] 선택 시</strong>

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>그룹명</strong></p></td><td><p>시스템조건식을 그룹 단위로 필터링합니다.</p></td></tr><tr><td><p><strong>준비조건</strong></p></td><td><p>미리 저장된 시스템조건식 목록에서 선택합니다.</p></td></tr><tr><td><p><strong>시스템조건식 상세</strong></p></td><td><p>선택된 시스템조건식의 각 줄(Unit)이 표로 표시됩니다. (ID, 좌항, 비교, 우항)</p></td></tr><tr><td><p><strong>시스템조건식 조합</strong></p></td><td><p>각 Unit의 AND/OR 논리 조합 방식이 표시됩니다. (예: <strong>A AND B OR C</strong>)</p></td></tr><tr><td><p><strong>사용자 정의 옵션</strong></p></td><td><p>추가적으로 체결강도, 호가 조건 등 내장 조건을 체크하여 보조 조건으로 추가할 수 있습니다.</p></td></tr></tbody></table>

<strong>\[키움 조건검색식\] 선택 시</strong>

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>준비조건</strong></p></td><td><p>HTS에 등록된 조건검색식 목록에서 선택합니다.</p></td></tr><tr><td><p><strong>편입</strong></p></td><td><p>종목이 조건에 신규 편입되는 순간을 준비 조건 충족으로 처리합니다.</p></td></tr><tr><td><p><strong>포착</strong></p></td><td><p>지정한 시각에 조건을 만족하는 종목을 조회하여 준비 조건 충족으로 처리합니다. 시각 선택기가 추가로 표시됩니다.</p></td></tr></tbody></table>

⑤ 실행 조건 설정

<strong>실행 조건</strong>은 준비 조건이 충족된 이후에 실제 매수 주문을 전송하기 위한 최종 확인 조건입니다. 준비 조건과 동일한 구조(시스템조건식 / 키움 조건검색식 / 사용자 정의)로 설정합니다.

💡 준비 조건과 실행 조건을 <strong>서로 다른 조건검색식</strong>으로 구성하는 것도 가능합니다. 예) 준비: A 조건검색식 편입 → 실행: B 조건검색식 편입

💡 <strong>\[사용\] 토글을 비활성화</strong>하면 준비 또는 실행 조건을 건너뛰고 나머지 조건만으로 주문이 실행됩니다.

### ⑥ 시스템조건식 편집기

<strong>\[시스템조건식 만들기 (준비, 실행)\]</strong> 버튼을 클릭하면 <strong>"시스템조건식 만들기"</strong> 창이 열립니다. 이 편집기에서 준비·실행 조건에서 사용할 시스템조건식을 직접 작성하고 저장합니다.

편집기 화면 구성

### 시스템조건식 작성 방법

1.  <strong>\[+\] 버튼</strong>으로 새 시스템조건식을 생성합니다.
2.  <strong>그룹명</strong>을 입력하거나 기존 그룹을 선택합니다. (새 그룹명을 직접 입력하면 새 그룹이 생성됩니다)
3.  <strong>이름</strong>을 입력합니다.
4.  시스템조건식 Unit 목록에서 <strong>\[+\] 버튼</strong>을 클릭하여 조건 행을 추가합니다.
5.  <strong>좌항</strong>, <strong>비교연산자</strong>, <strong>우항</strong>을 입력합니다.

비교연산자 종류

<table><tbody><tr><td><p>연산자</p></td><td><p>의미</p></td></tr><tr><td><p><strong>&lt;</strong></p></td><td><p>좌항이 우항보다 작다</p></td></tr><tr><td><p><strong>&lt;=</strong></p></td><td><p>좌항이 우항보다 작거나 같다</p></td></tr><tr><td><p><strong>==</strong></p></td><td><p>좌항과 우항이 같다</p></td></tr><tr><td><p><strong>&gt;=</strong></p></td><td><p>좌항이 우항보다 크거나 같다</p></td></tr><tr><td><p><strong>&gt;</strong></p></td><td><p>좌항이 우항보다 크다</p></td></tr><tr><td><p><strong>!=</strong></p></td><td><p>좌항과 우항이 다르다</p></td></tr></tbody></table>

### 사용 가능한 피연산자 목록

피연산자는 탭별로 분류되어 있으며, 항목 옆의 <strong>\[L\] 버튼</strong>은 좌항에, <strong>\[R\] 버튼</strong>은 우항에 자동 입력됩니다.

<strong>📌 실시간 주식 정보 탭</strong>

<table><tbody><tr><td><p>피연산자</p></td><td><p>설명</p></td></tr><tr><td><p><strong>현재가</strong></p></td><td><p>당일 현재 체결가</p></td></tr><tr><td><p><strong>시가</strong></p></td><td><p>당일 시가</p></td></tr><tr><td><p><strong>고가</strong></p></td><td><p>당일 고가</p></td></tr><tr><td><p><strong>저가</strong></p></td><td><p>당일 저가</p></td></tr><tr><td><p><strong>누적거래량</strong></p></td><td><p>당일 누적 거래량</p></td></tr><tr><td><p><strong>누적거래대금</strong></p></td><td><p>당일 누적 거래대금 (단위: 백만원)</p></td></tr><tr><td><p><strong>등락률</strong></p></td><td><p>전일 대비 등락률 (단위: %)</p></td></tr><tr><td><p><strong>전일거래량대비</strong></p></td><td><p>당일거래량 ÷ 전일거래량 × 100 (단위: %)</p></td></tr><tr><td><p><strong>거래회전율</strong></p></td><td><p>거래회전율 (단위: %)</p></td></tr><tr><td><p><strong>누적매도체결량</strong></p></td><td><p>당일 누적 매도 체결량</p></td></tr><tr><td><p><strong>누적매수체결량</strong></p></td><td><p>당일 누적 매수 체결량</p></td></tr><tr><td><p><strong>누적매수비율</strong></p></td><td><p>당일 누적 매수 비율 (단위: %)</p></td></tr><tr><td><p><strong>순간거래대금</strong></p></td><td><p>순간 거래대금</p></td></tr><tr><td><p><strong>체결강도</strong></p></td><td><p>현재 체결강도 — SOR 기준 (단위: %)</p></td></tr><tr><td><p><strong>코스피지수</strong></p></td><td><p>실시간 코스피 지수</p></td></tr><tr><td><p><strong>코스닥지수</strong></p></td><td><p>실시간 코스닥 지수</p></td></tr></tbody></table>

<strong>📌 차트 데이터 탭</strong>

<table><tbody><tr><td><p>피연산자</p></td><td><p>설명</p></td></tr><tr><td><p><strong>3분봉시가</strong></p></td><td><p>최근 3분봉 시가</p></td></tr><tr><td><p><strong>3분봉저가</strong></p></td><td><p>최근 3분봉 저가</p></td></tr><tr><td><p><strong>3분봉고가</strong></p></td><td><p>최근 3분봉 고가</p></td></tr><tr><td><p><strong>3분봉거래대금</strong></p></td><td><p>최근 3분봉 거래대금</p></td></tr><tr><td><p><strong>30분봉거래대금</strong></p></td><td><p>최근 30분봉 거래대금</p></td></tr><tr><td><p><strong>익일5일이평선</strong></p></td><td><p>익일 5일 이동평균선</p></td></tr><tr><td><p><strong>코스피지수5MA</strong></p></td><td><p>코스피지수 5일 이동평균선</p></td></tr><tr><td><p><strong>코스닥지수5MA</strong></p></td><td><p>코스닥지수 5일 이동평균선</p></td></tr></tbody></table>

<strong>📌 준비조건 만족 후 탭</strong>

준비 조건이 충족된 이후의 가격 변화 정보를 실행 조건에서 활용할 때 사용합니다.

<table><tbody><tr><td><p>피연산자</p></td><td><p>설명</p></td></tr><tr><td><p><strong>준비후고가</strong></p></td><td><p>준비 조건 충족 이후 가장 높았던 가격</p></td></tr><tr><td><p><strong>준비후저가</strong></p></td><td><p>준비 조건 충족 이후 가장 낮았던 가격</p></td></tr><tr><td><p><strong>준비완료가</strong></p></td><td><p>준비 조건이 충족된 시점의 가격</p></td></tr><tr><td><p><strong>준비완료체결강도</strong></p></td><td><p>준비 조건이 충족된 시점의 체결강도</p></td></tr></tbody></table>

시스템조건식 조합 방법

여러 개의 조건 Unit을 추가한 경우, 각 Unit 간의 논리 관계를 <strong>조합(Combination)</strong>으로 표현합니다.

<table><tbody><tr><td><p>표현식 예시</p></td><td><p>의미</p></td></tr><tr><td><p><strong>A</strong></p></td><td><p>Unit A 하나만 충족하면 됩니다.</p></td></tr><tr><td><p><strong>A AND B</strong></p></td><td><p>Unit A와 B 모두 충족해야 합니다.</p></td></tr><tr><td><p><strong>A OR B</strong></p></td><td><p>Unit A 또는 B 중 하나만 충족하면 됩니다.</p></td></tr><tr><td><p><strong>(A AND B) OR C</strong></p></td><td><p>(A와 B 모두 충족) 또는 C가 충족되면 됩니다.</p></td></tr></tbody></table>

💡 <strong>\[다른 시스템조건식 가져오기\]</strong> 버튼을 사용하면 기존에 저장된 다른 시스템조건식의 Unit을 현재 편집 중인 시스템조건식에 복사해 올 수 있습니다.

### 시스템조건식 작성 예시

<strong>예시 1) 현재가가 시가보다 높고, 체결강도가 150 이상일 때 준비 조건 충족</strong>

<table><tbody><tr><td><p>ID</p></td><td><p>좌항</p></td><td><p>비교</p></td><td><p>우항</p></td></tr><tr><td><p>A</p></td><td><p>현재가</p></td><td><p>&gt;</p></td><td><p>시가</p></td></tr><tr><td><p>B</p></td><td><p>체결강도</p></td><td><p>&gt;=</p></td><td><p>150</p></td></tr></tbody></table>

→ 조합: <strong>A AND B</strong>

<strong>예시 2) 준비 후 현재가가 준비 완료가 대비 0.5% 하락하면 실행 조건 충족 (손절 매도 조건으로 사용 시)</strong>

<table><tbody><tr><td><p>ID</p></td><td><p>좌항</p></td><td><p>비교</p></td><td><p>우항</p></td></tr><tr><td><p>A</p></td><td><p>현재가</p></td><td><p>&lt;=</p></td><td><p>준비완료가 * 0.995</p></td></tr></tbody></table>

→ 조합: <strong>A</strong>

⑦ 저장 및 적용

1.  시스템조건식 편집이 완료되면 <strong>\[저장\]</strong> 버튼을 클릭합니다.
2.  저장된 시스템조건식은 주문 전략 편집기의 <strong>준비조건/실행조건 드롭다운 목록</strong>에 즉시 반영됩니다.
3.  원하는 시스템조건식을 선택한 후 <strong>\[확인\]</strong> 버튼을 클릭하면 주문 전략에 조건이 저장됩니다.

⚠️ <strong>\[확인\] 버튼 없이 창을 닫으면</strong> 변경된 주문 전략 설정이 저장되지 않습니다. 이후 매매 전략 편집기의 <strong>\[저장\]</strong> 버튼을 클릭해야 최종적으로 반영됩니다.

## 5.3.4 매도 조건 설정

### 개요

매도 조건 설정은 <strong>5.3.3 매수 조건 설정</strong>과 동일한 <strong>주문 전략 편집기</strong>에서 이루어집니다. 편집기 구조(준비 조건 / 실행 조건 / 조건 표현식 편집기)는 매수와 동일하며, <strong>매수/매도 구분을 "매도"로 설정</strong>하는 것이 핵심 차이입니다.

매도 주문 전략 생성 방법

1.  매매 전략 상세 영역에서 <strong>\[+\] 버튼</strong>을 클릭하여 새 주문 전략을 추가합니다.
2.  <strong>매수/매도</strong> 드롭다운에서 <strong>"매도"</strong> 를 선택합니다.
3.  준비 조건, 실행 조건, 주문 금액 계산식을 설정합니다.
4.  <strong>\[확인\]</strong> 버튼을 클릭합니다.

💡 하나의 매매 전략에 <strong>매수 주문 전략과 매도 주문 전략을 함께</strong> 설정해야 자동으로 매수 후 매도까지 이루어집니다. 매도 주문 전략이 없으면 매수한 종목을 자동으로 매도하지 않습니다.

매도 조건과 매수 조건의 주요 차이점

<table><tbody><tr><td><p>항목</p></td><td><p>매수</p></td><td><p>매도</p></td></tr><tr><td><p>매수/매도 구분</p></td><td><p>최초매수 / 매수</p></td><td><p>매도</p></td></tr><tr><td><p>조건에 활용 가능한 피연산자</p></td><td><p>현재가, 시가 등 시세 데이터 중심</p></td><td><p>최초매수가, 평균매수가, 보유수량 등 <strong>보유 포지션</strong> 데이터 추가 사용 가능</p></td></tr><tr><td><p>중복 실행 방지</p></td><td><p>—</p></td><td><p>당일 이미 매도 주문이 존재하면 재실행 차단</p></td></tr><tr><td><p>주문 수량 기준</p></td><td><p>주문 금액 계산식 결과 ÷ 현재가</p></td><td><p>매도 가능 수량 (보유 수량 기준)</p></td></tr><tr><td><p>시장가 처리</p></td><td><p>시장가 그대로 전송</p></td><td><p>내부적으로 지정가(하한가)로 변환하여 전송</p></td></tr></tbody></table>

매도 전용 피연산자

매도 시스템조건식에서는 매수 조건에서 사용하는 모든 피연산자에 더해, 아래의 <strong>보유 포지션 관련 피연산자</strong>를 사용할 수 있습니다.

<strong>📌 보유 포지션 탭</strong>

<table><tbody><tr><td><p>피연산자</p></td><td><p>설명</p></td><td><p>활용 예</p></td></tr><tr><td><p><strong>최초매수가</strong></p></td><td><p>이 종목에 최초로 매수 체결된 가격</p></td><td><p>최초 매수가 기준 익절/손절 조건</p></td></tr><tr><td><p><strong>평균매수가</strong></p></td><td><p>분할 매수를 포함한 평균 매수 단가</p></td><td><p>전체 포지션 손익 기준 조건</p></td></tr><tr><td><p><strong>최초매수일</strong></p></td><td><p>최초 매수 체결이 발생한 날짜 (숫자)</p></td><td><p>보유 일수 계산</p></td></tr><tr><td><p><strong>현재일</strong></p></td><td><p>오늘 날짜 (숫자)</p></td><td><p>최초매수일과 차이로 보유 일수 계산</p></td></tr><tr><td><p><strong>비영업일일수</strong></p></td><td><p>최초 매수일 이후 주말·공휴일 수</p></td><td><p>영업일 기준 보유 일수 계산</p></td></tr><tr><td><p><strong>최초매수체결강도</strong></p></td><td><p>최초 매수 체결 시점의 체결강도</p></td><td><p>매수 시점 대비 강도 변화 추적</p></td></tr><tr><td><p><strong>최초매수후최고체결강도</strong></p></td><td><p>최초 매수 이후 가장 높았던 체결강도</p></td><td><p>모멘텀 고점 이탈 감지</p></td></tr><tr><td><p><strong>최초매수후최소체결강도</strong></p></td><td><p>최초 매수 이후 가장 낮았던 체결강도</p></td><td><p>모멘텀 약화 감지</p></td></tr><tr><td><p><strong>보유수량</strong></p></td><td><p>현재 보유 중인 수량</p></td><td><p>수량 조건 또는 금액 표현식 연동</p></td></tr><tr><td><p><strong>특정가</strong></p></td><td><p>호가창 매매 전략에서 기준가로 사용되는 가격</p></td><td><p>호가창 전략 전용</p></td></tr></tbody></table>

### 매도 전략 유형별 구성 예시

예시 1) 고정 익절 / 손절 매도

<table><tbody><tr><td><p>목적</p></td><td><p>시스템조건식 설정</p></td></tr><tr><td><p>수익 3% 익절</p></td><td><p>실행: <strong>현재가 &gt;= 최초매수가 * 1.03</strong></p></td></tr><tr><td><p>손실 3% 손절</p></td><td><p>실행: <strong>현재가 &lt;= 최초매수가 * 0.97</strong></p></td></tr></tbody></table>

→ 두 조건을 <strong>OR</strong>로 결합하거나, 각각 별도 주문 전략(매도)으로 추가합니다.

예시 2) 평균 매수가 기준 손익 매도 (분할 매수 시 활용)

<table><tbody><tr><td><p>목적</p></td><td><p>시스템조건식 설정</p></td></tr><tr><td><p>평균단가 대비 5% 수익</p></td><td><p>실행: <strong>현재가 &gt;= 평균매수가 * 1.05</strong></p></td></tr><tr><td><p>평균단가 대비 3% 손실</p></td><td><p>실행: <strong>현재가 &lt;= 평균매수가 * 0.97</strong></p></td></tr></tbody></table>

예시 3) 고점 추적 매도 (트레일링 스탑)

준비 조건 충족 이후의 <strong>고가</strong>를 기준으로 하락 폭이 일정 수준을 넘으면 매도합니다.

<table><tbody><tr><td><p>단계</p></td><td><p>설정</p></td></tr><tr><td><p>준비 조건</p></td><td><p>실행: <strong>현재가 &gt;= 최초매수가 * 1.02</strong> → 준비 조건 통과</p></td></tr><tr><td><p>실행 조건</p></td><td><p>실행: <strong>현재가 &lt;= 준비후고가 * 0.97</strong> → 고점 대비 -3% 하락 시 매도</p></td></tr></tbody></table>

예시 4) 보유 일수 기준 강제 매도

<table><tbody><tr><td><p>목적</p></td><td><p>시스템조건식 설정</p></td></tr><tr><td><p>N 영업일 이상 보유 시 매도</p></td><td><p>실행: <strong>(현재일 - 최초매수일) - 비영업일일수 &gt;= 3</strong></p></td></tr></tbody></table>

예시 5) 체결강도 약화 매도 (모멘텀 소실 감지)

<table><tbody><tr><td><p>목적</p></td><td><p>시스템조건식 설정</p></td></tr><tr><td><p>강도 140 미만으로 약화 + 현재가 평균 단가 이상</p></td><td><p>실행 Unit A: <strong>체결강도 &lt; 140</strong>, Unit B: <strong>현재가 &gt;= 평균매수가</strong> → 조합: <strong>A AND B</strong></p></td></tr></tbody></table>

매도 조건 동작 시 내부 처리 규칙

<table><tbody><tr><td><p>규칙</p></td><td><p>내용</p></td></tr><tr><td><p><strong>당일 중복 매도 방지</strong></p></td><td><p>동일 주문 전략에서 당일 이미 매도 주문을 전송한 경우 추가 매도 주문을 전송하지 않습니다.</p></td></tr><tr><td><p><strong>매도 가능 수량 0 차단</strong></p></td><td><p>현재 매도 가능 수량이 0이면 조건을 만족해도 주문을 전송하지 않습니다.</p></td></tr><tr><td><p><strong>시장가 → 지정가 변환</strong></p></td><td><p>주문유형을 시장가로 설정해도, 내부적으로는 지정가(하한가)로 변환하여 전송합니다. 이는 키움 API의 안전한 전처리 방식입니다.</p></td></tr></tbody></table>

일괄 매도와의 관계

<strong>5.3.1 전략 이름 및 계좌 설정</strong>에서 <strong>지정 일시 일괄 매도</strong>를 활성화한 경우, 해당 시각이 되면 매도 주문 전략의 조건 충족 여부와 관계없이 보유 종목 전체를 일괄 매도합니다.

<table><tbody><tr><td><p>비교 항목</p></td><td><p>시스템조건식 기반 매도</p></td><td><p>지정 일시 일괄 매도</p></td></tr><tr><td><p>실행 기준</p></td><td><p>조건 충족 시</p></td><td><p>설정된 일시 도달 시</p></td></tr><tr><td><p>대상</p></td><td><p>조건을 만족하는 경우만</p></td><td><p>보유 전 종목 무조건</p></td></tr><tr><td><p>설정 위치</p></td><td><p>주문 전략 편집기</p></td><td><p>전략 기본 설정 (5.3.1)</p></td></tr></tbody></table>

⚠️ 일괄 매도와 시스템조건식 매도가 <strong>동시에 활성화</strong>된 경우, 시스템조건식 매도가 먼저 체결될 수 있습니다. 일괄 매도 시각 이전에 이미 시스템조건식으로 매도되면 일괄 매도는 보유 수량이 없어 실행되지 않습니다.

매도 주문 전략 저장 흐름

편집기에서 조건 설정 완료

↓

\[확인\] 버튼 클릭

↓

매매 전략 상세 목록에 "매도" 행 추가 확인

↓

자동매매 만들기 화면의 \[저장\] 버튼 클릭

↓

데이터베이스에 최종 저장

↓

자동 매매 실행 시 매도 조건 감시 시작

## 5.3.5 주문 금액 설정 (금액 표현식 편집기)

### 개요

주문 금액 설정은 자동 매매 시 실제로 <strong>얼마어치 주문</strong>을 낼지를 수식(계산식)으로 정의하는 기능입니다. 단순히 고정 금액을 입력하는 대신, <strong>"기본주문금액 × 2"</strong>, <strong>"기본주문금액 / 보유수량"</strong> 과 같이 변수와 연산자를 조합한 <strong>표현식</strong>을 만들어 유연하게 주문 금액을 제어할 수 있습니다.

정의된 계산식은 <strong>금액 표현식 편집기</strong>를 통해 생성·수정·삭제하며, 이후 매매 전략의 <strong>주문 전략 설정</strong> 항목에서 원하는 계산식을 선택하여 전략에 연결합니다.

### 금액 표현식 편집기 열기

매매 전략 편집기의 <strong>"주문 전략 설정"</strong> 탭에서 <strong>\[주문금액식 만들기\]</strong> 버튼을 클릭하면 별도 창(<strong>주문금액식 만들기</strong>)이 열립니다.

편집기 화면 구성

![](/images/manual/image-28.png)

편집기 창은 좌우 두 영역으로 나뉩니다.

<table><tbody><tr><td><p>영역</p></td><td><p>설명</p></td></tr><tr><td><p><strong>왼쪽 – 계산식 목록</strong></p></td><td><p>저장된 주문 금액 계산식 목록이 표시됩니다. 용도(매수/매도) 및 이름을 확인할 수 있습니다.</p></td></tr><tr><td><p><strong>오른쪽 – 계산식 편집</strong></p></td><td><p>선택된 계산식의 상세 내용(용도, 이름, 수식)을 편집합니다.</p></td></tr></tbody></table>

계산식 목록 (왼쪽 패널)

*   <strong>DataGrid 목록</strong>: 저장된 계산식이 <strong>용도</strong>와 <strong>이름</strong> 열로 표시됩니다.
    *   목록에서 항목을 클릭하면 오른쪽 편집 영역에 해당 계산식이 로드됩니다.
*   <strong>\[+\] 버튼</strong>: 새 계산식을 추가합니다. "새 주문 금액 계산식" 이라는 이름으로 항목이 생성되며, 이름이 중복되면 자동으로 번호가 붙습니다 (예: <strong>새 주문 금액 계산식 (1)</strong>).
*   <strong>\[−\] 버튼</strong>: 선택된 계산식을 삭제합니다. 단, <strong>기본 계산식(IsRequired)</strong> 으로 지정된 항목은 삭제할 수 없습니다.
*   <strong>\[계산식을 이름으로 사용\] 체크박스</strong>: 체크 시 저장할 때 수식 문자열 자체가 이름으로 자동 설정됩니다 (예: 수식이 <strong>기본주문금액 * 2</strong>이면 이름도 <strong>기본주문금액 * 2</strong>로 저장).

계산식 편집 (오른쪽 패널)

① 용도 선택

<table><tbody><tr><td><p>선택지</p></td><td><p>설명</p></td></tr><tr><td><p><strong>매수</strong></p></td><td><p>매수 주문 시 이 계산식이 사용됩니다.</p></td></tr><tr><td><p><strong>매도</strong></p></td><td><p>매도 주문 시 이 계산식이 사용됩니다.</p></td></tr></tbody></table>

계산식마다 용도를 별도로 지정할 수 있으므로, 매수용 계산식과 매도용 계산식을 각각 따로 만들어 관리할 수 있습니다.

② 이름 입력

계산식의 이름을 자유롭게 입력합니다. 목록에서 식별할 수 있는 직관적인 이름을 권장합니다. (예: <strong>기본 2배 매수</strong>, <strong>추가매수용</strong>, <strong>전량 매도</strong>)

③ 수식 구성 (계산식 빌더)

수식은 <strong>좌변 피연산자 + 연산자 + 우변 숫자</strong> 3가지 요소로 구성됩니다.

\[ 좌변 피연산자 \] \[ 연산자 \] \[ 우변 숫자 \]

기본주문금액 \* 1

<strong>좌변 피연산자 (변수)</strong>

드롭다운에서 선택합니다.

<table><tbody><tr><td><p>변수명</p></td><td><p>설명</p></td></tr><tr><td><p><strong>기본주문금액</strong></p></td><td><p>환경 설정에서 지정한 1회 주문의 기준 금액입니다.</p></td></tr><tr><td><p><strong>보유수량</strong></p></td><td><p>현재 해당 종목의 보유 주식 수량입니다. 추가 매수 시 물타기/불타기 금액 계산 등에 활용할 수 있습니다.</p></td></tr></tbody></table>

<strong>연산자</strong>

드롭다운에서 선택합니다.

<table><tbody><tr><td><p>기호</p></td><td><p>의미</p></td></tr><tr><td><p><strong>+</strong></p></td><td><p>덧셈</p></td></tr><tr><td><p><strong>-</strong></p></td><td><p>뺄셈</p></td></tr><tr><td><p><strong>*</strong></p></td><td><p>곱셈</p></td></tr><tr><td><p><strong>/</strong></p></td><td><p>나눗셈</p></td></tr></tbody></table>

<strong>우변 숫자</strong>

직접 숫자를 입력합니다. 소수점 숫자도 입력 가능합니다 (예: <strong>0.5</strong>, <strong>2</strong>, <strong>1.5</strong>).

### 수식 예시

<table><tbody><tr><td><p>수식</p></td><td><p>의미</p></td></tr><tr><td><p><strong>기본주문금액 * 1</strong></p></td><td><p>기본 주문 금액 그대로 주문 (기본값)</p></td></tr><tr><td><p><strong>기본주문금액 * 2</strong></p></td><td><p>기본 주문 금액의 2배로 주문</p></td></tr><tr><td><p><strong>기본주문금액 / 2</strong></p></td><td><p>기본 주문 금액의 절반으로 주문</p></td></tr><tr><td><p><strong>기본주문금액 * 0.5</strong></p></td><td><p>기본 주문 금액의 50%로 주문</p></td></tr><tr><td><p><strong>보유수량 * 1</strong></p></td><td><p>현재 보유수량을 기준으로 주문 수량 계산</p></td></tr></tbody></table>

<strong>참고</strong>: 기본주문금액의 기준값은 환경 설정(<strong>TradingConfig</strong>)의 <strong>일일 최대 매수 금액</strong> 및 주문 전략 설정과 연동되어 결정됩니다.

저장 및 삭제

*   <strong>\[저장\] 버튼</strong>: 현재 편집 중인 계산식을 저장합니다.
    *   새로 만든 항목은 DB에 추가(<strong>ADD</strong>)됩니다.
    *   기존 항목은 수정(<strong>UPDATE</strong>)됩니다.
    *   저장 전 확인 메시지가 표시됩니다.
*   <strong>\[닫기\] 버튼</strong>: 편집기 창을 닫습니다. 저장하지 않은 변경사항은 반영되지 않습니다.
*   삭제 시 <strong>기본 주문 금액 계산식</strong>으로 지정된 항목(<strong>IsRequired = true</strong>)은 삭제 불가하며, 오류 메시지가 표시됩니다.

### 매매 전략에 계산식 연결하기

편집기에서 계산식을 저장한 후, <strong>주문 전략 설정</strong> 화면의 <strong>주문금액 표현식</strong> 드롭다운에서 원하는 계산식을 선택하면 해당 전략에 적용됩니다. 선택된 계산식의 이름과 수식 내용이 화면에 함께 표시되어 확인할 수 있습니다.

<strong>주의사항</strong>

*   계산 결과가 0 이하가 되지 않도록 수식을 설계하십시오.
*   수식에 사용할 수 있는 변수는 현재 <strong>기본주문금액</strong>, <strong>보유수량</strong> 두 가지이며, 대소문자 및 띄어쓰기에 주의하십시오.
*   연산은 단일 이항 연산(<strong>변수 연산자 숫자</strong>)만 지원합니다. 복잡한 괄호식이나 다중 연산은 지원하지 않습니다.

## 5.3.6 주문 전략 설정 (주문전략상세 편집)

개요

<strong>주문 전략</strong>은 자동 매매에서 실제 주문을 어떻게 실행할지 정의하는 규칙 단위입니다. 하나의 매매 전략에는 여러 개의 주문 전략을 등록할 수 있으며, 각 주문 전략은 <strong>"어떤 조건이 되면 / 어떤 유형으로 / 얼마에 / 주문한다"</strong> 는 흐름으로 구성됩니다.

<strong>주문전략상세 편집</strong> 창은 이 흐름의 모든 항목을 설정하는 화면입니다.

화면 열기

매매 전략 편집 화면의 <strong>주문 전략</strong> 탭에서 전략 항목을 더블 클릭하거나, <strong>추가</strong> 버튼으로 새 주문 전략을 생성하면 <strong>주문전략상세 편집</strong> 창이 열립니다.

화면 구성 요약

![](/images/manual/image-29.png)

① 매수/매도 구분

주문의 성격을 지정합니다.

<table><tbody><tr><td><p>선택값</p></td><td><p>설명</p></td></tr><tr><td><p><strong>최초매수</strong></p></td><td><p>해당 종목을 처음 매수할 때 실행되는 주문 전략입니다. 보유 수량이 0인 상태에서만 동작합니다.</p></td></tr><tr><td><p><strong>매수</strong></p></td><td><p>이미 보유 중인 종목에 대한 추가 매수 주문입니다.</p></td></tr><tr><td><p><strong>매도</strong></p></td><td><p>보유 종목을 매도할 때 실행되는 주문 전략입니다.</p></td></tr></tbody></table>

💡 <strong>최초매수</strong>와 <strong>매수</strong>를 각각 별도의 주문 전략으로 구성하면 분할 매수 전략을 구현할 수 있습니다.

② 주문유형 (거래 구분)

실제 주문을 어떤 방식으로 제출할지 지정합니다.

<table><tbody><tr><td><p>선택값</p></td><td><p>설명</p></td></tr><tr><td><p><strong>시장가</strong></p></td><td><p>현재 시장의 최우선 호가로 즉시 체결합니다. 빠른 체결이 필요한 경우 사용합니다.</p></td></tr><tr><td><p><strong>현재가</strong></p></td><td><p>현재가 기준으로 지정 틱만큼 조정한 가격으로 지정가 주문합니다. 호가 기준 틱 설정이 함께 표시됩니다.</p></td></tr><tr><td><p><strong>시간외단일가</strong></p></td><td><p>장 마감 후 시간외 단일가로 주문합니다. 틱 설정이 함께 표시됩니다.</p></td></tr></tbody></table>

③ 호가 기준 틱 설정 (TickGap)

<strong>주문유형이 현재가 또는 시간외단일가인 경우에만</strong> 표시됩니다.

현재가를 기준으로 몇 틱 위/아래 가격으로 지정가 주문할지를 설정합니다.

<table><tbody><tr><td><p>설정 예시</p></td><td><p>의미</p></td></tr><tr><td><p><strong>+1틱</strong></p></td><td><p>현재가보다 1틱 높은 가격으로 주문 (매수 시 빠른 체결 유도)</p></td></tr><tr><td><p><strong>0틱</strong></p></td><td><p>현재가와 동일한 가격으로 주문</p></td></tr><tr><td><p><strong>-1틱</strong></p></td><td><p>현재가보다 1틱 낮은 가격으로 주문 (매수 시 더 낮은 가격 노림)</p></td></tr><tr><td><p><strong>+50틱</strong> ~ <strong>-50틱</strong></p></td><td><p>최대 ±50틱 범위 내에서 선택 가능</p></td></tr></tbody></table>

💡 <strong>매수 주문 시</strong>: 틱을 높게 설정할수록 체결 가능성이 높아지지만 불리한 가격으로 체결될 수 있습니다. 💡 <strong>매도 주문 시</strong>: 틱을 낮게 설정할수록 빠른 매도가 가능하지만 더 낮은 가격에 체결될 수 있습니다.

④ 실행주기

해당 주문 전략을 조건 충족 시 몇 번 실행할지 설정합니다.

<table><tbody><tr><td><p>선택값</p></td><td><p>설명</p></td></tr><tr><td><p><strong>1회</strong></p></td><td><p>조건 충족 시 1회만 주문을 실행합니다. 이후 동일 신호가 발생해도 재실행하지 않습니다.</p></td></tr><tr><td><p><strong>매일</strong></p></td><td><p>매 거래일 조건 충족 시마다 주문을 실행합니다. 반복 매수/매도 전략에 사용합니다.</p></td></tr></tbody></table>

⑤ 준비조건

![](/images/manual/image-30.png)

주문 실행 전 사전 확인용 조건입니다.  
준비조건이 충족된 경우에만 실행조건 평가로 넘어갑니다.  
오른쪽 상단의 <strong>사용</strong> 토글 버튼으로 준비조건 사용 여부를 활성화/비활성화할 수 있습니다.

준비조건 유형은 세 가지 중 하나를 선택합니다.

시스템조건식

<strong>시스템조건식 만들기 (준비, 실행)</strong> 버튼에서 미리 만들어 둔 시스템조건식을 적용합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>그룹명</strong></p></td><td><p>시스템조건식이 속한 그룹을 선택합니다.</p></td></tr><tr><td><p><strong>준비조건</strong></p></td><td><p>해당 그룹에 속한 시스템조건식 목록에서 하나를 선택합니다.</p></td></tr><tr><td><p><strong>시스템조건식 상세</strong></p></td><td><p>선택된 시스템조건식의 세부 내용(좌항 / 비교 / 우항)이 하단에 표시됩니다.</p></td></tr><tr><td><p><strong>조합</strong></p></td><td><p>시스템조건식 항목들의 논리 조합 표현식이 하단에 표시됩니다.</p></td></tr><tr><td><p><strong>사용자 정의 옵션</strong></p></td><td><p>추가적으로 적용할 사용자 정의 조건 항목 목록이 표시됩니다. 체크박스로 사용 여부를 선택합니다.</p></td></tr></tbody></table>

키움 조건검색식

키움증권 HTS에서 저장한 조건검색식을 그대로 활용합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>준비조건</strong></p></td><td><p>키움 조건검색식 목록에서 사용할 검색식을 선택합니다.</p></td></tr><tr><td><p><strong>편입</strong></p></td><td><p>해당 종목이 조건검색식 결과에 편입되어 있을 때 조건 충족으로 판단합니다.</p></td></tr><tr><td><p><strong>포착</strong></p></td><td><p>특정 시간에 조건검색식을 실행하여 결과에 포함될 때 조건 충족으로 판단합니다. <strong>포착</strong> 선택 시 검색 시간 입력란이 함께 표시됩니다.</p></td></tr></tbody></table>

사용자 정의

코드로 구현된 커스텀 전략 로직을 준비조건으로 사용합니다. 드롭다운에서 사용 가능한 사용자 정의 전략을 선택합니다.

⑥ 실행조건

![](/images/manual/image-31.png)

주문을 실제로 실행할 조건입니다.  
준비조건이 활성화된 경우, 준비조건을 통과한 후 실행조건이 평가됩니다.  
설정 방식은 준비조건과 동일하게 <strong>시스템조건식 / 키움 조건검색식 / 사용자 정의</strong> 세 가지 중 선택합니다.

⚠️ 실행조건은 항상 활성 상태이며, 비활성화 토글이 없습니다.

⑦ 주문금액 계산식

![](/images/manual/image-32.png)

이 주문 전략에서 사용할 주문 금액 계산식을 선택합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>주문금액 계산식</strong></p></td><td><p>드롭다운에서 <strong>금액 표현식 편집기</strong>에서 미리 만들어 둔 계산식을 선택합니다.</p></td></tr><tr><td><p><strong>수식 표시줄</strong></p></td><td><p>선택된 계산식의 실제 수식 내용이 하단에 표시됩니다. 예) <strong>기본주문금액 * 2</strong></p></td></tr></tbody></table>

💡 새로운 계산식을 만들려면 오른쪽 상단의 <strong>"주문 금액 계산식 만들기"</strong> 버튼을 클릭합니다. (→ 5.3.5 금액 표현식 편집기 참조)

### 설정 흐름 예시

<strong>예시: "RSI 과매도 구간 진입 시 현재가+1틱으로 최초매수, 1회 실행"</strong>

<table><tbody><tr><td><p>항목</p></td><td><p>설정값</p></td></tr><tr><td><p>매수/매도</p></td><td><p>최초매수</p></td></tr><tr><td><p>주문유형</p></td><td><p>현재가</p></td></tr><tr><td><p>호가 기준 틱</p></td><td><p>+1틱</p></td></tr><tr><td><p>실행주기</p></td><td><p>1회</p></td></tr><tr><td><p>준비조건</p></td><td><p>사용 안 함 (토글 OFF)</p></td></tr><tr><td><p>실행조건</p></td><td><p>키움 조건검색식 → <strong>RSI_과매도</strong> 조건식 선택</p></td></tr><tr><td><p>주문금액 계산식</p></td><td><p><strong>기본주문금액 * 1</strong></p></td></tr></tbody></table>

저장 및 닫기

<table><tbody><tr><td><p>버튼</p></td><td><p>동작</p></td></tr><tr><td><p><strong>확인</strong></p></td><td><p>설정 내용을 저장하고 편집 창을 닫습니다.</p></td></tr><tr><td><p><strong>취소</strong></p></td><td><p>변경 내용을 저장하지 않고 편집 창을 닫습니다.</p></td></tr></tbody></table>

### 주의 사항

*   <strong>준비조건과 실행조건을 모두 키움 조건검색식으로 설정</strong>하는 경우, 해당 검색식이 키움 HTS에 등록되어 있어야 합니다.  
    목록이 비어 있는 경우 → 9.2 조건검색식 목록 불러오기를 먼저 수행하십시오.
*   <strong>실행주기를 매일로 설정</strong>한 경우, 동일 종목에 대해 매일 반복 주문이 발생할 수 있으므로 <strong>동일 종목 최대 매수 횟수 설정</strong>(→ 2.5 환경 설정 참조)과 함께 사용하는 것을 권장합니다.
*   <strong>주문유형 현재가</strong>는 실제로는 지정가 주문이며, 틱 설정으로 호가 단위 조정이 가능합니다.

## 5.3.7 거래 제외 종목 기준 설정

### 개요

거래 제외 종목 기준 설정은 자동 매매 실행 시 <strong>특정 속성을 가진 종목은 처음부터 매매 대상에서 제외</strong>하는 필터 기능입니다.

예를 들어 조건검색식에 의해 종목이 편입되더라도, 해당 종목이 "투자경고" 상태이거나 "ETF" 종목이거나 특정 업종에 속하는 경우라면 자동으로 걸러내어 주문이 나가지 않도록 차단합니다.

이 설정은 <strong>매매 전략 단위로 독립적으로 관리</strong>되며, 전략마다 서로 다른 제외 기준을 적용할 수 있습니다.

설정 화면 열기

자동 매매 편집기에서 전략을 선택한 후 <strong>\[매매 제외 카테고리 수정\]</strong> 버튼을 클릭하면 <strong>"매매 종목 필터"</strong> 창이 열립니다.

창 상단에 <strong>"매매 종목 필터 (제외 할 카테고리를 선택하세요)"</strong> 라는 안내 문구가 표시됩니다.

화면 구성

필터 창은 총 7개의 카테고리 열로 나뉘어 있으며, 각 항목 옆의 <strong>체크박스를 체크하면 해당 속성의 종목이 거래에서 제외</strong>됩니다.

![](/images/manual/image-33.png)

카테고리별 항목 상세

① 거래소

종목이 상장된 거래소를 기준으로 제외합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>KRX</strong></p></td><td><p>한국거래소(유가증권·코스닥·코넥스) 상장 종목</p></td></tr><tr><td><p><strong>NXT</strong></p></td><td><p>NXT(넥스트레이드) 거래 종목</p></td></tr></tbody></table>

💡 특정 거래소 종목을 완전히 배제하고 싶을 때 사용합니다.

② 감리구분

키움증권에서 제공하는 종목의 감리 상태를 기준으로 제외합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>정상</strong></p></td><td><p>감리 이슈가 없는 일반 종목</p></td></tr><tr><td><p><strong>단기과열</strong></p></td><td><p>단기간 급등으로 과열 지정된 종목</p></td></tr><tr><td><p><strong>투자주의</strong></p></td><td><p>투자 주의 지정 종목</p></td></tr><tr><td><p><strong>투자경고</strong></p></td><td><p>투자 경고 지정 종목</p></td></tr><tr><td><p><strong>투자주의환기종목</strong></p></td><td><p>지속적인 이상 거래로 주의 환기 지정 종목</p></td></tr><tr><td><p><strong>투자위험</strong></p></td><td><p>투자 위험 지정 종목 (상폐 위험 등)</p></td></tr></tbody></table>

⚠️ 감리 지정 종목은 거래 제한이나 급격한 가격 변동이 발생할 수 있으므로, <strong>투자경고</strong> · <strong>투자위험</strong> 항목을 체크하여 제외하는 것을 권장합니다.

③ 시장구분

종목이 속한 시장을 기준으로 제외합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>코스피</strong></p></td><td><p>유가증권시장(KOSPI) 상장 종목</p></td></tr><tr><td><p><strong>코스닥</strong></p></td><td><p>코스닥(KOSDAQ) 상장 종목</p></td></tr><tr><td><p><strong>ETF</strong></p></td><td><p>상장지수펀드(ETF)</p></td></tr><tr><td><p><strong>None</strong></p></td><td><p>시장 구분 정보가 없는 종목</p></td></tr></tbody></table>

④ 업종

종목의 업종 분류를 기준으로 제외합니다.

아래 업종 중 원하는 항목을 선택하면 해당 업종에 속한 모든 종목이 제외됩니다.

<table><tbody><tr><td><p>그룹</p></td><td><p>업종 목록</p></td></tr><tr><td><p>제조/산업</p></td><td><p>제약, 화학, 비금속, 금속, 기계/장비, 전기/전자, 섬유/의류, 종이/목재, 기타제조, 제조</p></td></tr><tr><td><p>소비/유통</p></td><td><p>유통, 음식료/담배, 오락/문화, 출판/매체복제</p></td></tr><tr><td><p>서비스/IT</p></td><td><p>일반서비스, IT 서비스, 통신</p></td></tr><tr><td><p>금융</p></td><td><p>금융, 보험, 증권</p></td></tr><tr><td><p>기반시설</p></td><td><p>전기/가스, 건설, 운송장비/부품, 운송/창고</p></td></tr><tr><td><p>기타</p></td><td><p>의료/정밀기기, 부동산</p></td></tr></tbody></table>

⑤ 회사크기분류

시가총액 기준 회사 규모를 기준으로 제외합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>소형주</strong></p></td><td><p>시가총액 기준 소형주로 분류된 종목</p></td></tr><tr><td><p><strong>중형주</strong></p></td><td><p>시가총액 기준 중형주로 분류된 종목</p></td></tr><tr><td><p><strong>대형주</strong></p></td><td><p>시가총액 기준 대형주로 분류된 종목</p></td></tr></tbody></table>

⑥ 회사분류

기업 특성에 따른 분류를 기준으로 제외합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>외국기업</strong></p></td><td><p>국내 증시에 상장된 외국 기업</p></td></tr><tr><td><p><strong>중견기업</strong></p></td><td><p>중견기업으로 분류된 종목</p></td></tr><tr><td><p><strong>스팩</strong></p></td><td><p>기업인수목적회사(SPAC)</p></td></tr><tr><td><p><strong>우량기업</strong></p></td><td><p>재무 건전성이 높은 우량 기업</p></td></tr><tr><td><p><strong>벤처기업</strong></p></td><td><p>벤처기업으로 등록된 종목</p></td></tr><tr><td><p><strong>신성장기업</strong></p></td><td><p>신성장 기업으로 분류된 종목</p></td></tr></tbody></table>

💡 <strong>스팩</strong>은 변동성이 크므로, 일반 자동 매매 전략에서는 제외하는 것을 권장합니다.

⑦ 투자유의종목

투자 주의가 필요한 특수 지정 종목을 기준으로 제외합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>해당없음</strong></p></td><td><p>투자유의 지정이 없는 일반 종목</p></td></tr><tr><td><p><strong>단기과열</strong></p></td><td><p>단기 과열로 지정된 종목</p></td></tr><tr><td><p><strong>투자경고</strong></p></td><td><p>투자 경고로 지정된 종목</p></td></tr><tr><td><p><strong>ETF주의</strong></p></td><td><p>ETF 관련 주의 지정 종목</p></td></tr><tr><td><p><strong>투자위험</strong></p></td><td><p>투자 위험 지정 종목</p></td></tr></tbody></table>

적용 방법

*   각 카테고리에서 <strong>제외할 항목의 체크박스를 선택</strong>합니다.
    *   복수 카테고리, 복수 항목을 동시에 선택할 수 있습니다.
*   <strong>"적용"</strong> 버튼을 클릭합니다.
    *   선택한 내용이 해당 매매 전략의 거래 제외 기준으로 저장됩니다.
*   <strong>"취소"</strong> 버튼을 클릭하면 변경 사항 없이 창이 닫힙니다.

동작 방식

*   설정된 제외 기준은 자동 매매 실행 중 종목이 신호를 수신했을 때 <strong>실시간으로 적용</strong>됩니다.
*   제외 기준에 해당하는 종목에 대해서는 주문 전략의 <strong>준비조건 / 실행조건 평가 자체가 건너뜁니다</strong>.
*   복수의 카테고리를 선택한 경우, <strong>하나라도 해당</strong>되면 해당 종목은 제외됩니다. (OR 조건)

현재 설정 확인

매매 전략 편집 화면에서 <strong>"매매 종목 필터"</strong> 버튼 아래에 현재 설정된 제외 기준 목록이 태그 형태로 표시됩니다. 제외 기준이 없는 경우에는 모든 종목이 매매 대상이 됩니다.

### 권장 설정 예시

<table><tbody><tr><td><p>목적</p></td><td><p>권장 제외 항목</p></td></tr><tr><td><p>안정적인 매매</p></td><td><p>감리구분: <strong>투자경고</strong>, <strong>투자위험</strong> / 회사분류: <strong>스팩</strong></p></td></tr><tr><td><p>코스닥 종목만 매매</p></td><td><p>시장구분: <strong>코스피</strong>, <strong>ETF</strong></p></td></tr><tr><td><p>우량주 위주 매매</p></td><td><p>회사크기분류: <strong>소형주</strong> / 감리구분: <strong>투자주의</strong>, <strong>투자경고</strong>, <strong>투자위험</strong></p></td></tr><tr><td><p>금융주 제외</p></td><td><p>업종: <strong>금융</strong>, <strong>보험</strong>, <strong>증권</strong></p></td></tr></tbody></table>

주의 사항

*   제외 기준은 <strong>전략 단위</strong>로 저장됩니다. 다른 전략에는 영향을 주지 않습니다.
*   종목의 업종·감리 상태 등은 <strong>키움증권에서 제공하는 종목 기본 정보</strong>를 기준으로 판단합니다. 데이터 갱신 주기에 따라 최신 상태와 차이가 있을 수 있습니다.
*   제외 기준을 너무 넓게 설정하면 매매 대상 종목이 지나치게 줄어들 수 있습니다.

## 5.3.8 보유 수 제한 및 재매수 제한 설정

### 개요

매매 전략에서 발생할 수 있는 <strong>과다 종목 보유</strong>와 <strong>당일 동일 종목 반복 매수</strong>를 제어하기 위한 리스크 관리 설정입니다.  
이 두 설정은 <strong>키움 조건검색식 기반</strong> 자동 매매 전략에서 활성화됩니다.

💡 단일 종목 선정 방식의 전략에서는 보유할 종목이 이미 고정되어 있으므로 해당 설정이 적용되지 않습니다.

화면 위치

<strong>자동매매 만들기 (키움 조건검색식)</strong> 창 → 전략 기본 설정 영역에서 확인할 수 있습니다.

① 보유 종목수 제한 (HoldingCountLimit)

![](/images/manual/image-34.png)

기능 설명

이 전략이 <strong>동시에 보유할 수 있는 최대 종목 수</strong>를 지정합니다.  
조건검색식으로 신호가 포착된 종목이 아무리 많더라도, 보유 종목 수가 이 한도에 도달하면 <strong>새로운 최초매수 주문이 차단</strong>됩니다.

입력 규칙

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>입력 형식</strong></p></td><td><p>정수 (숫자)</p></td></tr><tr><td><p><strong>최소값</strong></p></td><td><p><strong>0</strong> (제한 없음)</p></td></tr><tr><td><p><strong>최대값</strong></p></td><td><p><strong>90</strong></p></td></tr><tr><td><p><strong>유효성 오류</strong></p></td><td><p>0 미만이거나 90 초과 시 저장 불가</p></td></tr></tbody></table>

동작 방식

신호 발생 → 현재 보유 종목 수 확인

├── 보유 수 < 제한 수 → 최초매수 주문 진행

└── 보유 수 >= 제한 수 → 주문 차단 (로그 기록)

*   보유 수 계산 기준은 <strong>해당 전략이 현재 보유 중인 종목 수</strong>입니다.
*   다른 전략의 보유 종목과는 무관하게 <strong>전략 단위</strong>로 카운트됩니다.
*   보유 종목이 매도되면 카운트가 줄어들고, 이후 다시 매수가 가능해집니다.

설정 예시

<table><tbody><tr><td><p>설정값</p></td><td><p>동작</p></td></tr><tr><td><p><strong>0</strong></p></td><td><p>제한 없음. 조건 충족 시 계속 매수합니다.</p></td></tr><tr><td><p><strong>5</strong></p></td><td><p>동시에 최대 5개 종목까지만 보유합니다.</p></td></tr><tr><td><p><strong>10</strong></p></td><td><p>동시에 최대 10개 종목까지만 보유합니다.</p></td></tr></tbody></table>

⚠️ <strong>0</strong>으로 설정하면 제한이 없으므로, 조건 신호가 많이 발생할 경우 예상치 못한 대규모 매수가 일어날 수 있습니다. 반드시 적절한 상한값을 입력하는 것을 권장합니다.

② 당일 동일 종목 재매수 제한 (SameStockTradeLimit)

기능 설명

체크박스가 <strong>활성화된 경우</strong>, 당일 매도한 종목은 <strong>같은 날 다시 매수하지 않도록</strong> 제한합니다.

이 기능은 당일 손절·익절 후 같은 종목을 반복적으로 재진입하는 것을 방지하기 위한 리스크 관리 옵션입니다.

동작 방식

매수 조건 충족 → 당일 동일 종목 매도 이력 확인

├── 매도 이력 없음 → 매수 주문 진행

└── 매도 이력 있음 → 주문 차단 (재매수 제한)

*   매도 이력 기준: <strong>당일(오늘) 자정 00:00 이후</strong> 해당 전략에서 발생한 매도 체결
*   다음 날이 되면 제한이 자동으로 초기화됩니다.

<table><tbody><tr><td><p>설정</p></td><td><p>동작</p></td></tr><tr><td><p><strong>체크 해제 (기본값)</strong></p></td><td><p>당일 매도 후에도 조건 충족 시 재매수를 허용합니다.</p></td></tr><tr><td><p><strong>체크 활성화</strong></p></td><td><p>당일 매도한 종목은 당일 내 재매수를 차단합니다.</p></td></tr></tbody></table>

💡 <strong>변동성이 높은 장세</strong>에서 동일 종목을 반복 매매하는 전략이라면 체크 해제를 유지하고, <strong>손절 후 재진입을 막고 싶은 전략</strong>에서는 활성화하는 것을 권장합니다.

글로벌 제한 설정과의 관계

부엉이 트레이더 에는 전략별 설정 외에 <strong>환경 설정(Config)에서 계좌 단위로 적용되는 글로벌 제한</strong>도 별도로 존재합니다.

<table><tbody><tr><td><p>설정 위치</p></td><td><p>설정 이름</p></td><td><p>적용 범위</p></td></tr><tr><td><p>환경 설정 → 일일 최대 매수 금액</p></td><td><p><strong>MaxDailyBuyAmount</strong></p></td><td><p>계좌 전체</p></td></tr><tr><td><p>환경 설정 → 동일 종목 최대 매수 횟수</p></td><td><p><strong>MaxDailySameStockBuyOrderCount</strong></p></td><td><p>계좌 전체</p></td></tr><tr><td><p><strong>전략 설정 → 보유 종목수 제한</strong></p></td><td><p><strong>HoldingCountLimit</strong></p></td><td><p>전략 단위</p></td></tr><tr><td><p><strong>전략 설정 → 당일 동일 종목 재매수 제한</strong></p></td><td><p><strong>SameStockTradeLimit</strong></p></td><td><p>전략 단위</p></td></tr></tbody></table>

두 레벨의 제한이 <strong>동시에 적용</strong>됩니다. 즉, 어느 한 쪽이라도 조건을 충족하지 못하면 주문은 차단됩니다.

💡 글로벌 제한 설정 변경 방법은 → <strong>2.5 환경 설정 파일 안내</strong> 를 참고하십시오.

관련 추가 설정

<strong>키움 조건검색식 기반 전략</strong>에는 보유·재매수 제한 외에도 아래 추가 옵션이 함께 제공됩니다.

지정 일시 자동 완료

작업이 생성된 시점으로부터 지정한 날짜·시간 이후 해당 작업을 <strong>자동으로 완료(종료) 처리</strong>합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p>체크박스</p></td><td><p>자동 완료 기능 활성화 여부</p></td></tr><tr><td><p>기준일</p></td><td><p>당일 / 익일 / 2일 후 ~ 5일 후 선택</p></td></tr><tr><td><p>시간</p></td><td><p>완료 처리할 시각 입력</p></td></tr></tbody></table>

지정 일시 일괄 매도

지정한 날짜·시간에 해당 전략이 보유한 <strong>모든 종목을 일괄 매도</strong>합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p>체크박스</p></td><td><p>일괄 매도 기능 활성화 여부</p></td></tr><tr><td><p>기준 일수</p></td><td><p>N일 후 일괄 매도</p></td></tr><tr><td><p>시간</p></td><td><p>일괄 매도 실행 시각</p></td></tr><tr><td><p>주문유형</p></td><td><p>시장가 / 현재가 선택</p></td></tr><tr><td><p>호가 기준 틱</p></td><td><p>현재가 선택 시 ±틱 조정</p></td></tr></tbody></table>

설정 권장 조합

<table><tbody><tr><td><p>전략 유형</p></td><td><p>보유 종목수 제한</p></td><td><p>당일 동일 종목 재매수 제한</p></td></tr><tr><td><p>다종목 스캘핑</p></td><td><p><strong>5 ~ 10</strong></p></td><td><p>체크 해제</p></td></tr><tr><td><p>단기 스윙 (손절 후 재진입 방지)</p></td><td><p><strong>5 ~ 15</strong></p></td><td><p>체크 활성화</p></td></tr><tr><td><p>분산 투자 (포트폴리오)</p></td><td><p><strong>10 ~ 30</strong></p></td><td><p>체크 활성화</p></td></tr><tr><td><p>제한 없이 전략 테스트</p></td><td><p><strong>0</strong></p></td><td><p>체크 해제</p></td></tr></tbody></table>

주의 사항

*   <strong>보유 종목수 제한 입력값은 0 이상 90 이하</strong>이어야 합니다. 범위를 벗어나면 저장 시 오류가 표시됩니다.
*   <strong>당일 동일 종목 재매수 제한</strong>은 매도 체결 이력을 기준으로 동작하므로, 미체결 매도 주문이 있는 상태에서는 바로 적용되지 않을 수 있습니다.
*   두 설정 모두 <strong>전략이 실행 중지 상태일 때 수정</strong>할 수 있습니다. 실행 중인 전략은 수정이 불가합니다.

## 5.4 매매 전략 수정 및 삭제

### 개요

이미 만들어진 매매 전략의 설정을 변경하거나 불필요한 전략을 제거하는 방법을 설명합니다.  
<strong>자동매매 만들기</strong> 화면 왼쪽의 전략 목록에서 수정·삭제할 전략을 선택하여 작업합니다.

화면 구성 (전략 목록 영역)

![](/images/manual/image-35.png)

<table><tbody><tr><td><p>버튼</p></td><td><p>기능</p></td></tr><tr><td><p><strong>+</strong></p></td><td><p>새 전략 추가</p></td></tr><tr><td><p><strong>-</strong></p></td><td><p>선택된 전략 삭제</p></td></tr><tr><td><p><strong>↑</strong></p></td><td><p>선택된 전략을 목록에서 위로 이동</p></td></tr><tr><td><p><strong>↓</strong></p></td><td><p>선택된 전략을 목록에서 아래로 이동</p></td></tr><tr><td><p><strong>저장</strong></p></td><td><p>현재 편집 내용을 저장(신규 등록 또는 수정 반영)</p></td></tr><tr><td><p><strong>닫기</strong></p></td><td><p>편집 창 닫기</p></td></tr></tbody></table>

## 5.4.1 매매 전략 수정

수정 절차

*   왼쪽 <strong>전략 목록</strong>에서 수정할 전략을 <strong>클릭하여 선택</strong>합니다.
*   오른쪽 편집 영역에서 변경할 항목을 수정합니다.
    *   이름, 계좌번호, 기본 매수 금액, 보유 종목수 제한 등 기본 설정
    *   자동 실행 시간대 설정
    *   매매 제외 카테고리
    *   주문 전략 상세 (추가 / 수정 / 삭제)
*   하단의 <strong>저장</strong> 버튼을 클릭합니다.
*   확인 대화창에서 <strong>예</strong>를 클릭하면 수정이 완료됩니다.

수정 시 유효성 검사 항목

저장 버튼 클릭 시 다음 항목들이 자동으로 검사됩니다. 하나라도 실패하면 저장이 차단됩니다.

<table><tbody><tr><td><p>검사 항목</p></td><td><p>실패 시 메시지</p></td></tr><tr><td><p>계좌번호 선택 여부</p></td><td><p>"선택한 계좌번호가 존재하지 않습니다."</p></td></tr><tr><td><p>최초매수 주문 전략 존재 여부</p></td><td><p>"최초매수 주문 전략이 존재하지 않습니다."</p></td></tr><tr><td><p>최초매수 주문 전략 1개 초과 여부</p></td><td><p>"최초매수 주문 전략은 1개만 존재해야 합니다."</p></td></tr><tr><td><p>최초매수 실행주기 = 1회 여부</p></td><td><p>"최초매수 주문 전략의 실행주기는 반드시 '1회' 이어야 합니다."</p></td></tr><tr><td><p>이름, 기본 매수 금액, 보유 종목수 제한 범위</p></td><td><p>각 항목별 오류 메시지 표시</p></td></tr><tr><td><p>키움 조건검색식 존재 여부 (조건검색식 기반 전략만)</p></td><td><p>"선택한 계정번호에 해당하는 키움 조건검색식이 존재하지 않습니다."</p></td></tr></tbody></table>

수정 제약 조건

전략의 현재 상태에 따라 일부 항목은 수정이 제한될 수 있습니다.

<strong>① 실행 중인 전략</strong>

<table><tbody><tr><td><p>상태</p></td><td><p>동작</p></td></tr><tr><td><p>전략이 자동 매매 실행 중 (<strong>IsRun = true</strong>)</p></td><td><p><strong>수정 불가</strong> — "실행중인 매매 전략은 수정할 수 없습니다." 오류 표시</p></td></tr></tbody></table>

💡 수정하려면 자동 매매 스위치 화면에서 해당 전략을 먼저 <strong>OFF</strong> 하십시오.

<strong>② 계좌번호 변경</strong>

<table><tbody><tr><td><p>전략 유형</p></td><td><p>조건</p></td><td><p>동작</p></td></tr><tr><td><p>단일 종목</p></td><td><p>진행중인 주문이 있음</p></td><td><p><strong>변경 불가</strong> — "진행중인 주문이 존재하여 계좌번호를 변경할 수 없습니다."</p></td></tr><tr><td><p>키움 조건검색식 / 사용자 정의</p></td><td><p>진행중인 매매전략 작업이 있음</p></td><td><p>작업 중지 여부를 사용자에게 확인 후 중지 시 변경 가능</p></td></tr></tbody></table>

<strong>③ 기본주문금액 변경</strong>

<table><tbody><tr><td><p>전략 유형</p></td><td><p>조건</p></td><td><p>동작</p></td></tr><tr><td><p>단일 종목</p></td><td><p>진행중인 주문이 있음</p></td><td><p><strong>변경 불가</strong> — "진행중인 주문이 존재하여 기본주문금액을 변경할 수 없습니다."</p></td></tr><tr><td><p>키움 조건검색식 / 사용자 정의</p></td><td><p>진행중인 매매전략 작업이 있음</p></td><td><p>계속 진행 여부를 사용자에게 확인 — 확인 시 변경 적용</p></td></tr></tbody></table>

<strong>④ 키움 조건검색식 기반 전략의 이미 생성된 작업</strong>

키움 조건검색식 기반 전략에 <strong>이미 생성된 매매전략 작업(종목 작업)</strong>이 있는 경우:

⚠️ 이미 생성된 매매전략 작업에는 수정 내용이 반영되지 않습니다.  
<strong>이후에 새로 생성되는 작업에만</strong> 변경 사항이 적용됩니다.

저장 시 아래와 같은 경고가 표시됩니다.

이미 생성된 매매전략작업이 있습니다: \[종목명 A, 종목명 B\]

키움조건식 기반에서 이미 생성된 매매전략작업은 수정되지 않습니다.

이후에 생성되는 매매전략작업에만 적용됩니다.

## 5.4.2 매매 전략 삭제

삭제 절차

1.  왼쪽 <strong>전략 목록</strong>에서 삭제할 전략을 <strong>클릭하여 선택</strong>합니다.
2.  목록 우측 상단의 <strong>\-</strong> 버튼을 클릭합니다.  
    (또는 목록에서 오른쪽 클릭 → <strong>삭제</strong> 메뉴 선택)
3.  확인 대화창에서 <strong>예</strong>를 클릭하면 삭제됩니다.

삭제 시 종속 데이터 처리

<table><tbody><tr><td><p>전략 유형</p></td><td><p>종속 데이터</p></td><td><p>처리 방식</p></td></tr><tr><td><p><strong>키움 조건검색식</strong></p></td><td><p>종속된 매매전략 작업이 있는 경우</p></td><td><p>"삭제 시 종속된 모든 매매전략 작업이 삭제됩니다." 경고 후 사용자 확인</p></td></tr><tr><td><p><strong>단일 종목</strong></p></td><td><p>진행중인 주문이 있는 경우</p></td><td><p>"이미 진행중인 주문이 존재합니다. 삭제 시 모든 주문내역이 삭제됩니다." 경고 후 사용자 확인</p></td></tr><tr><td><p><strong>모든 유형</strong></p></td><td><p>종속 데이터 없음</p></td><td><p>"매매전략을 삭제하시겠습니까?" 확인 후 즉시 삭제</p></td></tr></tbody></table>

⚠️ <strong>삭제된 전략 및 그에 종속된 모든 작업·주문 내역은 복구할 수 없습니다.</strong>  
삭제 전 반드시 내용을 확인하십시오.

삭제 제약 조건

<table><tbody><tr><td><p>상태</p></td><td><p>동작</p></td></tr><tr><td><p>전략이 자동 매매 실행 중 (<strong>IsRun = true</strong>)</p></td><td><p><strong>삭제 불가</strong> — 먼저 자동 매매를 중지하십시오.</p></td></tr></tbody></table>

## 5.4.3 전략 순서 변경

전략 목록의 표시 순서(실행 우선순위)를 조정할 수 있습니다.

1.  순서를 변경할 전략을 목록에서 선택합니다.
2.  <strong>↑ (위로 이동)</strong> 또는 <strong>↓ (아래로 이동)</strong> 버튼을 클릭합니다.
3.  순서는 변경 즉시 데이터베이스에 자동 저장됩니다. (별도 저장 버튼 불필요)

## 5.4.4 수정 시 주의 메시지 정리

수정 또는 삭제 과정에서 표시될 수 있는 주요 확인·경고 메시지는 다음과 같습니다.

<table><tbody><tr><td><p>메시지</p></td><td><p>원인</p></td><td><p>조치</p></td></tr><tr><td><p>"실행중인 매매 전략은 수정할 수 없습니다."</p></td><td><p>전략이 실행 중</p></td><td><p>자동 매매 스위치에서 먼저 OFF</p></td></tr><tr><td><p>"진행중인 주문이 존재하여 계좌번호를 변경할 수 없습니다."</p></td><td><p>단일종목 전략에 미완료 주문 존재</p></td><td><p>주문 처리 완료 후 수정</p></td></tr><tr><td><p>"진행중인 매매전략작업이 존재합니다. 계좌번호를 변경하려면 진행중인 매매전략작업의 사용을 모두 중지해야 합니다."</p></td><td><p>키움 조건검색식 전략에 활성 작업 존재</p></td><td><p>확인 후 자동 중지 또는 취소</p></td></tr><tr><td><p>"이미 실행중인 주문이 존재합니다. 예상하지 못한 문제가 발생할 수 있습니다."</p></td><td><p>활성 주문 상태에서 전략 수정 시도</p></td><td><p>경고 확인 후 수정 진행 여부 결정</p></td></tr><tr><td><p>"최초매수 주문 전략이 존재하지 않습니다."</p></td><td><p>주문 전략에 최초매수가 없음</p></td><td><p>주문 전략 추가</p></td></tr><tr><td><p>"선택한 계정번호에 해당하는 키움 조건검색식이 존재하지 않습니다."</p></td><td><p>해당 계좌의 조건검색식 목록에 없음</p></td><td><p>키움 HTS에서 동일 이름 조건검색식 등록 후 재시도</p></td></tr></tbody></table>

## 5.5 전략 가져오기 / 내보내기

### 개요

<strong>가져오기 / 내보내기</strong> 기능은 매매 전략을 <strong>JSON 파일 형식</strong>으로 저장하고 다시 불러올 수 있는 기능입니다.

이 기능을 활용하면 다음과 같은 작업이 가능합니다.

*   잘 동작하는 전략을 <strong>백업</strong>하여 보관
*   다른 PC로 전략을 <strong>이전</strong>
*   동일 전략을 <strong>복사</strong>하여 변형 전략 생성
*   전략 <strong>공유</strong>

내보내기 / 가져오기 버튼 위치

<strong>자동매매 만들기</strong> 화면의 전략 목록에서 오른쪽 클릭(컨텍스트 메뉴) 또는 전략 목록 상단 메뉴에서 접근합니다.

<table><tbody><tr><td><p>메뉴 항목</p></td><td><p>기능</p></td></tr><tr><td><p><strong>가져오기</strong></p></td><td><p>외부 JSON 파일에서 매매 전략을 불러옵니다.</p></td></tr><tr><td><p><strong>내보내기</strong></p></td><td><p>선택된 전략을 JSON 파일로 저장합니다.</p></td></tr></tbody></table>

## 5.5.1 전략 내보내기 (Export)

내보내기 절차

1.  왼쪽 <strong>전략 목록</strong>에서 내보낼 전략을 <strong>선택</strong>합니다.
2.  목록에서 <strong>오른쪽 클릭 → 내보내기</strong> 를 선택합니다.
3.  <strong>파일 저장 대화창</strong>이 열립니다.
    *   기본 파일 이름: <strong>{전략 이름}.json</strong>
    *   파일 형식: <strong>JSON 파일 (*.json)</strong>
4.  저장할 경로와 파일 이름을 선택한 후 <strong>저장</strong> 버튼을 클릭합니다.
5.  성공 시 안내 메시지가 표시됩니다.

매매 전략을 '{저장경로\\파일명.json}'에 저장되었습니다.

내보내기 파일에 포함되는 정보

내보내기 파일(JSON)에는 전략 재현에 필요한 모든 구성 요소가 함께 포함됩니다.

<table><tbody><tr><td><p>포함 항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>전략 기본 정보</strong></p></td><td><p>이름, 계좌번호, 기본 매수 금액, 보유 종목수 제한, 재매수 제한, 자동 실행 시간 등</p></td></tr><tr><td><p><strong>주문 전략 목록</strong></p></td><td><p>매수/매도 구분, 주문유형, 준비·실행 조건 설정, 금액 계산식 연결 정보 등</p></td></tr><tr><td><p><strong>시스템조건식 목록</strong></p></td><td><p>준비조건·실행조건에 사용된 모든 시스템조건식의 상세 내용</p></td></tr><tr><td><p><strong>키움 조건검색식 이름 목록</strong></p></td><td><p>전략에서 사용된 키움 조건검색식의 이름</p></td></tr><tr><td><p><strong>주문금액 계산식 목록</strong></p></td><td><p>전략에 연결된 금액 계산식 내용</p></td></tr><tr><td><p><strong>거래 제외 기준</strong></p></td><td><p>설정된 매매 제외 카테고리 목록</p></td></tr></tbody></table>

⚠️ 현재 진행 중인 <strong>매매전략 작업(종목별 주문 이력)</strong> 은 내보내기 파일에 포함되지 않습니다.  
또한 내보내기 파일에서 전략의 <strong>실행 상태는 항상 OFF</strong>로 초기화됩니다.

내보내기 파일 예시 구조

{

"tradeStrategyDto": {

"name": "RSI 전략",

"unitTradeAmount": 500000,

"holdingCountLimit": 5,

...

"orderStrategies": \[ ... \]

},

"conditionExpressions": \[ ... \],

"conditionSearchExpressionNames": \[ "RSI\_30이하", "거래량급등" \],

"amountExpressions": \[ ... \]

}

## 5.5.2 전략 가져오기 (Import)

가져오기 전 사전 조건

⚠️ <strong>반드시 확인하세요:</strong>  
가져오려는 전략에서 사용된 <strong>키움 조건검색식 이름</strong>이 내 키움 영웅문 HTS에 <strong>동일한 이름</strong>으로 등록되어 있어야 합니다.  
조건검색식 이름이 없으면 가져오기가 실패합니다.

가져오기 절차

1.  <strong>오른쪽 클릭 → 가져오기</strong> 를 선택합니다.
2.  아래 사전 확인 메시지가 표시됩니다.

외부에서 가져오려는 매매 전략에 사용된 키움 조건검색식이 내 영웅문에 존재해야합니다. (동일한 이름)

계속하시겠습니까?

1.  <strong>예</strong>를 클릭하여 계속합니다.
2.  <strong>파일 열기 대화창</strong>이 열립니다.
    *   <strong>JSON 파일 (*.json)</strong> 형식의 파일을 선택합니다.
3.  <strong>계좌번호 선택 창</strong>이 열립니다.
    *   이 전략을 적용할 <strong>계좌번호를 선택</strong>합니다.
    *   내보내기 원본과 다른 계좌번호를 선택해도 됩니다.
4.  성공 시 전략이 목록에 추가되고 안내 메시지가 표시됩니다.  
    매매 전략을 '{파일경로}'에서 가져왔습니다.

가져오기 처리 방식

가져오기 시 내부적으로 다음과 같은 처리가 자동으로 수행됩니다.

<table><tbody><tr><td><p>항목</p></td><td><p>처리 방식</p></td></tr><tr><td><p><strong>전략 ID</strong></p></td><td><p>새로 발급 (원본 ID 무시)</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>사용자가 선택한 계좌번호로 교체</p></td></tr><tr><td><p><strong>실행 상태</strong></p></td><td><p>OFF로 초기화</p></td></tr><tr><td><p><strong>시스템조건식</strong></p></td><td><p>이름·수식·조합이 동일한 항목이 이미 있으면 <strong>기존 항목 재사용</strong>, 없으면 <strong>새로 추가</strong></p></td></tr><tr><td><p><strong>주문금액 계산식</strong></p></td><td><p>이름·수식이 동일한 항목이 이미 있으면 <strong>기존 항목 재사용</strong>, 없으면 <strong>새로 추가</strong></p></td></tr><tr><td><p><strong>키움 조건검색식</strong></p></td><td><p>선택한 계좌번호에 동일 이름의 검색식이 존재해야 함</p></td></tr><tr><td><p><strong>주문 전략 ID</strong></p></td><td><p>전체 새로 발급</p></td></tr></tbody></table>

가져오기 오류 및 해결 방법

<table><tbody><tr><td><p>오류 메시지</p></td><td><p>원인</p></td><td><p>해결 방법</p></td></tr><tr><td><p><strong>"대상 매매전략의 이름과 동일한 매매전략이 이미 존재합니다."</strong></p></td><td><p>같은 이름의 전략이 이미 등록되어 있음</p></td><td><p>기존 전략 이름을 변경하거나 삭제 후 재시도</p></td></tr><tr><td><p><strong>"대상 키움 조건검색식이 현재 키움 조건검색식에 없습니다. 키움 조건검색식 이름 : {이름}"</strong></p></td><td><p>해당 이름의 검색식이 영웅문에 없음</p></td><td><p>키움 영웅문 HTS에서 동일한 이름으로 조건검색식을 등록한 후 재시도</p></td></tr><tr><td><p><strong>"유효하지 않은 파일 경로입니다."</strong></p></td><td><p>선택한 파일이 존재하지 않음</p></td><td><p>파일 경로를 다시 확인</p></td></tr><tr><td><p><strong>"선택한 파일은 JSON 형식이어야 합니다."</strong></p></td><td><p>.json 확장자가 아닌 파일을 선택함</p></td><td><p>AmountExpression.json 파일만 선택</p></td></tr><tr><td><p><strong>"계좌번호를 선택하지 않았습니다."</strong></p></td><td><p>계좌 선택 창에서 계좌 선택 없이 닫음</p></td><td><p>계좌번호 선택 후 재시도</p></td></tr></tbody></table>

활용 시나리오

시나리오 1 — 전략 백업

1\. 전략 선택 → 내보내기

2\. 원하는 경로에 JSON 파일 저장

3\. 필요 시 가져오기로 복원

시나리오 2 — 전략 복사 후 변형

1\. 원본 전략 내보내기 → 파일 저장

2\. 가져오기 → 동일 계좌 선택

→ "동일 이름 전략 존재" 오류 발생

3\. 원본 전략 이름 변경 후 재시도

→ 복사된 전략이 추가됨

1.  복사된 전략 수정 후 저장

시나리오 3 — 다른 PC로 이전

\[PC A\]

1\. 전략 내보내기 → USB 또는 클라우드에 저장

\[PC B\]

1\. 조건검색식 목록 동기화 (9.2 참조)

2\. 가져오기 → 파일 선택 → 계좌번호 선택

→ 전략이 그대로 복원됨

주의 사항

*   내보낸 파일은 <strong>JSON 텍스트 파일</strong>이므로 외부에 공유 시 계좌번호 등 민감 정보 노출에 주의하십시오.
*   가져오기 전 해당 전략에서 사용하는 <strong>모든 키움 조건검색식 이름을 미리 확인</strong>하고, 영웅문 HTS에 동일한 이름으로 등록해 두어야 합니다. (→ 9.2 조건검색식 목록 불러오기 참조)
*   동일 이름의 전략은 가져오기가 불가합니다. 기존 전략 이름 변경 또는 삭제 후 재시도하십시오.
*   가져온 전략의 <strong>실행 상태는 항상 OFF</strong>이므로, 자동 매매를 시작하려면 별도로 ON 하여야 합니다.

# 6. 자동 매매 실행 및 모니터링

## 6.1 자동 매매 시작하기

### 6.1.1 개요

부엉이 트레이더의 자동 매매는 <strong>매매 전략 단위</strong>로 개별 ON/OFF가 가능합니다. 전략을 실행(ON)하면 프로그램이 실시간 시세 및 조건검색식 결과를 감시하며, 설정된 매수/매도 조건이 충족될 때 자동으로 주문을 발송합니다.

⚠️ <strong>선행 조건</strong>: 자동 매매를 시작하기 전에 반드시 아래 항목이 모두 준비되어 있어야 합니다.

*   키움 AppKey가 계좌번호에 정상 등록되어 있을 것
*   매매 전략이 <strong>정상</strong> 상태일 것 (오류 상태이면 실행 불가)
*   사용 여부가 <strong>사용중</strong> 으로 설정되어 있을 것

---

### 6.1.2 실행 흐름

전략 스위치를 ON으로 전환하면 내부적으로 다음 순서가 자동 진행됩니다.

[스위치 ON]

↓

① 실시간 종목 체결 등록 한도 확인 (최대 90 종목)

↓

② 실시간 조건검색식 등록 한도 확인 (편입용 최대 9개)

↓

③ 포착 조건검색식 충돌 여부 확인

↓

④ 전략 실행 상태 저장 (IsRun = true)

↓

⑤ 실시간 주식 체결 데이터 등록 갱신

↓

⑥ 편입 조건검색식 실시간 조건검색 등록

↓

[자동 매매 감시 시작]

### 6.1.3 실행 전 자동 검증 항목

스위치를 ON으로 전환할 때 프로그램이 자동으로 아래 항목을 검증합니다. 어느 하나라도 실패하면 스위치는 원래 상태(OFF)로 복원됩니다.

<table><tbody><tr><td><p>검증 항목</p></td><td><p>제한</p></td><td><p>초과 시 조치</p></td></tr><tr><td><p><strong>실시간 체결 종목 수</strong></p></td><td><p>최대 90 종목</p></td><td><p>오류 메시지 표시 후 실행 취소</p></td></tr><tr><td><p><strong>실시간 조건검색식 등록 수</strong></p></td><td><p>편입용 최대 9개</p></td><td><p>오류 메시지 표시 후 실행 취소</p></td></tr><tr><td><p><strong>포착 조건검색식 충돌</strong></p></td><td><p>같은 조건검색식이 이미 실행 중인 다른 전략에서 편입용으로 사용 중인 경우</p></td><td><p>오류 메시지 표시 후 실행 취소</p></td></tr><tr><td><p><strong>등록 계좌번호 유효성</strong></p></td><td><p>AppKey에 등록된 실제 계좌여야 함</p></td><td><p>전략을 오류 상태로 전환</p></td></tr></tbody></table>

💡 <strong>참고</strong>: 실시간 체결 종목 수는 현재 <strong>실행 중인 모든 전략의 매매 작업에서 감시 중인 종목의 합계</strong>를 기준으로 계산됩니다. 전략 하나가 여러 종목을 감시하고 있는 경우 그 종목 수만큼 차감됩니다.

### 6.1.4 장중 실행 중지 시 주의사항

이미 실행 중인 전략을 장중에 중지(OFF)하면 다음과 같은 경고 메시지가 표시됩니다.

<strong>"장중에 실행을 중지하면 처리되지 못한 매매 데이터가 발생할 수 있습니다. 이로 인해 예기치 못한 오류가 발생할 수 있습니다. 계속 진행하시겠습니까?"</strong>

*   <strong>[예]</strong> 를 선택하면 즉시 전략 실행이 중지됩니다. 이미 접수된 주문은 취소되지 않으며, 이후 체결 이벤트에 대한 후속 처리가 누락될 수 있습니다.
*   <strong>[아니오]</strong> 를 선택하면 스위치는 원래 ON 상태로 복원되며 매매가 계속됩니다.

⚠️ <strong>권장사항</strong>: 장중 중지가 필요한 경우 가급적 보유 종목이 없는 상태에서 수행하십시오.

### 6.1.5 스케줄러를 이용한 자동 시작

매일 정해진 시간에 프로그램이 자동으로 시작되도록 Windows 작업 스케줄러에 등록할 수 있습니다.

1.  메인 메뉴에서 <strong>[설정] → [스케줄러]</strong> 를 클릭합니다.
2.  <strong>자동 시작 사용</strong> 체크박스를 활성화합니다.
3.  <strong>시작 시간</strong>과 <strong>종료 시간</strong>을 입력합니다.
4.  실행할 <strong>요일</strong>을 선택합니다 (월~일 개별 선택 가능).
5.  <strong>[저장]</strong> 버튼을 클릭합니다.

⚠️ <strong>주의</strong>: 스케줄러 등록은 <strong>관리자 권한</strong>으로 실행해야 합니다. 일반 권한으로 실행한 경우 저장이 거부됩니다.

## 6.2 자동 매매 스위치 대시보드

### 6.2.1 대시보드 위치 및 역할

자동 매매 스위치 대시보드는 <strong>메인 화면 하단 탭</strong>에 위치합니다. 현재 선택된 계좌에 등록된 매매 전략 목록을 카드 형태로 표시하며, 각 전략을 별도 화면을 열지 않고 <strong>즉시 ON/OFF</strong> 할 수 있는 빠른 제어 패널입니다.

### 6.2.2 화면 구성

![](/images/manual/image-36.png)

대시보드에는 조건을 통과한 전략만 표시됩니다. 각 전략 카드에는 다음 정보가 포함됩니다.

<table><tbody><tr><td><p>구성 요소</p></td><td><p>내용</p></td></tr><tr><td><p><strong>전략 표시 이름</strong></p></td><td><p><strong>[계좌번호] 전략명</strong> 형식으로 표시 (예: <strong>[12345678901] 단기모멘텀전략</strong>)</p></td></tr><tr><td><p><strong>실행 스위치</strong></p></td><td><p>토글 형태의 ON/OFF 스위치. 파란색(ON) / 회색(OFF)</p></td></tr></tbody></table>

💡 <strong>표시 조건</strong>: 아래 조건을 <strong>모두</strong> 충족하는 전략만 대시보드에 표시됩니다.

*   <strong>사용 여부</strong>: <strong>사용중</strong> 으로 설정된 전략
*   <strong>오류 여부</strong>: <strong>정상</strong> 상태인 전략 (오류 전략은 제외)
*   <strong>계좌 일치</strong>: 현재 선택된 계좌에 연동된 전략

### 6.2.3 전략 ON/OFF 방법

1.  실행하려는 전략 카드의 <strong>토글 스위치를 클릭</strong>하여 ON(파란색) 상태로 전환합니다.
2.  내부 검증(6.1.3 참조)이 모두 통과되면 스위치가 ON 상태로 확정되고 자동 매매가 시작됩니다.
3.  실행을 중지하려면 동일한 스위치를 다시 클릭하여 OFF(회색)로 전환합니다.

### 6.2.4 대시보드 자동 갱신 조건

대시보드 목록은 다음 상황에서 자동으로 새로 고침됩니다.

<table><tbody><tr><td><p>갱신 트리거</p></td><td><p>설명</p></td></tr><tr><td><p><strong>계좌 변경</strong></p></td><td><p>상단 계좌 선택 콤보박스에서 다른 계좌를 선택하면 해당 계좌의 전략 목록으로 즉시 교체됩니다.</p></td></tr><tr><td><p><strong>전략 추가/수정/삭제</strong></p></td><td><p>자동매매 편집기에서 전략을 저장하거나 삭제하면 대시보드 목록이 자동으로 갱신됩니다.</p></td></tr></tbody></table>

### 6.2.5 대시보드에서 전략이 보이지 않을 때 확인 사항

대시보드에 전략이 표시되지 않는 경우 아래 항목을 순서대로 확인하십시오.

1.  <strong>계좌 선택 확인</strong>: 상단 계좌 선택 영역에서 올바른 계좌가 선택되어 있는지 확인합니다.
2.  <strong>사용 여부 확인</strong>: 자동매매 편집기에서 해당 전략의 사용 여부가 <strong>사용중</strong>으로 설정되어 있는지 확인합니다.
3.  <strong>오류 상태 확인</strong>: 자동매매 편집기 목록에서 해당 전략이 🔴 오류 상태가 아닌지 확인합니다. 오류가 있는 경우 전략 내용을 수정하고 저장합니다.
4.  <strong>AppKey 등록 확인</strong>: 메뉴 <strong>[설정] → [키움 AppKey 관리]</strong> 에서 해당 계좌번호에 AppKey가 정상 등록되어 있는지 확인합니다.

## 6.3 자동 매매 현황 모니터링

### 6.3.1 개요

<strong>자동매매 현황</strong> 화면은 실행 중인 전략과 그에 속한 종목 작업, 주문·체결 내역을 실시간으로 계층적으로 확인할 수 있는 모니터링 화면입니다.

화면 열기

메인 화면 상단 메뉴 또는 탭에서 <strong>자동매매 현황</strong> 을 클릭합니다.

화면 구성

화면은 좌→우로 5개 영역이 분할 배치되며, 왼쪽 항목을 선택하면 오른쪽 영역이 연계되어 드릴다운 방식으로 조회됩니다.

![](/images/manual/image-37.png)

① 전략 목록 (왼쪽 패널)

등록된 모든 매매 전략이 표시됩니다.

<table><tbody><tr><td><p>컬럼</p></td><td><p>설명</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>전략에 연결된 거래 계좌번호</p></td></tr><tr><td><p><strong>전략명</strong></p></td><td><p>매매 전략 이름</p></td></tr></tbody></table>

전략을 선택하면 하단 <strong>전략 상세 정보</strong> 영역에 다음 정보가 표시됩니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p>기본 매수 금액</p></td><td><p>설정된 기본 매수 금액</p></td></tr><tr><td><p>자동매매 매수시간A</p></td><td><p>매수 실행 시간대 A</p></td></tr><tr><td><p>자동매매 매수시간B</p></td><td><p>매수 실행 시간대 B</p></td></tr><tr><td><p>자동매매 매도시간A</p></td><td><p>매도 실행 시간대 A</p></td></tr><tr><td><p>자동매매 매도시간B</p></td><td><p>매도 실행 시간대 B</p></td></tr><tr><td><p>사용 여부</p></td><td><p>사용 중 / 사용 중지</p></td></tr><tr><td><p>실행 여부</p></td><td><p>실행 중 / 실행 중지</p></td></tr><tr><td><p>기타 설명</p></td><td><p>전략 메모</p></td></tr></tbody></table>

② 작업중 전략 (종목 목록, 두 번째 패널)

왼쪽에서 선택한 전략에 속하는 <strong>종목별 작업 목록</strong>이 표시됩니다.
키움 조건검색식 기반 전략에서는 조건에 포착된 각 종목이 하나의 작업으로 생성됩니다.

<table><tbody><tr><td><p>컬럼</p></td><td><p>설명</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>해당 작업의 계좌번호</p></td></tr><tr><td><p><strong>종목코드</strong></p></td><td><p>매매 대상 종목 코드</p></td></tr><tr><td><p><strong>종목명</strong></p></td><td><p>종목명</p></td></tr><tr><td><p><strong>생성일시</strong></p></td><td><p>작업이 시작된 일시</p></td></tr></tbody></table>

💡 오류 상태인 항목은 <strong>빨간색 글씨</strong>로 표시됩니다.

종목 작업을 선택하면 하단 <strong>작업 상세 정보</strong>가 표시됩니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p>기본 매수 금액</p></td><td><p>이 작업에 적용된 매수 금액</p></td></tr><tr><td><p>사용 여부</p></td><td><p>실행 중 / 실행 중지</p></td></tr><tr><td><p>오류 여부</p></td><td><p>정상 / 오류</p></td></tr><tr><td><p>오류 메시지</p></td><td><p>오류 발생 시 상세 메시지</p></td></tr><tr><td><p>기타 설명</p></td><td><p>작업 메모</p></td></tr></tbody></table>

작업 삭제

작업 항목에서 <strong>우클릭 → 삭제</strong> 를 선택하면 해당 종목 작업을 삭제할 수 있습니다.

③ 전략 명세 (오른쪽 상단)

선택한 종목 작업에 적용된 <strong>주문 전략 명세(실행 단계)</strong>가 표시됩니다.
각 명세는 최초매수·매수·매도 등 주문 전략 하나에 해당합니다.

<table><tbody><tr><td><p>컬럼</p></td><td><p>설명</p></td></tr><tr><td><p><strong>준비</strong></p></td><td><p>준비 조건 이름</p></td></tr><tr><td><p><strong>실행</strong></p></td><td><p>실행 조건 이름</p></td></tr><tr><td><p><strong>주문구분</strong></p></td><td><p>최초매수 / 매수 / 매도</p></td></tr><tr><td><p><strong>거래구분</strong></p></td><td><p>시장가 / 현재가 / 시간외단일가 등</p></td></tr><tr><td><p><strong>주문금액</strong></p></td><td><p>적용 중인 주문 금액 수식 결과</p></td></tr><tr><td><p><strong>준비 조건</strong></p></td><td><p><strong>통과</strong> / <strong>대기</strong></p></td></tr><tr><td><p><strong>실행 조건</strong></p></td><td><p><strong>통과</strong> / <strong>대기</strong></p></td></tr><tr><td><p><strong>오류</strong></p></td><td><p>정상 / 오류</p></td></tr><tr><td><p><strong>오류 메시지</strong></p></td><td><p>오류 내용</p></td></tr><tr><td><p><strong>생성일시</strong></p></td><td><p>명세 생성 시간</p></td></tr></tbody></table>

💡 <strong>준비 조건 = 통과, 실행 조건 = 통과</strong> 상태여야 해당 주문이 실제로 발송됩니다.

④ 주문 현황 (오른쪽 중간)

선택한 명세에서 발생한 <strong>주문 목록</strong>이 실시간으로 표시됩니다.

<table><tbody><tr><td><p>컬럼</p></td><td><p>설명</p></td></tr><tr><td><p><strong>종목코드</strong></p></td><td><p>주문 종목 코드</p></td></tr><tr><td><p><strong>종목명</strong></p></td><td><p>종목명</p></td></tr><tr><td><p><strong>주문구분</strong></p></td><td><p>매수 / 매도</p></td></tr><tr><td><p><strong>거래구분</strong></p></td><td><p>지정가 / 시장가 등</p></td></tr><tr><td><p><strong>주문시간</strong></p></td><td><p>주문 발송 일시</p></td></tr><tr><td><p><strong>주문수량</strong></p></td><td><p>주문한 수량</p></td></tr><tr><td><p><strong>주문가격</strong></p></td><td><p>주문 가격</p></td></tr><tr><td><p><strong>체결수량</strong></p></td><td><p>체결 완료된 수량</p></td></tr><tr><td><p><strong>미체결수량</strong></p></td><td><p>아직 체결되지 않은 수량</p></td></tr><tr><td><p><strong>주문번호</strong></p></td><td><p>키움 API에서 발급된 주문번호</p></td></tr><tr><td><p><strong>처리상태</strong></p></td><td><p>접수 / 체결 / 확인</p></td></tr></tbody></table>

⑤ 체결 현황 (오른쪽 하단)

선택한 주문의 <strong>체결 내역</strong>이 표시됩니다. 하나의 주문은 여러 건의 체결로 분할될 수 있습니다.

<table><tbody><tr><td><p>컬럼</p></td><td><p>설명</p></td></tr><tr><td><p><strong>종목코드</strong></p></td><td><p>체결 종목 코드</p></td></tr><tr><td><p><strong>종목명</strong></p></td><td><p>종목명</p></td></tr><tr><td><p><strong>주문구분</strong></p></td><td><p>매수 / 매도</p></td></tr><tr><td><p><strong>체결수량</strong></p></td><td><p>이번 체결 수량</p></td></tr><tr><td><p><strong>체결가격</strong></p></td><td><p>체결된 가격</p></td></tr><tr><td><p><strong>체결시간</strong></p></td><td><p>체결 발생 시간</p></td></tr><tr><td><p><strong>체결번호</strong></p></td><td><p>키움 API 체결번호</p></td></tr></tbody></table>

새로고침

화면 우측 상단의 <strong>새로고침</strong> 버튼을 클릭하면 전체 데이터를 다시 불러옵니다.
실시간 이벤트로 자동 갱신되지만, 일시적 누락이 의심될 경우 수동으로 새로고침합니다.

## 6.4 자동 매매 중지 방법

![](/images/manual/image-38.png)

전략 단위 중지

1.  메인 화면의 <strong>자동매매 실행 스위치</strong> 대시보드에서 중지할 전략을 찾습니다.
2.  해당 전략의 <strong>토글 스위치를 클릭하여 OFF</strong> 합니다.
3.  장중 중지 시 아래 확인 메시지가 표시됩니다.

장중에 실행을 중지하면 처리되지 못한 매매 데이터가 발생할 수 있습니다.

이로인해 예기치 못한 오류가 발생할 수 있습니다.

계속 진행하시겠습니까?

<table><tbody><tr><td><p>선택</p></td><td><p>동작</p></td></tr><tr><td><p><strong>예</strong></p></td><td><p>즉시 자동 매매 중지, 스위치 OFF 처리</p></td></tr><tr><td><p><strong>아니오</strong></p></td><td><p>취소, 스위치 ON 상태 유지</p></td></tr></tbody></table>

안전한 중지 권장 순서

1. 자동 매매 실행 시간대가 끝나기를 기다린다

2. 미체결 주문이 없는지 주문 현황 화면에서 확인한다

3. 미체결 주문이 있다면 키움 HTS에서 수동으로 취소/정정한다

4. 스위치를 OFF한다

⚠️ 갑작스러운 중지는 미체결 주문·잔고 불일치를 유발할 수 있습니다.
<strong>가급적 장 마감 후에 중지</strong>하십시오.

## 6.5 자동 매매 이력 조회

### 6.5.1 개요

<strong>자동매매 주문 내역</strong> 화면에서 과거 매매 결과를 날짜 범위와 전략별로 조회할 수 있으며, CSV 파일로 내보낼 수 있습니다.

화면 열기

메인 화면 상단 메뉴에서 <strong>자동매매 주문 내역</strong> 을 클릭합니다.

조회 조건 설정

![](/images/manual/image-39.png)

전략 선택

<table><tbody><tr><td><p>선택</p></td><td><p>조회 범위</p></td></tr><tr><td><p><strong>전체</strong></p></td><td><p>모든 전략의 거래 내역 조회</p></td></tr><tr><td><p><strong>특정 전략명</strong></p></td><td><p>선택한 전략의 거래 내역만 조회</p></td></tr></tbody></table>

날짜 범위 빠른 선택 버튼

<table><tbody><tr><td><p>버튼</p></td><td><p>기간 설정</p></td></tr><tr><td><p><strong>전일</strong></p></td><td><p>이전 영업일 ~ 오늘</p></td></tr><tr><td><p><strong>당일</strong></p></td><td><p>오늘 ~ 오늘</p></td></tr><tr><td><p><strong>당주</strong></p></td><td><p>이번 주 월요일 ~ 오늘</p></td></tr><tr><td><p><strong>당월</strong></p></td><td><p>이번 달 1일 ~ 오늘</p></td></tr><tr><td><p><strong>당해</strong></p></td><td><p>올해 1월 1일 ~ 오늘</p></td></tr></tbody></table>

날짜 직접 입력

<strong>DatePicker</strong>를 통해 <strong>시작일 ~ 종료일</strong>을 직접 선택합니다.

과거 매매 결과 확인 방법

1.  상단에서 <strong>전략 선택</strong> 및 <strong>날짜 범위</strong> 를 설정합니다.
2.  <strong>조회</strong> 버튼을 클릭합니다.
3.  조회 결과가 하단 목록에 표시됩니다. (조회 중에는 로딩 표시가 나타납니다.)

조회 결과 컬럼 설명

<table><tbody><tr><td><p>컬럼</p></td><td><p>설명</p></td></tr><tr><td><p><strong>그룹</strong></p></td><td><p>동일 종목 매매 묶음 ID (같은 그룹 = 같은 매매 사이클)</p></td></tr><tr><td><p><strong>주문일자</strong></p></td><td><p>주문이 발생한 일시</p></td></tr><tr><td><p><strong>전략명</strong></p></td><td><p>해당 주문이 속한 매매 전략 이름</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>주문 계좌번호</p></td></tr><tr><td><p><strong>주문구분</strong></p></td><td><p>매수 / 매도</p></td></tr><tr><td><p><strong>거래소</strong></p></td><td><p>KRX / NXT</p></td></tr><tr><td><p><strong>종목코드</strong></p></td><td><p>매매 종목 코드</p></td></tr><tr><td><p><strong>종목명</strong></p></td><td><p>종목명</p></td></tr><tr><td><p><strong>실행조건식 표시명</strong></p></td><td><p>주문을 트리거한 조건식 이름</p></td></tr><tr><td><p><strong>체결수량</strong></p></td><td><p>실제 체결된 수량</p></td></tr><tr><td><p><strong>매입평균가</strong></p></td><td><p>매수 체결 평균 가격</p></td></tr><tr><td><p><strong>매도평균가</strong></p></td><td><p>매도 체결 평균 가격</p></td></tr><tr><td><p><strong>실현손익</strong></p></td><td><p>매도금액 - 매입금액 (수수료·세금 제외)</p></td></tr><tr><td><p><strong>수익률</strong></p></td><td><p>실현손익 / 매입금액 × 100 (%)</p></td></tr><tr><td><p><strong>수수료</strong></p></td><td><p>매입금액 × 0.015% (추정치)</p></td></tr><tr><td><p><strong>세금</strong></p></td><td><p>매도금액 × 0.15% (추정치)</p></td></tr><tr><td><p><strong>실현손익2</strong></p></td><td><p>실현손익 - (수수료 + 세금)</p></td></tr><tr><td><p><strong>수익률2</strong></p></td><td><p>실현손익2 / 매입금액 × 100 (%)</p></td></tr><tr><td><p><strong>매입금액</strong></p></td><td><p>매수 체결 총 금액</p></td></tr><tr><td><p><strong>매도금액</strong></p></td><td><p>매도 체결 총 금액</p></td></tr><tr><td><p><strong>체결시간</strong></p></td><td><p>마지막 체결 시간</p></td></tr><tr><td><p><strong>전송결과</strong></p></td><td><p>주문 전송 성공/실패 여부</p></td></tr><tr><td><p><strong>키움결과</strong></p></td><td><p>키움 API 콜백 메시지</p></td></tr><tr><td><p><strong>설명</strong></p></td><td><p>주문 발생 이유</p></td></tr><tr><td><p><strong>생성일시</strong></p></td><td><p>주문 DB 저장 일시</p></td></tr></tbody></table>

⚠️ <strong>수익률 = 0 으로 표시되는 경우</strong>:
매수 체결수량과 매도 체결수량이 다른 경우 (일부만 매도된 경우) 수익률은 계산되지 않고 <strong>0</strong>으로 표시됩니다.

CSV 내보내기

조회된 결과를 CSV 파일로 저장할 수 있습니다.

*   목록에서 <strong>우클릭 → Export(CSV)</strong> 를 선택합니다.
*   저장 경로와 파일명을 지정합니다.
    *   기본 파일명: <strong>내조건식_거래내역_YYYYMMDD_HHmmss.csv</strong>
*   <strong>저장</strong> 버튼을 클릭합니다.

💡 CSV 파일은 <strong>UTF-8 (BOM 포함)</strong> 형식으로 저장되어 한국어가 깨지지 않습니다.
엑셀에서 바로 열어 활용 가능합니다.

# 7. 스케줄러

## 7.1 스케줄러 화면 안내

스케줄러는 부엉이 트레이더 을 지정한 요일과 시간에 <strong>자동으로 시작하고 종료</strong>하도록 Windows 작업 스케줄러에 등록하는 기능입니다. 매일 수동으로 프로그램을 켜고 끌 필요 없이, 주식 시장 개장 시간에 맞춰 프로그램이 자동 실행되도록 예약할 수 있습니다.

스케줄러 화면 열기

메인 메뉴에서 <strong>[스케줄러]</strong> 항목을 클릭하면 "프로그램 실행 스케줄" 창이 열립니다.

![](/images/manual/image-40.png)

화면 구성

<table><tbody><tr><td><p>구성 요소</p></td><td><p>설명</p></td></tr><tr><td><p><strong>자동시작 활성화 토글</strong></p></td><td><p>스케줄 기능을 전체적으로 ON/OFF 합니다</p></td></tr><tr><td><p><strong>시작 시간</strong></p></td><td><p>프로그램을 자동으로 실행할 시각을 설정합니다</p></td></tr><tr><td><p><strong>종료 시간</strong></p></td><td><p>프로그램을 자동으로 종료할 시각을 설정합니다</p></td></tr><tr><td><p><strong>요일 선택</strong></p></td><td><p>스케줄을 적용할 요일(월~일)을 개별 선택합니다</p></td></tr><tr><td><p><strong>저장 버튼</strong></p></td><td><p>설정을 저장하고 Windows 작업 스케줄러에 등록합니다</p></td></tr><tr><td><p><strong>닫기 버튼</strong></p></td><td><p>창을 닫습니다</p></td></tr></tbody></table>

<strong>⚠️ 사용 가능 시간 제한:</strong> 자동시작은 <strong>07:30 ~ 23:00</strong> 범위 내에서만 설정하도록 권장합니다. 이는 키움 Rest API의 사용 가능 시간을 고려한 제한입니다.

<strong>⚠️ 자동 종료 알림:</strong> 프로그램은 매일 <strong>06:00</strong>에 "06:05에 자동 종료된다"는 알림을 표시하며, <strong>06:05</strong>에 자동으로 종료됩니다. 이는 야간 장 종료 이후 다음 날 스케줄 실행을 위한 안전 종료 기능입니다.

## 7.2 자동 시작 스케줄 설정 방법

스케줄 기능을 처음 설정하거나 시작 시간을 변경할 때 아래 단계를 따릅니다.

사전 조건

<strong>⚠️ 반드시 관리자 권한으로 실행해야 합니다.</strong> 일반 권한으로 실행 중인 경우 저장 시 "관리자 권한으로 실행해주세요." 메시지가 표시되며 저장되지 않습니다.

관리자 권한 실행 방법: <strong>내 문서\SageLine\</strong> 폴더 내의 <strong>Start부엉이 트레이더 .vbs</strong> 파일을 실행하면 UAC(사용자 계정 컨트롤) 프롬프트가 나타나며 관리자 권한으로 프로그램이 시작됩니다.

설정 단계

<strong>① 자동시작 활성화</strong>

*   화면 상단의 <strong>[자동시작 활성화]</strong> 토글 스위치를 <strong>ON</strong> 상태로 설정합니다.
*   토글이 꺼진 상태에서는 아래 설정값을 입력해도 스케줄이 동작하지 않습니다.

<strong>② 시작 시간 입력</strong>

*   <strong>[시작 시간]</strong> 입력란을 클릭하여 원하는 시각을 입력합니다.
*   예: 주식 시장 개장 준비를 위해 <strong>08:50</strong> 으로 설정
*   시간 형식은 <strong>HH:mm</strong> (24시간 형식)을 사용합니다.
*   키움 Rest API 사용 가능 시간을 고려하여 <strong>07:30 이후</strong>로 설정하는 것을 권장합니다.

<strong>③ 요일 선택</strong>

*   하단의 요일 체크박스에서 스케줄을 실행할 요일을 선택합니다.
    *   <strong>월, 화, 수, 목, 금</strong>: 평일 자동 매매 시 선택 (일반적인 설정)
    *   <strong>토, 일</strong>: 특수 거래일이 있는 경우에만 선택
*   최소 <strong>1개 이상</strong>의 요일을 선택해야 저장이 가능합니다.

<strong>④ 저장</strong>

*   우측 하단의 <strong>[저장]</strong> 버튼을 클릭합니다.
*   저장이 완료되면 "스케줄 저장됨: [시작시간] ~ [종료시간]" 확인 메시지가 표시됩니다.
*   내부적으로 <strong>내 문서\SageLine\Start부엉이 트레이더 .bat</strong> 파일을 실행하는 Windows 작업 스케줄러 항목(<strong>부엉이 트레이더 Scheduler Task Start</strong>)이 등록됩니다.

## 7.3 자동 종료 스케줄 설정 방법

자동 종료 스케줄은 <strong>자동 시작 스케줄과 동일한 화면</strong>에서 함께 설정됩니다. 별도의 화면이 없으며, 시작 시간과 종료 시간을 한 번에 저장합니다.

설정 단계

<strong>① 종료 시간 입력</strong>

*   <strong>[종료 시간]</strong> 입력란을 클릭하여 원하는 종료 시각을 입력합니다.
*   예: 장 마감 이후 <strong>16:00</strong> 또는 <strong>15:30</strong> 으로 설정
*   시간 외 단일가 거래를 포함하려면 <strong>18:00</strong> 이후로 설정합니다.
*   <strong>23:00 이전</strong>으로 설정하는 것을 권장합니다.

<strong>② 요일 및 저장</strong>

*   7.2의 ③~④ 단계와 동일하게 요일을 선택하고 <strong>[저장]</strong> 버튼을 클릭합니다.
*   저장 시 <strong>내 문서\SageLine\Exit부엉이 트레이더 .bat</strong> 파일을 실행하는 Windows 작업 스케줄러 항목(<strong>부엉이 트레이더 Scheduler Task Exit</strong>)이 함께 등록됩니다.

<strong>📌 참고:</strong> 종료 스케줄은 <strong>Exit부엉이 트레이더 .bat</strong>를 통해 실행 중인 부엉이 트레이더 프로세스를 강제 종료합니다. 진행 중인 자동 매매가 있더라도 설정한 시각에 프로그램이 종료되므로, 모든 자동 매매 전략이 완료되는 시각 이후로 종료 시간을 설정하는 것을 권장합니다.

자동 종료 시간 설정 권장 예시

<table><tbody><tr><td><p>매매 유형</p></td><td><p>권장 종료 시간</p></td></tr><tr><td><p>정규 시장 매매만 사용</p></td><td><p>15:40 ~ 16:00</p></td></tr><tr><td><p>시간 외 단일가까지 사용</p></td><td><p>18:10 ~ 18:30</p></td></tr><tr><td><p>야간 선물 등 포함</p></td><td><p>23:00 이전</p></td></tr></tbody></table>

## 7.4 설정한 스케줄 확인 및 수정

현재 설정 확인

스케줄러 창을 열면 <strong>이전에 저장된 설정값이 자동으로 불러와집니다.</strong>

*   <strong>자동시작 활성화 토글</strong>: 현재 활성화 여부 표시
*   <strong>시작 시간 / 종료 시간</strong>: 마지막으로 저장한 시각 표시
*   <strong>요일 체크박스</strong>: 이전에 선택한 요일이 체크된 상태로 표시

이를 통해 현재 어떤 스케줄이 등록되어 있는지 한눈에 확인할 수 있습니다.

스케줄 수정 방법

1.  스케줄러 창을 엽니다.
2.  변경하려는 항목(시작 시간, 종료 시간, 요일)을 수정합니다.
3.  <strong>[저장]</strong> 버튼을 클릭합니다.
4.  저장 시 기존 Windows 작업 스케줄러 항목은 <strong>자동으로 삭제 후 재등록</strong>되므로 별도의 삭제 작업은 필요하지 않습니다.

스케줄 비활성화 방법

스케줄을 완전히 해제하려면 다음 단계를 따릅니다.

1.  스케줄러 창을 엽니다.
2.  <strong>[자동시작 활성화]</strong> 토글을 <strong>OFF</strong> 상태로 변경합니다.
3.  <strong>[저장]</strong> 버튼을 클릭합니다.
4.  Windows 작업 스케줄러에 등록된 기존 시작/종료 작업(<strong>부엉이 트레이더 Scheduler Task Start</strong>, <strong>부엉이 트레이더 Scheduler Task Exit</strong>)이 <strong>자동으로 삭제</strong>됩니다.

Windows 작업 스케줄러에서 직접 확인하는 방법

등록된 스케줄을 Windows 작업 스케줄러에서 직접 확인하거나 관리할 수 있습니다.

1.  Windows 검색창에서 "작업 스케줄러"를 검색하여 실행합니다.
2.  좌측 트리에서 <strong>[작업 스케줄러 라이브러리]</strong>를 클릭합니다.
3.  다음 두 항목을 확인합니다.
    *   <strong>부엉이 트레이더 Scheduler Task Start</strong> — 프로그램 자동 시작
    *   <strong>부엉이 트레이더 Scheduler Task Exit</strong> — 프로그램 자동 종료

<strong>📌 참고:</strong> Windows 작업 스케줄러에서 직접 항목을 수정하거나 삭제하는 것은 권장하지 않습니다. 항상 부엉이 트레이더 스케줄러 화면을 통해 관리하시기 바랍니다.

자주 발생하는 문제

<table><tbody><tr><td><p>증상</p></td><td><p>원인 및 해결 방법</p></td></tr><tr><td><p>저장 시 "관리자 권한으로 실행해주세요." 메시지</p></td><td><p>프로그램을 일반 권한으로 실행 중입니다. <strong>내 문서\SageLine\Start부엉이 트레이더 .vbs</strong>로 재실행 후 다시 시도하세요</p></td></tr><tr><td><p>설정한 시간에 프로그램이 실행되지 않음</p></td><td><p>자동시작 활성화 토글이 OFF인지 확인, Windows 작업 스케줄러에서 해당 항목이 등록되어 있는지 확인하세요</p></td></tr><tr><td><p>저장 버튼이 비활성화됨</p></td><td><p>시작 시간, 종료 시간, 요일 중 하나 이상이 설정되지 않은 상태입니다. 모두 입력 후 다시 시도하세요</p></td></tr></tbody></table>

# 8. 로그 확인

## 8.1 로그 대시보드 화면 안내

로그 대시보드는 부엉이 트레이더 이 동작하면서 발생하는 <strong>모든 내부 이벤트와 상태 메시지를 실시간으로 표시</strong>하는 화면입니다. 주문 접수, 체결, 오류 발생, API 호출 내역 등 프로그램의 모든 동작이 이 화면에 기록되므로, 자동 매매 중 이상 징후를 즉시 파악할 수 있습니다.

화면 위치

메인 화면의 특정 탭 또는 패널에서 <strong>\[로그\]</strong> 항목을 선택하면 로그 대시보드 영역이 표시됩니다.

화면 구성

![](/images/manual/image-41.png)

<table><tbody><tr><td><p>구성 요소</p></td><td><p>설명</p></td></tr><tr><td><p><strong>로그 출력창</strong></p></td><td><p>실시간으로 발생하는 로그 메시지를 표시하는 스크롤 가능한 텍스트 영역</p></td></tr><tr><td><p><strong>자동 스크롤</strong></p></td><td><p>새 메시지가 추가되면 자동으로 최신 메시지로 스크롤 이동</p></td></tr></tbody></table>

로그 메시지 형식

모든 로그 메시지는 아래 형식으로 출력됩니다.

\[yyyy-MM-dd HH:mm:ss.fff\] 메시지 내용

<strong>예시:</strong>

\[2025-06-10 09:01:33.412\] 자동 매매 전략 '전략1' 시작

\[2025-06-10 09:01:34.108\] \[매수 주문\] 종목: 005930 삼성전자, 수량: 1, 가격: 78500

\[2025-06-10 09:01:34.891\] \[체결\] 005930 삼성전자 1주 @ 78500원 체결 완료

<strong>📌 참고:</strong> 로그 대시보드는 현재 실행 중인 세션의 메시지만 표시합니다. 과거 날짜의 로그는 <strong>\[로그 매니저\]</strong> 에서 확인할 수 있습니다. (→ 8.3 참고)

## 8.2 실시간 로그 보는 방법

로그 자동 출력

로그 대시보드는 <strong>별도의 조작 없이 자동으로 업데이트</strong>됩니다. 프로그램 동작 중 발생하는 모든 이벤트는 1초마다 화면에 반영됩니다.

*   새 메시지는 목록의 <strong>맨 위에 추가</strong>되어 가장 최신 내용이 항상 위에 표시됩니다.
*   최신 메시지가 추가될 때마다 자동으로 맨 위로 스크롤됩니다.

자동 스크롤 제어

<table><tbody><tr><td><p>동작</p></td><td><p>결과</p></td></tr><tr><td><p>스크롤을 <strong>내리지 않고 맨 위</strong> 유지</p></td><td><p>자동 스크롤 <strong>활성화</strong> — 새 로그가 올 때마다 자동으로 맨 위로 이동</p></td></tr><tr><td><p>스크롤을 <strong>아래로 내려</strong> 과거 로그 확인 중</p></td><td><p>자동 스크롤 <strong>비활성화</strong> — 현재 보고 있는 위치가 고정됨</p></td></tr><tr><td><p>다시 <strong>맨 위로 스크롤</strong></p></td><td><p>자동 스크롤 <strong>재활성화</strong></p></td></tr></tbody></table>

<strong>📌 팁:</strong> 자동 매매가 진행 중일 때 특정 시점의 로그를 확인하려면 스크롤을 내려 해당 시점을 찾으면 됩니다. 자동 스크롤이 일시 중지되므로 로그가 흘러가지 않고 편하게 읽을 수 있습니다.

로그 읽는 방법

로그는 여러 유형의 메시지를 포함합니다.

<table><tbody><tr><td><p>로그 유형</p></td><td><p>예시 내용</p></td></tr><tr><td><p><strong>일반 정보 (INFO)</strong></p></td><td><p>전략 시작/종료, 로그인 성공, 잔고 조회 완료</p></td></tr><tr><td><p><strong>경고 (WARN)</strong></p></td><td><p>API 호출 지연, 재시도 발생, 설정 누락</p></td></tr><tr><td><p><strong>오류 (ERROR)</strong></p></td><td><p>주문 실패, 연결 끊김, 예외 발생</p></td></tr><tr><td><p><strong>매매 이벤트</strong></p></td><td><p>매수/매도 주문 접수, 체결, 취소</p></td></tr></tbody></table>

## 8.3 로그 매니저에서 과거 로그 조회

로그 매니저는 <strong>디스크에 저장된 로그 파일 목록을 관리</strong>하는 별도 창입니다. 특정 날짜의 로그를 열어 확인하거나 파일을 삭제할 수 있습니다.

로그 매니저 열기

메인 메뉴에서 <strong>\[로그 매니저\]</strong> 항목을 선택하면 "로그 파일 관리" 창이 열립니다.

![](/images/manual/image-42.png)

로그 파일 저장 위치

로그 파일은 아래 경로에 자동 저장됩니다.

내 문서\\SageLine\\SageStockPilot\\logs\\

화면 구성

<table><tbody><tr><td><p>구성 요소</p></td><td><p>설명</p></td></tr><tr><td><p><strong>당일 로그파일 자동 전송 토글</strong></p></td><td><p>당일 로그 파일을 30분마다 자동으로 서버에 전송하는 기능 ON/OFF</p></td></tr><tr><td><p><strong>파일 목록 테이블</strong></p></td><td><p>로그 파일의 이름, 크기, 최종 수정일을 표시</p></td></tr><tr><td><p><strong>메모장으로 열기 버튼</strong></p></td><td><p>선택한 로그 파일을 Windows 메모장으로 엽니다</p></td></tr><tr><td><p><strong>삭제 버튼</strong></p></td><td><p>선택한 로그 파일을 삭제합니다</p></td></tr><tr><td><p><strong>서버로 전송 버튼</strong></p></td><td><p>선택한 로그 파일을 지원팀 서버로 업로드합니다</p></td></tr></tbody></table>

파일 목록 컬럼 설명

<table><tbody><tr><td><p>컬럼</p></td><td><p>설명</p></td></tr><tr><td><p><strong>파일명</strong></p></td><td><p>로그 파일 이름 (날짜 기준으로 자동 생성)</p></td></tr><tr><td><p><strong>크기 (KB)</strong></p></td><td><p>파일 크기 (KB 단위, 소수점 1자리 표시)</p></td></tr><tr><td><p><strong>수정일</strong></p></td><td><p>파일이 마지막으로 기록된 날짜와 시간</p></td></tr></tbody></table>

과거 로그 조회 방법

*   로그 매니저 창을 엽니다.
*   파일 목록에서 확인하고 싶은 날짜의 로그 파일을 클릭하여 선택합니다.
*   <strong>\[메모장으로 열기\]</strong> 버튼을 클릭합니다.
*   Windows 메모장이 실행되며 해당 로그 파일의 전체 내용을 확인할 수 있습니다.
    *   메모장의 <strong>Ctrl + F</strong> 기능을 사용하면 특정 키워드(오류 메시지, 종목 코드 등)를 빠르게 검색할 수 있습니다.

<strong>📌 참고:</strong> 메모장으로 열기는 파일을 <strong>1개만 선택</strong>했을 때 활성화됩니다. 여러 파일을 동시에 열려면 각각 선택하여 열어야 합니다.

로그 파일 삭제 방법

1.  삭제할 파일을 클릭하여 선택합니다. (Ctrl 클릭으로 여러 파일 선택 가능)
2.  <strong>\[삭제\]</strong> 버튼을 클릭합니다.
3.  "선택한 로그 파일을 삭제하시겠습니까?" 확인 메시지가 표시되면 <strong>\[확인\]</strong> 을 클릭합니다.
4.  선택한 파일이 영구적으로 삭제됩니다.

<strong>⚠️ 주의:</strong> 삭제된 로그 파일은 복구할 수 없습니다. 문의나 오류 분석이 필요한 경우 삭제 전에 미리 서버로 전송해 두는 것을 권장합니다.

## 8.4 로그 파일 업로드 방법 (문의 시 활용)

프로그램 오작동이나 오류 발생 시 지원팀에 로그 파일을 전송하면 빠른 원인 분석이 가능합니다.

수동 업로드 방법

*   <strong>\[로그 매니저\]</strong> 창을 엽니다.
*   전송할 로그 파일을 목록에서 선택합니다.
    *   문제가 발생한 날짜의 파일을 선택합니다.
    *   Ctrl 클릭으로 여러 파일을 동시에 선택할 수 있습니다.
*   <strong>\[서버로 전송\]</strong> 버튼을 클릭합니다.
*   "데이터를 전송 중입니다. 잠시만 기다려주세요." 대기 화면이 표시됩니다.
*   업로드가 완료되면 "선택한 파일 업로드가 완료되었습니다." 메시지가 표시됩니다.

자동 업로드 설정

로그 매니저 상단의 <strong>\[당일 로그파일 자동 전송\]</strong> 토글을 ON으로 설정하면, 프로그램 실행 중 <strong>30분마다</strong> 당일 로그 파일이 자동으로 서버에 전송됩니다.

<table><tbody><tr><td><p>설정</p></td><td><p>동작</p></td></tr><tr><td><p><strong>ON</strong></p></td><td><p>30분 간격으로 당일 최신 로그 파일을 자동 전송</p></td></tr><tr><td><p><strong>OFF</strong></p></td><td><p>자동 전송 비활성화. 수동으로만 전송 가능</p></td></tr></tbody></table>

업로드 제한 및 주의사항

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>최대 파일 크기</strong></p></td><td><p>파일당 최대 <strong>2GB</strong></p></td></tr><tr><td><p><strong>전송 중 주의</strong></p></td><td><p>전송 중 프로그램을 강제 종료하면 업로드가 실패할 수 있습니다</p></td></tr><tr><td><p><strong>오류 발생 시</strong></p></td><td><p>서버 연결 상태를 확인 후 재시도하거나, 파일 경로(<strong>내 문서\SageLine\SageStockPilot\logs\</strong>)에서 직접 파일을 이메일로 전송하세요</p></td></tr></tbody></table>


# 9. 알림 설정 (Discord · Telegram)

부엉이 트레이더는 매매 중 발생하는 주요 알림을 <strong>Discord</strong>와 <strong>Telegram</strong>으로 실시간 전송할 수 있습니다. PC 앞에 없더라도 스마트폰으로 체결·오류·경고 등을 즉시 확인할 수 있습니다. 두 채널은 서로 독립적이므로, 하나만 사용하거나 둘 다 켜서 함께 사용할 수 있습니다.

## 9.1 알림 기능 개요

프로그램에서 화면에 표시되는 팝업 메시지와 시스템 트레이 알림이 설정한 채널로 자동 전달됩니다. 알림은 다음 4가지 유형으로 구분됩니다.

<table><tbody><tr><td><p>알림 구분</p></td><td><p>표시 색상</p></td><td><p>예시 상황</p></td></tr><tr><td><p><strong>오류</strong></p></td><td><p>빨강</p></td><td><p>주문 실패, 연결 오류</p></td></tr><tr><td><p><strong>경고</strong></p></td><td><p>주황</p></td><td><p>잔고 부족, 비정상 시세</p></td></tr><tr><td><p><strong>정보 (팝업)</strong></p></td><td><p>파랑</p></td><td><p>주문 체결, 일반 안내</p></td></tr><tr><td><p><strong>정보 (트레이)</strong></p></td><td><p>초록</p></td><td><p>백그라운드 처리 완료</p></td></tr></tbody></table>

> 로그 파일에만 기록되는 상세 로그는 전송되지 않으며, 알림 전송이 실패해도 매매 동작에는 전혀 영향을 주지 않습니다.

## 9.2 Discord 알림 설정

### 9.2.1 Discord WebHook URL 발급

WebHook을 사용하려면 <strong>서버 관리 권한</strong>이 있는 Discord 계정과 알림을 받을 전용 채널이 필요합니다.

*   Discord를 실행하고(PC 앱 또는 discord.com 웹), 알림을 받을 <strong>서버</strong>를 선택합니다. 전용 서버가 없다면 `+` 버튼 → 직접 만들기 → 나만을 위한 서버로 새로 만듭니다.
*   알림을 받을 <strong>텍스트 채널</strong>을 선택하거나 `#부엉이-알림` 같은 전용 채널을 새로 만듭니다.
*   채널 이름에서 마우스 오른쪽 클릭 → <strong>채널 편집</strong> → <strong>연동</strong> 탭 → <strong>웹후크 만들기</strong>를 클릭합니다.
*   웹후크 이름(예: `부엉이 트레이더`)을 입력하고 <strong>웹후크 URL 복사</strong> 버튼을 눌러 URL을 복사한 뒤 <strong>저장</strong>합니다.

발급된 URL은 `https://discord.com/api/webhooks/...` 형식입니다.

> ⚠️ <strong>보안 주의:</strong> WebHook URL은 해당 채널에 누구나 메시지를 보낼 수 있는 권한과 같습니다. 타인과 공유하거나 공개된 곳에 게시하지 마세요. 유출된 경우 웹후크를 삭제하고 새로 발급받으세요.

### 9.2.2 부엉이 트레이더에서 설정하기

*   상단 메뉴에서 <strong>설정 → Discord WebHook 설정</strong>을 클릭하면 설정 창이 열립니다.
*   <strong>WebHook URL 입력란</strong>에 앞서 복사한 URL을 붙여넣습니다.
*   <strong>저장</strong> 버튼을 클릭합니다. "Discord WebHook URL이 저장되었습니다." 메시지가 표시되면 완료입니다.

### 9.2.3 테스트 및 비활성화

*   설정 창에서 <strong>테스트 메시지 전송</strong> 버튼을 누르면 Discord 채널로 연결 확인 메시지가 전송됩니다. "전송 실패 (HTTP XXX)"가 표시되면 URL을 다시 확인하세요.
*   알림을 끄려면 WebHook URL 입력란을 <strong>모두 비운 뒤 저장</strong>합니다. URL이 비어 있으면 전송이 실행되지 않습니다.

## 9.3 Telegram 알림 설정

### 9.3.1 Bot Token과 Chat ID 준비

*   Telegram에서 <strong>@BotFather</strong>를 검색해 대화를 시작하고 `/newbot` 명령으로 봇을 생성합니다. 생성이 완료되면 `123456:ABC-DEF...` 형식의 <strong>Bot Token</strong>이 발급됩니다.
*   알림을 받을 본인 계정 또는 그룹의 <strong>Chat ID</strong>를 확인합니다. `@userinfobot`에게 말을 걸면 본인의 Chat ID를 알려줍니다.

### 9.3.2 부엉이 트레이더에서 설정하기

상단 메뉴에서 <strong>설정 → Telegram 알림 설정</strong>을 클릭한 뒤 다음을 입력합니다.

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>텔레그램 알림 사용</strong></p></td><td><p>체크 시 알림 전송을 활성화합니다.</p></td></tr><tr><td><p><strong>알림 옵션</strong></p></td><td><p><strong>일반</strong>: 주문 및 체결 알림을 모두 전송 / <strong>중요 알림</strong>: 체결·오류·경고 등 주요 알림만 전송</p></td></tr><tr><td><p><strong>Bot Token</strong></p></td><td><p>BotFather에서 발급받은 토큰을 입력합니다.</p></td></tr><tr><td><p><strong>기본 Chat ID</strong></p></td><td><p>계좌별 Chat ID가 지정되지 않은 경우 사용되는 기본 수신처입니다.</p></td></tr><tr><td><p><strong>계좌별 개별 Chat ID</strong></p></td><td><p>계좌마다 다른 채널로 알림을 받고 싶을 때 계좌별로 Chat ID를 지정합니다. (실서버 / 모의투자 구분 표시)</p></td></tr></tbody></table>

입력 후 <strong>저장</strong> 버튼을 클릭합니다.

### 9.3.3 테스트

*   하단의 <strong>기본 테스트 전송</strong> 버튼으로 기본 Chat ID 연결을 확인합니다.
*   계좌별 목록의 각 <strong>전송(➤)</strong> 버튼으로 해당 계좌의 Chat ID로 개별 테스트 메시지를 보낼 수 있습니다.

## 9.4 자주 묻는 질문 (FAQ)

<strong>Q. 모든 알림이 전송되나요?</strong>
팝업 메시지와 트레이 알림만 전송됩니다. 로그 파일에만 기록되는 상세 로그는 전송되지 않습니다.

<strong>Q. 알림 전송에 실패하면 프로그램에 영향이 있나요?</strong>
없습니다. 전송 오류는 무시되도록 설계되어 있어 매매 동작에 전혀 영향을 주지 않습니다.

<strong>Q. 스마트폰에서도 받을 수 있나요?</strong>
네. 스마트폰에 Discord 또는 Telegram 앱을 설치하고 해당 채널 알림을 켜두면 푸시 알림으로 수신할 수 있습니다.

<strong>Q. Discord와 Telegram을 동시에 쓸 수 있나요?</strong>
네. 두 채널은 독립적으로 동작하므로 함께 설정하면 양쪽 모두로 알림이 전송됩니다.


# 10. 부가 기능 및 조회 도구

자동매매 외에도 시장 상황 파악과 성과 점검에 유용한 조회·진단 도구를 제공합니다.

## 10.1 변동성완화장치(VI) 발동종목 조회

특정 종목에 변동성완화장치(VI)가 발동된 현황을 조회합니다. <strong>종목정보</strong> 메뉴 → <strong>변동성완화장치발동종목</strong>을 선택하면 별도 창이 열립니다.

*   <strong>종목 코드</strong> 입력란을 비워 두면 전체 종목을, 특정 종목만 보려면 코드를 입력하거나 돋보기 버튼으로 종목을 선택합니다.
*   <strong>조회</strong> 버튼(또는 Enter)을 누르면 결과가 표로 표시됩니다. 결과가 많으면 <strong>다음 페이지</strong> 버튼으로 이어서 조회합니다.

<table><tbody><tr><td><p>주요 표시 항목</p></td><td><p>내용</p></td></tr><tr><td><p>종목명 · 종목코드</p></td><td><p>VI가 발동된 종목</p></td></tr><tr><td><p>발동구분 · 발동가격</p></td><td><p>정적/동적 발동 방향과 발동 시점 가격</p></td></tr><tr><td><p>체결시각 · 해제시각</p></td><td><p>VI 발동 및 해제 시간</p></td></tr><tr><td><p>동적/정적 괴리율 · 기준가</p></td><td><p>기준가 대비 괴리율(%)</p></td></tr><tr><td><p>발동횟수 · 누적거래량</p></td><td><p>당일 발동 횟수와 거래량</p></td></tr></tbody></table>

> 이 화면은 조회 버튼을 눌러야 갱신되며, 자동으로 실시간 갱신되지는 않습니다.

## 10.2 기술적 지표 조회 (피벗 · 볼린저밴드 · 일목균형표)

종목의 대표적인 기술적 지표를 한 번에 계산해 보여줍니다. 메뉴에서 <strong>기술적 지표 조회</strong>를 선택하면 별도 창이 열립니다.

*   <strong>종목코드</strong>를 입력하고 <strong>조회</strong> 버튼을 누릅니다. 최근 일봉 1건(현재가·고가·저가)을 기준으로 지표가 계산됩니다.
*   결과 표에는 지표명 · 값 · 계산식이 함께 표시되며, 하단에 계산 기준(기준일 · 현재가 · 고가 · 저가)이 안내됩니다.

제공 지표: <strong>피벗 포인트</strong>(중심선, 1·2차 저항/지지), <strong>볼린저밴드</strong>(20일 상·하한선), <strong>일목균형표</strong>(전환선·기준선).

> 별도의 기간 설정 없이 항상 최근 일봉을 기준으로 계산합니다.

## 10.3 자동매매 수익률 조회

자동매매 작업별 실현 손익과 수익률을 조회합니다. <strong>자동매매</strong> 메뉴 → <strong>자동매매 수익률 조회</strong>를 선택합니다.

*   <strong>매매전략</strong>(전체 또는 특정 전략)과 <strong>조회 기간</strong>을 지정합니다. 기간은 1일 / 2일 / 1주일 / 1개월 / 1년 빠른 버튼 또는 시작일·종료일 직접 선택으로 지정합니다.
*   <strong>조회</strong> 버튼을 누르면 상단에 매매작업 요약이, 요약 행을 클릭하면 하단에 해당 작업의 상세 주문 내역이 표시됩니다.

<table><tbody><tr><td><p>상단 요약 컬럼</p></td><td><p>전략명, 종목명, 매입금액, 매도금액, 실현손익, 수익률(%), 순손익·순수익률, 첫·마지막 주문</p></td></tr><tr><td><p>하단 상세 컬럼</p></td><td><p>주문일시, 구분(매수/매도), 체결수량, 매입가, 매도가, 결과</p></td></tr></tbody></table>

*   수익률은 매수·매도 수량이 일치하는 <strong>완결된 작업</strong>만 계산됩니다. 순손익은 수수료(예: 0.015%)와 세금(0.15%)을 차감한 값입니다.
*   상단 표를 <strong>마우스 오른쪽 클릭 → Excel 내보내기</strong>로 요약·상세를 xlsx 파일로 저장할 수 있습니다.

## 10.4 매매제한 현황

5장에서 설정한 매매 제한(리스크 관리)이 실제로 어떻게 적용되고 있는지 실시간으로 보여주는 모니터링 화면입니다. 메인 화면 상단의 <strong>매매제한 현황</strong> 탭에서 확인합니다. 계좌별 카드로 표시되며, 한도에 근접하면 진행률 바가 붉게 표시됩니다.

<table><tbody><tr><td><p>제한 항목</p></td><td><p>표시 내용</p></td></tr><tr><td><p><strong>총 매수금액 제한</strong></p></td><td><p>현재 매수금액 / 한도 금액</p></td></tr><tr><td><p><strong>실시간 체결데이터 요청 제한</strong></p></td><td><p>구독 종목 수 / 최대 종목 수 (종목보기로 목록 확인)</p></td></tr><tr><td><p><strong>조건검색식 요청 제한</strong></p></td><td><p>사용 중 조건검색식 수 / 최대 개수</p></td></tr><tr><td><p><strong>일일 동일종목 매매작업 제한</strong></p></td><td><p>제한 초과 종목 목록 (자정 초기화)</p></td></tr><tr><td><p><strong>연속 동일매수 주문 제한</strong></p></td><td><p>연속 매수 초과 종목 목록</p></td></tr><tr><td><p><strong>보유 종목수 제한(전략별)</strong></p></td><td><p>전략별 현재 / 최대 보유 종목 수</p></td></tr></tbody></table>

> 이 화면은 별도 조회 없이 이벤트에 따라 실시간으로 갱신됩니다. 각 항목의 <strong>?</strong> 버튼으로 도움말을 볼 수 있습니다.

## 10.5 매매조건 처리시간 모니터

실시간 체결 데이터를 매매 조건으로 판단·처리하는 데 걸리는 시간을 진단하는 도구입니다. <strong>설정</strong> 메뉴 → <strong>매매조건 처리시간 모니터</strong>를 선택합니다. 다수 전략·다수 종목을 운용할 때 프로그램이 수신 속도를 잘 따라가는지 점검하는 용도입니다.

*   <strong>처리시간 측정 사용</strong> 토글로 측정을 켜고 끕니다. 끄면 측정에 따른 부하가 없습니다.
*   <strong>지연 기록 임계값(ms)</strong>을 초과한 처리 건은 지연 기록 목록(최신 50건)에 남습니다. <strong>통계 초기화</strong> 버튼으로 누적 통계를 리셋합니다.

<table><tbody><tr><td><p>용어</p></td><td><p>의미</p></td></tr><tr><td><p><strong>처리시간</strong></p></td><td><p>체결 데이터 1건의 매매조건 판단·처리 소요 시간</p></td></tr><tr><td><p><strong>대기시간</strong></p></td><td><p>수신 후 판단 시작까지의 대기. 계속 늘어나면 처리가 수신 속도를 못 따라가는 상태</p></td></tr></tbody></table>

통계표에는 최근 1·5·10·30분·1시간 평균과 최대/최소 처리시간이 밀리초 단위로 표시되며, 1초마다 자동 갱신됩니다.