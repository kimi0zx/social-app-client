/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import Toottip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

export default ({ children, onClick, tip, btnClassName, tipClassName }) => (
	<Toottip title={tip} className={tipClassName} placement="top">
		<IconButton onClick={onClick} className={btnClassName}>
			{children}
		</IconButton>
	</Toottip>
);
