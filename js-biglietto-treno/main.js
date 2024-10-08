/* Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20 % per i minorenni
va applicato uno sconto del 40 % per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.
Create un file README.md e provate prima a scrivere il processo per la risoluzione del problema come visto in classe.
Dopo trasformate il vostro linguaggio formale in js. */

/*

1) un prompt che chieda di inserire un numero all'utente
1.1) un controllo che verifichi che il valore inserito sia un numero
1.2) console.log() che stampi il costo del biglietto(numero in input*0.21)

2) un prompt che chieda all'utente di inserire un valore compreso tra 0 e 99
2.1) un controllo che verifichi che il valore sia valido
2.2) un if che consenta di applicare uno sconto
    if eta<18 {
        sconto 20% 
        console.log("il costo del biglietto è")
    }else if eta >65{
        sconto 40%
        console.log("il costo del biglietto è")
    }else{
        console.log("il costo del biglietto è")

//da vedere come arrotondare cifra in output

