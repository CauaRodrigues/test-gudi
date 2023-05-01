import styles from "./styles.module.scss";

type LinksProps = {
	title: string;
	links: string[];
};

export default function LinksGroup({ title, links }: LinksProps) {
	return (
		<div className={styles.containerLinks}>
			{title === "logo" ? (
				<img className={styles.footerLogo} src="assets/icons/gudi-lema.svg" />
			) : (
				<h3>{title}</h3>
			)}

			<ul className={styles.boxLinks}>
				{links ? links.map((link, index) => <li key={index}>{link}</li>) : null}
			</ul>
		</div>
	);
}
