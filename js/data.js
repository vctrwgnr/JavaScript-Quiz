const $cardBox = [];

// Card 1: JavaScript Basics
const $card1 = {
    id: 1,
    question: "What is the purpose of the 'let' keyword in JavaScript?",
    cardBoxId: 1
};
const answer1_1 = { id: 1, cardId: 1, correct: false, text: "To declare a function" };
const answer1_2 = { id: 2, cardId: 1, correct: false, text: "To declare a constant variable" };
const answer1_3 = { id: 3, cardId: 1, correct: false, text: "To declare a global variable" };
const answer1_4 = { id: 4, cardId: 1, correct: true, text: "To declare a block-scoped variable" };

// Card 2: JavaScript Data Types
const $card2 = {
    id: 2,
    question: "Which of the following is not a primitive data type in JavaScript?",
    cardBoxId: 1
};
const answer2_1 = { id: 5, cardId: 2, correct: false, text: "String" };
const answer2_2 = { id: 6, cardId: 2, correct: false, text: "Number" };
const answer2_3 = { id: 7, cardId: 2, correct: false, text: "Boolean" };
const answer2_4 = { id: 8, cardId: 2, correct: true, text: "Object" };

// Card 3: JavaScript Functions
const $card3 = {
    id: 3,
    question: "What does the 'return' statement do in a function?",
    cardBoxId: 1
};
const answer3_1 = { id: 9, cardId: 3, correct: false, text: "Stops the browser from executing further code" };
const answer3_2 = { id: 10, cardId: 3, correct: false, text: "Declares a new variable" };
const answer3_3 = { id: 11, cardId: 3, correct: false, text: "Iterates through an array" };
const answer3_4 = { id: 12, cardId: 3, correct: true, text: "Exits the function and optionally provides a value" };

