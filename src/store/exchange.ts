import { create } from "zustand";

interface CurrencyStore {
  currency: number;              // مقدار ورودی کاربر
  converted: number;             // مقدار تبدیل شده
  setCurrency: (val: number) => void;
  convert: (rate: number, isToUSD: boolean) => void; 
}

export const usecurrencyStore = create<CurrencyStore>((set) => ({
  currency: 0,
  converted: 0,
  setCurrency: (val) => set({ currency: val }),
  convert: (rate, isToUSD) =>
    set((state) => ({
      converted: isToUSD
        ? state.currency / rate   // ریال → دلار
        : state.currency * rate   // دلار → ریال
    })),
}));


// store/exchanged.ts
// import { create } from "zustand"
// import { CurrencyCode } from "../../utils/formatCurrency"


// interface CurrencyStore {
//   currency: number      // مقدار ورودی
//   converted: number     // مقدار تبدیل‌شده
//   convert: (input: number, rateRialPerUsd: number, from: CurrencyCode) => void
// }

// export const usecurrencyStore = create<CurrencyStore>((set) => ({
//   currency: 0,
//   converted: 0,
//   convert: (input, rate, from) =>
//     set({
//       currency: input,
//       converted: from === "IR" ? input / rate : input * rate,
//     }),
// }))