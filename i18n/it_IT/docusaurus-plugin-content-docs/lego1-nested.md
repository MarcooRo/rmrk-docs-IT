---
title: "NFT Nidificati"
---

Il concetto di NFT nidificati si riferisce al fatto che gli NFT siano in grado di possedere altri NFT.

In sostanza, il principio è semplice: il proprietario di un NFT non deve essere un account di proprietà esterna o uno smart contract, può anche essere un specifico NFT.

Il processo di invio di un NFT a un altro è funzionalmente identico all'invio a un altro utente. Il processo di invio di un NFT da un altro NFT comporta l'emissione di una transazione dall'indirizzo che possiede il genitore.

Alcuni NFT possono essere configurati con condizioni speciali per le relazioni padre-figlio. Per esempio:

- alcuni genitori NFT permetteranno al proprietario di un figlio NFT di ritirare quel figlio in qualsiasi momento (es. terra virtuale contenente un avatar dove l’avatar può essere ritirato in qualsiasi momento)
- ad alcuni genitori NFT sarà proibito eseguire determinate interazioni su un figlio NDR (ad esempio il proprietario di una casa in cui l'avatar di qualcun altro è un ospite non dovrebbe essere in grado di BRUCIARE l'ospite... probabilmente)
- alcuni NFT genitore avranno condizioni di prelievo speciali, come un NFT musicale che accetta le radici musicali. Le radici possono essere rimosse dai loro proprietari fino a quando un certo numero di co-compositori non vota abbastanza una radice, o fino a quando il proprietario della traccia musicale madre non la sigilla e la "pubblica"

Il concetto di NFT annidato viene ulteriormente ampliato attraverso l'idea di [equipaggiabilità](/lego25-equippable).

## Implementazioni

Le implementazioni riportate di seguito portano direttamente al codice. Per esempi su come utilizzarle per coniare le proprie NFT, consultare la sezione della barra laterale relativa a ciascun sottotipo di implementazione.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/entities/nft.md#children)
- [EVM: EIP 6059](https://eips.ethereum.org/EIPS/eip-6059) - more documentation [here](https://evm.rmrk.app/rmrk-legos-examples/nestable).
- [Pallets](https://github.com/rmrk-team/rmrk-substrate/blob/main/pallets/rmrk-core/src/lib.rs)