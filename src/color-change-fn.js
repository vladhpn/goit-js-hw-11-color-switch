const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

refs.startBtn.addEventListener('click', startHandler);
refs.stopBtn.addEventListener('click', stopHandler);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

function setRandomColor() {
  let randomColor = randomIntegerFromInterval(0, colors.length - 1);
  console.log(randomColor);
  document.body.style.backgroundColor = colors[randomColor];
}

let intervalId;

function startHandler() {
  refs.startBtn.disabled = true;
  intervalId = setInterval(setRandomColor, 1000);
}

function stopHandler() {
  clearInterval(intervalId);
  refs.startBtn.disabled = false;
}
