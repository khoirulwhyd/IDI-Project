import React from "react";
import { Link } from "react-router-dom";
import UserDropdown from "../Dropdown/UserDropdown";

export default function Sidebar() {
    const [collapseShow, setCollapseShow] = React.useState("hidden");

    return (
        <>
            <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    {/* Toggler */}
                    <button
                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                        type="button"
                        onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 31 31" fill="none">
                            <g clip-path="url(#clip0_475_1893)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.26562C0 6.88023 0.153097 6.51062 0.42561 6.23811C0.698124 5.9656 1.06773 5.8125 1.45312 5.8125H29.5469C29.9323 5.8125 30.3019 5.9656 30.5744 6.23811C30.8469 6.51062 31 6.88023 31 7.26562C31 7.65102 30.8469 8.02063 30.5744 8.29314C30.3019 8.56565 29.9323 8.71875 29.5469 8.71875H1.45312C1.06773 8.71875 0.698124 8.56565 0.42561 8.29314C0.153097 8.02063 0 7.65102 0 7.26562ZM0 15.5C0 15.1146 0.153097 14.745 0.42561 14.4725C0.698124 14.2 1.06773 14.0469 1.45312 14.0469H29.5469C29.9323 14.0469 30.3019 14.2 30.5744 14.4725C30.8469 14.745 31 15.1146 31 15.5C31 15.8854 30.8469 16.255 30.5744 16.5275C30.3019 16.8 29.9323 16.9531 29.5469 16.9531H1.45312C1.06773 16.9531 0.698124 16.8 0.42561 16.5275C0.153097 16.255 0 15.8854 0 15.5ZM1.45312 22.2812C1.06773 22.2812 0.698124 22.4343 0.42561 22.7069C0.153097 22.9794 0 23.349 0 23.7344C0 24.1198 0.153097 24.4894 0.42561 24.7619C0.698124 25.0344 1.06773 25.1875 1.45312 25.1875H29.5469C29.9323 25.1875 30.3019 25.0344 30.5744 24.7619C30.8469 24.4894 31 24.1198 31 23.7344C31 23.349 30.8469 22.9794 30.5744 22.7069C30.3019 22.4343 29.9323 22.2812 29.5469 22.2812H1.45312Z" fill="#777777" />
                            </g>
                            <defs>
                                <clipPath id="clip0_475_1893">
                                    <rect width="31" height="31" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    {/* Brand */}
                    <a href="#" class="flex ml-2 md:mr-24">
                        <img src="/Asset/logoidi.png" class="h-8 mr-3" alt="FlowBite Logo" />
                        <span class="self-center text-sm font-bold text-primary-800 sm:text-sm whitespace-nowrap dark:text-white">IDI Malang Raya</span>
                    </a>
                    {/* <Link
                        className="md:block text-left md:pb-2 text-blue-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                        to="/"
                    >
                        IDI Malang Raya
                    </Link> */}
                    {/* User */}
                    <ul className="md:hidden items-center flex flex-wrap list-none">
                        <li className="inline-block relative">
                            {/* <NotificationDropdown /> */}
                        </li>
                        <li className="inline-block relative">
                            <UserDropdown />
                        </li>
                    </ul>
                    {/* Collapse */}
                    <div
                        className={
                            "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
                            collapseShow
                        }
                    >
                        {/* Collapse header */}
                        <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
                            <div className="flex flex-wrap">
                                <div className="w-6/12">
                                    <Link
                                        className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                                        to="/"
                                    >
                                        IDI Malang Raya
                                    </Link>
                                </div>
                                <div className="w-6/12 flex justify-end">
                                    <button
                                        type="button"
                                        className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                                        onClick={() => setCollapseShow("hidden")}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 51 51" fill="none">
                                            <path d="M38.8877 12.1337C38.6911 11.9367 38.4576 11.7805 38.2006 11.6738C37.9435 11.5672 37.6679 11.5123 37.3896 11.5123C37.1113 11.5123 36.8357 11.5672 36.5787 11.6738C36.3216 11.7805 36.0881 11.9367 35.8915 12.1337L25.5002 22.5037L15.109 12.1125C14.9122 11.9158 14.6787 11.7597 14.4216 11.6532C14.1646 11.5467 13.8891 11.4919 13.6109 11.4919C13.3326 11.4919 13.0571 11.5467 12.8001 11.6532C12.543 11.7597 12.3095 11.9158 12.1127 12.1125C11.916 12.3092 11.7599 12.5428 11.6535 12.7998C11.547 13.0569 11.4922 13.3324 11.4922 13.6106C11.4922 13.8888 11.547 14.1643 11.6535 14.4214C11.7599 14.6784 11.916 14.912 12.1127 15.1087L22.504 25.5L12.1127 35.8912C11.916 36.088 11.7599 36.3215 11.6535 36.5786C11.547 36.8356 11.4922 37.1111 11.4922 37.3894C11.4922 37.6676 11.547 37.9431 11.6535 38.2001C11.7599 38.4572 11.916 38.6908 12.1127 38.8875C12.3095 39.0842 12.543 39.2403 12.8001 39.3468C13.0571 39.4532 13.3326 39.508 13.6109 39.508C13.8891 39.508 14.1646 39.4532 14.4216 39.3468C14.6787 39.2403 14.9122 39.0842 15.109 38.8875L25.5002 28.4962L35.8915 38.8875C36.0882 39.0842 36.3218 39.2403 36.5788 39.3468C36.8359 39.4532 37.1114 39.508 37.3896 39.508C37.6678 39.508 37.9433 39.4532 38.2004 39.3468C38.4574 39.2403 38.691 39.0842 38.8877 38.8875C39.0845 38.6908 39.2405 38.4572 39.347 38.2001C39.4535 37.9431 39.5083 37.6676 39.5083 37.3894C39.5083 37.1111 39.4535 36.8356 39.347 36.5786C39.2405 36.3215 39.0845 36.088 38.8877 35.8912L28.4965 25.5L38.8877 15.1087C39.6952 14.3012 39.6952 12.9412 38.8877 12.1337Z" fill="#343A40" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* Form */}
                        <form className="mt-6 mb-4 md:hidden">
                            <div className="mb-3 pt-0">
                                <input
                                    type="text"
                                    placeholder="Search"
                                    className="border-0 px-3 py-2 h-12 border border-solid  border-blueGray-500 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                                />
                            </div>
                        </form>

                        {/* Divider */}
                        <hr className="my-4 md:min-w-full" />
                        {/* Heading */}
                        {/* Navigation */}

                        <ul className="md:flex-col md:min-w-full flex flex-col list-none">
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/dashboard") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/dashboard"
                                >
                                    <i
                                        className={
                                            "fas fa-tv mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/dashboard") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Dashboard
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/settings") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/settings"
                                >
                                    <i
                                        className={
                                            "fas fa-tools mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/settings") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Data Pribadi
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/tables") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/tables"
                                >
                                    <i
                                        className={
                                            "fas fa-table mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/tables") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Data Profesi
                                </Link>
                            </li>

                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/maps") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/maps"
                                >
                                    <i
                                        className={
                                            "fas fa-map-marked mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/maps") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Surat Tanda Registrasi
                                </Link>
                            </li>
                            <li className="items-center">
                                <Link
                                    className={
                                        "text-xs uppercase py-3 font-bold block " +
                                        (window.location.href.indexOf("/admin/maps") !== -1
                                            ? "text-lightBlue-500 hover:text-lightBlue-600"
                                            : "text-blueGray-700 hover:text-blueGray-500")
                                    }
                                    to="/admin/maps"
                                >
                                    <i
                                        className={
                                            "fas fa-map-marked mr-2 text-sm " +
                                            (window.location.href.indexOf("/admin/maps") !== -1
                                                ? "opacity-75"
                                                : "text-blueGray-300")
                                        }
                                    ></i>{" "}
                                    Surat Izin Praktik
                                </Link>
                            </li>
                        </ul>
                        
                    </div>
                </div>
            </nav>
        </>
    )
}