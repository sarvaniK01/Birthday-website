import Image from "next/image";

const NeverAloneCard = ({ bgImagePath, title, emojiPath }) => {
    return (
        <div className="w-[400px] h-auto relative group">
            <Image
                src={bgImagePath}
                alt={`${title}-bg-image`}
                width={300}
                height={300}
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex justify-center pt-[25%] group-hover:scale-100">
                <div className="flex-flex-col justify-center group-hover:scale-100">
                    <h1 className="font-merriWeather text-white text-center text-5xl font-bold">{ title }</h1>
                    <Image
                        src={emojiPath}
                        alt={`${title}-emoji-image`}
                        width={100}
                        height={100}
                        className="mx-auto mt-12 transition-transform ease-in-out duration-300 group-hover:scale-120"
                    />
                </div>
            </div>
        </div>
    )
}

export default NeverAloneCard;