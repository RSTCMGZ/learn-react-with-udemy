import axios from 'axios';



const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID ylTr0JZytaSjOwks-Taz4Thv-FDuKWC1U22s1DoFRgs'
        },
        params: { query: term }
    })
    return response.data.results
}


export default searchImages;