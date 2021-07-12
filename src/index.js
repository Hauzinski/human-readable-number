module.exports = function toReadable(num) {
    let unit = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
    };

    let dozen1 = {
        0: "ten",
        1: "eleven",
        2: "twelve",
        3: "thirteen",
        4: "fourteen",
        5: "fifteen",
        6: "sixteen",
        7: "seventeen",
        8: "eighteen",
        9: "nineteen",
    };

    let dozen2 = {
        2: "twenty",
        3: "thirty",
        4: "forty",
        5: "fifty",
        6: "sixty",
        7: "seventy",
        8: "eighty",
        9: "ninety",
    };

    let number = [];
    let arr = num.toString().split("");
    let numberLength = arr.length;

    if (num === 0) {
        return "zero";
    }

    arr.some(function (value, index) {
        if (numberLength === 3 && index === 0) {
            // 100
            number.push(unit[value], "hundred");
        } else if (
            (numberLength === 2 && index === 0 && value !== "1") ||
            (numberLength === 3 && index === 1 && value !== "1")
        ) {
            // 10 от 20 до 90
            number.push(dozen2[value]);
        } else if (
            (numberLength === 2 && index === 0 && value === "1") ||
            (numberLength === 3 && index === 1 && value === "1")
        ) {
            // 10 от 10 до 19
            return number.push(dozen1[arr[index + 1]]);
        } else {
            number.push(unit[value]);
        }
    });
    return number.filter((value) => value !== undefined).join(" ");
};
