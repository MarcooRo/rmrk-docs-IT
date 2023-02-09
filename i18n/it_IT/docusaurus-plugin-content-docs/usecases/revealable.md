---
title: "NFT rivelabili"
---

Nei sistemi NFT di ultima generazione, la vendita di una collezione di NFT apparentemente identici e la loro successiva "schiusa" o rivelazione in NFT unici richiede metadati centralizzati in cui il tokenURI punta a un server centralizzato che può essere scambiato dopo il lancio, oppure il contratto stesso ha un campo di metadati mutabile.

Questo non è molto web3.

RMRK's [Multi-Asset NFTs](/lego2-multi-resource) sono in una posizione unica per risolvere questo problema in modo completamente on-chain, senza che l'emittente possa fare ricorso alle risorse.

Un NFT può avere zero risorse, nel qual caso i metadati - compreso l'URI del file multimediale - sono collocati nel livello principale dell'NFT, proprio come in standard come ERC721.

In questo caso, tale RMRK NFT è pienamente compatibile con ERC721 ed è considerato rivelabile.

Se il **creatore** della collezione aggiunge una nuova risorsa a un NFT della sua collezione, questa nuova risorsa, se [accettata](/lego2-multi-resource#proposing-accepting-replacing), sostituirà i metadati di livello base in tutte le interfacce, i rendering, i portafogli, ecc.

> ⚠️ Una risorsa ha **sempre** la priorità sui metadati di livello base.

Ci si potrebbe chiedere se questo renda possibile continuare a fare un rug dal lato del proprietario - semplicemente continuando a sostituire le risorse, e alla fine sostituirle con qualcosa di non adatto?

No, nei sistemi NFT multi-risorsa, ogni mutazione, come l'aggiunta o la sostituzione di una risorsa, è un'operazione a due parti, in cui l'emittente propone la nuova risorsa e il proprietario dell'NFT accetta la nuova risorsa.

![](../../static/img/post_imgs/mr_03.png)

Ora, invece di premere il pulsante "Aggiorna metadati" di Opensea, l'utente deve solo fare clic su "Accetta nuova risorsa" dopo averla ispezionata, e tutto avviene a catena.

Se il proprietario desidera mantenere la vecchia risorsa o addirittura mantenere la NFT non rivelata, può semplicemente scegliere di non accettare la nuova risorsa (anche se va notato che la risorsa rivelata è presente nella catena nella coda in attesa - solo che non viene applicata - quindi è facile scoprire come è stata rivelata).

### Vantaggi

1. I metadati decentralizzati assicurano l'impossibilità di future manipolazioni da parte dell'emittente.
2. La "schiusa" non richiede di fare un burn o un airdrop

### Aspetti negativi

1. Poiché solo l'emittente della raccolta può emettere nuove risorse per gli NFT, il software dei custodi dovrebbe essere un hot wallet o collegato a un server che emette queste chiamate e che a sua volta ospita il portafoglio del creatore della collezione. Stiamo lavorando a un sistema che consenta a un creatore di impostare ulteriori proponenti di risorse, risolvendo questo problema.