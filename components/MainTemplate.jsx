import Link from 'next/link';

import Hero from '@/components/HeroComponent'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MainTemplate = ({ children }) => {
    return (
        <div>
            <Hero />
            <Navbar />
            {children} 
            <Footer />
        </div>
    )
}

export default MainTemplate;