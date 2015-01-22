// Gilgame: the undead turtle who exponentially hoards Gil


// build account tree

var account_tree = { id: "accounts", children: [] };

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
  if (source !== 'accounts') {
    accounts.forEach(function(account) {
      if (account.id === source) {
        alter_balance(source, amount);
        bubble_amount(account.parent, amount);
      }
    });
  }
}

function parse_and_add_transaction(s) {
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
  
function log_tree() {
  console.log(JSON.stringify(account_tree, null, 2));
}


function htmlify_tree(node) {
  var contents = "";
  if (node.id !== "accounts") {
    contents = '<span title="' + (node.name || "Accounts") + '">' +
      node.id + '</span> <span id="' + node.id + '_balance">' +
      display_balance(node.balance || 0) +
      "</span>" +
      "";
  } else {
    contents = "Accounts";
  }
  
  var html_tree = "<ul><li>" + contents;

  node.children.forEach(function(child) {
    html_tree += htmlify_tree(child);
  });
  html_tree += "</li></ul>";
  return html_tree;
}

function update_page() {
  initialize_accounts(accounts);

  build_tree(account_tree);

  transactions.forEach(function(transaction_str) {
    parse_and_add_transaction(transaction_str);
  });

  document.getElementById("tree_display").innerHTML = htmlify_tree(account_tree);
}

update_page();


function apply_transaction_filter(transactions, filter) {
  var filtered = [];
  transactions.forEach(function(transaction) {
    if (filter(transaction)) {
      filtered.push(transaction);
    }
  });
  return filtered;
}

console.log(JSON.stringify(apply_transaction_filter(transactions, function(t) { return t.debit === 'expenses' })));


console.log("Ready");

// interactions

// date filter
document.getElementById("million_button").addEventListener('click', function(event) {
  document.getElementById("assets_balance").innerHTML = "$1,000,000";
});

// desc filter
