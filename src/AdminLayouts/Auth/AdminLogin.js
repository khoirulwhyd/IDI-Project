import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router";
import axios from 'axios';
import { Link } from "react-router-dom";
import '../css/Login.css';
import swal from 'sweetalert';

function AdminLogin() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //define state validation
    const [validation, setValidation] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        //check token
        if (localStorage.getItem('token')) {

            //redirect page dashboard
            navigate('/adminDashboard');
        }
    }, []);

    const loginHandler = async (e) => {
        e.preventDefault();

        //initialize formData
        const formData = new FormData();
        
        //append data to formData
        formData.append('email', email);
        formData.append('password', password);

        //send data
        await axios.post('http://localhost:8000/api/login', formData)
            .then((response) => {

                //set token on localStorage
                localStorage.setItem('token', response.data.token);

                //redirect to dashboard
                swal("Berhasil Login!", "Hallo Admin Selamat Datang!", "success");
                navigate('/adminDashboard');
            })
            .catch((error) => {
                swal("Gagal!", "Maaf data anda tidak terdeteksi!", "error");
                //assign error to state "validation"
                setValidation(error.response.data);
            })
    };
    

    return (
        // <body>
        <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
            <div class="max-w-screen m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
                <div class="login-section flex-1 px-24 text-left hidden lg:flex">
                    <div class="m-12 xl:m-16 w-full bg-center bg-no-repeat">
                        {/* style="background-image: url('https://storage.googleapis.com/devitary-image-host.appspot.com/15848031292911696601-undraw_designer_life_w96d.svg');"> */}
                        <div className="section">
                            <div className="logoidi py-4">
                                <img src="/Asset/logoidi.png" height={60} width={60} />
                                <p className="font-bold text-gray-50 text-2xl">Admin IDI Malang Raya</p>
                            </div>
                            <h1 class="text-5xl font-bold text-gray-50 justify-start py-2">Bergabunglah </h1>
                            <h1 class="text-5xl font-bold text-gray-50 justify-start">Bersama Kami IDI</h1>
                            <h1 class="text-5xl font-bold text-gray-50 justify-start">Malang Raya</h1>
                            <img className="py-14" src="/Asset/Ilustrasi.svg" height={2} width={500}></img>
                        </div>
                    </div>
                </div>
                <div class="mt-24 lg:w-5/12 p-6 sm:p-24">
                    <div class="flex flex-col md:px-8">
                        <h1 class="text-2xl xl:text-3xl font-extrabold">
                            Login Admin IDI
                        </h1>
                        <div class="w-full flex-1 mt-8">
                            {
                                validation.message && (
                                    <div className="alert alert-danger">
                                        {validation.message}
                                    </div>
                                )
                            }
                            <form onSubmit={loginHandler}>
                                <div class="py-4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        email
                                    </label>
                                    <input class="form-control w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email"
                                        value={email} onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Masukkan Email">
                                    </input>
                                </div>
                                {
                                    validation.email && (
                                        <div className="alert alert-danger">
                                            {validation.email[0]}
                                        </div>
                                    )
                                }

                                <div className="py-4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Password
                                    </label>
                                    <input class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="password"
                                        value={password} onChange={(e) => setPassword(e.target.value)}
                                        placeholder="Masukkan Password">
                                    </input>
                                </div>
                                {
                                    validation.password && (
                                        <div className="alert alert-danger">
                                            {validation.password[0]}
                                        </div>
                                    )
                                }

                                    <button
                                        type="submit"
                                        class=" mt-5 tracking-wide font-semibold bg-primary-600 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <span class="ml-3">
                                            Login
                                        </span>
                                        <div className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 14" fill="none">
                                                <path d="M16.25 7.22571L1.25 7.22571" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.2002 1.20131L16.2502 7.22531L10.2002 13.2503" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </button>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        // </body>
    );
}

export default AdminLogin;