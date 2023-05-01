import { useState } from "react";
import { Button } from "@shared/Button";
import "./header.styles.scss";
import MenuMobile from "@shared/MenuMobile";

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

			<button
				className={`btnMenuMobile ${openMenu ? "openMenu" : null}`}
				onClick={() => setOpenMenu((prevState) => !prevState)}
			>
				<div className="line" />
				<div className="line" />
				<div className="line" />
			</button>

			{openMenu && <MenuMobile />}
		</header>
	);
}
