class TemplateProcessor {
    render(view) {
        const rootNode = document.getElementsByTagName('main')[0];
        rootNode.innerHTML = view;
        window.scrollTo(0,0);
    }
}

export default TemplateProcessor;
