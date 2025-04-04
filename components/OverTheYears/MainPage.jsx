import Link from 'next/link';

import Images from '@/components/OverTheYears/Images';
import MainTemplate from "@/components/MainTemplate";

const MainPage = () => {
    return (
        <div>
            <MainTemplate  childPage={Images}/>
        </div>
    )
}

export default MainPage;