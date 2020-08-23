function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting the user from database");
      resolve({
        id: id,
        name: "admin",
      });
    }, 1000);
  });
}

function getBlogPost(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting the post from insta");
      resolve(["post1", "post2"]);
    }, 1000);
  });
}

function getComments(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Getting the post from insta");
      resolve(["comment", "comment2"]);
    }, 1000);
  });
}

getUser(1)
  .then((user) => getBlogPost(user.name))
  .then((blogPost) => getComments(blogPost[0]))
  .then((comments) => console.log(comments));
