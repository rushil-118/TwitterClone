let postsDB = []

let feed = document.querySelector('.Feed-section');
let currFeed;
feed.addEventListener('click', function (e) {
    let parent = e.target.parentElement.parentElement;
    
    let liked = parent.querySelector('.liked-icon');
    let like = parent.querySelector('.like-icon');
    if (e.target.classList.contains('like-icon')) {
        e.target.style.display = 'none';
        liked.style.display = 'block';
    }
    if (e.target.classList.contains('liked-icon')) {
        e.target.style.display = 'none';
        like.style.display = 'block';
    }
    if(e.target.classList.contains('edit')){
        let text = parent.querySelector('.post-content');
        text.contentEditable = 'true';
        
    }
    if(e.target.classList.contains('delete')){
        let delcontainer = document.querySelector('.delete-confirm');
        delcontainer.style.display= 'block';
        currFeed = e.target.parentElement.parentElement.parentElement;
    }
})
let delcontainer = document.querySelector('.delete-confirm');
delcontainer.addEventListener('click',function(e){
    if(e.target.classList.contains('red')){
        currFeed.remove();
        delcontainer.style.display = 'none';
    }
    if(e.target.classList.contains('blue')){
        delcontainer.style.display = 'none';
    }
    if(e.target.classList.contains('span')){
        delcontainer.style.display = 'none';
    }
})


let container = document.querySelector('.posts');
let feedContainer = document.querySelector('.feed-container');
container.addEventListener('click', function (e) {
    if (e.target.classList.contains('button')) {
        let text = container.querySelector('.text-content').value;
        createFeed(text);
        text = '';
    }
})

function createFeed(text){
    let feedContent = document.createElement('div');
    feedContent.classList.add('feed');
    feedContent.innerHTML = `<div class="title">
                                <div class="title-name">
                                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739"
                                        alt="profile-img" class="profile-img">
                                    <p>Joanne Graham <span> @joannegraham123</span></p>
                                </div>
    
                                <div class="edit-delete">
                                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661"
                                        alt="edit-icon" class="edit">
                                    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643"
                                        alt="delete-icon" class="delete">
                                </div>
    
                            </div>

                            <div class="post-content">
                                <p>${text}</p>
                            </div>
                            <div class="like-comment">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619"
                                    alt="comment-icon">
                                <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679"
                                    alt="like-icon" class="like-icon">
                                <img src=https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455
                                    alt="liked-icon" class="liked-icon">
                            </div>
                            <div class="edit-button">
                            <button class="cancel-button">Cancel</button>
                            <button class="post-button2">Post</button>
                        </div>`
    let post = {
        postText : text
    }
    postsDB.push(post);
    localStorage.setItem('postContent',JSON.stringify(postsDB));
    feedContainer.append(feedContent);
}

