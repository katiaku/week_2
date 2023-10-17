class Vector {
    constructor(n, m) {
            let vector = [];
            for (let i = 0; i < n; i++) {
                vector.push(Math.floor(Math.random() * (m + 1)))
            }
            this.vector = vector
    }

    add(a) {
        let resultado = [];
        if (a.length === this.vector.length) {
            a.map((value, index) => resultado.push(value + this.vector[index]));
            return resultado
        } else {
            return "Los vectores deben tener el mismo número de elementos"
        }
    }

    productNum(n) {
        let resultado = []
        for (let i = 0; i < this.vector.length; i++) {
            resultado[i] = this.vector[i] * n
        }
        return resultado
    }

    subs(a) {
        let resultado = [];
        if (a.length === this.vector.length) {
            for (let i = 0; i < a.length; i++) {
                resultado[i] = a[i] - this.vector[i]
            }
            return resultado
        } else {
            return "Los vectores deben tener el mismo número de elementos"
        }
    }

    product(a) {
        let resultado = [];
        if (a.length === this.vector.length) {
            for (let i = 0; i < a.length; i++) {
                resultado[i] = a[i] * this.vector[i]
            }
            return resultado
        } else {
            return "Los vectores deben tener el mismo número de elementos"
        }
    }
}

module.exports = { Vector }
