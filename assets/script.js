let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0
let totalDisplay = document.getElementById('qty-total') //to show total count
//to increase or decrease gingerbread
let gbPlusBtn = document.getElementById('add-gb')
let gbMinusBtn = document.getElementById('minus-gb')
//to increase or decrease chocolate chip
let ccPlusBtn = document.getElementById('add-cc')
let ccMinusBtn = document.getElementById('minus-cc')
//to increase or decrease sugar sprinkle
let sugarPlusBtn = document.getElementById('add-sugar')
let sugarMinusBtn = document.getElementById('minus-sugar')

//to display gingerbread count
function gbUpdateQuantity(displayQuantity) {
    let gb = document.querySelector('#qty-gb')
    gb.innerHTML = displayQuantity
}

//to display chocolate chip count
function ccUpdateQuantity(displayQuantity) {
    let cc = document.querySelector('#qty-cc')
    cc.innerHTML = displayQuantity
}

//to display sugar sprinkle count
function sugarUpdateQuantity(displayQuantity) {
    let sugar = document.querySelector('#qty-sugar')
    sugar.innerHTML = displayQuantity
}

//making the buttons work
gbMinusBtn.addEventListener('click', function(e) {
    if (gb > 0) {
        gb--
        total-- //decreasing total count
    } else {
        gb = gb //to not let the gingerbread count go below zero
    }
    gbUpdateQuantity(gb)
    totalDisplay.textContent = `${total}` //to show the total count
})

gbPlusBtn.addEventListener('click', function(e) {
    gbUpdateQuantity(++gb)
    totalDisplay.textContent = `${++total}` //to show and increase the total count
})

ccMinusBtn.addEventListener('click', function(e) {
    if (cc > 0) {
        cc--
        total--
    } else {
        cc = cc //to not let the chocolate chip count go below zero
    }
    ccUpdateQuantity(cc)
    totalDisplay.textContent = `${total}`
})

ccPlusBtn.addEventListener('click', function(e) {
    ccUpdateQuantity(++cc)
    totalDisplay.textContent = `${++total}`
})

sugarMinusBtn.addEventListener('click', function(e) {
    if (sugar > 0) {
        sugar--
        total--
    } else {
        sugar = sugar //to not let the sugar sprinkle count go below zero
    }
    sugarUpdateQuantity(sugar)
    totalDisplay.textContent = `${total}`
})

sugarPlusBtn.addEventListener('click', function(e) {
    sugarUpdateQuantity(++sugar)
    totalDisplay.textContent = `${++total}`
})

let yourName = "Enrique Angulo"
credit.textContent = `Created by ${yourName}`