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
    return getLocalStorageItem('postArray');
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
    
    postArray.push(newPost);
    setPosts(postArray);

    /*var newPostElement = createNewHTMLElement("div", newPost.id, "card mb-3");
    document.getElementById('timeline-section').appendChild(newPostElement);

    var newPostHeader = createNewHTMLElementWithContent("div", (newPost.id + "post-author"), "card-header", newPost.username);
    document.getElementById(newPost.id).appendChild(newPostHeader);*/

    /*var newDeleteButton = createNewHTMLElementWithContent("button", (newPost.id + "delete-button"), "btn btn-danger", "Delete");
    document.getElementById((newPost.id + "post-author")).appendChild(newDeleteButton);*/

    /*var newPostBodyEl = createNewHTMLElement("div", (newPost.id + "post-body"), "card-body");
    document.getElementById(newPost.id).appendChild(newPostBodyEl);

    var newPostParagraph = createNewHTMLElementWithContent("p", (newPost.id + "post-paragraph"), "card-text", newPost.body);
    document.getElementById((newPost.id) + "post-body").appendChild(newPostParagraph);*/

    displayPosts(postArray);

    username.value = '';
    topic.value = '';
    postBody.value = '';
}


function displayPosts(array) {
    document.getElementById('timeline-section').innerHTML = '';

    for (let i = 0; i < array.length; ++i) {
        var newPostElement = createNewHTMLElement("div", array[i].id, "card mb-3");
        document.getElementById('timeline-section').appendChild(newPostElement);
    
        var newPostHeader = createNewHTMLElementWithContent("div", (array[i].id + "post-author"), "card-header", array[i].username);
        document.getElementById(array[i].id).appendChild(newPostHeader);
    
        var newDeleteButton = createNewHTMLElementWithContent("button", (array[i].id + "delete-button"), "btn btn-danger", "Delete");
        newDeleteButton.style="float: right";
        document.getElementById((array[i].id + "post-author")).appendChild(newDeleteButton);
        document.getElementById(newDeleteButton.id).onclick = function() {
            deletePost(i);
        }
        
        
        var newPostBodyEl = createNewHTMLElement("div", (array[i].id + "post-body"), "card-body");
        document.getElementById(array[i].id).appendChild(newPostBodyEl);
    
        var newPostParagraph = createNewHTMLElementWithContent("p", (array[i].id + "post-paragraph"), "card-text", array[i].body);
        document.getElementById((array[i].id) + "post-body").appendChild(newPostParagraph);

    }
}


function deletePost(index) {
    if (index === 0) {
        postArray = postArray.slice(1);
    }
    else if (index === postArray.length - 1) {
        postArray = postArray.slice(0, -1);
    }
    else {
        const firstHalf = postArray.slice(0,index);
        const secondHalf = postArray.slice(index + 1);
        postArray = firstHalf.concat(secondHalf);
    }

    setPosts(postArray);
    displayPosts(postArray);
}

window.onload = function() {
    if (localStorage.getItem('postArray') != null) {
        postArray = getPosts();
        displayPosts(postArray);
    }
    else {
        console.log("There are no new posts!");
    }
}