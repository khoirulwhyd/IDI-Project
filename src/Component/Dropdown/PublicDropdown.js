import React from "react";
import {
    Typography, Button, List, ListItem, ListItemPrefix, Menu, MenuHandler, MenuList, MenuItem, Avatar, Accordion, AccordionHeader, AccordionBody,
} from "@material-tailwind/react";

import { RectangleGroupIcon, PowerIcon, UserGroupIcon, DocumentCheckIcon, AcademicCapIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function PublicDropdown() {
    const profileMenuItems = [
        {
            label: "Login",
            icon: PowerIcon,
        },
    ];
    const Register = [
        {
            label: "Registrasi",
            icon: PowerIcon,
        },
    ];
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    return (
        <>
            <div className="flex items-center">
                <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
                    <MenuHandler>
                        <Button
                            variant="text"
                            color="white"
                            className="flex items-center gap-1 rounded-lg py-3 pr-2 pl-0.5 lg:ml-auto bg-primary-600 px-4"
                        >
                            IDI Membership
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
                                        ? "hover:bg-primary-600"
                                        : ""
                                        }`}
                                >
                                    <Typography
                                        as="span"
                                        variant="small"
                                        className="font-normal"
                                        color={isLastItem ? "primary" : "inherit"}
                                    >
                                        {label}
                                    </Typography>
                                </MenuItem>
                            );
                        })};

                        {Register.map(({ label, icon }, key) => {
                            const isLastItem = key === Register.length - 1;
                            return (
                                <MenuItem
                                    key={label}
                                    onClick={closeMenu}
                                    className={`flex items-center gap-2 rounded ${isLastItem
                                        ? "hover:bg-primary-600"
                                        : ""
                                        }`}
                                >
                                    <Typography
                                        as="span"
                                        variant="small"
                                        className="font-normal"
                                        color={isLastItem ? "primary" : "inherit"}
                                    >
                                        {label}
                                    </Typography>
                                </MenuItem>
                            );
                        })};
                        
                    </MenuList>
                </Menu>
            </div>
        </>
    )
}