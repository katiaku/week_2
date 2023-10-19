function zodiac(day: number, month: number): string {
    let signoZodiacal: string = "";

    if ((day >= 21 && month === 3) || (day <= 19 && month === 4)) {
        signoZodiacal = "Aries"
    } else if ((day >= 20 && month === 4) || (day <= 20 && month === 5)) {
        signoZodiacal = "Tauro"
    } else if ((day >= 21 && month === 5) || (day <= 20 && month === 6)) {
        signoZodiacal = "Géminis"
    } else if ((day >= 21 && month === 6) || (day <= 22 && month === 7)) {
        signoZodiacal = "Cáncer"
    } else if ((day >= 23 && month === 7) || (day <= 22 && month === 8)) {
        signoZodiacal = "Leo"
    } else if ((day >= 23 && month === 8) || (day <= 22 && month === 9)) {
        signoZodiacal = "Virgo"
    } else if ((day >= 23 && month === 9) || (day <= 22 && month === 10)) {
        signoZodiacal = "Libra"
    } else if ((day >= 23 && month === 10) || (day <= 21 && month === 11)) {
        signoZodiacal = "Escorpio"
    } else if ((day >= 22 && month === 11) || (day <= 21 && month === 12)) {
        signoZodiacal = "Sagitario"
    } else if ((day >= 22 && month === 12) || (day <= 19 && month === 1)) {
        signoZodiacal = "Capricornio"
    } else if ((day >= 20 && month === 1) || (day <= 18 && month === 2)) {
        signoZodiacal = "Acuario"
    } else if ((day >= 19 && month === 2) || (day <= 20 && month === 3)) {
        signoZodiacal = "Piscis"
    }

    return signoZodiacal;
}

console.log(zodiac(10, 5));

function continent(country: string) {
    let paisesAsia: string[] = ["Japón", "China", "Tailandia", "Singapur", "Malasia"];
    let paisesAfrica: string[] = ["Kenia", "Madagascar", "Marruecos", "Ruanda", "Somalia"];
    let paisesAmericaNorte: string[] = ["Estados Unidos", "Canadá", "México", "Cuba", "Jamaica"];
    let paisesAmericaSur: string[] = ["Chile", "Brasil", "Argentina", "Colombia", "Peru"];
    let paisesEuropa: string[] = ["España", "Francia", "Alemania", "Italia", "Bélgica"];
    let paisesOceania: string[] = ["Australia", "Fiji", "Nueva Zelanda", "Samoa", "Papúa Nueva Guinea"];

    if (paisesAsia.includes(country)) {
        console.log("Asia");
    } else if (paisesAfrica.includes(country)) {
        console.log("África");
    } else if (paisesAmericaNorte.includes(country)) {
        console.log("América del Norte");
    } else if (paisesAmericaSur.includes(country)) {
        console.log("América del Sur");
    } else if (paisesEuropa.includes(country)) {
        console.log("Europa");
    } else if (paisesOceania.includes(country)) {
        console.log("Oceanía");
    }
}

continent("Canadá");

function isEven(number: number): boolean {
    let result: boolean = false;

    if (number % 2 === 0) {
        result = true;
        console.log("El numero es par");
    } else {
        result = false;
        console.log("El numero es impar");
    }

    return result;
}

isEven(5);
