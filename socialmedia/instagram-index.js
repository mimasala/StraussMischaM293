var stories = document.getElementById("user-stories");

for (var i = 0; i < 10; i++) {
    var newUser = document.createElement("div");
    newUser.setAttribute("class", "post-from-user");
    newUser.setAttribute("grid-column", i + 1);
    stories.appendChild(newUser);

    var link = document.createElement("a");
    link.setAttribute("href", "https://www.google.ch/");

    var image = document.createElement("img");
    image.setAttribute("class", "imageUsers")
    image.setAttribute("src", "https://picsum.photos/500/500")
    image.setAttribute("border-radius", "50%");

    newUser.appendChild(link);
    link.appendChild(image)
}
