
class Client {
    async getDataCatalog(catalog) {
        if(catalog !== undefined && catalog.length !== 0) {
            console.log(catalog)
            return fetch(`https://my-json-server.typicode.com/nekt2111/labsJS/${catalog}`).then((response) => {
                return response.json();
            });
        }
    }
    async idExists(catalog,id){
       return await this.getDataCatalog(catalog).then((data) => {
            for (let i = 0; i <data.length ; i++) {
                if(data[i].id === parseInt(id)){
                    return true;
                }
            }
            return false;
        })
    }
    async getObjectInCatalog(catalog,id){
       return  await this.getDataCatalog(catalog).then((data) => {
           for (let i = 0; i <data.length ; i++) {
                if(data[i].id === id){
                    return data[i]
                }
           }
        })
    }

}



export default Client