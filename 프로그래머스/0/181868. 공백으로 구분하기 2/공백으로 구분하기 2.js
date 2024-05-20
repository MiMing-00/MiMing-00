function solution(my_string) {
    let mystr = my_string.split(" ");
    let answer = [];
    
    for (let i = 0; i < mystr.length; i++) {
        if (mystr[i] !== '') {
        answer.push(mystr[i]);
        }
    } return answer;
} 