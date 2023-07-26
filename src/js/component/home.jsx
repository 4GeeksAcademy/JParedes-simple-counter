import React from "react";



//create your first component
const Home = (num) => {
	return (
		<div id="mainBox">
			<div className="box"><i className="fa-light fa-clock"></i></div>
			<div className="box">{num.num6}<h1></h1></div>
			<div className="box">{num.num5}</div>
			<div className="box">{num.num4}</div>
			<div className="box">{num.num3}</div>
			<div className="box">{num.num2}</div>
			<div className="box">{num.num1}</div>
		</div>
		
		
	);
};

export default Home;
