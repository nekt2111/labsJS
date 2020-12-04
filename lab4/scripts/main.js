
import TemplateProcessor from "./templateProccesor.js";
import Router from "./router.js";
import Client from "./client.js";

const router = new Router()
const templateProcessor = new TemplateProcessor()
const client = new Client()

const headerLinks = ['#sales','#pizzas','#drinks','#sides','#deserts']




async function load(){
    let {fileName,catalogName,id} = await router.getCurrentState()
    await change(fileName,catalogName,id)
    document.querySelector('.logo img').addEventListener('click',() => {
        window.location.hash = "";
    })
    document.querySelector('.logo__text').addEventListener('click',() => {
        window.location.hash = "";
    })
    for (let i = 0; i < headerLinks.length; i++) {
        document.querySelectorAll('.nav__link')[i].addEventListener('click',() => {
            window.location.hash = headerLinks[i]
        })
    }
    document.querySelector('.header__cart').addEventListener('click',() => {
        window.location.hash = "#cart";
    })
}


let view;
async function change(fileName,catalogName,id) {
    await import(`./views/${fileName}Page.js`).then((viewModule) => {
        view = viewModule.default;
        console.log(fileName)
        console.log(catalogName)
        console.log(id)
        return client.getDataCatalog(catalogName);
    })
        .then((data) => {
            if(id !== undefined) {
                templateProcessor.render(view(data,id-1))
            }
            else{
                templateProcessor.render(view(data));
            }
        })
}
load()
window.onhashchange = load
