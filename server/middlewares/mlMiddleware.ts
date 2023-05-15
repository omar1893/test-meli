import axios from "axios";

export const getItemsList = async (query: string) => {
  const itemListEndpoint = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&&limit=4`;
  try {
    return await axios.get(itemListEndpoint);
  } catch (error) {
    return error;
  }
};

export const getItemsDetails = async (itemId: string) => {
    const itemEndpoint = `https://api.mercadolibre.com/items/${itemId}`;
    const descriptionEndpoint = `https://api.mercadolibre.com/items/${itemId}/description`;
  
    try {
      const [itemResponse, descriptionResponse] = await Promise.all([
        axios.get(itemEndpoint),
        axios.get(descriptionEndpoint)
      ]);
      
      const itemData = itemResponse.data;
      const descriptionData = descriptionResponse.data;
  
      const itemDetails = {
        item: itemData,
        description: descriptionData
      };
  
      return itemDetails;
    } catch (error) {
      throw new Error('Error al obtener los detalles del item');
    }
  };
