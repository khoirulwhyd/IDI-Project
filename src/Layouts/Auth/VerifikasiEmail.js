import "../css/Login.css"
import { Link } from "react-router-dom";

export default function verifikasiEmail() {
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
                    <div class="flex p-28 flex-col px-4 md:px-12">
                        <div className="w-full px-4 md:px-2">
                            <h1 class="text-2xl xl:text-3xl font-extrabold">
                                Verifikasi Email
                            </h1>
                            <p className="py-12 font-medium text-gray-500">
                                Kami mengirimkan email ke <strong>ahmad@gmail.com</strong> Silakan cek kotak masuk email Anda untuk menemukan pesan dari kami. Lalu klik tautan verifikasi untuk melanjutkan.
                            </p>
                            <div className="flex jusfity-end py-6">
                                <span class="text-gray-600 ">Tidak mendapatkan pesan? </span>
                                <Link to="/register">
                                    <button className="px-2">
                                        <span class="text-primary-600 font-semibold underline">Kirim Ulang</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        // </body>
    );
}