function solution(myString, pat) {
    let myArr = [];
    
    for (let i = 0; i < myString.length; i++) {
        if (myString.slice(i, i + pat.length) === pat) {
            myArr.push([i]);
        }
    }
    return myArr.length;
}
