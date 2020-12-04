
import TemplateProcessor from "./templateProccesor.js";
import Router from "./router.js";
import Client from "./client.js";

const router = new Router()
const templateProcessor = new TemplateProcessor()
const client = new Client()
let map = new Map()
map.get("deserts")

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
    document.querySelectorAll(".size__small").forEach(element => element.addEventListener("click",changeToSmallSize))
    document.querySelectorAll(".size__medium").forEach(element => element.addEventListener("click",changeToMediumSize))
    document.querySelectorAll(".size__big").forEach(element => element.addEventListener("click",changeToBigSize))

    window.scroll(0,0);

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


async function changeToSmallSize(){
    await changeSize(0,this.parentElement.parentElement.id)

}

async function changeToMediumSize(){
    await changeSize(1,this.parentElement.parentElement.id)
}

async function changeToBigSize(){
    await changeSize(2,this.parentElement.parentElement.id)
}



async function changeSize(pickedSize,id){
        let catalog;
        let newId;
        if(catalog === undefined){
            newId = id.split(".")[1]
            catalog = id.split(".")[0]
        }
        else{
            catalog = location.hash.split("#")[1]
            newId = id;
        }

        const sizes = document.getElementById(newId).querySelectorAll(".size")

        sizes.forEach(element =>element.classList.remove("picked-size"))

        for (let i = 0; i < sizes.length ; i++) {
                if(i === pickedSize){
                    sizes[i].classList.add("picked-size")
                }
        }

    const productData = await client.getObjectInCatalog(catalog,parseInt(newId));
    document.getElementById(id).querySelector(".price__number").textContent = productData.prices[pickedSize]


}


load()
window.onhashchange = load
