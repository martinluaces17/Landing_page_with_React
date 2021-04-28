import React from "react";
import { NavBar } from "./navbar.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div>
			<NavBar />
			<div className="text-center mt-5"></div>
		</div>
	);
}
