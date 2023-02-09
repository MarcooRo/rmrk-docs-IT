---
title: Sincronizzazione
---

Poiché gli NFT RMRK sono attualmente registrati insieme ai blocchi, ma non cambiano lo stato della chain, non sono facili da recuperare.

Se abbiamo remarks come:

- Alice ha 0 mele.
- Alice compra 5 mele.
- Alice manda a Bob 3 mele.
- Alice manda a Charlie 3 mele.

Uno dei remark alla fine non è valido perché Alice non ha 6 mele.

Uno dei remark alla fine non è valido perché Alice non ha 6 mele.

Se questi remark non sono esaminati in ordine e non sono costituiti in un unico stato **consolidato**, non possiamo essere sicuri che le operazioni siano legittime. Perché i remark possano accadere su diversi blocchi (anche a distanza di mesi), recuperarli e poi consolidarli richiede un sacco di tempo se non si dispone di un nodo già sincronizzato, e di un pre-consolidato dump che si può semplicemente aggiungere.
Pertanto, ci sono diversi modi per aggiornarsi con lo stato RMRK.


## Sincronizzazione da zero

Mentre è molto utile avere un nodo Kusama in esecuzione locale in ogni momento per vari esperimenti di sviluppo, questo processo non è raccomandato a meno che non si abbia molto tempo e spazio su disco.

Il processo completo è:

- eseguire un fetcher su un nodo Kusama, per ottenere tutti i remarks
- eseguire un consolidatore sul fetched output, per ottenere il set consolidato di remarks, e quindi il "database NFT" in un semplice formato di file JSON
- eseguire tutte le operazioni su questo set finale, come analisi, controlli dei proprietari, e altro ancora.

Andiamo passo per passo.

Scaricate una release di Polkadot compilata dalla [pagina delle release](https://github.com/paritytech/polkadot/releases) (o compilatelo da zero se vi sentite avventurosi - le istruzioni sono in README), ed eseguitelo con:

```bash
chmod +x polkadot && mv polkadot kusama
./kusama --pruning archive --db rocksdb
```

Se lo stai eseguendo da qualche parte in un tuo server e vuoi connetterti ad esso dall'esterno, aggiungi anche `--rpc-Cors` per consentire ad altre fonti di connettersi a questo server.

Il processo di sincronizzazione richiede alcuni giorni.
Una volta sincronizzato il nodo (l'output del terminale ve lo farà sapere), dovete recuperare i remarks usando [rmrk-tools](https://github.com/rmrk-team/rmrk-tools/).

Install RMRK tools. You need a modern version of NodeJS and Yarn. We recommend using
[NVM](https://github.com/nvm-sh/nvm) and setting it to 14.16 or newer.

Installare RMRK tools. Hai bisogno di una versione moderna di NodeJS e Yarn. Si consiglia di utilizzare [NVM](https://github.com/nvm-sh/nvm) versione 14.16 o più recente.

```bash
yarn add rmrk-tools
```
Per impostazione predefinita, RMRK Tools funziona con [RMRK 2](/rmrk2.md). Se si lavora con [RMRK 1](/rmrk1.md), passare alla sezione `rmrk-one`:

```bash
git fetch && git branch rmrk-one
```

### Fetch

Successivamente, eseguire il fetch command nel nodo:

```bash
yarn cli:fetch --prefixes=rmrk,RMRK --ws=ws://localhost:9933
```

L’output è un file JSON di remarks - ogni messaggio trovato lungo i blocchi della chain che comincia con i prefissi `rmrk,RMRK`. E’ anche possibile fornire il valore come dati esadecimali, per esempio `0x726d726b,0x524d524b`.

Se si ha un precedente fetched dump, è possibile aggiungere il flag `append` per aggiungerlo e abbreviare il tempo di elaborazione. Ciò è positivo per i cronjob.

```bash
yarn cli:fetch --prefixes=0x726d726b,0x524d524b --append=QmdDywgAeybKG6erv5tJmzzfADZs19aJQV1PoMDmff6jR5.json --ws=wss://node.rmrk.app --from=8000000 --to=9000000
```

Altri comandi da eseguire:

- `--ws URL`: websocket URL per connettersi, di default è `127.0.0.1:9944`
- `--from FROM`: il blocco dal quale si comincia, di default è 0 (per RMRK, canonicamente il blocco 4892957 è l’iniziale) 
- `--to TO`: il blocco fino a cui cercare, di default è l’ultimo
- `--prefixes PREFIXES`: limita i dati restituiti alle sole osservazioni con questi prefissi. Può essere un elenco
  separato da virgole. I prefissi possono essere esadecimali o utf8. È sensibile alle maiuscole e alle minuscole. Esempio: 0x726d726b,0x524d524b
- `--append PATH`: modalità speciale che prende l'ultimo blocco in un file di dump esistente +1 come FROM (sovrascrive FROM). Aggiunge nuovi blocchi con remarks in quel file. E’ comodo per eseguire tramite cronjob per creazione di elenchi continui di remarks. Le prestazioni attuali sono di 1000 blocchi ogni 10 secondi, quindi l’elaborazione di 5000 blocchi con un `* * * * *` cronjob dovrebbe essere fattibile. Per esempio:
  `yarn cli:fetch --prefixes=0x726d726b,0x524d524b --append=somefile.json`
- `--collection`: per filtrare collection specifiche o collection ID (es. substring RMRK)
- `--fin`: il valore predefinito è "yes" se omesso. Quando "yes", va all'ultimo blocco finalizzato se `to` è omesso. Altrimenti, l'ultimo blocco. `no` è utile per testare.

- `--output`: nome del file in cui salvare l'output. Viene ignorato se si usa `append`.

### Download dumps

È anche possibile scaricare entrambi i dump da IPFS.

- [RMRK 1 full dump](https://gateway.pinata.cloud/ipns/latestdump.rmrk.app) (updated every 15-20
  minutes)
- [RMRK 2 full dump](https://gateway.pinata.cloud/ipns/latest-rmrk2.rmrk.link) (updated every 15-20
  minutes)

## Consolidamento

Una volta che si ha un fetched set, bisogna consolidarlo.

```bash
yarn cli:consolidate --json=dump.json  --ws=ws://localhost:9933
```

È inoltre disponibile per il download un set consolidato regolarmente aggiornato per RMRK 1 e RMRK 2:

- [RMRK 1 consolidated dump](https://gateway.pinata.cloud/ipns/precon-mkt.rmrk.app) - ~400 MB, has
  everything
- [RMRK 1 consolidated dump lite](https://gateway.pinata.cloud/ipns/precon-lite.rmrk.link) - only
  ~20 MB, removed burned NFTs and all their emotes
- [RMRK 2 consolidated dump](https://gateway.pinata.cloud/ipns/precon-rmrk2.rmrk.link) - ~100 MB

## API

Il team RMRK offre anche semplici API graphql e https che puoi richiedere per una rapida lettura dei saldi di qualsiasi account. [Fateci sapere](https://t.me/rmrkimpl) se si desidera utilizzare queste API.