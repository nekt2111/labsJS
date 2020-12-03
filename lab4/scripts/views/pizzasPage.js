
const view =
    ` 
           <div class="main__wrapper">
                    <div class="best__title title"><h2>Пицца: Лучшая Цена</h2></div>
                    <div class="best__row elements__row">
                        <div class="best__element element">
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
                                <div class="element__cart">
                                ">В корзину</div>
                            </div>
                        </div>
                        <div class="best__element element">
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
                        <div class="best__element element">
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
                        <div class="best__element element">
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
                    <div class="classic__title title"><h2>Пицца: Классические </h2></div>
                    <div class="classic__row elements__row">
                        <div class="classic__element element">
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
                        <div class="classic__element element">
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
                        <div class="classic__element element">
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
                        <div class="classic__element element">
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
                    <div class="firm__title title"><h2>Пицца: Фирменные </h2></div>
                    <div class="firm__row elements__row">
                        <div class="firm__element element">
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
                        <div class="firm__element element">
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
                        <div class="firm__element element">
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
                        <div class="firm__element element">
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
                        <div class="firm__element element">
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