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
