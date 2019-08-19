axios
	.get("https://lambda-times-backend.herokuapp.com/articles")
	.then(res => {
		Object.values(res.data.articles).map(topic =>
			Card(topic).map(card =>
				document.querySelector(".cards-container").appendChild(card)
			)
		);
	})
	.catch(err => console.log(err));

const Card = articles => {
	const cards = articles.map(article => {
		const card = document.createElement("div");
		card.classList.add("card");

		const headline = document.createElement("div");
		headline.classList.add("headline");
		headline.textContent = article.headline;

		const author = document.createElement("div");
		author.classList.add("author");

		const imgContainer = document.createElement("div");
		imgContainer.classList.add("img-container");

		const img = document.createElement("img");
		img.src = article.authorPhoto;

		const span = document.createElement("span");
		span.textContent = article.authorName;

		card.appendChild(headline);
		card.appendChild(author);
		author.appendChild(imgContainer);
		imgContainer.appendChild(img);
		author.appendChild(span);

		return card;
	});

	return cards;
};
