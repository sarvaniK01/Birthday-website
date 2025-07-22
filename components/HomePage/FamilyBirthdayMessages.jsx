import Button from "@/components/Button";
import BirthdayMessagesCard from "@/components/HomePage/BirthdayMessagesCard"

const FamilyBirthdayMessages = () => {
    return (
        <div className="bg-lightestPink py-26">
            <h1 className="font-merriWeather font-bold text-white font-outline-5 text-8xl text-center">
                Family's Birthday Messages
            </h1>

            <div className="grid grid-cols-3 gap-x-20 gap-y-24 px-42 mt-26">
                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/dad.png"
                    messageFromName="Dad's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/mom.png"
                    messageFromName="Mom's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/aai.png"
                    messageFromName="Aai's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/dadadaddy.png"
                    messageFromName="Dadadaddy's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/mothimummy.png"
                    messageFromName="Mothimummy's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/swar.png"
                    messageFromName="Swar's"
                />
            </div>

            <Button
                buttonText="View More"
                buttonLink="/messages"
                buttonTarget="_blank"
                buttonStyle="text-4xl mt-20 mx-auto"
            />
        </div>
    )
}

export default FamilyBirthdayMessages;

