export const priceFormatter = (price: number, currency: string) => {
    const numericPrice = price;
  if (isNaN(numericPrice)) {
    return '';
  }

  const formattedPrice = numericPrice.toLocaleString(undefined, {
    style: 'currency',
    currency: currency,
  });
  
  return formattedPrice;
}