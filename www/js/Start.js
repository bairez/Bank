class Start {

  constructor() {
  }

  showLastTransactions() {
      if (!App.user) { return; }

      let numberOfTransactions = 5;
      let html = '';

// create an empty array
let transactionsByTime = new Array();
      // collect all transactions in the new array
      for (let account of App.user.accounts) {
          for(let h of account.history) {
              transactionsByTime.push(h);
          }
      }
      // order the transactions by time attribute
      transactionsByTime.sort(
          // compare function
          (transactionA, transactionB) => (
              transactionA.time > transactionB.time) ? -1 : 
              ( (transactionA.time < transactionB.time) ? 1 : 0)
      );
      // console.log(transactionsByTime);

      for (let i = 0; i < numberOfTransactions ; i++) {
          let history = transactionsByTime[i];
          html += `<tr>
              <th scope="row">${history.label}</th>
              <td>${history.amount}</td>
              <td class="text-right">${history.time}</td>
          </tr>`;
        }

// put the html in the DOM
      $('.start-history tbody').html(html);
    }
}