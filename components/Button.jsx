import Link from "next/link"

const Button = ({ buttonText, buttonLink, buttonTarget, buttonStyle }) => {
    return (
        <button className="w-full">
            <div className={`${buttonStyle} font-merriWeather bg-lightPink w-fit text-white text-3xl px-5 py-4 rounded-[25px] hover:shadow-[8px_8px_0px_rgba(254,85,111,1)] transition-ease-in-out transition-all transition-300`}>
                <Link href={buttonLink} target={buttonTarget}>
                    {buttonText}
                </Link>
            </div>
        </button>
    )
}

export default Button