export const detailFormatter = (item: any, description: any) => {
    const itemDetail: any = {}
    itemDetail.author = {
        name: "Omar",
        lastname: "López",
    }
    
    itemDetail.item = {
        id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 0,
            },
            picture: item.pictures[0].url,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.seller_address?.state_name,
            sold_quantity: item.sold_quantity,
            description: description.plain_text
    }
    return itemDetail
}