// get the input from form
function getValue() {
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;
    let revString = reverseString(userString);
    displayString(revString);
};

// reverse string
function reverseString(userString) {
    let revString = [];
    // reverse string using a for loop
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    return revString;
};

// display the result
function displayString(revstring) {
    document.getElementById("msg").innerHTML = `Your string reversed is: ${revstring}`;
    document.getElementById("alert").classList.remove("invisible");
};