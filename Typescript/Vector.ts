export class Vector {

    private elements: number[];

    constructor(n: number, k: number) {
        let elements: number[] = [];
        for (let i = 0; i < n; i++) {
            elements.push(Math.floor(Math.random() * (k + 1)))
        }
        this.elements = elements
    }

    public print(): number[] {
        return this.elements;
    }

    public add(v1: number[]): number[] {
        let resultado: number[] = [];
        this.elements.map((value, index) => resultado.push(value + v1[index]));
        return resultado;
    }

    subs(v1: number[]): number[] {
        let resultado: number[] = [];
        this.elements.map((value, index) => resultado.push(value - v1[index]));
        return resultado;
    }

    mult(v1: number[]): number[] {
        let resultado: number[] = [];
        this.elements.map((value, index) => resultado.push(value * v1[index]));
        return resultado;
    }

    public multNumber(n: number): number[] {
        let resultado: number[] = []
        for (let i = 0; i < this.elements.length; i++) {
            resultado[i] = this.elements[i] * n
        }
        return resultado
    }

}
