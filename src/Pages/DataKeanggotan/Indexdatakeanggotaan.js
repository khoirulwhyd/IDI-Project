import React from "react";
import { Link } from "react-router-dom";
import '../css/keanggotan.css'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    RectangleGroupIcon,
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    DocumentChartBarIcon,
    UserGroupIcon,
    DocumentCheckIcon,
} from "@heroicons/react/24/solid";
import {
    Chart,
    initTE,
} from "tw-elements";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function DataKeanggotaan() {
    const [open, setOpen] = React.useState(0);
    initTE({ Chart });
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
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
            {/* sidebar */}
            <aside id="logo-sidebar" class="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div class="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <ul class="space-y-2 font-medium">

                        <List className="text-sm">
                            <ListItem className="">
                                <ListItemPrefix>
                                    <RectangleGroupIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Dashboard
                            </ListItem>
                            <ListItem className="bg-primary-600 text-gray-50">
                                <ListItemPrefix>
                                    <UserGroupIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Data Keanggotaan
                            </ListItem>
                            <Accordion
                                open={open === 1}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === 1}>
                                    <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                        <ListItemPrefix>
                                            <PresentationChartBarIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="mr-auto font-normal text-sm">
                                            Personal Data
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>
                                <AccordionBody className="py-1">
                                    <List className="p-0">
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Data Pribadi
                                        </ListItem>
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Data Pendidikan
                                        </ListItem>
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Data Pekerjaan
                                        </ListItem>
                                    </List>
                                </AccordionBody>
                            </Accordion>
                            <Accordion
                                open={open === 2}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                    />
                                }
                            >
                                <ListItem>
                                    <ListItemPrefix>
                                        <Cog6ToothIcon className="h-5 w-5" />
                                    </ListItemPrefix>
                                    Data Praktik
                                </ListItem>
                                <ListItem className="p-0" selected={open === 2}>
                                    <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                        <ListItemPrefix>
                                            <DocumentCheckIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="mr-auto font-normal text-sm">
                                            STR dan SIP
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>
                                <AccordionBody className="py-1">
                                    <List className="p-0">
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            STR
                                        </ListItem>
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            SIP
                                        </ListItem>
                                    </List>
                                </AccordionBody>
                            </Accordion>
                        </List>





                    </ul>
                </div>
            </aside>
            {/* endsidebar */}

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