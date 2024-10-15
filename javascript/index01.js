
    var input = prompt("Enter something:");

    if (isNaN(input)) {
        console.log("The input is a string.");
    } else {
        var number = parseFloat(input);
        if (number > 0) {
            console.log("The input is a positive number.");
        } else if (number < 0) {
            console.log("The input is a negative number.");
        } else {
            console.log("The input is zero.");
        }
    }
