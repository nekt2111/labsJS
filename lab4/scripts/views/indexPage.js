
const view = (object) => `
    <div class="main__wrapper">
                    <div class="sales__title title"><h2>Акции</h2></div>
                    <div class="sales__row elements__row">
                    ${Object.entries(object).filter(([key]) => key === "sales" )[0][1].filter(sale => sale.recommended === true).map(sale => `
                    <div class="sales__element sale">
                            <div class="sale__logo"><img src=${sale.imgLogo} alt="Paperoni"></div>
                            <div class="sale__description">
                                <div class="sale__title"><h3><a style="color:black" href="html/product.html">${sale.name}</a></h3></div>
                                <div class="sale__information">${sale.description}</div>
                            </div>
                            <div class="sale__details">
                                <div class="sale__details-btn">Детали</div>
                            </div>
                        </div>
                        `).join("")}
                    </div>
                    <div class="hit__title title"><h2>Хиты сезона</h2></div>
                    <div class="hit__row elements__row">
                    ${Object.entries(object).filter(([key]) => key !== "sales")[0][1].filter(products => products.recommended === true).map((product) => `
                      
                        <div class="hit__element element" id=${'pizzas.' + product.id}>
                            <div class="element__logo"><img src=${product.imgLogo} alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title link" onclick="window.location.hash += 'pizzas/'+${product.id}"><h3>${product.name}</h3></div>
                                <div class="element__information">${product.ingredients}</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size">Маленькая</div>
                                <div class="size__medium size">Средняя</div>
                                <div class="size__big size">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">${product.prices[0]}</span><span
                                        class="price__currency">${product.currency}</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                        `).join("")}
                     ${Object.entries(object).filter(([key]) => key !== "sales")[1][1].filter(products => products.recommended === true).map((drink) => `
                      
                        <div class="water__element element element-drink" id=${'drinks.' + drink.id}>
                        <div class="element__logo element__drink-logo link"><img src=${drink.imgLogo} alt="water"></div>
                        <div class="element__description element__center-description ">
                            <div class="element__title element__drink-title link" onclick="window.location.hash +=  'drinks/'+${drink.id}"><h3>${drink.name}</h3></div>
                        </div>
                        <div class="element__size">
                            <div class="size__small size picked-size">330мл</div>
                            <div class="size__medium size"  >500мл</div>
                            <div class="size__big size">1л</div>
                        </div>
                        <div class="element__buy">
                            <div class="element__price"><span class="price__number">${drink.prices[0]}</span><span
                                    class="price__currency">${drink.currency}</span></div>
                            <div class="element__cart">В корзину</div>
                        </div>
                    </div>
                        `).join("")}
                      ${Object.entries(object).filter(([key]) => key !== "sales")[2][1].filter(products => products.recommended === true).map((side) => `
                      
                         <div class="best__element element element-drink">
                            <div class="element__logo"><img src=${side.imgLogo} alt="Streeps"></div>
                          <div class="element__description element__center-description">
                             <div class="element__title element__drink-title link" onclick="window.location.hash += 'sides/'+${side.id}"><h3>${side.name}</h3></div>
                                     </div>
                             <div class="element__size element__side-size">
                                <div class="size__small size picked-size">Стандарт</div>
                                 </div>
                                <div class="element__buy">
                                 <div class="element__price"><span class="price__number">${side.price}</span><span
                            class="price__currency">${side.currency}</span></div>
                             <div class="element__cart">В корзину</div>
                             </div>
            </div>
                                      `).join("")}
                       ${Object.entries(object).filter(([key]) => key !== "sales")[3][1].filter(products => products.recommended === true).map((desert) => `
                      
                         <div class="best__element element element-drink">
                    <div class="element__logo link"><img src=${desert.imgLogo} alt="Maffin"></div>
                    <div class="element__description element__center-description">
                        <div class="element__title link" onclick="window.location.hash += 'deserts/'+${desert.id}" ><h3>${desert.name}</h3></div>
                    </div>
                    <div class="element__size element__side-size">
                        <div class="size__small size picked-size">Стандарт</div>
                    </div>
                    <div class="element__buy">
                        <div class="element__price"><span class="price__number">${desert.price}</span><span
                                class="price__currency">${desert.currency}</span></div>
                        <div class="element__cart">В корзину</div>
                    </div>
                </div>
                        `).join("")}
                     
                    </div>
            </div>
`

export default view;