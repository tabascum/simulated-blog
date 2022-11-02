const Author = require("./Author");

const vasco = new Author("Samuel");

const post = vasco.writePost(
  "Post One",
  "This is the very first post at this simulated blog."
);

post.addComment("Vasco M", "Pretty simple");

console.log(vasco);
console.log(post);
