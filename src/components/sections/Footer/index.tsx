import styles from "./styles.module.scss";
import LinksGroup from "@shared/LinksGroup";

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.footerContent}>
				<LinksGroup
					title="logo"
					links={[
						"Sobre nós",
						"Mural de memórias",
						"Eventos Gudi",
						"Nosso blog",
					]}
				/>

				<LinksGroup
					title="Contato"
					links={["Chat Virtual", "SAC Online", "Ouvidoria", "FAQ"]}
				/>

				<LinksGroup
					title="Benefícios"
					links={[
						"Conta digital Gudi",
						"Viaje com Milhas",
						"C6 Átomos",
						"iD Jovem",
					]}
				/>

				<LinksGroup
					title="Lugares"
					links={[
						"O melhor do Brasil",
						"Cidades frequentes",
						"Pontos turísticos",
						"Restaurantes",
					]}
				/>

				<LinksGroup
					title="Curiosidades"
					links={[
						"Cultura e tradições",
						"Pratos típicos",
						"Mitos brasileiros",
						"Carnaval",
					]}
				/>
			</div>
		</footer>
	);
}
