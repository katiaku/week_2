function evenNumbers(num) {
    for (var i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
evenNumbers(10);
function myRevert(myArr) {
    var arrRevertido = [];
    for (var i = myArr.length - 1; i >= 0; i--) {
        arrRevertido.push(myArr[i]);
    }
    return arrRevertido;
}
console.log(myRevert(["javascript", "tupescript", "angular"]));
function isRainbow(colors) {
    var rainbowColors = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "morado"];
    for (var i = 0; i < colors.length; i++) {
        if (rainbowColors.includes(colors[i])) {
            console.log("".concat(colors[i], " est\u00E1 en el arco\u00EDris"));
        }
        else {
            console.log("".concat(colors[i], " no est\u00E1 en el arco\u00EDris"));
        }
    }
}
isRainbow(["morado", "naranja", "negro", "amarillo"]);
function add(myWords) {
    var result = 0;
    for (var i = 0; i < myWords.length; i++) {
        result += myWords[i].length;
    }
    return result;
}
console.log(add(["morado", "naranja", "negro", "amarillo"]));
