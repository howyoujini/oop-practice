// 현재 배의 위치: location 1, 2, 3;
// 게이머가 추측한 숫자 값: guessValue;
// 배를 명중시킨 횟수: hits;
// 게이머가 추측한 횟수: guesses
// 전함의 격침 상태: (false가 초기값) isSunk;

let randomNum = Math.floor(Math.random() * 5);
// Math.random() -> 0 이상의 1 미만의 난수

let location1 = randomNum;
let location2 = randomNum + 1;
let location3 = randomNum + 2;

let guessValue; // 선언만 할 경우에 undefined로 할당됨.

let hits = 0;

let guesses = 0;

let isSunk = false;

while (isSunk == false) {
	guessValue = console.log('READY, SET, GO ! 1-5사이 숫자를 입력하세요');

	if (guessValue < 0 || guessValue > 6) {
		console.log('반드시 1에서 5사이의 숫자를 입력하세요!');
	} else {
		guesses++;
		if (
			guessValue == location1 ||
			guessValue == location2 ||
			guessValue == location3
		) {
			hits++;
			console.log('명중');
			if (hits == 3) {
				isSunk = true;
				console.log('전함침몰!');
			}
		} else {
			console.log('실패');
		}
	}
}

let stats = `여러분은 전함을 격침시키기 위해 ${guesses}번 발사했습니다. 따라서 명중률은 ${
	3 / guesses
} 입니다.`;
console.log(stats);
