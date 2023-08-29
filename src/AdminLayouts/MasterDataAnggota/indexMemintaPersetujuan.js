import React from "react";
import { Link } from "react-router-dom";
import AdminNav from '../components/adminNav';
import SidebarAdmin from '../components/AdminSidebar.js';

export default function indexMemintaPersetujuan () {
    return (
        <>
        <AdminNav />
        <SidebarAdmin />

            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 overflow-auto border-gray-200 border-dashed rounded-lg dark:border-gray-700 md:mt-14">
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
                                            <Link to="/master-data-anggota">
                                                <li class="mr-2">
                                                    <a href="#" class="inline-block p-4 border-b-2 rounded-t-lg hover:text-primary-800 hover:border-primary-800  dark:hover:text-gray-300">Semua Anggota</a>
                                                </li>
                                            </Link>
                                            <Link to="/meminta-persetujuan">
                                                <li class="mr-2">
                                                    <a href="#" class="inline-block p-4 border-b-2 border-primary-700 text-primary-700 rounded-t-lg active dark:text-blue-500 dark:border-blue-500">Meminta Persetujuan</a>
                                                </li>
                                            </Link>
                                            
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
                                                        <button type="button" class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M9.00004 20.42L2.79004 14.21L5.62004 11.38L9.00004 14.77L18.88 4.88L21.71 7.71L9.00004 20.42Z" fill="white" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="/editdataprofesi">
                                                        <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none">
                                                                <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white" />
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
                                                        <button type="button" class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M9.00004 20.42L2.79004 14.21L5.62004 11.38L9.00004 14.77L18.88 4.88L21.71 7.71L9.00004 20.42Z" fill="white" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="/editdataprofesi">
                                                        <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none">
                                                                <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white" />
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
                                                        <button type="button" class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                                                <path d="M9.00004 20.42L2.79004 14.21L5.62004 11.38L9.00004 14.77L18.88 4.88L21.71 7.71L9.00004 20.42Z" fill="white" />
                                                            </svg>
                                                            <span class="sr-only">Icon description</span>
                                                        </button>
                                                    </Link>
                                                    <Link to="/editdataprofesi">
                                                        <button type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 14 14" fill="none">
                                                                <path d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z" fill="white" />
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