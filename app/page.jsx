"use client"
import { FaInstagram,FaGithub,FaFacebook,FaLinkedin } from "react-icons/fa";
import CardSpecializate from "./components/CardSpecializate";
import Portafolios from "./components/Portafolios";
import DatosAdicionales from "./components/DatosAdicionales";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Image from "next/image";

const Specializate = [
  {
    titile:"Desarrollador Front End",
    text:"Diseño y creacion de la parte visible de las aplicaciones web para crear una experiencia de usuario atractiva",
    icon:"WEB"
  },
  {
    titile:"Desarrollador Backend",
    text:"Contruyo la logica y funcionalidad detras de las aplicaciones web, manejando correctamente la interaccion con la base de datos y otros servicios",
    icon:"SERVER"
  },
  {
    titile:"Desarrollo de Aplicaciones Moviles",
    text:"Creacion de aplicaciones moviles, asegurando una experiencia de usuario fluida y adaptativa",
    icon:"MOBILE"
  }
  
]

export default function Home() {



  return (
    <div className="" style={{fontFamily: "Raleway"}}>

      <div className="headerMain w-[70%]  p-4 m-auto mt-[150px] flex md:justify-between sm:flex-col sm:items-start lg:flex-row ">
        <div className="info mb-[100px] animate__animated animate__bounceInLeft  sm:w-full lg:w-[80%] lg:w-[40%] xl:w-[50%] h-[350px]">
          <p className="text-gray-500"><span className="font-bold text-[25px] w-[50px]">-</span> MY NAME IS</p>
          <h1 className="text-white font-serif  text-[40px]">Rodrigo <span className="text-purple-400">Olivera.</span></h1>
          <p className="text-gray-300 my-5"> ¡Buenas! Me llamo RodrigO Olivera, tengo 21 años y soy un desarrollador web con una pasión por la creación de experiencias digitales excepcionales e innovadoras. Mis conocimientos abarcan desde el desarrollo front-end hasta soluciones back-end robustas y con diferentes tecnologias. He trabajado en proyectos que van desde sitios web informativos hasta aplicaciones web complejas. Mi enfoque se centra en la eficiencia del código, la usabilidad y la adaptabilidad a las últimas tecnologías. Además de mis habilidades técnicas, tengo una fuerte capacidad para trabajar en equipo.
Te invito a que explores mi portafolio para conocer mis experiencias e habilidades .</p>
        </div>
        <div className="photo sm:w-[250px] md:min-w-[250px] xl:min-w-[300px] sm:self-center lg:w-[30%] xl:w-[20%] sm:h-[300px]   md:h-[250px]  lg:h-[300px] xl:h-[300px] relative ">
          <div className="w-full h-full relative bg-purple-400 overflow-hidden relative deforme z-1">
              <Image style={{width:"100%", height:"100%", transform: "scale(125%)"}} width={300} height={300} className="animable animate__animated animate__bounceInRight object-contain object-top w-full" src="https://firebasestorage.googleapis.com/v0/b/portafolio-7f218.appspot.com/o/imgs%2FyoF%20(1).png?alt=media&token=03e9e38c-27df-4dd4-89ab-91c4e5701102" alt="" />
          </div>
        </div>
      </div>

      <div className="espesializaciones w-[70%] m-auto text-gray-300 mt-[100px]">
        <div className="title flex flex-col text-center">
          <p className="text-gray-400"><span className="font-bold text-[25px] w-[50px] mr-2">-</span><span className="uppercase">Servicios</span></p>
          <h1 className="text-[20px]">Espesializado en</h1>
        </div>
        <div className="cards w-full my-[50px] flex flex-row flex-wrap">
            {
              Specializate.map((spe,index)=> {
                return <CardSpecializate key={index} title={spe.titile} text={spe.text} icon={spe.icon}/>
              })
            }
        </div>
        <h1></h1>
      </div>

      <div className="portafolios w-[70%] m-auto text-gray-300 mt-[50px]">
            <Portafolios />

      </div>
      <div className="DatosAdicionales w-[70%] flex flex-col m-auto text-gray-300 my-[50px]">
        <div className="title flex flex-col text-start">
          <p className="text-gray-400"><span className="font-bold text-[25px] w-[50px] mr-2">-</span><span className="uppercase">Datos adicionales</span></p>
          <h1 className="text-[30px] text-white ">Datos adicionales</h1>
        </div>
        <DatosAdicionales/>

      </div>

      <Footer/>

    </div>
  )
}
