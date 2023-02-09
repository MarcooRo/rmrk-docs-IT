---
title: "FAQ: Frequently Asked Questions"
---

Le FAQ non tecniche sono ora ospitate nella knowledgebase di [auto-aiuto](https://coda.io/@rmrk/faq).

## Come funziona l'hosting IPFS?

IPFS, o Interplanetary File System, utilizza il "content hashing". Ciò significa che un contenuto viene sottoposto a un algoritmo di hashing, una funzione matematica unidirezionale che produce sempre lo stesso risultato per lo stesso input. Cambiando anche una sola lettera del contenuto originale si ottiene un hash completamente diverso.

Questi hash vengono poi trasformati in indirizzi di contenuto come: 
`ipfs://ipfs/QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR` which a browser o [IPFS gateway](https://docs.ipfs.io/concepts/ipfs-gateway/) a cui un browser o un gateway IPFS può accedere.

Molte macchine in tutto il mondo eseguono il protocollo IPFS e pubblicizzano gli hash dei contenuti che ospitano, in modo che se è necessario trovare un determinato contenuto, è possibile stabilire un percorso per raggiungerlo.

Queste macchine, quando accedono a questo contenuto, lo scaricano e lo ripubblicano, mantenendolo nella loro memoria, permettendovi di consultarlo e pubblicizzando ad altri che ne hanno una copia, propagandolo in tutto il web. Tuttavia, a meno che il contenuto non venga pinnato, esso scomparirà dopo un certo periodo di tempo in cui non vi si accede, o una volta che la macchina si sarà riavviata attraverso un processo noto come garbage collection.

Il contenuto appuntato non viene mai sottoposto a garbage collection.

Esistono diversi servizi che scaricano e appuntano i contenuti IPFS per voi, a pagamento. Pinata e Crust sono molto popolari. In alternativa, è possibile gestire un proprio nodo e appuntare il contenuto lì, ma il nodo deve essere sempre online e accessibile via Internet per funzionare, cosa che la maggior parte delle persone non può fare a casa.

Quando si ospitano contenuti NFT su IPFS, ci si aspetta che si paghi per il pinning dei propri contenuti con uno di questi servizi, o che ci si assicuri altrimenti che i contenuti siano persistenti e non scompaiano.

Quando si effettua il mining tramite [Singular.app](https://singular.app), RMRK covers the Crust pinning fee., RMRK copre il costo del pinning.