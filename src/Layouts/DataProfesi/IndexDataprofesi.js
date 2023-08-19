import React from "react";
import { Link } from 'react-router-dom';
import Navbar from '../../Component/Nav/Navbar';
import Sidebar from '../../Component/Sidebar/Sidebar';
import '../css/dataprofesi.css'

export default function IndexDataprofesi() {


    return (
        <>
            {/* endsidebar */}
            <Navbar />
            <Sidebar />
            {/* maincontent */}
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 md:mt-14">
                    <div class="grid grid-cols-0 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <p class="text-sm justify-center font-semibold text-gray-800 md:text-lg">
                                    Data Profesi
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
                                        Data Profesi
                                    </p>
                                    {/* <hr class="mt-2 w-full h-1 py-0 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr> */}
                                </div>
                                
                               
                                    <table class="w-full flex flex-row flex-no-wrap text-xs sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
                                        <thead class="text-white">
                                            <tr class="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                                                <th class="p-3 text-left text-gray-600">No</th>
                                                <th class="p-3 text-left text-gray-600">Dokter</th>
                                                <th class="p-3 text-left text-gray-600">Spesialis</th>
                                                <th class="p-3 text-left text-gray-600">Akademis</th>
                                                <th class="p-3 text-left text-gray-600 mb-5" width="110px">Actions</th>
                                            </tr>
                                            <tr class="bg-gray-200 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 mt-3">
                                                <th class="p-3 text-left text-gray-600">No</th>
                                                <th class="p-3 text-left text-gray-600">Dokter</th>
                                                <th class="p-3 text-left text-gray-600">Spesialis</th>
                                                <th class="p-3 text-left text-gray-600">Akademis</th>
                                                <th class="p-3 text-left text-gray-600 mb-5" width="110px">Actions</th>
                                            </tr>
                                            
                                        </thead>
                                        <tbody class="flex-1 sm:flex-none">
                                            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0">
                                                <td class="border-grey-light border  p-3">1</td>
                                                <td class="border-grey-light border  p-3 truncate">Spesialis jantung</td>
                                                <td class="border-grey-light border  p-3 truncate">Gangguan Jiwa</td>
                                                <td class="border-grey-light border  p-3 truncate">S2</td>
                                                <td class="border-grey-light border">
                                                    <div class="justify-end py-3 md:flex items-center">
                                                        <Link to="">
                                                            <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                                                    <path d="M9.64134 4.90186C9.64134 4.90186 9.32508 8.82457 9.14161 10.4769C9.05425 11.2661 8.56675 11.7286 7.76823 11.7432C6.24865 11.7705 4.72732 11.7723 3.20832 11.7403C2.44009 11.7245 1.96074 11.2562 1.87513 10.481C1.69049 8.81409 1.37598 4.90186 1.37598 4.90186" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M10.4473 3.02144H0.570312" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8.54438 3.02138C8.08716 3.02138 7.69343 2.69813 7.60374 2.25023L7.46221 1.54199C7.37484 1.21524 7.07896 0.989258 6.74173 0.989258H4.27628C3.93904 0.989258 3.64317 1.21524 3.5558 1.54199L3.41427 2.25023C3.32457 2.69813 2.93085 3.02138 2.47363 3.02138" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span class="sr-only">Icon description</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/editdataprofesi">
                                                            <button type="button" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                                <path d="M6.25638 1.29517H4.22957C2.56269 1.29517 1.51758 2.47526 1.51758 4.14593V8.65272C1.51758 10.3234 2.55782 11.5035 4.22957 11.5035H9.01282C10.6851 11.5035 11.7254 10.3234 11.7254 8.65272V6.46925" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81314 5.70318L8.86405 1.65227C9.36872 1.14814 10.1867 1.14814 10.6914 1.65227L11.3511 2.31197C11.8558 2.81664 11.8558 3.63517 11.3511 4.1393L7.28066 8.20972C7.06003 8.43035 6.76081 8.55448 6.44857 8.55448H4.41797L4.46892 6.50545C4.47651 6.20405 4.59956 5.91675 4.81314 5.70318Z" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                <path d="M8.24805 2.27759L10.7232 4.75269" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                            </svg>
                                                                <span class="sr-only">Icon description</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr class="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 py-2">
                                                <td class="border-grey-light border  p-3">2</td>
                                                <td class="border-grey-light border  p-3 truncate">Spesialis jantung</td>
                                                <td class="border-grey-light border  p-3 truncate">Gangguan Jiwa</td>
                                                <td class="border-grey-light border  p-3 truncate">S2</td>
                                                <td class="border-grey-light border">
                                                    <div class="justify-end py-3 md:flex items-center">
                                                        <Link to="/">
                                                            <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="13" viewBox="0 0 11 13" fill="none">
                                                                    <path d="M9.64134 4.90186C9.64134 4.90186 9.32508 8.82457 9.14161 10.4769C9.05425 11.2661 8.56675 11.7286 7.76823 11.7432C6.24865 11.7705 4.72732 11.7723 3.20832 11.7403C2.44009 11.7245 1.96074 11.2562 1.87513 10.481C1.69049 8.81409 1.37598 4.90186 1.37598 4.90186" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M10.4473 3.02144H0.570312" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8.54438 3.02138C8.08716 3.02138 7.69343 2.69813 7.60374 2.25023L7.46221 1.54199C7.37484 1.21524 7.07896 0.989258 6.74173 0.989258H4.27628C3.93904 0.989258 3.64317 1.21524 3.5558 1.54199L3.41427 2.25023C3.32457 2.69813 2.93085 3.02138 2.47363 3.02138" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span class="sr-only">Icon description</span>
                                                            </button>
                                                        </Link>
                                                        <Link to="/editdataprofesi">
                                                            <button type="button" class="text-white bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                                                                    <path d="M6.25638 1.29517H4.22957C2.56269 1.29517 1.51758 2.47526 1.51758 4.14593V8.65272C1.51758 10.3234 2.55782 11.5035 4.22957 11.5035H9.01282C10.6851 11.5035 11.7254 10.3234 11.7254 8.65272V6.46925" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.81314 5.70318L8.86405 1.65227C9.36872 1.14814 10.1867 1.14814 10.6914 1.65227L11.3511 2.31197C11.8558 2.81664 11.8558 3.63517 11.3511 4.1393L7.28066 8.20972C7.06003 8.43035 6.76081 8.55448 6.44857 8.55448H4.41797L4.46892 6.50545C4.47651 6.20405 4.59956 5.91675 4.81314 5.70318Z" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M8.24805 2.27759L10.7232 4.75269" stroke="white" stroke-width="1.04839" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                                <span class="sr-only">Icon description</span>
                                                            </button>
                                                        </Link>
                                                    </div>
                                                </td>
                                            </tr>
                                            
                                        </tbody>
                                    </table>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}