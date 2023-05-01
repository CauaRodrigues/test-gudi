import React from "react";
import "./button.styles.scss";

type ButtonPropsType = {
	title: string;
	transparentEffect?: boolean;
	color?: string;
	styles?: string;
};

export const Button: React.FC<ButtonPropsType> = ({
	title,
	transparentEffect,
	color,
	styles,
}) => {
	return (
		<button
			className={`${transparentEffect ? "no-fill" : null} ${color} ${styles}`}
		>
			{title}
		</button>
	);
};
