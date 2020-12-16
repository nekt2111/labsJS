
/* eslint-env jest */
import productPage from '../productPage.js';


describe('Product Page Module',()=>{

    it('should return filled product page template', () => {
        const params = [[{
            id: 1,
            imgLogo: '/helloWorld',
            name: 'product',
            description: 'desc',
            size: 'size',
            price: '200.99',
            relatedProductsIds: [2]
        }, {
            imgLogo: '/helloWorld',
            name: 'product',
            description: 'desc',
            size: 'size',
            price: '200.99',
            relatedProductsIds: [1],
            id: 2
        }
        ], 0];
        const expectedResult = ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
 <div class="product__wrapper">
                
                <div class="product__column-1">
                    <div class="product__logo-wrapper">
                    <div class="product__main-logo">
                        <img src="/helloWorld" alt="">
                    </div>
                    </div>
                </div>

                <div class="product__column-2">
                    <div class="product__main-description">
                        <div class="product__main-title">product</div>
                        <div class="product__ingridients"><p>desc</p><p>size</p></div>
                        
                      
                        <div class="product__buy" id=1>
                            <div class="product__main-price"><span class="product-price__number">200.99</span><span
                                    class="price__currency">грн</span></div>
                            <div class="product__add-cart_btn"><button class="element__cart">Добавить в корзину</button></div>
                        </div>
                    </div>
                </div>
     
                <div class="product__others">
                    <div class="others__title">Другие товары:</div>
                    <div class="others__products-raw">
                    
                        <div class="other__product link" onclick="window.location.hash = window.location.hash.split('/')[0] + '/' + 2">
                            <div class="other__logo"><img src=/helloWorld alt="">
                            </div>
                            <div class="other__name">product</div>
                        </div>
                        
                    </div>
                </div>
              
            </div>

`;

        expect(productPage(params[0],params[1])).toEqual(expectedResult);

    }),
    it('should return filled product page template', () => {
        const params = [[{
            id: 1,
            imgLogo: '/helloWorld',
            name: 'product',
            description: 'desc',
            price: '200.99',
            relatedProductsIds: [2]
        }, {
            imgLogo: '/helloWorld',
            name: 'product',
            size: 'size',
            price: '200.99',
            relatedProductsIds: [1],
            id: 2
        }
        ], 0];
        const expectedResult = ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
 <div class="product__wrapper">
                
                <div class="product__column-1">
                    <div class="product__logo-wrapper">
                    <div class="product__main-logo">
                        <img src="/helloWorld" alt="">
                    </div>
                    </div>
                </div>

                <div class="product__column-2">
                    <div class="product__main-description">
                        <div class="product__main-title">product</div>
                        <div class="product__ingridients"><p>desc</p><p> </p></div>
                        
                      
                        <div class="product__buy" id=1>
                            <div class="product__main-price"><span class="product-price__number">200.99</span><span
                                    class="price__currency">грн</span></div>
                            <div class="product__add-cart_btn"><button class="element__cart">Добавить в корзину</button></div>
                        </div>
                    </div>
                </div>
     
                <div class="product__others">
                    <div class="others__title">Другие товары:</div>
                    <div class="others__products-raw">
                    
                        <div class="other__product link" onclick="window.location.hash = window.location.hash.split('/')[0] + '/' + 2">
                            <div class="other__logo"><img src=/helloWorld alt="">
                            </div>
                            <div class="other__name">product</div>
                        </div>
                        
                    </div>
                </div>
              
            </div>

`;

        expect(productPage(params[0],params[1])).toEqual(expectedResult);

    });



});