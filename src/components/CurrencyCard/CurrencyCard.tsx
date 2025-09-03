"use client";

import { usecurrencyStore } from "@/store/exchange";
import { ChangeEvent, useEffect, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { INavasanResponse } from "../ConvertSection/ConvertSection";
import { formatCurrency } from "../../utils/formatCurrency";

interface ICurrencyCard {
  currency: string;
  index: number;
  data: INavasanResponse
}

interface ICurrencyInfo {
  title: string;
  symbol: string;
}


function CurrencyCard({ currency  , index ,  data}: ICurrencyCard) {
  
  const currencyStore = usecurrencyStore();

  const [currencyInfo, setCurrencyInfo] = useState<ICurrencyInfo>();

  useEffect(()=>{
    
    setCurrencyInfo(currency === "US" ?
       {symbol: "USD" , title: "دلار آمریکا"} 
       :
       {symbol: "IRR" , title: "ریال ایران"})

  },[data])


  const valueInp = (e: ChangeEvent<HTMLInputElement>) => {
    const num = Number(e.target.value);

    currencyStore.setCurrency(num);
    
    const rate = Number(data.usd_buy.value) * 10;  // برای تبدیل تومان به ریال
    
    if (!isNaN(rate)) {
      if (currency === "IR") {
        // دلار به ریال
        currencyStore.convert(rate, true);
      } else {
        // ریال به دلار
        currencyStore.convert(rate, false);
      }
    }
  };



  return (
    <div className={`glass-card w-full h-full flex gap-5 flex-col p-3 ${index < 1  && "z-4"}`}>

      
      <div className="h-1/3 w-full  flex items-center justify-between  rounded-ful">
        <h2 className="fa-bold text-md px-3">
          {currencyInfo?.title} | {currencyInfo?.symbol}
        </h2>
        <div className="h-full aspect-square  flex justify-center items-center rounded-full overflow-hidden select-none">
          <ReactCountryFlag
            countryCode={currency}
            svg
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <div
        className="h-2/3  w-full border-t-2 felx flex-col items-end justify-center border-neutral-600 "
        dir="ltr"
      >

        <p className="h-1/2 w-full flex justify-between text-gray-300 items-center  text-lg px-3">
          {
            currency !== "IR" && (
              <>
                <span>{formatCurrency(data.usd_buy.change * 10 , "IR")}</span>
                <span>تغییر</span>
              </>
            )
          }
        </p>

        {
          index === 0 && (
            <input
              type="number"
              placeholder={`مقدار را وارد کنید ${currency === "IR" ? "(ریال)" : "(دلار)"}`}
              className="w-full h-1/2   rounded-full outline-0  text-center"
              onChange={valueInp}
              
              onKeyDown={(e) => {
                  if (e.key === "-" || e.key === "e") { 
                    e.preventDefault();
                  }
              }}
              
            />
          )
        }
      </div>

    </div>
  );
}

export default CurrencyCard;




