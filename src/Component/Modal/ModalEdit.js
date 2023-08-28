import React from "react";
import { Link } from "react-router-dom";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
            <button
                className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Open regular modal
            </button>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-2xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div class="justify-start w-full h-full mt-4">
                                    <div class="mx-auto max-w-sm justify-center mt-5">
                                        <img class="w-1/4" src="/Asset/modal-edit.png" className="justify-center items-center px-24" alt="user photo" />
                                        <div className="py-4">
                                            <p class="text-center ...">Apakah anda yakin ingin</p>
                                            <p className="text-center"><strong>Mengubah</strong> data</p>
                                        </div>
                                    </div>
                                </div>
                                {/*footer*/}

                                <div className="flex items-center justify-center py-4 mb-4 gap-2">
                                    <button
                                        className="text-gray-600 font-bold text-sm px-8 py-4 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Batal
                                    </button>
                                    <button
                                        className="bg-primary-600 hover:bg-primary-800 text-white active:bg-primary-700 font-bold text-sm px-8 py-4 rounded-lg shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Ubah Data
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}