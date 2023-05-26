const {createApp} = Vue ;
createApp({
    data(){
        return{
            frasi :[
                
                'La logica ti porta da A a B, l’immaginazione ti porta ovunque',
                'Gli occhi sono lo specchio dell’anima… cela i tuoi se non vuoi che ne scopra i segreti.',
                'Imparerai a tue spese che nel lungo tragitto della vita incontrerai tante maschere e pochi volti.',
                'Noi sanciamo le Irlande irrilevanti ogni qual volta che Nora quadra la mancanza usabile.',
                "Il campo è l'evidente medico dei larghi determinabili ed è così anche se non sei d'accordo",
                ""
            ],
            ora: new Date(Date.now()).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
            ricercaUtenti:"",
            dropMenu: "",
            menu :"",
            dropMenuChat:"",
            changeInNone:"",
            indiceContatti:0,
            contacts: [
                {
                    name: 'Michele',
                    avatar: './img/avatar_1.png',
                    visible: true,
                    messages: [
                        {
                            date: ' 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent',
                            
                        },
                        {
                            date: ' 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: ' 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: './img/avatar_2.png',
                    visible: true,
                    messages: [
                        {
                            date: '16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: './img/avatar_3.png',
                    visible: true,
                    messages: [
                        {
                            date: ' 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: ' 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: ' 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: './img/avatar_4.png',
                    visible: true,
                    messages: [
                        {
                            date: ' 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: ' 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: './img/avatar_5.png',
                    visible: true,
                    messages: [
                        {
                            date: ' 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: ' 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: './img/avatar_6.png',
                    visible: true,
                    messages: [
                        {
                            date: ' 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: ' 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: ' 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: './img/avatar_7.png',
                    visible: true,
                    messages: [
                        {
                            date: ' 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: ' 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: './img/avatar_8.png',
                    visible: true,
                    messages: [
                        {
                            date: ' 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: ' 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: ' 15:51:00',
                            message: 'OK!!',
                            status: 'received'

                        }
                    ],
                }
            ],
            textMessage : "" 
           
        }

    },
    methods:{
        swipeChat(indice){
            this.indiceContatti = indice;
        },
      
        addMessage(){
            const  newMessage = {
                    date: this.ora,                 
                    message:this.textMessage ,
                    status: 'sent'
                }
                    
                if(newMessage.message !== ""){
                    this.contacts[this.indiceContatti].messages.push(newMessage)
                    setTimeout(() => {
                        const  automaticMessage = {
                              
                            date: this.ora,                 
                            message: this.frasi[this.numeroRandom(this.frasi)],
                            status: 'received'
                        }
                        this.contacts[this.indiceContatti].messages.push(automaticMessage)
                        
                    }, 1000); 

                } 
            this.textMessage="";
            this.menu =''
            this.changeInNone=''
            
            
               
        },
        cancellaMessaggio(indice){
            this.contacts[this.indiceContatti].messages.splice(indice, 1)
            
        },
        showMenu(indice){
            this.dropMenu = indice;
            this.menu = 'dBlock'
            
        },
        ricercaUtente(){
            this.contacts.forEach(element => {
                if (!element.name.includes(this.ricercaUtenti)) {
                    element.visible = false;
                }
            });
        },
        numeroRandom(array){
            return Math.round(Math.random()*(array.length - 1));
        },    
        changeInvio(){
            if (this.textMessage !== "") {
                this.menu ='dBlock'
                this.changeInNone ='changeDisplayInNone'
                
            }else{
                this.menu =''
                this.changeInNone=''
                
            }
        },
        mostraMenu(){
            this.dropMenuChat = 'dBlock'
            
        },
        cancellaMessaggi(){
            this.contacts[this.indiceContatti].messages=[]
            this.dropMenuChat = ""

        },
        cancellaChat(){
            this.contacts[this.indiceContatti].visible = false;
            this.dropMenuChat = ""
            this.indiceContatti++
        }
    }

}) .mount("#app")     
   
        
   

 
    

