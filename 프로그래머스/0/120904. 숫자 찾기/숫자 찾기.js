function solution(num, k) {
    let answer = num.toString().indexOf(k)
    answer = ( answer === -1) ? -1 : answer +1
        return answer;
}