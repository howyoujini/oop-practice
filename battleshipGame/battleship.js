let view = {
	displayMessage: function (message) {
		let messageArea = document.getElementById('messageArea');
		messageArea.innerHTML = message;
	},
	displayHits: function (location) {
		let cell = document.getElementById(location);
		cell.setAttribute('class', 'hit');
	},
	displayMiss: function (location) {
		let cell = document.getElementById(location);
		cell.setAttribute('class', 'miss');
	},
};

view.displayMessage('이 메시지가 보이나요?');

let model = {
	boardSize: 7,
	numShips: 3,
	shipLength: 3,
	shipsSunk: 0,
	ships: [
		{ locations: [0, 0, 0], hits: ['', '', ''] },
		{ locations: [0, 0, 0], hits: ['', '', ''] },
		{ locations: [0, 0, 0], hits: ['', '', ''] },
	],
	generateShipLocations: function () {
		let locations;
		for (let i = 0; i < this.numShips; i++) {
			// do-while 문 : while(조건문)의 결과와 상관없이 무조건 do블록코드가 적어도 1번은 실행됨.
			do {
				locations = this.generateShip();
			} while (this.collision(locations));
			return (this.ships[i].locations = locations);
		}
	},
	generateShip: function () {
		let direction = Math.floor(Math.random() * 2);
		let row, column;

		if (direction === 1) {
			// 전함이 가로로 놓였을 때,
			row = Math.floor(Math.random() * this.boardSize);
			column = Math.floor(
				Math.random() *
					(this.boardSize - this.shipLength + 1)
			);
		} else {
			// 전함이 세로로 놓였을 때,
			row = Math.floor(
				Math.random() *
					(this.boardSize - this.shipLength + 1)
			);
			column = Math.floor(Math.random() * this.boardSize);
		}

		let newShipLocations = []; // 문자열들의 배열
		for (let i = 0; i < this.shipLength; i++) {
			if (direction === 1) {
				// 전함이 가로로 놓였을 때, 전함 배열(전함크기)
				newShipLocations.push(row + '' + (column + i));
			} else {
				// 전함이 세로로 놓였을 때, 전함 배열(전함크기)
				newShipLocations.push(row + i + '' + column);
			}
		}
		return newShipLocations;
	},
	collision: function (locations) {
		for (let i = 0; i < this.numShips; i++) {
			let ship = model.ships[i];
			for (var j = 0; j < locations.length; j++) {
				if (ship.locations.indexOf(locations[j]) >= 0) {
					return true;
				}
			}
		}
		return false;
	},
	fire: function (guess) {
		for (let i = 0; i < this.numShips; i++) {
			let ship = this.ships[i];
			let index = ship.locations.indexOf(guess);

			if (index >= 0) {
				// 명중
				ship.hits[index] = 'hits';
				view.displayHits(guess);
				view.displayMessage('명중!');
				if (this.isSunk(ship)) {
					view.displayMessage(
						'전함이 격침되었습니다.'
					);
					this.shipsSunk++;
				}
				return true;
			}
		}
		view.displayMiss(guess);
		view.displayMessage('실패했습니다.');
		return false;
	},
	isSunk: function (ship) {
		for (let i = 0; i < this.shipLength; i++) {
			if (ship.hits[i] !== 'hit') {
				return false;
			}
		}
		return true;
	},
};

model.fire('11');

// 컨트롤러 : 게이머가 추측한 위치를 입력받고 이 값을 처리해서 모델에 전달하면서 모든 객체를 결합시킴.
let controller = {
	guesses: 0,
	// 게이머가 입력한 위치값을 받아 처리
	processGuess: function (guess) {
		let location = parseGuess(guess);
		if (location) {
			//
			this.guesses++;
			let hit = model.fire(location);

			if (hit && model.shipsSunk === model.numShips) {
				view.displayMessage(
					'여러분은 ' +
						this.guesses +
						'번 추측해 전함을 모두 격침시켰습니다'
				);
			}
		}
	},
};

const parseGuess = (guess) => {
	let alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

	if (guess === null || guess.length !== 2) {
		alert(
			'입력이 올바르지 않습니다. 게임판의 문자와 숫자를 이용해 입력하세요'
		);
	} else {
		let firstChar = guess.charAt(0);
		let row = alphabet.indexOf(firstChar);
		let column = guess.charAt(1);

		if (isNaN(row) || isNaN(column)) {
			alert('위치값이 올바르지 않습니다.');
		} else if (
			row < 0 ||
			row >= model.boardSize ||
			column < 0 ||
			column >= model.boardSize
		) {
			alert('보드 바깥으로 벗어났어요');
		} else {
			return row + column;
		}
	}
	return null;
};

function init() {
	let fireButton = document.getElementById('fireButton');
	fireButton.onclick = handleFireButton;
	let guessInput = document.getElementById('guessInput');
	guessInput.onkeypress = handleKeyPress;

	model.generateShipLocations();
}

const handleFireButton = () => {
	// 폼요소에서 게이머가 입력한 값을 가져와서 컨트롤러에 전달.
	let guessInput = document.getElementById('guessInput');
	let guess = guessInput.value;

	controller.processGuess(guess);

	guessInput.value = '';
};

const handleKeyPress = (e) => {
	let fireButton = document.getElementById('fireButton');
	if (e.keyCode === 13) {
		fireButton.click();
		return false;
	}
};

window.onload = init();
