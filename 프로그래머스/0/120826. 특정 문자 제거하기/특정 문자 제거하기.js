function solution(my_string, letter) {
    let answer =[];
    let nextMyStr = my_string.split('');
    
    for (let i=0; i<nextMyStr.length; i++) {
        if (nextMyStr[i] !== letter) {
            answer.push(nextMyStr[i])
        }
    }
    return answer.join("");
}