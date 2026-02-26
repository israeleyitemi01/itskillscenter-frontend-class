// function fetchData(callback) {
//   setTimeout(() => {
//     console.log("Data fetched!");
//     callback();
//   }, 2000);
// }

// function showData() {
//   console.log("Now showing data");
// }

// fetchData(showData);


// getUser(userId, function(user) {
//   getPosts(user.id, function(posts) {
//     getComments(posts[0], function(comments) {
//       console.log(comments);
//     });
//   });
// });




// const fbPost = [
//     {
//         id: 1,
//         userId: "1233eee*",
//         body: "Hello, I am resuming my new work at ITSKILLSCENTER",
//         images: ["img1.jp", "img2.jp"],
//         comments: {
//             id: 1,
//             userId: "2345ttt",
//             comment: "Good luck, Clock it!",
//             replies: [
//                 {id: 1, userId: "1233eee", reply: "Thanks a lot my wife!"},
//                 {id: 2, userId: "678970", comment: "Baba don start work!"},
//             ],
//         },
        
//     },
// ]
// console.log(fbPost);

const baseUrl = "https://jsonplaceholder.typicode.com";

async function fetchData(getData) {
  return await getData();
}

async function loadData() {
  try {
    const data = await fetch(baseUrl + "/posts");
    const posts = await data.json();
    posts.map(post => {
      const userContainer = document.createElement('div');
      userData.appendChild(userContainer);
      userContainer.innerHTML = `
        <h2>Title: ${post.title}</h2>
        <p>Body: ${post.body}</p>`;
    });
  } catch (err) {
    console.log("Error fetching posts:", err);
  };
}
loadData();

// btn.addEventListener('click', () => fetchData(loadData));


// Blog post
async function fetchData(id) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await Response.json();
    
    const card = document.createElement("div");
  }
}



