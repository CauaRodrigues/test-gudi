import { Button } from "@components/ui/Button";
import "./infoSection.styles.scss";

type PropsTypes = {
	contentLeft?: boolean;
	color: string;
	btnColor: string;

	content: {
		images: {
			large: string;
			small: string;
		};
		text: {
			title: string;
			description: string;
		};
	};
};

export default function InfoSection({
	contentLeft,
	color,
	btnColor,
	content,
}: PropsTypes) {
	return (
		<section className={`info-section ${contentLeft ? "left" : null}`}>
			<img
				className="content--image"
				src={content.images.large}
				alt={content.text.title}
			/>

			<div className={`container--content ${color}`}>
				<div className="content--text">
					<span className="title--section">Viagem Nacionais</span>

					<h2 className="fw-bk">{content.text.title}</h2>

					<p className="fw-lg">{content.text.description}</p>

					<Button
						title="agendar"
						styles="fw-rg"
						transparentEffect
						color={btnColor}
					/>

					<img
						className="content--image-small"
						src={content.images.small}
						alt={content.text.title}
					/>
				</div>
			</div>
		</section>
	);
}
