//I got stuck trying to show the total. You'll see the tries I gave it through te code.

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = gb + cc + sugar
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
    } else {
        gb = gb //to not let the gingerbread count go below zero
    }
//   totalDisplay.textContent = `${total}`     this was my first attempt to dislay the total quantity
    gbUpdateQuantity(gb)
})

gbPlusBtn.addEventListener('click', function(e) {
//    totalDisplay.innerHTML = total     this was my second attempt
    gbUpdateQuantity(++gb)
})

ccMinusBtn.addEventListener('click', function(e) {
    if (cc > 0) {
        cc--
    } else {
        cc = cc //to not let the chocolate chip count go below zero
    }
    ccUpdateQuantity(cc)
})

ccPlusBtn.addEventListener('click', function(e) {
    ccUpdateQuantity(++cc)
})

sugarMinusBtn.addEventListener('click', function(e) {
    if (sugar > 0) {
        sugar--
    } else {
        sugar = sugar //to not let the sugar sprinkle count go below zero
    }
    sugarUpdateQuantity(sugar)
})

sugarPlusBtn.addEventListener('click', function(e) {
    sugarUpdateQuantity(++sugar)
})

/*and this was my third one

if (gb > 0 || cc > 0 || sugar > 0) {
    totalDisplay.textContent = `${total}`
} else {
    total = 0
}*/

let yourName = "Enrique Angulo"
credit.textContent = `Created by ${yourName}`