declare module 'app' {

    interface IShopItem{
        id?: number,
        name: string,
        description: string,
        price: number,
        image: string,
        quantity: number,
        category: "mauritius" | "florence",
    }

    interface ICartItem extends IShopItem{
        quantity: number;
    }

    interface IGuest {
        name: string,
        dinner: boolean,
    }

    interface IRegisterEntry {
        name?: string, 
        guests?: any[],
        note?: string,
    }
}

interface Number {
    toFixedDigit : (nbrOfDigits: number) => string;
}
