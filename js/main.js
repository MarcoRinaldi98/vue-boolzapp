/*
    JAVASCRIPT
*/
//Riporto la data della libreria esterna di LUXON
const DateTime = luxon.DateTime;
// VUE JS
const { createApp } = Vue

createApp({
    data() {
        return {
            //variabili e ogetti
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ]
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                },
                {
                    name: 'Simona',
                    avatar: './img/avatar_io.jpg',
                    visible: true,
                    messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:18:00',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ]
                }
            ],
            activeUser: -1, 
            newMessage: '',
            searchUser: '',
            randomAnswer: ['Ok', 'Si', 'No', 'Vabbene', 'A dopo', 'Perfetto', 'Ne parliamo piu tardi', 'Come va?', 'Alla grande!']
        }           
    }, methods: {
        //funzione per visualizzare un nuovo user al click
        changeUser(newActiveUser) {
            this.activeUser = newActiveUser;
            setTimeout(() => {
                this.scrollOnLastMex();
            }, 100);
        },
        //funzione per inviare e visualizzare il messaggio scritto nell'input
        sendMessage() {
            const nowInItaly = DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss');
            const newBoxMessage = {
                date: nowInItaly,
                message: this.newMessage,
                status: 'sent'
            };
            if(this.newMessage.trim().length > 0) {
                this.contacts[this.activeUser].messages.push(newBoxMessage);
                this.newMessage = '';
                this.answerMessage();  
            }
        },
        //funzione per avere una risposta automatica con "ok" un secondo dopo che invio un messaggio
        answerMessage() {
            const nowInItaly = DateTime.now().setLocale('it').toFormat('dd/MM/yyyy HH:mm:ss');
            randomAnswerIndex = Math.floor(Math.random() * this.randomAnswer.length);
            const answer = {
                date: nowInItaly,
                message: this.randomAnswer[randomAnswerIndex],
                status: 'received'
            }
            setTimeout(() => {
                this.scrollOnLastMex();
            }, 100);
            setTimeout(() => {
                this.contacts[this.activeUser].messages.push(answer);
                setTimeout(() => {
                    this.scrollOnLastMex();
                }, 100);
            }, 1000);
        },
        //funzione per cancellare il messaggio selezionato nella chat
        removeMessage(i) {
        this.contacts[this.activeUser].messages.splice(i, 1);                      
        },
        //funzione per rimuovere tutti i messaggi di una chat
        removeAllMessage() {
            this.contacts[this.activeUser].messages.splice(0, Infinity);
        },
        //funzione per rimuovere una chat
        removeChat() {
            this.contacts.splice(this.activeUser, 1);
            if (this.contacts.length == 0) {
                this.activeUser = -1;
            }
        },
        //funzione per visualizzare gli user tramite la ricerca scritta nell'input
        viewSearchUser() {
            this.contacts.forEach(userDaVisualizzare => {
                if(!userDaVisualizzare.name.toLowerCase().includes(this.searchUser.toLowerCase())) {
                    userDaVisualizzare.visible = false;
                } else {
                    userDaVisualizzare.visible = true;
                }
            });
        },
        //funzione per scorrere tutta la height del contenitore dei messaggi oer vedere sempre il messaggio piu recente
        scrollOnLastMex() {
            const viewChatDom = document.getElementById('viewChat');
            const scrollChat = viewChatDom.scrollHeight;
            viewChatDom.scrollTop = scrollChat;
        }
    }
}).mount('#app')