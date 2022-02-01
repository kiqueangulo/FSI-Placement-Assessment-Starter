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

//to display the total count
function showTotal(displayQuantity) {
    totalDisplay.textContent = `${total}`
}

//making the buttons work
gbMinusBtn.addEventListener('click', function(e) {
    if (gb > 0) {
        --gb
        --total //decreasing total count
    } else {
        gb = gb //to not let the gingerbread count go below zero
    }
    gbUpdateQuantity(gb)
    showTotal(total)
})

gbPlusBtn.addEventListener('click', function(e) {
    gb++
    total++ //increasing total count
    gbUpdateQuantity(gb)
    showTotal(total)
})

ccMinusBtn.addEventListener('click', function(e) {
    if (cc > 0) {
        --cc
        --total
    } else {
        cc = cc 
    }
    ccUpdateQuantity(cc)
    showTotal(total)
})

ccPlusBtn.addEventListener('click', function(e) {
    ++cc
    ++total
    ccUpdateQuantity(cc)
    showTotal(total)
})

sugarMinusBtn.addEventListener('click', function(e) {
    if (sugar > 0) {
        --sugar
        --total
    } else {
        sugar = sugar
    }
    sugarUpdateQuantity(sugar)
    showTotal(total)
})

sugarPlusBtn.addEventListener('click', function(e) {
    ++sugar
    ++total
    sugarUpdateQuantity(sugar)
    showTotal(total)
})

let yourName = "Enrique Angulo"
credit.textContent = `Created by ${yourName}`