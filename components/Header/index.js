const Header = () => {
	const div = document.createElement("div");
	div.classList.add("header");

	const date = document.createElement("span");
	date.classList.add("date");
	date.textContent = "SMARCH 28, 2019";

	const h1 = document.createElement("h1");
	h1.textContent = "Lambda Times";

	const temp = document.createElement("span");
	temp.classList.add("temp");
	temp.textContent = "98°";

	div.appendChild(date);
	div.appendChild(h1);
	div.appendChild(temp);

	return div;
};

document.querySelector(".header-container").appendChild(Header());
