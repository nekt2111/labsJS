const view = (products,productId) => `
 <div class="product__wrapper">
                <div class="product__column-1">
                    <div class="product__logo-wrapper">
                    <div class="product__main-logo">
                        <img src="${products[productId].imgLogo}" alt="">
                    </div>
                    </div>
                </div>

                <div class="product__column-2">
                    <div class="product__main-description">
                        <div class="product__main-title">Пицца ${products[productId].name}</div>
                        <div class="product__ingridients">${products[productId].ingredients}</div>
                        <div class="product__buy">
                            <div class="product__main-price"><span class="product-price__number">${products[productId].price}</span><span
                                    class="price__currency">${products[productId].currency}</span></div>
                            <div class="product__add-cart_btn"><button class="element__cart">Добавить в корзину</button></div>
                        </div>
                    </div>
                </div>
     
                <div class="product__others">
                    <div class="others__title">Другие товары:</div>
                    <div class="others__products-raw">
                    ${products.filter(product => products[productId].relatedProductsIds.includes(product.id)).map((otherProduct) =>`
                        <div class="other__product">
                            <div class="other__logo"><img src=${otherProduct.imgLogo} alt="">
                            </div>
                            <div class="other__name">${otherProduct.name}</div>
                        </div>
                        ` ).join("")}
                    </div>
                </div>
              
            </div>

`
export default view;