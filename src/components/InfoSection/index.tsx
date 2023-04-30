import { PropsWithChildren } from "react";
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
		title: string;
	};
};

export default function InfoSection({
	contentLeft,
	color,
	btnColor,
	content,
	children,
}: PropsWithChildren<PropsTypes>) {
	return (
		<section className={`info-section ${contentLeft ? "left" : null}`}>
			<img
				className="content--image"
				src={content.images.large}
				alt={content.title}
			/>

			<div className={`container--content ${color}`}>
				<div className="content--text">
					<span className="title--section">Viagem Nacionais</span>

					<h2 className="fw-bk">{content.title}</h2>

					<p className="fw-lg">{children}</p>

					<Button
						title="agendar"
						styles="fw-rg"
						transparentEffect
						color={btnColor}
					/>

					<img
						className="content--image-small"
						src={content.images.small}
						alt={content.title}
					/>
				</div>
			</div>
		</section>
	);
}
