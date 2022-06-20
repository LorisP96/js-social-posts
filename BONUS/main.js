let post = [
    {
        id: 1,
        name : 'Phil Mangione',
        facebook : 'https://unsplash.it/300/300?image=15',
        photo : 'https://unsplash.it/600/300?image=171',
        date : '02/20/2022',
        likes : 80,
    },

    {
        id: 2,
        name : 'Leon Cino',
        facebook : 'https://unsplash.it/300/300?image=16',
        photo : 'https://unsplash.it/600/300?image=121',
        date : '12/01/2022',
        likes : 25,
    },

    {
        id: 3,
        name : 'Assunto Licenziato',
        facebook : null,
        photo : 'https://unsplash.it/600/300?image=130',
        date : '12/30/2021',
        likes : 150,
    },

    {
        id: 4,
        name : 'Guido Piano',
        facebook : 'https://unsplash.it/300/300?image=15',
        photo : 'https://unsplash.it/600/300?image=420',
        date : '11/27/2021',
        likes : 60,
    },

    {
        id: 5,
        name : 'Lino Sasso',
        facebook : null,
        photo : 'https://unsplash.it/600/300?image=111',
        date : '10/15/2021',
        likes : 1,
    }
]

let postCont = document.getElementById('container');

for (let i = 0; i < post.length; i++) {
    const thisPost = post[i];
    const {name, facebook, photo, date, likes} = thisPost;
    const postTemplate = `
        <div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        ${facebook === null ? '' : getElementFb(facebook, name)}                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${name}</div>
                        <div class="post-meta__time">${splitDate(date)}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
            <div class="post__image">
                <img src="${photo}" alt="">
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
                        Piace a <b id="like-counter-1" class="js-likes-counter">${likes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>
    `
    postCont.innerHTML += postTemplate;
}

// prendo tutti i bottoni e tutti i like
const likeBtn = document.querySelectorAll('.like-button');

const likeCounter = document.querySelectorAll('.js-likes-counter');

// ciclo for per poter lavorare singolarmente
for(let i = 0; i < likeBtn.length; i++) {

    const thisLikeBtn = likeBtn[i];

    let likeNum = parseInt(likeCounter[i].innerHTML);

    // al click evidenzio se il post piace o no
    thisLikeBtn.addEventListener('click',
        function (event) {
            event.preventDefault();

            thisLikeBtn.classList.toggle('like-button--liked');

            // se contiene la classe click aggiungo 1 like altrimenti sottraggo
            if (!thisLikeBtn.classList.contains('like-button--liked')) {
                likeNum--;
            } else {
                likeNum++
            }
            likeCounter[i].innerHTML = likeNum;
        }
    )
}

// creo funzione in caso non abbia la foto del profilo

function getElementFb(elementFb, elementName) {
    return `
    <img class="profile-pic" src="${elementFb}" alt="${elementName}">
    `
}

function splitDate (dateNum) {
    const dateSplitted = dateNum.split('/');
    const splittedResult = dateSplitted[1] + '/' + dateSplitted[0] + '/' + dateSplitted[2]; 
    return splittedResult
}

function splitName (nameNotSplitted) {
    nameNotSplitted = text.split('');
}