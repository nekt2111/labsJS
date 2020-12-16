/* eslint-env jest */
import Cart from '../cart.js';

describe('Cart Module',() => {
    const cart = new Cart();

    it('it should add new product to cart',() => {

        localStorage.setItem('cart',JSON.stringify({
            ids:[],
            amount:[]
        }));

        cart.addOneProductToCart('pizzas.1');

        expect(JSON.parse(localStorage.getItem('cart')).ids.length).toEqual(1);
        expect(JSON.parse(localStorage.getItem('cart')).amount[0]).toEqual(1);


    }),
    it('should return 0 amount of null cart',()=>{
        localStorage.clear();
        const amount = cart.getAmountOfProduct();
        expect(amount).toEqual(0);
    });






});