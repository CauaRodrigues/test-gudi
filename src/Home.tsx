import Header from "@components/Header";
import Hero from "@components/Hero";
import InfoSection from "@components/InfoSection";
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
		</>
	);
}

export default Home;
