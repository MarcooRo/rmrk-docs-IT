---
title: "Catalogs e NFT Equipaggiabili"
---

![](../static/img/post_imgs/eq_01.png)

Introduciamo il concetto di Catalogs (prima conosciuto come Base).

Un catalogo può essere considerato un _catalogo di parti_ da cui si può comporre una NFT. Le parti possono essere
di tipo `slot` o `fisso`. Gli slot sono destinati agli equipaggiamenti.

> Nota: che una base viene aggiunta a un NFT come [risorsa](/lego2-multi-resource) by specifying
> l'ID del catalogo e selezionare l'elenco dei pezzi dal catalogo per quell'istanza NFT. L'approccio
> approccio differisce leggermente a seconda dell'implementazione, quindi gli esempi che seguono utilizzeranno principalmente pseudo-codice per
> comunicare il concetto.

Catalogs possono essere di formati e media diversi..

Il tipo di catalogo indica quale sarà l'output finale di un NFT quando questa risorsa viene renderizzata.
I tipi supportati sono PNG, SVG, audio, video, misto, anche se finora solo PNG e SVG sono stati implementati nei front-end RMRK.
nei front-end RMRK.

È più facile capire i cataloghi e gli equipaggiamenti attraverso un esempio visivo, come un catalogo PNG o SVG.
quindi ci concentreremo su questo nelle spiegazioni che seguono. Ulteriori esempi di diversi tipi sono
alla fine di questa pagina.

Il concetto più importante da capire riguardo agli equipaggiamenti, è che l'output finale non è statico. Per esempio, equipaggiare un cappello su un rinoceronte non genera una nuova immagine statica al posto di quella vecchia. Il cappello viene invece reso dinamicamente all'interno dell'immagine del rinoceronte, che deve essere preparata in anticipo per questa funzionalità.

Questo è ciò che permette il sistema della Base: mintare collezioni tenendo conto dell'equipaggiamento, indipendentemente dal tipo - i file audio possono essere preparati con gli slot per gli stem audio, le basi dei film possono essere preparate con gli slot per i filtri, ma i file video possono anche avere uno slot per i sottotitoli, o anche una traccia audio alternativa e altro ancora.

## Come funziona una Base: Esempio dei Chunkies

Una base è un elenco di "componenti" la cui combinazione può essere usata per formare un singolo NFT.

Prendiamo ad esempio un progetto di avatar chiamato Chunkies: personaggi paffuti che possono contenere oggetti, indossare copricapi e avere sfondi diversi, oltre ad avere un aspetto unico fra loro. Ecco alcune combinazioni.

![Chunky examples](/img/post_imgs/P5FUhk8.jpeg)

Ogni Chunky è una combinazione di diverse parti della base Chunky.

![Chunky catalog](/img/post_imgs/chunky1.png)

Alcune di queste parti sono slot nei quali è possibile inserire altre immagini compatibili: si tratta degli equipaggiamenti. Le fessure non sono visibili se ispezionate singolarmente - nella composizione finale si troverebbero, ad esempio, dietro al Chunky (come sfondo) o tra le dita e il palmo. Le linee diagonali rosse in basso indicano dove un elemento dovrebbe apparire.

![Chunky slots](/img/post_imgs/chunky2.png)

Il processo di aggiungere una risorsa equipaggiabile a un NFT:

1. creare un'entità di catalog entity (processo unico per una determinata collezione)
2. aggiungere una nuova risorsa all’NFT di destinazione.

Questa nuova risorsa definisce una base e alcune parti scelte, in questo modo:

```
    "assets": [
        {
            "catalog": "base-8788686-CHUNKBASE",
            "id": "Whqja-r1",
            "parts": [
                "var1_body",
                "var1_eyes",
                "1fa78_handleft",
                "1fa78_handright",
                "var1_head",
                "background",
                "foreground",
                "headwear",
                "objectleft",
                "objectright",
                "necklace",
            ],
            "pending": false,
            "themeId": "bandicoot",
            "thumb": "ipfs://ipfs/QmR3rK1P4n24PPqvfjGYNXWixPJpyBKTV6rYzAS2TYHLpT"
        }
    ],
```

Nel codice mock qui sopra, si può notare che abbiamo a che fare con `assets` array di un certo NFT.

> Si noti che asset si chiamava risorsa e catalog si chiamava base, quindi il codice effettivo che si trova nell'implementazione di Kusama rifletterà questa situazione.
> nell'implementazione di Kusama rifletterà questa situazione; questi esempi si concentreranno sulla nomenclatura aggiornata.
> nomenclatura aggiornata.

Questo NFT in particolare, ha una sola risorsa - la base equipaggiabile stessa. Il valore `catalog` si riferisce all'ID della meta-entità Base, l'id della risorsa è usato per l'indicizzazione e per poter puntare a una risorsa specifica quando si desidera sostituirla, accettarla o rimuoverla, mentre `pending` ci dice se il proprietario dell’NFT ha accettato questa risorsa (falso è sì).

