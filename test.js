// ensure there are no duplicate ids
var account_ids = [];

accounts.forEach(function(account) {
  if (account_ids.indexOf(account.id) !== -1) {
    alert("ERROR: duplicate id found: " + account.id);
  }
  account_ids.push(account.id);
});

// ensure there are no circular paths


// ensure account exists
function account_exists(id) {
  var exists = false;
  accounts.forEach(function(account) {
    if (account.id === id) {
      exists = true;
    }
  });
  return exists;
}


// test amount parsing

function test_amount_parsing(amount_str, amount_cents) {
  if (parse_amount(amount_str) !== amount_cents) {
    alert("Amount parsed incorrectly: " + amount_str);
  }
}

// comma or period
test_amount_parsing("1.00", 100);
test_amount_parsing("1,00", 100);

// no separator
test_amount_parsing("3", 300);
test_amount_parsing("30", 3000);

// odd number after separator
test_amount_parsing("1.129", 112);
test_amount_parsing("1.1", 110);

// starts with separator
test_amount_parsing(",02", 2);
