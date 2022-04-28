// new 연산자와 생성자 함수

function Dog(name, breed, weight) {
	// 생성자를 이용해서 객체를 만든다.
	this.name = name;
	this.breed = breed;
	this.weight = weight;
	this.bark = function () {
		// 생성자 내 메서드
		if (this.weight > 25) {
			return this.name + '는 왈왈 짖는다';
		} else {
			return this.name + '는 깽깽 짖는다';
		}
	};
	// 아무것도 반환하지 않음. 생성자 함수엔 return이 없다. -> 반환해야할 것들은 모두 this에 저장되고 this는 자동 반환된다.
}

// new 연산자는 생성자 함수를 호출하기 전에 먼저 새로운 객체(인스턴스)를 만들어 this에 할당한다. -> new 연산자를 사용하지 않으면 새로운 객체를 만들지 않는다.
// new 연산자를 호풀하지 않으면 생성자 안에 this는 새로운 객체가 아니라 전역 객체(ex. window)를 참조함.

// new는 연산자이며, 피연산자를 가진다. -> 피연산자는 함수호출이다.
// 객체를 만들고 나서 생성자 함수를 호출한다. new가 생성된 객체를 생성자 함수안에서 this 키워드로 참조할 수 있게 한다. 그래야 함수 본체에 있는 문장이 객체를 참조할 수 있다.

const fido = new Dog('피도', '잡종', 38);
const spot = new Dog('스포트', '치와와', 10);
const switty = new Dog('스위티', '푸들', 30);

const dogs = [fido, spot, switty];

for (let i = 0; i < dogs.length; i++) {
	let size = '작은';
	if (dogs[i].weight > 10) {
		size = '큰';
	}
	let output = `개: ${dogs[i].name}는 ${
		size + ' ' + dogs[i].breed
	}입니다. 그리고 ${dogs[i].bark()}`;
	console.log(output);
}

// -------------------------------------------------------

function DogParams(params) {
	// 생성자를 이용해서 객체를 만든다.
	this.name = params.name;
	this.breed = params.breed;
	this.weight = params.weight;
	this.bark = function () {
		// 생성자 내 메서드
		if (this.weight > 25) {
			return this.name + '는 왈왈 짖는다';
		} else {
			return this.name + '는 깽깽 짖는다';
		}
	};
	// 아무것도 반환하지 않음. 생성자 함수엔 return이 없다. -> 반환해야할 것들은 모두 this에 저장되고 this는 자동 반환된다.
}

const switty2Params = {
	name: '스위티',
	breed: '푸들',
	weight: 30,
};

const switty2 = new DogParams(switty2Params);

// js의 내장객체
// Object();
// Math();
// RegExp();
// Error();
// Array();
// Date();
