import { Colors } from "@customTypes/colors";
import CardBenefit from "@shared/CardBenefit";
import styles from "./benefits.module.scss";

export default function Benefits() {
	return (
		<section className={styles.containerBenefits}>
			<div className={styles.contentBenefits}>
				<CardBenefit
					title="O melhor do Brasil"
					image="assets/icons/brasil.svg"
					color={Colors.Gray}
				/>

				<CardBenefit
					title="Cidades mais frequentadas"
					image="assets/icons/cidades.svg"
					color={Colors.Primary}
				/>

				<CardBenefit
					title="Pontos turísticos"
					image="assets/icons/turisticos.svg"
					color={Colors.Gray}
				/>

				<CardBenefit
					title="Restaurantes"
					image="assets/icons/restaurantes.svg"
					color={Colors.Primary}
				/>
			</div>
		</section>
	);
}
