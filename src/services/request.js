import axios from "axios"

class Request
{
    constructor(baseURL)
    {
        this.baseURL = baseURL;
        this.key = "AIzaSyC9IdR1NZq4K36zjKaPuAwEJnCNQp7RcQo"
    }

    get = async (endpoint, queryStrings, config = {}) => {

        let fullURL = `${this.baseURL}${endpoint}?key=${this.key}`;

        for (const queryString in queryStrings) {
            if (Array.isArray(queryStrings[queryString])) {
                
                for (const param of queryStrings[queryString]) {
                    fullURL += `&${queryString}=${param}`;
                }

            } else {
                fullURL += `&${queryString}=${queryStrings[queryString]}`;
            }
        }

        console.log(fullURL);
        
        return await axios.get(
            fullURL, 
            config
        );
    }
}

export default Request;