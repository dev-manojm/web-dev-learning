const getDemo = (callbackfun) => {
  setTimeout(() => {
    callbackfun({
      title: "Callback Demo",
    });
  }, 2000);
};

getDemo((bp) => {
  console.log(bp.title);
});

function getUser(id, callbackfun) {
  setTimeout(() => {
    console.log("Getting the user from database");
    callbackfun({
      id: id,
      name: "admin",
    });
  }, 1000);
}

function getBlogPost(username, callbackfun) {
  setTimeout(() => {
    console.log("Getting the post from insta");
    callbackfun(["post1", "post2"]);
  }, 1000);
}

function getComments(post, callbackfun) {
  setTimeout(() => {
    console.log("Getting the comments from insta" + post);
    callbackfun(["commanr for " + post]);
  }, 1000);
}

getUser(1, (user) => {
  console.log("got user" + user);
  getBlogPost(user.name, (posts) => {
    console.log("get post", posts);
    getComments(posts[0], (comments) => {
      console.log("got comments ", comments);
    });
  });
});
