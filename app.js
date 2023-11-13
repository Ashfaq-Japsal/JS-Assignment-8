//1
var input1 = prompt ("Enter a value (letters or numbers only)")

if (input1 >= 0) {
    alert (input1 + " is a number")
}
else if (input1 >= "a") {
        alert (input1 + " is a lower case lettter")
}
else if (input1 >= "A") {
        alert (input1 + " is an upper case lettter")
}
else {
    alert (input1 + " is not a valid value")
}

//2
var input2 = +prompt ("Enter a 1st number")
var input3 = +prompt ("Enter a 2nd number")
if (input2 > input3) {
    alert (input2 + " is greater than " + input3)
}
else if (input2 < input3) {
        alert (input3 + " is greater than " + input2)
}
else if (input2 == input3) {
        alert (input2 + " is equal to " + input3)
}

//3
var input4 = +prompt ("Enter a number")
if (input4 === 0) {
    alert ("Your entered value is 0")
}
else if (input4 > 0) {
    alert ("Your entered value is a positive value")
}
else if (input4 < 0) {
    alert ("Your entered value is a negetive value")
}