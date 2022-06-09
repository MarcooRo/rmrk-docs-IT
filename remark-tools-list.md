---
title: Remark Tools List
---

## OFFICIAL TOOLS

### RMRK SPEC 
This repository hosts standards for creating and interacting with RMRK.app NFTs.
There are two types of standards: entities and interactions. Entities are definitions for how a collection or NFT should be declared while being minted, so that tools can recognize them as valid. Interactions are interactions between the off-chain world and the RMRK protocol, between those NFTs, and between different users and NFTs.
- [Github rmrk-spec](https://github.com/rmrk-team/rmrk-spec)

### RMRK Tools 
Typescript implementation of the RMRK spec using Substrate's system.remark extrinsics.
- [Github rmrk-tools](https://github.com/rmrk-team/rmrk-tools)

### RMRK2 Examples
This repository showcases a collection of examples on how to use RMRK2 in it's current implementation (using system.remark exstrinsic) You can find Crowdcast demo.
- [Video](https://www.crowdcast.io/e/buidl)
- [Github rmrk2-examples](https://github.com/rmrk-team/rmrk2-examples)

### RMRK Substrate
- [Github rmrk-substrate](https://github.com/rmrk-team/rmrk-substrate)

## NO OFFICIAL TOOLS

### Send batch of NFTs
- [App](https://rmrk-batch-send.vercel.app/)
- [Github](https://github.com/rmrk-team/batch-send-ui)

### SubQuery Indexer for RMRK NFT Standard <sub>by Kodadot</sub>
The SubQuery Indexer is suitable for any Substrate chain which wants to parse strings into the NFTs. This readme will go through the steps to set up the SubQuery Indexer and provide some valuable hacks for ease of development. A SubQuery package defines which data The SubQuery will index from the Substrate blockchain and how it will store it.
- [Github magick](https://github.com/kodadot/magick)

## COMMUNITY TOOLS

### RMRKproject template <sub>by Matthew</sub>
This is a template project which is intended for use as a base project, on which your RMRK 2 Node.js NFT project can be built.
It comes bundled with a postgres database for storing NFTs, a HTTP and Websocket server for fetching/subscribing to events and storage data, and a simple "UglyGui" for exploring the database and API.
- [API](http://138.68.123.124/api)
- [Github rmrk2-template-boilerplate](https://github.com/MatthewDarnell/rmrk2-template-boilerplate)

### Rust-based RMRK2.0 consolidator <sub>by Brandon Macer</sub>
It takes an unconsolidated JSON dump of RMRK2.0 transactions and converts them into a JSON object. It strives to be equivalent to rmrk-tools-consolidate.
- [Github rmrk2-rust-consolidator](https://github.com/bmacer/rmrk2-rust-consolidator)

### RMRKspyBot and Rarity/Estimation tool <sub>by Victor Ryabinin</sub>
1) Birds and items price and rarity estimation 2) Reports RMRKv1,2 sales above a certain threshold 3) Monitor cheap items and birds for sale 4) Track the statuses of NFTs
- [Telegram](https://t.me/RMRKspyBot)
- [Github RMRKspyBot](https://github.com/mmvds/RMRKspyBot)
- [All other link here](https://devpost.com/software/tools-and-apps-rmrkspybot)

### rmrk2psql parser for rmrk v1, v2, vLite dumps to PSQL <sub>by Victor Ryabinin</sub>
- [Github rmrk2psql](https://github.com/mmvds/rmrk2psql)

### REMOV <sub>by KoNami Jericho, Daenure, Nethny, Ilja Hämäläinen</sub>
Our aim is to expand the capabilities of blockchain and make a secure way for transferring NFT between RMRK and MOVR blockchain. The Bridge:
The newly created bridge REMOV will allow you to safely transfer NFT from RMRK to MOVR and backwards. You will be able to take advantages of both networks!
- [App](https://remov.app/)
- [Github remov](https://github.com/Nethny/remov)

### RMRK Twitter Bot <sub>by Brandon Macer</sub>
It Tweets RMRK1.0 and RMRK2.0 sales live. 
- [Account Twitter](https://twitter.com/blocksbrandon)
- [Github rmrk-sales-twitter-bot](https://github.com/bmacer/rmrk-sales-twitter-bot)

### Snapshoot tool <sub>by Marco Romnao</sub>
Easy way to make a snapshot of Remark 1.0 & 2.0 The tool that takes the latest Singular consolidation dump 1.0 and 2.0 and, associating whit a search key, extracts all the addresses and info that contain the NFT kay
- [Github remark-snapshot-tool-v2](https://github.com/MarcooRo/remark-snapshot-tool-v2)

### Remark JSON explorer <sub>by Marco Romano</sub>
Fetch in the dump V2 or V1 by using the NFT id and observes its full JSON
- [Github easy-explorer-rmrk](https://github.com/MarcooRo/easy-explorer-rmrk)

## OTHER TOOLS

### Rareway <sub>by MouseDAO</sub>
Analytic tools to track sale on Singular
- [App](https://rareway.io/)

### RMRK 2.0 NFT maker (demo) <sub>by Mykolas Mankevicius</sub>
Create the RMRK 2.0 Lego NFTS with an intuative UI. So that artists can create them without needing to write code.
- [App](https://amazing-nfts.netlify.app/)
- [Github rmrk2_nfts](https://github.com/Neophen/rmrk2_nfts)

### Kanaria Wardrobe <sub>by Mykolas Mankevicius</sub>
Allows the user to preview his, or any other bird with any available slot nfts.
- [App](https://kanaria-wardrobe.netlify.app/)
- [Github kanaria_wardrobe](https://github.com/Neophen/kanaria_wardrobe)

### KusamaGo <sub>by Gabriel Jaeger</sub>
Is a treasures hunter game on Telegram.
Users customise NFTs, print out QR Codes to stick in their neighbourhoods -> these are the treasures. The QR codes act as passwords that when scanned with the telegram bot, mint the treasure’s NFT into the finders wallet -> these are the rewards.
- [Telegram](https://t.me/kusamaGo_bot)
- [Website](https://www.substratego.com/kusama)

### Kanaria RArity MEteR <sub>by Yury Yanovich, Osoi Otoko, Yash Madhwal</sub>
KRAMER is a rarity meter for the Kanaria collection. KRAMER takes birds' individual traits, their sets, and edition and fits their combination to trade data. We've written an article on Medium about the score computation and its intuition.
- [Github yashmadhwal/Kanaria](https://github.com/yashmadhwal/Kanaria)

### BirdWatchingBot <sub>by Marco Romano, Alberto Rotondo</sub>
The BOTs takes live events from Kanaria and Singular to track LIST and BUY. You can set it by an easy menu to generate customized feeds.
- [Github birdWatchingBot](https://github.com/MarcooRo/birdWatchingBot)

### Move RMRK Specs <sub>by Alejandro Pinto</sub>
RMRK 1.0 NFT implementation in Move Language for compatibility with the Pontem Network Parachains on Kusama and Polkadot. Not all interactions of RMKR 2.0 are enabled, but the team will continue translating the Base entity, and the following interactions: accept, base, equip and equippable. This was an MVP to continue iterating on to offer the full capabilities of RMKR to Pontem Network developers.
- [Github pontem-network/RMRK](https://github.com/pontem-network/RMRK)
