
const view = (products) => `
    <div class="main__wrapper">
                    <div class="sales__title title"><h2>Акции</h2></div>
                    <div class="sales__row elements__row">
                        <div class="sales__element element">
                            <div class="element__logo"><img src="img/pizza/Margarita.jpg" alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title"><h3>Пицца Маргарита</h3></div>
                                <div class="element__information">Моцарела, Соус, Бекон, Ветчина</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">Маленькая</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >Средняя</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">100.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                        <div class="sales__element element">
                            <div class="element__logo"><img src="img/pizza/Margarita.jpg" alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title"><h3>Пицца Маргарита</h3></div>
                                <div class="element__information">Моцарела, Соус, Бекон, Ветчина</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">Маленькая</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >Средняя</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">100.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                        <div class="sales__element element">
                            <div class="element__logo"><img src="img/pizza/Margarita.jpg" alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title"><h3>Пицца Маргарита</h3></div>
                                <div class="element__information">Моцарела, Соус, Бекон, Ветчина</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">Маленькая</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >Средняя</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">100.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                        <div class="sales__element element">
                            <div class="element__logo"><img src="img/pizza/Margarita.jpg" alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title"><h3>Пицца Маргарита</h3></div>
                                <div class="element__information">Моцарела, Соус, Бекон, Ветчина</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">Маленькая</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >Средняя</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">100.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                    </div>
                    <div class="hit__title title"><h2>Хиты сезона</h2></div>
                    <div class="hit__row elements__row">
                        <div class="hit__element element">
                            <div class="element__logo"><img src="img/pizza/Margarita.jpg" alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title"><h3>Пицца Маргарита</h3></div>
                                <div class="element__information">Моцарела, Соус, Бекон, Ветчина</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">Маленькая</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >Средняя</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">100.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                        <div class="sales__element element">
                            <div class="element__logo"><img src="img/pizza/Margarita.jpg" alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title"><h3>Пицца Маргарита</h3></div>
                                <div class="element__information">Моцарела, Соус, Бекон, Ветчина</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">Маленькая</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >Средняя</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">100.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                        <div class="sales__element element">
                            <div class="element__logo"><img src="img/pizza/Margarita.jpg" alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title"><h3>Пицца Маргарита</h3></div>
                                <div class="element__information">Моцарела, Соус, Бекон, Ветчина</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">Маленькая</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >Средняя</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">100.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                        <div class="sales__element element">
                            <div class="element__logo"><img src="img/pizza/Margarita.jpg" alt="Paperoni"></div>
                            <div class="element__description">
                                <div class="element__title"><h3>Пицца Маргарита</h3></div>
                                <div class="element__information">Моцарела, Соус, Бекон, Ветчина</div>
                            </div>
                            <div class="element__size">
                                <div class="size__small size picked-size" onclick="pickSize(\`size__small\`)">Маленькая</div>
                                <div class="size__medium size" onclick="pickSize(\`size__medium\`)" >Средняя</div>
                                <div class="size__big size" onclick="pickSize(\`size__big\`)">Большая</div>
                            </div>
                            <div class="element__buy">
                                <div class="element__price"><span class="price__number">100.99</span><span
                                        class="price__currency">грн</span></div>
                                <div class="element__cart">В корзину</div>
                            </div>
                        </div>
                    </div>
            </div>
`

export default view;