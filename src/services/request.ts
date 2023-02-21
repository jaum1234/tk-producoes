import axios from "axios"

class Request
{
    private baseURL: string
    private apiKey: string;

    constructor(baseURL: string, apiKey: string)
    {
        this.baseURL = baseURL;
        this.apiKey = apiKey;
    }

    get = async (endpoint: string, queryStrings: any, config = {}) => {

        let fullURL = `${this.baseURL}${endpoint}?key=${this.apiKey}`;

        for (const queryString in queryStrings) {
            if (Array.isArray(queryStrings[queryString])) {
                
                for (const param of queryStrings[queryString]) {
                    fullURL += `&${queryString}=${param}`;
                }

            } else {
                fullURL += `&${queryString}=${queryStrings[queryString]}`;
            }
        }

        
        return await axios.get(
            fullURL, 
            config
        );
    }
}

export default Request;