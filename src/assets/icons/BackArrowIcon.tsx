import * as React from "react";
import Svg, { Path } from "react-native-svg";

interface BackArrowIconProps {
	color?: string;
	xmlns?: string;
	showWhiteIcon?: boolean;
}
export const BackArrowIcon = (props: BackArrowIconProps) => {
	const { showWhiteIcon = false } = props;

	if (showWhiteIcon) {
		return (
			<Svg
				xmlns="http://www.w3.org/2000/svg"
				width="18"
				height="19"
				viewBox="0 0 18 19"
				fill="none"
				{...props}>
				<Path
					d="M17.0049 9.75H3.00488"
					stroke="white"
					stroke-width="1.5"
					stroke-linecap="square"
				/>
				<Path
					d="M9.5 17L2 9.5L9.5 2"
					stroke="white"
					stroke-width="1.5"
					stroke-linecap="square"
				/>
			</Svg>
		);
	}
	return (
		<Svg
			xmlns="http://www.w3.org/2000/svg"
			width={18}
			height={19}
			fill="none"
			{...props}>
			<Path
				stroke="#000"
				strokeLinecap="square"
				strokeWidth={1.5}
				d="M17.008 9.75h-14M9.5 17 2 9.5 9.5 2"
			/>
		</Svg>
	);
};
