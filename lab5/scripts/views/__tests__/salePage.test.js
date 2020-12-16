/* eslint-env jest */
import salePage from '../salePage.js';


describe('Sale Page Module',()=>{

    it('should return filled sale page template', () =>{
        const params = [[{imgLogo:'/helloWorld',date:'16.12.20',name:'Super Sale',description:'OMG'}],0];
        const expectedResult = ` <div class="spinner__wrapper" style="display: none">
                <div id="spinner"></div>
            </div>
<div class="main__wrapper">
                

        <div class="sale-mains__element">
        <div class="sale-main__logo"><img src=/helloWorld alt=""></div>
        <div class="sale-main__description">
            <div class="sale-main__date">16.12.20</div>
            <div class="sale-main__title">Super Sale</div>
            <div class="sale-main__information"><p class="info__par">OMG</div>
            <div class="sale-main__buttons">
            </div>
        </div>
    </div>
   
        </div>`;
        expect(salePage(params[0],params[1])).toEqual(expectedResult);
    });});