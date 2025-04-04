import Link from 'next/link';

import OverTheYears from '@/components/HomePage/OverTheYears';
import MainTemplate from "@/components/MainTemplate"

const MainPage = () => {
    return (
        <div>
            <MainTemplate  childPage={OverTheYears}/>
        </div>
    )
}

export default MainPage;