function hasEven(myNums) {
    var existe = false;
    var i = 0;
    while (i < myNums.length) {
        if (myNums[i] % 2 === 0) {
            existe = true;
            break;
        }
        i++;
    }
    return existe;
}
//console.log(hasEven([7, 3, 5, 6]));
function startWithM(myNames) {
    var result = false;
    var todosM = [];
    var i = 0;
    while (i < myNames.length) {
        var esteM = false;
        if (myNames[i].charAt(0) === "M") {
            esteM = true;
            todosM.push(esteM);
        }
        else {
            esteM = false;
            todosM.push(esteM);
        }
        i++;
    }
    var j = 0;
    while (j < todosM.length) {
        if (todosM.includes(false)) {
            result = false;
        }
        else {
            result = true;
        }
        j++;
    }
    return result;
}
console.log(startWithM(["María", "Manuel", "Miguel"]));
