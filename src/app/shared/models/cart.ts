import { CartItem } from "./cartItem";

export class Cart{
    items: CartItem[] = [];

    get total(): number {
        let total = 0;
        this.items.forEach(item => total += item.price);
        return total;
    }
}
