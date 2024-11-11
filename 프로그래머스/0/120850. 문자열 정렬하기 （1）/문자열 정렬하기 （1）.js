function solution(my_string) {
    return Array.from(my_string).sort().filter(item=> !isNaN(item)).map(item => parseInt(item))
}