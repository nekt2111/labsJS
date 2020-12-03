
import TemplateProcessor from "./templateProccesor.js";
import Router from "./router.js";
import Client from "./client.js";

const router = new Router()
const templateProcessor = new TemplateProcessor()
const client = new Client()




async function load(){
    let {fileName,catalogName,id} = await router.getCurrentState()
    await change(fileName,catalogName,id)
}


let view;
async function change(fileName,catalogName,id) {
    await import(`./views/${fileName}Page.js`).then((viewModule) => {
        view = viewModule.default;
        console.log(fileName)
        console.log(catalogName)
        console.log(id)
        return client.getDataCatalog("pizzas");
    })
        .then((data) => {
            if(id !== undefined) {
                templateProcessor.render(view(data,id-1))
            }
            else{
                templateProcessor.render(view);
            }
        })
}
load()
window.onhashchange = load
