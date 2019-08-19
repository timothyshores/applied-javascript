axios
	.get("https://lambda-times-backend.herokuapp.com/topics")
	.then(res =>
		res.data.topics.map(topic =>
			document.querySelector(".topics").appendChild(Tab(topic))
		)
	)
	.catch(err => console.log(err));

const Tab = tab => {
	const div = document.createElement("div");
	div.classList.add("tab");
	div.textContent = tab;

	return div;
};
