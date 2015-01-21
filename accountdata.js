var accounts = [ 
  {
    name: "Assets",
    id: "assets",
    parent: "root",
    sign: 1,
  },

  {
    name: "Expenses",
    id: "expenses",
    parent: "root",
    sign: 1,
  },

  {
    name: "Equity",
    id: "equity",
    parent: "root",
    sign: -1,
  },

  {
    name: "Liabilities",
    id: "liabilities",
    parent: "root",
    sign: -1,
  },

  {
    name: "Income",
    id: "income",
    parent: "root",
    sign: -1,
  },

  {
    name: "Medical",
    id: "med",
    parent: "expenses",
    sign: 1,
  },

  {
    name: "Psiquiatra",
    id: "psiq",
    parent: "med",
    sign: 1,
  },
  
  {
    name: "Medications",
    id: "meds",
    parent: "med",
    sign: 1,
  },
  
  {
    name: "Pontual salário",
    id: "ptlsal",
    parent: "income",
    sign: -1,
  },
  
  {
    name: "Juros",
    id: "juros",
    parent: "income",
    sign: -1,
  },
  
  {
    name: "Itaú juros",
    id: "itjur",
    parent: "juros",
    sign: -1,
  },
  
  {
    name: "Opening Balance",
    id: "open",
    parent: "equity",
    sign: -1,
  },
  
  {
    name: "",
    id: "",
    parent: "",
    sign: 1,
  },
    
];
