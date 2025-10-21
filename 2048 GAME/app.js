

var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
    setGame();
}

function setGame() {

    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ]

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r.toString() + "-" + c.toString();
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }
    //create 2 to begin the game
    setTwo();
    setTwo();

}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = ""; //clear the classList
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        if (num <= 4096) {
            tile.classList.add("x"+num.toString());
        } else {
            tile.classList.add("x8192");
        }                
    }
}

document.addEventListener('keyup', (e) => {
    let moved = false;
    
    if (e.code == "ArrowLeft") {
        moved = slideLeft();
    }
    else if (e.code == "ArrowRight") {
        moved = slideRight();
    }
    else if (e.code == "ArrowUp") {
        moved = slideUp();
    }
    else if (e.code == "ArrowDown") {
        moved = slideDown();
    }

    if (moved) {
        setTwo();
    }

    document.getElementById("score").innerText = score;
    
    if(score>=2048){
        document.getElementById("won").innerText = "🎉CONGRATULATION'S YOU WON🥳";
    }

    // Check for game over after each move
    if (!hasEmptyTile() && !canMakeAMove()) {
        gameOver();
    }
})

function filterZero(row){
    return row.filter(num => num != 0); //create new array of all nums != 0
}

function slide(row) {
    let originalRow = [...row];
    row = filterZero(row);
    
    // Check if any numbers were moved by filtering
    let moved = row.length < originalRow.length;
    
    for (let i = 0; i < row.length-1; i++){
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
            moved = true;
        }
    }
    row = filterZero(row);
    
    while (row.length < columns) {
        row.push(0);
    }
    
    // Check if any numbers were moved to new positions
    for (let i = 0; i < columns; i++) {
        if (row[i] !== originalRow[i]) {
            moved = true;
        }
    }
    
    return {
        row: row,
        moved: moved
    };
}

function slideLeft() {
    let moved = false;
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        let result = slide(row);
        board[r] = result.row;
        if (result.moved) {
            moved = true;
        }
        
        for (let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
    return moved;
}

function slideRight() {
    let moved = false;
    for (let r = 0; r < rows; r++) {
        let row = board[r];       
        row.reverse();             
        let result = slide(row);            
        board[r] = result.row.reverse();   
        if (result.moved) {
            moved = true;
        }
        
        for (let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
    return moved;
}

function slideUp() {
    let moved = false;
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        let result = slide(row);
        
        if (result.moved) {
            moved = true;
        }
        
        for (let r = 0; r < rows; r++){
            board[r][c] = result.row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
    return moved;
}

function slideDown() {
    let moved = false;
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        let result = slide(row);
        let reversedRow = result.row.reverse();
        
        if (result.moved) {
            moved = true;
        }
        
        for (let r = 0; r < rows; r++){
            board[r][c] = reversedRow[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
    return moved;
}

function setTwo() {
    if (!hasEmptyTile()) {
        return;
    }
    let found = false;
    while (!found) {
        //find random row and column to place a 2 in
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = 2;
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            tile.innerText = "2";
            tile.classList.add("x2");
            found = true;
        }
    }
}

function hasEmptyTile() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) { 
                return true;
            }
        }
    }
    return false;
}

function canMakeAMove() {
    // Check horizontally
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns - 1; c++) {
            if (board[r][c] === board[r][c + 1]) {
                return true;
            }
        }
    }
    
    // Check vertically
    for (let r = 0; r < rows - 1; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] === board[r + 1][c]) {
                return true;
            }
        }
    }
    
    return false;
}

function gameOver() {
    const popup = document.getElementById('gameOverPopup');
    document.getElementById('finalScore').textContent = score;
    popup.style.display = 'block';
}

function restartGame() {
    // Reset score
    score = 0;
    document.getElementById('score').innerText = score;
    
    // Reset won message
    document.getElementById('won').innerText = '"KEEP TRYING-SCORE 2048 TO WIN"';
    
    // Clear the board
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];
    
    // Update all tiles
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
    
    // Hide popup
    document.getElementById('gameOverPopup').style.display = 'none';
    
    // Add initial two tiles
    setTwo();
    setTwo();
}