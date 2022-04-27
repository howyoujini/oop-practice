// 클로저 : 자유변수가 있는 함수와 자유 변수를 알 수 있는 환경을 결합하면 클로저가 된다.
// 함수를 반환해야만 클로저를 만들 수 있는 건 아니다. 자유변수를 갖고 있고 자신이 정의된 컨텍스트를 벗어나서 실행되는 함수를 참조할 때에는 언제나 만들어진다.
// 자유함수 : 함수 안에 정의되어 있지 않은 변수

function justSayin(phrase) {
	let ending = '';
	if (beingFunny) {
		ending = '-- 행복하네요 !';
	} else if (notSoMuch) {
		ending = '-- 그럭저럭이요..';
	}
	alert(phrase + ending);
}

// justSayin 함수에서 beingFunny 와 notSoMuch 는 자유변수이다.
// 따라서 justSayin 함수와 beingFunny, notSoMuch 의 묶은 환경은 클로저가 된다.

// --------------------

function makeCounter() {
	let count = 0;

	function counter() {
		count = count + 1;
		return count;
	}
	return counter; // counter() 함수를 반환하는데 이것이 클로저이다.(지역변수 count 도 함께 반환하기 때문.)
}

let doCount = makeCounter();
// console.log(doCount()); // makeCounter() 함수가 호출되면서 counter() 함수를 반환
