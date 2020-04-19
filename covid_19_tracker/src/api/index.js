import axios from 'axios';

const url = "https://covid19.mathdro.id/api";

export const fetchData = async (country) => {
    let changedUrl = url;
    if(country){
        changedUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate }} = await axios.get(changedUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        return data;
    } catch (error) {
        console.log(error.message);
    }
}

export const fetchCountries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`);
        return data;
    } catch (error) {
        console.log(error);
    }
}