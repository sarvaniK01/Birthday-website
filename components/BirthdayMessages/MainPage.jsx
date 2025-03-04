import Link from 'next/link';

import Hero from '../Hero';
import Navbar from '../Navbar';
import Footer from '../Footer';

const MainPage = () => {
    return (
        <div>
            <Hero />
            <Navbar />
            Birthday Messages
            <Footer />
        </div>
    )
}

export default MainPage;