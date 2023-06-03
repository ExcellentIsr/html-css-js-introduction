const PULL_NAMES = [
    { name: 'Vasya', gender: 'Male' },
    { name: 'Petya', gender: 'Male' },
    { name: 'Masha', gender: 'Female' },
    { name: 'Tanya', gender: 'Female' },
    { name: 'Ira', gender: 'Female' },
    { name: 'Lucy', gender: 'Female' },
    { name: 'Igor', gender: 'Male' },
    { name: 'Oleg', gender: 'Male' },
    { name: 'Vadim', gender: 'Male' },
    { name: 'Danil', gender: 'Male' },
    { name: 'Kolya', gender: 'Male' },
    { name: 'Nastya', gender: 'Female' },
];
const PULL_DEPARTS = ['QA', 'Analytics', 'Developer', 'Tester', "Management"];
export function getRandomInt(min, max) {
    if (min == max) {
        max++;
    } else if (min > max) {
        [min, max] = [max, min]
    }
    return Math.trunc(min + Math.random() * (max - min));
}
export function getRandomElement(array) {
    return array[getRandomInt(0, array.length)];
}
export function getRandomEmployee(minSalary, maxSalary, minYear, maxYear) {
    const item = getRandomElement(PULL_NAMES);
    const corruntYear = new Date().getFullYear();
    return {
        name: item.name,
        birthYear: getRandomInt(minYear, maxYear + 1),
        gender: item.gender,
        salary: getRandomInt(minSalary, maxSalary),
        department: getRandomElement(PULL_DEPARTS)
    };
}