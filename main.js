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

    

}

const http = new EasyHttp();
export default http;