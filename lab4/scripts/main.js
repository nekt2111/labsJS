
import TemplateProcessor from "./templateProccesor.js";
import Router from "./router.js";
import Client from "./client.js";

const router = new Router()
const templateProcessor = new TemplateProcessor()
const client = new Client()




async function load(){
    let {fileName,viewName,id} = await router.getCurrentState()
    await change(fileName,viewName,id)
}


let view;
async function change(fileName,viewName,id) {
    await import(`./views/${fileName}Page.js`).then((viewModule) => {
        view = viewModule.default;
        return client.getDataCatalog("products");
    })
        .then((data) => {
            if(id !== undefined) {
                templateProcessor.render(view(data[id - 1]))
            }
            else{
                templateProcessor.render(view);
            }
        })
}

window.onhashchange = load