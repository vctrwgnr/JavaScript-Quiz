export class CardBox {
    #id;
    #cards = [];

    constructor(id) {
        this.#id = id;

    }

    get cards() {
        return this.#cards;
    }
    loadCards(cards) {
        this.#cards = cards;
    }
    getCardCount() {
        return this.cards.length;
    }

    get id() {
        return this.#id;
    }

    set id(value) {
        this.#id = value;
    }
}