> ❗️ Trovate maggiori informazioni sulle meccaniche di accettazione in [multi-risorsa NFTs](/lego2-multi-resource).

The most important part is `parts` - this is the array in which we specify which parts from the
assigned `catalog` make up this NFT. The parts themselves are defined in the `catalog` itself, like
so:

La parte più importante è `parts` - l'array dove si specificano le parti della `catalog` assegnata, che compongono questo NFT. Le parti sono definite nella `catalog` stessa in questo modo:

```
  ...,
  {
    type: 'slot',
    id: 'headwear',
    equippable: [
      '9cba890074545f2e7c-KANPRTN',
      'e0b9bdcc456a36497a-EVNTS',
    ],
    z: 13,
  },
  {
    type: 'fixed',
    id: 'var1_head',
    src: 'ipfs://ipfs/QmZy8eRLhToqPk5154SJkTJfPD8AMnPAjBi6w1S61yNPrR/var1/var1_head.svg',
    z: 9,
  },
  ...
```

Il primo slot è headwear e si può notare che è un tipo `slot`. L'array `equippable` elenca le collezioni consentite come equipaggiabile. L'emittente della base può modificare questo valore in qualsiasi momento, aggiungendo e rimuovendo collezioni a piacere.


La parte `fixed` punta semplicemente a una visuale che deve essere renderizzata. È immutabile.

Il valore `z` in entrambi, indica su quale livello appare la visuale sulla base SVG in altezza. Più alto è il numero, più è "vicina alla telecamera". Questo è particolarmente importante per gli slot, poiché, come nell'immagine precedente, il valore `z` dello slot nella mano deve essere compreso fra le dita e il palmo, mentre il valore `z` dello sfondo deve essere il più basso di tutti per essere renderizzato sul fondo.

Quindi, una risorsa che è una base selezionerà una parte di quella base per comporre un NFT finale, fino a ottenere i nostri chunkies colorati.

