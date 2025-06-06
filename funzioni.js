//una funzione è un blocco di codice8due graffe) a cui diamo un nome
//è una lista di diverse istruzioni raccolte in una unica unità che risolve un problema preciso
//una volta definito può essere richiamato quanto volte si voglia
//le funzioni possono riceve degli imput (oppure no) e restituirli( oppure mo)
//imoput-->funzione-->output
//le funzioni possono essere piccole o infinite
//
//una fu zione prima si dichiara e poi si invoca per eseguirla
//dicbiarare una funzione:
//ci sono tanti modi x doicharare una funzione--> constante dichiara con funcion.tonde e poi gradfde
const bark = function () {
  console.log("bau");
  console.log("bau"); //la funzione si dichiara così
};
bark(); // così si invoca la funzione, con il nome della costante
bark();

const sayHello = function () {
  let message = " Ciao io sono Alessandra";
  message = message.toUpperCase();
  console.log(message); // funzione dichiarata costate e variabile
};

sayHello(); //funzione dichiarate

//hi();//non usare questo tipo di funzione
//function hi() {
//console.log("welcome");
//} //altro modo di chiaamare la funzione, anche invocandola prima funzionme ma meglio non farlo
//la funzione regge perchè il limnguaggio porta in cima la funzione
const myAge = function () {
  let message = "i'm 31 years old";

  console.log(message);
};

myAge();

let s1 = "internet";
const ritaglia = function () //funzione dichiara
//ta
{
  const result = s1.slice(0, 5);
  console.log(result);
};
ritaglia(); // funzione invocata
for (let i = 0; i < 10; i++) {
  ritaglia();
} // racchiuso l'evocazione della funzione in un ciclo for
//altro esempio di funzione
//

const somma = function () {
  const n1 = 6;
  const n2 = 9;
  const result = n1 + n2;

  console.log("il risultato è " + result);
};
somma();

const somma2 = function () {
  const n2 = 3;

  const n3 = 7;
  const result = n2 + n3;
  console.log("il risultato è " + result);
};
somma2();
//in questo caso le somma danno risultati perchè vengono dichiarati nelle funzioni ma il tutto potrebbe essere troppo
//

const smartSomma = function (
  n1,
  n2 //tra parentesi ci sono i parametri
) {
  const result = n1 + n2;
  console.log("il risultato è " + result);
};

smartSomma(9, 11); // questi tra parentesi, unna volta richiamata la funzione, si chiamano argomenti
smartSomma(2, 5);
smartSomma(4, 9);
smartSomma(15151, 4444);
//quindi la funzione è una cioè smartsomma ma i valori sono dinamnici
//funzione che genera un nome
const sayHelloAgain = function (name) {
  console.log("ciao, mi chiamo " + name);
};
sayHelloAgain("Luna");
sayHelloAgain("Alessandra");
sayHelloAgain("Mattia");

// funzione che ritaglia una porzione di una stringa

const cutString = function (StringTocut, startindex, endIndex) {
  const result = StringTocut.slice(startindex, endIndex);
  console.log(result);
};
cutString("automobile", 3, 7);
cutString("Oggi c'è il sole", 5, 12);
cutString("Hello Luna my old Friend", 6, 1);

// funzione che calcola un numero caSUALE tra 0 e un valore fornito

/*const rollTheDice = function (facceDado) {
  const tiro = Math.cell(Math.random() * facceDado);
  console.log(tiro);
};

rollTheDice(6);
rollTheDice(10);
rollTheDice(20);*/
const summFree = function (
  n1,
  n2,
  n3 = 0 // se non metti il valore di default e non hai il terzo parametro allora il valore verrebbe nan
) {
  const total = n1 + n2 + n3;
  alert(total);
};

summFree(6, 2); // se non c'è un valore nel terzo paramentro per esempre, ai parametri puoi dare valori di defulat

//valori di ritorno di una funzione
//una funzione opzionalmente può ritornare un valore alla fine della sua esecuzione
//le costanti e variabili della funzione nascono e muoiono nella funzione stessa, quindi fuori non hanno valore
//ma ad esempio const total dell'esempio precedente, il valore può venire ritornato fuori dalla funzione
//se una funzione ritorna un valore, sarà possibile mantenere quel risultato al di fuori della funzione, una volta che la sua esecuzione sarà terminata
//la parola chiave di qiesta opzione è return

