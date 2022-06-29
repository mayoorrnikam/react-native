import { useEffect, useState } from "react";
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([])
    const [errorMessage, setErrorMessage] = useState('')


    const searchYelpApi = async (searchTermVal) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    term: searchTermVal,
                    location: 'san jose',
                    limit: 50
                }
            });
            setResults(response.data.businesses)
        } catch (error) {
            setErrorMessage('Something went wrong')
        }

    }

    useEffect(() => {
        searchYelpApi('cake');
    }, []);

    return [searchYelpApi, setErrorMessage, setResults, results, errorMessage]
} 