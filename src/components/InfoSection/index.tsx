import { Button } from "@components/ui/Button";
import "./infoSection.styles.scss";

export default function InfoSection() {
	return (
		<section className="info-section">
			<img
				className="content--image"
				src="assets/images/clima-perfeito@2x.png"
				alt="Clima Perfeito"
			/>

			<div className="container--content">
				<div className="content--text">
					<span className="title--section">Viagem Nacionais</span>

					<h2 className="fw-bk">O clima perfeito, no lugar perfeito</h2>

					<p className="fw-lg">
						Planeje sua viagem com a sua paquera, compartilhar momentos
						preciosos juntos não tem preço.
					</p>

					<Button
						title="agendar"
						styles="fw-rg"
						transparentEffect
						color="white"
					/>

					<img
						className="content--image-small"
						src="assets/images/clima-perfeito.png"
						alt="clima perfeito"
					/>
				</div>
			</div>
		</section>
	);
}
