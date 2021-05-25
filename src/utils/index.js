import axios from "axios";

export const querySwapi = async(url) => {
    const response = await axios.get(url)
    const data = response.data

    if (data.next){
        return data.results.concat(await querySwapi(data.next))
    }
    else {
        return data.results
    }
}

export const extractSwapiId = (url) => {
    if (!url) {
        return null
    }

    const splitURL = url.split('/')
    return splitURL[splitURL.length - 2] // Second to last is the id for swapi
}