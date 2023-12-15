// Recupero il paragraph
// Creo il messaggio assegnadolo ad una variabile
// Assegno il numero 21 ad una variabile come stringa
// Chiedo il nome
// Chiedo il colore preferito
// modifico il valore della variabile message aggiungendo i dati dell'utente
// modifico il contenuto testuale

const paragraph = document.getElementById('newPassword');
console.log(paragraph);

let message = 'La tua password è ';
console.log(message);

let endPassword = '21';

const lastName = prompt('Qual è il tuo cognome?', 'Osman');
console.log(lastName);

const favouriteColor = prompt('Qual è il tuo colore preferito?', 'Giallo');
console.log(favouriteColor)

message += lastName + favouriteColor + endPassword;
console.log(message)

paragraph.innerText = message
