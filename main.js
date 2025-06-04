const log = console.log;

log("main");

const mainContainer = document.querySelector(".main-container");
const canvas = document.querySelector('.my-canvas');

const ctx = canvas.getContext('2d');

const mcHeight = mainContainer.clientHeight;
const mcWidth = mainContainer.clientWidth;

log(mcHeight);
log(mcWidth);

canvas.height = 9/10 * mcHeight;
canvas.width = 7/10 * mcWidth;

log(canvas.height);
log(canvas.width);