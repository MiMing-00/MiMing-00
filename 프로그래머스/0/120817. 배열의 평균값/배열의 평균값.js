    function solution(numbers) {
    let answer = numbers.reduce(function (acc, current) {
        return acc + current;
    }, 0) / numbers.length;

    return answer;
}
