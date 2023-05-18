interface Price {
    currency: string;
    amount: number;
    decimal: number;
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
    address: string;
}

export interface Author {
    name: string;
    lastname: string;
}

export interface ListItemProps {
    author: Author;
    item: ItemInfo;
}

/* export interface ListItem extends Item {
    categories: string[];
} */

export interface BreadcrumbsProps {
    categories: string[];
}

