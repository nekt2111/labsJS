const view = (product) => `
 <div class="product__wrapper">
                <div class="product__column-1">
                    <div class="product__logo-wrapper">
                    <div class="product__main-logo">
                        <img src="img/pizza/Margarita.jpg" alt="">
                    </div>
                    </div>
                </div>

                <div class="product__column-2">
                    <div class="product__main-description">
                        <div class="product__main-title">Пицца ${product.name}</div>
                        <div class="product__ingridients">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur cupiditate magnam officiis quia. Corporis dolore ex odit quo quos, ullam?</div>
                        <div class="product__buy">
                            <div class="product__main-price"><span class="product-price__number">100.99</span><span
                                    class="price__currency">грн</span></div>
                            <div class="product__add-cart_btn"><button class="element__cart">Добавить в корзину</button></div>
                        </div>
                    </div>
                </div>
                <div class="product__others">
                    <div class="others__title">Другие товары:</div>
                    <div class="others__products-raw">
                        <div class="other__product">
                            <div class="other__logo"><img src="img/pizza/Margarita.jpg" alt="">
                            </div>
                            <div class="other__name">Маргарита</div>
                        </div>
                        <div class="other__product">
                            <div class="other__logo"><img src="img/pizza/Margarita.jpg" alt="">
                            </div>
                            <div class="other__name">Маргарита</div>
                        </div>
                        <div class="other__product">
                            <div class="other__logo"><img src="img/pizza/Margarita.jpg" alt="">
                            </div>
                            <div class="other__name">Маргарита</div>
                        </div>
                        <div class="other__product">
                            <div class="other__logo"><img src="img/pizza/Margarita.jpg" alt="">
                            </div>
                            <div class="other__name">Маргарита</div>
                        </div>
                        <div class="other__product">
                            <div class="other__logo"><img src="img/pizza/Margarita.jpg" alt="">
                            </div>
                            <div class="other__name">Маргарита</div>
                        </div>

                    </div>
                </div>

            </div>

`
export default view;