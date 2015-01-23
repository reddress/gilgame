// Parent accounts must appear before children

var accounts = [ 
  {
    name: "Expenses",
    id: "expenses",
    parent: "accounts",
    sign: 1,
  },

  {
    name: "Assets",
    id: "assets",
    parent: "accounts",
    sign: 1,
  },
  
  {
    name: "Equity",
    id: "equity",
    parent: "accounts",
    sign: -1,
  },

  {
    name: "Liabilities",
    id: "liabilities",
    parent: "accounts",
    sign: -1,
  },

  {
    name: "Income",
    id: "income",
    parent: "accounts",
    sign: -1,
  },

  {
    name: "Opening Balance",
    id: "open",
    parent: "equity",
    sign: -1,
  },
  
  {
    name: "Livrarias e bancas",
    id: "livr",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Tarifas de bancos",
    id: "tar",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Communications",
    id: "comm",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Celular",
    id: "cel",
    parent: "comm",
    sign: 1,
  },
  
  {
    name: "Correios",
    id: "corr",
    parent: "comm",
    sign: 1,
  },
  
  {
    name: "Medical",
    id: "med",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Medications and Vitamins",
    id: "meds",
    parent: "med",
    sign: 1,
  },
  
  {
    name: "Groceries",
    id: "groc",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Restaurantes",
    id: "rest",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Junk food",
    id: "junk",
    parent: "rest",
    sign: 1,
  },
  
  {
    name: "Self-care",
    id: "self",
    parent: "expenses",
    sign: 1,
  },

  
  {
    name: "Foods",
    id: "foods",
    parent: "rest",
    sign: 1,
  },
  
  {
    name: "Services",
    id: "svc",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Caixinhas",
    id: "caix",
    parent: "svc",
    sign: 1,
  },
  
  {
    name: "Transit",
    id: "tr",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Unaccounted expenses",
    id: "unacc",
    parent: "expenses",
    sign: 1,
  },
  
  {
    name: "Adjustments",
    id: "adj",
    parent: "equity",
    sign: -1,
  },

  // ASSETS

  {
    name: "Banks",
    id: "bank",
    parent: "assets",
    sign: 1,
  },
  
  {
    name: "Itau",
    id: "it",
    parent: "bank",
    sign: 1,
  },
  
  {
    name: "Itau Conta Corr",
    id: "itcor",
    parent: "it",
    sign: 1,
  },
  
  {
    name: "Itau Poupanca",
    id: "itpou",
    parent: "it",
    sign: 1,
  },
  
  {
    name: "Bradesco",
    id: "br",
    parent: "bank",
    sign: 1,
  },
  
  {
    name: "Bradesco Conta Corr",
    id: "brcor",
    parent: "br",
    sign: 1,
  },
  
  {
    name: "Bradesco Poupanca",
    id: "brpou",
    parent: "br",
    sign: 1,
  },
  
  {
    name: "Bradesco Tesouro Direto",
    id: "brtes",
    parent: "br",
    sign: 1,
  },
  
  {
    name: "CGD",
    id: "cgd",
    parent: "bank",
    sign: 1,
  },
  
  {
    name: "CGD Conta Corr",
    id: "cgdcor",
    parent: "cgd",
    sign: 1,
  },
  
  {
    name: "CGD Acoes",
    id: "cgdac",
    parent: "cgd",
    sign: 1,
  },
  
  {
    name: "CGD Tesouro Direto",
    id: "cgdtes",
    parent: "cgd",
    sign: 1,
  },

  {
    name: "Cold Assets",
    id: "cold",
    parent: "assets",
    sign: 1,
  },

  {
    name: "Wallets",
    id: "walall",
    parent: "cold",
    sign: 1,
  },

  {
    name: "Wallet",
    id: "wal",
    parent: "walall",
    sign: 1,
  },
  
  {
    name: "Back Wallet",
    id: "wlbak",
    parent: "walall",
    sign: 1,
  },
  
  {
    name: "Side Wallet",
    id: "wlsid",
    parent: "walall",
    sign: 1,
  },
    

  
  // END
  
  {
    name: "",
    id: "",
    parent: "",
    sign: 1,
  },
  
];
