export {};

function permuteValues(a: number, b: number): number[]{
    if (a <= b) {
        let orderedList: number[] = [a, b];
        return orderedList
    }
    let orderedList: number[] = [b, a];
    return orderedList
};

function bubbleSort(numberList: number[]): number[]{
    let orderedList: number[] = numberList;
    for (var i = 0; i < numberList.length; i++){
        for (var j = i; j < numberList.length; j++) {
            [orderedList[i], orderedList[j]] = permuteValues(orderedList[i], orderedList[j])
        }
    }
    return orderedList
};

let sampleList: number[] = [3, 3, 2, 4, 1, 1000, -20.5];
console.log(bubbleSort(sampleList))
