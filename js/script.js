import {Card} from "./Card.js";
import {CardBox} from "./CardBox.js";
import {Answer} from "./Answer.js";
import {CardPool} from "./CardPool.js";
import {quizContainer, questionEl, answerEls, previousBtn, checkBtn, nextBtn, load1to10, load11to20, load21to30, questionIdEl} from './variables.js';

import {
    card1, card2, card3, card4, card5, card6, card7, card8, card9, card10,
    card11, card12, card13, card14, card15, card16, card17, card18, card19, card20,
    card21, card22, card23, card24, card25, card26, card27, card28, card29, card30,
    card31, card32, card33, card34, card35, card36, card37, card38, card39, card40,
    card41, card42
} from './pool.js';



//Crete Objects
//Cards

/*function howManyCardYouWant(){
    const x = [];
    for(let i = 1; i <= 8; i++){
        x.push('card' + i);

    }
    cardBox1.loadCards(x);
}
howManyCardYouWant();*/
const cardBox1 = new CardBox(1);
load1to10.addEventListener('click', (e) => {
    cardBox1.loadCards([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]);

})
cardBox1.loadCards([card1, card2, card3, card4, card5, card6, card7, card8, card9, card10]);

//experiment
const cardBox2 = new CardBox(1);
load11to20.addEventListener('click', (e) => {
    cardBox1.loadCards([card11, card12, card13, card14, card15, card16, card17, card18, card19, card20]);

})
const cardBox3 = new CardBox(1);
load21to30.addEventListener('click', (e) => {
    cardBox1.loadCards([card21, card22, card23, card24, card25, card26, card27, card28, card29, card30]);

})


//Pool logic
const arrayLength = cardBox1.getCardCount();

console.log(cardBox1);

const cardPool = new CardPool();

function loadCardsDynamically(){
    for(let i = 1; i <= arrayLength; i++){
        cardPool.loadCard('card' + i);
    }
}
loadCardsDynamically();

/*cardPool.loadCard(card1);*/

console.log(cardPool);




//Global Scope Variables

let currentIndex = 0;
let globalUserChoice;
let globalCorrectAnswer;

//HTML

function loadContent() {
    const currentCard = cardBox1.cards[currentIndex];
    questionEl.innerHTML = currentCard.question;
    questionIdEl.innerHTML = currentCard.id;
    answerEls.forEach((el, index) => {
        el.innerHTML = currentCard.answers[index].text;
        if (currentCard.answers[index].correct === true) {
            globalCorrectAnswer = currentCard.answers[index].text;
        }
    });
}
loadContent();

answerEls.forEach(el => {
    el.addEventListener("click", (e) => {
        let userChoice = el.innerHTML;
        globalUserChoice = userChoice;
        console.log(userChoice);
        answerEls.forEach(answer => answer.classList.remove('selected'));
        el.classList.add('selected');
    })
})


answerEls.forEach(el => {
    if(el.correct === true) {
        let correctAnswer = el.text;
        globalCorrectAnswer = correctAnswer;
    }
})
console.log(globalCorrectAnswer);
checkBtn.addEventListener("click", (e) => {


    if(globalUserChoice === globalCorrectAnswer ) {
        alert("Correct!");
    } else {
        alert("Wrong Answer!");
    }
})

nextBtn.addEventListener("click", (e) => {
    currentIndex++;
    answerEls.forEach(answer => answer.classList.remove('selected'));
    loadContent();
})

previousBtn.addEventListener("click", (e) => {
    currentIndex--;
    answerEls.forEach(answer => answer.classList.remove('selected'));
    loadContent();
})


