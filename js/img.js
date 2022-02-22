function loadImgs(){
    fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
    .then(res=> res.json())
    .then(data=> displayImgs(data))
}

loadImgs()
function displayImgs(imgs){
    const imgContainer = document.getElementById('img');
    for(const img of imgs){
        const im =document.createElement('img');
        im.setAttribute("src", img.url);
        im.setAttribute("width", "304");
        im.setAttribute("height", "228");
        im.setAttribute("alt", "The Pulpit Rock");
        imgContainer.appendChild(im);
    }
}