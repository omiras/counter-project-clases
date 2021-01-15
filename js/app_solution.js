class Counter {
    constructor(lowerButton, addButton, counterText) {
        this.counter = 0
        this.lowerButton = lowerButton
        this.addButton = addButton
        this.counterText = counterText

        this.lowerButton.onclick = () => {
            this.counter--
            this.updateTextValue()
        }

        this.addButton.onclick = () => {
            this.counter++
            this.updateTextValue()
        }

    
    }

    updateTextValue() {
        this.counterText.textContent = this.counter
    }
}

let lowerButton1 = document.querySelector('#container-1 .prevBtn')
let addButton1 = document.querySelector('#container-1 .nextBtn')
let counterText = document.querySelector('#counter-1')

let counter1 = new Counter(lowerButton1, addButton1, counterText)

let lowerButton2 = document.querySelector('#container-2 .prevBtn')
let addButton2 = document.querySelector('#container-2 .nextBtn')
let counterText2 = document.querySelector('#counter-2')

let counter2 = new Counter(lowerButton2, addButton2, counterText2)