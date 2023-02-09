---
title: "Sistemi di progressione dei personaggi"
---

Questo è un esempio di [proprietà dell'esperienza](/ownershipxp).

## Avatar NFT

Un singolo personaggio o avatar è un unico NFT [multirisorsa](/lego2-multi-resource). Può avere una o più risorse, ma quella che conta per il gioco in questione è una risorsa [Catalog](/lego25-equippable) (componibile).

Supponiamo che questa risorsa sia **"Avatar di livello 1"** e che abbia i seguenti attributi:


- Forza: 5
- Destrezza: 4
- Intelligenza: 3

La risorsa ha anche uno slot per la testa, due slot per le mani e uno slot per il corpo, in cui possono essere equipaggiati gli NFT della collezione "Oggetti di livello 1".

## Cervello NFT + Abilità

Questo NFT [contiene](/lego1-nested) un altro NFT [equipaggiabile](/lego25-equippable): il cervello NFT, che è legato [soulbound 2.0](/nontransferable), cioè bloccato nell'avatar.

La risorsa principale del cervello NFT ha 2 slot in cui possono essere equipaggiate altre NFT, elencate in bianco per una collezione di NFT chiamata "Abilità di livello 1".

## Progressione del gioco

Quando il giocatore interagisce con il mondo, può raccogliere oggetti (dalle missioni, dal mondo o dal crafting), abilità (dai mentori o come ricompense delle missioni) e punti esperienza (dai combattimenti, dall'esplorazione, dal crafting...).

- Gli oggetti sono NFT trasferibili ed [equipaggiabili](/lego25-equippable).
- I punti esperienza sono marcatori di esperienze [non trasferibili](/nontransferable).
- Le abilità sono NFT [non trasferibili](/nontransferable)

Supponiamo che dopo alcune sessioni di gioco il personaggio abbia raccolto:

- Oggetti
  - 1 spada di livello 2
  - 1 elmo di livello 1
- Abilità
  - Ricerca 1
  - Ricerca di informazioni 2
  - Combattimento con la spada 1
  - Mestiere 1
- Punti esperienza
  - 3 XP spada
  - 5 punti esperienza di artigianato

Supponiamo che un personaggio salga di livello ogni 7 punti abilità consumati.

Al momento il personaggio non può equipaggiare la spada di livello 2 perché questa richiede un avatar di livello 2. Tuttavia, può tranquillamente equipaggiare l'elmo, che è di livello 1. 

Questo è possibile grazie alla logica di equipaggiamento di RMRK, che permette di definire quali collezioni possono essere equipaggiate in quale slot:
- testa: skybreach_collection_headwear_level_1
- mano_sinistra: skybreach_collection_handheld_level_1
- mano_destra: skybreach_collection_handheld_level_1

Supponendo che sia necessario un livello di XP per portare un'abilità al livello desiderato, ad esempio per passare da 3 a 4 sono necessari 4 XP, il personaggio può migliorare Swordfighting a L2 e Crafting a L3 consumando i relativi punti XP (consumare i punti abilità non trasferibili NFT).

Quindi, bruciando 2 XP per la spada e 5 XP per il crafting, il personaggio ora ha Swordfight L2 e Crafting L3, ma ha anche bruciato un totale di 7 punti, il che significa che ottiene un'altra risorsa aggiunta: "Avatar di livello 2".

Questa risorsa ha una diversa disposizione degli equipaggiamenti, diverse impostazioni di ciò che si può equipaggiare in quale slot:

- testa : skybreach_collection_headwear_level_1, skybreach_collection_headwear_level_2
- mano_sinistra: skybreach_collection_handheld_level_1, skybreach_collection_handheld_level_2
- mano_destra: skybreach_collection_handheld_level_1, skybreach_collection_handheld_level_2

Poiché la "spada di livello 2" si trova nella collezione `skybreach_collection_handheld_level_2`, ora è equipaggiabile in entrambe le mani. Gli slot rimangono ovviamente compatibili con gli oggetti di livello 1.

Questo è il modo in cui un sistema di progressione del personaggio può funzionare per le abilità, i punti XP e la modifica dei requisiti per oggetti, abilità, incantesimi, ecc.