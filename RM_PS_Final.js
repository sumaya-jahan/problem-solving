
/* 01. Solve Me First */
var solveMeFirst = function(a, b) {
  return a + b;
};

/* 02. Multiply */
var multiply = function(a, b) {
  return a * b;
};

/* 03. Even or Odd */
var evenOrOdd = function(number) {
  return number % 2 === 0 ? "Even" : "Odd";
};

/* 04. Return Negative */
var makeNegative = function(number) {
  return -Math.abs(number);
};

/* 05. Opposite Number */
var opposite = function(number) {
  return -number;
};

/* 06. Simple Array Sum */
var simpleArraySum = function(ar) {
  return ar.reduce((sum, num) => sum + num, 0);
};

/* 07. sleepIn */
var sleepIn = function(weekday, vacation) {
  return !weekday || vacation;
};

/* 08. monkeyTrouble */
var monkeyTrouble = function(aSmile, bSmile) {
  return aSmile === bSmile;
};

/* 09. sumDouble */
var sumDouble = function(a, b) {
  return a === b ? 2 * (a + b) : a + b;
};

/* 10. diff21 */
var diff21 = function(n) {
  return n > 21 ? 2 * (n - 21) : 21 - n;
};

/* 11. parrotTrouble */
var parrotTrouble = function(talking, hour) {
  return talking && (hour < 7 || hour > 20);
};

/* 12. makes10 */
var makes10 = function(a, b) {
  return a === 10 || b === 10 || a + b === 10;
};

/* 13. nearHundred */
var nearHundred = function(n) {
  return Math.abs(n - 100) <= 10 ||
         Math.abs(n - 200) <= 10;
};

/* 14. posNeg */
var posNeg = function(a, b, negative) {
  if (negative) {
    return a < 0 && b < 0;
  }
  return (a < 0 && b > 0) || (a > 0 && b < 0);
};

/* 15. notString */
var notString = function(str) {
  return str.startsWith("not") ? str : "not " + str;
};

/* 16. Compare the Triplets */
var compareTriplets = function(a, b) {
  var alice = 0;
  var bob = 0;

  for (var i = 0; i < 3; i++) {
    if (a[i] > b[i]) alice++;
    else if (a[i] < b[i]) bob++;
  }

  return [alice, bob];
};

/* 17. A Very Big Sum */
var aVeryBigSum = function(ar) {
  return ar.reduce((sum, num) => sum + num, 0);
};

/* 18. Staircase */
var staircase = function(n) {
  var lines = [];

  for (var i = 1; i <= n; i++) {
    lines.push(" ".repeat(n - i) + "#".repeat(i));
  }

  return lines.join("\n");
};

/* 19. Grading Students */
var gradingStudents = function(grades) {
  return grades.map(function(grade) {
    if (grade < 38) return grade;

    var nextMultiple = Math.ceil(grade / 5) * 5;

    return nextMultiple - grade < 3
      ? nextMultiple
      : grade;
  });
};

/* 20. Time Conversion */
var timeConversion = function(s) {
  var period = s.slice(-2);
  var hour = parseInt(s.slice(0, 2), 10);

  if (period === "AM" && hour === 12) {
    hour = 0;
  } else if (period === "PM" && hour !== 12) {
    hour += 12;
  }

  return String(hour).padStart(2, "0") + s.slice(2, 8);
};

/* 21. String Repeat */
var repeatStr = function(n, s) {
  return s.repeat(n);
};

/* 22. Reversed Strings */
var solution = function(str) {
  return str.split("").reverse().join("");
};

/* 23. Sum of Positive */
var positiveSum = function(arr) {
  return arr.reduce(function(sum, num) {
    return num > 0 ? sum + num : sum;
  }, 0);
};

/* 24. Grasshopper - Summation */
var summation = function(num) {
  return (num * (num + 1)) / 2;
};

/* 25. Convert a Boolean to a String */
var booleanToString = function(b) {
  return String(b);
};
