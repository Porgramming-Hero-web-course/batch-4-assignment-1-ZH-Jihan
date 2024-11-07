
function sumArray1( array: number[]) : number {
    const plusNumber = array.reduce((sumnumber,key)=> sumnumber + key)
    return plusNumber;
}

const resultSumArray1 = sumArray1([1, 2, 3, 4, 5])

console.log(resultSumArray1);
