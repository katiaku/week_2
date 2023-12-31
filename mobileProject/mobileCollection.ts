import { Mobile } from "./mobile";

export class MobileCollection {

    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
        this.totalPrice = this.totalPriceCalculation();
    }

    private totalPriceCalculation(): number {
        let accumulator: number = 0;
        for (let mobile of this.mobiles) {
            accumulator += mobile.getPrice();
        }
        return accumulator;
    }

    public getMobiles(): Mobile[] {
        return this.mobiles;
    }

    public setMobiles(mobiles: Mobile[]): void {
        this.mobiles = mobiles;
    }

    public getTotalPrice(): number {
        return this.totalPrice;
    }

    public setTotalPrice(totalPrice: number): void {
        this.totalPrice = totalPrice;
    }

    public printCollection(): string {
        let arrMobiles: string[] = [];
        for (let mobile of this.mobiles) {
            arrMobiles.push(mobile.printData());
        }
        return "This is all my mobiles:\n" 
            + arrMobiles.toString().replace(",", "\n")
            + "\n......\nPrice overall: "
            + this.getTotalPrice();
    }

}
