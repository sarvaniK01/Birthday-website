import Button from "@/components/Button";
import NeverAloneCard from "@/components/HomePage/NeverAloneCard"

const NeverAlone = () => {
    return (
        <div className="bg-lightestPink py-26">
            <h1 className="font-merriWeather font-bold text-white font-outline-5 text-8xl text-center">
                You're Never Alone
            </h1>

            <div className="grid grid-cols-3 gap-x-20 gap-y-24 px-42 mt-26">
                <NeverAloneCard 
                    bgImagePath="/images/HomePageImages/neverAlone/joy.png"
                    title = "Joy"
                    emojiPath = "/images/HomePageImages/neverAlone/joy-emoji.png"
                />

                <NeverAloneCard 
                    bgImagePath="/images/HomePageImages/neverAlone/sad.png"
                    title = "Sad"
                    emojiPath = "/images/HomePageImages/neverAlone/sad-emoji.png"
                />

                <NeverAloneCard 
                    bgImagePath="/images/HomePageImages/neverAlone/angry.png"
                    title = "Angry"
                    emojiPath = "/images/HomePageImages/neverAlone/angry-emoji.png"
                />

                <NeverAloneCard 
                    bgImagePath="/images/HomePageImages/neverAlone/loved.png"
                    title = "Loved"
                    emojiPath = "/images/HomePageImages/neverAlone/loved-emoji.png"
                />

                <NeverAloneCard 
                    bgImagePath="/images/HomePageImages/neverAlone/anxious.png"
                    title = "Anxious"
                    emojiPath = "/images/HomePageImages/neverAlone/anxious-emoji.png"
                />

                <NeverAloneCard 
                    bgImagePath="/images/HomePageImages/neverAlone/grateful.png"
                    title = "Grateful"
                    emojiPath = "/images/HomePageImages/neverAlone/grateful-emoji.png"
                />
            </div>

            <Button
                buttonText="View More"
                buttonLink="/neverAlone"
                buttonTarget="_blank"
                buttonStyle="text-4xl mt-20 mx-auto"
            />
        </div>
    )
}

export default NeverAlone;

