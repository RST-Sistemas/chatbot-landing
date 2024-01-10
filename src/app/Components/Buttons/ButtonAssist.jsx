/** @format */

import React from "react";

function ButtonContactar() {
	return (
		<div className="flex items-center justify-center">
			<button className="overflow-hidden  w-32 p-2 h-12 bg-yellow-500 text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group">
				Contratar
				<span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
				<span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
				<span className="absolute w-36 h-32 -top-8 -left-2 bg-orange-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
				<span className="group-hover:opacity-100 group-hover:duration-1000  duration-100 opacity-0 absolute top-2.5 left-6 z-10">
					Chatbot
				</span>
			</button>
		</div>
	);
}

export default ButtonContactar;
