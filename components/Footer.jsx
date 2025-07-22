import Button from "@/components/Button"
import Link from "next/link";

const Footer = () => {
    return (
        <footer>
            {/* top div */}
            <div className="flex flex-row gap-x-20 px-42 my-24">
                {/* left div */}
                <div className="my-auto text-darkPink font-merriWeather">
                    <h2 className="text-6xl w-[80%]">Happy Birthday Again Shrreya!</h2>
                    <p className="text-3xl mt-12">Reached the end of the website?</p>
                    <div className="flex flex-row gap-x-20 text-3xl mt-10">
                        <p className="w-[50%]">I know you want to start from the top again *winks*</p>
                        <Button
                            buttonText="Click Here"
                            buttonLink="/"
                            buttonTarget="_self"
                            buttonStyle="text-3xl"
                        />
                    </div>
                </div>
                {/* right div */}
                <ul className="my-auto grid grid-cols-2 gap-x-14 gap-y-12 text-darkPink text-left font-merriWeather text-4xl">
                    <li className="w-[90%] footer-item">
                        <Link href="/">
                            Homepage
                        </Link>
                    </li>
                    <li className="w-[70%] footer-item">
                        <Link href="/emailMe">
                            Email Me
                        </Link>
                    </li>
                    <li className="w-[90%] footer-item">
                        <Link href="/messages">
                            Birthday Messages
                        </Link>
                    </li>
                    <li className="w-[70%] footer-item">
                        <Link href="/years">
                            Over The Years
                        </Link>
                    </li>
                    <li className="w-[90%] footer-item">
                        <Link href="/neverAlone">
                            You're Naver Alone
                        </Link>
                    </li>
                    <li>
                        <Button
                            buttonText="Surprise!"
                            buttonLink="/surprise"
                            buttonTarget="_blank"
                            buttonStyle="text-4xl"
                        />
                    </li>
                </ul>
            </div>

            {/* copyrights */}
            <div className="bg-darkPink">
                <p className="text-center text-white font-merriWeather py-4 text-3xl">Made with 🤍 by Shrreya's Bestfriends</p>
            </div>
        </footer>
    )
}

export default Footer;