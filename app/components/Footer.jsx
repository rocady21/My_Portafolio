"use client"
import React, { useEffect, useRef, useState } from "react";
import { } from "react-icons"
import { FiPhoneCall } from "react-icons/fi";
import { IoLocationSharp } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import emailjs from "@emailjs/browser"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from "formik";
import * as yup from "yup"
const initialValue = {
    nombre: "",
    apellido: "",
    email: "",
    mensaje: ""
}


const Footer = () => {
    const notify = () => toast.success('Correo enviado correctamente :)', {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });

    const form = useRef()



    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: yup.object({
            nombre: yup.string().required("El nombre es requerido"),
            apellido: yup.string().required("El apellido es requerido"),
            email: yup.string().required("El email es requerido").email("el email no es valido"),
            mensaje: yup.string().required("El mensaje es requerido").min(3, "Debe de ingresar minimo 3 caracteres")
        }),
        onSubmit: (e) => {

            emailjs.sendForm("service_0wmybpc", "template_cmnee4w", form.current, "2qL-f285QQfoUW9-k")
            .then((result)=> {
                formik.resetForm()
                notify()
            },((error)=> {
                console.log(error.text);
            }) )    
        }
    })




    return (
        <div className="footer w-[70%] m-auto flex sm:flex-col md:flex-row bg-white min-h-[600px]">
            <div className="contactInformation flex flex-col sm:min-h-[400px] md:w-[50%] sm:w-full  relative rounded  bg-gray-800 text-white overflow-hidden  p-[25px]">
                <h1 className="font-bold text-[20px]">Informacion de contacto</h1>
                <p className="text-gray-400">Di algo para empezar nuestra conversacion</p>

                <div className="contactos flex flex-col items-start mt-[50px]">
                    <div className="phone flex flex-row items-center mt-5">
                        <FiPhoneCall size={20} className="text-[15px] mx-3" />
                        <p>+598 91 664 536</p>
                    </div>
                    <div className="email flex flex-row  items-center mt-5">
                        <BiLogoGmail size={20} className="text-[15px] mx-3" />
                        <p className="">rodrigooliverman12@gmail.com</p>
                    </div>
                    <div className="direccion flex flex-row  items-center mt-5">
                        <IoLocationSharp size={25} className=" mx-2" />
                        <p>Ruperto Perez Martines 1030, San José de Mayo, San José, Uruguay</p>
                    </div>
                </div>
                <div className="redesSociales flex flex-row items-end h-full ">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ro_silv21/">
                        <FaInstagram className="shadow text-gray-300 text-[30px] hover:scale-150 ease-in duration-100 hover:text-white mr-2 " />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/rocady21">
                        <FaGithub className="shadow text-gray-300 text-[30px] hover:scale-150 ease-in duration-100 hover:text-white mx-2 " />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=100012577621705">
                        <FaFacebook className="shadow text-gray-300 text-[30px] hover:scale-150 ease-in duration-100 hover:text-white mx-2 " />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/rodrigo-olivera-4b1407219/">
                        <FaLinkedin className="shadow text-gray-300 text-[30px] hover:scale-150 ease-in duration-100 hover:text-white mx-2 " />
                    </a>
                </div>
                <div className="circulo1 w-[200px] h-[200px] rounded-[100%] absolute bg-gray-400/30 bottom-[-100px] left-[50%]"></div>
                <div className="circulo1 w-[100px] h-[100px] rounded-[100%] absolute bg-gray-400/40 bottom-[50px] left-[52%]"></div>


            </div>
            <div className="contactMe md:w-[50%] sm:w-full relative overflow-hidden">
                <form ref={form} onSubmit={(e)=>formik.handleSubmit(e)} className="w-[80%] mt-[50px] m-auto flex flex-col px-5 py-5 relative" action="">
                    <div className="nameLastName grid grid-cols-2 ">
                        <div className="input1 relative mr-4 text-gray-400 hover:text-black  ">
                            <label htmlFor="name" className=" bg-white px-2 ">Nombre</label>
                            <input onBlur={formik.handleBlur} value={formik.values.nombre} onChange={formik.handleChange} className=" w-full focus:outline-none py-1 px-2 border-b-2 border-gray-300 rounded   " placeholder="" type="text" name="nombre" id="name" />
                            {formik.touched.nombre && formik.errors.nombre ? <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-900 p-3 font-bold">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.nombre}</p>
                            </div> : null}
                        </div>
                        <div className="input2 relative ml-5 text-gray-400 hover:text-black">
                            <label htmlFor="apellido" className=" bg-white px-2 ">Apellido</label>
                            <input  onBlur={formik.handleBlur} value={formik.values.apellido} onChange={formik.handleChange} className=" w-full focus:outline-none py-1 px-2 border-b-2 border-gray-300 rounded   " placeholder="" type="text" name="apellido" id="apellido" />
                            {formik.touched.apellido && formik.errors.apellido ? <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-900 p-3 font-bold">
                                <p className="font-bold">Error</p>
                                <p>{formik.errors.apellido}</p>
                            </div> : null}
                        </div>

                    </div>
                    <div className="input2 relative mt-5 text-gray-400 hover:text-black">
                        <label htmlFor="mensaje" className=" bg-white px-2 ">Email</label>
                        <input  onBlur={formik.handleBlur} value={formik.values.email} onChange={formik.handleChange} className="w-full focus:outline-none py-1 px-2 border-b-2 border-gray-300 rounded   " placeholder="" type="text" name="email" id="email" />
                        {formik.touched.email && formik.errors.email ? <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-900 p-3 font-bold">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.email}</p>
                        </div> : null}
                    </div>

                    <div className="input2 flex flex-col relative mt-5 text-gray-400 hover:text-black">
                        <label htmlFor="mensagge" className=" bg-white px-2 ">Escriba su Mensaje</label>
                        <input  onBlur={formik.handleBlur} value={formik.values.mensaje} onChange={formik.handleChange} className="w-full focus:outline-none py-1 px-2 border-b-2 border-gray-300 rounded   " placeholder="" type="text" name="mensaje" id="mensaje" />
                        {formik.touched.mensaje && formik.errors.mensaje ? <div className="my-2 bg-red-100 border-l-4 border-red-500 text-red-900 p-3 font-bold">
                            <p className="font-bold">Error</p>
                            <p>{formik.errors.mensaje}</p>
                        </div> : null}
                    </div>
                    <input type="submit" value="Enviar Mensaje" id="button" className="w-[40%] self-end mt-5 send Message px-5 py-3 bg-gray-700 font-bold text-white hover:bg-gray-800 shadow shadow-xl"/>

                </form>
                <ToastContainer />
            </div>
        </div>

    )
}

export default Footer