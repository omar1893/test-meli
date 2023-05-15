export const listFormatter = (data: any) => {
    const listData: any = {}
    listData.author = {
        name: "Omar",
        lastname: "López",
    };
    
    listData.categories = data.filters.length ? data.filters[0].values[0].path_from_root.map((category: any) => category.name) : [];
    listData.items = data.results.map((item: any) => {
        return {
            id: item.id,
            title: item.title,
            price: {
                currency: item.currency_id,
                amount: item.price,
                decimals: 0,
            },
            picture: item.thumbnail,
            condition: item.condition,
            free_shipping: item.shipping.free_shipping,
            address: item.address.state_name,
        };
    });
    return listData;
}