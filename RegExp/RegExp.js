// 정규식도 객체

const areaCode = new RegExp(/[0-9]{3}/); // ex. 201

const phoneNumber = new RegExp(/^\d{3}-?\d{4}$/); // ex. 555-1212 or 5551212

// 정규식 사용하기

const amyHome = '555-1212';

let result = amyHome.match(phoneNumber); // ["555-1212"]

const invalid = '5558-1212';

let result2 = invalid.match(phoneNumber); // null

// 정규표현식의 장점
// 1. 입력 문자열의 처리
// 2. 범용성이 뛰어남
// 3. 생산성의 증대

// 단점
// 1. 학습하는 것이 쉽지 않음
// 2. 난해한 코드 - 유지보수, 협업에 도움이 안됨
// 2. 유용하지만 만능은 아님
