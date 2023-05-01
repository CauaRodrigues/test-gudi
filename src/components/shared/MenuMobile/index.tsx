import { Button } from "@shared/Button";
import styles from "./menuMobile.module.scss";

export default function MenuMobile() {
	return (
		<nav className={styles.menuMobile}>
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

				<li>
					<Button
						title="Agendar"
						styles="fw-bd"
						transparentEffect={false}
						color="white"
					/>
				</li>
			</ul>
		</nav>
	);
}
