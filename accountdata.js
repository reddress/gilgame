var accounts = [ 
  {
    name: "Heitor",
    id: "heitor",
    balance: 0,
    parent: "root",
    children: [],
    sign: 1,
  },
  
  {
    name: "Assets",
    id: "assets",
    balance: 0,
    parent: "heitor",
    children: [],
    sign: 1,
  },

  {
    name: "Expenses",
    id: "expenses",
    balance: 0,
    parent: "heitor",
    children: [],
    sign: 1,
  },

  {
    name: "Equity",
    id: "equity",
    balance: 0,
    parent: "heitor",
    children: [],
    sign: -1,
  },

  {
    name: "Liabilities",
    id: "liabilities",
    balance: 0,
    parent: "heitor",
    children: [],
    sign: -1,
  },

  {
    name: "Income",
    id: "income",
    balance: 0,
    parent: "heitor",
    children: [],
    sign: -1,
  },

  {
    name: "Medical",
    id: "med",
    balance: 0,
    parent: "expenses",
    children: [],
    sign: 1,
  },

  {
    name: "Psiquiatra",
    id: "psiq",
    balance: 0,
    parent: "med",
    children: [],
    sign: 1,
  },
  
  {
    name: "Medications",
    id: "meds",
    balance: 0,
    parent: "med",
    children: [],
    sign: 1,
  },
  
  {
    name: "Pontual salário",
    id: "ptlsal",
    balance: 0,
    parent: "income",
    children: [],
    sign: -1,
  },
  
  {
    name: "Juros",
    id: "juros",
    balance: 0,
    parent: "income",
    children: [],
    sign: -1,
  },
  
  {
    name: "Itaú juros",
    id: "itjur",
    balance: 0,
    parent: "juros",
    children: [],
    sign: -1,
  },
  
  {
    name: "",
    id: "",
    parent: "",
    sign: 1,
  },
  
  {
    name: "Opening Balance",
    id: "open",
    parent: "equity",
    sign: -1,
  },
  
];
