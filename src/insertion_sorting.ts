export { };

let sampleList: string[] = ['inspector', 'bob', 'eve', 'let', 'alice', 'stephen', 'steve', 'klay', 'andre', 'let', 'key', 'string', 'algo', 'ab', 'mas'];

function exchangeItems(list: string[], id1: number, id2: number): string[]{
    var t = list[id1];
    list[id1] = list[id2];
    list[id2] = t;
    return list
}
function insertionSorting(list: string[]): string[] {
    let N: number = list.length;
    for (var i = 1; i < N; i++){
        for (var j = i; j > 0; j--){
            if (list[j - 1] > list[j]) {
                exchangeItems(list, j - 1, j);
            }
        }
    }
    return list
};

console.log(insertionSorting(sampleList));
