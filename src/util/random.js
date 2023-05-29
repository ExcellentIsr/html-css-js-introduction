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
export function getRandomEmployee() {
    //TODO
    return {
        id: getRandomInt(100000, 1000000),
        name: 'Vasya', birthYear: 2000, gender: 'male',
        salary: 10000, department: 'QA'
    };
}