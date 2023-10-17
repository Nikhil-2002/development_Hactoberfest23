score = 0;
cross = true;

audio = new Audio('../song/music.mp3');
audiogo = new Audio('../song/gameover.mp3');
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {   
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 32,38) {
        dino = document.querySelector('.dino');
        tack=document.querySelector('.track1')
        bk=document.querySelector('.back1')
        dino.classList.add('animateDino');
        tack.classList.add('track')
        bk.classList.add('back')
        setTimeout(() => {
            dino.classList.remove('animateDino')
        }, 700);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
    }
}

setInterval(() => {
    dino = document.querySelector('.dino');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');
    tack=document.querySelector('.track1')
    bk=document.querySelector('.back1')

    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 73 && offsetY < 52) {
        gameOver.innerHTML = "Game Over"
        obstacle.classList.remove('obstacleAni')
        tack.classList.remove('track')
        bk.classList.remove('back')
        audiogo.play();
        offsetX= 167;
        setTimeout(() => {
            audiogo.pause();
           
        }, 2000);
        setTimeout(() => {
            
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 50 && cross) {
        score += 50;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);

function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}