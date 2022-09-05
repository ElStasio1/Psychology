document.addEventListener("scroll", function () {
    var posts = document.querySelectorAll(".div_articles, .characters, .emotions, .characters_h1, .emotions_h1");
    var scrollTop = document.documentElement.scrollTop;
    posts.forEach(function (post) {
        var bottomOfObject = post.getBoundingClientRect();
        if ((scrollTop - bottomOfObject.top) > -100) {
            post.classList.add("visible");
        }
    });
},false);
