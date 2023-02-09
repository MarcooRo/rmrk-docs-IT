---
title: FRAME implementaton
---

Si tratta di una delle due versioni del cosiddetto "RMRK 3" - un'implementazione delle specifiche nel linguaggio Rust, che utilizza il sistema di pallet FRAME di Parity destinato all'integrazione con il framework [Substrate](https://substrate.io). Questo rende RMRK compatibile con le blockchain basate su Substrate come Acala, Subsocial, Zeitgeist e altre.

L'implementazione dei pallet FRAME è disponibile all'indirizzo https://github.com/rmrk-team/rmrk-substrate. I tutorial sull'uso sono in arrivo.

Per esplorare ogni singolo [concetto](/concepts), consultare i pallet applicabili collegati di seguito:

- [RMRK core](https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-core)
- [RMRK soulbound 2.0](https://github.com/rmrk-team/rmrk-substrate/blob/main/pallets/rmrk-core/src/lib.rs)
- [RMRK equippables](https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-equip)
- [RMRK marketplace functions](https://github.com/rmrk-team/rmrk-substrate/tree/main/pallets/rmrk-market)

I pallet RMRK sono attualmente utilizzati in produzione dalle aziende di [Khala](https://www.phala.network/en/khala/) e [Invarch](https://invarch.network) chains.

È disponibile la documentazione del codice autogenerato esportato [qui](https://rmrk-team.github.io/rmrk-substrate/#/).
