// Några grundläggande inställningar
let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = 1 * window.innerHeight;

canvas.style.width = '100%';
canvas.style.height = '100%';

// Genom variabeln c kommer man åt det mesta som
// med canvas att göra
const c = canvas.getContext('2d');
const midX = canvas.width / 2;
const midY = canvas.height / 2;

function paintSquare() {
  c.beginPath();
  c.rect(midX / 15, midY * 1.5, midX / 1.8, midY / 2);
  c.rect(midX * 1.38, midY * 1.5, midX / 1.8, midY / 2);
  c.stroke();
}

function paintTree() {
  c.fillStyle = 'brown';
  c.fillRect(midX / 1.02, midY * 1.8, midX / 15, midY);
}

function paintLeafs() {
  c.fillStyle = 'green';
  c.beginPath();
  c.ellipse(midX, midY * 1.3, 50, 75, 0, 0, 2 * Math.PI);
  c.stroke();
}

function paintLine() {
  c.beginPath();
  c.moveTo(midX / 15, midY * 1.5);
  c.lineTo(midX / 3, midY);
  c.moveTo(midX / 1.6, midY * 1.5);
  c.lineTo(midX / 3, midY);

  c.moveTo(midX * 1.935, midY * 1.5);
  c.lineTo(midX * 1.65, midY);
  c.moveTo(midX * 1.38, midY * 1.5);
  c.lineTo(midX * 1.65, midY);
  c.stroke();
}

// Matar ut canvas dimensioner till konsolen, pröva att
// ändra storlekn på fönstret och ladda däörefter om sidan.
console.log(
  `Bredd på canvas: ${canvas.width},
Höjd på canvas: ${canvas.height}`
);

function drawPicture() {
  // Här skriver du funktionen som ritar bilden
  paintSquare();
  paintLine();
  paintTree();
  paintLeafs();
}
drawPicture();
