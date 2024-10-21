/*Milestone 2
Utilizzando Postman, testiamo una chiamata all’endpoint di JSON Placeholder:
https://jsonplaceholder.typicode.com/photos?_limit=6
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.*/

//richiamo l'elemento row
const albumsRow = document.querySelector('.row');

//richiamo l'overlay
const overlay = document.querySelector('.overlay');

//effettuo una chiamata AJAX
axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6")
.then(response =>{
console.log(response);

const albumsRowEl = response.data;
console.log(albumsRowEl);

//ciclo all'interno di albumsEl

albumsRowEl.forEach(album => {

    //trasformo la prima lettera di ogni parola in una maiuscola
    let capitalizedString = (str)=> str[0].toUpperCase() + str.slice(1).toLowerCase();
    //creo una variabile words dove splitto le stringhe dei vari titoli
    let words = album.title.split(' ').map(capitalizedString)
    //ritrasformo gli array in stringhe e li salvo in una variabile
    let capitalizedTitle = words.join(' ') 
    album.title = capitalizedTitle
    console.log(album.title);
    
    //destrutturo
    const {title, url} = album;

    //creo il markup da inserire dentro row
    const markup = `
    <div class="col-lg-4 col-md-6 col-sm-12">
        <div class="album album-md album-sm">
            <div class="circle">
                <img src="./img/pin.svg" alt="">
                </div>
                <div class="album-img">
                    <img src="${url}" alt="">
                </div>
            <div class="album-description">
                <p>${title}</p>
            </div>
        </div>
    </div>
    `

    //inserisco il markup nell'HTML
    albumsRow.innerHTML += markup

    overlay.innerHTML = `
    <img src="${url}" alt="">
    <button>Close</button>
    `
    
});

//aggiungo un evento che faccia ricomparire il layover
albumsRow.addEventListener('click', ()=> {
    overlay.classList.remove('disappear');
})



//aggiungo un messaggio di errore
}).catch(err => console.error(err));