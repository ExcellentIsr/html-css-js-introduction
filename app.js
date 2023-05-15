function getRandomIntNumber(min, max, minInclusive = true, maxInclusive = false) {
    if (!minInclusive) {
        min++;
    }
    if (maxInclusive) {
        max++;
    }
    return min < max ? Math.trunc(min + Math.random() * (max - min)) : NaN;
}

function getArrayRandomIntNumbers(nNumbers, min, max, minInclusive = true, maxInclusive = false) {
    let res = [];
    res.length = nNumbers;
    res = [...res];
    return res.map(() => getRandomIntNumber(min, max, minInclusive, maxInclusive));
}

//console.log(getArrayRandomIntNumbers(10, 0, 2));
let ar1 = [];
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
    background-color:${v ? 'black' : 'white'}"></li>`).join('');
}

//bodyId.innerHTML = getOrderedList(getArrayRandomIntNumbers(10, 0, 2))
function getMatrixRandomIntNumbers(rows, columns, min, max) {
    let res = [];
    res.length = rows;
    res = [...res];
    return res.map(() => getArrayRandomIntNumbers(columns, min, max))
}

function arraycopy(src, posSrc, dst, posDst, length = src.length) {
    //TODO copy "length" elements from position "posSrc" of array "src" to array "dst" from position "posDst"
    if (posDst + length > dst.length) {
        length = dst.length - posDst;
    }
    const arrays = [];
    let array1 = dst.slice(0, posDst);
    let array2 = src.slice(posSrc, posSrc + length);
    if (array2.length < length) {
        length = array2.length;
    }
    let array3 = dst.slice(posDst + length, dst.length);

    return Array.prototype.concat(array1, array2, array3);
}

function moveElement(array, position, shift) {
    let res = [];
    if (position > array.length - 1 || position < 0) {
        res = array;
    } else {
        let newPosition = position + shift;
        if (newPosition > array.length - 1) {
            newPosition = array.length - 1;
        } else if (newPosition < 0) {
            newPosition = 0;
        }
        array.splice(newPosition, 0, ...(array.splice(position, 1)));
        res = array;
    }

    return res;
}

let array1 = [1, 2, 3, 4, 5];
let array2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

let newArray = arraycopy(array1, 3, array2, 7, 10);
// console.log(newArray);
let newArray1 = moveElement(array1, 3, 2);
// console.log(newArray1);

const array = [2, -2, 5, -6, 3, 9, 5];
let minAndMax = [array[0], array[0]];
console.log(minAndMax);
let res = array.reduce((minMax, num) => {
    if (minMax[0] > num) {
        minMax[0] = num;
    }
    if (minMax[1] < num) {
        minMax[1] = num;
    }
    return minMax;
}, [minAndMax[0], minAndMax[1]]);

console.log(res);