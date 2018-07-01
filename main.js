var tick = 0;

function ticking() {
	tick++;
	const tickingElement = (
		<div>
			<h1>IT'S TICKING</h1>
			<h2>{tick}</h2>
		</div>
	);
	ReactDOM.render(tickingElement, document.getElementById("root"));	
};

setInterval(ticking, 1000);