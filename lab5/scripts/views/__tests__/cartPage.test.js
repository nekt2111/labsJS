/* eslint-env jest */


import cartPage from '../cartPage.js';


describe('Cart Page Module',()=>{

    it('should return filled cart page template', () => {
        const params = {
            pizzas: [{
                name: 'name',
                imgLogo: 'logo',
                description: 'desc',
                recommended: true,
                price: 32.99,
                id: 2
            }],
            drinks: [{
                name: 'name',
                imgLogo: 'logo',
                description: 'desc',
                recommended:true,
                price:32.99,
                id:3
            }],
            sides: [],
            deserts: [],
            sales: [{name: 'name', imgLogo: 'logo', description: 'desc', id: 1, recommended: true}]
        };
        localStorage.setItem('cart',JSON.stringify({
            ids:['pizzas.2','drinks.3'],
            amount:[2,1]
        }));
        const expectedResult = `
      
      <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper cart-main__wrapper">
                               
                <div class="order-registration">
                    <div class="order-registration__title cart-title"><h2>Оформление заказа</h2></div>
                    <form class="order__registration-blank">

                        <div class="blank__contacts">
                            <h2 class="blank__par-title">Контакти</h2>
                            <div class="blank__contacts-raw-columns">
                            <input type="text" class="blank__contact blank__input" id="name" placeholder="Имя" required pattern="([A-Za-z]|[А-Яа-я]|[ ]){2,20}">
                            <input type="text" class="blank__contact blank__input" id="number" placeholder="Телефон (пр. 0933477730)"  required pattern="[0]{1}[0-9]{9}">
                            <input type="text" class="blank__contact blank__input" id="email" placeholder="E-mail (example@gmail.com)" required pattern="([A-Za-z]|[0-9]){4,20}[@]{1}[a-z]{3,10}[.]{1}[a-z]{2,5}">
                            </div>
                        </div>
                        <div class="blank__addresses">
                            <h2 class="blank__par-title">Адрес</h2>
                            <div class="blank__addresses-raw-columns">
                            <input type="text" class="blank__address blank__input" id="city" placeholder="Город" required pattern="([A-Za-z]|[А-Яа-я]|[А-Яа-а]|[ ]){4,20}">
                            <input type="text" class="blank__address blank__input" id="street" placeholder="Улица" required pattern="([A-Za-z]|[А-Яа-я]|[1-9]|[ ]){4,20}">
                            <input type="text" class="blank__address blank__input" id="house" placeholder="Дом" required pattern="[1-9]{1,3}">
                            <input type="text" class="blank__address blank__input" id="flat" placeholder="Квартира (необяз.)" pattern="[1-9]{1,4}">
                                <input type="text" class="blank__address blank__input" id="entrance" placeholder="Подъезд (необяз.)" pattern="[1-9]{1,2}">
                            </div>
                        </div>
                        <div class="blank__date-time">
                            <h2 class="blank__par-title">Дата и время</h2>
                            <div class="blank__date-time-raw-columns">
                                <input type="text" class="blank__date-time blank__input" id="date" placeholder="Дата (дд.мм)" id="date" required pattern="[0-9]{2}[.]{1}[0-9]{2}">
                                <input type="text" class="blank__date-time blank__input" id = "time" placeholder="Время (чч:мм)" id="time" required pattern="[0-9]{2}[:]{1}[0-9]{2}">
                            </div>
                        </div>
                        <div class="blank__payment">
                            <h2 class="blank__par-title">Оплата</h2>
                            <select class="blank__payment blank__input" id="payment">
                            <option>Наличные</option>
                            <option>Карта</option>
                            </select>
                        </div>
                        <div class="blank__price"><p id="word-par">Всего</p><p id="price-par">0 грн</p></div>
                        <div class="blank__reg-button"><a href="status.html"><button type="submit" class="order_btn">Заказать</button></a></div>

                    </form>
                </div>
                    
                <div class="order-display">
                    <div class="order-display__title cart-title"><h2>Ваш заказ</h2></div>
                    <div class="order-display__orders">
                        <div class="order-display__order">
                        
                            <div class="order__main-info">
                            <div class="order__logo"><img src=logo alt=""></div>
                            <div class="order__description">
                                <div class="order__information">
                                <div class="order__name">
                                    <h3>name</h3>
                                </div>
                                <div class="order__ingrid">desc</div>
                                <div class="order__size">
                                    Стандарт
                                </div>
                                </div>
                                <div class="order__buy" id=pizzas.2>
                                    <div class="order__price">32.99 грн</div>
                                    <div class="order__amount-plus-minus">
                                    <div class="order__amount-minus">-</div>
                                    <div class="order__amount">2
                                    </div>
                                    <div class="order__amount-plus">+</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                             
                            <div class="order__main-info">
                            <div class="order__logo"><img src=logo alt=""></div>
                            <div class="order__description">
                                <div class="order__information">
                                <div class="order__name">
                                    <h3>name</h3>
                                </div>
                                <div class="order__ingrid">desc</div>
                                <div class="order__size">
                                    Стандарт
                                </div>
                                </div>
                                <div class="order__buy" id=drinks.3>
                                    <div class="order__price">32.99 грн</div>
                                    <div class="order__amount-plus-minus">
                                    <div class="order__amount-minus">-</div>
                                    <div class="order__amount">1
                                    </div>
                                    <div class="order__amount-plus">+</div>
                                    </div>
                                </div>
                            </div>
                            </div>
                            
                             
                              
                              
                               
                        
                        </div>
                        <div class="order__all-price"></div>
                    </div>
                </div>
            </div>`;


        expect(cartPage(params)).toEqual(expectedResult);
    });});