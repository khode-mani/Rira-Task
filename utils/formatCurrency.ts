export const formatCurrency = (value: number, currency: string) => {
  if (currency === "IR") {
    return new Intl.NumberFormat("fa-IR", {
      style: "currency",
      currency: "IRR",
      maximumFractionDigits: 0, 
    }).format(value)
  } else {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0, 
    }).format(value)
  }
}

