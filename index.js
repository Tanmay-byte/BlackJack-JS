let player={name:"Tanmay",
            chips:45
        }
let sum=0
let cards=[ ]
let hasBlackjack=false
let isAlive=false
let message=" "
let messageEl=document.getElementById("message-el")
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let playerEl=document.getElementById("player-el")
playerEl.textContent=player.name+": $"+player.chips
function getRandomCard(){
let randomNumber=Math.floor(Math.random()*13)+1
if(randomNumber>10){
    return 10
}
else if(randomNumber===11){
    return 11
}
else{
return randomNumber
}
}

function startGame(){
    isAlive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    let sum=firstCard+secondCard
    let cards=[firstCard,secondCard]
    renderGame()
}

function renderGame(){
    cardsEl.textContent="Cards: " 
    for(i=0;i<cards.length;i++)
    {
        cardsEl.textContent+=cards[i]+" "
    }
    sumEl.textContent="Sum: "+sum
    if(sum<=20){
        message="Do you want to draw a new card"
    }
    else if(sum===21){
        message="You have got Blackjack"
        hasBlackjack=true
    }
    else{
        message="You are out of the game"
        isAlive=false
        
    }
    messageEl.textContent=message
    console.log(message)
}

function newCard(){
    if(hasBlackjack===false && isAlive===true){
    let card=getRandomCard()
    sum+=card
    cards.push(card)
    renderGame()
    console.log("Drawing a new card from the deck")
    }

}
