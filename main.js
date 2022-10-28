class EasyHttp {

    // class constructor

    constructor() {

    }

    // get method

    async get(url) {
        const response = await fetch(url);
        const resData = response.json();
        return resData;
    }

    // post method

    async post(url,data) {
        const response = await fetch(url,{
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data) 
        });
        const resData = response.json();
        return resData;
    }

    // delete method 

    async delete(url) {
        const response = await fetch(url,{
            method: "DELETE"
        });
        const resData = response.json();
        return resData;
    }

}

const http = new EasyHttp();
export default http;