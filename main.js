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

const cursor =  {
    x: 0,
    y: 0
}

document.addEventListener('click',clickEvent);
document.addEventListener('keydown',keydownEvent);

function clickEvent(event){
    if(event.target.className === 'my-canvas' ){
        moveCursor(event);
    }
}

function moveCursor(event){
    const rect = canvas.getBoundingClientRect();

    cursor.x = event.clientX - rect.left;
    cursor.y = event.clientY - rect.top;

    log(cursor.x,cursor.y);
    log(event.clientX,event.clientY);
    log(rect.left,rect.top);

    ctx.moveTo(cursor.x,cursor.y);
}

function keydownEvent(event){
    if(event.keyCode === 38){
        log('up');
        startDrawing(0,-2);
    }
    else if(event.keyCode === 40){
        log('down');
        startDrawing(0,2);
    }
    else if(event.keyCode === 37){
        log('left');
        startDrawing(-2,0);
    }
    else if(event.keyCode === 39){
        log('right');
        startDrawing(2,0);
    }
    else if(event.keyCode === 32){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.beginPath();
    }
}

function startDrawing(stepX,stepY){
    cursor.x += stepX;
    cursor.y += stepY;
    ctx.lineTo(cursor.x,cursor.y);
    ctx.strokeStyle = 'rgb(0,0,0)';
    ctx.stroke();
}