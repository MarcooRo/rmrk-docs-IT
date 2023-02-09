---
title: RMRK 1.0 (obsoleto)
---

Siccome Kusama - dove è sviluppato RMRK - non ha smart contract o programmabilità, RMRK 1.0 è basato sulla funzione `system.remark` di molte [Substrate](https://substrate.dev) chains, inclusa
[Kusama](https://kusama.network).

I remark sono come degli appunti o delle note sui blocchi. L’informazione non è memorizzata nel trie della chain, bensì lunghi i blocchi come input. I remark non hanno effetti estrinsechi (input esterni), che significa che non alterano lo storage della chain, ma sono memorizzati nell’hard drive dei nodi insieme ai block records.

Interpretando questi dati in una maniera particolare, gli strumenti possono comprendere le informazioni in modi diversi da quanto potrebbe fare un osservatore esterno.

Come metafora, una blockchain può essere paragonata ad una nave mercantile che trasporta container, che rappresentano i vari blocchi. All’interno vi sono le transazioni. I remark non mettono i contenuti all’interno dei container, bensì graffiti sui loro lati. Il messaggio viene comunque trasmesso attraverso i blocchi, ma non influisce sul loro contenuto. All’arrivo, un interprete specializzato del linguaggio (la specifica RMRK) è colui che interpreta questi graffiti per creare un’immagine coerente dello stato degli NFTs.

Le **regole** per come interpretare sono chiamate specifiche o standard, e RMRK è uno di questi set di regole. RMRK si occupa di applicare le regole ai remarks, che è ciò che viene chiamato graffiti blockchain per le blockchain [basate su Substrate](https://dotleap.com/an-explanation-of-substrate-for-humans/) come Polkadot e Kusama

> RMRK può essere perciò definito come un set di regole che dettano come interpretare i graffiti delle blockchain in una maniera che consente di
> simulare la logica di una chain senza gli smart contract.

Come esempio, immaginate di inviare un graffito (remark) del genere:

```
ALICE::Init::Apple::5
```

L’account di ALICE può emettere una transazione SEND in questo modo:

```
ALICE::Send::Apple::3::Bob
```

Lo standard RMRK assicura che Alice abbia più di 3 mele, che sia lei a inviare la transazione e che il destinatario sia valido ed esistente.

Se Alice prova:

```
ALICE::Send::Apple::10::Alice
```

…essa sarebbe essenzialmente in grado di stampare le mele. Non vogliamo ciò, quindi il sistema deve verificare che l'importo inviato sia inferiore o uguale al numero in inventario. Allo stesso modo, se Bob cercasse di emettere una transazione di Alice - gli strumenti fermerebbero la transazione e ignorerebbero una tale remark, perché Bob non può interagire con l'inventario di Alice.

Queste regole sono definite nella [specifica RMRK](https://github.com/rmrk-team/rmrk-spec), ma umanizzate, chiarite, codificate ed esemplificate in questa documentazione.

Per molti aspetti, RMRK 1.0 è come qualsiasi standard NFT si potrebbe essere abituati su Ethereum - un modo semplice per memorizzare i riferimenti multimediali. Abbiamo aggiunto a ciò il sistema delle [emotes](/lego3-emote.md).

RMRK 1.0 è diventato obsoleto da quando RMRK 2 è uscito. I vecchi NFTs RMRK 1 possono essere visti nella versione [precedente di Singular](https://singular.rmrk.app).