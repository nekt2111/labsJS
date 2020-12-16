/* eslint-env jest */
import TemplateProccesor from '../templateProccesor.js';

describe('TemplateProcessor Module', () => {
    it('should render views', () => {
        const scrollTo = jest.fn();
        Object.defineProperty(window, 'scrollTo', {
            value: scrollTo,
        });
        document.body.innerHTML = '<main></main>';
        const view = '<div>our view</div>';
        const templateProccesor = new TemplateProccesor();

        expect(document.body.innerHTML).toEqual('<main></main>');

        templateProccesor.render(view);
        expect(document.body.innerHTML).toEqual('<main><div>our view</div></main>');
        expect(scrollTo).toHaveBeenCalledWith(0,0);
    });
});
