export class Point {

    private x: number;
    private y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    public getX(): number {
        return this.x;
    }

    public setX(x: number): void {
        this.x = x;
    }

    public getY(): number {
        return this.y;
    }

    public setY(y: number): void {
        this.y = y;
    }

    public toString(): string {
        return `(${this.getX()},${this.getY()})`;
    }

    public distanceToOrigin(): number {
        let distance: number = 0;
        let point0: Point = new Point(0, 0);
        distance = Math.sqrt(Math.pow((point0.getX() - this.getX()), 2) 
            + Math.pow((point0.getY() - this.getY()), 2));
        return distance;
    }

    public calculateDistance(anotherPoint: Point): number {
        let distance: number = 0;
        distance = Math.sqrt(Math.pow((anotherPoint.getX() - this.getX()), 2) 
            + Math.pow((anotherPoint.getY() - this.getY()), 2));
        return distance;
    }

    public calculateQuadrant(): number {
        let cuadrante: number = 0;
        if (this.getX() === 0 && this.getY() === 0) {
            cuadrante = 0;
        } else if (this.getX() > 0 && this.getY() > 0) {
            cuadrante = 1;
        } else if (this.getX() < 0 && this.getY() > 0) {
            cuadrante = 2;
        } else if (this.getX() < 0 && this.getY() < 0) {
            cuadrante = 3;
        } else if (this.getX() > 0 && this.getY() < 0) {
            cuadrante = 4;
        }
        return cuadrante;
    }

    calculateNearest(points: Point[]): Point {
        let actualPoint: Point = new Point(this.getX(), this.getY());
        let shortestDistance: number = actualPoint.calculateDistance(points[0]);
        let nearestPoint: Point = points[0];
        for (let i = 1; i < points.length; i++) {
            let distance = actualPoint.calculateDistance(points[i]);
            if (distance < shortestDistance) {
                shortestDistance = distance;
                nearestPoint = points[i];
            }  
        }
        return nearestPoint;
    }

}
