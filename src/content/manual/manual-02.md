---
title: 부엉이 ATS 사용자 설명서 - 2장 설치 및 초기 설정
---

# 2. 설치 및 초기 설정

## 2.1 시스템 요구 사항

부엉이 ATS 을 정상적으로 사용하기 위해 필요한 하드웨어, 소프트웨어, 네트워크 환경을 안내합니다.  
설치 전에 아래 요구 사항을 반드시 확인하시기 바랍니다.

### 하드웨어 요구 사항

<table><tbody><tr><td><p>항목</p></td><td><p>최소 사양</p></td><td><p>권장 사양</p></td></tr><tr><td><p><strong>CPU</strong></p></td><td><p>2코어 이상 (1.6 GHz)</p></td><td><p>4코어 이상 (2.5 GHz 이상)</p></td></tr><tr><td><p><strong>RAM (메모리)</strong></p></td><td><p>4 GB</p></td><td><p>8 GB 이상</p></td></tr><tr><td><p><strong>저장 공간</strong></p></td><td><p>1 GB 이상 여유 공간</p></td><td><p>5 GB 이상 여유 공간</p></td></tr><tr><td><p><strong>화면 해상도</strong></p></td><td><p>1280 × 768 이상</p></td><td><p>1920 × 1080 (Full HD) 이상</p></td></tr><tr><td><p><strong>네트워크</strong></p></td><td><p>유선 또는 Wi-Fi 인터넷 연결</p></td><td><p>유선 인터넷 (안정적인 연결 권장)</p></td></tr></tbody></table>

⚠️ **주의:** 자동매매 중 프로그램이 비정상 종료되면 미체결 주문이 남을 수 있습니다.  
안정적인 PC 사양과 네트워크 환경에서 사용하시기 바랍니다.

💡 **팁:** 실시간 시세 수신, 다수 전략 동시 실행, AI 뉴스 분석 등 여러 기능을 동시에 사용하면  
메모리 사용량이 증가합니다. **8 GB 이상의 RAM을 권장합니다.**

### 운영체제 요구 사항

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>지원 OS</strong></p></td><td><p>Windows 10 / Windows 11</p></td></tr><tr><td><p><strong>아키텍처</strong></p></td><td><p>64비트 (x64) 권장</p></td></tr><tr><td><p><strong>언어</strong></p></td><td><p>한국어 Windows 환경 권장</p></td></tr></tbody></table>

📌 **참고:** 부엉이 ATS 의 프로그램은 **.NET 10 (Windows)** 기반으로 작성되었습니다.  

### 필수 소프트웨어

① .NET 런타임

부엉이 ATS 은 Microsoft .NET 10 기반으로 개발되었습니다.  
인스톨러 실행 시 자동으로 설치 여부를 확인하지만, 사전에 설치되어 있으면 더 빠르게 시작할 수 있습니다.

💡 **팁:** .NET 런타임은 아래 Microsoft 공식 사이트에서 무료로 다운로드할 수 있습니다.  
https://dotnet.microsoft.com/download

② 키움증권 관련 필수 요건

<table><tbody><tr><td><p>항목</p></td><td><p>요건</p></td><td><p>설명</p></td></tr><tr><td><p><strong>키움증권 계좌</strong></p></td><td><p>필수</p></td><td><p>국내 주식 위탁 거래 계좌 (실계좌 또는 모의투자)</p></td></tr><tr><td><p><strong>키움 REST API 앱키 발급</strong></p></td><td><p>필수</p></td><td><p>키움 Rest API 포털에서 앱키(App Key) 및 시크릿키(Secret Key) 발급</p></td></tr><tr><td><p><strong>모의투자 계좌 (권장)</strong></p></td><td><p>권장</p></td><td><p>실계좌 사용 전 테스트 목적으로 사용</p></td></tr></tbody></table>

저장 공간 사용 현황

<table><tbody><tr><td><p>저장 위치</p></td><td><p>용도</p></td><td><p>예상 크기</p></td></tr><tr><td><p><strong>프로그램 설치 폴더</strong></p></td><td><p>실행 파일 및 리소스</p></td><td><p>약 200 ~ 400 MB</p></td></tr><tr><td><p><strong>내 문서\SageLine\SageStockPilot\</strong></p></td><td><p>설정 파일 (appsettings.json)</p></td><td><p>수 KB</p></td></tr><tr><td><p><strong>내 문서\SageLine\SageStockPilot\logs\</strong></p></td><td><p>로그 파일 (일자별, 최대 20개 보관)</p></td><td><p>파일당 최대 1 GB</p></td></tr><tr><td><p><strong>내 문서\SageLine\SageStockPilot\</strong></p></td><td><p>SQLite DB 파일 (전략, 주문, 이력 등)</p></td><td><p>수 MB ~ 수십 MB</p></td></tr></tbody></table>

