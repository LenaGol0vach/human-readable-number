module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    let map = new Map();
    map.set(0, "");
    map.set(1, "one");
    map.set(2, "two");
    map.set(3, "three");
    map.set(4, "four");
    map.set(5, "five");
    map.set(6, "six");
    map.set(7, "seven");
    map.set(8, "eight");
    map.set(9, "nine");
    map.set(10, "ten");
    map.set(11, "eleven");
    map.set(12, "twelve");
    map.set(13, "thirteen");
    map.set(14, "fourteen");
    map.set(15, "fifteen");
    map.set(16, "sixteen");
    map.set(17, "seventeen");
    map.set(18, "eighteen");
    map.set(19, "nineteen");
    map.set(20, "twenty");
    map.set(30, "thirty");
    map.set(40, "forty");
    map.set(50, "fifty");
    map.set(60, "sixty");
    map.set(70, "seventy");
    map.set(80, "eighty");
    map.set(90, "ninety");
    if (map.has(number)) {
        return map.get(number);
    } else if (number < 100) {
        let decimal = Math.floor(number / 10) * 10;
        let simple = number % 10;
        return `${map.get(decimal)} ${map.get(simple)}`;
    } else {
        let hundred = Math.floor(number / 100);
        let decimalHundred = (Math.floor(number / 10) % 10) * 10;
        let simpleHundred = (number % 100) % 10;
        let result1 = `${map.get(hundred)} hundred`;
        if (Math.floor(number / 100) * 100 === (number / 100) * 100) {
            return result1.trim();
        }
        let decimalCheck = number % 100;
        let result2 = map.has(decimalCheck)
            ? ` ${map.get(decimalCheck)}`
            : ` ${map.get(decimalHundred)} ${map.get(simpleHundred)}`;
        return result1.trim() + " " + result2.trim();
    }
};
