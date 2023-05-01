import styles from "./hero.module.scss";
import { Button } from "@shared/Button";

export default function Hero() {
	return (
		<section className={styles.hero}>
			<div className={styles.containerContent}>
				<div className={styles.contentHero}>
					<h1 className="fw-bd">Para qual estado você deseja ir?</h1>

					<input
						type="text"
						name="search"
						placeholder="Pesquisar"
						id="search"
					/>

					<Button title="Buscar" styles="fw-bd" />
				</div>
			</div>
		</section>
	);
}
