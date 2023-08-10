import React from "react";
import { Link } from "react-router-dom";
import '../css/keanggotan.css'

export default function DataKeanggotaan() {
    return (
        <div>
            <nav class="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div class="px-3 py-3 lg:px-5 lg:pl-3">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center justify-start">
                            <button data-drawer-target="logo-sidebar" data-drawer-toggle="logo-sidebar" aria-controls="logo-sidebar" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                                <span class="sr-only">Open sidebar</span>
                                <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                                </svg>
                            </button>
                            <a href="#" class="flex ml-2 md:mr-24">
                                <img src="/Asset/Logo.svg" class="h-8 mr-3" alt="FlowBite Logo" />
                                <span class="self-center text-xl font-bold text-primary-800 sm:text-1xl whitespace-nowrap dark:text-white">IDI Malang Raya</span>
                            </a>
                        </div>
                        <div class="flex items-center">
                            <div class="flex items-center ml-3">
                                <div class="relative mx-auto text-gray-600 lg:block hidden pr-3">
                                    <input
                                        class="border-2 border-gray-300 bg-white h-10 pl-2 pr-5 rounded-lg text-sm focus:outline-none"
                                        type="search" name="search" placeholder="Cari disini" />
                                    <button type="submit" class="absolute right-0 top-0 mt-3 mr-2">
                                    </button>
                                </div>
                                <button type="button" class="h-8 mr-3">
                                    {/* <span class="_DVAfiyo21kM68EUVzEQ">View notifications</span> */}
                                    <svg width="25" height="25" viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.281 13.3279C27.281 15.1595 27.7651 16.2391 28.8304 17.4831C29.6377 18.3996 29.8957 19.5761 29.8957 20.8525C29.8957 22.1274 29.4768 23.3377 28.6376 24.3203C27.539 25.4982 25.9896 26.2502 24.4083 26.381C22.1168 26.5763 19.8239 26.7408 17.5006 26.7408C15.1758 26.7408 12.8843 26.6424 10.5928 26.381C9.01009 26.2502 7.4607 25.4982 6.36352 24.3203C5.52432 23.3377 5.104 22.1274 5.104 20.8525C5.104 19.5761 5.36344 18.3996 6.1693 17.4831C7.26793 16.2391 7.72014 15.1595 7.72014 13.3279V12.7066C7.72014 10.2538 8.33178 8.64988 9.59129 7.07976C11.4639 4.78993 14.4656 3.41663 17.4353 3.41663H17.5658C20.5993 3.41663 23.6981 4.85603 25.5388 7.24426C26.7331 8.78207 27.281 10.3184 27.281 12.7066V13.3279ZM13.2323 29.7553C13.2323 29.021 13.9062 28.6846 14.5295 28.5407C15.2585 28.3864 19.7009 28.3864 20.4299 28.5407C21.0531 28.6846 21.7271 29.021 21.7271 29.7553C21.6909 30.4545 21.2807 31.0743 20.714 31.4679C19.9791 32.0408 19.1168 32.4036 18.2153 32.5343C17.7167 32.5989 17.2268 32.6004 16.7456 32.5343C15.8426 32.4036 14.9802 32.0408 14.2468 31.4665C13.6787 31.0743 13.2685 30.4545 13.2323 29.7553Z" fill="#212529" />
                                        <circle cx="27.5" cy="10" r="5.5" fill="#E00F0F" />
                                    </svg>
                                </button>
                                <div>
                                    <button type="button" class="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" aria-expanded="false" data-dropdown-toggle="dropdown-user">
                                        <span class="sr-only">Open user menu</span>
                                        <img class="w-8 h-8 rounded-full" src="/Asset/main-avatar.svg" alt="user photo" />
                                    </button>
                                </div>
                                <div class="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown-user">
                                    <div class="px-4 py-3" role="none">
                                        <p class="text-sm text-gray-900 dark:text-white" role="none">
                                            Neil Sims
                                        </p>
                                        <p class="text-sm font-medium text-gray-900 truncate dark:text-gray-300" role="none">
                                            neil.sims@flowbite.com
                                        </p>
                                    </div>
                                    <ul class="py-1" role="none">
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Dashboard</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Settings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Earnings</a>
                                        </li>
                                        <li>
                                            <a href="#" class="block px-4 py-2 text-xs text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white" role="menuitem">Sign out</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                {/* <svg class="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="">
                                    <path d="M15.6667 9.33452V9.33334V4.66667C15.6667 4.4623 15.7304 4.31417 15.8562 4.18839C15.9819 4.06267 16.1293 3.99952 16.3322 4H16.3333H23.3333C23.5377 4 23.6858 4.06377 23.8116 4.18956L24.1641 3.83707L23.8116 4.18956C23.9373 4.31528 24.0005 4.46264 24 4.66549V4.66667V9.33334C24 9.53771 23.9362 9.68583 23.8105 9.81162L24.164 10.1652L23.8104 9.81162C23.6847 9.93734 23.5374 10.0005 23.3345 10H23.3333H16.3333C16.129 10 15.9808 9.93623 15.8551 9.81045C15.7293 9.68473 15.6662 9.53737 15.6667 9.33452ZM4 14.0012V14V4.66667C4 4.4623 4.06377 4.31417 4.18956 4.18839C4.31528 4.06267 4.46264 3.99952 4.66549 4V4H4.66667H11.6667C11.871 4 12.0192 4.06377 12.1449 4.18956C12.2707 4.31528 12.3338 4.46264 12.3333 4.66549V4.66667V14C12.3333 14.2044 12.2696 14.3525 12.1438 14.4783C12.0181 14.604 11.8707 14.6672 11.6678 14.6667H11.6667H4.66667C4.4623 14.6667 4.31417 14.6029 4.18839 14.4771C4.06267 14.3514 3.99952 14.204 4 14.0012ZM15.6667 23.3345V23.3333V14C15.6667 13.7956 15.7304 13.6475 15.8562 13.5217C15.9819 13.396 16.1293 13.3329 16.3322 13.3333H16.3333H23.3333C23.5377 13.3333 23.6858 13.3971 23.8116 13.5229C23.9373 13.6486 24.0005 13.796 24 13.9988V14V23.3333C24 23.5377 23.9362 23.6858 23.8105 23.8116L24.164 24.1652L23.8104 23.8116C23.6847 23.9373 23.5374 24.0005 23.3345 24H23.3333H16.3333C16.129 24 15.9808 23.9362 15.8551 23.8105C15.7293 23.6847 15.6662 23.5374 15.6667 23.3345ZM4.18839 23.8105L3.83532 24.1635L4.18839 23.8104C4.06267 23.6847 3.99952 23.5374 4 23.3345V23.3333V18.6667C4 18.4623 4.06377 18.3142 4.18956 18.1884C4.31528 18.0627 4.46264 17.9995 4.66549 18H4.66667H11.6667C11.871 18 12.0192 18.0638 12.1449 18.1896C12.2707 18.3153 12.3338 18.4626 12.3333 18.6655V18.6667V23.3333C12.3333 23.5377 12.2696 23.6858 12.1438 23.8116C12.0181 23.9373 11.8707 24.0005 11.6678 24H11.6667H4.66667C4.4623 24 4.31417 23.9362 4.18839 23.8105Z" fill="#F8F9FA" stroke="#F8F9FA" />
                                </svg> */}
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path d="M15.6667 9.33452V9.33334V4.66667C15.6667 4.4623 15.7304 4.31417 15.8562 4.18839C15.9819 4.06267 16.1293 3.99952 16.3322 4H16.3333H23.3333C23.5377 4 23.6858 4.06377 23.8116 4.18956L24.1641 3.83707L23.8116 4.18956C23.9373 4.31528 24.0005 4.46264 24 4.66549V4.66667V9.33334C24 9.53771 23.9362 9.68583 23.8105 9.81162L24.164 10.1652L23.8104 9.81162C23.6847 9.93734 23.5374 10.0005 23.3345 10H23.3333H16.3333C16.129 10 15.9808 9.93623 15.8551 9.81045C15.7293 9.68473 15.6662 9.53737 15.6667 9.33452ZM4 14.0012V14V4.66667C4 4.4623 4.06377 4.31417 4.18956 4.18839C4.31528 4.06267 4.46264 3.99952 4.66549 4V4H4.66667H11.6667C11.871 4 12.0192 4.06377 12.1449 4.18956C12.2707 4.31528 12.3338 4.46264 12.3333 4.66549V4.66667V14C12.3333 14.2044 12.2696 14.3525 12.1438 14.4783C12.0181 14.604 11.8707 14.6672 11.6678 14.6667H11.6667H4.66667C4.4623 14.6667 4.31417 14.6029 4.18839 14.4771C4.06267 14.3514 3.99952 14.204 4 14.0012ZM15.6667 23.3345V23.3333V14C15.6667 13.7956 15.7304 13.6475 15.8562 13.5217C15.9819 13.396 16.1293 13.3329 16.3322 13.3333H16.3333H23.3333C23.5377 13.3333 23.6858 13.3971 23.8116 13.5229C23.9373 13.6486 24.0005 13.796 24 13.9988V14V23.3333C24 23.5377 23.9362 23.6858 23.8105 23.8116L24.164 24.1652L23.8104 23.8116C23.6847 23.9373 23.5374 24.0005 23.3345 24H23.3333H16.3333C16.129 24 15.9808 23.9362 15.8551 23.8105C15.7293 23.6847 15.6662 23.5374 15.6667 23.3345ZM4.18839 23.8105L3.83532 24.1635L4.18839 23.8104C4.06267 23.6847 3.99952 23.5374 4 23.3345V23.3333V18.6667C4 18.4623 4.06377 18.3142 4.18956 18.1884C4.31528 18.0627 4.46264 17.9995 4.66549 18H4.66667H11.6667C11.871 18 12.0192 18.0638 12.1449 18.1896C12.2707 18.3153 12.3338 18.4626 12.3333 18.6655V18.6667V23.3333C12.3333 23.5377 12.2696 23.6858 12.1438 23.8116C12.0181 23.9373 11.8707 24.0005 11.6678 24H11.6667H4.66667C4.4623 24 4.31417 23.9362 4.18839 23.8105Z" fill="#495057" stroke="#495057" />
                                </svg>
                                <span class="ml-3 text-sm ">Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="bg-primary-600 flex items-center p-2 text-gray-50 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 22" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5812 6.05615C14.5812 9.14053 12.0573 11.6123 8.90772 11.6123C5.75931 11.6123 3.23419 9.14053 3.23419 6.05615C3.23419 2.97176 5.75931 0.5 8.90772 0.5C12.0573 0.5 14.5812 2.97176 14.5812 6.05615ZM0.333496 17.9036C0.333496 15.0484 4.28328 14.334 8.90772 14.334C13.5573 14.334 17.4819 15.073 17.4819 17.9304C17.4819 20.7856 13.5322 21.5 8.90772 21.5C4.25816 21.5 0.333496 20.761 0.333496 17.9036ZM16.8692 6.15687C16.8692 7.72757 16.3874 9.19319 15.5427 10.4106C15.4548 10.5358 15.5324 10.7046 15.6854 10.7315C15.8977 10.7661 16.1157 10.7874 16.3383 10.7918C18.5529 10.8489 20.5404 9.45255 21.0895 7.34971C21.9034 4.22955 19.5153 1.428 16.473 1.428C16.1431 1.428 15.8269 1.46154 15.5187 1.52302C15.4765 1.53197 15.4308 1.55209 15.408 1.58786C15.3783 1.6337 15.4 1.69295 15.4297 1.73208C16.344 2.98752 16.8692 4.51574 16.8692 6.15687ZM20.537 12.986C22.0256 13.2711 23.0039 13.8513 23.4091 14.6976C23.7527 15.3907 23.7527 16.1956 23.4091 16.8887C22.7893 18.199 20.7893 18.6204 20.0119 18.7289C19.8509 18.7512 19.7219 18.6171 19.739 18.4583C20.1363 14.8273 16.9776 13.1056 16.1602 12.7099C16.126 12.6909 16.118 12.664 16.1214 12.6462C16.1237 12.635 16.1386 12.6171 16.1648 12.6137C17.9331 12.5802 19.8349 12.8183 20.537 12.986Z" fill="#F8F9FA" />
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap text-sm">Data Keanggotaan</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.2476 9.05615C19.2476 12.1405 16.7237 14.6123 13.5741 14.6123C10.4257 14.6123 7.90057 12.1405 7.90057 9.05615C7.90057 5.97176 10.4257 3.5 13.5741 3.5C16.7237 3.5 19.2476 5.97176 19.2476 9.05615ZM4.99988 20.9036C4.99988 18.0484 8.94966 17.334 13.5741 17.334C18.2237 17.334 22.1483 18.073 22.1483 20.9304C22.1483 23.7856 18.1985 24.5 13.5741 24.5C8.92454 24.5 4.99988 23.761 4.99988 20.9036Z" fill="#495057" />
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap text-sm">Personal Data</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                    <path d="M11.25 1.375L6 6.625L0.75 1.375" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>


                            </a>
                        </li>

                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7365 8.05577C19.7365 10.0747 19.2348 12.7079 18.463 12.3083C18.1475 13.3388 17.4849 14.2284 16.5879 14.826C15.6909 15.4236 14.6148 15.6922 13.5421 15.5864C12.4695 15.4806 11.4666 15.0068 10.7037 14.2455C9.9407 13.4842 9.46476 12.4823 9.35663 11.4099C8.59072 10.07 7.58622 7.38493 10.1686 5.29193C10.2153 5.27677 10.2433 5.15077 10.2853 4.96527C10.4451 4.26352 10.7992 2.70368 13.0328 3.00177C14.7554 3.23102 19.7365 4.12002 19.7365 8.05577ZM17.5163 9.3286C17.5163 9.3286 17.2526 10.0998 17.5 10.959C17.4968 11.8752 17.1344 12.7536 16.4908 13.4056C15.8471 14.0576 14.9735 14.4312 14.0575 14.4463C13.1414 14.4613 12.256 14.1166 11.5913 13.486C10.9266 12.8555 10.5356 11.9895 10.5023 11.0739C10.5869 10.7531 10.5869 10.21 10.5863 9.60627C10.5857 8.51718 10.5845 7.2321 11.0833 6.70827C14.5769 9.03518 17.5163 9.3286 17.5163 9.3286Z" fill="#495057" />
                                    <path d="M7.58333 21C7.58333 20.3688 7.91758 19.8158 8.41925 19.5078C8.40015 19.4352 8.38226 19.3623 8.36558 19.2891C8.27706 18.8906 8.20795 18.488 8.1585 18.0827C8.10838 17.6945 8.0782 17.3039 8.06808 16.9126C5.60583 17.8792 3.5 19.5638 3.5 21.3325V24.5H24.5V21.3325C24.5 19.6385 22.5692 18.0221 20.2428 17.0392V17.0555C20.2533 17.4113 20.2335 17.8197 20.195 18.2122C20.16 18.5762 20.1081 18.9391 20.0457 19.25H20.4167C20.525 19.2501 20.6311 19.2803 20.7232 19.3372C20.8153 19.3942 20.8898 19.4757 20.9382 19.5726L21.5215 20.7392C21.5623 20.8203 21.5833 20.9096 21.5833 21V22.1667C21.5833 22.3214 21.5219 22.4697 21.4125 22.5791C21.3031 22.6885 21.1547 22.75 21 22.75H19.8333V21.5833H20.4167V21.1377L20.0562 20.4167H18.4438L18.0833 21.1377V21.5833H18.6667V22.75H17.5C17.3453 22.75 17.1969 22.6885 17.0875 22.5791C16.9781 22.4697 16.9167 22.3214 16.9167 22.1667V21C16.9167 20.9096 16.9377 20.8203 16.9785 20.7392L17.5618 19.5726C17.6102 19.4757 17.6847 19.3942 17.7768 19.3372C17.8689 19.2803 17.975 19.2501 18.0833 19.25H18.8504C18.8632 19.1998 18.8761 19.1444 18.8889 19.0832C18.9472 18.8084 18.9992 18.4602 19.0342 18.1002C19.0692 17.7397 19.0855 17.3822 19.0767 17.0882C19.0746 16.9664 19.065 16.8448 19.0482 16.7242C19.0353 16.6413 19.0225 16.6034 19.0202 16.5952C19.0196 16.5935 19.019 16.5929 19.0202 16.5941L19.0219 16.5935C18.7124 16.4973 18.3993 16.4131 18.0833 16.3409C17.7899 16.2738 17.4866 16.6775 17.3542 16.9301H10.5C10.483 16.8976 10.4662 16.8649 10.4498 16.8321C10.3262 16.5859 10.1739 16.282 9.91667 16.3409C9.69208 16.3917 9.4675 16.45 9.24292 16.5142C9.23568 16.6165 9.23257 16.719 9.23358 16.8216C9.23592 17.1442 9.26683 17.5391 9.31642 17.9381C9.366 18.3359 9.43308 18.7232 9.50308 19.0289C9.52292 19.117 9.54275 19.1963 9.56142 19.2646C9.89492 19.3084 10.2087 19.4474 10.4652 19.665C10.7218 19.8826 10.9102 20.1695 11.0079 20.4913C11.1056 20.8132 11.1085 21.1564 11.0162 21.4799C10.9239 21.8033 10.7403 22.0933 10.4874 22.3151C10.2346 22.537 9.92317 22.6812 9.59045 22.7307C9.25773 22.7801 8.91782 22.7326 8.61141 22.5938C8.305 22.455 8.04506 22.2309 7.86273 21.9483C7.6804 21.6656 7.5834 21.3364 7.58333 21Z" fill="#495057" />
                                    <path d="M9.91667 21C9.91667 21.3349 9.64717 21.5921 9.33333 21.5921C9.0195 21.5921 8.75 21.3355 8.75 21C8.75 20.6652 9.0195 20.408 9.33333 20.408C9.64717 20.408 9.91667 20.6646 9.91667 21Z" fill="#495057" />
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap text-sm">Data Praktik</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.86733 3.70059C3.5 5.06675 3.5 7.26709 3.5 11.6666V16.3333C3.5 20.7328 3.5 22.9331 4.86733 24.2993C6.2335 25.6666 8.43383 25.6666 12.8333 25.6666H15.1667C19.5662 25.6666 21.7665 25.6666 23.1327 24.2993C24.5 22.9331 24.5 20.7328 24.5 16.3333V11.6666C24.5 7.26709 24.5 5.06675 23.1327 3.70059C21.7665 2.33325 19.5662 2.33325 15.1667 2.33325H12.8333C8.43383 2.33325 6.2335 2.33325 4.86733 3.70059ZM9.33333 10.7916C9.10127 10.7916 8.87871 10.8838 8.71461 11.0479C8.55052 11.212 8.45833 11.4345 8.45833 11.6666C8.45833 11.8987 8.55052 12.1212 8.71461 12.2853C8.87871 12.4494 9.10127 12.5416 9.33333 12.5416H18.6667C18.8987 12.5416 19.1213 12.4494 19.2854 12.2853C19.4495 12.1212 19.5417 11.8987 19.5417 11.6666C19.5417 11.4345 19.4495 11.212 19.2854 11.0479C19.1213 10.8838 18.8987 10.7916 18.6667 10.7916H9.33333ZM9.33333 15.4583C9.10127 15.4583 8.87871 15.5504 8.71461 15.7145C8.55052 15.8786 8.45833 16.1012 8.45833 16.3333C8.45833 16.5653 8.55052 16.7879 8.71461 16.952C8.87871 17.1161 9.10127 17.2083 9.33333 17.2083H15.1667C15.3987 17.2083 15.6213 17.1161 15.7854 16.952C15.9495 16.7879 16.0417 16.5653 16.0417 16.3333C16.0417 16.1012 15.9495 15.8786 15.7854 15.7145C15.6213 15.5504 15.3987 15.4583 15.1667 15.4583H9.33333Z" fill="#495057" />
                                </svg>
                                <span class="flex-1 ml-3 whitespace-nowrap text-sm  ">SIP & STR</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
                                    <path d="M11.25 1.375L6 6.625L0.75 1.375" stroke="#495057" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>

            {/* main content */}
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div class="grid grid-cols-0 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full h-screen p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <p class="text-lg justify-center font-semibold text-gray-800">
                                    Data Keanggotaan
                                </p>
                            </div>
                            <div className="grid grid-cols-2">
                                <div class="flex justify-start ...">
                                    <img class="w-16 h-16 rounded-full" src="/Asset/main-avatar.svg" alt="user photo" />
                                    <div className="section-avatar px-6">
                                        <p class="text-primary-600 text-xl font-semibold">Dr. Lissa Nur Aini. S.T., M.T</p>
                                        <p className="font-regular text-gray-400">KTP-65441645646464</p>
                                    </div>
                                </div>
                                
                                <div class="flex justify-end ...">
                                    <Link to="">
                                        <button type="button" class="text-white bg-[#E00F0F] hover:bg-[#AB1616]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 justify-end">
                                            <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                                <path d="M14.1042 6.39014C14.1042 6.39014 13.6517 12.0026 13.3892 14.3668C13.2642 15.496 12.5667 16.1576 11.4242 16.1785C9.24999 16.2176 7.07332 16.2201 4.89999 16.1743C3.80082 16.1518 3.11499 15.4818 2.99249 14.3726C2.72832 11.9876 2.27832 6.39014 2.27832 6.39014" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M15.2567 3.69975H1.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M12.5335 3.69974C11.8793 3.69974 11.316 3.23724 11.1877 2.5964L10.9852 1.58307C10.8602 1.11557 10.4368 0.792236 9.95432 0.792236H6.42682C5.94432 0.792236 5.52099 1.11557 5.39599 1.58307L5.19349 2.5964C5.06516 3.23724 4.50182 3.69974 3.84766 3.69974" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Hapus Data
                                        </button>
                                    </Link>
                                    
                                    <Link to="/editDatakeanggotaan">
                                        <button type="button" class="text-white bg-[#FFC107] hover:bg-[#D9A509]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 justify-end">
                                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                <path d="M8.57699 0.824219H5.46116C2.89866 0.824219 1.29199 2.63839 1.29199 5.20672V12.1351C1.29199 14.7034 2.89116 16.5176 5.46116 16.5176H12.8145C15.3853 16.5176 16.9845 14.7034 16.9845 12.1351V8.77838" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 7.60074L12.584 1.37324C13.3599 0.598242 14.6174 0.598242 15.3932 1.37324L16.4074 2.38741C17.1832 3.16324 17.1832 4.42158 16.4074 5.19658L10.1499 11.4541C9.81069 11.7932 9.35069 11.9841 8.87069 11.9841H5.74902L5.82736 8.83408C5.83902 8.37074 6.02819 7.92908 6.35652 7.60074Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M11.6377 2.33545L15.4427 6.14045" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            Edit Data
                                        </button>
                                    </Link>
                                    
                                </div>
                                <div className="justify-start py-6">
                                    <p class="text-2xl justify-center font-semibold text-gray-800">
                                        Data Keanggotaan
                                    </p>
                                    <hr class="w-full h-1 py-0 bg-gray-100 border-0 rounded md:my-4 dark:bg-gray-700"></hr>

                                    <div class="relative overflow-x-auto">
                                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                            </thead>
                                            <tbody>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        NPA IDI
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        212131312
                                                    </td>
                                                </tr>
                                                <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Wilayah IDI
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Jawa Timur
                                                    </td>
                                                </tr>
                                                <tr class="bg-white dark:bg-gray-800">
                                                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                        Cabang IDI
                                                    </th>
                                                    <td class="px-6 py-4">
                                                        Malang Raya
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>



                                </div>
                            </div>

                            {/* <div class="flex grid-cols-2 items-center">
                                <div className="flex justify-start items-center">
                                    <img class="w-16 h-16 rounded-full" src="/Asset/main-avatar.svg" alt="user photo" />
                                    <div className="section-avatar px-6">
                                        <p class="text-primary-600 text-xl font-semibold">Dr. Lissa Nur Aini. S.T., M.T</p>
                                        <p className="font-regular text-gray-400">KTP-65441645646464</p>
                                    </div>
                                </div>
                                <div class="flex justify-end">
                                    <button type="button" class="text-white bg-[#E00F0F] hover:bg-[#AB1616]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 justify-end">
                                        <svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                                            <path d="M14.1042 6.39014C14.1042 6.39014 13.6517 12.0026 13.3892 14.3668C13.2642 15.496 12.5667 16.1576 11.4242 16.1785C9.24999 16.2176 7.07332 16.2201 4.89999 16.1743C3.80082 16.1518 3.11499 15.4818 2.99249 14.3726C2.72832 11.9876 2.27832 6.39014 2.27832 6.39014" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M15.2567 3.69975H1.125" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12.5335 3.69974C11.8793 3.69974 11.316 3.23724 11.1877 2.5964L10.9852 1.58307C10.8602 1.11557 10.4368 0.792236 9.95432 0.792236H6.42682C5.94432 0.792236 5.52099 1.11557 5.39599 1.58307L5.19349 2.5964C5.06516 3.23724 4.50182 3.69974 3.84766 3.69974" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Hapus Data
                                    </button>
                                    <button type="button" class="text-white bg-[#FFC107] hover:bg-[#D9A509]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-semibold rounded-lg text-sm px-5 py-3.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2 mb-2 justify-end">
                                        <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M8.57699 0.824219H5.46116C2.89866 0.824219 1.29199 2.63839 1.29199 5.20672V12.1351C1.29199 14.7034 2.89116 16.5176 5.46116 16.5176H12.8145C15.3853 16.5176 16.9845 14.7034 16.9845 12.1351V8.77838" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.35652 7.60074L12.584 1.37324C13.3599 0.598242 14.6174 0.598242 15.3932 1.37324L16.4074 2.38741C17.1832 3.16324 17.1832 4.42158 16.4074 5.19658L10.1499 11.4541C9.81069 11.7932 9.35069 11.9841 8.87069 11.9841H5.74902L5.82736 8.83408C5.83902 8.37074 6.02819 7.92908 6.35652 7.60074Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M11.6377 2.33545L15.4427 6.14045" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                        Edit Data
                                    </button>
                                </div>
                            </div> */}







                        </div>
                    </div>


                </div>
            </div>
            {/* endmaincontent */}
        </div>


    );
}