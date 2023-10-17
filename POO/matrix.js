class Matrix {
    constructor(n, m, k) {
        let matrix = [];
        for (let i = 0; i < n; i++) {
            matrix[i] = [];
            for (let j = 0; j < m; j++) {
                matrix[i][j] = Math.floor(Math.random() * (k + 1));
            }
        }
        this.matrix = matrix
    }

    add(m) {
        let resultado = [];
        if (m.length === this.matrix.length) {
            for (let i = 0; i < m.length; i++) {
                resultado[i] = [];
                if (m[i].length === this.matrix[i].length) {
                    for (let j = 0; j < m[i].length; j++) {
                        resultado[i][j] = m[i][j] + this.matrix[i][j]
                    }
                }
            }
            return resultado
        } else {
            return "Las matrices deben tener el mismo número de elementos"
        }
    }

    productNum(n) {
        let resultado = []
        for (let i = 0; i < this.matrix.length; i++) {
            resultado[i] = [];
            for (let j = 0; j < this.matrix[i].length; j++) {
                resultado[i][j] = this.matrix[i][j] * n
            }
        }
        return resultado
    }

    subs(m) {
        let resultado = [];
        if (m.length === this.matrix.length) {
            for (let i = 0; i < m.length; i++) {
                resultado[i] = [];
                if (m[i].length === this.matrix[i].length) {
                    for (let j = 0; j < m[i].length; j++) {
                        resultado[i][j] = m[i][j] - this.matrix[i][j]
                    }
                }
            }
            return resultado
        } else {
            return "Las matrices deben tener el mismo número de elementos"
        }
    }

    product(a) {
        let resultado = [];
        if (a.length === this.matrix.length) {
            for (let i = 0; i < a.length; i++) {
                resultado[i] = [];
                if (a[i].length === this.matrix[i].length) {
                    for (let j = 0; j < a[i].length; j++) {
                        resultado[i][j] = a[i][j] * this.matrix[i][j]
                    }
                }
            }
            return resultado
        } else {
            return "Las matrices deben tener el mismo número de elementos"
        }
    }
}

module.exports = { Matrix }
