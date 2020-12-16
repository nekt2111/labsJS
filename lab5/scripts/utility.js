import Cart from './cart.js';

// Shown Status flag
let statusShow = true;
let cart = new Cart();

function getStatusShown(){
    return statusShow;
}

function changeStatus(status){
    statusShow = status;
}

// Manipulation with prices in cart and amount of products

async function changeAllPrice(){
    const price = (await getSum()).toPrecision().split('.');
    let allPrice;
    if(price[1] === undefined) {
        allPrice = price[0]  + ' грн';
    }
    else {
        allPrice = price[0] + '.' + price[1].substr(0, 2) + ' грн';
    }
    document.querySelector('.order__all-price').textContent = allPrice;
    document.getElementById('price-par').textContent = allPrice;
}

async function getSum(){
    let prices = [];
    let amounts = [];
    let sum = 0;
    document.querySelectorAll('.order__price').forEach(element => prices.push(element.textContent.split(' ')[0]));
    document.querySelectorAll('.order__amount').forEach(amount => amounts.push(amount.textContent));

    for (let i = 0; i <prices.length ; i++) {
        sum += parseFloat(prices[i]) * parseFloat(amounts[i]);
    }
    return sum;
}

async function minusProduct(){
    const id = this.parentElement.parentElement.id;

    const cartObj = JSON.parse(localStorage.getItem('cart'));

    if(cartObj.amount[cartObj.ids.indexOf(id)] === 1){
        this.parentElement.parentElement.parentElement.parentElement.remove();
        cart.removeOneProductFromCart(id);
    }
    else{
        cart.removeOneProductFromCart(id);
        this.nextElementSibling.textContent = cartObj.amount[cartObj.ids.indexOf(id)] - 1;
    }
    await changeAllPrice();
    document.querySelector('.header__amount-of-products').textContent = cart.getAmountOfProduct().toString();
}

async function addProduct() {

    const id = this.parentElement.parentElement.id;
    const cartObj = JSON.parse(localStorage.getItem('cart'));
    cart.addOneProductToCart(id);
    this.previousElementSibling.textContent = cartObj.amount[cartObj.ids.indexOf(id)] + 1;
    await changeAllPrice();
    document.querySelector('.header__amount-of-products').textContent = cart.getAmountOfProduct().toString();

}

export {
    getStatusShown,
    changeStatus,
    changeAllPrice,
    minusProduct,
    addProduct,
    getSum
};