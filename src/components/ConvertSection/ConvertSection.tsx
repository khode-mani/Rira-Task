"use client"

import { usecurrencyStore } from "@/store/exchange"
import { useEffect, useState } from "react"
import CurrencyCard from "../CurrencyCard/CurrencyCard"
import { formatCurrency } from "../../utils/formatCurrency"
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner"
import { TbSwitchHorizontal } from "react-icons/tb"

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

  const [currencies, setCurrencies] = useState< Array<"US" | "IR"> >(["US", "IR"])

  const [data, setData] = useState<INavasanResponse | null >(null)

  const [error, setError] = useState<boolean>(false)

  const swapCurrencies = () => {
    setCurrencies([...currencies].reverse()) 
  }

  useEffect(()=>{
    fetch("https://api.navasan.tech/latest/?api_key=freePXahjoaBHaYCFOJxG2uvRn21DHvD")
    .then(res=> res.json())
    .then(data => setData(data))
    .catch(error => setError(true))
  },[])



  if (error && !data) {
    return(
      <div className="h-100 w-full flex justify-center items-center">
        <h2 className="text-red-700 text-3xl fa-bold">خطای دریافت اطلاعات از سرور</h2>
      </div>
    )
  }

  if (!data && !error) {
    return (
      <div className="h-100 w-full flex justify-center items-center">
        <LoadingSpinner/>
      </div>
    )
  }


  

  return (
    <div className="h-250 lg:h-70 w-full  flex flex-col lg:flex-row justify-center items-center gap-20">

        <div className='flex flex-col lg:flex-row items-center justify-center gap-10 lg:w-1/2 w-5/6 max-w-100 lg:max-w-full lg:h-full h-1/2 relative'>

          {data && currencies.map((c , index) => (
            <CurrencyCard key={c} currency={c} index={index} data={data}/>
            ))}



          <button 
            onClick={swapCurrencies} 
            className='w-15 h-15 bg-yellow rounded-full flex justify-center items-center absolute hover:w-25 transition-all duration-300 text-3xl cursor-pointer'
          >
           <TbSwitchHorizontal />
          </button>
        </div>

        <div className='w-3/4 lg:w-1/2 h-1/2 lg:h-full glass-card flex flex-col justify-evenly items-center text-lg divide-y-2 divide-neutral-600 p-4'>
         
            <div className="h-1/2 w-full flex flex-col lg:flex-row lg:justify-between justify-evenly items-center lg:text-start text-center">
                
                <span className="lg:w-1/4 ">مقدار تبدیل شده:</span> 

                <div className="lg:w-3/4 w-full flex flex-col">
                  
                  <p className=" fa-bold text-3xl color-yellow  truncate" dir="ltr">{formatCurrency(curr.converted , currencies[1])}</p>

                  {
                    currencies[1] === "IR" && <p className="text-gray-400 flex lg:justify-end justify-center gap-1 w-full truncate ">معادل : <span> {formatCurrency(curr.converted / 10 , currencies[1] , false)} </span> تومان</p>
                  }

                </div>
            </div>
        
            <div className="flex flex-col lg:flex-row h-1/2 w-full  lg:divide-x-2 lg:divide-y-0 divide-y-2 divide-neutral-600 py-5">

                <p className=" w-full lg:w-1/2 h-1/2 lg:h-full  flex flex-col lg:flex-row justify-between items-center p-2 text-center lg:text-start">
                    <span className="lg:w-2/5 w-full text-nowrap">مقدار ورودی:</span> 
                    <span className="lg:w-3/5 w-full truncate " dir="ltr">{formatCurrency(curr.currency , currencies[0])}</span>
                </p>

                <p className="w-full lg:w-1/2 h-1/2 lg:h-full  flex flex-col lg:flex-row justify-between  items-center p-2">
                    <span className="text-nowrap ">آخرین بروز رسانی :</span> 
                    <span className="text-end">{data?.usd_buy.date}</span>
                </p>
                
            </div>

        </div>
    </div>
  )
}

export default ConvertSection
