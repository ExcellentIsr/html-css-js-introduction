import { count } from "../util/number-functions.js";
import { getRandomInt } from "../util/random.js";
const minId = 100_000;
const maxId = 1_000_000;
const time = 300;
//TODO by using setTimeout update the CompanyService code that
//each public method returns Promise that after some timeout moves
//in the resolved state
export default class CompanyService {
    #employees;
    constructor() {
        this.#employees = {};
    }
    addEmployee(employee) {
        const id = this.#getId();
        this.#employees[id] = { ...employee, id };
        return getPromiseTimeout(this.#employees[id], time);
    }
    #getId() {
        let id;
        do {
            id = getRandomInt(minId, maxId);
        } while (this.#employees[id]);
        return id;
    }
    getStatistics(field, interval) {
        let array = Object.values(this.#employees);
        const currentYear = new Date().getFullYear();
        if (field == 'birthYear') {
            array = array.map(e => ({ 'age': currentYear - e.birthYear }));
            field = 'age';
        }
        const statisticsObj = count(array, field, interval);
        return getPromiseTimeout(Object.entries(statisticsObj).map(e => {
            const min = e[0] * interval;
            const max = min + interval - 1;
            return { min, max, count: e[1] };
        }), time);
    }
    getAllEmployees() {
        return getPromiseTimeout(Object.values(this.#employees, time));
    }
}

function getPromiseTimeout(obj, timeout) {
    return new Promise(resolve => setTimeout(() => resolve(obj), timeout));
}