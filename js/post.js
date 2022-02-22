function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => displayPosts(posts))
}

loadPosts()

function displayPosts(posts){
    const postContainer= document.getElementById('posts');
    // console.log(posts)
    for(const post of posts){
        const div= document.createElement('div');
        div.classList.add('post')
        div.innerHTML= ` <h3>${post.title}</h3> 
        <p> ${post.body}</p>`

        postContainer.appendChild(div)
        
    }

}

addpost()

function addpost(){
    fetch('https://jsonplaceholder.typicode.com/posts' , {
        method: 'POST',
        body : JSON.stringify({
            title: 'hello sazid',
            body: 'this is my post',
            userId: 2
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
    })
    .then(res=> res.json())
    .then(data => console.log(data))
}