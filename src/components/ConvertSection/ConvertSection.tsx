"use client"

import { usecurrencyStore } from "@/store/exchange"
import { useEffect, useState } from "react"
import CurrencyCard from "../CurrencyCard/CurrencyCard"
import { formatCurrency } from "../../../utils/formatCurrency"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"

interface ICurrencyData {
  value: string; 
  change: number; 
  date: string; 
}

export interface INavasanResponse {
  usd_buy: ICurrencyData;
}




function ConvertSection() {




  const curr = usecurrencyStore()

  const [currencies, setCurrencies] = useState(["US", "IR"])

  const [data, setData] = useState<INavasanResponse | null >(null)

  const swapCurrencies = () => {
    setCurrencies([...currencies].reverse()) 
  }

  useEffect(()=>{
    fetch("https://api.navasan.tech/latest/?api_key=freePXahjoaBHaYCFOJxG2uvRn21DHvD")
    .then(res=> res.json())
    .then(data => setData(data))
  },[])



  if (!data) {
    return (
      <div className="h-100 w-full flex justify-center items-center">
        <LoadingSpinner/>
      </div>
    )
  }


  

  return (
    <div className="h-70 w-full  flex gap-20">
        <div className='flex items-center justify-center gap-10 w-1/2 h-full relative'>

          {data && currencies.map((c , index) => (
            <CurrencyCard key={c} currency={c} index={index} data={data}/>
            ))}



          <button 
            onClick={swapCurrencies} 
            className='w-15 h-15 bg-yellow rounded-full flex justify-center items-center absolute hover:w-25 transition-all duration-300 text-3xl cursor-pointer'>
            ⇄
          </button>
        </div>

        <div className='w-1/2 h-full glass-card flex flex-col justify-evenly items-center text-lg divide-y-2 divide-neutral-600 p-4'>
         
            <div className="h-1/2 w-full flex justify-between items-center">
                
                <span className="w-1/4 ">مقدار تبدیل شده:</span> 

                <div className="w-3/4 flex flex-col">
                  
                  <p className=" fa-bold text-3xl color-yellow  truncate" dir="ltr">{formatCurrency(curr.converted , currencies[1])}</p>

                  {
                    currencies[1] === "IR" && <p className="text-gray-400 flex justify-end gap-1">معادل : <span> {formatCurrency(curr.converted / 10 , currencies[1] , false)} </span> تومان</p>
                  }

                </div>
            </div>
        
            <div className="flex h-1/2 w-full  divide-x-2 divide-neutral-600 py-5">

                <p className=" w-1/2  flex justify-between items-center px-2">
                    <span className="w-2/5 text-nowrap">مقدار ورودی:</span> 
                    <span className="w-3/5 truncate " dir="ltr">{formatCurrency(curr.currency , currencies[0])}</span>
                </p>

                <p className=" w-1/2  flex justify-between  items-center px-2">
                    <span className="text-nowrap ">آخرین بروز رسانی :</span> 
                    <span className="text-end">{data?.usd_buy.date}</span>
                </p>
                
            </div>

        </div>
    </div>
  )
}

export default ConvertSection
