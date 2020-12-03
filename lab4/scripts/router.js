
class Router{
    getCurrentState(){
        let fileName;
        let viewName;
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
                case "sale":
                    fileName = "sale"
                    viewName = "black-friday"
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
            
        }

       return {
            fileName,
            viewName
       }
    }
}

export default Router;
