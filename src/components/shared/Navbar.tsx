import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Moon from "@/assets/icons/moon.svg";
import Menu from "@/assets/icons/etc.svg";
import Logo from '@/assets/icons/Logo.svg'
import ThemeSwitcher from "@/themes/ThemeSwitcher";

function Navbar() {
    return (
        <header className="w-full flex p-3 ">
            <div className="w-1/2 flex  items-center flex-wrap ">
                <Image src={Logo} className="mx-10" alt={"base-swap"}/>
                <nav className="w-auto  p-2">
                    <Link className="p-2 text-gray-300 duration-100 hover:text-white hover:border-b " href={"/"}>
                        Swap
                    </Link>
                    <Link className="p-2 mx-2 text-gray-300 duration-100 hover:text-white hover:border-b "
                          href={"/pool"}>
                        Pool
                    </Link>
                    <Link className="p-2 mx-2 text-gray-300 duration-100 hover:text-white hover:border-b " href={"/"}>
                        About J$WAP
                    </Link>
                    <Link className="p-2 mx-2 text-gray-300 duration-100 hover:text-white hover:border-b "
                          href={"/vote"}>
                        Vote
                    </Link>
                </nav>
            </div>
            <div className="w-1/2 flex justify-end items-center">
                <button className="btn mx-2 rounded-3xl text-custom font-bolder">
                    OSQA
                </button>
                <button className="btn mx-2 rounded-3xl text-custom font-bolder">
                    Connect to Wallet
                </button>
                {/*<button className="btn mx-2 p-0 rounded-3xl text-custom font-bolder">*/}
                    {/*<Image src={Moon} width={50} height={50} alt={"change theme"}/>*/}
                    <ThemeSwitcher/>
                {/*</button>*/}
                <button className="btn ms-2 p-0 rounded-3xl text-custom font-bolder">
                    <Image src={Menu} width={50} height={50} alt={"open menu button"}/>
                </button>
            </div>
        </header>
    );
}

export default React.memo(Navbar);