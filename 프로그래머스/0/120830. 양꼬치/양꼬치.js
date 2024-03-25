function solution(n, k) {
    let service = Math.floor(n/10);

    var answer = 12000 * n + 2000 * k - (2000 * service);    
    return answer;
}