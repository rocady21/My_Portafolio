"use client"
import { useRouter } from "next/navigation";
import React, { useState } from "react"
import { GoMoon } from "react-icons/go";
import { CgDetailsMore } from "react-icons/cg";


const Navbar = ()=> {

    const isMobile = window.innerWidth < 600

    const router = useRouter()
    const [StateMobileNav,setStateMobileNav] = useState(false)

    const verPortafolio = ()=> {
        router.push("/")
    }
    const verProyectos = ()=> {
        setStateMobileNav(false)
        window.scroll({
            top:1150
        })
    }

    const verDatos = ()=> {
        setStateMobileNav(false)
        window.scroll({
            top:2200
        })
    }
    const verServicios = ()=> {
        setStateMobileNav(false)
        window.scroll({
            top:400
        })
    }
    const Contactame = ()=> {
        setStateMobileNav(false)
        window.scroll({
            top:3000
        })
    }
    
    return (
        <div className="">
            {isMobile === true? <div className="text-white relative">
                {StateMobileNav === true? <div className={`absolute mb-[25px] px-4  top-[0px] flex flex-col items-start h-screen z-10 bg-black py-1`}>
                    <CgDetailsMore onClick={()=>setStateMobileNav(false)} className="hover:scale-125 text-white self-start " size={35}/>
                    <h1 role="button" onClick={verPortafolio} className="font-serif my-3 ">My <span className="uppercase text-purple-500 tracking-wide">Portfolio</span></h1>
                    <div className="navigation h-[40%] px-[25px]  w-full text-[20px] flex flex-col items-start text-gray-300 justify-around text-sm">
                        <p role="button" onClick={verServicios} className="mx-1 my-2">Servicios</p>
                        <p role="button" onClick={verDatos} className="mx-1 my-2">Datos</p>
                        <p role="button" onClick={verProyectos} className="mx-1 my-2">Proyectos</p>
                        <p role="button" onClick={Contactame} className="mx-1 my-2">Contactame</p>
                    </div>
                </div> :  <div className="w-full flex flex-row items-center bg-black px-4 py-1">
                    <CgDetailsMore onClick={()=>setStateMobileNav(true)} className="hover:scale-125 text-white" size={35}/>
                </div>}
            </div>:<div className="navBar bg-black w-full text-white py-4 shadow-lg shadow-white/10  flex flex-row justify-around ">
            <div className="Page w-[10%]">
                <h1 role="button" onClick={verPortafolio} className="font-serif ">My <span className="uppercase text-purple-500 tracking-wide">Portfolio</span></h1>
            </div>
            <div className="navigation sm:w-[40%] lg:w-[80%] flex flex-row items-center text-gray-300 justify-around text-sm">
                <p role="button" onClick={verServicios} className="">Servicios</p>
                <p role="button" onClick={verDatos} className="">Datos</p>
                <p role="button" onClick={verProyectos} className="">Proyectos</p>
                <p role="button" onClick={Contactame}>Contactame</p>
            </div>

        </div>}
        </div>

        
    )
}

export default Navbar