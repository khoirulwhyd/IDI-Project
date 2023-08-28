import React from "react";
import { Link } from "react-router-dom";
import AdminNav from '../components/adminNav';
import SidebarAdmin from '../components/AdminSidebar.js';


export default function indexMasterdataanggota () {
    return (
        <>
        <AdminNav />
        <SidebarAdmin />
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 md:mt-14">
                    <div class="grid grid-cols-0 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <p class="text-sm justify-center font-semibold text-gray-800 md:text-lg">
                                    Master Data Anggota
                                </p>
                            </div>

                            <div class="justify-start w-full h-full mt-4">
                                <div className="justify-start py-2">
                                    <div class="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                                        <ul class="flex flex-wrap -mb-px">
                                            <li class="mr-2">
                                                <a href="#" class="inline-block p-4 border-b-2 text-primary-700 border-primary-700 rounded-t-lg hover:text-primary-800 hover:border-primary-800  dark:hover:text-gray-300">Semua Anggota</a>
                                            </li>
                                            <li class="mr-2">
                                                <a href="#" class="inline-block p-4 border-b-2 border-transparent rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Meminta Persetujuan</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-2">
                                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            <tr>
                                                <th scope="col" class="px-6 py-3">
                                                    <span class="sr-only">Image</span>
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Nama Lengkap
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    NIK
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    NPA IDI
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    NO TELEPON
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Email
                                                </th>
                                                <th scope="col" class="px-6 py-3">
                                                    Action
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-32 p-4">
                                                    <img src="/Asset/main-avatar.svg" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    Dr. Lissa Nur Aini. S.T., M.T
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700">
                                                    123124123123
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    897789
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    081212221112
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    lissa@gmail.com
                                                </td>
                                                <td class="px-6 py-4">
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
                                                </td>
                                            </tr>
                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-32 p-4">
                                                    <img src="/Asset/main-avatar.svg" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    Dr. Lissa Nur Aini. S.T., M.T
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700">
                                                    123124123123
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    897789
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    081212221112
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    lissa@gmail.com
                                                </td>
                                                <td class="px-6 py-4">
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
                                                </td>
                                            </tr>

                                            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                                <td class="w-32 p-4">
                                                    <img src="/Asset/main-avatar.svg" alt="Apple Watch" />
                                                </td>
                                                <td class="px-6 py-4 font-medium text-gray-900 dark:text-white">
                                                    Dr. Lissa Nur Aini. S.T., M.T
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700">
                                                    123124123123
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    897789
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    081212221112
                                                </td>
                                                <td class="px-6 py-4 font-regular text-gray-700 dark:text-white">
                                                    lissa@gmail.com
                                                </td>
                                                <td class="px-6 py-4">
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
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                     
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}