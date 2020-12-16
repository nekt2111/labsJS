/* eslint-env jest */



import {getStatusShown,getSum,changeAllPrice,changeStatus,minusProduct,addProduct} from '../utility';
import 'regenerator-runtime/runtime.js';

describe('Utility Module', () => {

    it('should manipulate status',()=>{

        expect(getStatusShown()).toEqual(true);
        changeStatus(false);
        expect(getStatusShown()).toEqual(false);

    }),

    it('should get sum from html',  async () =>  {

        document.body.innerHTML = '<main><div class="order__price">209.99</div><div class="order__amount">2</div></main>';

        let sum = await getSum();
        expect(sum).toEqual(419.98);
    }),

    it('should changePrice in html, when price has coma', async () => {
        document.body.innerHTML = '<main><div class="order__price">209.99</div><div class="order__amount">2</div><div class="order__all-price"></div><div id="price-par"></div></main>';
        await changeAllPrice();
        expect(document.querySelector('.order__all-price').textContent).toBe('419.98 грн');
        expect(document.getElementById('price-par').textContent).toBe('419.98 грн');

    }),
    it('should changePrice in html, when price hasn`t coma', async () => {
        document.body.innerHTML = '<main><div class="order__price">209</div><div class="order__amount">2</div><div class="order__all-price"></div><div id="price-par"></div></main>';
        await changeAllPrice();
        expect(document.querySelector('.order__all-price').textContent).toBe('418 грн');
        expect(document.getElementById('price-par').textContent).toBe('418 грн');
    }),


    it('should add product to localStorage',async () => {
        localStorage.setItem('cart',JSON.stringify({
            ids:['pizzas.1'],
            amount:[2]
        }));
        document.body.innerHTML = '<main><div class="header__amount-of-products"></div><div id="pizzas.1"><div><div class="amount">2</div><div class="plus">+</div></div></div><div class="order__all-price"></div><div id="price-par"></div></main>';
        await addProduct.bind(document.querySelector('.plus'))();
        expect(document.querySelector('.plus').previousElementSibling.textContent).toBe('3');
        expect(document.querySelector('.header__amount-of-products').textContent).toEqual('3');
    }),

    it('should delete product from localstorage',async ()=>{
        localStorage.setItem('cart',JSON.stringify({
            ids:['pizzas.1'],
            amount:[2]
        }));
        document.body.innerHTML = '<main><div class="header__amount-of-products"></div><div id="pizzas.1"><div><div class="minus">-</div><div class="amount">2</div></div></div><div class="order__all-price"></div><div id="price-par"></div></main>';
        await minusProduct.bind(document.querySelector('.minus'))();
        expect(document.querySelector('.minus').nextElementSibling.textContent).toBe('1');
        expect(document.querySelector('.header__amount-of-products').textContent).toEqual('1');
    }),

    it('should remove element from cart', async ()=>{
        document.body.innerHTML = '<main><div class="header__amount-of-products"></div><div><div><div id="pizzas.1"><div><div class="minus">-</div><div class="amount">1</div></div></div></div></div><div class="order__all-price"></div><div id="price-par"></div></main>';
        localStorage.setItem('cart',JSON.stringify({
            ids:['pizzas.1'],
            amount:[1]
        }));
        await minusProduct.bind(document.querySelector('.minus'))();
        expect(document.querySelector('.minus')).toBe(null);
        expect(document.querySelector('.header__amount-of-products').textContent).toEqual('0');
    });




});