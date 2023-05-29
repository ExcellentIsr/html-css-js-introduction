import DataGrid from "./UI/DataGrid.js";
import OpenMetioConfig from "./config/service-config.json" assert{type: "json"};
import OpenMetioService from "./service/open-metio-service.js";
let startDateStr = getIsoDateStr(new Date());
function getEndDate(days) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(startDate.setDate(startDate.getDate() + days));
    return getIsoDateStr(endDate);
};
function getIsoDateStr(date) {
    return date.toISOString().substring(0, 10);
}
const fromFormData = {
    city: "Rehovot",
    startDate: startDateStr,
    endDate: getEndDate(10),
    hourFrom: 10,
    hourTo: 15
};
const openMetioService = new OpenMetioService(OpenMetioConfig.baseUrl);
const columns = [
    { field: "date", headerName: "Date" },
    { field: "time", headerName: "Time" },
    { field: "temperature", headerName: "Temperature" },
    { field: "apparentTemperature", headerName: "Apparent temperature" }
];
const table = new DataGrid(fromFormData, "table-place", columns);
const latLong = OpenMetioConfig.cities[fromFormData.city];
const { lat, long } = latLong;
const { startDate, endDate, hourFrom, hourTo } = fromFormData;
openMetioService.getTemperatures(lat, long, startDate, endDate, hourFrom, hourTo)
    .then(data => table.fillDate(data));

