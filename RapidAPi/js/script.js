// 'use strict'

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '79184f2c7bmsh609fbeb4ab89ed4p14e8a4jsn4ca0e725e1d5',
// 		'X-RapidAPI-Host': 'bloomberg-market-and-financial-news.p.rapidapi.com'
// 	}
// };

// fetch('https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3CREQUIRED%3E', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


    // var url = 'https://bloomberg-market-and-financial-news.p.rapidapi.com/market/auto-complete?query=%3CREQUIRED%3E'

    // var apiKey = '79184f2c7bmsh609fbeb4ab89ed4p14e8a4jsn4ca0e725e1d5'

    //  var host = 'bloomberg-market-and-financial-news.p.rapidapi.com'
     
    // //  function RapidAPI(){

    //  fetch(url, {
    //     method: 'GET',
    //     headers:{
    //         'X-RapidAPI-Key': `${apiKey}`,
    //         'X-RapidAPI-Host': `${host}`
    //     }
    
    //   })

    //   .then((response) => {
    //     if(response.ok){
    //         response.json()
    //         .then((response) => console.log(response.news))
    //         // .then((response)=> console.log(response.news))

    //         let dNews = response.news 
            

    //         if(dNews.length > 0) {
    //             var displayNew = ""
    //         }


            // dNews.forEach(mobile => {
            //     for (let key in mobile) {
            //         console.log(`${key}: ${mobile[key]}`);
            //     }
            // });


            // for loops 
    //         dNews.forEach((dNews => {
    //             displayNew += "<tr>"
    //             displayNew += `<td>${dNews.card} </td>`
    //             displayNew += `<td>${dNews.date} </td>`
    //             displayNew += `<td>${dNews.id} </td>`
    //             displayNew += `<td>${dNews.title} </td>`; "</tr>"
                  
    //         })


            
    //    )}

        
    //   document.getElementById('news').innerHTML = displayNew
    // //   console.log(dNews.card)


    //   })
      

    //   .catch(err => console.log(err))
    
      // }

    
    // RapidAPI()