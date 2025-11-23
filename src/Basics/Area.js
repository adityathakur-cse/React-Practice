// export function Area(r){
//     return PI*r*r;
// }
// export const PI = 3.14;
export default function cal(a,b,o){
    if(o == '+'){
        return a+b;
    }
    if(o == '-'){
        return a-b;
    }
    if(o == '/'){
        return a/b;
    }
    if(o == '*'){
        return a*b;
    }
}
export const a = 20, b = 10;