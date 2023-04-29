import { useState } from "react";
import "./header.styles.scss";

export default function Header() {
	const [openMenu, setOpenMenu] = useState(false);

	return (
		<header className="header">
			<picture>
				<source srcSet="assets/icons/gudi.svg" media="(max-width: 552px)" />

				<img
					className="logo"
					src="assets/icons/gudi-lema.svg"
					alt="Gudi Logo"
				/>
			</picture>

			<nav className="menu">
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

			<button
				className={`btnMenuMobile ${openMenu}`}
				onClick={() => setOpenMenu((prevState) => !prevState)}
			>
				<div className="line" />
				<div className="line" />
				<div className="line" />
			</button>
		</header>
	);
}
