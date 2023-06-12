function palindrome(str) {
    // 1)to lower case
    let toLowerCase = str.toLowerCase();
    // 2)strip out non-alphanumeric characters
    let nonAlpha = toLowerCase.replace(/[^a-z0-9]/gi, '');
    console.log(nonAlpha);

    let split = nonAlpha.split('');

    let reverseArr = split.reverse();

    let joinArr = reverseArr.join('')

    if (nonAlpha === joinArr) {
        return true;
    } else {
        return false;
    }
}

palindrome("A man, a plan, a canal. Panama");