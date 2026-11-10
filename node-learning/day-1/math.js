export function add(x, y){
    return x + y
}
export  function less(x, y){
    return x - y
}
export  function multiply(x, y){
    return  x * y
    
}
export  function divid(x, y){
    if(y === 0 ){
        return "error cannot divide by zero"
    }
    return x / y
}