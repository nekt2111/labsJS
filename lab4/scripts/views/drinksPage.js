
const view = `
             <div class="main__wrapper">
                <div class="water__title title"><h2>Вода</h2></div>
                <div class="water__row elements__row">
                    <div class="water__element element element-drink">
                        <div class="element__logo element__drink-logo"><img src="img/drinks/gaz-thumbnail-960x960.png" alt="water"></div>
                        <div class="element__description element__center-description ">
                            <div class="element__title element__drink-title"><h3>BonAqua газ.</h3></div>
                        </div>
                        <div class="element__size">
                            <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">330мл</div>
                            <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >500мл</div>
                            <div class="size__big size" onclick="pickSize(\`size__big\`)">1л</div>
                        </div>
                        <div class="element__buy">
                            <div class="element__price"><span class="price__number">20.99</span><span
                                    class="price__currency">грн</span></div>
                            <div class="element__cart">В корзину</div>
                        </div>
                    </div>
                    <div class="water__element element element-drink">
                        <div class="element__logo element__drink-logo"><img src="img/drinks/gaz-thumbnail-960x960.png" alt="water"></div>
                        <div class="element__description element__center-description">
                            <div class="element__title element__drink-title"><h3>BonAqua газ.</h3></div>
                        </div>
                        <div class="element__size">
                            <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">330мл</div>
                            <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >500мл</div>
                            <div class="size__big size" onclick="pickSize(\`size__big\`)">1л</div>
                        </div>
                        <div class="element__buy">
                            <div class="element__price"><span class="price__number">20.99</span><span
                                    class="price__currency">грн</span></div>
                            <div class="element__cart">В корзину</div>
                        </div>
                    </div>
                </div>
                    <div class="water__title title"><h2>Сок</h2></div>
                    <div class="water__row elements__row">
                        <div class="water__element element element-drink">
                            <div class="element__logo element__drink-logo"><img src="img/drinks/gaz-thumbnail-960x960.png" alt="water"></div>
                            <div class="element__description element__center-description">
                                <div class="element__title element__drink-title"><h3>BonAqua газ.</h3></div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">330мл</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >500мл</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">1л</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">20.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                    </div>

            </div>
        `

export default view;