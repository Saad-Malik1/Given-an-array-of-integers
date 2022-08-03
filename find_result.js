Given an array of integers, keep a total score based on the following; 

1. Add 1 point for every even number in an array. 
2. Add 3 points for every number in the array. 
3 Add 5 points for every time you encounter 5 in the array. 


export function find_result( params ) {

let value_num = 0 

params.forEach((e)=>{ 
    if(e%2==0){
        value_num = value_num + 1
    }else if(e % 2 != 0 && e !== 5){
        value_num = value_num + 3
    }else{
        value_num = value_num + 5
    }
})
 return value_num
}
