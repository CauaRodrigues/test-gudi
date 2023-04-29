import styles from "./hero.module.scss";
import { Button } from "@components/ui/Button";

export default function Hero() {
	return (
		<section className={styles.section}>
			<div className={styles.containerContent}>
				<div className={styles.content}>
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
