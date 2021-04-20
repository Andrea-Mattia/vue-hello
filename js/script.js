/**
 * INTRO VUE
 * 
 * Descrizione
 * 1. Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
 * 2. Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.
 */

// new vue instance
const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello Vue! (text inserted by Vue)',
        image: 'https://picsum.photos/id/1002/500/300',
    }
});