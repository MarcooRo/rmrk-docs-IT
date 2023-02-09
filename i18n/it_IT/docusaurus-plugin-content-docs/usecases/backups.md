---
title: "Backup dei metadati NFT"
---

Nei sistemi NFT di ultima generazione, è molto comune scegliere durante il minting l'impostazione predefinita proposta dall'interfaccia utente per quanto riguarda la memorizzazione dei metadati. Su Opensea, ad esempio, l'impostazione predefinita è il loro server centralizzato fino a quando non si fa clic su "Congelare i metadati" ("Freeze metadata") sui propri NFT e li si carica su IPFS.

Pochi progetti lo fanno e molti proprietari di NFT si trovano oggi ad affrontare il rischio molto concreto di perdere i propri NFT se il server di Opensea si guasta o se un'altra soluzione centralizzata su cui risiedono i metadati viene in qualche modo compromessa.

Esistono soluzioni di backup dei metadati come Aleph, ma tutte queste soluzioni di backup dipendono ancora una volta da un team separato che gestisce un servizio separato e fanno crescere tutta questa catena di SPOF (single point of failure, singolo punto di fallimento).

Le NFT oggi sono estremamente fragili. Questo non è molto web3.

Esiste un modo migliore: utilizzare la tecnologia Multi-Resource NFT di RMRK per eseguire il backup dei metadati dell'NFT sull'NFT stesso.

![](https://user-images.githubusercontent.com/1027871/199571248-8333a077-df49-4fd4-8c89-1b7b08cc255c.png)

Una risorsa è un "output". In una canzone, questo sarà un file audio. In un eBook, questo sarà un PDF. E in una scimmia JPEG, questo sarà il JPEG della scimmia.

Supponendo di avere un NFT di una scimmia JPEG e che questo NFT punti a https://rugpull.com/monkeyjpeg.com. Se rugpull.com diventa offline, lo sarà anche la nostra foto della scimmia!

Ma questa è solo una risorsa in un sistema avanzato. Possiamo anche proporre nuove risorse a questa NFT:

- una risorsa che punta a `ar://hashofmonkeyjpeg`
- una risorsa che punta a `ipfs://ipfs/QmHashofmonkeyjpeg`
- una risorsa che punta a `sia://hashofmonkeyjpeg`

Una volta aggiunto all'NFT, abbiamo ora quattro serie identiche di metadati collegati su 4 diversi protocolli: https, ipfs, Arweave e Sia.

### Vantaggi:

1. Le possibilità che tutti i sistemi vadano in tilt nello stesso momento sono astronomiche e possiamo considerare la nostra NFT sempre al sicuro, in modo completamente decentralizzato.
2. Non ci sono singoli punti di guasto che possano rendere inaccessibile l'NFT.
3. Uno degli host delle risorse che si blocca in qualche modo (ad esempio, rugpull.com che sostituisce il JPEG della scimmia con quello di un gattino) lascia comunque 3 host non mutati, dimostrando ciò che era l'originale, anche se l'host originale diventa disonesto.

### Aspetti negativi::

1. Poiché solo l'emittente della raccolta può emettere nuove risorse agli NFT, il software dei gatekeeper dovrebbe essere un hot wallet, oppure collegato a un server che emette queste chiamate e che a sua volta ospita il wallet dell'emittente. Stiamo lavorando a un sistema che consenta a un emittente di impostare ulteriori proponenti di risorse, risolvendo questo problema.
2. La modifica dei metadati, per qualsiasi motivo, richiederebbe la sostituzione di tutte e quattro le risorse anziché di una sola, con un numero maggiore di transazioni necessarie per un'ampia collezione.