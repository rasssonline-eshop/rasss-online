export const USD_TO_PKR = 278;

export const toPKR = (usd: number) => Math.round(usd * USD_TO_PKR);

export const formatPKR = (amount: number) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);

export const formatUSDToPKR = (usd: number) => formatPKR(toPKR(usd));