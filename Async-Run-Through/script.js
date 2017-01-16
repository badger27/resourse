// Filtering


//global symbols variable
var symbols = getStockSymbols([
    {symbol: " XFX ", price: 249.22 , volume: 212  },
    {symbol: " XCX ", price: 243.55 , volume: 22132  },
    {symbol: " XbX ", price: 34.22 , volume: 223211  }
]);

// *****************************
// EXAMPLE FILTER WITH 4 LOOP FILTER

// function getStockSymbols(stocks) {
//     var symbols=[],
//         counter,
//         stock;
//        console.log("stock ", stock);
//        for (counter = 0; counter < stocks.length ;  counter++){
//        stock= stocks[counter];
//        symbols.push(stock.symbol);
// }
//       return  symbols;
// }
//
//
// console.log (JSON.stringify(symbols));

/////End of 4 loop
// *****************************





// EXAMPLE USING FOUREACH  FILTER
// function getStockSymbols(stocks) {
//     var symbols=[];
//     stocks.forEach(function (stock) {
//         symbols.push(stock.symbol);
//     })
//     return  symbols;
// }
// var symbols = getStockSymbols([
//
//     {symbol: " XFX ", price: 249.22 , volume: 212  },
//     {symbol: " XCX ", price: 243.55 , volume: 22132  },
//     {symbol: " XbX ", price: 34.22 , volume: 223211  }
// ]);

// console.log (JSON.stringify(symbols));

// FOUREACH  END




// EXAMPLE USING MAP FILTER

//( map function below is aready a
//  part of the ARRAY OBJECT so this will
//   also run without the prototype. SEE below)

function getStockSymbols(stocks) {
    var symbols=[];
   return stocks.map(function (stock) {
       return stock.symbol;

   });

}


Array.prototype.map(
    function (projection) {
        var results = [];

        this.fourEach(function (stock) {
             results.push(projection(item));
        });

    }
)
var symbols = getStockSymbols([

    {symbol: " XFX ", price: 249.22 , volume: 212  },
    {symbol: " XCX ", price: 243.55 , volume: 22132  },
    {symbol: " XbX ", price: 34.22 , volume: 223211  }
]);

console.log (JSON.stringify(symbols));


//CODE OPTIMISED

// function getStockSymbols(stocks) {
//     var symbols=[];
//     return stocks.map(function (stock) {
//         return stock.symbol;
//
//     });
//
//
// }
// console.log (JSON.stringify(symbols));