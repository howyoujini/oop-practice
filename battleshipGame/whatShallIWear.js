const whatShallIWear = (temp) => {
	if (temp < 60) {
		console.log('자켓을 입으세요');
	} else if (temp < 70) {
		console.log('스웨터를 입으세요');
	} else {
		console.log('티셔츠를 입으세요');
	}
};

// 파라미터와 인자는 서로 다르다.
// 함수에 인자를 전달할 때, 이 값을 복사하고 해당 파라미터에 할당하는 것.

const makeCoffee = (파라미터) => {
	console.log(`${파라미터}를 드립니다.`);
};

makeCoffee(인자);
