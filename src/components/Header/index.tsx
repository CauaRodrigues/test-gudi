import styles from "./header.module.scss";

export default function Header() {
	return (
		<header className={styles.header}>
			<picture>
				<source srcSet="assets/icons/gudi.svg" media="(max-width: 552px)" />

				<img
					className={styles.logo}
					src="assets/icons/gudi-lema.svg"
					alt="Gudi Logo"
				/>
			</picture>

			<nav className={styles.menu}>
				<ul>
					<li>
						<a href="#sobre">Sobre</a>
					</li>

					<li>
						<a href="#beneficios">Benefícios</a>
					</li>

					<li>
						<a href="#contato">Contato</a>
					</li>

					<li className="btn">
						<a href="#agendar">Agendar</a>
					</li>
				</ul>
			</nav>

			<button className={styles.btnMenuMobile}>
				<div className="line" />
				<div className="line" />
				<div className="line" />
			</button>
		</header>
	);
}
