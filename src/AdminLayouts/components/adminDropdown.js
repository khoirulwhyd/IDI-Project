import React from "react";
import {
    Typography, Button, List, ListItem, ListItemPrefix, Menu, MenuHandler, MenuList, MenuItem, Avatar, Accordion, AccordionHeader, AccordionBody,
} from "@material-tailwind/react";

import { RectangleGroupIcon, PowerIcon, UserGroupIcon, DocumentCheckIcon, AcademicCapIcon, BuildingOfficeIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

export default function UserDropdown() {
    const profileMenuItems = [
        {
            label: "Logout",
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
        </>
    )
}