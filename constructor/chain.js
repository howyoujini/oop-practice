// 프로토타입 체이닝 : 프로토타입의 자식을 더 만들어 엮는다. (예외 생성자 함수객체 작성가능)

function Dog(name, breed, weight) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
}

const donggu = new Dog('동구', '치와와', 38); // 인스턴스 생성
const kook = new Dog('쿡', '진돗개', 21); // 인스턴스 생성

Dog.prototype.species = '개과';
Dog.prototype.bark = function () {
	if (this.weight > 25) {
		return '왈왈';
	} else {
		return '깩';
	}
};

Dog.prototype.run = function () {
	return 'RUN';
};

// 예외 생성자 함수(부모에 속하는데, 예외 생성자 함수) 만들기 --------------------

function ShowDog(name, breed, weight, handler) {
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.handler = handler; // ShowDog에 따른 handler 예외
}
// const ShowDog = new Dog();
ShowDog.prototype = new Dog(); // Dog의 인스턴스를 ShowDog의 프로토타입과 연결하기

ShowDog.prototype.league = '웹타운';
ShowDog.prototype.stack = function () {
	return '차렷';
};
ShowDog.prototype.bait = function () {
	return '간식';
};

const scotty = new ShowDog('스코티', '전시견', 20, '쿠키');

scotty.stack(); // "차렷"
scotty.bark(); // "깩"
scotty.league; // "웹타운"
scotty.species; // "개과"

// ------------------------------
scotty instanceof Dog;
// true;

scotty instanceof ShowDog;
// true;

scotty.constructor;
// ƒ Dog(name, breed, weight) {
// 	this.name = name;
// 	this.breed = breed;
// 	this.weight = weight;
// }

// 즉, scotty는 Dog 인스턴스이면서, ShowDog의 인스턴스이다.
// scotty를 ShowDog()을 통해 만들었지만 생성자 함수는 Dog() 이다.중요 @@
ShowDog.prototype.constructor = ShowDog; // 을 추가하면 scotty의 생성자 함수는 ShowDog가 나온다. @@

scotty.constructor;
// ƒ ShowDog(name, breed, weight, handler) {
// 	this.name = name;
// 	this.breed = breed;
// 	this.weight = weight;
// 	this.handler = handler;
// }

// Dog 생성자 함수와 중복된 부분을 제거하기 ------------------------------
// function ShowDog(name, breed, weight, handler) {
// 	this.name = name;
// 	this.breed = breed;
// 	this.weight = weight;
// 	this.handler = handler; // ShowDog에 따른 handler 예외
// }

function ShowDog(name, breed, weight, handler) {
	// this.name = name;
	// this.breed = breed;
	// this.weight = weight;
	Dog.call(this, name, breed, weight); // call() 은 내장된 메서드로 어느 함수에나 호출할 수 있음.
	this.handler = handler; // ShowDog에 따른 handler 예외
}
