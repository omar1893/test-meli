interface Price {
    currency: string;
    amount: number;
    decimal: number;
}

interface Author {
    name: string;
    lastname: string;
}

export interface ItemInfo {
    id: number;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity: number;
    description: string;
}

export interface Item {
    author: Author;
    item: ItemInfo;
}

export interface ListItem extends Item {
    categories: string[];
}

export interface BreadcrumbsProps {
    categories: string[];
}

