function checkPalindrome(inputString) {
    var splitString = inputString.split("");
    var reverseArray = splitString.reverse();
    var jointArray = reverseArray.join("");
    return inputString === jointArray;
}
