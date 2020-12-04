const view = (drinks) => `
             <div class="main__wrapper">
                <div class="water__title title"><h2>Вода</h2></div>
                <div class="water__row elements__row">
                    
                        ${drinks.filter((drink) => drink.categoryId === 1).map(drink => `
                        <div class="water__element element element-drink">
                        <div class="element__logo element__drink-logo"><img src=${drink.imgLogo} alt="water"></div>
                        <div class="element__description element__center-description ">
                            <div class="element__title element__drink-title link" onclick="window.location.hash += '/'+${drink.id}"><h3>${drink.name}</h3></div>
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
                    </div> `).join("")}
                </div>
                    <div class="water__title title"><h2>Сок</h2></div>
                    <div class="water__row elements__row">
                       ${drinks.filter((drink) => drink.categoryId === 2).map(drink => `
                        <div class="water__element element element-drink">
                        <div class="element__logo element__drink-logo"><img src=${drink.imgLogo} alt="water"></div>
                        <div class="element__description element__center-description ">
                            <div class="element__title element__drink-title link" onclick="window.location.hash += '/'+${drink.id}"><h3>${drink.name}</h3></div>
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
                    </div> `).join("")}
                    </div>

            </div>
        `

export default view;