import React from "react";


const Experiencia = ()=> {
    return (
        <div>
            <div className="exp">
                    <h1 className="title text-[20px] font-bold">Desarrollador Web Frontend - Familiar</h1>
                    <p className="donde mt-1 text-gray-400">San josé de Mayo</p>
                    <p className="date my-1 text-gray-500">Enero 2023 - Marzo 2023</p>

                    <p className="my-2">Tecnologias:</p>
                    <div className="technology flex flex-row text-[12px]">
                        <p className="px-2 py-1 border border-white rounded mx-1">Html</p>
                        <p className="px-2 py-1 border border-white rounded mx-1">CSS</p>
                        <p className="px-2 py-1 border border-white rounded mx-1">React</p>
                        <p className="px-2 py-1 border border-white rounded mx-1">Redux</p>
                        <p className="px-2 py-1 border border-white rounded mx-1">TailwindCss</p>

                    </div>
                    <div className="barra my-4 border-b border-gray-300 border-[2px] w-[400px]"></div>
                    <div className="tareas"> 
                        <p>- Diseño e implementacion de nuevas funcionalidades</p>
                        <p>- Correción de errores y bugs</p>
                        <p>- Web responsive</p>
                        <p>- Pruebas unitarias</p>
                    </div>
            </div>
        </div>
    )
}

export default Experiencia