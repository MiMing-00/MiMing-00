function solution(price, money, count) {
    var answer = 0;
    let amount = 0;
    
    for (let i = 1; i <= count; i++) {
    amount += price *i}
    
    if (money >= amount) {
        return answer = 0;
    } else {
    return answer = Math.abs(money - amount)}
    
    return answer;
}