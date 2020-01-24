function permuteValues(a: number, b: number): number[]{
    if (a <= b) {
        let orderedList: number[] = [a, b];
        return orderedList
    }
    let orderedList: number[] = [b, a];
    return orderedList
};

function pseudoOrderList(numberList: number[], i: number, j: number): number[] {
    [numberList[i], numberList[j]] = permuteValues(numberList[i], numberList[j]);
    return numberList
};

function bubbleSort(numberList: number[]): number[]{
    let orderedList: number[] = numberList;
    for (var i = 0; i < numberList.length; i++){
        for (var j = i; j < numberList.length; j++) {
            orderedList = pseudoOrderList(orderedList, i, j);
        }
    }
    return orderedList
};

let sampleList: number[] = [3, 2, 4, 1];
console.log(bubbleSort(sampleList))
