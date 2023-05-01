import "./cardState.styles.scss";

type StateProps = {
	name: string;
};

export default function CardState(props: StateProps) {
	const StateNameFormatting = props.name.toLowerCase().split(" ").join("-");

	return (
		<div className={`state ${StateNameFormatting}`}>
			<span className="label">{props.name}</span>
		</div>
	);
}
