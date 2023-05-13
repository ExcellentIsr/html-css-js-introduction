const ar = [];
ar[10] = 100;
ar [0] = 'hello';
ar[3] = [];
ar.length = 0;
ar[0] = 1;
const ar2 = [[1,6], [2,0,0], [3, 1]];
//add at array end
ar[ar.length] = 10;
let s = ar.push(...ar2);
ar[10];
//method "map"
//console.log([1, 2, 3].map(n => n ** 2));

function getRandomIntNumber(min, max, minInclusive=true, maxInclusive=false) {
    if (!minInclusive) {
        min++;
     }
    if (maxInclusive) {
     max++;
    }
    return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
}

function getArrayRandomIntNumbers(nNumbers, min, max, minInclusive=true, maxInclusive=false) {
    let res = [];
    res.length = nNumbers;
    res = [...res];
    return res.map(() => getRandomIntNumber(min, max, minInclusive, maxInclusive));
}

//console.log(getArrayRandomIntNumbers(10, 0, 2));
let ar1 =[];
ar1.push(1, 2, 3);
ar1.length = 100;
ar1 = [...ar1];

ar1.length = 5;
//console.log(ar1);
function getOrderedList(array) {
    //returns HTML string of element <ol> with items form 
    //a given array elements
    //example: input- [1, 2, 3]
    //output "<ol><li>1</li><li>2</li><li>3</li></ol>"
    return `<ol style="text-align:center; list-style:none">${getListItems(array)}</ol>`
}

function getListItems(array) {
    return array.map(v => `<li style="width:30px; height:30px; border: solid 1px gray;
    background-color:${v ? 'black':'white'}"></li>`).join('');
}

//bodyId.innerHTML = getOrderedList(getArrayRandomIntNumbers(10, 0, 2))
function getMatrixRandomIntNumbers(rows, columns, min, max) {
    let res = [];
    res.length = rows;
    res = [...res];
    return res.map(() => getArrayRandomIntNumbers(columns, min, max) )
}

//splice method for updating array
let arS = [10, 20, -70, 100, 6, -10, 0];
const arI = [1, 2, 3];
let index = arS.indexOf(-70);
arS.splice(index + 1, 0, ...arI);
// console.log(arS)
// console.log(arS.slice(index + 1, index + 4))
// console.log(arS);
let indexFirstNegative = arS.findIndex(v => v < 0);
//console.log(index == indexFirstNegative);
//arS = arS.filter(v => v > 0);
//console.log(arS);
console.log(arS.every(v => v > 0))
console.log(arS.some(v => v < 0))

function arraycopy(src, posSrc, dst, posDst=0, length) {
    //TODO copy "length" elements from position "posSrc" of array "src" to array "dst" from position "posDst"
}

function moveElement(array, position, shift) {
    //example: ar =  [1, 2, 3, 4, 5] ; moveElement(ar,2, 1) => [1,2,4,3,5];
    //example: ar =  [1, 2, 3, 4, 5] ; moveElement(ar,2, -2) => [3,1,2,4,5];
    //example: ar =  [1, 2, 3, 4, 5] ; moveElement(ar,2, -20) => [3,1,2,4,5];
    //example: ar =  [1, 2, 3, 4, 5] ; moveElement(ar,2, 20) => [1,2,4,5,3];
}