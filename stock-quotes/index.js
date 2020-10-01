// Create a page which allows users to search for stock quotes. The page will consist of a TextBox where users can enter the symbol of the stock they are looking for. When the presses the "Show Quotes" button the app will call the "getStockQuote" function implemented in stockQuotes.js (attached) and get the stock quotes. You should update the quotes every 2 seconds by making a call to getStockQuote function. Your app should display the name of the stock and also the price of the stock.

//Retrieve elements from html
let symbolTextBox = document.getElementById("symbolTextBox");
let showQuotesButton = document.getElementById("showQuotesButton");
let stockQuotesHeader = document.getElementById("stockQuotesHeader");

// item = quotes[key]
// console.log(item.name) //prints Apple
// console.log(item.price) //prints price

showQuotesButton.addEventListener("click",function(){
    let symbol = symbolTextBox.value
    
    window.setInterval(() => {
      let quote = getStockQuote(symbol)
    //   console.log(quote)
    //   console.log(quote.name)
      stockQuotesHeader.innerHTML =`${quote.name} ${quote.price}`
    
    }, 2000);
    
})