Il nostro progetto di punta, Kanaria, utilizza questo stesso approccio. Se volete, potete esplorare la loro catalogo completa [qui](https://gist.github.com/Yuripetusko/dccd18ef3efe6058d73c29dbe0ef5b6f).

Una descrizione grafica completa del progetto Kanaria e del funzionamento delle loro catalogo, è disponibile anche
[qui](https://url.rmrk.app/demobird).

## Example: Livellamento dei Personaggi

![](../static/img/post_imgs/eq_02.png)

Un modo completamente decentralizzato e on-chain per rappresentare i requisiti di livello dei personaggi, è possibile utilizzando gli equipaggiamenti e le risorse multiple.

Se prendiamo ad esempio un Chunky di livello 1, questo NFT può avere una risorsa che punta alla base del Chunky, ma da essa prende solo le parti che hanno il valore `equippable` impostato su collezioni di items di livello 1, limitando l’NFT a dotarsi solo equipaggiamenti di livello 1.

Il livello stesso può essere un NFT equipaggiabile all'interno dell'avatar - un "level brain" che ha bisogno di raccogliere esperienza sotto forma di missioni completate con successo. In base ai risultati ottenuti, un Chunky può ottenere un diverso tipo di aumento di livello.

Ad esempio, per ottenere il livello 2, un Chunky deve svolgere due missioni con successo. Se le missioni sono state svolte in un mondo di tipo fuoco, la risorsa successiva potrebbe avere un [theme](#theming). fuoco. Se sono state svolte in un mondo di tipo acqua, si potrebbe applicare un tema acqua. Il proprietario dell’NFT sceglierà quali "successi nelle missioni" equipaggiare nel "Livello NFT" che si trova all'interno dell'avatar, e li userà per creare dei "set di esperienze" completi.

Una volta che questo Chunky avrà accumulato abbastanza esperienza da passare al livello 2, gli si potrà aggiungere una nuova risorsa, targhettizzando la precedente per ID e sostituendola quando viene accettata dal proprietario dell’NFT. Questa risorsa si fisserà alla stessa base, ma ora sceglierà gli slot configurati per accettare collezioni di oggetti di livello 1 e 2, rendendo così possibile la dotazione di equipaggiamenti di livello superiore.

Un altro esempio è quello di fornire dei "brain NFT" con un certo numero di slot a un personaggio di un certo livello. Ad esempio, un personaggio di livello 2 può avere solo 2 abilità equipaggiate nel suo “cervello”, ma se l'avatar conosce di più di 2 abilità, il giocatore deve scegliere quali caricare dopo un periodo di riposo, come per gli incantesimi dei maghi in Dungeons and Dragons.

Questo aspetto viene approfondito nel capitolo [Character Progression](/usecases/charprog) use case.

## Example: Musica

![](../static/img/post_imgs/eq_03.png)

Una canzone NFT potrebbe avere come risorsa una base musicale con un ritmo fisso, ma degli slot per la voce, la batteria, il sintetizzatore, l'effetto, persino uno slot per un elemento visivo - forse anche per del codice [p5.js](https://p5js.org/) eseguibile.

Questo non solo è molto bello nel contesto del pagamento dei diritti d'autore a chiunque abbia contribuito alla creazione di una canzone col proprio stem, ma possiamo andare oltre: la canzone stessa, o forse solo un singolo stem, può essere reso equipaggiabile sulla risorsa base di una land del metaverso.

In questo modo, chiunque acceda a questa terra sentirà la canzone come colonna sonora dell'area, come musica di sottofondo. La musica è quindi compatibile non solo con il proprio progetto, o con i progetti associati ai creatori, ma con qualsiasi progetto che possa essere lanciato secondo gli standard di RMRK.

## Example: Giochi

Il caso d'uso del gioco è così ovvio che lo abbiamo trasformato in un proof of concept con [Skybreach](https://skybreach.app).

- Una casa può essere equipaggiata su una Land.
- Un cartellone pubblicitario può essere equipaggiato e in aggiunta, governato dalla comunità per far guadagnare gli shareholders.
- Un avatar può essere equipaggiato con una giacca. Questa giacca può avere tasche per equipaggiare oggetti e slot per le patch.
- Un NPC può essere un NFT che ha installato un NFT di personalità o che ha un NFT abilità in vendita.

## Tematizzazione

La specifica di RMRK supporta l'interpolazione dei temi. Ciò consente di applicare un ulteriore livello di unicità all’NFT senza doverlo progettare e sviluppare in modo specifico.

![](../static/img/post_imgs/eq_04.png)

Una base conterrà dei temi codificati per nome, come ad esempio:

```
...
themes: {
  sunkissed: {
    theme_color_1: '#ffd592',
    theme_color_2: '#edffd9',
    theme_color_3: '#eb5a8b',
    theme_color_4: '#ee9154',
  },
  retrosteel: {
    theme_color_1: '#98baff',
    theme_color_2: '#8af3fc',
    theme_color_3: '#5562e9',
    theme_color_4: '#d16dd1',
  },
  ...
```

Si tratta di variabili che possono contenere qualsiasi valore - in questo esempio sono i colori. Lo stesso SVG può contenere un attributo di dati segnaposto dove viene inserita questa variabile, ma che ha un proprio valore predefinito:

```html
<svg height="100" width="100">
  <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" data-theme_color_3="red" />
</svg>
```

Infine, il tema viene selezionato come parte della risorsa da aggiungere all'NFT:

```json
    "assets": [
        {
            "catalog": "base-8788686-CHUNKBASE",
            "id": "Whqja-r1",
            "parts": [...],
            "pending": false,
            "themeId": "sunkissed", // <--- THIS HERE
            "thumb": "ipfs://ipfs/QmR3rK1P4n24PPqvfjGYNXWixPJpyBKTV6rYzAS2TYHLpT"
        }
    ],
```

Questo richiede un po' di lavoro in più per la creazione degli SVG e per prepararli all'uso, ma consente di ottenere un numero di combinazioni possibili con l’NFT, che è ordini di grandezza superiore.

Un esempio più completo è disponibile [qui](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/themeadd.md), ma si applica solo all'implementazione di Kusama, ora deprecata.

## Altri esempi

Un'applicazione creativa della componibilità e dell'equipaggiabilità è il progetto PFP componibile
[Mushroomtopia composable PFP project](https://twitter.com/bitfalls/status/1508793028454014978?s=20&t=v1MmdhrE3WrtfjBkj3kcxw).

Alcuni interessanti esperimenti iniziali con gli equipaggiamenti legati al gaming possono essere visti nel seguente video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/_RW7XymkI_M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Un altro esempio interessante, è l'utilizzo di NFT equipaggiabili per la rappresentazione on-chain, come nell'esempio dei
[Kusama Governance Rewards](https://app.subsocial.network/6214/referendum-voting-rewards-the-past-the-present-the-future-32141).
Per una descrizione dettagliata, potete vedere il video qui sotto.

<iframe width="560" height="315" src="https://www.youtube.com/embed/lpT7hubqzFQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Implementazioni

Le seguenti implementazioni portano direttamente al codice. Per degli esempi su come utilizzarle per creare i propri NFT, consultare la sezione della barra laterale relativa a ciascun sottotipo di implementazione.

- [Kusama](https://github.com/rmrk-team/rmrk-spec/blob/master/standards/rmrk2.0.0/interactions/equip.md)
- [EVM: EIP 6059](https://eips.ethereum.org/EIPS/eip-6059)
- [Pallets](https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-equip)
