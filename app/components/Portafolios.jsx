"use client"
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

import { portafolios } from "../utils/portafolios";


const Portafolios = ()=> {

    const [scrollPosition,setStateScroll] = useState(0)

    const handleScroll = () => {
        if(typeof window !== undefined) {
            setStateScroll(window.scrollY);
        }
    };
    const [width,setWidth] = useState(null)
    
    useEffect(() => {
        if(typeof window !== undefined) {
            window.addEventListener('scroll', handleScroll);
            setWidth(window.innerWidth)
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);
    
 
    const [stateVideo,setStateVideo] = useState({
        state:false,
        index:null
    })
    const router = useRouter()

    

    const ponerVideo = (index)=> {
        setStateVideo({
            state:true,
            index:index
        })
    }
    const quitarVideo = ()=> {
        setStateVideo({
            state:false,
            index:null
        })
    }
    const VerProyecto = (title)=> {
        router.push("verProyecto/" + title)
    }

    return (
        <div className="padreProjects w-full  ">
            <div className="title flex flex-col text-center mb-[25px]">
                <p className="text-gray-400"><span className="font-bold text-[25px] w-[50px] mr-2">-</span><span className="uppercase">Proyectos</span></p>
                <h1 className="text-[20px]">Proyectos</h1>
            </div>
            <div className="cardsPortafolio grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-2  my-5">
            {
                 portafolios.map((portafolio,index)=> {

                    return <div onMouseEnter={()=> ponerVideo(index)} onMouseLeave={()=>quitarVideo(index)} key={index} className={`w-[90%] cardPortafolio my-[50px] m-auto flex flex-col items-center bg-white rounded shadow-xl shadow-gray-800   animate__animated  ${ scrollPosition > 350  && width < 650  ? "animate__bounceIn" : width < 650 && scrollPosition > 1200? "animate__bounceIn" : null }`}>
                        {stateVideo.state === true && index === stateVideo.index ? <video className="w-full bg-black object-contain h-[250px]" loop controls={false} autoPlay={true} muted>
                            <source className="h-[250px]" src={portafolio.videoCorto} type="video/mp4" />
                        </video> :<img  className="w-full  bg-gray-200 max-h-[250px] w-full h-full min-h-[250px] object-cover transition duration-150 ease-in-out" src={portafolio.portada} alt="" />}
                        <div className="informacion w-[85%] text-[16px] py-4 flex flex-col ">
                            <h1 className="uppercase text-lg text-black/40 font-bold">{portafolio.titulo}</h1>
                            <p className=" overflow-hidden text-gray-400 truncate ...">{portafolio.descripcion}</p>
                            <button onClick={()=>VerProyecto(portafolio.titulo)} className="self-end bg-purple-400 rounded text-white px-3 py-1 uppercase font-bold hover:bg-purple-600 mt-2">Read More</button>
                        </div>
                    </div>
                })          
                
            }
            </div>
        </div>
    )
}

export default Portafolios