💡 **팁:** 로그 파일은 하루 1개씩 생성되며, 최대 20일치가 보관됩니다.  
디스크 여유 공간이 부족해지면 오래된 로그 파일을 수동으로 삭제하시기 바랍니다.  
로그 파일 위치: **내 문서 > SageLine > 부엉이 ATS > logs**

지원 여부 요약표

<table><tbody><tr><td><p>환경</p></td><td><p>지원 여부</p></td><td><p>비고</p></td></tr><tr><td><p>Windows 11 (64비트)</p></td><td><p>✅ 완전 지원</p></td><td><p>권장 환경</p></td></tr><tr><td><p>Windows 10 (64비트)</p></td><td><p>✅ 완전 지원</p></td><td><p>권장 환경</p></td></tr></tbody></table>

⚠️ **투자 안정성 주의:**  
자동매매 프로그램 특성상 **PC가 절전 모드, 화면 보호기, 또는 자동 재시작**되면 실행 중인 전략이 중단됩니다.  
자동매매 실행 중에는 아래 설정을 확인하세요.

*   Windows 절전 모드 → **해제**
*   화면 보호기 → **해제**
*   Windows 자동 업데이트 강제 재시작 → **활성 시간 설정**으로 재시작 방지

## 2.2 프로그램 설치

설치 전 체크리스트

<table><tbody><tr><td><p>번호</p></td><td><p>확인 항목</p></td><td><p>비고</p></td></tr><tr><td><p>☐</p></td><td><p>Windows 10 이상 운영체제인지 확인</p></td><td><p>64비트 권장</p></td></tr><tr><td><p>☐</p></td><td><p>키움 앱키(App Key) 및 시크릿키(Secret Key) 발급 여부 확인</p></td><td><p>Rest API 포털에서 발급</p></td></tr><tr><td><p>☐</p></td><td><p>기존에 설치된 이전 버전이 있다면 프로그램 종료 후 진행</p></td><td><p>실행 중 재설치 시 오류 가능</p></td></tr><tr><td><p>☐</p></td><td><p>Windows 백신·보안 프로그램 실시간 검사 일시 중지</p></td><td><p>설치 파일 오탐 방지</p></td></tr></tbody></table>

네이버까페 자료실에서 부엉이ATS 프로그램 설치 파일 다운로드 및 설치

