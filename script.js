function leapYears(year) {
    console.log(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
}

let num1 = prompt("Indica un año");
leapYears(num1);
