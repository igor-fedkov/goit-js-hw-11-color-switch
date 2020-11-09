const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function onStartBtn() {
	timerId = setInterval(() => {
		bodyEl.style.backgroundColor = colors[randomIntegerFromInterval(0, colors.length - 1)]
	}, 1000);
	
	startBtn.disabled = true;
}

function onStopBtn() {
	clearInterval(timerId);
	startBtn.disabled = false;
}

const bodyEl = document.querySelector('body');
const startBtn = document.querySelector('button[data-action="start"]');
const stopBtn = document.querySelector('button[data-action="stop"]');

let timerId = null;

startBtn.addEventListener('click', onStartBtn);
stopBtn.addEventListener('click', onStopBtn);