[https://cafe.naver.com/f-e/cafes/31344003/menus/11?t=1773202258583](https://cafe.naver.com/f-e/cafes/31344003/menus/11?t=1773202258583)

※ 설치방법은 게시물을 참조하시 바랍니다.

![](/images/manual/image-17.png)

처음 실행 시 자동 생성 파일

메인 화면이 처음 실행될 때 아래 파일들이 **내 문서** 폴더에 자동으로 생성됩니다.  
삭제하거나 수정할 필요는 없으며, 편의 기능으로 활용할 수 있습니다.

<table><tbody><tr><td><p>파일명</p></td><td><p>위치</p></td><td><p>설명</p></td></tr><tr><td><p><strong>Start부엉이 ATS .bat</strong></p></td><td><p><strong>내 문서\SageLine\</strong></p></td><td><p>프로그램 실행 배치 파일</p></td></tr><tr><td><p><strong>Start부엉이 ATS .vbs</strong></p></td><td><p><strong>내 문서\SageLine\</strong></p></td><td><p><strong>관리자 권한</strong>으로 실행하는 스크립트</p></td></tr><tr><td><p><strong>Exit부엉이 ATS .bat</strong></p></td><td><p><strong>내 문서\SageLine\</strong></p></td><td><p>프로그램 강제 종료 배치 파일</p></td></tr></tbody></table>

💡 **팁:** 매일 자동매매를 사용한다면 **Start부엉이 ATS .vbs** 파일의 바로 가기를  
Windows **시작 프로그램** 폴더에 등록하면 PC 부팅 시 자동으로 실행됩니다.

중요한 자동 동작 안내

프로그램에는 아래 두 가지 자동 동작이 내장되어 있습니다.  
반드시 숙지하시기 바랍니다.

① 오전 6시 — 종료 예고 알림

프로그램 자동 종료 (실행 중인 자동매매 전략 포함)

⚠️ **주의:** 매일 오전 **6시 5분에 프로그램이 자동 종료**됩니다.  
이는 키움증권 서버 점검 시간과 새벽 시간대의 불안정한 데이터 수신을 방지하기 위한 설계입니다.  
자동매매가 계속 필요하다면 **Start부엉이 ATS .vbs**를 **Windows 작업 스케줄러**에 등록하여 오전 7시 30분 이후 자동 재시작하도록 설정하는 것을 권장합니다.  
② 오전 6시 ~ 7시 30분 — 조기 실행 경고

키 미등록 상태에서 최초 실행 시 — API 키 등록 창

등록된 키움 API 키가 없거나 키가 유효하지 않으면 메인 화면 대신  
**키움 REST API KEY 등록 창**이 자동으로 표시됩니다.

![](/images/manual/image-18.png)

⚠️ **주의:** 이 창에서 **[취소]** 를 클릭하면 프로그램이 자동으로 종료됩니다.  
API 키를 발급받은 후 다시 실행하십시오.

## 2.3 필수 초기 설정

### 2.3.1 키움 API 앱키 등록

이 설정이 필요한 이유

부엉이 ATS 은 키움증권 REST API를 통해 주문 실행, 계좌 조회, 실시간 시세 수신 등 모든 핵심 기능을 수행합니다.  
이를 위해서는 키움증권 Rest API 포털에서 발급받은 **앱키(App Key)** 와 **시크릿키(Secret Key)** 를 프로그램에 등록해야 합니다.

⚠️ **주의:** 앱키와 시크릿키가 등록되지 않으면 프로그램의 **모든 기능을 사용할 수 없습니다.**

STEP 1 — 키움 Rest API 앱키 발급

까페 자료실의 키움증권_REST_API_사용신청_설명서_20260302.pptx 문서 참조

발급 시 확인 사항

<table><tbody><tr><td><p>항목</p></td><td><p>설명</p></td></tr><tr><td><p><strong>서버 구분</strong></p></td><td><p>실서버 계좌용 또는 모의투자 계좌용 구분 발급</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>앱키와 연결할 거래 계좌번호 확인</p></td></tr><tr><td><p><strong>App Key</strong></p></td><td><p>공개 식별자 (32자 내외 문자열)</p></td></tr><tr><td><p><strong>Secret Key</strong></p></td><td><p>비공개 인증키 (64자 내외 문자열, <strong>절대 타인에게 공개 금지</strong>)</p></td></tr></tbody></table>

⚠️ **Secret Key는 절대로 타인에게 공개하지 마십시오.**  
유출 시 타인이 귀하의 계좌로 주문을 실행할 수 있습니다.  
유출이 의심되면 키움 Rest API 포털에서 즉시 앱키를 재발급하십시오.

STEP 2 — 키움 REST API KEY 등록 창 열기

두 가지 방법으로 등록 창을 열 수 있습니다.

<table><tbody><tr><td><p>방법</p></td><td><p>설명</p></td></tr><tr><td><p><strong>방법 1. 자동 표시</strong></p></td><td><p>앱키 미등록 상태에서 프로그램 시작 시 자동으로 등록 창이 열림</p></td></tr><tr><td><p><strong>방법 2. 메뉴에서 열기</strong></p></td><td><p>메인 화면 메뉴 <strong>[설정 → 키움증권 REST API KEY 등록]</strong> 클릭</p></td></tr></tbody></table>

메인 화면 메뉴바

│

└── [설정]

└── [키움증권 REST API KEY 등록] ← 클릭

STEP 3 — 키움 REST API KEY 등록 창 화면 구성

![](/images/manual/image-19.png)

<table><tbody><tr><td><p>입력 항목</p></td><td><p>설명</p></td><td><p>예시</p></td></tr><tr><td><p><strong>계좌번호</strong></p></td><td><p>키움증권 국내 주식 계좌번호</p></td><td><p><strong>1234567890</strong></p></td></tr><tr><td><p><strong>서버 구분</strong></p></td><td><p>연결할 서버 선택</p></td><td><p><strong>● 실서버</strong> 또는 <strong>● 모의투자</strong></p></td></tr><tr><td><p><strong>App Key</strong></p></td><td><p>키움 포털에서 발급받은 앱키</p></td><td><p><strong>PSxxxxxxxxxxxxxxxxxxxxxxxxxxx</strong></p></td></tr><tr><td><p><strong>Secret Key</strong></p></td><td><p>키움 포털에서 발급받은 시크릿키</p></td><td><p><strong>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</strong></p></td></tr></tbody></table>

📌 **참고:** 기본값은 **모의투자** 서버로 설정되어 있습니다.  
실제 거래 계좌를 사용하려면 반드시 **● 실서버** 로 변경하십시오.

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

⚠️ **처음 사용자는 반드시 모의투자 계좌로 먼저 테스트하십시오.**  
실서버 등록 후 자동매매를 시작하면 **실제 돈으로 주문이 실행**됩니다.

여러 계좌 등록 (멀티 앱키)

목록의 빈 행에 추가 계좌 정보를 입력하면 **여러 개의 계좌/앱키를 동시에 등록**할 수 있습니다.

💡 **팁:** 여러 앱키를 등록하면 API 호출 한도를 분산시킬 수 있습니다.  
각 앱키별로 독립적인 매매 전략을 할당하여 운용할 수 있습니다.

STEP 5 — 유효성 검사 및 저장

**[저장]** 버튼을 클릭하면 아래 절차가 자동으로 진행됩니다.

① 입력값 유효성 검사

② 키움 API 서버에 실제 접속하여 키 유효성 확인

③ Windows 자격 증명 관리자에 암호화 저장

④ 저장 완료 메시지 표시

⑤ 창 자동 닫힘

STEP 6 — 프로그램 재시작

등록이 완료되면 반드시 프로그램을 재시작해야 변경 내용이 적용됩니다.

저장 위치 및 보안

<table><tbody><tr><td><p>항목</p></td><td><p>내용</p></td></tr><tr><td><p><strong>저장 위치</strong></p></td><td><p>Windows 자격 증명 관리자 (Credential Manager)</p></td></tr><tr><td><p><strong>저장 키 이름</strong></p></td><td><p><strong>SageLine .SageStockPilot.{계좌번호}</strong></p></td></tr><tr><td><p><strong>저장 방식</strong></p></td><td><p>App Key는 사용자 이름, Secret Key는 비밀번호로 암호화 저장</p></td></tr><tr><td><p><strong>확인 방법</strong></p></td><td><p>Windows 제어판 → 자격 증명 관리자 → Windows 자격 증명</p></td></tr></tbody></table>

💡 **팁:** 앱키는 PC 재부팅 후에도 유지됩니다.  
Windows 자격 증명 관리자에 저장되므로 별도 파일로 평문 보관하지 않아 보안에 안전합니다.

오류 메시지 및 해결 방법

<table><tbody><tr><td><p>오류 메시지</p></td><td><p>원인</p></td><td><p>해결 방법</p></td></tr><tr><td><p><strong>App Key, Secret Key를 입력해주세요.</strong></p></td><td><p>입력 항목 누락</p></td><td><p>3개 항목 모두 입력 후 재시도</p></td></tr><tr><td><p><strong>계좌번호가 중복되었습니다.</strong></p></td><td><p>같은 계좌를 두 번 입력</p></td><td><p>중복된 행 삭제 후 재시도</p></td></tr><tr><td><p><strong>App Key, Secret Key가 유효하지 않습니다.</strong></p></td><td><p>잘못된 키 입력 또는 키 만료</p></td><td><p>키움 포털에서 키 재확인 또는 재발급</p></td></tr><tr><td><p><strong>키움 API 서버에 연결할 수 없습니다.</strong></p></td><td><p>인터넷 연결 문제 또는 키움 서버 점검</p></td><td><p>인터넷 연결 확인 후 재시도</p></td></tr><tr><td><p><strong>유효한 App Key, Secret Key를 입력해주세요.</strong></p></td><td><p>유효한 키가 하나도 없음</p></td><td><p>올바른 계좌와 키 입력 후 재시도</p></td></tr></tbody></table>

등록 완료 후 확인 방법

프로그램 재시작 후 메인 화면 **계좌 현황 패널**에서 계좌가 정상 연결되었는지 확인합니다.

![](/images/manual/image-20.png)

계좌 현황 패널에 실제 잔고 데이터가 표시되면 앱키 등록이 완료된 것입니다.

📌 **참고:** 모의투자 계좌는 잔고가 가상 금액으로 표시됩니다.  
처음에는 키움증권에서 지정한 모의투자 초기 자금이 표시됩니다.

# 3. 로그인
