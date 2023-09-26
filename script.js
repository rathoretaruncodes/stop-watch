let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');

let hour = 0;
let minute = 0;
let second = 0;
//The variable 'timer' is not explicitly declared in the provided code snippet. In JavaScript, if a variable is used without being explicitly declared with var, let, or const, it becomes a global variable by default.
startBtn.addEventListener('click', function () {
	timer = true;
	stopWatch();
});
stopBtn.addEventListener('click', function () {
	timer = false;
});
resetBtn.addEventListener('click', function () {
	timer = false;
	hour = 0;
	minute = 0;
	second = 0;
	document.getElementById('hr').innerHTML = "00";
	document.getElementById('min').innerHTML = "00";
	document.getElementById('sec').innerHTML = "00";
	document.getElementById('count').innerHTML = "00";
});

function stopWatch() {
	if (timer === true) {
		second++;
		if (second === 60) {
			minute++;
			second = 0;
		}
		if (minute === 60) {
			hour++;
			minute = 0;
			second = 0;
		}
		let hrString = hour;
		let minString = minute;
		let secString = second;
//If hour is less than 10, it means it's a single-digit hour, so it adds a leading zero to make it two digits. For example, if hour is 5, it becomes "05".
		if (hour < 10) 
			hrString = "0" + hrString;
		if (minute < 10) 
			minString = "0" + minString;
		if (second < 10) 
			secString = "0" + secString;
		document.getElementById('hr').innerHTML = hrString;
		document.getElementById('min').innerHTML = minString;
		document.getElementById('sec').innerHTML = secString;
		setTimeout(stopWatch, 1000);
	}
}