import Client from "./client.js";

let client = new Client();


class Router{
    async getCurrentState(){
        let fileName;
        let viewName;
        let id;
        let location = window.location.hash.split("#")[1];
        if(!location.includes('/')) {
            switch (location) {
                case "":
                    fileName = "index"
                    viewName = ""
                    break;
                case "drinks":
                    fileName = "drinks"
                    viewName = "drinks"
                    break;
                case "pizzas":
                    fileName = "pizzas"
                    viewName = "pizzas"
                    break;
                case "sales":
                    fileName = "sales"
                    viewName = "sales"
                    break;
                case "sides":
                    fileName = "sides"
                    fileName = "sides"
                    break;
                case "cart":
                    fileName = "cart"
                    viewName = "cart"
                    break;
                case "status":
                    fileName = "status"
                    viewName = "status"
                    break;
                case "deserts":
                    fileName = "deserts"
                    viewName = "deserts"
                    break;
                case "product":
                    fileName = "product"
                    break;
                default:
                    fileName = "index"
                    viewName = ""
                    break;
            }
        }
        else{
            const tempId = location.split('/')[1];
            const exists = await client.idExists('products',parseInt(tempId));
            console.log(exists)
            if(!exists){
                fileName = "index";
                viewName = "";
            }
            else{

                id = tempId;

                switch (location.split('/')[0]) {
                    case "drinks":
                        fileName = "product"
                        viewName = "drinks" + "/" + id
                        break;
                    case "pizzas":
                        fileName = "product"
                        viewName = "pizzas" + "/"  + id
                        break;
                    case "sales":
                        fileName = "product"
                        viewName = "sales" + "/" + id
                        break;
                    case "sides":
                        fileName = "product"
                        viewName = "sides" + "/" + id
                        break;
                    case "deserts":
                        fileName = "product"
                        viewName = "deserts" + "/" + id
                        break;
                }
            }
        }
        return {
            fileName,
            viewName,
            id
        }
    }
}

export default Router;
