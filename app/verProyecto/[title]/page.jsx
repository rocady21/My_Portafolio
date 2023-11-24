"use client"
import { filterPortafolioById } from "@/app/utils/portafolios";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { TbNumber3Small } from "react-icons/tb";
import Carousel from "react-material-ui-carousel"
const VerProyecto = () => {
    const { title } = useParams()


    const [hoverVideo, sethoverVideo] = useState(false)

    const [portfolio, setPortfolio] = useState(null)
    const [InfoState, setInfoState] = useState("Descripción")



    useEffect(() => {
        const portafolio = filterPortafolioById(title)
        setPortfolio(portafolio)

    }, [])

    if (portfolio === null) {
        return "Cargando..."
    }

    const { titulo, portada, imagenes,GithubLink, video, videoCorto, descripcion, tecnologias } = portfolio

    return (
        <div className="verPoryecto w-[60%] m-auto flex flex-col items-center relative">

            {
                imagenes[0] ? <div className="flex flex-row flex-wrap w-[80%] mt-[50px] rounded">
                    <Carousel className="w-full">
                    {
                        imagenes.map((img) => {
                            return <img key={img} className="w-full object-contain  shadow-2xl shadow-black/30" src={img} alt="" />
                        })
                    }
                    </Carousel>
                </div> : <div onMouseEnter={() => sethoverVideo(true)} onMouseLeave={() => sethoverVideo(false)} className="video mt-[50px] w-[80%] m-auto max-h-[450px]  shadow shadow-lg rounded-[10%] ">

                    <video className="w-full rounded bg-black py-5  m-auto max-h-[450px] object-contain" controls={hoverVideo === true ? true : false} autoPlay={false} muted>
                        <source className="w-full h-full object-contain" src={video} type="video/mp4" />
                    </video>

                </div>
                }


            <div className=" div w-full px-[30px] py-[25px] text-gray-200 rounded-[5%] mt-[25px] bg-gray-900 relative min-h-[600px] mb-[100px] overflow-hidden flex flex-col items-start justify-around">
                <div className="infoF flex flex-col justify-between z-50 ">
                    <h1 className="font-bold w-[80%] text-[25px] uppercase bg-black/40 px-5 py-2"><span className="mr-[50px] border-left border-2 border-white"></span> {titulo}</h1>
                    <p className="w-[80%] align-middle italic text-gray-300 z-9 py-2 px-5 capitalize">{descripcion}</p>
                    <div className="tec mt-[50px] w-[30%]">
                    <h2 className="font-bold text-[25px] w-full uppercase bg-black/40 px-5 py-2"><span className="mr-[50px] border-left border-2 border-white"></span>Tecnologias</h2>
                        <div className="map px-4">
                            {
                                tecnologias.map((tec, index) => {
                                    return <p key={index} className="z-90">-{tec}</p>
                                })
                            }
                        </div>
                    </div>
                    <a  href={GithubLink} target="_blank" rel="noopener noreferrer"  className="justify-self-end mx-5 mt-[50px] z-70 flex flex-row items-center"><span className="mr-5">Ver en Github</span> <FaGithub className=" hover:scale-125"  size={30} /></a>
                </div>
                     
                <div className="z-40 absolute pelotas1 bg-purple-300/40 w-[300px] h-[300px] rounded-[100%] left-[-2%] bottom-[-140px]  "></div>
                <div className="z-30 left-[20%] absolute pelotas2 bg-purple-300/40 w-[350px] h-[350px] rounded-[100%] bottom-[-100px]  "></div>
                <div className="z-20 left-[47%] absolute pelotas3 bg-purple-300/40 w-[450px] h-[450px] rounded-[100%] bottom-[-140px]  "></div>
                <div className="z-10 right-[-15%]  absolute pelotas4 bg-purple-300/40 w-[650px] h-[650px] rounded-[100%] top-[-10%]  "></div>

            </div>


        </div>
    )
}

export default VerProyecto