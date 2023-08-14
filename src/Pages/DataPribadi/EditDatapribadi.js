import React from "react";
import { Link } from 'react-router-dom';

//Material
import {
    Typography, Button, List, ListItem, ListItemPrefix, Menu, MenuHandler, MenuList, MenuItem, Avatar, Accordion, AccordionHeader, AccordionBody,
} from "@material-tailwind/react";


//dropdown data profile


//icon
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { RectangleGroupIcon, PowerIcon, UserGroupIcon, DocumentCheckIcon, AcademicCapIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";
export default function Editdatapribadi () {

    const profileMenuItems = [
        {
            label: "Logout",
            icon: PowerIcon,
        },
    ];
    
    const [open, setOpen] = React.useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    // handler menu
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);


    return(
        <>
            {/* header */}
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

                                <div className="flex items-center">
                                    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                                        <MenuHandler>
                                            <Button
                                                variant="text"
                                                color="blue-gray"
                                                className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                                            >
                                                <Avatar
                                                    variant="circular"
                                                    size="sm"
                                                    alt="tania andrew"
                                                    className=" border-gray-900 p-0.5"
                                                    src="/Asset/avatars.svg"
                                                />
                                                <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`h-4 w-4 transition-transform ${isMenuOpen ? "rotate-180" : ""
                                                        }`}
                                                />
                                            </Button>
                                        </MenuHandler>
                                        <MenuList className="p-1 px-2 py-4">
                                            {profileMenuItems.map(({ label, icon }, key) => {
                                                const isLastItem = key === profileMenuItems.length - 1;
                                                return (
                                                    <MenuItem
                                                        key={label}
                                                        onClick={closeMenu}
                                                        className={`flex items-center gap-2 rounded ${isLastItem
                                                            ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                                            : ""
                                                            }`}
                                                    >
                                                        {React.createElement(icon, {
                                                            className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                                                            strokeWidth: 2,
                                                        })}
                                                        <Typography
                                                            as="span"
                                                            variant="small"
                                                            className="font-normal"
                                                            color={isLastItem ? "red" : "inherit"}
                                                        >
                                                            {label}
                                                        </Typography>
                                                    </MenuItem>
                                                );
                                            })}
                                        </MenuList>
                                    </Menu>
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
            {/* end header */}
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
                            <ListItem className=" bg-primary-600 text-gray-50">
                                <ListItemPrefix>
                                    <UserGroupIcon className="h-5 w-5" />
                                </ListItemPrefix>
                                Data Pribadi
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
                                            <BuildingOfficeIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="mr-auto font-normal text-sm">
                                            Data Profesi
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>
                                <AccordionBody className="py-1">
                                    <List className="p-0">
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Dokter Umum
                                        </ListItem>
                                        <ListItem className="text-sm text-primary-600">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Dokter Spesialis
                                        </ListItem>

                                    </List>
                                </AccordionBody>
                            </Accordion>

                            {/* dataakademis */}
                            <Accordion
                                open={open === 2}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${open === 2 ? "rotate-180" : ""}`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === 2}>
                                    <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                        <ListItemPrefix>
                                            <AcademicCapIcon className="h-5 w-5" />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className="mr-auto font-normal text-sm">
                                            Data Akademis
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>
                                <AccordionBody className="py-1">
                                    <List className="p-0">
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Akademis S2
                                        </ListItem>
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Akademis S3
                                        </ListItem>

                                    </List>
                                </AccordionBody>
                            </Accordion>
                            {/* end sidebar akademis */}
                            <Accordion
                                open={open === 3}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${open === 3 ? "rotate-180" : ""}`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === 3}>
                                    <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
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
                                            Surat Tanda Registrasi
                                        </ListItem>
                                        <ListItem className="text-sm">
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            Surat izin Praktik
                                        </ListItem>
                                    </List>
                                </AccordionBody>
                            </Accordion>
                        </List>
                    </ul>
                </div>
            </aside>
        </>
    )
}