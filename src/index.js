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

    if (num === 0) {
        return "zero";
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr.length === 3 && i === 0) {
            // 100
            number.push(unit[arr[i]], "hundred");
        } else if (
            (arr.length === 2 && i === 0 && arr[i] !== "1") ||
            (arr.length === 3 && i === 1 && arr[i] !== "1")
        ) {
            // 10 от 20 до 90
            number.push(dozen2[arr[i]]);
        } else if (
            (arr.length === 2 && i === 0 && arr[i] === "1") ||
            (arr.length === 3 && i === 1 && arr[i] === "1")
        ) {
            // 10 от 10 до 19
            number.push(dozen1[arr[i + 1]]);
            break;
        } else {
            number.push(unit[arr[i]]);
        }
    }
    return number.filter((value) => value !== undefined).join(" ");
};
