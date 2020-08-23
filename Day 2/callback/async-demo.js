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

async function displayComments() {
  try {
    const user = await getUser(3);
    const blogPost = await getBlogPost(user.name);
    const comments = await getComments(blogPost[0]);
    console.log(comments);
  } catch (err) {
    console.log(err);
  }
}
displayComments();
