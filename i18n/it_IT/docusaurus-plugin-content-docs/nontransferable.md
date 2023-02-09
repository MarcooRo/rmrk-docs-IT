---
title: "Soulbound 2.0 NFTs Non-trasferibili"
---

Gli NFT non trasferibili, sono stati resi popolari da Vitalik Buterin con il nome di [soulbound](https://vitalik.ca/general/2022/01/26/soulbound.html), sono NFT utili per il monitoraggio della reputazione: una volta aggiunti agli indirizzi non sono trasferibili né vendibili, sono assegnano in modo permanente, possono però subire qualche modifica.

In RMRK questo è un concetto particolarmente interessante, poiché le NFT possono essere non trasferibili all'interno di un'altra NFT trasferibile. Trasferibile, soprannominato **Soulbound 2.0**.

Così, una NFT come una [Kanaria](https://kanaria.rmrk.app) può avere al suo interno gemme non trasferibili che le conferiscono benefici e bonus di lunga durata, ma non possono essere rimosse, insieme ad alcune NFT commerciabili.

![Kanaria example image](/img/post_imgs/ntnft.png)

Questo può essere ulteriormente utilizzato quando si ha a che fare con gli avatar e i [sistemi di abilità del gioco](/usecases/charprog). Un'abilità può essere appresa e "installata" nel cervello di un avatar, ma non può essere rimossa.

Oltre a un semplice flag on/off, l'implementazione di Kusama (vedi sotto) supporta la trasferibilità temporanea e la non trasferibilità temporanea, che consente a un minter di specificare che una NFT deve essere trasferita solo dopo un certo numero di blocchi o non prima di un certo numero di blocchi.

## Esempio

Come accennato nel concetto di [equipaggiamenti](/lego25-equippable), un ottimo esempio di utilizzo delle NFT non trasferibili è quello di utilizzarle come indicatori di reputazione, ma non sgli account, come documentato nel già citato post sui [soulbound](https://vitalik.ca/general/2022/01/26/soulbound.html), bensì all'interno di altri NFT trasferibili o non trasferibili.

- [Zeitgeist](https://zeitgeist.pm), è una chain di previsione di mercato, assegnerà a ogni utente della chain un avatar e darà loro gettoni di reputazione (non trasferibili) da equipaggiare, in base alle loro prestazioni sulla predizione dei mercati.

- [Citizend](https://www.citizend.xyz/) è una piattaforma pubblica di lancio di progetti con sistema di DAO senza lotteria, avrà token (non trasferibili) di reputazione basato sulle prestazioni per gli avatar degli utenti che, in base alla reputazione raggiunta, avranno in seguito migliori opportunità e voti più importanti nella governance.

- [Governance Rewards in Kusama](https://www.youtube.com/watch?v=lpT7hubqzFQ) premia le persone con trofei per ogni referendum on-chain in cui votano, che possono equipaggiare con il loro scaffale "reputazionale". Questo non solo indica visivamente la vostra attività sulla catena nelle DAO più grandi del mondo (Kusama e Polkadot), ma serve anche molto bene per altre applicazioni, ad esempio se leggete quelle informazioni attraverso la chain da un hub Defi come Acala, e forse la vostra reputazione è ora una garanzia sufficiente per ottenere un prestito sotto collateralizzato.

- [Phala World](https://phala.world) ttiene traccia dell'attività web3 di un utente e la trasforma in gettoni di reputazione non trasferibili all'interno degli avatar di gioco di Phala World, che possono salire di livello solo in questo modo. Quindi, invece di salire di livello giocando, si sale di livello essendo un buon cittadino del web3, che si trasforma in abilità ed esperienza non trasferibili per il proprio avatar.

- [I semi di Kabocha](https://rmrk.link/kabocha) sono fondamentali per la governance di Kabocha, in quanto rappresentano l'evoluzione dei ruoli, dei diritti e della reputazione nella rete e nei futuri Publiks. I semi sono beni unici e non trasferibili che crescono in base ai continui contributi al progetto. Essi definiranno il modo in cui si costruisce l'identità, il potere di voto e l'accesso ai futuri domini Publik.

- [InvArch](https://rmrk.link/invarch) è una blockchain che utilizza gli NFT RMRK per la gestione della proprietà intellettuale, la licenza è intrinsecamente un NFT non trasferibile come parte di un altro NFT, insieme ad altre informazioni relative all'idea. Quindi gli NFT non trasferibili fungono da token di "reputazione" per le idee anche in questo caso.

- [Skybreach](https://skybreach.app) utilizza gli NFT non trasferibili come cervelli NFT per gli avatar NFT, e le abilità NFT all'interno di questi cervelli che possono essere equipaggiate negli slot, così come le personalità NFT, le ricette di crafting NFT, gli algoritmi di pathfinding NFT e altro ancora. Ad esempio, un personaggio di livello 2 potrebbe avere 2 slot di abilità nel suo cervello NFT, ma 5 abilità. Quindi ora deve scegliere quali abilità rendere attive, equipaggiandone 2 su 5. Il personaggio può salire di livello per ottenere una nuova risorsa in questo cervello NFT che ha 3 slot, quindi al livello 3 può equipaggiare 3 delle 5 abilità, e così via. È così che funzionano i [Skybreach Chunkies](https://rmrk.gitbook.io/kanaria-skybreach/fundamentals/skybreach-avatars/chunkies) e viene approfondito in [Character Progression systems](/usecases/charprog).

Tutti i progetti sopra citati fanno anche parte [dell'economia globale](/econ) degli oggetti resa possibile solo da RMRK, in modo da avere accessori intercambiabili e compatibili con le collezioni incrociate, e quindi ottenere nuove utilità nel tempo, sempre.

## Implementazioni

Le implementazioni riportate di seguito portano direttamente al codice. Per esempi su come utilizzarle per il mint dei propri NFT, consultare la sezione della barra laterale relativa a ciascun sottotipo d'implementazione.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#nft-standard)
- [EVM](https://evm.rmrk.app/evm-contracts-documentation/rmrk/extension/soulbound)
- [Pallets](https://github.com/rmrk-team/rmrk-substrate/blob/main/traits/src/nft.rs)