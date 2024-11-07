

function removeDuplicates (array: number[]) : number[] {
    let uniqueNumber : number[] = [];

    //method 1 Using Set funtion
    uniqueNumber = [... new Set(array)]

    //method 2 Using indexOf funtion
    uniqueNumber = array.filter((el,index)=> array.indexOf(el) === index)

    return uniqueNumber;
}

const result = removeDuplicates([1, 2, 2, 3, 4, 4, 5])
console.log(result);
