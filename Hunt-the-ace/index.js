// Create an array of object to store the image id and the path

const cardObjectDefinitions = [
    {id:1 , imagePath : 'images/card-KingHearts.png'},
    {id:2 , imagePath : 'images/card-JackClubs.png'},
    {id:3 , imagePath : 'images/card-QueenDiamonds.png'},
    {id:4 , imagePath : 'images/card-AceSpades.png'}
];

const aceId = 4
// create a path for an images to store and represent the back of a card (blue back card)
const cardBackImgPath = 'images/card-back-blue.png';

const cardContainerElem = document.querySelector('.card-container');



//function to create a card dynamically through the javaScript code 


//Global variable to store a reference to an array of the cards elements
let cards = []

const playGameButtonElem = document.getElementById('playGame')

const collapsedGridAreaTemplate = '"a a" "a a"'

//global variable to store a class of the div element that represents the grid cells
 const cardCollectionCellClass = ".card-pos-a"

 const numCards = cardObjectDefinitions.length

 //global variables to store the array of cards positions within the grids
let cardPositions = []

let gameInProgress = false
let shufflingInProgress = false
let cardsRevealed = false

//  updateStatusElement(currentGameStatusElem,"block",winColor,"Hit!!!-Well Done :)")
const currentGameStatusElem = document.querySelector('.current-status')

const scoreContainerElem = document.querySelector('.header-score-container')
const scoreElem = document.querySelector('.score')
const roundContainerElem = document.querySelector('.header-round-container')
const roundElem = document.querySelector('.round')



const winColor = "Green"
const loseColor = "Red"
const primaryColor = "Black"

let roundNum = 0
let maxRounds = 4
let score = 0

loadGame()

//Method to showup the user thats the game is over and message them
function gameOver(){
    updateStatusElement(scoreContainerElem,"none")
    updateStatusElement(roundContainerElem,"none")

    const gameOverMessage = `Game Over !! Your Final Score - <span class='badge'>${score}</span>
                               Click ' Play Game 'Button Again to Start a New Game`
    
    updateStatusElement(currentGameStatusElem,"block",primaryColor,gameOverMessage)

    gameInProgress = false
    playGameButtonElem.disabled = false
}

//MEthod to End the Round of the Game or if the user comes at the final round of the game
function endRound(){
    setTimeout(()=>{
        if(roundNum == maxRounds){
            gameOver()
        }else{
            startNewRound()
        }
    })
}



//create a method for user to click and see their card and if its  true give a point else no points
function chooseCard(card){
    if(canChooseCard()){
        evaluateCardChoice(card)
        flipCard(card,false)

        setTimeout(()=>{
            flipCards(false)
            updateStatusElement(currentGameStatusElem,"block",primaryColor,"Card position revealed")

            endRound()

        },3000)
        cardsRevealed = true
    }
}

//method for giving points according to the rounds
function calculateScoreToAdd(roundNum){
    if(roundNum == 1){
        return 100
    }else if(roundNum == 2){
        return 75
    }else if(roundNum == 3){
        return 50
    }else{
        return 25
    }
}

//This method calculate the player winning score on the game
function calculateScore(){
    const scoreToAdd = calculateScoreToAdd(roundNum)
    score = score + scoreToAdd
}

//THIs method update the player score to the current game
function updateScore(){
    calculateScore()
    updateStatusElement(scoreElem,"block",primaryColor,`<span class="badge">${score}</span>`)
}

function updateStatusElement(elem,display,color,innerHTML){
    elem.style.display = display

    if(arguments.length > 2){
        elem.style.color = color
        elem.innerHTML = innerHTML
    }
}

function outputChoiceFeedback(hit){
    if(hit){
        updateStatusElement(currentGameStatusElem,"block",winColor,"Hit!!!-Well Done :)")
    }else{
        updateStatusElement(currentGameStatusElem,"block",loseColor,"You Missed ! :(")
    }
} 

//This method evaluates whether the user choosen th ace card or not
function evaluateCardChoice(card){
    if(card.id == aceId){
        updateScore()
        outputChoiceFeedback(true)
    }else{
        outputChoiceFeedback(false)
    }
}

function canChooseCard() {
    return gameInProgress == true && !shufflingInProgress && !cardsRevealed 
}

