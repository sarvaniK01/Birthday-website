import Image from "next/image";

const OverTheYearsCard = ({ imagePath }) => {
    return (
        <div className="w-[400px] h-auto overflow-hidden relative group rounded-[25px]">
            <Image
                src={imagePath}
                alt="baby-image"
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform transition-ease-in-out duration-300 group-hover:scale-110"
            />
        </div>
    )
}

export default OverTheYearsCard;