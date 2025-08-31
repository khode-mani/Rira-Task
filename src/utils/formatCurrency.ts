export const formatCurrency = (
  value: number,
  currency: string,
  showUnit: boolean = true
) => {
  if (currency === "IR") {
    return new Intl.NumberFormat("fa-IR", {
      style: showUnit ? "currency" : "decimal",
      currency: "IRR",
      maximumFractionDigits: 0,
    }).format(value);
  } else {
    return new Intl.NumberFormat("en-US", {
      style: showUnit ? "currency" : "decimal",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(value);
  }
};
