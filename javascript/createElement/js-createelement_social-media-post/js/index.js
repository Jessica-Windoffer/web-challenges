console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Create elements for the post

const article = document.createElement("article");
article.classList.add("post");

const p = document.createElement("p");
p.classList.add("post__content");
p.textContent = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const footer = document.createElement("footer");
footer.classList.add("post__footer");

const span = document.createElement("span");
span.classList.add("post__username");
span.textContent = "@username";

const button = document.createElement("button");
button.type = "button";
button.classList.add("post__button");
button.dataset.js = "like-button";
button.textContent = "♥ Like";

// Append elements to their respective parent
article.append(p, footer);
footer.append(span, button);

// Append the post to the body
document.body.appendChild(article);
