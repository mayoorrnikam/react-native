import axios from "axios";

const axiosAPIs = axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer <Add your own Yelp Fusion API Token>'
    }
});

export default axiosAPIs;