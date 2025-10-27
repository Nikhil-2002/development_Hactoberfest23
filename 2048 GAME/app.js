

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

function filterZero(row){
    return row.filter(num => num != 0); //create new array of all nums != 0
}

function slide(row) {
    //[0, 2, 2, 2] 
    row = filterZero(row); //[2, 2, 2]
    for (let i = 0; i < row.length-1; i++){
        if (row[i] == row[i+1]) {
            row[i] *= 2;
            row[i+1] = 0;
            score += row[i];
        }
    } //[4, 0, 2]
    row = filterZero(row); //[4, 2]
    //add zeroes
    while (row.length < columns) {
        row.push(0);
    } //[4, 2, 0, 0]
    return row;
}

function slideLeft() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];
        row = slide(row);
        board[r] = row;
        for (let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideRight() {
    for (let r = 0; r < rows; r++) {
        let row = board[r];         
        row.reverse();             
        row = slide(row)            
        board[r] = row.reverse();   
        for (let c = 0; c < columns; c++){
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideUp() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row = slide(row);
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
}

function slideDown() {
    for (let c = 0; c < columns; c++) {
        let row = [board[0][c], board[1][c], board[2][c], board[3][c]];
        row.reverse();
        row = slide(row);
        row.reverse();
        for (let r = 0; r < rows; r++){
            board[r][c] = row[r];
            let tile = document.getElementById(r.toString() + "-" + c.toString());
            let num = board[r][c];
            updateTile(tile, num);
        }
    }
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
    let count = 0;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if (board[r][c] == 0) { 
                return true;
            }
        }
    }
 
   return false;
}

var board;
var score = 0;
var rows = 4;
var columns = 4;

window.onload = function() {
    setGame();

    // Add Restart Button Dynamically
    const restartBtn = document.createElement("button");
    restartBtn.innerText = "🔁 Restart Game";
    restartBtn.id = "restart-btn";
    restartBtn.onclick = restartGame;
    document.body.appendChild(restartBtn);
}

function setGame() {
    board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0]
    ];

    document.getElementById("board").innerHTML = "";
    score = 0;
    document.getElementById("score").innerText = score;
    document.getElementById("won").innerText = "";

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let tile = document.createElement("div");
            tile.id = r + "-" + c;
            let num = board[r][c];
            updateTile(tile, num);
            document.getElementById("board").append(tile);
        }
    }

    setTwo();
    setTwo();
}

function updateTile(tile, num) {
    tile.innerText = "";
    tile.classList.value = "";
    tile.classList.add("tile");
    if (num > 0) {
        tile.innerText = num.toString();
        tile.classList.add(num <= 4096 ? "x" + num : "x8192");
    }
}

document.addEventListener("keyup", (e) => {
    if (e.code === "ArrowLeft") slideLeft();
    else if (e.code === "ArrowRight") slideRight();
    else if (e.code === "ArrowUp") slideUp();
    else if (e.code === "ArrowDown") slideDown();

    document.getElementById("score").innerText = score;

    if (score >= 2048) {
        document.getElementById("won").innerText = "🎉 CONGRATULATIONS! YOU WON 🥳";
    }

    if (isGameOver()) {
        document.getElementById("won").innerText = "💀 GAME OVER! TRY AGAIN 💀";
    }
});

function filterZero(row) {
    return row.filter(num => num != 0);
}

function slide(row) {
    row = filterZero(row);
    for (let i = 0; i < row.length - 1; i++) {
        if (row[i] == row[i + 1]) {
            row[i] *= 2;
            row[i + 1] = 0;
            score += row[i];
        }
    }
    row = filterZero(row);
    while (row.length < columns) row.push(0);
    return row;
}

function slideLeft() {
    let moved = false;
    for (let r = 0; r < rows; r++) {
        let oldRow = [...board[r]];
        board[r] = slide(board[r]);
        if (JSON.stringify(oldRow) !== JSON.stringify(board[r])) moved = true;
    }
    if (moved) setTwo();
    updateBoard();
}

function slideRight() {
    let moved = false;
    for (let r = 0; r < rows; r++) {
        let oldRow = [...board[r]];
        let reversed = [...board[r]].reverse();
        let newRow = slide(reversed).reverse();
        if (JSON.stringify(oldRow) !== JSON.stringify(newRow)) moved = true;
        board[r] = newRow;
    }
    if (moved) setTwo();
    updateBoard();
}

function slideUp() {
    let moved = false;
    for (let c = 0; c < columns; c++) {
        let oldCol = board.map(r => r[c]);
        let newCol = slide(oldCol);
        if (JSON.stringify(oldCol) !== JSON.stringify(newCol)) moved = true;
        for (let r = 0; r < rows; r++) board[r][c] = newCol[r];
    }
    if (moved) setTwo();
    updateBoard();
}

function slideDown() {
    let moved = false;
    for (let c = 0; c < columns; c++) {
        let oldCol = board.map(r => r[c]);
        let reversed = [...oldCol].reverse();
        let newCol = slide(reversed).reverse();
        if (JSON.stringify(oldCol) !== JSON.stringify(newCol)) moved = true;
        for (let r = 0; r < rows; r++) board[r][c] = newCol[r];
    }
    if (moved) setTwo();
    updateBoard();
}

function updateBoard() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            updateTile(document.getElementById(r + "-" + c), board[r][c]);
        }
    }
}

function setTwo() {
    if (!hasEmptyTile()) return;
    let found = false;
    while (!found) {
        let r = Math.floor(Math.random() * rows);
        let c = Math.floor(Math.random() * columns);
        if (board[r][c] == 0) {
            board[r][c] = 2;
            updateTile(document.getElementById(r + "-" + c), 2);
            found = true;
        }
    }
}

function hasEmptyTile() {
    return board.some(row => row.includes(0));
}

function isGameOver() {
    if (hasEmptyTile()) return false;
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            if ((c < columns - 1 && board[r][c] === board[r][c + 1]) ||
                (r < rows - 1 && board[r][c] === board[r + 1][c])) {
                return false;
            }
        }
    }
    return true;
}

function restartGame() {
    setGame();
}
