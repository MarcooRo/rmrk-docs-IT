---
title: "Ticketing"
---

Tradizionalmente, nei sistemi di biglietteria basati su blockchain, un utente dovrebbe acquistare un biglietto NFT e poi, sul luogo dell'evento, fare una delle seguenti operazioni:

1. mostrare l'NFT e firmare un messaggio
2. bruciare l'NFT
3. mostrare l'NFT

1 e 2 richiedono che l'utente abbia un portafoglio, o che ne ceda il controllo, cioè che abbia un portafoglio di custodia nel suo conto in un sistema di biglietteria centralizzato. Questo non è né molto web3, né molto sicuro.

3 è molto insicuro in quanto chiunque può scaricare l'NFT e mostrarlo al posto del vero proprietario. In questo modo è possibile far entrare un numero infinito di persone, oppure è necessario un monitoraggio centralizzato da parte del gestore  per assicurarsi che un singolo codice QR non sia stato inserito due volte. Anche in questo caso, non c'è garanzia che sia entrata la persona giusta.

C'è un modo migliore: [RMRK's Multi-Asset NFTs](/lego2-multi-resource).

## Utilizzo di NFT multi-risorsa per il ticketing

Again, several approaches are possible. Here we document the recommended one.

Anche in questo caso, sono possibili diversi approcci. Qui documentiamo quello consigliato.

Un utente acquista un biglietto NFT. Il biglietto, per il solo fatto di essere un RMRK MR NFT, è compatibile con ERC721 e quindi con tutti i marketplace, ma è anche arricchito di ulteriori funzionalità. Durante l'acquisto, l'utente fornisce una stringa personalizzata, come una parola chiave speciale, che viene sottoposta a hash e aggiunta come attributo del biglietto. Supponiamo che questa stringa speciale sia `banana` e che il suo hash Sha1 sia `250e77f12a5ab6972a0895d290c4792f0a326ea8`

La risorsa nulla (null-resource) è impostata come il biglietto stesso. La risorsa null è la risorsa iniziale, quella predefinita quando non sono disponibili altre risorse. Le risorse nulle sono tipicamente utilizzate per le NFT rivelabili e sono molto utili in questo scenario.

L'utente si presenta alla porta dell'evento e mostra il codice QR NFT.

Il custode esegue la scansione del codice QR e chiede all'utente la parola chiave. L'utente dice "ananas", e il software del custode la passa automaticamente attraverso lo sha1 per ottenere `ff9907a80070300578eb65a2137670009e8c17cf`. Ops! Non sembri essere il vero proprietario! prossimo!

Il truffatore viene espulso dalla coda continua. Poche persone dopo, si presenta un'altra persona con lo stesso QR dell'NFT e la parola corretta: `banana`. Il software lo esegue di nuovo e questa volta corrisponde.

Poiché qualsiasi risorsa ha la precedenza su null, la risorsa originale del biglietto verrebbe sovrascritta da questa nuova risorsa, il ticket stub, dimostrando la presenza di questo utente e contrassegnando l'NFT come "usato", il tutto in modo completamente decentralizzato - tutto sul protocollo.

L'app del custode crea ora una nuova risorsa, un'immagine del "biglietto" con una grafica accattivante, e la aggiunge all'NFT appena caricato tramite il codice QR.

### Vantaggi

1. Gli utenti si ritrovano con un POA dall'aspetto davvero gradevole
2. Non c'è bisogno di un database centralizzato dei biglietti usati
3. Non c'è bisogno che l'utente si porti dietro un portafoglio mobile

### Aspetti negativi

1. Poiché solo l'emittente della collezione può emettere nuove risorse per gli NFT, il software del custode dovrebbe essere un hot wallet, oppure collegato a un server che emette queste chiamate e che a sua volta ospita il wallet dell'emittente. Stiamo lavorando a un sistema che consenta a un emittente d'impostare ulteriori creatori di risorse, risolvendo questo problema.
2. Se Internet non funziona, non è possibile "strappare" in modo verificabile i biglietti delle persone e bisogna fidarsi che siano i veri proprietari. Probabilmente si perdono anche l'aspetto "POA" (prova di presenza), poiché non riceveranno mai la risorsa extra.