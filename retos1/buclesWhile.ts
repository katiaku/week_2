function hasEven(myNums: number[]): boolean {
    let existe: boolean = false;
    let i: number = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            existe = true;
            break
        }
        i++;
    }
    return existe;
}

function startWithM(myNames: string[]): boolean {
    let result: boolean = false;
    let todosM: boolean[] = [];
    let i: number = 0;
    while (i < myNames.length) {
        let esteM: boolean = false;
        if (myNames[i].charAt(0) === "M") {
            esteM = true;
            todosM.push(esteM);
        } else {
            esteM = false;
            todosM.push(esteM);
        }
        i++;
    }
    let j: number = 0;
    while (j < todosM.length) {
        if (todosM.includes(false)) {
            result = false;
        } else {
            result = true;
        }
        j++;
    }
    return result;
}
