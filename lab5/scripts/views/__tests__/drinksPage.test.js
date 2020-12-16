/* eslint-env jest */

import drinksPage from '../drinksPage.js';

describe('Drinks Page Module',()=>{

    it('should return filled drinks page template', () => {
        const params = [{id: 1, imgLogo: 'logo', name: 'name', price: '200.99', categoryId: 1},{id:2,imgLogo:'logo',name:'name',price:'200.99',categoryId: 2}];
        const expectedResult = `
                  <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
             <div class="main__wrapper">
                           
                <div class="water__title title"><h2>Вода</h2></div>
                <div class="water__row elements__row">
                    
                        
                        <div class="water__element element element-drink" id=1>
                        <div class="element__logo element__drink-logo"><img src=logo alt="water"></div>
                        <div class="element__description element__center-description ">
                            <div class="element__title element__drink-title link" onclick="window.location.hash += '/'+1"><h3>name</h3></div>
                        </div>
                        <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                        <div class="element__buy">
                            <div class="element__price"><span class="price__number">200.99</span><span
                                    class="price__currency">грн</span></div>
                            <div class="element__cart">В корзину</div>
                        </div>
                    </div> 
                </div>
                    <div class="water__title title"><h2>Сок</h2></div>
                    <div class="water__row elements__row">
                       
                        <div class="water__element element element-drink" id=2>
                        <div class="element__logo element__drink-logo"><img src=logo alt="water"></div>
                        <div class="element__description element__center-description ">
                            <div class="element__title element__drink-title link" onclick="window.location.hash += '/'+2"><h3>name</h3></div>
                        </div>
                         <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                        <div class="element__buy">
                            <div class="element__price"><span class="price__number">200.99</span><span
                                    class="price__currency">грн</span></div>
                            <div class="element__cart">В корзину</div>
                        </div>
                    </div> 
                    </div>

            </div>
        `;
        expect(drinksPage(params)).toEqual(expectedResult);
    });});