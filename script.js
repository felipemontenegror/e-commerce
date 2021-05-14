const c =(el) => document.querySelector(el)
const cs = (el) => document.querySelectorAll(el)

pizzaJson.map((item, index) => {
    let pizzaItem = c('.models .pizza-item').cloneNode(true) //c=document.querySelector

    pizzaItem.querySelector('.pizza-item--img img').src = item.img
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$ ${item.price.toFixed(2)}`
    pizzaItem.querySelector('.pizza-item--name').innerHTML = item.name
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description
    pizzaItem.querySelector('a').addEventListener('click', (e) => {
        e.preventDefault()

        c('.PizzaWindowArea').style.opacity = 0
        c('.PizzaWindowArea').style.display = 'flex'  //altera o estado do display de none para flex
        setTimeout (() => {
            c('.PizzaWindowArea').style.opacity = 1
    }, 2000)
    })

    c('.pizza-area').append(pizzaItem)
})