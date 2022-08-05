const customFetch = (url, headers) => {

    return fetch(url, headers).then((res) => {
        if (res.ok) {  return res.json(); }
        else { 
            Promise.reject(res.statusText); }
    })

}
class Api {
    constructor({ baseUrl, headers }) {
        this.baseUrl = baseUrl;
        this.headers = headers;
    }

    checkToken =(token)=>{
    return customFetch(`${this.baseUrl}/users/me`, { headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    Authorization:`Bearer ${token}`
  }})
}

    getUserInfo = ()=>{
        return customFetch(`${this.baseUrl}/users/me`, { headers: this.headers }) 
    }

    getArticle =()=>{
        return customFetch (`${this.baseUrl}/articles`, { headers: this.headers })
    }
    unSavedArticle =(itemId)=>{
        return customFetch (`${this.baseUrl}/articles/${itemId}`, {method:"delete", headers: this.headers })
    }





  saveArticle =(data)=> {

        return customFetch(`${this.baseUrl}/articles`, {
            
            method: "POST",
            headers: this.headers,
            body: JSON.stringify({
                keyword: data.keyword,
                title: data.title,
                content: data.content,
                publishedAt: data.publishedAt,
                source: data.source.name,
                url: data.url,
                urlToImage: data.urlToImage 
             
            })
        })
    }
     signup =(data)=>{

        return customFetch(`${this.baseUrl}/signup`,{
            method:"POST",
            headers: this.headers,
            body: JSON.stringify ({
                name:data.name,
                email:data.email,
                password:data.password

            })
    
    })
         } 

         signin = (data)=>{
            return customFetch(`${this.baseUrl}/signin`,{
                method:"POST",
                headers: this.headers,
                body:JSON.stringify(
                 { 
                    email:data.email,
                    password:data.password}
                )
            })}



}






 const api = new Api({
    // baseUrl: `https://api.aviran.students.nomoreparties.sbs`,
    baseUrl: `http://localhost:3003`,
    headers: {
       // 'Access-Control-Allow-Origin': '*',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        authorization:`Bearer ${localStorage.getItem("jwt")}`,
      }
});

export default api