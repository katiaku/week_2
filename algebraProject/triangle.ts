import { Point } from "./point";

export class Triangle {

    private vertex1: Point;
    private vertex2: Point;
    private vertex3: Point;

    constructor(vertex1: Point, vertex2: Point, vertex3: Point) {
        this.vertex1 = vertex1;
        this.vertex2 = vertex2;
        this.vertex3 = vertex3;
    }

    public calculateLengthSides(): number[] {
        let side1: number = this.vertex1.calculateDistance(this.vertex2);
        let side2: number = this.vertex2.calculateDistance(this.vertex3);
        let side3: number = this.vertex3.calculateDistance(this.vertex1);
        let result: number[] = [];
        result.push(side1);
        result.push(side2);
        result.push(side3);
        return result;
    }

}
