/* eslint-env jest */

import Client from '../client.js';
import 'regenerator-runtime/runtime.js';


describe('Client module',() =>{
    const client = new Client();

    it('it should take data from catalog',async ()=>{
        require('node-fetch');
        let sales = await client.getDataCatalog('sales');

        expect(sales[0]).toStrictEqual({'date': '25-03-2020', 'description': 'Каждый вторник Domino\'s проводит невероятную акцию «Сумасшедший вторник» - покупай одну среднюю или большую пиццу и получай вторую со скидкой 80%! В акции не участвуют маленькие пиццы. Согласно условиям акции, пицца со скидкой должна быть из меню без добавления ингредиентов. Акция действует на доставку, и для заказов, которые можно будет получить возле точки адресной доставки (у входа в пиццерию). Скидка предоставляется на меньший товар в чеке. Акция не суммируется с другими акционными предложениями. Категория пицц "Лучшая цена" является акционным предложением, которое не работает во вторник. Во вторник пиццы категории "Лучшая цена" переходят в категорию пицц "Классические". С акцией вторника бонусы не списываются, только начисляются.', 'id': 1, 'imgLogo': 'img/vtornik.jpg', 'name': 'Сумасшедший вторник', 'recommended': true});
    }),
    it('',async ()=>{
        let exists = await client.idExists('pizzas',1);
        expect(exists).toEqual(true);
    }),
    it('',async ()=>{
        let exists = await client.idExists('pizzas',100);
        expect(exists).toEqual(false);
    }),
    it('',async ()=>{
        let response = Object.values(await client.setData({}))[0];
        expect(response).toEqual(9);
    });
});