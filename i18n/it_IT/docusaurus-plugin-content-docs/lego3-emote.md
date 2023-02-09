---
title: "Emote On-chain"
---

RMRK supporta la possibilità di "reagire" a qualsiasi NFT.

![](../static/img/post_imgs/emote.png)

Sotto il cofano, gli unicode sono applicati agli ID NFT su un record separato.

Le reazioni sono come degli interruttori, il che significa che l'invio di 👍 quando si è già inviato un 👍 lo rimuoverà.

Attualmente, tutte le reaction si applicano allo stesso modo e sono renderizzate da tutte le implementazioni, ma in futuro è prevista l'inserimento di condizioni di accettazione alle raccolte, in modo che si possano limitare le emote da parte di persone che non hanno un certo NFT, mettere un limite alla quantità di emote per soddisfare una lista FCFS, limitare i tipi di emotes che un NFT può ricevere e altro ancora.

Durante un trasferimento, tutte le reazioni viaggiano insieme all’NFT. Le reazioni non sono NFT veri e propri, ma solo un'aggiunta a un record di dati già esistente: l'NFT.

Le emotes sono una parte fondamentale del [rendering condizionale](/lego4-conditional-rendering).

## Implementazioni

Le seguenti implementazioni portano direttamente al codice. Per degli esempi su come utilizzarle per creare i propri NFT, consultare la sezione della barra laterale relativa a ciascun sottotipo di implementazione.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/emote.md)
- Implementato in produzione su [Singular](https://singular.app)
- EVM (research phase)
- Pallets (research phase)