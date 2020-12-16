(self.webpackChunklab5=self.webpackChunklab5||[]).push([[962],{962:function(i,n,d){"use strict";d.r(n),n.default=i=>`\n      \n      <div class="spinner__wrapper" style="display: none">\n                <div id="spinner"></div>\n            </div>\n<div class="main__wrapper cart-main__wrapper">\n                               \n                <div class="order-registration">\n                    <div class="order-registration__title cart-title"><h2>Оформление заказа</h2></div>\n                    <form class="order__registration-blank">\n\n                        <div class="blank__contacts">\n                            <h2 class="blank__par-title">Контакти</h2>\n                            <div class="blank__contacts-raw-columns">\n                            <input type="text" class="blank__contact blank__input" id="name" placeholder="Имя" required pattern="([A-Za-z]|[А-Яа-я]|[ ]){2,20}">\n                            <input type="text" class="blank__contact blank__input" id="number" placeholder="Телефон (пр. 0933477730)"  required pattern="[0]{1}[0-9]{9}">\n                            <input type="text" class="blank__contact blank__input" id="email" placeholder="E-mail (example@gmail.com)" required pattern="([A-Za-z]|[0-9]){4,20}[@]{1}[a-z]{3,10}[.]{1}[a-z]{2,5}">\n                            </div>\n                        </div>\n                        <div class="blank__addresses">\n                            <h2 class="blank__par-title">Адрес</h2>\n                            <div class="blank__addresses-raw-columns">\n                            <input type="text" class="blank__address blank__input" id="city" placeholder="Город" required pattern="([A-Za-z]|[А-Яа-я]|[А-Яа-а]|[ ]){4,20}">\n                            <input type="text" class="blank__address blank__input" id="street" placeholder="Улица" required pattern="([A-Za-z]|[А-Яа-я]|[1-9]|[ ]){4,20}">\n                            <input type="text" class="blank__address blank__input" id="house" placeholder="Дом" required pattern="[1-9]{1,3}">\n                            <input type="text" class="blank__address blank__input" id="flat" placeholder="Квартира (необяз.)" pattern="[1-9]{1,4}">\n                                <input type="text" class="blank__address blank__input" id="entrance" placeholder="Подъезд (необяз.)" pattern="[1-9]{1,2}">\n                            </div>\n                        </div>\n                        <div class="blank__date-time">\n                            <h2 class="blank__par-title">Дата и время</h2>\n                            <div class="blank__date-time-raw-columns">\n                                <input type="text" class="blank__date-time blank__input" id="date" placeholder="Дата (дд.мм)" id="date" required pattern="[0-9]{2}[.]{1}[0-9]{2}">\n                                <input type="text" class="blank__date-time blank__input" id = "time" placeholder="Время (чч:мм)" id="time" required pattern="[0-9]{2}[:]{1}[0-9]{2}">\n                            </div>\n                        </div>\n                        <div class="blank__payment">\n                            <h2 class="blank__par-title">Оплата</h2>\n                            <select class="blank__payment blank__input" id="payment">\n                            <option>Наличные</option>\n                            <option>Карта</option>\n                            </select>\n                        </div>\n                        <div class="blank__price"><p id="word-par">Всего</p><p id="price-par">0 грн</p></div>\n                        <div class="blank__reg-button"><a href="status.html"><button type="submit" class="order_btn">Заказать</button></a></div>\n\n                    </form>\n                </div>\n                    \n                <div class="order-display">\n                    <div class="order-display__title cart-title"><h2>Ваш заказ</h2></div>\n                    <div class="order-display__orders">\n                        <div class="order-display__order">\n                        ${Object.entries(i).filter((([i])=>"sales"!==i))[0][1].filter((i=>JSON.parse(localStorage.getItem("cart")).ids.includes("pizzas."+i.id))).map((i=>`\n                            <div class="order__main-info">\n                            <div class="order__logo"><img src=${i.imgLogo} alt=""></div>\n                            <div class="order__description">\n                                <div class="order__information">\n                                <div class="order__name">\n                                    <h3>${i.name}</h3>\n                                </div>\n                                <div class="order__ingrid">${i.description}</div>\n                                <div class="order__size">\n                                    Стандарт\n                                </div>\n                                </div>\n                                <div class="order__buy" id=${"pizzas."+i.id}>\n                                    <div class="order__price">${i.price+" грн"}</div>\n                                    <div class="order__amount-plus-minus">\n                                    <div class="order__amount-minus">-</div>\n                                    <div class="order__amount">${JSON.parse(localStorage.getItem("cart")).amount[JSON.parse(localStorage.getItem("cart")).ids.indexOf("pizzas."+i.id)]}\n                                    </div>\n                                    <div class="order__amount-plus">+</div>\n                                    </div>\n                                </div>\n                            </div>\n                            </div>\n                            `)).join("")}\n                             ${Object.entries(i).filter((([i])=>"sales"!==i))[1][1].filter((i=>JSON.parse(localStorage.getItem("cart")).ids.includes("drinks."+i.id))).map((i=>`\n                            <div class="order__main-info">\n                            <div class="order__logo"><img src=${i.imgLogo} alt=""></div>\n                            <div class="order__description">\n                                <div class="order__information">\n                                <div class="order__name">\n                                    <h3>${i.name}</h3>\n                                </div>\n                                <div class="order__ingrid">${i.description}</div>\n                                <div class="order__size">\n                                    Стандарт\n                                </div>\n                                </div>\n                                <div class="order__buy" id=${"drinks."+i.id}>\n                                    <div class="order__price">${i.price+" грн"}</div>\n                                    <div class="order__amount-plus-minus">\n                                    <div class="order__amount-minus">-</div>\n                                    <div class="order__amount">${JSON.parse(localStorage.getItem("cart")).amount[JSON.parse(localStorage.getItem("cart")).ids.indexOf("drinks."+i.id)]}\n                                    </div>\n                                    <div class="order__amount-plus">+</div>\n                                    </div>\n                                </div>\n                            </div>\n                            </div>\n                            `)).join("")}\n                             \n                              ${Object.entries(i).filter((([i])=>"sales"!==i))[2][1].filter((i=>JSON.parse(localStorage.getItem("cart")).ids.includes("sides."+i.id))).map((i=>`\n                            <div class="order__main-info">\n                            <div class="order__logo"><img src=${i.imgLogo} alt=""></div>\n                            <div class="order__description">\n                                <div class="order__information">\n                                <div class="order__name">\n                                    <h3>${i.name}</h3>\n                                </div>\n                                <div class="order__ingrid">${i.description}</div>\n                                <div class="order__size">\n                                    Стандарт\n                                </div>\n                                </div>\n                                <div class="order__buy" id=${"sides."+i.id}>\n                                    <div class="order__price">${i.price+" грн"}</div>\n                                    <div class="order__amount-plus-minus">\n                                    <div class="order__amount-minus">-</div>\n                                    <div class="order__amount">${JSON.parse(localStorage.getItem("cart")).amount[JSON.parse(localStorage.getItem("cart")).ids.indexOf("sides."+i.id)]}\n                                    </div>\n                                    <div class="order__amount-plus">+</div>\n                                    </div>\n                                </div>\n                            </div>\n                            </div>\n                            `)).join("")}\n                              \n                               ${Object.entries(i).filter((([i])=>"sales"!==i))[3][1].filter((i=>JSON.parse(localStorage.getItem("cart")).ids.includes("deserts."+i.id))).map((i=>`\n                            <div class="order__main-info">\n                            <div class="order__logo"><img src=${i.imgLogo} alt=""></div>\n                            <div class="order__description">\n                                <div class="order__information">\n                                <div class="order__name">\n                                    <h3>${i.name}</h3>\n                                </div>\n                                <div class="order__ingrid">${i.description}</div>\n                                <div class="order__size">\n                                    Стандарт\n                                </div>\n                                </div>\n                                <div class="order__buy" id=${"deserts."+i.id}>\n                                    <div class="order__price">${i.price+" грн"}</div>\n                                    <div class="order__amount-plus-minus">\n                                    <div class="order__amount-minus">-</div>\n                                    <div class="order__amount">${JSON.parse(localStorage.getItem("cart")).amount[JSON.parse(localStorage.getItem("cart")).ids.indexOf("deserts."+i.id)]}\n                                    </div>\n                                    <div class="order__amount-plus">+</div>\n                                    </div>\n                                </div>\n                            </div>\n                            </div>\n                            `)).join("")}\n                        \n                        </div>\n                        <div class="order__all-price"></div>\n                    </div>\n                </div>\n            </div>`}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYWI1Ly4vc2NyaXB0cy92aWV3cy9jYXJ0UGFnZS5qcyJdLCJuYW1lcyI6WyJwcm9kdWN0cyIsIk9iamVjdCIsImVudHJpZXMiLCJmaWx0ZXIiLCJrZXkiLCJlbGVtZW50IiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlkcyIsImluY2x1ZGVzIiwiaWQiLCJtYXAiLCJwaXp6YSIsImltZ0xvZ28iLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJwcmljZSIsImFtb3VudCIsImluZGV4T2YiLCJqb2luIiwiZHJpbmsiLCJzaWRlIiwiZGVzZXJ0Il0sIm1hcHBpbmdzIjoidUdBNEtBLFVBMUtjQSxHQUFZLG0ySEFxRENDLE9BQU9DLFFBQVFGLEdBQVVHLFFBQU8sRUFBRUMsS0FBaUIsVUFBUkEsSUFBa0IsR0FBRyxHQUNuRkQsUUFBT0UsR0FBV0MsS0FBS0MsTUFBTUMsYUFBYUMsUUFBUSxTQUFTQyxJQUN2REMsU0FBUyxVQUFZTixFQUFRTyxNQUFLQyxLQUFJQyxHQUFTLCtIQUVLQSxFQUFNQyw2UEFJNUJELEVBQU1FLGlIQUVhRixFQUFNRywwUUFLTixVQUFZSCxFQUFNRixzRUFDZkUsRUFBTUksTUFBTkosME9BR0NSLEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsU0FBU1UsT0FBT2IsS0FBS0MsTUFBTUMsYUFBYUMsUUFBUSxTQUFTQyxJQUFJVSxRQUFRLFVBQVlOLEVBQU1GLDRUQU96SlMsS0FBSyxxQ0FDSnBCLE9BQU9DLFFBQVFGLEdBQVVHLFFBQU8sRUFBRUMsS0FBaUIsVUFBUkEsSUFBa0IsR0FBRyxHQUN4RkQsUUFBT0UsR0FBV0MsS0FBS0MsTUFBTUMsYUFBYUMsUUFBUSxTQUFTQyxJQUN2REMsU0FBUyxVQUFZTixFQUFRTyxNQUFLQyxLQUFJUyxHQUFTLCtIQUVLQSxFQUFNUCw2UEFJNUJPLEVBQU1OLGlIQUVhTSxFQUFNTCwwUUFLTixVQUFZSyxFQUFNVixzRUFDZlUsRUFBTUosTUFBTkksME9BR0NoQixLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLFNBQVNVLE9BQU9iLEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsU0FBU0MsSUFBSVUsUUFBUSxVQUFZRSxFQUFNViw0VEFPekpTLEtBQUsscUVBRUhwQixPQUFPQyxRQUFRRixHQUFVRyxRQUFPLEVBQUVDLEtBQWlCLFVBQVJBLElBQWtCLEdBQUcsR0FDekZELFFBQU9FLEdBQVdDLEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsU0FBU0MsSUFDdkRDLFNBQVMsU0FBV04sRUFBUU8sTUFBS0MsS0FBSVUsR0FBUSwrSEFFT0EsRUFBS1IsNlBBSTNCUSxFQUFLUCxpSEFFY08sRUFBS04sMFFBS0wsU0FBV00sRUFBS1gsc0VBQ2JXLEVBQUtMLE1BQUxLLDBPQUdDakIsS0FBS0MsTUFBTUMsYUFBYUMsUUFBUSxTQUFTVSxPQUFPYixLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLFNBQVNDLElBQUlVLFFBQVEsU0FBV0csRUFBS1gsNFRBT3ZKUyxLQUFLLHVFQUVGcEIsT0FBT0MsUUFBUUYsR0FBVUcsUUFBTyxFQUFFQyxLQUFpQixVQUFSQSxJQUFrQixHQUFHLEdBQzFGRCxRQUFPRSxHQUFXQyxLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLFNBQVNDLElBQ3ZEQyxTQUFTLFdBQWFOLEVBQVFPLE1BQUtDLEtBQUlXLEdBQVUsK0hBRUdBLEVBQU9ULDZQQUk3QlMsRUFBT1IsaUhBRVlRLEVBQU9QLDBRQUtQLFdBQWFPLEVBQU9aLHNFQUNqQlksRUFBT04sTUFBUE0sME9BR0NsQixLQUFLQyxNQUFNQyxhQUFhQyxRQUFRLFNBQVNVLE9BQU9iLEtBQUtDLE1BQU1DLGFBQWFDLFFBQVEsU0FBU0MsSUFBSVUsUUFBUSxXQUFhSSxFQUFPWiw0VEFPM0pTLEtBQUsiLCJmaWxlIjoiOTYyLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5jb25zdCB2aWV3ID0gKHByb2R1Y3RzKSA9PmBcbiAgICAgIFxuICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJfX3dyYXBwZXJcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3Bpbm5lclwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG48ZGl2IGNsYXNzPVwibWFpbl9fd3JhcHBlciBjYXJ0LW1haW5fX3dyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXItcmVnaXN0cmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1yZWdpc3RyYXRpb25fX3RpdGxlIGNhcnQtdGl0bGVcIj48aDI+0J7RhNC+0YDQvNC70LXQvdC40LUg0LfQsNC60LDQt9CwPC9oMj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJvcmRlcl9fcmVnaXN0cmF0aW9uLWJsYW5rXCI+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFua19fY29udGFjdHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJibGFua19fcGFyLXRpdGxlXCI+0JrQvtC90YLQsNC60YLQuDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsYW5rX19jb250YWN0cy1yYXctY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmxhbmtfX2NvbnRhY3QgYmxhbmtfX2lucHV0XCIgaWQ9XCJuYW1lXCIgcGxhY2Vob2xkZXI9XCLQmNC80Y9cIiByZXF1aXJlZCBwYXR0ZXJuPVwiKFtBLVphLXpdfFvQkC3Qr9CwLdGPXXxbIF0pezIsMjB9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJibGFua19fY29udGFjdCBibGFua19faW5wdXRcIiBpZD1cIm51bWJlclwiIHBsYWNlaG9sZGVyPVwi0KLQtdC70LXRhNC+0L0gKNC/0YAuIDA5MzM0Nzc3MzApXCIgIHJlcXVpcmVkIHBhdHRlcm49XCJbMF17MX1bMC05XXs5fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmxhbmtfX2NvbnRhY3QgYmxhbmtfX2lucHV0XCIgaWQ9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsIChleGFtcGxlQGdtYWlsLmNvbSlcIiByZXF1aXJlZCBwYXR0ZXJuPVwiKFtBLVphLXpdfFswLTldKXs0LDIwfVtAXXsxfVthLXpdezMsMTB9Wy5dezF9W2Etel17Miw1fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxhbmtfX2FkZHJlc3Nlc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzcz1cImJsYW5rX19wYXItdGl0bGVcIj7QkNC00YDQtdGBPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxhbmtfX2FkZHJlc3Nlcy1yYXctY29sdW1uc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmxhbmtfX2FkZHJlc3MgYmxhbmtfX2lucHV0XCIgaWQ9XCJjaXR5XCIgcGxhY2Vob2xkZXI9XCLQk9C+0YDQvtC0XCIgcmVxdWlyZWQgcGF0dGVybj1cIihbQS1aYS16XXxb0JAt0K/QsC3Rj118W9CQLdCv0LAt0LBdfFsgXSl7NCwyMH1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImJsYW5rX19hZGRyZXNzIGJsYW5rX19pbnB1dFwiIGlkPVwic3RyZWV0XCIgcGxhY2Vob2xkZXI9XCLQo9C70LjRhtCwXCIgcmVxdWlyZWQgcGF0dGVybj1cIihbQS1aYS16XXxb0JAt0K/QsC3Rj118WzEtOV18WyBdKXs0LDIwfVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmxhbmtfX2FkZHJlc3MgYmxhbmtfX2lucHV0XCIgaWQ9XCJob3VzZVwiIHBsYWNlaG9sZGVyPVwi0JTQvtC8XCIgcmVxdWlyZWQgcGF0dGVybj1cIlsxLTldezEsM31cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImJsYW5rX19hZGRyZXNzIGJsYW5rX19pbnB1dFwiIGlkPVwiZmxhdFwiIHBsYWNlaG9sZGVyPVwi0JrQstCw0YDRgtC40YDQsCAo0L3QtdC+0LHRj9C3LilcIiBwYXR0ZXJuPVwiWzEtOV17MSw0fVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cImJsYW5rX19hZGRyZXNzIGJsYW5rX19pbnB1dFwiIGlkPVwiZW50cmFuY2VcIiBwbGFjZWhvbGRlcj1cItCf0L7QtNGK0LXQt9C0ICjQvdC10L7QsdGP0LcuKVwiIHBhdHRlcm49XCJbMS05XXsxLDJ9XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFua19fZGF0ZS10aW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYmxhbmtfX3Bhci10aXRsZVwiPtCU0LDRgtCwINC4INCy0YDQtdC80Y88L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFua19fZGF0ZS10aW1lLXJhdy1jb2x1bW5zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwiYmxhbmtfX2RhdGUtdGltZSBibGFua19faW5wdXRcIiBpZD1cImRhdGVcIiBwbGFjZWhvbGRlcj1cItCU0LDRgtCwICjQtNC0LtC80LwpXCIgaWQ9XCJkYXRlXCIgcmVxdWlyZWQgcGF0dGVybj1cIlswLTldezJ9Wy5dezF9WzAtOV17Mn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3M9XCJibGFua19fZGF0ZS10aW1lIGJsYW5rX19pbnB1dFwiIGlkID0gXCJ0aW1lXCIgcGxhY2Vob2xkZXI9XCLQktGA0LXQvNGPICjRh9GHOtC80LwpXCIgaWQ9XCJ0aW1lXCIgcmVxdWlyZWQgcGF0dGVybj1cIlswLTldezJ9WzpdezF9WzAtOV17Mn1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJsYW5rX19wYXltZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiYmxhbmtfX3Bhci10aXRsZVwiPtCe0L/Qu9Cw0YLQsDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBjbGFzcz1cImJsYW5rX19wYXltZW50IGJsYW5rX19pbnB1dFwiIGlkPVwicGF5bWVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+0J3QsNC70LjRh9C90YvQtTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+0JrQsNGA0YLQsDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYmxhbmtfX3ByaWNlXCI+PHAgaWQ9XCJ3b3JkLXBhclwiPtCS0YHQtdCz0L48L3A+PHAgaWQ9XCJwcmljZS1wYXJcIj4wINCz0YDQvTwvcD48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJibGFua19fcmVnLWJ1dHRvblwiPjxhIGhyZWY9XCJzdGF0dXMuaHRtbFwiPjxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwib3JkZXJfYnRuXCI+0JfQsNC60LDQt9Cw0YLRjDwvYnV0dG9uPjwvYT48L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1kaXNwbGF5XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlci1kaXNwbGF5X190aXRsZSBjYXJ0LXRpdGxlXCI+PGgyPtCS0LDRiCDQt9Cw0LrQsNC3PC9oMj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWRpc3BsYXlfX29yZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyLWRpc3BsYXlfX29yZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAkeyhPYmplY3QuZW50cmllcyhwcm9kdWN0cykuZmlsdGVyKChba2V5XSkgPT4ga2V5ICE9PSAnc2FsZXMnIClbMF1bMV0uXG4gICAgICAgIGZpbHRlcihlbGVtZW50ID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkuaWRzLlxuICAgICAgICAgICAgaW5jbHVkZXMoJ3Bpenphcy4nICsgZWxlbWVudC5pZCkpLm1hcChwaXp6YSA9PiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19tYWluLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2xvZ29cIj48aW1nIHNyYz0ke3BpenphLmltZ0xvZ299IGFsdD1cIlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19pbmZvcm1hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke3BpenphLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9faW5ncmlkXCI+JHtwaXp6YS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19zaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodGC0LDQvdC00LDRgNGCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19idXlcIiBpZD0keydwaXp6YXMuJyArIHBpenphLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fcHJpY2VcIj4ke3BpenphLnByaWNlICsnICcgKyAn0LPRgNC9J308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LXBsdXMtbWludXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LW1pbnVzXCI+LTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19hbW91bnRcIj4ke0pTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkuYW1vdW50W0pTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkuaWRzLmluZGV4T2YoJ3Bpenphcy4nICsgcGl6emEuaWQgKV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LXBsdXNcIj4rPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCkuam9pbignJykpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkeyhPYmplY3QuZW50cmllcyhwcm9kdWN0cykuZmlsdGVyKChba2V5XSkgPT4ga2V5ICE9PSAnc2FsZXMnIClbMV1bMV0uXG4gICAgICAgIGZpbHRlcihlbGVtZW50ID0+IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkuaWRzLlxuICAgICAgICAgICAgaW5jbHVkZXMoJ2RyaW5rcy4nICsgZWxlbWVudC5pZCkpLm1hcChkcmluayA9PiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19tYWluLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2xvZ29cIj48aW1nIHNyYz0ke2RyaW5rLmltZ0xvZ299IGFsdD1cIlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fZGVzY3JpcHRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19pbmZvcm1hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX25hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz4ke2RyaW5rLm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9faW5ncmlkXCI+JHtkcmluay5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19zaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodGC0LDQvdC00LDRgNGCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19idXlcIiBpZD0keydkcmlua3MuJyArIGRyaW5rLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fcHJpY2VcIj4ke2RyaW5rLnByaWNlICsnICcgKyAn0LPRgNC9J308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LXBsdXMtbWludXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LW1pbnVzXCI+LTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19hbW91bnRcIj4ke0pTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkuYW1vdW50W0pTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkuaWRzLmluZGV4T2YoJ2RyaW5rcy4nICsgZHJpbmsuaWQgKV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LXBsdXNcIj4rPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCkuam9pbignJykpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KE9iamVjdC5lbnRyaWVzKHByb2R1Y3RzKS5maWx0ZXIoKFtrZXldKSA9PiBrZXkgIT09ICdzYWxlcycgKVsyXVsxXS5cbiAgICAgICAgZmlsdGVyKGVsZW1lbnQgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKS5pZHMuXG4gICAgICAgICAgICBpbmNsdWRlcygnc2lkZXMuJyArIGVsZW1lbnQuaWQpKS5tYXAoc2lkZSA9PiBgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19tYWluLWluZm9cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2xvZ29cIj48aW1nIHNyYz0ke3NpZGUuaW1nTG9nb30gYWx0PVwiXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2luZm9ybWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7c2lkZS5uYW1lfTwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2luZ3JpZFwiPiR7c2lkZS5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19zaXplXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDQodGC0LDQvdC00LDRgNGCXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19idXlcIiBpZD0keydzaWRlcy4nICsgc2lkZS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX3ByaWNlXCI+JHtzaWRlLnByaWNlICsnICcgKyAn0LPRgNC9J308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LXBsdXMtbWludXNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LW1pbnVzXCI+LTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19hbW91bnRcIj4ke0pTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkuYW1vdW50W0pTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhcnQnKSkuaWRzLmluZGV4T2YoJ3NpZGVzLicgKyBzaWRlLmlkICldfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2Ftb3VudC1wbHVzXCI+KzwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGApLmpvaW4oJycpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7KE9iamVjdC5lbnRyaWVzKHByb2R1Y3RzKS5maWx0ZXIoKFtrZXldKSA9PiBrZXkgIT09ICdzYWxlcycgKVszXVsxXS5cbiAgICAgICAgZmlsdGVyKGVsZW1lbnQgPT4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKS5pZHMuXG4gICAgICAgICAgICBpbmNsdWRlcygnZGVzZXJ0cy4nICsgZWxlbWVudC5pZCkpLm1hcChkZXNlcnQgPT4gYFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fbWFpbi1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19sb2dvXCI+PGltZyBzcmM9JHtkZXNlcnQuaW1nTG9nb30gYWx0PVwiXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm9yZGVyX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2luZm9ybWF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPiR7ZGVzZXJ0Lm5hbWV9PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9faW5ncmlkXCI+JHtkZXNlcnQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fc2l6ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg0KHRgtCw0L3QtNCw0YDRglxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYnV5XCIgaWQ9JHsnZGVzZXJ0cy4nICsgZGVzZXJ0LmlkfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fcHJpY2VcIj4ke2Rlc2VydC5wcmljZSArJyAnICsgJ9Cz0YDQvSd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2Ftb3VudC1wbHVzLW1pbnVzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib3JkZXJfX2Ftb3VudC1taW51c1wiPi08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50XCI+JHtKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpLmFtb3VudFtKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYXJ0JykpLmlkcy5pbmRleE9mKCdkZXNlcnRzLicgKyBkZXNlcnQuaWQgKV19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYW1vdW50LXBsdXNcIj4rPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYCkuam9pbignJykpfVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJvcmRlcl9fYWxsLXByaWNlXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+YDtcblxuZXhwb3J0IGRlZmF1bHQgdmlldzsiXSwic291cmNlUm9vdCI6IiJ9