//create a function to load the game
function loadGame(){
    createCards()

    cards = document.querySelectorAll('.card')

    //add a eventListener to click on the startGame function
    playGameButtonElem.addEventListener('click',() => startGame())

    updateStatusElement(scoreContainerElem,"none")
    updateStatusElement(roundContainerElem,"none")
}

function startGame(){
    initializeNewGame()
    startNewRound()
}

//Method to call or initialize the new game
function initializeNewGame(){
    score = 0
    roundNum = 0

    shufflingInProgress = false

    updateStatusElement(scoreContainerElem,"flex")
    updateStatusElement(roundContainerElem,"flex")

    updateStatusElement(scoreElem,"block",primaryColor,`Score <span class='badge'>${score} </span>`)
    updateStatusElement(roundElem,"block",primaryColor,`Round <span class='badge'>${roundNum} </span>`)
}
//Method that wil be called when the new round is started
function startNewRound(){
    initializeNewRound()
    collectCards()
    flipCards(true)
    shuffleCards()
}
//Method to initialize the new round 
function initializeNewRound(){
    roundNum++
    playGameButtonElem.disabled = true

    gameInProgress = true
    shufflingInProgress = true
    cardsRevealed = false

    updateStatusElement(currentGameStatusElem,"block",primaryColor,"shuffling....")

    updateStatusElement(roundElem,"block",primaryColor, `Round <span class='badge'>${roundNum}</span>`)


}

// Method to collect the cards 
function collectCards(){
    transformGridArea(collapsedGridAreaTemplate)
    addCardsToGridAreaCell(cardCollectionCellClass)

}

function transformGridArea(areas)
{
    cardContainerElem.style.gridTemplateAreas = areas

}
 //Method to add a card to the position of the grid area
 function addCardsToGridAreaCell(cellPositionClassName)
 {
     const cellPositionElem = document.querySelector(cellPositionClassName)
 
     cards.forEach((card, index) =>{
         addChildElement(cellPositionElem, card)
     })
 
 }

//This method has contain two arguments one is card element and the other is boolean of filpToBack value
function flipCard(card, flipToBack)
{
    const innerCardElem = card.firstChild

    if(flipToBack && !innerCardElem.classList.contains('flip-it'))
    {
        innerCardElem.classList.add('flip-it')
    }
    else if(innerCardElem.classList.contains('flip-it'))
    {
        innerCardElem.classList.remove('flip-it')
    }

}

//Method to flip  a card from front to back to the user if it is true
function flipCards(flipToBack){
    cards.forEach((card,index)=>{
        setTimeout(() => {
            flipCard(card,flipToBack)
        },index * 100)
    })
}

function removeShuffleClasses(){
    cards.forEach((card)=>{
        card.classList.remove('shuffle-left')
        card.classList.remove('shuffle-right')
    })
}

//Create a method to shuffle animation to the  card
function animateShuffle(shuffleCount){
    const random1 = Math.floor(Math.random() * numCards ) + 1
    const random2 = Math.floor(Math.random() * numCards ) + 1

    let card1 = document.getElementById(random1)
    let card2 = document.getElementById(random2)

    if(shuffleCount % 4 == 0){
        card1.classList.toggle('shuffle-left')
        card1.style.zIndex = 100
    }
    if(shuffleCount % 10 == 0){
        card2.classList.toggle('shuffle-right')
        card2.style.zIndex = 200
    }
} 

//Create a shuffle function and set a interval to shuffle the cards
function shuffleCards(){

    let shuffleCount = 0

    const id = setInterval(shuffle,12)
            //above line shuffle the between the time of 12 sec
    

    function shuffle(){

        randomizeCardPosition()

        animateShuffle(shuffleCount) 

        if(shuffleCount == 500){
            clearInterval(id)
            shufflingInProgress = false
            removeShuffleClasses()
            dealCards()
            updateStatusElement(currentGameStatusElem,"block",primaryColor,"Please Click the card that you think is the Ace of Spades..........")
        }else{
            shuffleCount++;
        }
    }
}

function randomizeCardPosition(){
    const random1 = Math.floor(Math.random() * numCards ) + 1
    const random2 = Math.floor(Math.random() * numCards ) + 1

    const temp = cardPositions[random1 - 1]
    cardPositions[random1 - 1] = cardPositions[random2 - 1]
    cardPositions[random2 - 1] = temp

}

//Method that will execute when the shuffle count equals 500 
function dealCards(){
    addCardsToAppropriateCell()
    const areasTemplate = returnGridAreasMappedToCardPos()

    transformGridArea(areasTemplate)
}

