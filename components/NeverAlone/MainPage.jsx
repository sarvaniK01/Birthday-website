import Link from 'next/link';

import Footer from '@/components/Footer';
import MainTemplate from "@/components/MainTemplate"

const MainPage = () => {
    return (
        <div>
            <MainTemplate  childPage={Footer}/>
        </div>
    )
}

export default MainPage;