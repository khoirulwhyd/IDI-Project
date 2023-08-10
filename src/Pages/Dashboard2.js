import React from "react";
import "./css/dashboard.css";
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
} from "@heroicons/react/24/solid";
import {
    Chart,
    initTE,
} from "tw-elements";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
export default function Dashboard2() {
    const [open, setOpen] = React.useState(0);
    initTE({ Chart });
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    
    return(
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
                            <ListItem className="bg-primary-600 text-gray-50">
                                <ListItemPrefix>
                                    <RectangleGroupIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Dashboard
                            </ListItem> 
                            <ListItem>
                                <ListItemPrefix>
                                    <UserCircleIcon className="h-5 w-5" />
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
                                            <ShoppingBagIcon className="h-5 w-5" />
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
            <div class="p-4 sm:ml-64">
                <div class="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                    <div class="grid grid-cols-3 gap-4 mb-4">
                        {/*start card rumah sakit */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.875 5.77079C16.875 4.60079 16.875 4.01496 16.5942 3.59496C16.4725 3.4129 16.3162 3.25659 16.1342 3.13496C15.7667 2.88913 15.2725 2.85829 14.3717 2.85496C14.375 3.09746 14.375 3.35163 14.375 3.61329V4.72913H15.2083C15.3741 4.72913 15.5331 4.79497 15.6503 4.91218C15.7675 5.02939 15.8333 5.18837 15.8333 5.35413C15.8333 5.51989 15.7675 5.67886 15.6503 5.79607C15.5331 5.91328 15.3741 5.97913 15.2083 5.97913H14.375V7.22913H15.2083C15.3741 7.22913 15.5331 7.29497 15.6503 7.41218C15.7675 7.52939 15.8333 7.68837 15.8333 7.85413C15.8333 8.01989 15.7675 8.17886 15.6503 8.29607C15.5331 8.41328 15.3741 8.47913 15.2083 8.47913H14.375V9.72913H15.2083C15.3741 9.72913 15.5331 9.79497 15.6503 9.91218C15.7675 10.0294 15.8333 10.1884 15.8333 10.3541C15.8333 10.5199 15.7675 10.6789 15.6503 10.7961C15.5331 10.9133 15.3741 10.9791 15.2083 10.9791H14.375V16.3958H13.125V3.68746C13.125 2.11579 13.125 1.33079 12.6367 0.842459C12.1483 0.354126 11.3633 0.354126 9.79167 0.354126H8.125C6.55333 0.354126 5.76833 0.354126 5.28 0.842459C4.79167 1.33079 4.79167 2.11579 4.79167 3.68746V16.3958H3.54167V10.9791H2.70833C2.54257 10.9791 2.3836 10.9133 2.26639 10.7961C2.14918 10.6789 2.08333 10.5199 2.08333 10.3541C2.08333 10.1884 2.14918 10.0294 2.26639 9.91218C2.3836 9.79497 2.54257 9.72913 2.70833 9.72913H3.54167V8.47913H2.70833C2.54257 8.47913 2.3836 8.41328 2.26639 8.29607C2.14918 8.17886 2.08333 8.01989 2.08333 7.85413C2.08333 7.68837 2.14918 7.52939 2.26639 7.41218C2.3836 7.29497 2.54257 7.22913 2.70833 7.22913H3.54167V5.97913H2.70833C2.54257 5.97913 2.3836 5.91328 2.26639 5.79607C2.14918 5.67886 2.08333 5.51989 2.08333 5.35413C2.08333 5.18837 2.14918 5.02939 2.26639 4.91218C2.3836 4.79497 2.54257 4.72913 2.70833 4.72913H3.54167V3.61246C3.54167 3.35163 3.54167 3.09746 3.545 2.85413C2.64417 2.85829 2.15 2.88913 1.7825 3.13496C1.60044 3.25659 1.44413 3.4129 1.3225 3.59496C1.04167 4.01496 1.04167 4.60079 1.04167 5.77079V16.3958H0.625C0.45924 16.3958 0.300269 16.4616 0.183058 16.5788C0.065848 16.6961 0 16.855 0 17.0208C0 17.1866 0.065848 17.3455 0.183058 17.4627C0.300269 17.5799 0.45924 17.6458 0.625 17.6458H17.2917C17.4574 17.6458 17.6164 17.5799 17.7336 17.4627C17.8508 17.3455 17.9167 17.1866 17.9167 17.0208C17.9167 16.855 17.8508 16.6961 17.7336 16.5788C17.6164 16.4616 17.4574 16.3958 17.2917 16.3958H16.875V5.77079ZM8.95833 2.22913C9.12409 2.22913 9.28306 2.29497 9.40027 2.41218C9.51748 2.52939 9.58333 2.68837 9.58333 2.85413V3.89579H10.625C10.7908 3.89579 10.9497 3.96164 11.0669 4.07885C11.1842 4.19606 11.25 4.35503 11.25 4.52079C11.25 4.68655 11.1842 4.84552 11.0669 4.96273C10.9497 5.07994 10.7908 5.14579 10.625 5.14579H9.58333V6.18746C9.58333 6.35322 9.51748 6.51219 9.40027 6.6294C9.28306 6.74661 9.12409 6.81246 8.95833 6.81246C8.79257 6.81246 8.6336 6.74661 8.51639 6.6294C8.39918 6.51219 8.33333 6.35322 8.33333 6.18746V5.14579H7.29167C7.12591 5.14579 6.96694 5.07994 6.84973 4.96273C6.73251 4.84552 6.66667 4.68655 6.66667 4.52079C6.66667 4.35503 6.73251 4.19606 6.84973 4.07885C6.96694 3.96164 7.12591 3.89579 7.29167 3.89579H8.33333V2.85413C8.33333 2.68837 8.39918 2.52939 8.51639 2.41218C8.6336 2.29497 8.79257 2.22913 8.95833 2.22913ZM6.66667 8.68746C6.66667 8.5217 6.73251 8.36273 6.84973 8.24552C6.96694 8.12831 7.12591 8.06246 7.29167 8.06246H10.625C10.7908 8.06246 10.9497 8.12831 11.0669 8.24552C11.1842 8.36273 11.25 8.5217 11.25 8.68746C11.25 8.85322 11.1842 9.01219 11.0669 9.1294C10.9497 9.24661 10.7908 9.31246 10.625 9.31246H7.29167C7.12591 9.31246 6.96694 9.24661 6.84973 9.1294C6.73251 9.01219 6.66667 8.85322 6.66667 8.68746ZM6.66667 11.1875C6.66667 11.0217 6.73251 10.8627 6.84973 10.7455C6.96694 10.6283 7.12591 10.5625 7.29167 10.5625H10.625C10.7908 10.5625 10.9497 10.6283 11.0669 10.7455C11.1842 10.8627 11.25 11.0217 11.25 11.1875C11.25 11.3532 11.1842 11.5122 11.0669 11.6294C10.9497 11.7466 10.7908 11.8125 10.625 11.8125H7.29167C7.12591 11.8125 6.96694 11.7466 6.84973 11.6294C6.73251 11.5122 6.66667 11.3532 6.66667 11.1875ZM8.95833 13.8958C9.12409 13.8958 9.28306 13.9616 9.40027 14.0788C9.51748 14.1961 9.58333 14.355 9.58333 14.5208V16.3958H8.33333V14.5208C8.33333 14.355 8.39918 14.1961 8.51639 14.0788C8.6336 13.9616 8.79257 13.8958 8.95833 13.8958Z" fill="#005FDB" />
                                    </svg>
                                </div>
                                
                                <p class="px-2 text-lg justify-center font-semibold text-gray-500">
                                    Rumah Sakit
                                </p>
                            </div>
                            <a href="#">
                                <h5 class="mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">50</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Di semua kecamatan sudah berdiri rumah sakit</p>
                            <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                Lihat Semua Data
                                <div class="arrowRight">
                                    {/* ctaicon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                        <path d="M10.3438 4.32861L0.96875 4.32861" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.56274 0.56337L10.344 4.32837L6.56274 8.09399" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        {/* end card rumahsakit  */}
                        {/* start card puskesmas */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.41667 0.496826C5.9326 0.496821 6.4359 0.656386 6.85759 0.953647C7.27927 1.25091 7.5987 1.67132 7.77208 2.15724H15.2083V3.20516L13.3333 4.46849V14.6635H14.5833C14.6938 14.6635 14.7998 14.7074 14.878 14.7855C14.9561 14.8637 15 14.9697 15 15.0802C15 15.1907 14.9561 15.2966 14.878 15.3748C14.7998 15.4529 14.6938 15.4968 14.5833 15.4968H13.3333V15.5031H1.66667V15.4968H0.416667C0.30616 15.4968 0.200179 15.4529 0.122039 15.3748C0.0438988 15.2966 0 15.1907 0 15.0802C0 14.9697 0.0438988 14.8637 0.122039 14.7855C0.200179 14.7074 0.30616 14.6635 0.416667 14.6635H1.66667V4.45391L0 3.19141V2.15683H3.06125C3.2347 1.67098 3.55416 1.25066 3.97584 0.953477C4.39752 0.656294 4.90079 0.49679 5.41667 0.496826ZM5.83333 2.58016V1.74683H5V2.58016H4.16667V3.41349H5V4.24683H5.83333V3.41349H6.66667V2.58016H5.83333ZM11.6667 7.99683V14.6635H8.33333V7.99683H11.6667ZM6.25 7.99683H3.33333V10.9135H6.25V7.99683Z" fill="#005FDB" />
                                    </svg>
                                </div>

                                <p class="px-2 text-lg justify-center font-semibold text-gray-500">
                                    Puskesmas
                                </p>
                            </div>
                            <a href="#">
                                <h5 class="mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">150</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Di semua kecamatan sudah berdiri puskesmas
                                yang melayani masyarakat</p>
                            <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                Lihat Semua Data
                                <div class="arrowRight">
                                    {/* ctaicon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                        <path d="M10.3438 4.32861L0.96875 4.32861" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.56274 0.56337L10.344 4.32837L6.56274 8.09399" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </a>
                        </div>
                        {/* end card puskesmas */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                                        <path d="M16.4525 9.26981L8.95249 0.936479C8.63665 0.584813 8.02999 0.584813 7.71415 0.936479L0.214153 9.26981C0.1062 9.38948 0.0353404 9.53793 0.01019 9.69711C-0.0149603 9.8563 0.00668229 10.0194 0.0724864 10.1665C0.20582 10.4673 0.504153 10.6606 0.83332 10.6606H2.49999V16.494C2.49999 16.715 2.58778 16.927 2.74406 17.0832C2.90034 17.2395 3.11231 17.3273 3.33332 17.3273H13.3333C13.5543 17.3273 13.7663 17.2395 13.9226 17.0832C14.0789 16.927 14.1667 16.715 14.1667 16.494V10.6606H15.8333C15.9947 10.6613 16.1528 10.615 16.2883 10.5274C16.4239 10.4398 16.531 10.3147 16.5966 10.1672C16.6623 10.0198 16.6836 9.85643 16.658 9.69708C16.6324 9.53774 16.561 9.38928 16.4525 9.26981ZM11.6667 11.494H9.16665V13.994H7.49999V11.494H4.99999V9.82731H7.49999V7.32731H9.16665V9.82731H11.6667V11.494Z" fill="#005FDB" />
                                    </svg>
                                </div>

                                <p class="px-2 text-lg justify-center font-semibold text-gray-500">
                                    Klinik/ Terapi
                                </p>
                            </div>
                            <a href="#">
                                <h5 class="mb-2 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">250</h5>
                            </a>
                            <p class="mb-3 font-normal text-gray-500 dark:text-gray-400">Di semua kecamatan sudah berdiri klinik atau
                                terapi yang sedia melayani masyarakat</p>
                            <a href="#" class="inline-flex items-center text-blue-600 hover:underline">
                                Lihat Semua Data
                                <div class="arrowRight">
                                    {/* ctaicon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                        <path d="M10.3438 4.32861L0.96875 4.32861" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.56274 0.56337L10.344 4.32837L6.56274 8.09399" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </div>
                            </a>
                        </div>


                        
                        
                    </div>
                    <div class="grid grid-cols-0 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3708 4.67507C12.3708 6.21329 11.9885 8.21951 11.4005 7.91507C11.1601 8.70027 10.6553 9.37806 9.97188 9.83334C9.28845 10.2886 8.46851 10.4933 7.65129 10.4127C6.83406 10.3321 6.06992 9.97112 5.48863 9.39108C4.90733 8.81103 4.5447 8.04768 4.46232 7.23062C3.87877 6.20974 3.11344 4.16396 5.08099 2.56929C5.11655 2.55773 5.13788 2.46174 5.16988 2.3204C5.29166 1.78574 5.56144 0.597291 7.26321 0.824402C8.57566 0.999068 12.3708 1.6764 12.3708 4.67507ZM10.6792 5.64485C10.6792 5.64485 10.4783 6.2324 10.6668 6.88707C10.6643 7.58511 10.3883 8.25435 9.89787 8.75112C9.40748 9.24789 8.74185 9.53256 8.04391 9.54402C7.34596 9.55549 6.67134 9.29282 6.1649 8.81243C5.65846 8.33203 5.36058 7.6722 5.33521 6.97462C5.39966 6.73018 5.39966 6.3164 5.39921 5.8564C5.39877 5.02662 5.39788 4.04751 5.77788 3.6484C8.43966 5.42129 10.6792 5.64485 10.6792 5.64485Z" fill="#005FDB" />
                                        <path d="M3.11111 14.5374C3.11111 14.0565 3.36578 13.6351 3.748 13.4005C3.73344 13.3452 3.71981 13.2896 3.70711 13.2338C3.63967 12.9302 3.58701 12.6234 3.54933 12.3147C3.51115 12.0189 3.48815 11.7213 3.48044 11.4231C1.60444 12.1596 0 13.4431 0 14.7907V17.204H16V14.7907C16 13.5 14.5289 12.2685 12.7564 11.5196V11.532C12.7644 11.8031 12.7493 12.1143 12.72 12.4134C12.6933 12.6907 12.6538 12.9671 12.6062 13.204H12.8889C12.9714 13.2041 13.0523 13.2271 13.1225 13.2705C13.1926 13.3139 13.2493 13.376 13.2862 13.4498L13.7307 14.3387C13.7618 14.4005 13.7778 14.4685 13.7778 14.5374V15.4263C13.7778 15.5441 13.731 15.6572 13.6476 15.7405C13.5643 15.8239 13.4512 15.8707 13.3333 15.8707H12.4444V14.9818H12.8889V14.6423L12.6142 14.0929H11.3858L11.1111 14.6423V14.9818H11.5556V15.8707H10.6667C10.5488 15.8707 10.4357 15.8239 10.3524 15.7405C10.269 15.6572 10.2222 15.5441 10.2222 15.4263V14.5374C10.2222 14.4685 10.2382 14.4005 10.2693 14.3387L10.7138 13.4498C10.7507 13.376 10.8074 13.3139 10.8775 13.2705C10.9477 13.2271 11.0286 13.2041 11.1111 13.204H11.6956C11.7053 13.1658 11.7151 13.1236 11.7249 13.0769C11.7693 12.8676 11.8089 12.6023 11.8356 12.328C11.8622 12.0534 11.8747 11.7809 11.868 11.5569C11.8663 11.4641 11.8591 11.3715 11.8462 11.2796C11.8364 11.2165 11.8267 11.1876 11.8249 11.1814C11.8244 11.18 11.824 11.1796 11.8249 11.1805L11.8262 11.18C11.5904 11.1068 11.3519 11.0426 11.1111 10.9876C10.8876 10.9365 10.6564 11.244 10.5556 11.4365H5.33333C5.32036 11.4117 5.30761 11.3868 5.29511 11.3618C5.20089 11.1743 5.08489 10.9427 4.88889 10.9876C4.71778 11.0263 4.54667 11.0707 4.37556 11.1196C4.37004 11.1975 4.36767 11.2757 4.36844 11.3538C4.37022 11.5996 4.39378 11.9005 4.43156 12.2045C4.46933 12.5076 4.52044 12.8027 4.57378 13.0356C4.58889 13.1027 4.604 13.1631 4.61822 13.2151C4.87232 13.2485 5.1114 13.3545 5.30685 13.5202C5.50231 13.686 5.64585 13.9046 5.72029 14.1498C5.79473 14.395 5.79692 14.6565 5.7266 14.903C5.65627 15.1494 5.51642 15.3704 5.32377 15.5394C5.13112 15.7084 4.89384 15.8183 4.64034 15.856C4.38684 15.8936 4.12786 15.8574 3.89441 15.7517C3.66095 15.646 3.46291 15.4752 3.32399 15.2598C3.18507 15.0445 3.11116 14.7936 3.11111 14.5374Z" fill="#005FDB" />
                                        <path d="M4.88889 14.5373C4.88889 14.7924 4.68356 14.9884 4.44444 14.9884C4.20533 14.9884 4 14.7928 4 14.5373C4 14.2822 4.20533 14.0862 4.44444 14.0862C4.68356 14.0862 4.88889 14.2817 4.88889 14.5373Z" fill="#005FDB" />
                                    </svg>
                                </div>

                                <p class="px-2 text-lg justify-center font-semibold text-gray-500">
                                    Persebaan Dokter Spesialis di Malang Raya
                                </p>
                            </div>
                            <div class="mx-auto w-full overflow-hidden">
                                
                            </div>
                            
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3708 4.67507C12.3708 6.21329 11.9885 8.21951 11.4005 7.91507C11.1601 8.70027 10.6553 9.37806 9.97188 9.83334C9.28845 10.2886 8.46851 10.4933 7.65129 10.4127C6.83406 10.3321 6.06992 9.97112 5.48863 9.39108C4.90733 8.81103 4.5447 8.04768 4.46232 7.23062C3.87877 6.20974 3.11344 4.16396 5.08099 2.56929C5.11655 2.55773 5.13788 2.46174 5.16988 2.3204C5.29166 1.78574 5.56144 0.597291 7.26321 0.824402C8.57566 0.999068 12.3708 1.6764 12.3708 4.67507ZM10.6792 5.64485C10.6792 5.64485 10.4783 6.2324 10.6668 6.88707C10.6643 7.58511 10.3883 8.25435 9.89787 8.75112C9.40748 9.24789 8.74185 9.53256 8.04391 9.54402C7.34596 9.55549 6.67134 9.29282 6.1649 8.81243C5.65846 8.33203 5.36058 7.6722 5.33521 6.97462C5.39966 6.73018 5.39966 6.3164 5.39921 5.8564C5.39877 5.02662 5.39788 4.04751 5.77788 3.6484C8.43966 5.42129 10.6792 5.64485 10.6792 5.64485Z" fill="#005FDB" />
                                        <path d="M3.11111 14.5374C3.11111 14.0565 3.36578 13.6351 3.748 13.4005C3.73344 13.3452 3.71981 13.2896 3.70711 13.2338C3.63967 12.9302 3.58701 12.6234 3.54933 12.3147C3.51115 12.0189 3.48815 11.7213 3.48044 11.4231C1.60444 12.1596 0 13.4431 0 14.7907V17.204H16V14.7907C16 13.5 14.5289 12.2685 12.7564 11.5196V11.532C12.7644 11.8031 12.7493 12.1143 12.72 12.4134C12.6933 12.6907 12.6538 12.9671 12.6062 13.204H12.8889C12.9714 13.2041 13.0523 13.2271 13.1225 13.2705C13.1926 13.3139 13.2493 13.376 13.2862 13.4498L13.7307 14.3387C13.7618 14.4005 13.7778 14.4685 13.7778 14.5374V15.4263C13.7778 15.5441 13.731 15.6572 13.6476 15.7405C13.5643 15.8239 13.4512 15.8707 13.3333 15.8707H12.4444V14.9818H12.8889V14.6423L12.6142 14.0929H11.3858L11.1111 14.6423V14.9818H11.5556V15.8707H10.6667C10.5488 15.8707 10.4357 15.8239 10.3524 15.7405C10.269 15.6572 10.2222 15.5441 10.2222 15.4263V14.5374C10.2222 14.4685 10.2382 14.4005 10.2693 14.3387L10.7138 13.4498C10.7507 13.376 10.8074 13.3139 10.8775 13.2705C10.9477 13.2271 11.0286 13.2041 11.1111 13.204H11.6956C11.7053 13.1658 11.7151 13.1236 11.7249 13.0769C11.7693 12.8676 11.8089 12.6023 11.8356 12.328C11.8622 12.0534 11.8747 11.7809 11.868 11.5569C11.8663 11.4641 11.8591 11.3715 11.8462 11.2796C11.8364 11.2165 11.8267 11.1876 11.8249 11.1814C11.8244 11.18 11.824 11.1796 11.8249 11.1805L11.8262 11.18C11.5904 11.1068 11.3519 11.0426 11.1111 10.9876C10.8876 10.9365 10.6564 11.244 10.5556 11.4365H5.33333C5.32036 11.4117 5.30761 11.3868 5.29511 11.3618C5.20089 11.1743 5.08489 10.9427 4.88889 10.9876C4.71778 11.0263 4.54667 11.0707 4.37556 11.1196C4.37004 11.1975 4.36767 11.2757 4.36844 11.3538C4.37022 11.5996 4.39378 11.9005 4.43156 12.2045C4.46933 12.5076 4.52044 12.8027 4.57378 13.0356C4.58889 13.1027 4.604 13.1631 4.61822 13.2151C4.87232 13.2485 5.1114 13.3545 5.30685 13.5202C5.50231 13.686 5.64585 13.9046 5.72029 14.1498C5.79473 14.395 5.79692 14.6565 5.7266 14.903C5.65627 15.1494 5.51642 15.3704 5.32377 15.5394C5.13112 15.7084 4.89384 15.8183 4.64034 15.856C4.38684 15.8936 4.12786 15.8574 3.89441 15.7517C3.66095 15.646 3.46291 15.4752 3.32399 15.2598C3.18507 15.0445 3.11116 14.7936 3.11111 14.5374Z" fill="#005FDB" />
                                        <path d="M4.88889 14.5373C4.88889 14.7924 4.68356 14.9884 4.44444 14.9884C4.20533 14.9884 4 14.7928 4 14.5373C4 14.2822 4.20533 14.0862 4.44444 14.0862C4.68356 14.0862 4.88889 14.2817 4.88889 14.5373Z" fill="#005FDB" />
                                    </svg>
                                </div>

                                <p class="px-2 text-lg justify-center font-semibold text-gray-500">
                                    Perbandingan Dokter Umum dan Spesialis
                                </p>
                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline ml-4">
                                    Lihat Semua Data
                                    <div class="arrowRight">
                                        {/* ctaicon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                            <path d="M10.3438 4.32861L0.96875 4.32861" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.56274 0.56337L10.344 4.32837L6.56274 8.09399" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            {/* <div class="mx-auto w-full overflow-hidden">
                                <canvas
                                    data-te-chart="bar"
                                    data-te-dataset-label="Traffic"
                                    data-te-labels="['Monday', 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' , 'Saturday' , 'Sunday ', 'Sunday ', 'Sunday ']"
                                    data-te-dataset-data="[2112, 2343, 2545, 3423, 2365, 1985, 987, 4000, 4566]">
                                </canvas>
                            </div> */}

                        </div>
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3708 4.67507C12.3708 6.21329 11.9885 8.21951 11.4005 7.91507C11.1601 8.70027 10.6553 9.37806 9.97188 9.83334C9.28845 10.2886 8.46851 10.4933 7.65129 10.4127C6.83406 10.3321 6.06992 9.97112 5.48863 9.39108C4.90733 8.81103 4.5447 8.04768 4.46232 7.23062C3.87877 6.20974 3.11344 4.16396 5.08099 2.56929C5.11655 2.55773 5.13788 2.46174 5.16988 2.3204C5.29166 1.78574 5.56144 0.597291 7.26321 0.824402C8.57566 0.999068 12.3708 1.6764 12.3708 4.67507ZM10.6792 5.64485C10.6792 5.64485 10.4783 6.2324 10.6668 6.88707C10.6643 7.58511 10.3883 8.25435 9.89787 8.75112C9.40748 9.24789 8.74185 9.53256 8.04391 9.54402C7.34596 9.55549 6.67134 9.29282 6.1649 8.81243C5.65846 8.33203 5.36058 7.6722 5.33521 6.97462C5.39966 6.73018 5.39966 6.3164 5.39921 5.8564C5.39877 5.02662 5.39788 4.04751 5.77788 3.6484C8.43966 5.42129 10.6792 5.64485 10.6792 5.64485Z" fill="#005FDB" />
                                        <path d="M3.11111 14.5374C3.11111 14.0565 3.36578 13.6351 3.748 13.4005C3.73344 13.3452 3.71981 13.2896 3.70711 13.2338C3.63967 12.9302 3.58701 12.6234 3.54933 12.3147C3.51115 12.0189 3.48815 11.7213 3.48044 11.4231C1.60444 12.1596 0 13.4431 0 14.7907V17.204H16V14.7907C16 13.5 14.5289 12.2685 12.7564 11.5196V11.532C12.7644 11.8031 12.7493 12.1143 12.72 12.4134C12.6933 12.6907 12.6538 12.9671 12.6062 13.204H12.8889C12.9714 13.2041 13.0523 13.2271 13.1225 13.2705C13.1926 13.3139 13.2493 13.376 13.2862 13.4498L13.7307 14.3387C13.7618 14.4005 13.7778 14.4685 13.7778 14.5374V15.4263C13.7778 15.5441 13.731 15.6572 13.6476 15.7405C13.5643 15.8239 13.4512 15.8707 13.3333 15.8707H12.4444V14.9818H12.8889V14.6423L12.6142 14.0929H11.3858L11.1111 14.6423V14.9818H11.5556V15.8707H10.6667C10.5488 15.8707 10.4357 15.8239 10.3524 15.7405C10.269 15.6572 10.2222 15.5441 10.2222 15.4263V14.5374C10.2222 14.4685 10.2382 14.4005 10.2693 14.3387L10.7138 13.4498C10.7507 13.376 10.8074 13.3139 10.8775 13.2705C10.9477 13.2271 11.0286 13.2041 11.1111 13.204H11.6956C11.7053 13.1658 11.7151 13.1236 11.7249 13.0769C11.7693 12.8676 11.8089 12.6023 11.8356 12.328C11.8622 12.0534 11.8747 11.7809 11.868 11.5569C11.8663 11.4641 11.8591 11.3715 11.8462 11.2796C11.8364 11.2165 11.8267 11.1876 11.8249 11.1814C11.8244 11.18 11.824 11.1796 11.8249 11.1805L11.8262 11.18C11.5904 11.1068 11.3519 11.0426 11.1111 10.9876C10.8876 10.9365 10.6564 11.244 10.5556 11.4365H5.33333C5.32036 11.4117 5.30761 11.3868 5.29511 11.3618C5.20089 11.1743 5.08489 10.9427 4.88889 10.9876C4.71778 11.0263 4.54667 11.0707 4.37556 11.1196C4.37004 11.1975 4.36767 11.2757 4.36844 11.3538C4.37022 11.5996 4.39378 11.9005 4.43156 12.2045C4.46933 12.5076 4.52044 12.8027 4.57378 13.0356C4.58889 13.1027 4.604 13.1631 4.61822 13.2151C4.87232 13.2485 5.1114 13.3545 5.30685 13.5202C5.50231 13.686 5.64585 13.9046 5.72029 14.1498C5.79473 14.395 5.79692 14.6565 5.7266 14.903C5.65627 15.1494 5.51642 15.3704 5.32377 15.5394C5.13112 15.7084 4.89384 15.8183 4.64034 15.856C4.38684 15.8936 4.12786 15.8574 3.89441 15.7517C3.66095 15.646 3.46291 15.4752 3.32399 15.2598C3.18507 15.0445 3.11116 14.7936 3.11111 14.5374Z" fill="#005FDB" />
                                        <path d="M4.88889 14.5373C4.88889 14.7924 4.68356 14.9884 4.44444 14.9884C4.20533 14.9884 4 14.7928 4 14.5373C4 14.2822 4.20533 14.0862 4.44444 14.0862C4.68356 14.0862 4.88889 14.2817 4.88889 14.5373Z" fill="#005FDB" />
                                    </svg>
                                </div>

                                <p class="px-2 text-lg justify-center font-semibold text-gray-500">
                                    Anggota habis masa STR dan SIP
                                </p>
                                <a href="#" class="inline-flex items-center text-blue-600 hover:underline ml-12">
                                    Lihat Semua Data
                                    <div class="arrowRight">
                                        {/* ctaicon */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9" viewBox="0 0 11 9" fill="none">
                                            <path d="M10.3438 4.32861L0.96875 4.32861" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M6.56274 0.56337L10.344 4.32837L6.56274 8.09399" stroke="#007BFF" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                </a>
                            </div>
                            <div class="mx-auto w-full overflow-hidden">
                                <div class="flex flex-col">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full text-left text-sm font-light">
                                                    <thead class="border-b font-medium text-gray-600 dark:border-neutral-500">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-4">No</th>
                                                            <th scope="col" class="px-6 py-4">Nama</th>
                                                            <th scope="col" class="px-6 py-4">Keterangan</th>
                                                            <th scope="col" class="px-6 py-4">Tanggal</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="border-b dark:border-neutral-500">
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Mark</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Otto</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@mdo</td>
                                                        </tr>
                                                        <tr class="border-b dark:border-neutral-500">
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Jacob</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Thornton</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@fat</td>
                                                        </tr>
                                                        <tr class="border-b dark:border-neutral-500">
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Larry</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Wild</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div class="grid grid-cols-0 gap-4 mb-4">
                        {/* Persebaran dokter */}
                        <div class="max-w-full h-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <div className="section-icon flex items-start justify-start mb-4">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="18" viewBox="0 0 16 18" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12.3708 4.67507C12.3708 6.21329 11.9885 8.21951 11.4005 7.91507C11.1601 8.70027 10.6553 9.37806 9.97188 9.83334C9.28845 10.2886 8.46851 10.4933 7.65129 10.4127C6.83406 10.3321 6.06992 9.97112 5.48863 9.39108C4.90733 8.81103 4.5447 8.04768 4.46232 7.23062C3.87877 6.20974 3.11344 4.16396 5.08099 2.56929C5.11655 2.55773 5.13788 2.46174 5.16988 2.3204C5.29166 1.78574 5.56144 0.597291 7.26321 0.824402C8.57566 0.999068 12.3708 1.6764 12.3708 4.67507ZM10.6792 5.64485C10.6792 5.64485 10.4783 6.2324 10.6668 6.88707C10.6643 7.58511 10.3883 8.25435 9.89787 8.75112C9.40748 9.24789 8.74185 9.53256 8.04391 9.54402C7.34596 9.55549 6.67134 9.29282 6.1649 8.81243C5.65846 8.33203 5.36058 7.6722 5.33521 6.97462C5.39966 6.73018 5.39966 6.3164 5.39921 5.8564C5.39877 5.02662 5.39788 4.04751 5.77788 3.6484C8.43966 5.42129 10.6792 5.64485 10.6792 5.64485Z" fill="#005FDB" />
                                        <path d="M3.11111 14.5374C3.11111 14.0565 3.36578 13.6351 3.748 13.4005C3.73344 13.3452 3.71981 13.2896 3.70711 13.2338C3.63967 12.9302 3.58701 12.6234 3.54933 12.3147C3.51115 12.0189 3.48815 11.7213 3.48044 11.4231C1.60444 12.1596 0 13.4431 0 14.7907V17.204H16V14.7907C16 13.5 14.5289 12.2685 12.7564 11.5196V11.532C12.7644 11.8031 12.7493 12.1143 12.72 12.4134C12.6933 12.6907 12.6538 12.9671 12.6062 13.204H12.8889C12.9714 13.2041 13.0523 13.2271 13.1225 13.2705C13.1926 13.3139 13.2493 13.376 13.2862 13.4498L13.7307 14.3387C13.7618 14.4005 13.7778 14.4685 13.7778 14.5374V15.4263C13.7778 15.5441 13.731 15.6572 13.6476 15.7405C13.5643 15.8239 13.4512 15.8707 13.3333 15.8707H12.4444V14.9818H12.8889V14.6423L12.6142 14.0929H11.3858L11.1111 14.6423V14.9818H11.5556V15.8707H10.6667C10.5488 15.8707 10.4357 15.8239 10.3524 15.7405C10.269 15.6572 10.2222 15.5441 10.2222 15.4263V14.5374C10.2222 14.4685 10.2382 14.4005 10.2693 14.3387L10.7138 13.4498C10.7507 13.376 10.8074 13.3139 10.8775 13.2705C10.9477 13.2271 11.0286 13.2041 11.1111 13.204H11.6956C11.7053 13.1658 11.7151 13.1236 11.7249 13.0769C11.7693 12.8676 11.8089 12.6023 11.8356 12.328C11.8622 12.0534 11.8747 11.7809 11.868 11.5569C11.8663 11.4641 11.8591 11.3715 11.8462 11.2796C11.8364 11.2165 11.8267 11.1876 11.8249 11.1814C11.8244 11.18 11.824 11.1796 11.8249 11.1805L11.8262 11.18C11.5904 11.1068 11.3519 11.0426 11.1111 10.9876C10.8876 10.9365 10.6564 11.244 10.5556 11.4365H5.33333C5.32036 11.4117 5.30761 11.3868 5.29511 11.3618C5.20089 11.1743 5.08489 10.9427 4.88889 10.9876C4.71778 11.0263 4.54667 11.0707 4.37556 11.1196C4.37004 11.1975 4.36767 11.2757 4.36844 11.3538C4.37022 11.5996 4.39378 11.9005 4.43156 12.2045C4.46933 12.5076 4.52044 12.8027 4.57378 13.0356C4.58889 13.1027 4.604 13.1631 4.61822 13.2151C4.87232 13.2485 5.1114 13.3545 5.30685 13.5202C5.50231 13.686 5.64585 13.9046 5.72029 14.1498C5.79473 14.395 5.79692 14.6565 5.7266 14.903C5.65627 15.1494 5.51642 15.3704 5.32377 15.5394C5.13112 15.7084 4.89384 15.8183 4.64034 15.856C4.38684 15.8936 4.12786 15.8574 3.89441 15.7517C3.66095 15.646 3.46291 15.4752 3.32399 15.2598C3.18507 15.0445 3.11116 14.7936 3.11111 14.5374Z" fill="#005FDB" />
                                        <path d="M4.88889 14.5373C4.88889 14.7924 4.68356 14.9884 4.44444 14.9884C4.20533 14.9884 4 14.7928 4 14.5373C4 14.2822 4.20533 14.0862 4.44444 14.0862C4.68356 14.0862 4.88889 14.2817 4.88889 14.5373Z" fill="#005FDB" />
                                    </svg>
                                </div>

                                <p class="px-2 text-lg justify-center font-semibold text-gray-500">
                                    Nama Semua Anggota IDI
                                </p>
                            </div>
                            <div class="mx-auto w-full overflow-hidden">
                                <div class="flex flex-col">
                                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                            <div class="overflow-hidden">
                                                <table class="min-w-full text-left text-sm font-light">
                                                    <thead class="border-b font-medium text-gray-600 dark:border-neutral-500">
                                                        <tr>
                                                            <th scope="col" class="px-6 py-4">No</th>
                                                            <th scope="col" class="px-6 py-4">Nama</th>
                                                            <th scope="col" class="px-6 py-4">Keterangan</th>
                                                            <th scope="col" class="px-6 py-4">Tanggal</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr class="border-b dark:border-neutral-500">
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Mark</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Otto</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@mdo</td>
                                                        </tr>
                                                        <tr class="border-b dark:border-neutral-500">
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Jacob</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Thornton</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@fat</td>
                                                        </tr>
                                                        <tr class="border-b dark:border-neutral-500">
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Larry</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">Wild</td>
                                                            <td class="whitespace-nowrap px-6 py-4 font-medium text-gray-400">@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}