function returnGridAreasMappedToCardPos(){
   let firstPart = ""
   let secondPart = ""
   let areas =""
   
   cards.forEach((card, index) => {
    if(cardPositions[index] == 1){
        areas = areas + "a "
    }
    else if (cardPositions[index] == 2){
        areas = areas + "b "
    }
    else if (cardPositions[index] == 3){
        areas = areas + "c "
   }
   else if (cardPositions[index] == 4){
    areas = areas + "d "
   }
   if(index == 1){
    firstPart = areas.substring(0,areas.length - 1)
    areas = "";
   }
   else if (index == 3){
    secondPart = areas.substring(0,areas.length - 1)
   }

})

return `"${firstPart}" "${secondPart}"`
}



function addCardsToAppropriateCell(){
    cards.forEach((card) => {
        addCardToGridCell(card)
    })
}

//Now create a method thats loops through the objectDefinition and represent to the grid position
function createCards()
{
    cardObjectDefinitions.forEach((cardItem)=>{
        createCard(cardItem)
    })
}


function createCard(cardItem){

    //create div elements that make up a card
    const cardElem = createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElem = createElement('div')
    const cardBackElem = createElement('div')

    //create front and back image elements for a card
    const cardFrontImg = createElement('img')
    const cardBackImg = createElement('img')

    //add class and id to card element
    addClassToElement(cardElem, 'card')
    
    addIdToElement(cardElem, cardItem.id)

    //add class to inner card element
    addClassToElement(cardInnerElem, 'card-inner')
    
    //add class to front card element
    addClassToElement(cardFrontElem, 'card-front')

    //add class to back card element
    addClassToElement(cardBackElem, 'card-back')

    //add src attribute and appropriate value to img element - back of card
    addSrcToImageElem(cardBackImg, cardBackImgPath)

    //add src attribute and appropriate value to img element - front of card
    addSrcToImageElem(cardFrontImg, cardItem.imagePath)

    //assign class to back image element of back of card
    addClassToElement(cardBackImg, 'card-img')
   
    //assign class to front image element of front of card
    addClassToElement(cardFrontImg, 'card-img')

    //add front image element as child element to front card element
    addChildElement(cardFrontElem, cardFrontImg)

    //add back image element as child element to back card element
    addChildElement(cardBackElem, cardBackImg)

    //add front card element as child element to inner card element
    addChildElement(cardInnerElem, cardFrontElem)

    //add back card element as child element to inner card element
    addChildElement(cardInnerElem, cardBackElem)

    //add inner card element as child element to card element
    addChildElement(cardElem, cardInnerElem)

    //add card element as child element to appropriate grid cell
    addCardToGridCell(cardElem)

    //To establish the each position of the card element within the grid
    initializeCardPositions(cardElem)

    //To add a eventlistener Method
    attachClickEventHandlerToCard(cardElem)

}

//Method to user to click the card 
function attachClickEventHandlerToCard(card){
    card.addEventListener("click", () => chooseCard(card))
}

//Method to store the initial position of the card in the grid within the card position array
function initializeCardPositions(card){
    cardPositions.push(card.id)
}


function createElement(elemType){
    return document.createElement(elemType)

}

//Method to  add  a class to the  card element
function addClassToElement(elem, className){
    elem.classList.add(className)
}

//Method to  add an id   to the  card element
function addIdToElement(elem, id){
    elem.id = id
}

//Method to add a scr of the image element  to the card element
function addSrcToImageElem(imgElem, src){
    imgElem.src = src
}

//Method to append the parent and child element
function addChildElement(parentElem, childElem){
    parentElem.appendChild(childElem)
}

// Method to add a image of the element and represent them in a grid element
function addCardToGridCell(card)
{
    const cardPositionClassName = mapCardIdToGridCell(card)

    const cardPosElem = document.querySelector(cardPositionClassName)

    addChildElement(cardPosElem, card)

}

// create a method to place the image in the grid element through the card.id in the array
function mapCardIdToGridCell(card){
   
    if(card.id == 1)
    {
        return '.card-pos-a'
    }
    else if(card.id == 2)
    {
        return '.card-pos-b'
    }
    else if(card.id == 3)
    {
        return '.card-pos-c'
    }
    else if(card.id == 4)
    {
        return '.card-pos-d'
    }
}