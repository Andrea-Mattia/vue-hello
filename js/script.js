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
        opacityClass: 'op-0',
        titleOne: 'jQuery',
        titleTwo: 'Vue',
        titleThree: 'both-gif',
        btnTxt: 'Click me to discover!',
        imgJquery: 'https://upload.wikimedia.org/wikipedia/commons/f/fd/JQuery-Logo.svg',
        imgVue: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg',
        imageBoth: 'https://media.giphy.com/media/3o7aCRloybJlXpNjSU/giphy.gif',
    },
    methods: {
        active() {
            this.opacityClass = (this.opacityClass === 'op-0') ? 'active' : 'op-0';
            this.btnTxt = (this.btnTxt === 'Click me to discover!') ? 'BOTH!' : 'Click me to discover!';
        }
    }
});