---
title: "Rendering Condizionale"
---

Il rendering condizionale utilizza [jsonlogic](https://jsonlogic.com/) per definire le alterazioni del rendering dell'NFT lato client, in base a determinate condizioni on e off-chain.

Ad esempio, un NFT che raffigura l'immagine di una luna potrebbe trasformarsi in una mezza luna, con un razzo che atterra su di essa se riceve 50 🌓 e 30 🚀 emoji.

![](../static/img/post_imgs/cr_01.png)

L’NFT di una mela può marcire dopo un certo blocco, trasformandosi nell'immagine di una mela marcia, oppure, se consumata in tempo per mezzo dell’emoji 🍴, diventa solo un torsolo di mela.

L'immagine NFT di una bicicletta può mostrare segni di deterioramento e fatiscenza se è stata venduta più di, ad esempio, 50 volte.

L'immagine di un lupo potrebbe mostrare un branco se le persone hanno mintato più di 50 lupi in questa collezione, o se sono stati [into](/lego1-nested.md) al lupo originale.

Queste interazioni possono avere effetti in-game, ma possono anche essere arte guidata dalla community. Un'esperienza collaborativa dove, se un numero sufficiente di persone interagisce in qualche modo con un NFT, la sua essenza cambia.

Un blocco logico di un NFT potrebbe essere simile a questo:

```
    "logic": [
        {
            ">": ["emotes.🚀", 50],
            "priority": [2,3,1] // change asset prio based on condition == true
        },
        {
            ">": ["emotes.❄", 100],
            "assets.0.bg": "newhash" // overrides the background image in the catalog, if such a part exists
        },
        {
            "==": ["this.rain", "true"],
            "assets.0.bg": "hash-of-rainy-background"
        }
    ],
```

Nell'esempio qui sopra, si possono vedere tre scenari:

- se l'NFT riceve più di 50 emoji di razzi, mostra una risorsa diversa come priorità assoluta. Quindi, una luna mostra un allunaggio se ci sono 50 razzi.
- se l'NFT riceve più di 50 emoji fiocco di neve, lo sfondo predefinito della prima risorsa verrà sovrascritto e mostrerà invece una montagna innevata.
- se l'NFT ha il suo attributo mutabile impostato su "rain", lo sfondo diventa un'immagine di piovosa.

## Implementazioni

Non esistono ancora implementazioni per questa specifica.

- Kusama (fase di ricerca)
- EVM (fase di ricerca)
- Pallets (fase di ricerca)
