function selectionSorting(numberList: number[]): number[]{
    let orderedList: number[] = numberList;
    for (var i = 0; i < orderedList.length; i++){
        let tmp: number = numberList[i];
        let id_: number = i;
        for (var j = i + 1; j < orderedList.length; j++){
            if (numberList[j] < tmp) {
                tmp = orderedList[j];
                id_ = j;
            }
        }
        orderedList[id_] = orderedList[i];
        orderedList[i] = tmp;
    }
    return orderedList
};

let originalList: number[] = [1, 22, -3, 0, 8];
console.log(selectionSorting(originalList));
