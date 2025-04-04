import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-lightPink px-40 py-10">
            <ul className="flex justify-between">
                <Link href="/">
                    <li className="font-merriWeather text-3xl font-bold text-white nav-item">Homepage</li>
                </Link>
                <Link href="/years">
                    <li className="font-merriWeather text-3xl font-bold text-white nav-item">Over The years</li>
                </Link>
                <Link href="/messages">
                    <li className="font-merriWeather text-3xl font-bold text-white nav-item">Birthday Messages</li>
                </Link>
                <Link href="/neverAlone">
                    <li className="font-merriWeather text-3xl font-bold text-white nav-item">You're Never Alone</li>
                </Link>
                <Link href="/emailMe">
                    <li className="font-merriWeather text-3xl font-bold text-white nav-item">Email Me</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;