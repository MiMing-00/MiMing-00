function solution(myString, pat) {
    let lowerPat = pat.toLowerCase();
    let lowerMyString = myString.toLowerCase();
    let answer = lowerMyString.includes(lowerPat);
    
    return answer ? 1 : 0
}