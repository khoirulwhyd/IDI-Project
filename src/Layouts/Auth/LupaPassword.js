import "../css/Login.css"
import { Link } from "react-router-dom";

export default function LupaPassword() {
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
                                <p className="font-bold text-gray-50 text-2xl">IDI Malang Raya</p>
                            </div>
                            <h1 class="text-5xl font-bold text-gray-50 justify-start py-2">Bergabunglah </h1>
                            <h1 class="text-5xl font-bold text-gray-50 justify-start">Bersama Kami IDI</h1>
                            <h1 class="text-5xl font-bold text-gray-50 justify-start">Malang Raya</h1>
                            <img className="py-14" src="/Asset/Ilustrasi.svg" height={2} width={500}></img>
                        </div>

                    </div>
                </div>
                <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-24">
                    {/* <div>
                        <img src="https://storage.googleapis.com/devitary-image-host.appspot.com/15846435184459982716-LogoMakr_7POjrN.png"
                            class="w-32 mx-auto" />
                    </div> */}
                    <div class="flex flex-col px-4 md:px-12">
                        <div className="w-full md:px-2">
                            <h1 class="text-2xl xl:text-3xl font-extrabold">
                                Reset Password
                            </h1>
                            <p className="py-2 font-medium text-gray-500">Masukkan NIK dan Email kamu untuk proses verifikasi, kami akan  mengirimkan 4 digit code ke Email kamu</p>
                        </div>
                        
                        
                        <div class="w-full flex-1 mt-8">
                            
                            <div class="mx-auto max-w-sm justify-center">
                                <div class="py-4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        NIK
                                    </label>
                                    <input class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Masukkan NIK">
                                    </input>
                                </div>
                                <div className="py-4">
                                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                                        Email
                                    </label>
                                    <input class="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                        type="email" placeholder="Masukkan Email">
                                    </input>
                                </div>
                                <Link to="/verifikasiemail">
                                    <button
                                        class=" mt-5 tracking-wide font-semibold bg-primary-600 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-800 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                                        <span class="ml-3">
                                            Reset Password
                                        </span>
                                        <div className="ml-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 17 14" fill="none">
                                                <path d="M16.25 7.22571L1.25 7.22571" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                <path d="M10.2002 1.20131L16.2502 7.22531L10.2002 13.2503" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                        </div>
                                    </button>
                                </Link>
                                
                                
                                <div className="flex jusfity-end py-6">
                                    <span class="text-gray-600 ">Belum Memiliki Akun ? </span>
                                    <Link to="/register">
                                        <button className="px-2">
                                            <span class="text-primary-600 font-semibold underline">Daftar Sekarang</span>
                                        </button>
                                    </Link>

                                </div>

                                {/* <p class="mt-6 text-xs text-gray-600 text-center">
                                    I agree to abide by templatana's
                                    <a href="#" class="border-b border-gray-500 border-dotted">
                                        Terms of Service
                                    </a>
                                    and its
                                    <a href="#" class="border-b border-gray-500 border-dotted">
                                        Privacy Policy
                                    </a>
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        // </body>
    );
}