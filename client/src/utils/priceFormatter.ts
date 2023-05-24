export const priceFormatter = (price: number, currency: string) => {
  const numericPrice = price;
  if (isNaN(numericPrice)) {
    return '';
  }

  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currency,
  }).format(numericPrice);

  return formattedPrice;
};