import Client from "./client.js";

let client = new Client();


class Router{
    async getCurrentState(){
        let fileName;
        let catalogName;
        let id;
        let location = window.location.hash.split("#")[1];
        if(!location.includes('/')) {
            switch (location) {
                case "":
                    fileName = "index"
                    catalogName = ""
                    break;
                case "drinks":
                    fileName = "drinks"
                    catalogName = "drinks"
                    break;
                case "pizzas":
                    fileName = "pizzas"
                    catalogName = "pizzas"
                    break;
                case "sales":
                    fileName = "sales"
                    catalogName = "sales"
                    break;
                case "sides":
                    fileName = "sides"
                    fileName = "sides"
                    break;
                case "cart":
                    fileName = "cart"
                    catalogName = "cart"
                    break;
                case "status":
                    fileName = "status"
                    catalogName = "status"
                    break;
                case "deserts":
                    fileName = "deserts"
                    catalogName = "deserts"
                    break;
                default:
                    fileName = "index"
                    catalogName = ""
                    break;
            }
        }
        else{
            const tempId = location.split('/')[1];
            const exists = await client.idExists(location.split('/')[0],parseInt(tempId));
            console.log(exists)
            if(!exists){
                fileName = "index";
                catalogName = "";
            }
            else{

                id = tempId;

                switch (location.split('/')[0]) {
                    case "drinks":
                        fileName = "product"
                        catalogName = "drinks"
                        break;
                    case "pizzas":
                        fileName = "product"
                        catalogName = "pizzas"
                        break;
                    case "sales":
                        fileName = "product"
                        catalogName = "sales"
                        break;
                    case "sides":
                        fileName = "product"
                        catalogName = "sides"
                        break;
                    case "deserts":
                        fileName = "product"
                        catalogName = "deserts"
                        break;
                }
            }
        }
        return {
            fileName,
            catalogName,
            id
        }
    }
}

export default Router;
