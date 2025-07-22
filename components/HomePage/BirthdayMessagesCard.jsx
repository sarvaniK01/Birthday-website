import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const BirthdayMessagesCard = ({imagePath, messageFromName}) => {
    return (
        <div className="w-[400px] relative group">
            <div className="h-auto overflow-hidden relative rounded-[25px]">
                <Image
                    src={imagePath}
                    alt="message-card-image"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="w-full absolute inset-0 bg-darkPink bg-opacity-75 flex flex-col items-center justify-center rounded-[25px] opacity-0 group-hover:opacity-75 transition-opacity duration-300">
                    <h1 className="font-merriWeather text-4xl font-bold text-white text-center w-[80%] mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {messageFromName} Birthday Message!
                    </h1>
                        
                    <Link href="/messages">
                        <FontAwesomeIcon 
                            icon={faArrowRight} 
                            size="2x" 
                            className="text-white p-5 border-4 border-white bg-lightPink rounded-full mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                        />
                    </Link>  
                </div>
            </div>
        </div>
    )
}

export default BirthdayMessagesCard;