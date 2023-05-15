export const priceFormatter = (price: string, currency: string) => {
    const numericPrice = parseFloat(price);
  if (isNaN(numericPrice)) {
    return '';
  }

  const formattedPrice = numericPrice.toLocaleString(undefined, {
    style: 'currency',
    currency: currency,
  });

  return formattedPrice;
}