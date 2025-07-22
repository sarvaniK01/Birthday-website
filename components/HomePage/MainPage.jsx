import Link from 'next/link';

import OverTheYears from '@/components/HomePage/OverTheYears';
import FamilyBirthdayMessages from '@/components/HomePage/FamilyBirthdayMessages';
import FriendsBirthdayMessages from '@/components/HomePage/FriendsBirthdayMessages';
import NeverAlone from '@/components/HomePage/NeverAlone';
import MainTemplate from "@/components/MainTemplate"

const MainPage = () => {
    return (
        <MainTemplate>
            <OverTheYears />
            <FamilyBirthdayMessages />
            <FriendsBirthdayMessages />
            <NeverAlone />
        </MainTemplate>
    )
}

export default MainPage;