
import TemplateProcessor from "./templateProccesor.js";
import Router from "./router.js";

const router = new Router()
const templateProcessor = new TemplateProcessor()

function load(){
    let {fileName,viewName} = router.getCurrentState()
    change(fileName)
    fetch('https://my-json-server.typicode.com/nekt2111/labsJS/products').then((response) => {
        return response.json();
    })
        .then((data) => {
            console.log(data)
        });
}






function change(fileName) {
    import(`./views/${fileName}Page.js`).then((view) => templateProcessor.render(view.default))
}

window.onhashchange = load