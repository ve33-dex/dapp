import React, {useState} from 'react';
import SettingIcon from "@/styles/icons/setting.svg"
import ArrowUpDown from "@/styles/icons/up-down.svg"
import ArrowDown from "@/styles/icons/arrow-down.svg"
import ETHIcon from "@/styles/icons/ETH.svg"
import Image from "next/image";

function Swap() {

    const [modalState , setModalState] = useState<boolean>(false)

    return (
        <section className="flex w-full justify-center p-10 ">
            <div className="w-[375px] p-3 min-h-[415px] shadow shadow-gray-900 bg-gray-900 rounded-xl ">

                <div className="w-full relative p-1 flex items-center justify-between">
                    <div className="w-1/3"></div>
                    <div className="w-1/3 text-center text-xl font-bold">swap</div>
                    <button onClick={() => modalState ? setModalState(false) : setModalState(true)} className="btn w-1/3 bg-transparent hover:bg-transparent flex justify-end border-0">
                        <Image src={SettingIcon} alt={"setting"}/>
                    </button>
                    {
                        modalState &&  <div className="w-3/4 z-10 flex flex-wrap min-h-full rounded bg-gray-800 absolute top-full right-5  shadow shadow-gray-600 p-2">
                            <div className="w-full font-bold p-1  text-xl text-center">
                                Transaction Setting
                            </div>
                            <div className="w-full flex flex-wrap  mt-5">
                                <div className="w-full p-2 font-bold">
                                    Slippage Tolerance
                                </div>
                                <div className="flex w-full my-2 justify-evenly items-center">
                                    <button className="btn bg-gray-800 m-0 p-0 w-auto px-1.5  ">0.1%</button>
                                    <button className="btn bg-gray-800 m-0 p-0 w-auto px-1.5  ">0.5%</button>
                                    <button className="btn bg-gray-800 m-0 p-0 w-auto px-1.5  ">1%</button>
                                    <input type="text" placeholder="100%" className="input input-bordered input-md w-1/4 max-w-xs px-2" />
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap  mt-5">
                                <div className="w-full p-2 font-bold">
                                    Slippage Deadline
                                </div>
                                <div className="flex w-full my-2 px-2 items-center">
                                    <input type="number" placeholder="20" className="input bg-gray-800 input-bordered input-sm w-1/4 max-w-xs px-2" />
                                    <div className="text-gray-600 mx-1">minutes</div>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap  mt-5">
                                <div className="w-full p-2 font-bold">
                                    Interface Setting
                                </div>
                                <div className="flex flex-wrap w-full my-2 px-2 items-center">
                                    <div className="w-full my-2 flex justify-between items-center">
                                        Toggle Expert Mode
                                        <input type="checkbox" className="toggle toggle-md"  />
                                    </div>
                                    <div className="w-full my-2 flex justify-between items-center">
                                        Disable Multi hops
                                        <input type="checkbox" className="toggle toggle-md"  />
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

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
                       <label htmlFor="my_modal_7" className="bg-custom btn text-white capitalize flex text-center rounded-full w-auto p-3">
                            Select a Token
                           <Image src={ArrowDown} alt={"select token"} />
                       </label>
                    </div>

                </div>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my_modal_7" className="modal-toggle" />
                <div className="modal backdrop-blur-sm">
                    <div className="modal-box bg-slate-900">
                        <h3 className="text-lg font-bold text-center">Select a Token </h3>

                        <div className="flex flex-wrap  mt-5 ">
                            <div className="w-full p-2 flex justify-center">
                                <div className="form-control">
                                    <div className="input-group input-group-lg">
                                        <input type="text" placeholder="Search…" className="input input-bordered" />
                                        <button className="btn btn-square">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex flex-wrap  bg-gray-800 rounded-xl p-2 mt-5">
                                <div className="w-full flex items-center border border-transparent my-3 duration-500 hover:border-primary justify-between  bg-gray-900 rounded-xl p-2 ">
                                    <div className="w-2/12 flex p-1">
                                        <figure className="p-5 rounded-xl border "></figure>
                                    </div>
                                    <div className="p-3 rounded-xl w-7/12">Fardin Token</div>
                                    <div className="p-1 rounded-xl w-3/12">10.1023 FTM</div>
                                </div>
                                <div className="w-full flex items-center border border-transparent my-3 duration-500 hover:border-primary justify-between  bg-gray-900 rounded-xl p-2 ">
                                    <div className="w-2/12 flex p-1">
                                        <figure className="p-5 rounded-xl border "></figure>
                                    </div>
                                    <div className="p-3 rounded-xl w-7/12">Fardin Token</div>
                                    <div className="p-1 rounded-xl w-3/12">10.1023 FTM</div>
                                </div>
                                <div className="w-full flex items-center border border-transparent my-3 duration-500 hover:border-primary justify-between  bg-gray-900 rounded-xl p-2 ">
                                    <div className="w-2/12 flex p-1">
                                        <figure className="p-5 rounded-xl border "></figure>
                                    </div>
                                    <div className="p-3 rounded-xl w-7/12">Fardin Token</div>
                                    <div className="p-1 rounded-xl w-3/12">10.1023 FTM</div>
                                </div>
                                <div className="w-full flex items-center border border-transparent my-3 duration-500 hover:border-primary justify-between  bg-gray-900 rounded-xl p-2 ">
                                    <div className="w-2/12 flex p-1">
                                        <figure className="p-5 rounded-xl border "></figure>
                                    </div>
                                    <div className="p-3 rounded-xl w-7/12">Fardin Token</div>
                                    <div className="p-1 rounded-xl w-3/12">10.1023 FTM</div>
                                </div>
                                <div className="w-full flex items-center border border-transparent my-3 duration-500 hover:border-primary justify-between  bg-gray-900 rounded-xl p-2 ">
                                    <div className="w-2/12 flex p-1">
                                        <figure className="p-5 rounded-xl border "></figure>
                                    </div>
                                    <div className="p-3 rounded-xl w-7/12">Fardin Token</div>
                                    <div className="p-1 rounded-xl w-3/12">10.1023 FTM</div>
                                </div>

                            </div>
                        </div>

                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
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