console.log('-- Example 4 --');

const accountExample = {
  debits: 10000,
  credits: 5000,
  fees: -100,
  balance: 1000000,
}

function printBalance(account) {
  printLine('Debits', account.debits);
  printLine('Credit', account.credits);
  printLine('Fees', account.fees);
  console.log('---');
  printLine('Balance', account.balance);
}

function formatAmount(value) {
  let string = '$' + Math.abs(value).toString()

  if (value < 0) {
    string = '-' + string;
  }

  return string;
}

function printLine(label, value) {
  const line = label + ": " + formatAmount(value);
  console.log(line);
}


printBalance(accountExample);