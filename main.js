// Milestone 1 - Creiamo il nostro array di oggetti che 
// rappresentano ciascun post.
// Ogni post dovrà avere le informazioni necessarie per 
// stampare la relativa card:
// - id del post, numero progressivo da 1 a n
// - nome autore,
// - foto autore,
// - data in formato americano (mm-gg-yyyy),
// - testo del post,
// - immagine (non tutti i post devono avere una immagine),
// - numero di likes.

// MILESTONE 1

let post = [
    {
        id: 1,
        name : 'Phil Mangione',
        facebook : 'https://unsplash.it/300/300?image=15',
        photo : 'https://unsplash.it/600/300?image=171',
        date : [20, 02, 2022],
        likes : 80,
    },

    {
        id: 2,
        name : 'Leon Cino',
        facebook : 'https://unsplash.it/300/300?image=16',
        photo : 'https://unsplash.it/600/300?image=121',
        date : [12, 01, 2022],
        likes : 25,
    },

    {
        id: 3,
        name : 'Assunto Licenziato',
        facebook : null,
        photo : 'https://unsplash.it/600/300?image=130',
        date : [30, 12, 2021],
        likes : 150,
    },

    {
        id: 4,
        name : 'Guido Piano',
        facebook : 'https://unsplash.it/300/300?image=15',
        photo : 'https://unsplash.it/600/300?image=420',
        date : [27, 11, 2021],
        likes : 60,
    },

    {
        id: 5,
        name : 'Lino Sasso',
        facebook : null,
        photo : 'https://unsplash.it/600/300?image=111',
        date : [15, 10, 2021],
        likes : 1,
    }
]

// OK console.log(post)

let postCont = document.getElementById('container');
// OK console.log(postCont)

for (let i = 0; i < post.length; i++) {
    const thisPost = post[i];
    
    const postTemplate = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${thisPost.facebook === null ? '' : getElementFb(thisPost.facebook, thisPost.name)}                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${thisPost.name}</div>
                        <div class="post-meta__time">${thisPost.date}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${thisPost.photo}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${thisPost.likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    postCont.innerHTML += postTemplate;
}

// creo funzione in caso non abbia la foto del profilo

function getElementFb(elementFb, elementName) {
    return `
    <img class="profile-pic" src="${elementFb}" alt="${elementName}">
    `
}
