// * reduce() : method applies a function against an accumulator and each value of the array
/**
 * @param function : the first parameter of reduce method 
 * which takes 2 params
    * @param acc      : the accumulator
    * @param curr     : the current value of array
 * @param the secound parameter of reduce -optional- used as the initial val of acc
*/

[2].reduce((acc, curr)=>{ console.log(acc + curr)}) //? nothing : no error or output => when array contains only one val reduce will return it  so our function - first param- wont be invoked

const redVal = [2].reduce((acc,curr) => { console.log(acc + curr)});
console.log(redVal); //? The output will be 2 


/*******************************************************
/*******************************************************
 ** we can use reduce method to flatten array of objects  
 *******************************************************
 *******************************************************/

 const arrayOfObj = [
    {key:'one',   val: 1},
    {key:'two',   val: 2},
    {key:'three', val: 3},
    {key:'four',  val: 4},
    {key:'five',  val: 5},
 ]

const flattenArrayOfObj = arrayOfObj.reduce((obj, curr) => {
    obj[curr.key] = curr.val 
    return obj
},{})

console.log(flattenArrayOfObj); //? output: single object contains all objects keys and vals

/*******************************************************
/*******************************************************
 ** we can use reduce method to get unique values  
 *******************************************************
 *******************************************************/

const arr = [1,2,1,4,5,8,7,7,6,5,2,10];

const uniqueValsArray = arr.reduce((acc,curr) => {
    if (acc.indexOf(curr) === -1) {
        acc.push(curr);
    }
    return acc;
}, []);

console.log(uniqueValsArray); // Output : [ 1, 2, 4, 5, 8, 7, 6, 10 ]
