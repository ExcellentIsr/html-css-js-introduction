export default class OpenMetioService {
    #baseUrl;
    constructor(baseUrl) {
        this.#baseUrl = baseUrl;
    }
    #getUrl(lat, long, startDate, endDate) {
        return `${this.#baseUrl}latitude=${lat}&longitude=${long}&hourly=temperature_2m,apparent_temperature&timezone=IST&start_date=${startDate}&end_date=${endDate}`
    }
    async getTemperatures(lat, long, startDate, endDate, hourFrom, hourTo) {
        const response = await fetch(this.#getUrl(lat, long, startDate, endDate));
        const data = await response.json();
        const dates = getDataForHours(data.hourly.time, hourFrom, hourTo);
        const temperatures = getDataForHours(data.hourly.temperature_2m, hourFrom, hourTo);
        const apparentTemperatures = getDataForHours(data.hourly.apparent_temperature, hourFrom, hourTo);
        return dates.map((d, index) => {
            const tokens = d.split("T");
            const date = tokens[0];
            const time = tokens[1];
            return {
                date, time, temperature: temperatures[index],
                apparentTemperature: apparentTemperatures[index]
            };
        })
    }
}
function getDataForHours(array, hourFrom, hourTo) {
    return array.filter((__, index) => {
        const rem = index % 24;
        return rem >= hourFrom && rem <= hourTo
    })
}