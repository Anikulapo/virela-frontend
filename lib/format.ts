const naira = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
})

export function formatPrice(amount: number): string {
  return naira.format(amount)
}
