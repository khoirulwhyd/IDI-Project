/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import PublicDropdown from '../Dropdown/PublicDropdown';
// import IndexDropdown from "components/Dropdowns/IndexDropdown.js";

export default function Navbar(props) {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a href="#" class="flex ml-2 md:mr-24">
                            <img src="/Asset/logoidi.png" class="h-8 mr-3" alt="FlowBite Logo" />
                            <span class="self-center text-sm font-bold text-primary-800 sm:text-sm whitespace-nowrap dark:text-white">IDI Malang Raya</span>
                        </a>
                        {/* <Link
                            to="/"
                            className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                        >
                            IDI Malang Raya
                        </Link> */}
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars">
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 51 51" fill="none">
                                    <path d="M8.5 14.875H14.875M42.5 14.875H23.375M42.5 36.125H36.125M8.5 36.125H27.625M8.5 25.5H42.5" stroke="#343A40" stroke-width="4" stroke-linecap="round" />
                                </svg>
                            </i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
                            (navbarOpen ? " block" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <form className="md:flex py-2 mb-4 md:py-0 mt-4 flex-row flex-wrap items-center lg:ml-auto mr-3">
                                <div className="relative flex w-full flex-wrap items-stretch">
                                    <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0322 18.3914 14.0615C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94938 18.7935 8.90906 18.3914 7.93843C17.9894 6.9678 17.4001 6.08587 16.6572 5.34298C15.9143 4.60009 15.0324 4.0108 14.0618 3.60875C13.0911 3.2067 12.0508 2.99977 11.0002 2.99977C9.9496 2.99977 8.90929 3.2067 7.93866 3.60875C6.96803 4.0108 6.08609 4.60009 5.34321 5.34298C3.84288 6.84331 3 8.87819 3 11C3 13.1218 3.84288 15.1566 5.34321 16.657C6.84354 18.1573 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1573 16.6572 16.657Z" stroke="#A7A8A9" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="border-0 px-3 py-4 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                                    />
                                </div>
                            </form>
                            <li className="flex items-center">
                                {/* <IndexDropdown /> */}
                                <PublicDropdown />
                            </li>
                        </ul>
                    </div>
                    
                </div>
            </nav>
        </>
    );
}
