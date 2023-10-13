let secretnumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener
('click' , function () {
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('⛔ No Number !');
    }

    else if(guess === secretnumber){
        document.querySelector('.number').textContent = secretnumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        displayMessage('🎉 Correct Number !');
        score++;
        document.querySelector('.score').textContent = score;
        

        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }

    else if(guess !== secretnumber){
        if(score > 1){
            document.querySelector('.message').textContent = guess < secretnumber ? '📉 Too Low' : '📈 Too High' ;
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            displayMessage('👎 You lose the game');
        }
    }

} );



document.querySelector('.again').addEventListener
('click', function (){
    score =20;
    secretnumber = Math.trunc(Math.random() * 20 ) + 1;
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';

})