import React from "react";
import { Link } from "react-router-dom";

//components
import Navbar from "../../Component/Nav/Navbar";
import Sidebar from "../../Component/Sidebar/Sidebar";



export default function EditDataprofesi () {
    return (
        <>
        <Navbar/>
        {/* <Sidebar/> */}
            <div class="p-4">
                <div class="mt-10 p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 md:mt-14">
                    <div class="grid grid-cols-0 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <p class="text-sm justify-center font-semibold text-gray-800 md:text-lg">
                                    Data Profesi
                                </p>
                                <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" width="6" height="16" viewBox="0 0 9 16" fill="none">
                                    <path d="M1.35283 15.5C1.69764 15.5 2.04426 15.3703 2.30783 15.1109L8.60284 8.94586C8.85738 8.69534 9 8.356 9 8.00067C9 7.64711 8.85738 7.30776 8.60284 7.05725L2.30783 0.888648C1.77888 0.36986 0.923178 0.36986 0.394231 0.892202C-0.132911 1.41454 -0.131106 2.25846 0.397841 2.77725L5.72883 8.00067L0.397841 13.2241C-0.131106 13.7429 -0.132911 14.585 0.394231 15.1074C0.657802 15.3703 1.00622 15.5 1.35283 15.5Z" fill="#212529" />
                                </svg>
                                <p>
                                    Edit data profesi
                                </p>

                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2">
                                <div class="flex justify-start ...">
                                    <img class="w-16 h-16 rounded-full" src="/Asset/main-avatar.svg" alt="user photo" />
                                    <div className="section-avatar px-6">
                                        <p class="text-primary-600 text-base font-semibold md:text-xl">Dr. Lissa Nur Aini. S.T., M.T</p>
                                        <p className="font-regular text-gray-400 text-sm sm:text-lg">KTP-65441645646464</p>
                                    </div>
                                </div>
                                <div class="py-4 md:flex justify-end">
                                <Link to="">
                                    <button type="button" class="text-gray-600 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-xs px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 justify-end md:px-5 py-3">
                                        
                                        Batal
                                    </button>
                                </Link>

                                <Link to="/dataprofesi">
                                    <button type="button" class="text-white bg-primary-600 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-xs px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mb-2 justify-end md:px-5 py-3">
                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 21" fill="none">
                                            <path d="M19.7583 4.90834L15.5917 0.74168C15.5138 0.664446 15.4214 0.603342 15.3199 0.561871C15.2184 0.520401 15.1097 0.49938 15 0.500014H1.66667C1.22464 0.500014 0.800715 0.675608 0.488155 0.988169C0.175595 1.30073 0 1.72465 0 2.16668V18.8333C0 19.2754 0.175595 19.6993 0.488155 20.0118C0.800715 20.3244 1.22464 20.5 1.66667 20.5H18.3333C18.7753 20.5 19.1993 20.3244 19.5118 20.0118C19.8244 19.6993 20 19.2754 20 18.8333V5.50001C20.0006 5.39034 19.9796 5.28162 19.9381 5.18009C19.8967 5.07856 19.8356 4.98621 19.7583 4.90834ZM6.66666 2.16668H13.3333V5.50001H6.66666V2.16668ZM13.3333 18.8333H6.66666V12.1667H13.3333V18.8333ZM15 18.8333V12.1667C15 11.7246 14.8244 11.3007 14.5118 10.9882C14.1993 10.6756 13.7754 10.5 13.3333 10.5H6.66666C6.22463 10.5 5.80071 10.6756 5.48815 10.9882C5.17559 11.3007 5 11.7246 5 12.1667V18.8333H1.66667V2.16668H5V5.50001C5 5.94204 5.17559 6.36596 5.48815 6.67852C5.80071 6.99108 6.22463 7.16668 6.66666 7.16668H13.3333C13.7754 7.16668 14.1993 6.99108 14.5118 6.67852C14.8244 6.36596 15 5.94204 15 5.50001V2.50835L18.3333 5.84168V18.8333H15Z" fill="white" />
                                        </svg>
                                        Simpan
                                    </button>
                                </Link>

                            </div>

                            </div>
                            <div class="justify-start w-full h-full mt-4">
                                <div className="justify-start py-2">
                                    <p class="text-base border-b justify-center font-bold text-gray-800 md:text-lg">
                                        Data Profesi
                                    </p>
                                   
                                </div>
                                <div className="mx-auto justify-start">
                                    <div class="mt-4 py-2">
                                        <label for="pilihan-dokter" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Pilih Dokter Umum atau Spesialis
                                        </label>
                                        <form>
                                            <select id="pilihan-dokter" class="w-full md:w-1/2 px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:pilih dokter">
                                                <option value="DS">Dokter Spesialis</option>
                                                <option value="DU">Dokter Umum</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div class="py-4">
                                        <label for="pilihan-dokter" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Spesialis
                                        </label>
                                        <form>
                                            <select id="pilihan-dokter" class="w-full md:w-1/2 px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:pilih dokter">
                                                <option value="Sp.An">Anestesiologi dan Terapi Intensif [Sp.An]</option>
                                                <option value="Sp.B">Ilmu Bedah [Sp.B]</option>
                                                <option value="Sp.PD">Ilmu Penyakit Dalam [Sp.PD]</option>
                                                <option value="Sp.PD">Ilmu Kesehatan Anak [Sp.A]</option>
                                                <option value="Sp.PD">Ilmu Kesehatan Anak [Sp.A]</option>
                                            </select>
                                        </form>
                                    </div>
                                    <div class="py-4">
                                        <label for="pilihan-dokter" class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                            Sub Spesialis
                                        </label>
                                        <form>
                                            <select id="pilihan-dokter" class="w-full md:w-1/2 px-4 py-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:pilih dokter">
                                                <option value="Sp.An">Anestesiologi dan Terapi Intensif [Sp.An]</option>
                                                <option value="Sp.B">Ilmu Bedah [Sp.B]</option>
                                                <option value="Sp.PD">Ilmu Penyakit Dalam [Sp.PD]</option>
                                                <option value="Sp.PD">Ilmu Kesehatan Anak [Sp.A]</option>
                                                <option value="Sp.PD">Ilmu Kesehatan Anak [Sp.A]</option>
                                            </select>
                                        </form>
                                    </div>
                                </div>



                                {/* <table class="table-fixed w-full text-sm text-left text-gray-500 dark:text-gray-400 md:table-fixed">
                                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    </thead>
                                    <tbody>
                                        <tr class="bg-white border-b">
                                            <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Dokter
                                            </th>
                                            <td class="px-6 py-4">
                                                <form>
                                                    <label for="pilihan-dokter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Dokter Spesialis atau Umum</label>
                                                    <select id="pilihan-dokter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:pilih dokter">
                                                        
                                                        <option value="US">Dokter Spesialis</option>
                                                        <option value="US">Dokter Umum</option>
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                            <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Spesialis
                                            </th>
                                            <td class="px-6 py-4">
                                                <form>
                                                    <label for="pilihan-dokter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Pilih Dokter Spesialis atau Umum</label>
                                                    <select id="pilihan-dokter" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 placeholder:pilih dokter">
                                                        
                                                        <option value="US">Dokter Spesialis</option>
                                                        <option value="US">Dokter Umum</option>
                                                    </select>
                                                </form>
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800">
                                            <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Jenis Kelamin
                                            </th>
                                            <td class="px-6 py-4">
                                                Perempuan
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800">
                                            <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Kewarganegaraan
                                            </th>
                                            <td class="px-6 py-4">
                                                Indonesia
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800">
                                            <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Agama
                                            </th>
                                            <td class="px-6 py-4">
                                                Islam
                                            </td>
                                        </tr>
                                        <tr class="bg-white border-b dark:bg-gray-800">
                                            <th scope="row" class="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Nama Pasangan
                                            </th>
                                            <td class="px-6 py-4">
                                                Ir. H. Muhammad Nur Alif., S.Pd
                                            </td>
                                        </tr>
                                    </tbody>
                                </table> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}