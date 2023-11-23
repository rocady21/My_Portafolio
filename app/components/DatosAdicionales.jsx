"use client"
import React, { useState } from "react";
import Habilidades from "./DatosAdicionales/Habilidades";
import Educacion from "./DatosAdicionales/Educacion";
import Experiencia from "./DatosAdicionales/Experiencia";
import { IoIosArrowForward } from "react-icons/io";


const DatosAdicionales = ()=> {

    const [state,setState] = useState("Habilidades")
    return (
        <div className="DatosAdicionalesPadre flex flex-row mt-[50px] justify-between ">
            <div className="DatosAdicionalesButtons buttons w-[20%] flex flex-col">
                <button onClick={()=>setState("Habilidades")} className={`uppercase my-2 text-light flex flex-row items-center justify-around p-3 rounded ${state === "Habilidades"? "bg-white text-purple-600 " : ""}`}>
                Habilidades
                <IoIosArrowForward className="color-white"/>
                </button>

                <button onClick={()=>setState("Educacion")} className={`uppercase my-2 text-light flex flex-row items-center justify-around p-3 rounded ${state === "Educacion"? "bg-white text-purple-600" : ""}`}>
                Educación
                <IoIosArrowForward className="color-white"/>
                </button>

                <button onClick={()=>setState("Experiencia")} className={`uppercase my-2 text-light flex flex-row items-center justify-around p-3 rounded ${state === "Experiencia"? "bg-white text-purple-600" : ""}`}>
                Experiencia
                <IoIosArrowForward className="color-white"/>
                </button>

            </div>
            <div className="DatosAdicionalesInfo info w-[70%] h-[400px]">
                {
                    state === "Habilidades"? <Habilidades/> : state === "Educacion"? <Educacion/> : state === "Experiencia"? <Experiencia/> : null
                }
            </div>
        </div>
    )
}

export default DatosAdicionales