// function to fetch blog post  and display them 
const fetchPosts =  async () => {
    try {
        // fetch data from the JSONPlaceholder API post endpoint
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        // check if the network reponse was ok
        if (!response) {
            throw new error(`HTPP error! status: ${response.status}`);
        }
        
        // parse the JSON data
        const posts = await response.json();

        // get the container element
        const cardContainer = document.getElementById("card-container");

        // loop throught the post and a create a blog cards
        posts.forEach(post => {
           const card = document.createElement("div");
           card.classList.add("blog-card");
           
           // add content to the card
           card.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.body.substring(0, 100)}...</p>
            <button>Update</button>
           `;

           // append the card to the conatainer
           cardContainer.appendChild(card);
        });
    } catch (error) {
        // handle any error that occurred during the fetch operation
        console.error("error fectching:", error);
        document.getElementById("card-container").innerHTML = `<p>Failed to laod post. Please try again later.</p>`;
    }
};

// call the fetch function when the script loads
fetchPosts();