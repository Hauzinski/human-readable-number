module.exports = function toReadable(number) {
    let hundred = "";
    let dozen = "";
    let unit = "";
    let num = [];
    number
        .toString()
        .split("")
        .reverse()
        .forEach((value, index) =>
            index == 1
                ? (dozen = value)
                : index == 2
                ? (hundred = value)
                : (unit = value)
        );

    switch (hundred) {
        case "1":
            num.push("one hundred");
            break;
        case "2":
            num.push("two hundred");
            break;
        case "3":
            num.push("three hundred");
            break;
        case "4":
            num.push("four hundred");
            break;
        case "5":
            num.push("five hundred");
            break;
        case "6":
            num.push("six hundred");
            break;
        case "7":
            num.push("seven hundred");
            break;
        case "8":
            num.push("eight hundred");
            break;
        case "9":
            num.push("nine hundred");
            break;
    }

    switch (dozen) {
        case "2":
            num.push("twenty");
            break;
        case "3":
            num.push("thirty");
            break;
        case "4":
            num.push("forty");
            break;
        case "5":
            num.push("fifty");
            break;
        case "6":
            num.push("sixty");
            break;
        case "7":
            num.push("seventy");
            break;
        case "8":
            num.push("eighty");
            break;
        case "9":
            num.push("ninety");
            break;
    }

    if (dozen != 1) {
        switch (unit) {
            case "1":
                num.push("one");
                break;
            case "2":
                num.push("two");
                break;
            case "3":
                num.push("three");
                break;
            case "4":
                num.push("four");
                break;
            case "5":
                num.push("five");
                break;
            case "6":
                num.push("six");
                break;
            case "7":
                num.push("seven");
                break;
            case "8":
                num.push("eight");
                break;
            case "9":
                num.push("nine");
                break;
        }
    }

    if (dozen == 1) {
        switch (dozen + unit) {
            case "10":
                num.push("ten");
                break;
            case "11":
                num.push("eleven");
                break;
            case "12":
                num.push("twelve");
                break;
            case "13":
                num.push("thirteen");
                break;
            case "14":
                num.push("fourteen");
                break;
            case "15":
                num.push("fifteen");
                break;
            case "16":
                num.push("sixteen");
                break;
            case "17":
                num.push("seventeen");
                break;
            case "18":
                num.push("eighteen");
                break;
            case "19":
                num.push("nineteen");
                break;
        }
    }

    if (number === 0) {
        num.push("zero");
    }

    return num.join(" ");
};
