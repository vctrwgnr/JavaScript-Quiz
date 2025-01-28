export class Answer {
    #id;
    #text;
    #correct;
    #cardId;

    constructor(id, text, correct, cardId) {
        this.#id = id;
        this.#text = text;
        this.#correct = correct;
        this.#cardId = cardId;
    }

    get id() {
        return this.#id;
    }

    get text() {
        return this.#text;
    }

    get correct() {
        return this.#correct;
    }

    get cardId() {
        return this.#cardId;
    }

    set id(value) {
        this.#id = value;
    }

    set text(value) {
        this.#text = value;
    }

    set correct(value) {
        this.#correct = value;
    }

    set cardId(value) {
        this.#cardId = value;
    }
}
