// 프로토타입 : 을 통해 생성자함수에서 반복되는 메서드를 피할 수 있다. (메서드 중복) -> 프로토타입 기반의 oop는 메소드에 메시지를 전달하면서 프로그래밍을 진행한다.
// 자바스크립트 객체는 다른 객체로부터 속성과 행동을 상속 받을 수 있다.  -> 프로토타입 상속
// 프로토타입 기반 언어(prototype-based language)

// 생성자인 경우, 언제나 프로토타입을 가지고 있다.

// 오버라이드 : 프로토타입에서 객체를 상속했다고 해서 반드시 프로토타입에 정의된 대로만 해야하는건 아니다 -> 오버라이딩을 통해 재할당할 수 있다.

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

const donggu = new Dog('동구', '치와와', 38); // 인스턴스 생성
const kook = new Dog('쿡', '진돗개', 21); // 인스턴스 생성

donggu instanceof Dog; // true

Dog.prototype; // {constructor: f...}

Dog.prototype.bark = function () {
	// this는 프로토타입이 가지고 있지 않다. 여기서 this는 Dog 생성자 함수(객체)를 가진다. 중요 @@
	if (this.weight > 25) {
		return '왈왈';
	} else {
		return '깩';
	}
};

donggu.bark(); // "왈왈"

// ----------- 오버라이드
kook.bark = function () {
	return '아뵤우 !!';
};

kook.bark(); // "깩"이 아니라 오버라이딩으로 인해 "아뵤우 !!"

Dog.prototype.run = function () {
	return 'RUN';
};

donggu.run(); // "RUN"

Dog.prototype.isSitting = false; // 여기서 isSitting 이라는 속성은 생성자 함수객체 내부에 없음 @@
Dog.prototype.sit = function () {
	if (this.isSitting) {
		return '이미 앉아있어';
	} else {
		this.isSitting = true; // 여기서는 this.isSitting 의 값이 변경되면서 생성자 함수 객체 내부에 존재하게 됨 @@
		return '앉아';
	}
};

donggu.sit(); // "앉아"
donggu.sit(); // "이미 앉아있어"

// 모든 객체는 hasOwnProperty() 메소드를 가지고 있어서 프로토타입에 속성이 있는지, 생성자함수내에 있는지 확인할 수 있다.

donggu.hasOwnProperty('isSitting'); // 처음에는 false를 반환
donggu.sit();
donggu.hasOwnProperty('isSitting'); // true 반환

// 오버라이드 금지 ---------------------------
constructor; // 프로토타입에 연결된 생성자 함수
hasOwnProperty(); // 객체가 해당 속성을 직접 소유하고 있는지
isPrototypeOf(); // 어떤 객체가 다른 객체의 프로토타입인지 알아낼 수 있는
propertyIsEnumerable(); // 객체의 속성들을 반복할 때 이 속성에 접근할 수 있는지 확인하는

// 오버라이딩 가능 ---------------------------
toString();
toLocaleString(); // 객체를 문자열로 변환.
valueOf(); // 기본적으로 객체를 반환하게 되어있지만 오버라이드해서 원하는 값을 반환
