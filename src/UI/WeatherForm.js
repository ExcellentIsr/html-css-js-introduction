//constants
const CITY_ID = 'city-id';
const DATE_ID = 'date-id';
const DAYS_ID = 'days-id';
const HOUR_FROM_ID = 'hourFrom-id';
const HOUR_TO_ID = 'hourTo-id';
export default class WeatherForm {
    #formElement;
    #cityElement;
    #dateElement;
    #daysElement;
    #hourFromElement;
    #hourToElement;
    #formData;
    #maxDays;
    #cities;
    #parentID;
    constructor(parentId, cities, maxDays) {
        this.#parentId = parentId;
        this.#maxDays = maxDays;
        this.#cities = cities;
        this.#buildForm();
        this.#setElements();
        this.#setHandlers();
        this.#setSelectOptions
    }
    #cityHandler(){
        this.#formData.city = this.#cityElement.value;
    }
    #daysHandler(){
        this.#formData.days = this.#daysElement.value;
    }
}