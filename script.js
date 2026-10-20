// Dibujo 1: muñeco de nieve
const canvas = document.querySelector("#demo-canvas");
const ctx = canvas.getContext("2d");

function dibujarMunecoDeNieve() {
  ctx.fillStyle = "#e9f4f7";
  ctx.fillRect(0, 0, 400, 400);

  // Suelo
  ctx.fillStyle = "#83b89b";
  ctx.fillRect(0, 350, 400, 50);

  // Bolas de nieve
  ctx.fillStyle = "#ffffff";
  ctx.strokeStyle = "#536b78";
  ctx.lineWidth = 2;

  ctx.beginPath();
  ctx.ellipse(200, 300, 75, 75, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(200, 200, 50, 50, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.ellipse(200, 120, 37.5, 37.5, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  // Brazos
  ctx.beginPath();
  ctx.moveTo(160, 200);
  ctx.lineTo(110, 150);
  ctx.moveTo(240, 200);
  ctx.lineTo(290, 150);
  ctx.strokeStyle = "#76533b";
  ctx.lineWidth = 7;
  ctx.lineCap = "round";
  ctx.stroke();
}

dibujarMunecoDeNieve();


// Dibujo 2: muñeco de nieve soleado
const sunnyCanvas = document.querySelector("#sunny-canvas");
const sunnyCtx = sunnyCanvas.getContext("2d");

function dibujarMunecoSoleado() {
  // Cielo
  sunnyCtx.fillStyle = "rgb(0, 200, 255)";
  sunnyCtx.fillRect(0, 0, 400, 400);

  // Suelo
  sunnyCtx.fillStyle = "rgb(0, 255, 0)";
  sunnyCtx.fillRect(0, 300, 400, 100);

  // Sol
  sunnyCtx.beginPath();
  sunnyCtx.ellipse(80, 64, 50, 50, 0, 0, Math.PI * 2);
  sunnyCtx.fillStyle = "rgb(255, 204, 0)";
  sunnyCtx.fill();

  // Muñeco de nieve
  sunnyCtx.fillStyle = "rgb(255, 255, 255)";

  sunnyCtx.beginPath();
  sunnyCtx.ellipse(200, 300, 75, 75, 0, 0, Math.PI * 2);
  sunnyCtx.fill();

  sunnyCtx.beginPath();
  sunnyCtx.ellipse(200, 200, 50, 50, 0, 0, Math.PI * 2);
  sunnyCtx.fill();

  sunnyCtx.beginPath();
  sunnyCtx.ellipse(200, 120, 37.5, 37.5, 0, 0, Math.PI * 2);
  sunnyCtx.fill();
}

dibujarMunecoSoleado();


// Función para dibujar triángulos
function dibujarTriangulo(ctx, x1, y1, x2, y2, x3, y3) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.lineTo(x3, y3);
  ctx.closePath();
  ctx.fill();
}


// Dibujo 3: pizza
const pizzaCanvas = document.querySelector("#pizza-canvas");
const pizzaCtx = pizzaCanvas.getContext("2d");

function dibujarPizza() {
  // Mesa
  pizzaCtx.fillStyle = "rgb(186, 145, 20)";
  pizzaCtx.fillRect(0, 0, 400, 400);

  // Plato grande
  pizzaCtx.beginPath();
  pizzaCtx.ellipse(200, 200, 175, 175, 0, 0, Math.PI * 2);
  pizzaCtx.fillStyle = "#f5f3ed";
  pizzaCtx.fill();
  pizzaCtx.strokeStyle = "#d3d0c8";
  pizzaCtx.lineWidth = 3;
  pizzaCtx.stroke();

  // Borde interior del plato
  pizzaCtx.beginPath();
  pizzaCtx.ellipse(200, 200, 150, 150, 0, 0, Math.PI * 2);
  pizzaCtx.fillStyle = "#ffffff";
  pizzaCtx.fill();
  pizzaCtx.stroke();

  // Base de la pizza
  pizzaCtx.fillStyle = "rgb(215, 155, 70)";
  dibujarTriangulo(pizzaCtx, 200, 200, 120, 100, 200, 100);

  // Queso
  pizzaCtx.fillStyle = "rgb(255, 215, 0)";
  dibujarTriangulo(pizzaCtx, 200, 195, 125, 105, 195, 105);

  // Pepperonis
  pizzaCtx.fillStyle = "rgb(100, 30, 30)";

  for (const [x, y] of [[150, 125], [175, 130], [170, 150]]) {
    pizzaCtx.beginPath();
    pizzaCtx.ellipse(x, y, 9, 9, 0, 0, Math.PI * 2);
    pizzaCtx.fill();
  }
}

dibujarPizza();


// Función para dibujar elipses usando ancho y alto
function dibujarElipse(ctx, x, y, ancho, alto) {
  ctx.beginPath();
  ctx.ellipse(x, y, ancho / 2, alto / 2, 0, 0, Math.PI * 2);
}


// Dibujo 4: dientes de conejo
const bunnyCanvas = document.querySelector("#bunny-canvas");
const bunnyCtx = bunnyCanvas.getContext("2d");
const eyeSize = 20;
const toothSize = 17;

function dibujarConejo() {
  bunnyCtx.fillStyle = "#fffaf3";
  bunnyCtx.fillRect(0, 0, 400, 300);

  bunnyCtx.lineWidth = 3;
  bunnyCtx.strokeStyle = "#50433f";
  bunnyCtx.fillStyle = "#ffffff";

  // Orejas
  dibujarElipse(bunnyCtx, 150, 70, 60, 120);
  bunnyCtx.fill();
  bunnyCtx.stroke();

  dibujarElipse(bunnyCtx, 240, 70, 60, 120);
  bunnyCtx.fill();
  bunnyCtx.stroke();

  // Cara
  dibujarElipse(bunnyCtx, 200, 170, 150, 150);
  bunnyCtx.fill();
  bunnyCtx.stroke();

  // Ojos
  bunnyCtx.fillStyle = "#000000";

  dibujarElipse(bunnyCtx, 170, 150, eyeSize, eyeSize);
  bunnyCtx.fill();

  dibujarElipse(bunnyCtx, 230, 150, eyeSize, eyeSize);
  bunnyCtx.fill();

  // Boca
  bunnyCtx.beginPath();
  bunnyCtx.moveTo(150, 200);
  bunnyCtx.lineTo(250, 200);
  bunnyCtx.strokeStyle = "#50433f";
  bunnyCtx.stroke();

  // Dientes sin relleno
  bunnyCtx.strokeStyle = "#50433f";
  bunnyCtx.strokeRect(185, 200, 15, toothSize);
  bunnyCtx.strokeRect(200, 200, 15, toothSize);
}

dibujarConejo();


// Dibujo 5: rana
const frogCanvas = document.querySelector("#frog-canvas");
const frogCtx = frogCanvas.getContext("2d");
const frogX = 200;
const frogY = 250;

function dibujarRana() {
  frogCtx.fillStyle = "#f5fbf7";
  frogCtx.fillRect(0, 0, frogCanvas.width, frogCanvas.height);

  // Cara y cuencas de los ojos
  frogCtx.fillStyle = "rgb(30, 204, 91)";

  dibujarElipse(frogCtx, frogX, frogY, 200, 100);
  frogCtx.fill();

  dibujarElipse(frogCtx, frogX - 50, frogY - 50, 40, 40);
  frogCtx.fill();

  dibujarElipse(frogCtx, frogX + 50, frogY - 50, 40, 40);
  frogCtx.fill();

  // Blancos de los ojos
  frogCtx.fillStyle = "rgb(255, 255, 255)";

  dibujarElipse(frogCtx, frogX - 50, frogY - 50, 30, 30);
  frogCtx.fill();

  dibujarElipse(frogCtx, frogX + 50, frogY - 50, 30, 30);
  frogCtx.fill();

  // Boca
  frogCtx.fillStyle = "rgb(0, 0, 0)";
  dibujarElipse(frogCtx, frogX, frogY, 120, 50);
  frogCtx.fill();

  // Pupilas cuadradas
  frogCtx.fillRect(frogX - 55, frogY - 55, 10, 10);
  frogCtx.fillRect(frogX + 45, frogY - 55, 10, 10);
}

dibujarRana();


// Animación 1: el sol crece sobre el horizonte.
const sunriseCanvas = document.querySelector("#sunrise-canvas");
const sunriseCtx = sunriseCanvas.getContext("2d");
let sunSize = 30;

function animarAmanecer() {
  sunriseCtx.fillStyle = "rgb(82, 222, 240)";
  sunriseCtx.fillRect(0, 0, sunriseCanvas.width, sunriseCanvas.height);

  sunSize += 1;
  if (sunSize > 250) {
    sunSize = 30;
  }

  // Sol
  sunriseCtx.fillStyle = "rgb(255, 204, 0)";
  dibujarElipse(sunriseCtx, 200, 298, sunSize, sunSize);
  sunriseCtx.fill();

  // La tierra tapa la mitad inferior del sol.
  sunriseCtx.fillStyle = "rgb(76, 168, 67)";
  sunriseCtx.fillRect(0, 300, 400, 100);

  requestAnimationFrame(animarAmanecer);
}

animarAmanecer();


// Animación 2: estrellas fugaces sobre la ciudad.
const cityCanvas = document.querySelector("#city-canvas");
const cityCtx = cityCanvas.getContext("2d");
let starX = 200;
let starY = 200;
let secondStarX = 380;
let secondStarY = 50;

function animarCiudad() {
  cityCtx.fillStyle = "rgb(29, 40, 115)";
  cityCtx.fillRect(0, 0, 400, 400);

  // Luna
  cityCtx.fillStyle = "rgb(255, 255, 200)";
  dibujarElipse(cityCtx, 330, 70, 60, 60);
  cityCtx.fill();

  // Primera estrella y su rastro
  cityCtx.fillStyle = "rgb(255, 242, 0)";
  dibujarElipse(cityCtx, starX, starY, 10, 10);
  cityCtx.fill();

  cityCtx.beginPath();
  cityCtx.moveTo(starX - 5, starY - 5);
  cityCtx.lineTo(starX - 40, starY - 30);
  cityCtx.strokeStyle = "rgb(255, 242, 0)";
  cityCtx.lineWidth = 3;
  cityCtx.stroke();

  // Segunda estrella y su rastro
  cityCtx.fillStyle = "rgb(0, 255, 255)";
  dibujarElipse(cityCtx, secondStarX, secondStarY, 12, 12);
  cityCtx.fill();

  cityCtx.beginPath();
  cityCtx.moveTo(secondStarX + 5, secondStarY - 5);
  cityCtx.lineTo(secondStarX + 30, secondStarY - 20);
  cityCtx.strokeStyle = "rgb(0, 255, 255)";
  cityCtx.lineWidth = 2;
  cityCtx.stroke();

  // Edificios
  cityCtx.fillStyle = "rgb(20, 20, 40)";
  cityCtx.fillRect(0, 300, 80, 100);
  cityCtx.fillRect(90, 260, 90, 140);
  cityCtx.fillRect(190, 310, 80, 90);
  cityCtx.fillRect(280, 280, 120, 120);

  // Ventanas
  cityCtx.fillStyle = "rgb(255, 230, 100)";
  cityCtx.fillRect(20, 320, 15, 20);
  cityCtx.fillRect(50, 350, 15, 20);
  cityCtx.fillRect(110, 280, 15, 20);
  cityCtx.fillRect(145, 320, 15, 20);
  cityCtx.fillRect(210, 330, 15, 20);
  cityCtx.fillRect(310, 300, 15, 20);
  cityCtx.fillRect(350, 340, 15, 20);

  // Movimiento de las estrellas; reinician al salir del lienzo.
  starX += 3;
  starY += 2;
  if (starX > 420 || starY > 330) {
    starX = -20;
    starY = 80;
  }

  secondStarX -= 2;
  secondStarY += 2;
  if (secondStarX < -20 || secondStarY > 300) {
    secondStarX = 420;
    secondStarY = 50;
  }

  requestAnimationFrame(animarCiudad);
}

animarCiudad();


// Animación 3: nubes que se desplazan y un sol que cambia de tamaño.
const cloudsCanvas = document.querySelector("#clouds-canvas");
const cloudsCtx = cloudsCanvas.getContext("2d");
let leftCloudX = 150;
let rightCloudX = 250;
let growingSunSize = 100;

function dibujarNube(ctx, x, y) {
  dibujarElipse(ctx, x, y, 126, 97);
  ctx.fill();
  dibujarElipse(ctx, x + 62, y, 70, 60);
  ctx.fill();
  dibujarElipse(ctx, x - 62, y, 70, 60);
  ctx.fill();
}

function animarNubes() {
  cloudsCtx.fillStyle = "rgb(184, 236, 255)";
  cloudsCtx.fillRect(0, 0, cloudsCanvas.width, cloudsCanvas.height);

  growingSunSize += 2;
  if (growingSunSize > 240) {
    growingSunSize = 100;
  }

  // Sol
  cloudsCtx.fillStyle = "rgb(255, 170, 0)";
  dibujarElipse(cloudsCtx, 200, 100, growingSunSize, growingSunSize);
  cloudsCtx.fill();

  // Nubes
  cloudsCtx.fillStyle = "rgb(255, 255, 255)";
  dibujarNube(cloudsCtx, leftCloudX, 150);
  dibujarNube(cloudsCtx, rightCloudX, 100);

  leftCloudX -= 1;
  rightCloudX += 1;

  if (leftCloudX < -130) {
    leftCloudX = 530;
  }
  if (rightCloudX > 530) {
    rightCloudX = -130;
  }

  requestAnimationFrame(animarNubes);
}

animarNubes();
