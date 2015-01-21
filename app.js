// Gilgame: the undead turtle who exponentially hoards Gil


// build account tree

var account_tree = { id: "root", balance: 0, children: [] };

function add_to_children(tree, child) {
  if (tree.id === child.parent) {
    tree.children.push(child);
  } else {
    tree.children.forEach(function(branch) {
      add_to_children(branch, child);
    });
  }
}

function build_tree(tree) {
  accounts.forEach(function(account) {
    add_to_children(tree, account);
  });
}

function alter_balance(id, amount) {
  accounts.forEach(function(account) {
    if (account.id === id) {
      account.balance += amount;
    }
  });
}

function bubble_amount(source, amount) {
  if (source !== 'root') {
    accounts.forEach(function(account) {
      if (account.id === source) {
        alter_balance(source, amount);
        bubble_amount(account.parent, amount);
      }
    });
  }
}

function parse_transaction(s) {
  var parts = s.split(";");
  for (var i = 0, end = parts.length; i < end; i++) {
    parts[i] = parts[i].trim();
  }
  
  add_transaction(parts[1], parts[2], parts[3], parts[4], parse_dmy(parts[0]));
}

function add_transaction(desc, amount_str, debit, credit, date_millis) {
  // accept amount as string, remove dot or comma
  // not sanitized

  if (account_exists(debit) && account_exists(credit)) {
  
    var amount = parse_amount(amount_str)
    
    transactions.push({
      desc: desc,
      amount: amount,
      debit: debit,
      credit: credit,
      millis: date_millis,
    });

    accounts.forEach(function(account) {
      if (account.id === debit) {
        // account.balance += account.sign * amount;
        bubble_amount(account.id, account.sign * amount);
      }
      if (account.id === credit) {
        // account.balance -= account.sign * amount;
        bubble_amount(account.id, account.sign * amount * (-1));
      }
    });
    
  } else {
    alert("Account(s) does not exist. " + debit + "/" + credit);
  }
}

function initialize_accounts(accounts) {
  accounts.forEach(function(account) {
    account.balance = 0;
    account.children = [];
  });
}

initialize_accounts(accounts);

build_tree(account_tree);

function log_tree() {
  console.log(JSON.stringify(account_tree, undefined, 2));
}

transactions.forEach(function(transaction_str) {
  parse_transaction(transaction_str);
});
