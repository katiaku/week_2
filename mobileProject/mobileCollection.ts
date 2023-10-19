import { Mobile } from "./mobile";

export class MobileCollection {

    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(mobiles: Mobile[]) {
        this.mobiles = mobiles;
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

}
