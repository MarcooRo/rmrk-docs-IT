---
title: EVM
---

In questa guida vedremo come coniare programmaticamente più NFT non trasferibili direttamente in conti diversi. È possibile modificare i valori di questa guida per adattarli alle proprie esigenze, come ad esempio il minting diretto di altri NFT o il minting di NFT trasferibili, ecc.

### Test Environment

È possibile fare un test localmente su una chain di esempio, ma al momento Singular non ha la possibilità di connettersi a chain in esecuzione localmente. Una volta verificato che lo script funziona bene, si può utilizzare il seguente ambiente di test:

- UI: https://singular-rmrk2-dev.vercel.app/
- Node: ws://staging.node.rmrk.app

L'interfaccia utente presenta un pulsante Faucet per comodità, che può essere premuto per ottenere l'invio di 1 KSM al proprio account di prova. 

IMMAGINA

Tenete presente che anche altri utilizzano questa piattaforma e 10 KSM dovrebbero essere più che sufficienti anche per le collezioni più grandi (10k+).

## Preparazione dei materiali

In questo esempio, faremo il mintingdi NFT onorari per le persone che hanno partecipato a un sondaggio della Web3 Foundation.

Le parole "Helper", "Participant" e "Author" nell'elenco indicano il tipo di NFT che una persona sta ricevendo. Noi li definiremo nel nostro codice, ma voi potete usare i media che preferite.

Per la menta, sono necessari due CSV:

- un elenco di destinatari (https://gist.github.com/Swader/e7ba877475a9034f9609925a17bc679e)
- un elenco di NFT e delle loro proprietà ()

### Media hosting

Si noti che la directory di NFT in questo caso ha nomi di file per i media. Questi verranno automaticamente trasformati in hash IPFS e i metadati risultanti, insieme a tutti i file da caricare, verranno copiati in una directory "pinthis". 

IMMAGINE

Il contenuto di questa cartella deve essere caricato su un servizio di pinning come Crust o Pinata, altrimenti non sarà disponibile. Per ulteriori informazioni sul funzionamento dell'hosting IPFS, consultare [faq](/faq).

## Come iniziare

RMRK dispone di un semplice toolkit Typescript per iniziare a utilizzare queste zecche. La parte più difficile del mint è l'installazione dei prerequisiti per l'esecuzione del toolkit, quindi se all'inizio vi sembra complesso, non disperate: diventa più facile.

Per prima cosa, cloniamo il toolkit.

```

```