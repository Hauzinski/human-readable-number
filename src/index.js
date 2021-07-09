module.exports = function toReadable (number) {
    let hundred = "";
    let dozen = "";
    let unit = "";
    let num = "";
    number
      .toString()
      .split("")
      .reverse()
      .forEach((value, index) => (index == 1 ? (dozen = value) : index == 2 ? (hundred = value) : (unit = value)));
  
    switch (hundred) {
      case "1":
        num += "one hundred ";
        break;
      case "2":
        num += "two hundred ";
        break;
      case "3":
        num += "three hundred ";
        break;
      case "4":
        num += "four hundred ";
        break;
      case "5":
        num += "five hundred ";
        break;
      case "6":
        num += "six hundred ";
        break;
      case "7":
        num += "seven hundred ";
        break;
      case "8":
        num += "eight hundred ";
        break;
      case "9":
        num += "nine hundred ";
        break;
    }
  
    switch (dozen) {
      case "2":
        num += "twenty ";
        break;
      case "3":
        num += "thirty ";
        break;
      case "4":
        num += "forty ";
        break;
      case "5":
        num += "fifty ";
        break;
      case "6":
        num += "sixty ";
        break;
      case "7":
        num += "seventy ";
        break;
      case "8":
        num += "eighty ";
        break;
      case "9":
        num += "ninety ";
        break;
    }
  
    if (dozen != 1) {
      switch (unit) {
        case "1":
          num += "one";
          break;
        case "2":
          num += "two";
          break;
        case "3":
          num += "three";
          break;
        case "4":
          num += "four";
          break;
        case "5":
          num += "five";
          break;
        case "6":
          num += "six";
          break;
        case "7":
          num += "seven";
          break;
        case "8":
          num += "eight";
          break;
        case "9":
          num += "nine";
          break;
      }
    }
  
    if (dozen <= 1) {
      switch (dozen + unit) {
        case "1":
          num += "one";
          break;
        case "2":
          num += "two";
          break;
        case "3":
          num += "three";
          break;
        case "4":
          num += "four";
          break;
        case "5":
          num += "five";
          break;
        case "6":
          num += "six";
          break;
        case "7":
          num += "seven";
          break;
        case "8":
          num += "eight";
          break;
        case "9":
          num += "nine";
          break;
        case "10":
          num += "ten";
          break;
        case "11":
          num += "eleven";
          break;
        case "12":
          num += "twelve";
          break;
        case "13":
          num += "thirteen";
          break;
        case "14":
          num += "fourteen";
          break;
        case "15":
          num += "fifteen";
          break;
        case "16":
          num += "sixteen";
          break;
        case "17":
          num += "seventeen";
          break;
        case "18":
          num += "eighteen";
          break;
        case "19":
          num += "nineteen";
          break;
        case "0":
          num += "zero";
          break;
      }
    }
    return num;  
}
