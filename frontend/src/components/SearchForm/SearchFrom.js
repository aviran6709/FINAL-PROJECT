
import React from "react";
const SearchFrom = (props) => {
  //btn color change by click
 const [btnColor,setBtnColor] = React.useState(false);
 const [keyWord, setKeyWord] = React.useState("");

 const handleChange = (e) => {
  const {value } = e.target;
  setKeyWord(
    value,  
  )
}


 const handleSubmit=(e)=>{
  e.preventDefault()
  setBtnColor(true)
props.getNews(keyWord)
 }


  return (
    <section className="search-from">
   
      <h1 className="search-from__tittle">What's going on in the world?</h1>
      <p className="search-from__sub-tittle">
  
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <form action="#" method="POST" onSubmit={handleSubmit} className="search-from__search-bar" >
        <input className="search-from__input" placeholder="Enter topic"  name="searchBar"
              required
              minLength="2"
              maxLength="40"
              value={keyWord?keyWord:""}
              onChange={handleChange}></input>
        <button className={!btnColor?"search-from__btn":"search-from__btn search-from__btn_clicked"} 
         >Search</button>
      </form>
    </section>
  );
};

export default SearchFrom;
