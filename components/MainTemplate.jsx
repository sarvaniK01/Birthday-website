import Link from 'next/link';

import Hero from '@/components/HeroComponent'
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const MainPage = ({childPage: Child}) => {
    return (
        <div>
            <Hero />
            <Navbar />
            {Child && <Child />} 
            <Footer />
        </div>
    )
}

export default MainPage;