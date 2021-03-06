/* eslint-env jest */

import desertsPage from '../desertsPage.js';

describe('Deserts Page Module',()=>{

    it('should return filled deserts page template', () => {
        const params = [{id: 1, imgLogo: 'logo', name: 'name', price: '200.99', categoryId: 1}];
        const expectedResult = ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">
                

            <div class="best__title title"><h2>Десерты</h2></div>
            <div class="best__row elements__row">
                
                <div class="best__element element element-drink" id=1>
                    <div class="element__logo"><img src=logo alt="Maffin"></div>
                    <div class="element__description element__center-description">
                        <div class="element__title link" onclick="window.location.hash += '/'+1" ><h3>name</h3></div>
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
        </div>`;


        expect(desertsPage(params)).toEqual(expectedResult);
    });});