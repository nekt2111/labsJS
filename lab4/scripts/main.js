

import TemplateProcessor from "./templateProccesor.js";
import Router from "./router.js";
import Client from "./client.js";
import Cart from "./cart.js";

const router = new Router()
const templateProcessor = new TemplateProcessor()
const client = new Client()
const cart = new Cart();
let statusShow = true;

export function getStatusShown(){
    return statusShow;
}

export function changeStatus(status){
    statusShow = status

}


function showSpinner() {
    document.querySelector(".spinner__wrapper").style.display = "block"
    const spinner = document.getElementById("spinner");
    spinner.classList.add('show');
    if(document.querySelector(".main__wrapper") !== null) {
        document.querySelector(".main__wrapper").style.display = "none"
    }
    else{
        document.querySelector(".product__wrapper").style.display = "none"
    }
}

function hideSpinner() {
    document.querySelector(".spinner__wrapper").style.display = "none"
    spinner.classList.remove('show');
 }

const headerLinks = ['#sales','#pizzas','#drinks','#sides','#deserts']

export async function getSum(){
    let prices = []
    let amounts = []
    let sum = 0;
    document.querySelectorAll(".order__price").forEach(element => prices.push(element.textContent.split(" ")[0]))
    document.querySelectorAll(".order__amount").forEach(amount => amounts.push(amount.textContent))

    for (let i = 0; i <prices.length ; i++) {
        sum += parseFloat(prices[i]) * parseFloat(amounts[i])
    }
    return sum
}


async function load(){
    let {fileName,catalogName,id} = await router.getCurrentState()
    console.log(fileName)
    await change(fileName,catalogName,id)
    await addAllEventListeners(catalogName,fileName)
    if(fileName === "cart"){
        await changeAllPrice()
    }
    window.scroll(0,0);
    console.log((await getSum()).toPrecision())

    document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()

}

async function changeAllPrice(){
    console.log((await getSum()).toPrecision())
    const price = (await getSum()).toPrecision().split(".")
    let allPrice;
    if(price[1] === undefined) {
        allPrice = price[0]  + " грн"
    }
    else {
        allPrice = price[0] + "." + price[1].substr(0, 2) + " грн"
    }
    document.querySelector(".order__all-price").textContent = allPrice
    document.getElementById("price-par").textContent = allPrice
}

async function addAllEventListeners(catalog,fileName){
    document.querySelector('.logo img').addEventListener('click',() => {
        window.location.hash = "";
    })
    document.querySelector('.logo__text').addEventListener('click',() => {
        window.location.hash = "";
    })
    for (let i = 0; i < headerLinks.length; i++) {
        document.querySelectorAll('.nav__link')[i].addEventListener('click',() => {


            window.location.hash = headerLinks[i]
        })
    }
    document.querySelector('.header__cart').addEventListener('click',() => {
        if(localStorage.getItem("cart") !== null && JSON.parse(localStorage.getItem("cart")).ids.length !== 0) {
            window.location.hash = "#cart";
        }
        else{
            window.location.hash = ""
        }
    })
    document.querySelectorAll(".size__small").forEach(element => element.addEventListener("click",changeToSmallSize))
    document.querySelectorAll(".size__medium").forEach(element => element.addEventListener("click",changeToMediumSize))
    document.querySelectorAll(".size__big").forEach(element => element.addEventListener("click",changeToBigSize))

    if(catalog === "db"){
        document.querySelectorAll(".element__cart").forEach(element => element.addEventListener('click',() => {
            cart.addOneProductToCart(element.parentElement.parentElement.id)
            document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()
        }))
    }
    else {
        document.querySelectorAll(".element__cart").forEach(element => element.addEventListener('click', () => {
            cart.addOneProductToCart(catalog + "." + element.parentElement.parentElement.id)
            document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()
        }))
    }
    if(fileName === "cart"){


        document.querySelectorAll(".order__amount-minus").forEach(element => element.addEventListener("click",minusProduct))
        document.querySelectorAll(".order__amount-plus").forEach(element => element.addEventListener("click",addProduct))


        document.querySelector(".order__registration-blank").addEventListener("submit",async (event) =>{
            event.preventDefault()
            let order = {
                name: document.getElementById("name").value,
                number: document.getElementById("number").value,
                email: document.getElementById("email").value,
                city: document.getElementById("city").value,
                street: document.getElementById("street").value,
                house: document.getElementById("house").value,
                flat: document.getElementById("flat").value,
                entrance: document.getElementById("entrance").value,
                date: document.getElementById("date").value,
                time: document.getElementById("time").value,
                payment: document.getElementById("payment").value,
            }

            changeStatus(false)
            let id = Object.values(await client.setData(order))[0]
            localStorage.clear()
            window.location.hash = "status/" + id


        })
    }
}

async function minusProduct(){
    const id = this.parentElement.parentElement.id;

    const cartObj = JSON.parse(localStorage.getItem("cart"))

    if(cartObj.amount[cartObj.ids.indexOf(id)] === 1){
        this.parentElement.parentElement.parentElement.parentElement.remove()
        cart.removeOneProductFromCart(id)
    }
    else{
        cart.removeOneProductFromCart(id)
        this.nextElementSibling.textContent = cartObj.amount[cartObj.ids.indexOf(id)] - 1
    }
    await changeAllPrice()
    document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()
}

async function addProduct(){

    const id = this.parentElement.parentElement.id;
    const cartObj = JSON.parse(localStorage.getItem("cart"))
    cart.addOneProductToCart(id)
    this.previousElementSibling.textContent = cartObj.amount[cartObj.ids.indexOf(id)] + 1
    await changeAllPrice()
    document.querySelector(".header__amount-of-products").textContent = cart.getAmountOfProduct().toString()






}


let view;
async function change(fileName,catalogName,id) {
    showSpinner()
    await import(`./views/${fileName}Page.js`).then((viewModule) => {
        view = viewModule.default;
        console.log(fileName)
        console.log(catalogName)
        console.log(id)

        return client.getDataCatalog(catalogName);
    })
        .then((data) => {
            hideSpinner();
            if(id !== undefined) {
                templateProcessor.render(view(data,id-1))
            }
            else{
                templateProcessor.render(view(data));
            }
        })

}


async function changeToSmallSize(){
    await changeSize(0,this.parentElement.parentElement.id)

}

async function changeToMediumSize(){
    await changeSize(1,this.parentElement.parentElement.id)
}

async function changeToBigSize(){
    await changeSize(2,this.parentElement.parentElement.id)
}



async function changeSize(pickedSize,id){
        let catalog = location.hash.split("#")[1]
        let newId;
        if(catalog === undefined){
            newId = id.split(".")[1]
            catalog = id.split(".")[0]
        }
        else{
            newId = id;
        }

        const sizes = document.getElementById(id).querySelectorAll(".size")

        sizes.forEach(element =>element.classList.remove("picked-size"))

        for (let i = 0; i < sizes.length ; i++) {
                if(i === pickedSize){
                    sizes[i].classList.add("picked-size")
                }
        }

    const productData = await client.getObjectInCatalog(catalog,parseInt(newId));
    document.getElementById(id).querySelector(".price__number").textContent = productData.prices[pickedSize]


}


window.onhashchange = load
load()