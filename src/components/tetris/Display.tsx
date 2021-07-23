import React, { FC } from "react";
import { StyledDisplay } from "./styles/StyledDisplay";

interface DisplayProps {
	gameOver?: boolean;
	text: string;
}

const Display: FC<DisplayProps> = ({ gameOver, text}) => (
	<StyledDisplay gameOver={gameOver}>
		{text}
	</StyledDisplay>
);

export default Display;