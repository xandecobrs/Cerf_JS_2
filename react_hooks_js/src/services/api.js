const KEY = 'aaf9f79070ce424ca30140125220509';

const fetchdata = async (city) => {
    const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

    const fetchResponse = await fetch(url);
    const data = await fetchResponse.json();

    return data;
}

export default fetchdata;