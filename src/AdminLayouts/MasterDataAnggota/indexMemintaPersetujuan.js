import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import AdminNav from '../components/adminNav';
import SidebarAdmin from '../components/AdminSidebar.js';


import { useNavigate } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';


export default function IndexMemintaPersetujuan () {


    const [user, setUser] = useState("");
    const navigate = useNavigate();

    //token
    const token = localStorage.getItem("token");

    //function "fetchData"
    const fetchData = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch user from Rest API
        await axios.get('http://localhost:8000/api/profile')
            .then((response) => {
                //set response user to state
                setUser(response.data);
            })
    }

    //hook useEffect
    useEffect(() => {

        //check token empty
        if (!token) {
            //redirect login page
            swal({
                title: "Maaf!",
                type: "warning",
                text: "Anda harus login terlebih dahulu.",
                timer: 2000
            });
            navigate('/adminLogin');
        }
        //call function "fetchData"
        else {
            fetchData();
        }

    }, []);

    //function logout
    const logoutHanlder = async () => {

        //set axios header dengan type Authorization + Bearer token
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        //fetch Rest API
        await axios.post('http://localhost:8000/api/logout')
            .then(() => {

                //remove token from localStorage
                localStorage.removeItem("token");

                //redirect halaman login

                swal("Berhasil Logout!", "Terimakasih!", "success");
                navigate('/adminLogin');
            });
    };

    return (
        <>
            <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 bg-white shadow-lg">
                <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4">
                    {/* Brand */}
                    <a
                        className="text-gray-700 text-sm uppercase hidden lg:inline-block font-semibold"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        <a href="#" class="flex ml-2 md:mr-24">
                            <img src="/Asset/logoidi.png" class="h-8 mr-3" alt="FlowBite Logo" />
                            <span class="self-center text-sm font-bold text-primary-800 sm:text-sm whitespace-nowrap dark:text-white">IDI Malang Raya</span>
                        </a>
                    </a>
                    {/* Form */}
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M21.0002 21L16.6572 16.657M16.6572 16.657C17.4001 15.9141 17.9894 15.0322 18.3914 14.0615C18.7935 13.0909 19.0004 12.0506 19.0004 11C19.0004 9.94938 18.7935 8.90906 18.3914 7.93843C17.9894 6.9678 17.4001 6.08587 16.6572 5.34298C15.9143 4.60009 15.0324 4.0108 14.0618 3.60875C13.0911 3.2067 12.0508 2.99977 11.0002 2.99977C9.9496 2.99977 8.90929 3.2067 7.93866 3.60875C6.96803 4.0108 6.08609 4.60009 5.34321 5.34298C3.84288 6.84331 3 8.87819 3 11C3 13.1218 3.84288 15.1566 5.34321 16.657C6.84354 18.1573 8.87842 19.0002 11.0002 19.0002C13.122 19.0002 15.1569 18.1573 16.6572 16.657Z" stroke="#A7A8A9" stroke-width="1.83333" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search here..."
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
                            />
                        </div>
                    </form>
                    {/* User */}
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                        {/* <AdminDropdown /> */}
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="24" viewBox="0 0 21 24" fill="none">
                            <g clip-path="url(#clip0_676_15288)">
                                <path d="M10.5 12C13.8141 12 16.5 9.31406 16.5 6C16.5 2.68594 13.8141 0 10.5 0C7.18594 0 4.5 2.68594 4.5 6C4.5 9.31406 7.18594 12 10.5 12ZM4.875 19.875C4.875 20.4984 5.37656 21 6 21C6.62344 21 7.125 20.4984 7.125 19.875C7.125 19.2516 6.62344 18.75 6 18.75C5.37656 18.75 4.875 19.2516 4.875 19.875ZM15 13.5281V15.825C16.7109 16.1719 18 17.6906 18 19.5V21.4547C18 21.8109 17.7469 22.1203 17.3953 22.1906L15.8859 22.4906C15.6844 22.5328 15.4875 22.4016 15.4453 22.1953L15.3 21.4594C15.2578 21.2578 15.3891 21.0562 15.5953 21.0187L16.5 20.8359V19.5C16.5 16.5563 12 16.4484 12 19.5891V20.8406L12.9047 21.0234C13.1062 21.0656 13.2375 21.2625 13.2 21.4641L13.0547 22.2C13.0125 22.4016 12.8156 22.5328 12.6141 22.4953L11.1516 22.2984C10.7812 22.2469 10.5047 21.9328 10.5047 21.5531V19.5C10.5047 17.6906 11.7938 16.1766 13.5047 15.825V13.7062C13.4016 13.7391 13.2984 13.7578 13.1953 13.7953C12.3516 14.0906 11.4469 14.2547 10.5047 14.2547C9.5625 14.2547 8.65781 14.0906 7.81406 13.7953C7.46719 13.6734 7.11563 13.5984 6.75469 13.5516V17.3766C7.8375 17.7 8.62969 18.6938 8.62969 19.8797C8.62969 21.3281 7.45313 22.5047 6.00469 22.5047C4.55625 22.5047 3.37969 21.3281 3.37969 19.8797C3.37969 18.6938 4.17187 17.7 5.25469 17.3766V13.6078C2.27344 14.1094 0 16.6781 0 19.8V21.9C0 23.0578 0.942187 24 2.1 24H18.9C20.0578 24 21 23.0578 21 21.9V19.8C21 16.425 18.3375 13.6922 15 13.5281Z" fill="#005FDB" />
                            </g>
                            <defs>
                                <clipPath id="clip0_676_15288">
                                    <rect width="21" height="24" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="px-2 text-sm font-semibold">
                            {user.name}
                        </p>

                        <button
                            onClick={logoutHanlder}
                            type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M5 21C4.45 21 3.979 20.804 3.587 20.412C3.195 20.02 2.99934 19.5493 3 19V5C3 4.45 3.196 3.979 3.588 3.587C3.98 3.195 4.45067 2.99934 5 3H12V5H5V19H12V21H5ZM16 17L14.625 15.55L17.175 13H9V11H17.175L14.625 8.45L16 7L21 12L16 17Z" fill="white" />
                            </svg>
                            Logout
                            <span class="sr-only">Icon description</span>
                        </button>
                    </ul>
                </div>
            </nav>
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