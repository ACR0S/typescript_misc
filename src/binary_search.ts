export {};

function sortList(list: string[]): string[]{
    return list.sort();
}

function getSublist(sortedList: string[], key: string, pivotIndex: number): object{
    let newList: string[];
    let index: number;
    if (sortedList[pivotIndex] > key) {
        newList = sortedList.slice(0, pivotIndex);
        index = 0;
    } else {
        newList = sortedList.slice(pivotIndex + 1, sortedList.length);
        index = pivotIndex;
    }
    return {newList, index};
}

function binarySearch(list: string[], key: string):object{
//Array<{ isIn: boolean, index: number }>{
    let sortedList: string[] = sortList(list);
    console.log(sortedList);
    let index: number = 0;
    let listAndIndex: object;
    while (sortedList.length > 1) {
        let pivotIndex = Math.floor(sortedList.length / 2);
        if (key == sortedList[pivotIndex]) {
            index += pivotIndex;
            return [{ isIn: true, index: index}];
        };
        listAndIndex = getSublist(sortedList, key, pivotIndex);
        sortedList = listAndIndex["newList"];
        index += listAndIndex["index"];
    }
    return { isIn: key==sortedList[0], index};
}

let sampleList: string[] = ['bob', 'eve', 'alice', 'inspector', 'stephen', 'steve', 'klay', 'andre', 'let', 'key', 'string', 'algo', 'ab', 'mas'];
let key: string = 'andre';
var tBase = new Date().getTime();
let result: object = binarySearch(sampleList, key);
var tEnd = new Date().getTime();
let weGotIt: boolean = result["isIn"];
let position: number = result["index"];

if (weGotIt) {
    console.log(`${key} was found at positon ${position + 1} --> Elapsed time: ${tEnd - tBase} ms`);
}
else {
    console.log(`${key} was not found! --> Elapsed time: ${tEnd - tBase} ms`);
}
