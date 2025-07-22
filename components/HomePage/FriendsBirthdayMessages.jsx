import Button from "@/components/Button";
import BirthdayMessagesCard from "@/components/HomePage/BirthdayMessagesCard"

const FriendsBirthdayMessages = () => {
    return (
        <div className="bg-white py-26">
            <h1 className="font-merriWeather font-bold text-lightPink font-outline-5 text-8xl text-center">
                Friend's Birthday Messages
            </h1>

            <div className="grid grid-cols-3 gap-x-20 gap-y-24 px-42 mt-26">
                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/aai.png"
                    messageFromName="Prateek's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/dadadaddy.png"
                    messageFromName="Pippu's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/mothimummy.png"
                    messageFromName="Ridhi's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/swar.png"
                    messageFromName="Meher's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/dad.png"
                    messageFromName="Rosh's"
                />

                <BirthdayMessagesCard
                    imagePath="/images/HomePageImages/familyMessages/mom.png"
                    messageFromName="Saru's"
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

export default FriendsBirthdayMessages;

