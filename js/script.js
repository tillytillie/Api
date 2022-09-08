//api to get random drinks

/*fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
  .then((res) => {
     if (res.ok){
          return res.json();
     }
     else throw new Error(console.error(err))
  })
  .then(data => {
     console.log(data)
     displayCocktail(data)
  
  })

  function displayCocktail(data) {
     const drinks = data.drinks[0];

    const drinkId = drinks.idDrink 
    document.getElementById('drinkid').innerHTML = drinkId;
    
    const drinkName = drinks.strDrink 
    document.getElementById('drinkname').innerHTML = drinkName;
    
    const drinkCat = drinks.strAlcoholic 
    document.getElementById('drinkcate').innerHTML = drinkCat;
    
   /* const drinkImg =  document.getElementsByTagName('img')
    drinkImg.src = drinks.strDrinkThumb
    document.getElementById('imgs').innerHTML = drinkImg;

    const drinkImg =  document.createElement('img')
    drinkImg.src = drinks.strDrinkThumb
    document.getElementById('imgg').innerHTML = drinkImg;*/

/*  if (drinkCat == "Alcoholic"){
      document.getElementById('drinkcate').style.color= "red"
}!
   
      else{
         document.getElementById('drinkcate').style.color= "grey";
      }
   
   }

   */

/*//api to get btc prices  
   const url = ("https://api.nomics.com/v1/currencies/ticker?key=e9ed3b4830661a8b086a69980d1b14df58ee8e57&ids=BTC")
   fetch(url)
         .then((res) => {
      if(res.ok){
         return res.json()
      }
      //else throw new Error(console.error(err))
   })

   .then(data => {
      console.log(data)
      displayBtc(data)
   })

   function displayBtc(data) {
      const btc = data[0]
      console.log(btc)
      
      //name of the symbol
      const symbol = btc.symbol
      document.getElementById('symbol').innerHTML = symbol;

      //name
      const name = btc.name
      //btc.name =
      document.getElementById('name').innerHTML = name;
        
      //current price 
      const Price = btc.price
      //const prices = Number ((btc.price).toFixed(2))
      //console.log(typeof prices)      
      document.getElementById('current').innerHTML = '$' + Price;  


       //name of the coin price change
       const priceChange = btc.price_change
       document.getElementById('pricechange').innerHTML = '$' +  priceChange;
    
      
      //name of the coin price in last market 
      const marketValue = btc.market_cap
      document.getElementById('marketvalue').innerHTML = '$' + marketValue;
   
      //name of the coin marekt cap
      const marketSupply = btc.max_supply
      document.getElementById('marketsupply').innerHTML ='$' + marketSupply;

     if( id <= 23000 ){
      document.getElementById('btcid').style.color = "red";
     }

     else{
      document.getElementById('btcid').style.color= "green"
      }
    }
*/

// const url = 'https://dummy.restapiexample.com/api/v1/employees'

// fetch(url)
//   .then((res) => {
//     if (res.ok) {
//       return res.json()
//     }
//   })

//   .then((data) => {
//     console.log(data)
//     displaydata(data)
//   })

//   .catch((error) => {
//     console.log('This is error ' + error)
//   })

// function displaydata(data) {
//   const employees = data[0]

//   const id = data.employee_age
//   console.log(data)
// }
