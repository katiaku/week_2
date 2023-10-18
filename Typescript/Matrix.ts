import { Vector } from "./Vector";

export class Matrix {

    private elements: Vector[];

    constructor(n: number, m: number, k: number) {
        let elements: Vector[] = [];
        for (let i = 0; i < n; i++) {
            elements[i] = new Vector(m, k);
        }
        this.elements = elements
    }

    public print(): Vector[] {
        return this.elements;
    }

    public getElements(): Vector[] {
        return this.elements;
    }

    public add(m1: Matrix): Matrix {
        let resultado: Matrix = new Matrix(0, 0, 0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado[i] = [];
            let vector: number[] = this.elements[i].getElements();
            let vector2: number[] = m1.getElements()[i].getElements();
            for (let j = 0; j < vector.length; j++) {
                resultado[i][j] = vector[j] + vector2[j];
            }
        }
        return resultado
    }

    public multNumber(n: number): Matrix {
        let resultado: Matrix = new Matrix(0, 0, 0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado[i] = [];
            let vector: number[] = this.elements[i].getElements();
            for (let j = 0; j < vector.length; j++) {
                resultado[i][j] = vector[j] * n
            }
        }
        return resultado
    }

    public multSpecial(n: number): Matrix {
        let resultado: Matrix = new Matrix(0, 0, 0);
        for (let i = 0; i < this.elements.length; i++) {
            resultado[i] = [];
            let vector: number[] = this.elements[i].getElements();
            for (let j = 0; j < vector.length; j++) {
                if (vector[j] % 2 === 0) {
                    resultado[i][j] = vector[j] * n
                } else {
                    resultado[i][j] = vector[j] * (n - 1)
                }
            }
        }
        return resultado
    }

}
