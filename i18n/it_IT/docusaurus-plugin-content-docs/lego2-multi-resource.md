---
title: "Multi-asset (Multi-risorsa) NFTs"
---

An _asset_ (previously known as _resource_) is a type of output for an NFT: usually a media file.

Una risorsa può essere un'immagine, un filmato, un file PDF o anche una CATALOG (un'entità speciale - vedi
[qui](/lego25-equippable)). Un NFT multi-risorsa è un tipo di NFT che può produrre una risorsa diversa in base a specifiche informazioni contestuali, ad es. caricare un PDF se caricato in un lettore PDF, anziché caricare un'immagine in una galleria virtuale.

![](../static/img/post_imgs/mr_01.png)

Una risorsa NON è un NFT o un'entità autonoma a cui puoi fare riferimento. Fa parte di un NFT, uno dei numerosi output che può avere.

Ogni RMRK NFT ha zero o più risorse. Quando ha zero risorse, i metadati sono "livello radice". Qualsiasi nuova risorsa aggiunta a questo NFT sovrascriverà i metadati radice, rendendo questo NFT [rivelabile](/usecases/revealable).

## Esempi

È meglio spiegare con alcuni esempi.

- [NFTs rivelabili](/usecases/revealable): minta NFT identici e rivelali come unici in un secondo momento, il tutto direttamente on-chain e senza centralizzare i metadati.
- [Cross-game skin files](/usecases/cross_game_skins): supporto di diversi motori di gioco per cosmetici cross-game nello stesso NFT
- [Backing up NFT metadata](/usecases/backups): ridondanza e sicurezza dei metadati senza attori centralizzati
- [Ticketing systems](/usecases/ticketing): ticket e stub di ticket per verificare presenza e accesso
- [Mixed Media NFTs](/usecases/mixedmedia): eBook che sono audio e PDF allo stesso tempo, brani che sono video musicali e file audio allo stesso tempo, dipinti con video di creazione e altro ancora.

### Equipaggiabili e compatibilità futura 

Quando si utilizzano gli NFT [Nidificati](/lego1-nested) ed [Equipaggiabili](/lego25-equippable) un NFT multi-risorsa può essere reso compatibile con le raccolte che usciranno in futuro, aggiungendo utilità a un progetto NFT che altrimenti potrebbe morire per mancanza di interesse della community dopo il lancio.

Ad esempio, un piccone compatibile con un
[Chunky](https://rmrk.gitbook.io/kanaria-skybreach/fundamentals/skybreach-avatars/chunkies) in
[Skybreach](https://skybreach.app) avrebbe una risorsa disegnata in pixel compatibile con il motore di gioco Skybreach.

![](../static/img/post_imgs/mr_02.png)

Se in seguito dovesse uscire un nuovo gioco 3D, questo stesso NFT può essere reso compatibile facilmente con esso. L'emittente del NFT aggiungerebbe una nuova risorsa 3D, compatibile con il motore del nuovo gioco. Ogni proprietario che accetta questa nuova risorsa nel proprio NFT avrebbe automaticamente un NFT più prezioso nelle proprie mani: non sono necessari airdrop non correlati, nessuno spam di token nei portafogli dei proprietari. Solo un NFT che può essere e fare di più.

Questo non solo aggiunge più vita ai progetti NFT esistenti, ma introduce anche il concetto di rarità dinamica in cui più collezioni sono compatibili con un NFT, maggiore è la domanda e quindi il valore che questo ha.

## Proporre, Accettare, Sostituire

L'aggiunta di una nuova risorsa a un NFT multi-risorsa richiede il consenso sia dell'emittente che del proprietario della NFT.

![](../static/img/post_imgs/mr_03.png)

Nello specifico, solo l'emittente della raccolta può proporre una nuova risorsa, e solo il proprietario può accettarla. Se l'emittente e il proprietario coincidono, non è necessario alcun passaggio di accettazione, l’accettazione è automatica.

Un proprietario di un NFT non può aggiungere nuove risorse al proprio NFT. Ciò impedisce che il valore fittizio venga aggiunto a un NFT.

Un emittente non può aggiungere nuove risorse a un NFT senza l'approvazione del proprietario. Questa approvazione può essere effettuata in anticipo o può essere effettuata su richiesta quando viene proposta una nuova risorsa.

## Implementazioni

Le implementazioni seguenti portano direttamente al codice. Per esempi su come utilizzarli per mintare i tuoi NFT, fai riferimento alla sezione della barra laterale per ciascun sottotipo di implementazione.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#resources-and-resource)
- [EVM: EIP 5773](https://eips.ethereum.org/EIPS/eip-5773)
  - In production examples:
    - [NCVerse](https://neoncrisis.io/my-collection/ncverse)
- [Pallets](https://github.com/rmrk-team/rmrk-substrate/blob/main/pallets/rmrk-core/src/lib.rs)
