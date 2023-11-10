import React from 'react';
import SettingIcon from "@/styles/icons/setting.svg"
import ArrowUpDown from "@/styles/icons/up-down.svg"
import ArrowDown from "@/styles/icons/arrow-down.svg"
import ETHIcon from "@/styles/icons/ETH.svg"
import Image from "next/image";

function Swap() {
    return (
        <section className="flex w-full justify-center p-10 border">
            <div className="w-[375px] p-3 min-h-[415px] shadow shadow-gray-900 bg-gray-900 rounded-xl ">

                <div className="w-full p-1 flex items-center justify-between">
                    <div className="w-1/3"></div>
                    <div className="w-1/3 text-center text-xl font-bold">swap</div>
                    <button className="btn w-1/3 bg-transparent hover:bg-transparent flex justify-end border-0">
                        <Image src={SettingIcon} alt={"setting"}/>
                    </button>
                </div>
                <div className="p-2 w-full flex items-center flex-wrap">
                    <div className="w-full">Swap from</div>
                    <div className="w-1/2 flex flex-wrap">
                        <h4 className="font-bold my-2 w-full text-xl">0</h4>
                        <div className="text-gray-600 w-full">Balance: 70.42</div>
                    </div>
                    <div className="w-1/2 flex flex-wrap items-center pb-4 justify-center">
                        <Image src={ETHIcon} alt={"icon"}/>
                        <select className="select border-0 bg-gray-900  max-w-xs w-2/3">
                            <option disabled selected>Dark mode or light mode?</option>
                            <option>Auto</option>
                            <option>Dark mode</option>
                            <option>Light mode</option>
                        </select>
                    </div>
                </div>
                <div className="relative w-full border-b border-gray-600 my-8">
                    <Image src={ArrowUpDown} alt={"swap"} className="absolute right-2 btn p-3 w-auto  rounded-full -top-6" />
                </div>
                <div className="p-2 w-full flex items-center flex-wrap">
                    <div className="w-full">Swap To</div>
                    <div className="w-1/2 flex flex-wrap">
                        <h4 className="font-bold my-2 w-full text-xl">0</h4>
                        <div className="text-gray-600 w-full">Balance: 70.42</div>
                    </div>
                    <div className="w-1/2 flex flex-wrap items-center pb-4 justify-center">
                       <button className="bg-custom btn text-white capitalize flex text-center rounded-full w-auto p-3">
                            Select a Token
                           <Image src={ArrowDown} alt={"select token"} />
                       </button>
                    </div>
                </div>
                <div className="w-full p-2 mt-5">
                    <button disabled className="btn w-full rounded-full  disabled:text-gray-600  text-white capitalize ">
                        Enter an Amount
                    </button>
                </div>

            </div>
        </section>
    );
}

export default Swap;