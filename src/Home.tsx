import Header from "@components/Header";
import Hero from "@components/Hero";
import InfoSection from "@components/InfoSection";
import CardsStates from "@components/CardsStates";
import { data } from "./data";

function Home() {
	return (
		<>
			<Header />
			<Hero />

			<InfoSection color="blue" btnColor="white" content={data["couple"]} />
			<InfoSection
				contentLeft
				color="light"
				btnColor="blue"
				content={data["friends"]}
			/>
			<InfoSection color="blue" btnColor="white" content={data["all"]} />

			<CardsStates />
		</>
	);
}

export default Home;
