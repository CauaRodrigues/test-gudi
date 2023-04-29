import styles from "./hero.module.scss";

export default function Hero() {
	return (
		<section className={styles.section}>
			<div className={styles.containerContent}>
				<div className={styles.content}>
					<h1>Para qual estado você deseja ir?</h1>
					<input
						type="text"
						name="search"
						placeholder="Pesquisar"
						id="search"
					/>
					<button className="btn">Buscar</button>
				</div>
			</div>
		</section>
	);
}
