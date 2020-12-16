/* eslint-env jest */
import Spinner from '../spinner.js';

describe('Spinner Module', () => {
    const spinner = new Spinner();
    it('should show spinner', () => {
        document.body.innerHTML = `<div class="spinner__wrapper">
<div id="spinner"></div>
</div><main>
                                    <div class="main__wrapper"></div>
                                                               
</main>`;
        spinner.showSpinner();
        expect(document.querySelector('.spinner__wrapper').style.display).toEqual('block');
        expect(document.getElementById('spinner').classList[0]).toEqual('show');

        expect(document.querySelector('.main__wrapper').style.display).toEqual('none');

    }),
    it('should hide spinner', () => {
        document.body.innerHTML = `<div class="spinner__wrapper">
<div id="spinner"></div>
</div><main>
                                    <div class="main__wrapper"></div>
                                                               
</main>`;
        spinner.hideSpinner();
        expect(document.querySelector('.main__wrapper').style.display).toEqual('block');

        expect(document.querySelector('.spinner__wrapper').style.display).toEqual('none');
        expect(document.getElementById('spinner').classList.contains('show')).toEqual(false);
    }),
    it('should show spinner', () => {
        document.body.innerHTML = `<div class="spinner__wrapper">
<div id="spinner"></div>
</div><main>
                                    <div class="product__wrapper"></div>
                                                               
</main>`;
        spinner.showSpinner();
        expect(document.querySelector('.spinner__wrapper').style.display).toEqual('block');
        expect(document.getElementById('spinner').classList[0]).toEqual('show');

        expect(document.querySelector('.product__wrapper').style.display).toEqual('none');
    }),
    it('should hide spinner', () => {
        document.body.innerHTML = `<div class="spinner__wrapper">
<div id="spinner"></div>
</div><main>
                                    <div class="product__wrapper"></div>
                                                               
</main>`;
        spinner.hideSpinner();
        expect(document.querySelector('.product__wrapper').style.display).toEqual('block');

        expect(document.querySelector('.spinner__wrapper').style.display).toEqual('none');
        expect(document.getElementById('spinner').classList.contains('show')).toEqual(false);
    });
});
