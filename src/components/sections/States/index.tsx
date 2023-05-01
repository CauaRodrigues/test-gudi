import CardState from "@shared/CardState";
import styles from "./states.module.scss";

export default function States() {
	return (
		<section className={styles.containerStates}>
			<CardState name="Rio de Janeiro" />
			<CardState name="Rio das ostras" />
			<CardState name="Caldas Novas" />
			<CardState name="Amazônia" />
		</section>
	);
}
