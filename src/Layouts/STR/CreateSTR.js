import React from "react";
import { Link } from "react-router-dom";

import Navbar from "../../Component/Nav/Navbar";
import Sidebar from "../../Component/Sidebar/Sidebar";

export default function CreateSTR() {
    return (
        <>
        <Navbar />
        <Sidebar />
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 md:mt-14">
                    <div class="grid grid-cols-0 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <p class="text-sm justify-center font-semibold text-gray-800 md:text-lg">
                                    Surat Tanda Registrasi
                                </p>
                                {/* <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="6" height="16" viewBox="0 0 9 16" fill="none">
                                    <path d="M1.35283 15.5C1.69764 15.5 2.04426 15.3703 2.30783 15.1109L8.60284 8.94586C8.85738 8.69534 9 8.356 9 8.00067C9 7.64711 8.85738 7.30776 8.60284 7.05725L2.30783 0.888648C1.77888 0.36986 0.923178 0.36986 0.394231 0.892202C-0.132911 1.41454 -0.131106 2.25846 0.397841 2.77725L5.72883 8.00067L0.397841 13.2241C-0.131106 13.7429 -0.132911 14.585 0.394231 15.1074C0.657802 15.3703 1.00622 15.5 1.35283 15.5Z" fill="#212529" />
                                </svg>
                                <p className='ml-2 font-medium text-sm text-gray-400 md:text-lg'>
                                    Dokter Spesialis
                                </p> */}
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div class="flex justify-start ...">
                                    <img class="w-16 h-16 rounded-full" src="/Asset/main-avatar.svg" alt="user photo" />
                                    <div className="section-avatar px-6">
                                        <p class="text-primary-600 text-base font-semibold md:text-xl">Dr. Lissa Nur Aini. S.T., M.T</p>
                                        <p className="font-regular text-gray-400 text-sm sm:text-lg">KTP-65441645646464</p>
                                    </div>
                                </div>

                            </div>
                            <div class="justify-start w-full h-full mt-4">
                                <div className="justify-start py-2">
                                    <p class="text-base border-b justify-center font-bold text-gray-800 md:text-lg">
                                        Data Surat Tanda Registrasi
                                    </p>
                                    {/* <hr class="mt-2 w-full h-1 py-0 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr> */}
                                </div>
                                <div class="mx-auto max-w-sm justify-center mt-10">
                                    <img class="w-1/4" src="/Asset/emptystate.png" className="justify-center items-center" alt="user photo" />
                                    <div className="py-4">
                                        <p class="text-center ...">Ups, <strong className="text-primary-600">Data STRmu</strong> Masih Kosong</p>
                                    </div>

                                    <Link to="/editdataprofesi">
                                        <button
                                            class="py-2 tracking-wide font-semibold bg-primary-600 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                            <div>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                                                    <path d="M9.49249 0.789062H5.75349C2.67849 0.789062 0.750488 2.96606 0.750488 6.04806V14.3621C0.750488 17.4441 2.66949 19.6211 5.75349 19.6211H14.5775C17.6625 19.6211 19.5815 17.4441 19.5815 14.3621V10.3341" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.82812 8.92099L14.3011 1.44799C15.2321 0.517988 16.7411 0.517988 17.6721 1.44799L18.8891 2.66499C19.8201 3.59599 19.8201 5.10599 18.8891 6.03599L11.3801 13.545C10.9731 13.952 10.4211 14.181 9.84512 14.181H6.09912L6.19312 10.401C6.20712 9.84499 6.43412 9.31499 6.82812 8.92099Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    <path d="M13.1655 2.60254L17.7315 7.16854" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </div>
                                            <span class="ml-3">
                                                Buat Data
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}