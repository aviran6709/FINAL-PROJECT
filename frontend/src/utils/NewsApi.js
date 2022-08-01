
   const  getNewsRequest = (searchInput)=>{
    const cornetDate = new Date();
    let startSearch =  new Date(); 
    startSearch.setDate(startSearch.getDate() - 7)

console.log();
            const url = 'https://nomoreparties.co/news/v2/everything?' +
            `q=${searchInput}&` +
            `from=${startSearch.toISOString()}&` +
            `to=${ cornetDate.toISOString()}&`+
            'sortBy=popularity&' +
            'apiKey=9c2c6c1be55249cfad5a81d71ce5caf2';


          return  fetch(url)
            .then(function(res) {
              if(res.ok){
          return res.json()
              }
            }).catch(console.log);
        
          }

export default getNewsRequest