import { Colors } from "@customTypes/colors";
import "./cardBenefit.styles.scss";

type BenefitProps = {
	title: string;
	image: string;
	color: Colors;
};

export default function CardBenefit(props: BenefitProps) {
	return (
		<figure className={`cardBenefit ${props.color}`}>
			<img className="imageBenefit" src={props.image} alt={props.title} />

			<figcaption className="titleBenefit">{props.title}</figcaption>
		</figure>
	);
}
