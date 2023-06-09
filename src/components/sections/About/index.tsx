import AboutSection from "@shared/AboutSection";
import { data } from "./data";

export default function About() {
	return (
		<>
			<span id="sobre"></span>
			<AboutSection color="blue" btnColor="white" content={data["couple"]}>
				Planeje sua viagem com a sua paquera, compartilhar momentos preciosos
				juntos não tem preço.
			</AboutSection>

			<AboutSection
				contentLeft
				color="light"
				btnColor="blue"
				content={data["friends"]}
			>
				Rachando a conta ou rachando o bico, a melhor hora pra curtir é entre
				amigos. Conheça nossos <b>Planos Multi</b>.
			</AboutSection>

			<AboutSection color="blue" btnColor="white" content={data["all"]}>
				Conheça as fontes termais de <b>Caldas Novas</b>, <b>Goiás</b>.{" "}
				<span className="fw-rg">
					Águas quentes, num clima sereno, relaxante e natural.
				</span>
			</AboutSection>
		</>
	);
}
