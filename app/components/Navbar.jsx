"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react"
import { CgDetailsMore } from "react-icons/cg";


const Navbar = ()=> {
    const path = usePathname()
    const router = useRouter()
    const [StateMobileNav,setStateMobileNav] = useState(false)
    const [width,setWidth] = useState()
    
    const cambiarAncho = ()=> {
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        setWidth(window.innerWidth)
        window.addEventListener("resize",cambiarAncho)

        return ()=> {
            window.removeEventListener("resize",cambiarAncho)
        }
    },[])


    const verPortafolio = ()=> {
        router.push("/")
    }
    const verProyectos = ()=> {
        setStateMobileNav(false)
        if (path !== "/") {
            router.push("/")
        }
        window.scroll({
            top:1350
        })
    }

    const verDatos = ()=> {
        setStateMobileNav(false)
        if (path !== "/") {
            router.push("/")
        }
        window.scroll({
            top:2200
        })
    }
    const verServicios = ()=> {
        setStateMobileNav(false)
        if (path !== "/") {
            router.push("/")
        }
        window.scroll({
            top:400
        })
    }
    const Contactame = ()=> {
        setStateMobileNav(false)
        if (path !== "/") {
            router.push("/")
        }
        window.scroll({
            top:3000
        })
    }
    
    return (
        <div className="">
            {width < 650? <div className="text-white">
                {StateMobileNav === true? <div className={`newNav absolute mb-[25px] px-[35px]  top-[0px] flex flex-col items-start h-screen z-[200] bg-black py-2`}>
                    <CgDetailsMore onClick={()=>setStateMobileNav(false)} className="hover:scale-125 text-white self-start " size={35}/>
                    <h1 role="button" onClick={verPortafolio} className="font-serif my-3 ">My <span className="uppercase text-purple-500 tracking-wide">Portfolio</span></h1>
                    <div className="navigation h-[40%] px-[25px] py-[25px]  w-full text-[20px] flex flex-col items-start text-gray-300 justify-around text-sm">
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
            <div className="navigation sm:w-[40%] lg:w-[60%]  flex flex-row items-center text-gray-300 justify-around text-sm">
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