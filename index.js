// @ts-check

import half from './src/half.js';

export default half;

const findLongestWord = (arrOfStr) => {
    let counter = 0;
    let biggestStr = '';
    const getLongestWordLength = arrOfStr.map((str) => {
        if (str.length > counter) {
            counter = str.length;
            biggestStr = str;
        }
    });
    return biggestStr;
};

console.log(findLongestWord(["Java", "Python", "JavaScript"])); // "JavaScript"
console.log(findLongestWord(["football", "basketball", "tennis"])); // "basketball"
console.log(findLongestWord(["sun", "moon", "stars"])); // "stars"

const sumUniqueNumbers = (arrOfNumbers) => {
    const uniqNumbersArr = [... new Set(arrOfNumbers)];
    const sumOfUniqNumbers = uniqNumbersArr.reduce((arr, value) => arr + value);
    return sumOfUniqNumbers;
};

console.log(sumUniqueNumbers([1, 2, 3, 2, 4, 3, 5])); // 15
console.log(sumUniqueNumbers([10, 20, 10, 20, 30])); // 60
console.log(sumUniqueNumbers([0, -1, -2, -1, -3])); // -6

const mergeArrays = (...arrs) => {
    const ArrFlat = arrs.flat();
    const UniqNumbers = [... new Set(ArrFlat)];
    return UniqNumbers;
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6], [7, 8, 9], [2, 3, 4])); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(mergeArrays([1, 3, 5], [2, 4, 6], [3, 5, 7])); // [1, 3, 5, 2, 4, 6, 7]

const hasProperty = (obj, propertyName) => {
    return obj.hasOwnProperty(propertyName);
}

console.log(hasProperty({name: "Alice", age: 25}, "age")); // true
console.log(hasProperty({name: "Bob", country: "France"}, "gender")); // false
console.log(hasProperty({type: "fruit", color: "red"}, "color")); // true

const getPropertyValue = (obj, propertyName) => {
    if (obj.hasOwnProperty(propertyName)) {
        return obj[propertyName];
    }
    return undefined;
};

console.log(getPropertyValue({name: "Alice", age: 25}, "name")); // "Alice"
console.log(getPropertyValue({brand: "Toyota", model: "Camry"}, "year")); // undefined
console.log(getPropertyValue({type: "laptop", brand: "Dell"}, "brand")); // "Dell".

const invertObject = (obj) => {
    const values = Object.values(obj);
    const keys = Object.keys(obj);
    const invertObj = {};
    for (let i = 0; i < values.length; i += 1) {
        invertObj[values[i]] = keys[i];
    }
    return invertObj;
};

console.log(invertObject({ a: 1, b: 2, c: 1 }));