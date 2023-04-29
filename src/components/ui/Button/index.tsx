import React from "react";
import "./button.styles.scss";

type ButtonPropsType = {
	title: string;
	transparentEffect?: boolean;
	color?: string;
};

export const Button: React.FC<ButtonPropsType> = ({
	title,
	transparentEffect,
	color,
}) => {
	return (
		<button className={`${transparentEffect ? "no-fill" : null} ${color}`}>
			{title}
		</button>
	);
};
