function evenNumbers(num: number): void {
    for (let i = 0; i <= num; i++) {
        if (i % 2 !== 0) {
            console.log(i)
        }
    }
}

function myRevert(myArr: string[]): string[] {
    let arrRevertido: string[] = [];
    for (let i = myArr.length - 1; i >= 0; i--) {
        arrRevertido.push(myArr[i]);
    }
    return arrRevertido;
}

function isRainbow(colors: string[]): void {
    let rainbowColors: string[] = ["rojo", "naranja", "amarillo", "verde", "cian", "azul", "morado"];
    for (let i = 0; i < colors.length; i++) {
        if (rainbowColors.includes(colors[i])) {
            console.log(`${colors[i]} está en el arcoíris`);
        } else {
            console.log(`${colors[i]} no está en el arcoíris`);
        }
    }
}

function add(myWords: string[]): number {
    let result: number = 0;
    for (let i = 0; i < myWords.length; i++) {
        result += myWords[i].length;
    }
    return result;
}

module.exports = {add};
