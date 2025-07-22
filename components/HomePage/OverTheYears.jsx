import Image from "next/image";
import Button from "@/components/Button";
import OverTheYearsCard from "@/components/OverTheYearsCard"

const OverTheYears = () => {
    return (
        <div className="bg-white py-26">
            <h1 className="font-merriWeather font-bold text-lightPink font-outline-5 text-8xl text-center">Over The Years</h1>
            <div className="grid grid-cols-3 gap-x-20 gap-y-24 px-42 mt-26">
                <OverTheYearsCard
                    imagePath="/images/HomePageImages/overTheYears/baby-1.png"
                />

                <OverTheYearsCard
                    imagePath="/images/HomePageImages/overTheYears/baby-2.png"
                />

                <OverTheYearsCard
                    imagePath="/images/HomePageImages/overTheYears/baby-3.png"
                />

                <OverTheYearsCard
                    imagePath="/images/HomePageImages/overTheYears/teen-1.png"
                />

                <OverTheYearsCard
                    imagePath="/images/HomePageImages/overTheYears/teen-2.png"
                />

                <OverTheYearsCard
                    imagePath="/images/HomePageImages/overTheYears/adult-1.png"
                />
            </div>
            <Button
                buttonText="View More"
                buttonLink="/years"
                buttonTarget="_blank"
                buttonStyle="text-4xl mt-20 mx-auto"
            />
        </div>
    )
}

export default OverTheYears;

