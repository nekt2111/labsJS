/* eslint-env jest */
import salesPage from '../salesPage.js';


describe('Sales Page Module',()=>{

    it('should return filled sales page template', () =>{
        const params = [{imgLogo:'/helloWorld',date:'16.12.20',name:'Super Sale',description:'OMG',id:1}];
        const expectedResult = ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">             
        <div class="sales__list">
            <div class="sales-main__element">
                <div class="sales-main__logo"><img src=/helloWorld alt=""></div>
                <div class="sales-main__description">
                    <div class="sales-main__date">16.12.20</div>
                    <div class="sales-main__title">Super Sale</div>
                    <div class="sales-main__information">OMG</div>
                    <div class="sales-main__buttons">
                        <a class="sales-main__details link" onclick="window.location.hash += '/'+1">Детали</a>
                        <button class="sales-main__activate">Активировать купон</button>
                    </div>
                </div>
            </div>
        </div>
        </div>`;
        expect(salesPage(params)).toEqual(expectedResult);




    });});