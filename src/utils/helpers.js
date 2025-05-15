export function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    style: "currency",
    currency: "USD",
  }).format(price);
}