const anotherSumm = function (n1, n2) {
  const result = n1 + n2;
  return result; // return è sempre la parte finale della funzione
}; // con la parola return significa che la costante result ha sconfinato dalla funzione stessa
// al momento result fuori dalla funzione non è definito
//anotherSumm(7,8 ), questo sarebbe l'evocazione classica della funzione
//essendo result ritornato fuori dalla funzione allora si può inserire in una variabile
const r = anotherSumm(7, 8);
console.log(r);

// creiamo funzioni separata x effettuare delle operazioni matematiche
const sommaDueNum = function (n1, n2) {
  const risultato = n1 + n2;
  return risultato;
};
const arrotonda = function (numero) {
  const valoreArrotondato = Math.floor(numero);
  return valoreArrotondato;
};
const moltiplicaPerTre = function (numero) {
  const risultatoTriplicato = numero * 3;
  return risultatoTriplicato;
};

let valore = sommaDueNum(6.5, 7.4); // crea una variabile e dagli il valore del nome della prima funzione e dagli i parametri
valore = arrotonda(valore); // ripredi la variabile e dagli il nuovo valore della costante della funzione successiva
valore = moltiplicaPerTre(valore);
console.log("il risultato finale è " + valore);

const verificaEta = function (eta) {
  if (eta >= 18) {
    return "maggiorenne";
  } else {
    return "minorenne";
  }
};
console.log("la mia età è " + verificaEta(30));
console.log("la mia età è " + verificaEta(15));

const lanciaDado = function () {
  const lancio = Math.ceil(Math.random() * 6);
  return lancio;
};
console.log("tiro il dado ed esce " + lanciaDado());
console.log("tiro il dado ed esce " + lanciaDado());
console.log("tiro il dado ed esce " + lanciaDado());
//
//js ha numerosi metodi predefiniti per manipolare i dati
//manipolazioni con stringhe:
// IndexOf--> trova l'indice cioè la posizione di una parte di una stringa dentro un'altra
//""
const saluto = "Ciao studenti, ciao a tutti";
const position = saluto.indexOf("studenti");
console.log(position);
const pos = saluto.lastIndexOf("tutti");
console.log(pos);
//molto usato è il lenght cioè la lunfhezza degli elementi
//c'è anche lo slice per tagliare le stringhe

//per esempio slice(10,15) nelle parentesi sono i valori cioè le parti da dove iniziare a tagliare
//c'è replace--> per rimpiazzare caratteri
//toLowerCase()
//toUpperCase()
//per mettere due stringhe insieme oltre al più c'è il concact
//il trim permettere di togliere spazi vuoti di una stringa
//c'è charAt() è il contrario di IndexOf, gli dai il numero e ti trova il carattere
//.split() trasforma una stringa in un'array di stringhe e può semrvire per manipolare le stringhe in quanto si hanno più modi per manipolare gli array che le stringhe.
//.join parte da un'array e lo trasforma in una stringa
//math:
//random, a random,
//floor() arrontonda per difetto
//ceil() arrontonda per eccesso
//
//

//ESERCIZI
//scrivi una fun zione che ritorni treu se il num fornito è maggiorne di 10 senno false
//

const count = function (n) {
  if (n < 10) {
    return true;
  } else {
    return false;
  }
};
count(50);
console.log(count);
//scrivi una funzione che accetta due stringhe come parametri, le concateni e devetornare il risultato senza la prima e ultima lettera
//
const concactString = function (str1, str2) {
  let result = str1 + str2;
  result = result.slice(1, result.lenght - 1);
  return result;
};
console.log(concactString("hello", "world"));
//
//scrivi una funzione che accetta un num come parametro, se pari dee tornare moltiplicato x 3, se dispari deve tornare sottratto 5
//
const calcolo = function (n1) {
  if (n1 % 2 === 0) {
    return n1 * 3;
  } else {
    return n1 - 5;
  }
};
calcolo(15);
console.log("il numero dovrebbe essere 10");
// funzione che esegue per un numero di volte fornito come paramentro, un estrazione di un num casuale da 1 a 6
// e come ritorno deve avere la somma di tutti i valori estratti

let tiraMolteVolte = function (numvolte) {
  let somma = 0;
  for (let i = 0; i < numvolte; i++) {
    somma + somma + lanciaDado();
  }
  return somma;
};

console.log(tiraMolteVolte(4));
console.log(tiraMolteVolte(5));
console.log(tiraMolteVolte(800));
//
//
//
//
//
//
//
//
//
