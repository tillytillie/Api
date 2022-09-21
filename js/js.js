var coinUrl = 'https://api.coinranking.com/v2/coins';
 var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
 var ApiKey = 'coinrankinga60119611687bbbf68c115c3e6b329dec954189092f973df';

fetch(coinUrl, {
    method:'GET',
    headers:{ 
        'Content-Type': 'Application/json',
        'X-access-token': `${ApiKey}`,
          'Origin': 'https://cryptopricesapi.netlify.app',
          'Access-Control-Allow-origin': 'https://cryptopricesapi.netlify.app'
             
        }
    } 
)
        // .then((response) => {
        //     if(response.ok) {
        //         response.json()
                
        //     .then((data) => {
        //         console.log(data)
        //     })
        //   }
        //         else throw new Errors(console.log(err))
        //  }))

    

// "public_key": YOUR_PUBLIC_KEY, //string
// "private_key": YOUR_PRIVATE_KEY, //string
// "phone": Data recipient phone number, //string
// "data_id": DATA_ID, //integer... See table below for list of all Data IDs
// var url = ' https://speedydata.com.ng/api/data-order/create'


//  fetch(url, {
//     method:'POST',
//     // mode: 'no-cors', // no-cors, *cors, same-origin
//     // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     // credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//         'Content-Type': 'Application/json',
//         // 'X-access-token': `${ApiKey}`,
//         "public_key": 'pub_mO3NrXc4QvvWoqmiIpR3',
//         "private_key": 'pri_2IcdliZYbOET1yLljWzfKyueHcXctH',
//         "phone": '08035583068',
//         "data_id": 1,
//         //  'Origin': 'https://cryptopricesapi.netlify.app',

//         'Access-Control-Allow-origin': '*'
         
//     } 
//  }
//  .then((response) => {
//     if(response.ok) {
//         response.json()
        
//     .then((json) => {
//         console.log(json)
//     })
// }
//         else throw new Errors(console.log(err))
//  }))
 


//coins cors here 


// jshint esnext: true
// This API key is only for testing, don't use this in production


// const apiKey = 'coinrankinga60119611687bbbf68c115c3e6b329dec954189092f973df';
// const url = 'https://api.coinranking.com/v2/coins';
// const resultsContainer = document.getElementById('results');
// const queryString = new URLSearchParams({
//   'x-access-token': apiKey,
//   search: 'Bit',
// });

// // Add the API key to the querystring
// fetch(`${url}?${queryString}`)
//   .then((response) => response.json())
//   .then((response) => {
//     if (response.status === 'success') {
//       const html = response.data.coins.map((coin) => `
//         <tr>
//           <td>${coin.rank}</td>
//           <td>${coin.name}</td>
//           <td>${coin.price}</td>
//         </tr>
//       `);

//       resultsContainer.innerHTML = html.join('');
//     } else {
//       // Show error message if the request failed
//       resultsContainer.innerHTML = `<tr><td colspan="3">${response.message}</td></tr>`;
//     }
//   })
//   .catch((error) => {
//     console.error(error);
//   });
