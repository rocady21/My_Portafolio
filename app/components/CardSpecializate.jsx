import React from "react";
import { AiOutlineGlobal } from "react-icons/ai";
import { IoServerOutline } from "react-icons/io5";
import { TbDeviceMobileCheck } from "react-icons/tb";

const CardSpecializate = ({text,title,icon})=> {
    return (
        <div className={`CardSpecializate lg:w-[30%] sm:my-[25px] sm:w-[75%] md:w-[60%] text-[12px] min-h-[275px] lg:text-[16px] xl:min-h-[250px] m-auto  text-gray-800 bg-gray-200 rounded p-4 flex flex-col items-center  animate__animated `}>
            <div className=" p-3 bg-violet-100 rounded my-4  ">
                {icon === "WEB" && <AiOutlineGlobal className="text-[25px] text-violet-400"/> || icon === "MOBILE" && <TbDeviceMobileCheck className="text-[25px] text-violet-400"/> || icon==="SERVER" && <IoServerOutline className="text-violet-400 text-[25px]"/>}
            </div>
            <h1 className="text-center font-bold mb-[10px] ">{title}</h1>
            <p className="text-center text-gray-400 text-[14px]">{text}</p>
        </div>
    )
}

export default CardSpecializate