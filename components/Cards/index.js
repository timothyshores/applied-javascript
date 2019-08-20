axios
	.get("https://lambda-times-backend.herokuapp.com/articles")
	.then(res =>
		Object.values(res.data.articles)
			.flat()
			.map(card => Card(card))
	)
	.catch(err => console.log(err));

const Card = article => {
	const card = document.createElement("div");
	const headline = document.createElement("div");
	const author = document.createElement("div");
	const imgContainer = document.createElement("div");
	const img = document.createElement("img");
	const span = document.createElement("span");

	card.classList.add("card");
	headline.classList.add("headline");
	headline.textContent = article.headline;
	author.classList.add("author");
	imgContainer.classList.add("img-container");
	img.src = article.authorPhoto;
	span.textContent = article.authorName;

	card.appendChild(headline);
	card.appendChild(author);
	author.appendChild(imgContainer);
	imgContainer.appendChild(img);
	author.appendChild(span);

	document.querySelector(".cards-container").appendChild(card);
};
