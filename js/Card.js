export class Card {
    #id;
    #question;
    #cardBoxId;
    #answers;

    constructor(id, question, cardBoxId, answers) {
        this.#id = id;
        this.#question = question;
        this.#cardBoxId = cardBoxId;
        this.#answers = answers;
    }

    get id() {
        return this.#id;
    }

    get question() {
        return this.#question;
    }

    get cardBoxId() {
        return this.#cardBoxId;
    }
    get answers() {
        return this.#answers;
    }

    set id(value) {
        this.#id = value;
    }

    set question(value) {
        this.#question = value;
    }

    set cardBoxId(value) {
        this.#cardBoxId = value;
    }
}

