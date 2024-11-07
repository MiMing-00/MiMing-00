function solution(order) {
    var answer = 0;
    [...order.toString()].forEach((item) => {
        if (item === "3" || item === "6" || item === "9") {
            answer++;
        }
    });
    return answer;
}
