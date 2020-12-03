
const view = `<div class="main__wrapper cart-main__wrapper">
                <div class="order-registration">
                    <div class="order-registration__title cart-title"><h2>Оформление заказа</h2></div>
                    <form class="order__registration-blank">

                        <div class="blank__contacts">
                            <h2 class="blank__par-title">Контакти</h2>
                            <div class="blank__contacts-raw-columns">
                            <input type="text" class="blank__contact blank__input" placeholder="Имя" required pattern="([A-Za-z]|[А-Яа-я]){4,20}">
                            <input type="text" class="blank__contact blank__input" id="number" placeholder="Телефон"  required pattern="[0]{1}[0-9]{9}">
                            <input type="text" class="blank__contact blank__input" placeholder="E-mail" required pattern="([A-Za-z]|[0-9]){4,20}[@]{1}[a-z]{3,10}[.]{1}[a-z]{2,5}">
                            </div>
                        </div>
                        <div class="blank__addresses">
                            <h2 class="blank__par-title">Адрес</h2>
                            <div class="blank__addresses-raw-columns">
                            <input type="text" class="blank__address blank__input" id="city" placeholder="Город" required pattern="([A-Za-z]|[А-Яа-я]|[А-Яа-а]){4,20}">
                            <input type="text" class="blank__address blank__input" id="street" placeholder="Улица" required pattern="([A-Za-z]|[А-Яа-я]|[1-9]|[ ]){4,20}">
                            <input type="text" class="blank__address blank__input" id="house" placeholder="Дом" required pattern="[1-9]{1,3}">
                            <input type="text" class="blank__address blank__input" id="flat" placeholder="Квартира" required pattern="[1-9]{1,4}">
                                <input type="text" class="blank__address blank__input" id="entrance" placeholder="Подъезд" required pattern="[1-9]{1,2}">
                            </div>
                        </div>
                        <div class="blank__date-time">
                            <h2 class="blank__par-title">Дата и время</h2>
                            <div class="blank__date-time-raw-columns">
                                <input type="text" class="blank__date-time blank__input" id="date">
                                <input type="text" class="blank__date-time blank__input" id="time">
                            </div>
                        </div>
                        <div class="blank__payment">
                            <h2 class="blank__par-title">Оплата</h2>
                            <input type="text" class="blank__payment blank__input" id="payment">
                        </div>
                        <div class="blank__price"><p id="word-par">Всего</p><p id="price-par">92.99 грн</p></div>
                        <div class="blank__reg-button"><a href="status.html"><button class="order_btn">Заказать</button></a></div>

                    </form>
                </div>
                <div class="order-display">
                    <div class="order-display__title cart-title"><h2>Ваш заказ</h2></div>
                    <div class="order-display__orders">
                        <div class="order-display__order">
                            <div class="order__main-info">
                            <div class="order__logo"><img src="img/pizza/Margarita.jpg" alt=""></div>
                            <div class="order__description">
                                <div class="order__information">
                                <div class="order__name">
                                    <h3>Пицца Маргарита</h3>
                                </div>
                                <div class="order__ingrid">Ветчина, Соус , Бекон, Сыр</div>
                                <div class="order__size">
                                    Маленькая
                                </div>
                                </div>
                                <div class="order__buy">
                                    <div class="order__price">92.99 грн</div>
                                    <div class="order__amount">1</div>
                                </div>
                            </div>
                            </div>
                        </div>



                        <div class="order__all-price">92.99 грн</div>
                    </div>
                </div>
            </div>`

export default view;