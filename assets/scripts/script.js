const element_cred = document.getElementById('credits')
const comp_mes = document.getElementById('comp-mes')
const progress = document.getElementById('credit-bar')
const total_reais = document.getElementById('total-em-reais')
let credits_str = element_cred.innerText
let credits = parseInt(credits_str)
let reais = credits * 200
const btn_minus = document.getElementById('minus-btn')
const btn_plus = document.getElementById('plus-btn')

function alt_cred (value) {
    if (credits >= 100 & credits <= 2000) {
        credits += value
        if (credits < 100) {
            credits = 100
        }
        if (credits < 2000) {
            credits = 2000
        }
    }
    element_cred.innerText = credits.toString()
    comp_mes.innerText = credits.toString() + ' Créditos'
    progress.value = credits
    let reais = credits * 200
    total_reais.innerText = reais.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
    })
}

btn_minus.addEventListener ('click', () => {
    alt_cred(-10)
})
btn_plus.addEventListener ('click', () => {
    alt_cred(10)
})