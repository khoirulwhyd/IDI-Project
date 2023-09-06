import React from "react";

export default function FooterUser() {
    return (
        <>
            <footer className="block py-4">
                <div className="container mx-auto px-4">
                    <hr className="mb-4 border-b-1 border-gray-400" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4">
                            <div className="text-sm text-gray-600 font-semibold py-1 text-center md:text-left">
                                Copyright © {new Date().getFullYear()}{" "}
                                <a
                                    href=""
                                    className="text-gray-600 hover:text-blueGray-700 text-sm font-semibold py-1"
                                >
                                    IDI Malang Raya
                                </a>
                            </div>
                        </div>
                        <div className="w-full md:w-8/12 px-4">
                            <ul className="flex flex-wrap list-none md:justify-end  justify-center">
                                <li>
                                    <a
                                        href=""
                                        className="text-gray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                    >
                                        Creative Tim
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-gray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                    >
                                        About Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-gray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href=""
                                        className="text-gray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3"
                                    >
                                        MIT License
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
