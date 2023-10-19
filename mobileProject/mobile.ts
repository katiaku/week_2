export class Mobile {

    private name: string;
    private trademark: string;
    private model: string;
    private color: string;
    private price: number;

    constructor(name: string, trademark: string, model: string, color: string, price: number) {
        this.name = name;
        this.trademark = trademark;
        this.model = model;
        this.color = color;
        this.price = price;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getTrademark(): string {
        return this.trademark;
    }

    public setTrademark(trademark: string): void {
        this.trademark = trademark;
    }

    public getModel(): string {
        return this.model;
    }

    public setModel(model: string): void {
        this.model = model;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public getPrice(): number {
        return this.price;
    }

    public setPrice(price: number): void {
        this.price = price;
    }

    public printData(): string {
        return `The characteristics of the mobile ${this.name} are:
\u00B7 Name: ${this.name}
\u00B7 Trademark: ${this.trademark}
\u00B7 Model: ${this.model}
\u00B7 Color: ${this.color}
\u00B7 Price: ${this.price}`;
    }

}
