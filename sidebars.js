module.exports = {
  docs: [
    "getting-started",
    "concepts",
    {
      type: "category",
      label: "RMRK Legos",
      items: [
        "lego1-nested",
        "lego2-multi-resource",
        "lego25-equippable",
        "lego3-emote",
        "lego4-conditional-rendering",
        "lego5-dao",
      ],
    },
    {
      type: "category",
      label: "RMRK Concepts",
      items: ["nontransferable", "scarcity", "ownershipxp", "econ"],
    },
    {
      type: "category",
      label: "Use Cases",
      items: [
        "cross_game_skins",
        "ticketing",
        "revealable",
        "backups",
        "usecases/mixedmedia",
        "usecases/evolution",
      ],
    },
    {
      type: "category",
      label: "Kusama Implementation (Remarks)",
      items: ["rmrk1", "rmrk2", "syncing"],
    },
    {
      type: "category",
      label: "EVM implementation",
      items: ["evm"],
    },
    {
      type: "category",
      label: "FRAME implementation",
      items: ["pallets"],
    },
    "faq",
  ],
};
