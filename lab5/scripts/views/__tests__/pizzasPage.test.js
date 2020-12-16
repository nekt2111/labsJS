/* eslint-env jest */
import pizzasPage from '../pizzasPage.js';

describe('Pizzas Page Module',()=>{

    it('should return filled pizzas page template', () => {
        const params = [{id: 1, imgLogo: 'logo', name: 'name',description:'description', price: '200.99', categoryId: 1}, {
            id: 2,
            imgLogo: 'logo',
            name: 'name',description:'description',
            price: '200.99',
            categoryId: 2
        }, {id: 3, imgLogo: 'logo', name: 'name',description:'description', price: '200.99', categoryId: 3}];
        const expectedResult = `          <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
           <div class="main__wrapper">
                          
                    <div class="best__title title"><h2>Пицца: Лучшая Цена</h2></div>
                    <div class="best__row elements__row">
                        <div class="best__element element" id=1>
                            <div class="element__logo"><img src=logo alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title link" onclick="window.location.hash += '/'+1"><h3>name</h3></div>
                                <div class="element__information">description</div>
                            </div>
                            <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">200.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">
                                В корзину</div>
                            </div>
                        </div>
                    </div>
                    <div class="classic__title title"><h2>Пицца: Классические </h2></div>
                    <div class="classic__row elements__row">
                    <div class="best__element element" id=2>
                            <div class="element__logo"><img src=logo alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title link" onclick="window.location.hash += '/'+2"><h3>name</h3></div>
                                <div class="element__information">description</div>
                            </div>
                            <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">200.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">
                                В корзину</div>
                            </div>
                        </div>
                       
                    </div>
                    <div class="firm__title title"><h2>Пицца: Фирменные </h2></div>
                    <div class="firm__row elements__row">
                          
                        <div class="best__element element" id=3>
                            <div class="element__logo"><img src=logo alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title link" onclick="window.location.hash += '/'+3"><h3>name</h3></div>
                                <div class="element__information">description</div>
                            </div>
                            <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">200.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">
                                В корзину</div>
                            </div>
                        </div>
                        
                    </div>
            </div>
        `;
        expect(pizzasPage(params)).toEqual(expectedResult);


    });});