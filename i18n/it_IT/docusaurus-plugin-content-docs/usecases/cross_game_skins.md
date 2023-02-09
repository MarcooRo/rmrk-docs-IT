---
title: "Cross-game skins"
---

> Un caso d'uso di [Mixed Media NFTs](/usecases/mixedmedia).

Quando si parla di oggetti cosmetici in gioco, una lamentela comune degli sviluppatori e dei giocatori riguardo all'implementazione degli NFT nei videogiochi è l'impossibilità di rendere lo stesso file compatibile tra diversi motori. Ad esempio, un file skin mappato su un modello CSGO non funziona sicuramente con Fortnite.

Questo è vero se si considera la tecnologia attuale, ma gli [NFT multirisorsa RMRK](/lego2-multi-resource) sono in una posizione unica per risolvere completamente questo problema.

Prendiamo ad esempio una skin di Fortnite e una skin di Borderlands di Fabio Sparklemane una testa di cavallo casuale (e facciamo finta che siano la stessa cosa).

![](/img/post_imgs/merge.png)

La differenza non è solo nel rigging della skin per il modello 3D, ma è chiaramente anche visiva: la skin di Borderlands ha bisogno di uno stile visivo cel-shaded per ottenere le linee del fumetto e ha colori piatti e pastello senza riflessi. La skin di Fortnite è più plastica e lucida, con sfumature realistiche e in stile cartoon.

Naturalmente, non sono compatibili.

Quindi, come possiamo trasformarlo in un'unica NFT che dia diritto ai creatori di utilizzare entrambe le piattaforme? Come possiamo rendere questa risorsa compatibile con entrambi i giochi?

Aggiungiamo i due diversi file di skin come due risorse diverse sullo stesso NFT.

![](/img/post_imgs/mures_skin.jpg)

Ma quale viene mostrato sui vari marketplace NFT?

Qui entra in gioco la priorità. Ogni proprietario di un NFT con più risorse può ordinare le risorse per priorità. Il marketplace dovrebbe quindi, se segue lo standard, leggerle una per una e mostrare la prima supportata con la priorità più alta.

Ma cosa succede se nessuna delle due risorse va bene per un marketplace? E se fossero entrambe delle t-poses 3D o, peggio ancora, delle texture con effetto pelle?

![](/img/post_imgs/stretch.jpeg)

In questo caso, possiamo aggiungere una terza risorsa, una versione stilizzata pensata appositamente per essere visualizzata su vari marketplace e cataloghi. Una sorta di "immagine di copertina" per la skin.

![](/img/post_imgs/mures3.jpg)

Ora abbiamo una risorsa (output) destinata all'uso in un gioco, una destinata all'uso in un altro e una destinata alla visualizzazione principale nelle immagini OG dei social media, nei marketplace, nei portafogli, ecc. I giochi identificano il file di cui hanno bisogno passando in rassegna le risorse e caricando quelle compatibili in base ai metadati, ma poiché l'immagine di "copertina" ha priorità 1, verrà sempre visualizzata per prima nelle interfacce utente.

## FAQ

### E per quanto riguarda la scalabilità?

Come possono gli editori AAA aspettarsi di utilizzare la chain Ethereum, con costi imprevedibili, o qualsiasi altra blockchain pubblica, per un'infrastruttura NFT utilizzata regolarmente?

La risposta è che non devono farlo.

Quando si tratta di un esempio come quello sopra riportato, una volta importato in un gioco, è lì che la skin viene utilizzata. Le operazioni di lettura sulla blockchain sono gratuite e non comportano costi di gas, il che significa che un gioco può verificare se una skin si trova [all'interno](/lego1-nested) di un preciso NFT per dare al giocatore l'accesso a ciò che gli serve in qualsiasi momento e gratuitamente.

L'unico momento in cui un giocatore ha bisogno d'interagire con la blockchain è quando sposta le attività da un gioco a un altro:

- tali operazioni non sono enormi sprechi di gas, quindi non incidono sul costo della gas nei periodi di picco
- tali operazioni possono essere gestite da una L2 specificamente dedicata agli NFT, come Unique Network, Ajuna o ImmutableX
- una volta spostato in un'altra partita, l'NFT non deve essere più toccato finché non è il momento di spostarlo

I problemi di scalabilità non sono un problema.

### Perché non farlo nel vecchio modo centralizzato? Cosa ottengono in cambio?

Gli editori AAA non accetteranno mai di risolvere questo problema utilizzando la tecnologia della vecchia scuola perché non riescono a mettersi d'accordo sulle API e sull'approccio da adottare. Ognuno pensa che il proprio standard sia il migliore e quindi si rifiuta di interoperare.

Inoltre, il ROI è discutibile se c'è qualcuno al timone (e nelle tecnologie centralizzate c'è bisogno di qualcuno al timone), perché la scomparsa di questa entità può mandare tutto all'aria. Dopotutto, un'entità deve gestire i server e mantenere le infrastrutture al sicuro.

Un'opzione molto migliore è l'utilizzo di una tecnologia generica e imparziale (blockchain e uno standard neutrale), per consentire a ogni entità di continuare a utilizzare il proprio standard "migliore", perché le NFT multirisorsa consentono di avere più standard in un unico oggetto.

Per quanto riguarda i vantaggi per loro: una massiva  economia globale con potere ai creatori. Creando risorse compatibili tra i vari giochi, si crea familiarità con l'altro marchio in tutti gli altri marchi futuri e passati, si ereditano le basi dei giocatori, si prevengono gli attacchi vampire-attacks tra i giochi e gli editori e, cosa forse più importante, si permette [un'economia globale degli oggetti](/econ) insondabilmente redditizia.

### Che dire dell'usabilità ed esperienza utente?

Una preoccupazione comune con gli NFT nei giochi tradizionali è l'aspetto dell'usabilità: come convincere la prossima generazione a usare i wallet, firmare le transazioni e praticare una buona prassi opsec. È un problema difficile, senza dubbio. Ma:

1. Se non si inizia a coinvolgere il prossimo miliardo di utenti, non si riuscirà a coinvolgere nessuno.
2. Una volta che un NFT viene integrato in un gioco, può essere utilizzato come al solito - non è necessario alcun TX, tranne che per i prelievi e i depositi, e questo piccolo attrito sarà assente per la maggior parte dei giocatori e accettabile per gli altri, soprattutto se ben realizzato dagli editori AAA (portafogli integrati negli account dei giocatori, ecc.).
3. Noi di RMRK stiamo lavorando a questo problema nell'ambito di [CypherMOD](https://cyphermod.com) con chiavi di sessione ACL derivate dal master. Restate sintonizzati.