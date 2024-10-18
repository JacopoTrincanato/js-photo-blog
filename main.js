/*Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.*/

//copio l'array di oggetti
const albums= [
    {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    }
]

//richiamo l'elemento row
const albumsRow = document.querySelector('.row');

//effettuo una chiamata AJAX
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response =>{
console.log(response);

const albumsRowEl = response.data;
console.log(albumsRowEl);

//ciclo per trasformare la prima lettera di ogni parola in una 
const newTitle = albums.map((album)=>{
    let firstLetter = album.title.charAt(0).toUpperCase();
    let restOfString = album.title.slice(1).toLowerCase();
    return firstLetter + restOfString
})

console.log(newTitle);


//ciclo all'interno di albumsEl

albumsRowEl.forEach(album => {
    //destrutturo
    const {newTitle, url} = album;

    //creo il markup da inserire dentro row
    const markup = `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="album">
            <div class="circle">
                <img src="./img/pin.svg" alt="">
                </div>
                <div class="album-img">
                    <img src="${url}" alt="">
                    
                </div>
            <div class="album-description">
                <p>${newTitle}</p>
            </div>
        </div>
    </div>
    `

    //inserisco il markup nell'HTML
    albumsRow.innerHTML += markup
});

//aggiungo un messaggio di errore
}).catch(err => console.error(err));