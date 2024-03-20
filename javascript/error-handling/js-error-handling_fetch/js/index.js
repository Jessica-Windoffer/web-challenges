console.clear();

const userElement = document.querySelector(".user");
const errorPassage = document.querySelector('[data-js="error"]');

async function getUser(url) {
  const response = await fetch(url);
  if (!response.ok) {
    errorPassage.innerText = `Network error. User not found: ${url}`;
    console.log(`Network error. User not found.`);
    return null;
  }

  try {
    const parsedJSON = await response.json();
    errorPassage.innerText = "";
    return parsedJSON.data;
  } catch (error) {
    console.log("Error parsing JSON. Error: " + error.message);
    errorPassage.innerText = "Error parsing JSON. Error: " + error.message;
    userElement.innerHTML = "Invalid URL for page";
  }
}

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
    const user = await getUser(event.target.dataset.url);
    if (user) {
      userElement.innerHTML = `
      <h2>${user.first_name} ${user.last_name}</h2>
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
      `;
      console.log(user);
    } else if (!user) {
      // errorPassage.innerText = "User not found";
      console.log("User not found");
      userElement.innerHTML = "User not found";
    }
  })
);
