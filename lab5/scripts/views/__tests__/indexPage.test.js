/* eslint-env jest */

import indexPage from '../indexPage.js';

describe('Main Page Module',()=>{

    it('should return filled main page template', () => {
        const params = {pizzas:[{name:'name',imgLogo:'logo',description:'desc',recommended:true,price:32.99,id:2}],drinks:[],sides:[],deserts:[],sales:[{name:'name',imgLogo:'logo',description:'desc',id:1,recommended:true}]};
        const expectedResult = ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
   
    <div class="main__wrapper">
                    <div class="sales__title title"><h2>Акции</h2></div>
                    <div class="sales__row elements__row">
                    
                    <div class="sales__element sale">
                            <div class="sale__logo"><img src=logo alt="Paperoni"></div>
                            <div class="sale__description">
                                <div class="sale__title"><h3><a style="color:black" href="html/product.html">name</a></h3></div>
                                <div class="sale__information">desc</div>
                            </div>
                            <div class="sale__details">
                                <div class="sale__details-btn" onclick="window.location.hash += 'sales/'+1"><h3>Детали</div>
                            </div>
                        </div>
                        
                    </div>
                    <div class="hit__title title"><h2>Хиты сезона</h2></div>
                    <div class="hit__row elements__row">
                    
                      
                        <div class="hit__element element" id=${'pizzas.' + 2}>
                            <div class="element__logo"><img src=logo alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title link" onclick="window.location.hash += 'pizzas/'+2"><h3>name</h3></div>
                                <div class="element__information">desc</div>
                            </div>
                             <div class="element__size element__side-size">
                                 <div class="size__small size picked-size">Стандарт</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">32.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                        
                     
                      
                       
                     
                    </div>
            </div>
`;
        expect(indexPage(params)).toEqual(expectedResult);

    });});