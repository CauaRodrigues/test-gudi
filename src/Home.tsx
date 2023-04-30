import Header from "@components/Header";
import Hero from "@components/Hero";
import InfoSection from "@components/InfoSection";
import CardsStates from "@components/CardsStates";
import Gallery from "@components/Gallery";
import { data } from "./data";

function Home() {
	return (
		<>
			<Header />
			<Hero />

			<InfoSection color="blue" btnColor="white" content={data["couple"]}>
				Planeje sua viagem com a sua paquera, compartilhar momentos preciosos
				juntos não tem preço.
			</InfoSection>

			<InfoSection
				contentLeft
				color="light"
				btnColor="blue"
				content={data["friends"]}
			>
				Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre
				amigos. Conheça nossos <b>Planos Multi</b>.
			</InfoSection>

			<InfoSection color="blue" btnColor="white" content={data["all"]}>
				Conheça as fontes termais de <b>Caldas Novas</b>, <b>Goiás</b>.{" "}
				<span className="fw-rg">
					Águas quentes, num clima sereno, relaxante e natural.
				</span>
			</InfoSection>

			<CardsStates />
			<Gallery />
		</>
	);
}

export default Home;
