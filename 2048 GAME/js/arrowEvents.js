import {slideLeft, slideRight, slideUp, slideDown} from './slides.js';
import {setTwo} from './setTwo.js';
import {score} from './app.js';


export function arrowEvents () {
    document.addEventListener('keyup', (e) => {
        if (e.code == "ArrowLeft") {
            slideLeft();
            setTwo();
        }
        else if (e.code == "ArrowRight") {
            slideRight();
            setTwo();
        }
        else if (e.code == "ArrowUp") {
            slideUp();
            setTwo();

        }
        else if (e.code == "ArrowDown") {
            slideDown();
            setTwo();
        }
    document.getElementById("score").innerText = score;
        if(score>=2048){
            document.getElementById("won").innerText = "🎉CONGRATULATION'S YOU WON🥳";
        }
    })
}