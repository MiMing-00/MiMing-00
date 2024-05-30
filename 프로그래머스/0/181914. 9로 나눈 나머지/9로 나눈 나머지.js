function solution(number) {
    let answer = 0;
    const splitNumber = number.split('')
    for (let i=0; i < splitNumber.length; i++) {
        answer += parseInt(splitNumber[i]);
    }
    return answer % 9;
}