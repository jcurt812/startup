var postArray = [];

class Post {
    id;
    username;
    topic;
    body;
    timestamp;

    constructor(username, topic, body, timestamp) {
        this.id = crypto.randomUUID();
        this.username = username;
        this.topic = topic;
        this.body = body;
        this.timestamp = timestamp;
    }
}

/*class Timeline {
    topic;
    postArray;
    govLevel;

    constructor(topic, postArray, govLevel) {
        this.topic = topic;
        this.postArray = postArray;
        this.govLevel = govLevel;
    }
}*/

function getLocalStorageItem(key) {
    const item = localStorage.getItem(key);
    try {
        return JSON.parse(item);
    } catch (e) {
        return item;
    }
}

function getPosts() {
    getLocalStorageItem('postArray');
}

function setPosts(postArr) {
    localStorage.setItem('postArray', JSON.stringify(postArr));
}


function createNewHTMLElement(elementType, elementID, elementClass) {
    var newElement = document.createElement(elementType);
    newElement.id = elementID;
    newElement.className = elementClass;

    return newElement;
}

function createNewHTMLElementWithContent(elementType, elementID, elementClass, elementContent) {
    var newElement = document.createElement(elementType);
    newElement.id = elementID;
    newElement.className = elementClass;
    newElement.innerHTML = elementContent;

    return newElement;
}

function createPost() {
    var username = document.getElementById('poster-username');
    var topic = document.getElementById('post-topic');
    var postBody = document.getElementById('newpostbody');
    var date = Date.now();

    var newPost = new Post(username.value, topic.value, postBody.value, date);
    console.log(newPost);

    var newPostElement = createNewHTMLElement("div", newPost.id, "card mb-3");
    document.getElementById('timeline-section').appendChild(newPostElement);

    var newPostHeader = createNewHTMLElementWithContent("div", (newPost.id + "post-author"), "card-header", newPost.username);
    document.getElementById(newPost.id).appendChild(newPostHeader);

    /*var newDeleteButton = createNewHTMLElementWithContent("button", (newPost.id + "delete-button"), "btn btn-danger", "Delete");
    document.getElementById((newPost.id + "post-author")).appendChild(newDeleteButton);*/

    var newPostBodyEl = createNewHTMLElement("div", (newPost.id + "post-body"), "card-body");
    document.getElementById(newPost.id).appendChild(newPostBodyEl);

    var newPostParagraph = createNewHTMLElementWithContent("p", (newPost.id + "post-paragraph"), "card-text", newPost.body);
    document.getElementById((newPost.id) + "post-body").appendChild(newPostParagraph);

    username.value = '';
    topic.value = '';
    postBody.value = '';
}

/*function deletePost() {

}*/

window.onload = function() {
    if (localStorage.getItem('postArray') != null) {
        postArray = getPosts();
    }
    else {
        console.log("There are no new posts!");
    }
}