import Link from 'next/link';

import Hero from '../Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainPage = () => {
    return (
        <div>
            <Hero />
            <Navbar />
            Email Me
            <Footer />
        </div>
    )
}

export default MainPage;