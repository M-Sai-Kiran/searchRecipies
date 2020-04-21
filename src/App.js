import React,{useEffect,useState} from 'react';
import './App.css';
import Recipie from './recipies';
import axios from 'axios';

function App() {
  const APP_ID = "78b4ed9b" //from edamam
  const APP_KEY =  "5bb15587620b2e5c0a4def906ab0fe06";

  let [recipies,setRecipies] = useState([]);
  let [search,setSearch]  = useState('');
  let [query,setQuery] = useState('chicken');

  let fetchRecipies =async ()=>{
    console.log('started fetching data')
    let response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //let response =await axios.get('chicken.json'); //this is for practice as there is an hourly limit for api requests.
    let data = response.data;
    setRecipies(data.hits);
  }
  useEffect(()=>{
    fetchRecipies()
  },[query]);

  let updateSearch = e =>{
    setSearch(e.target.value);
  }

  let updateQuery = e=>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="searchForm" onSubmit={updateQuery}>
        <input className="search-bar" type="text" value = {search} onChange={updateSearch}>
        </input>
        <button className="search-button" >Submit</button>
        
      </form>
      <div className="recipe"  >
      {
        
        recipies.map(recipe=>(
          
            <Recipie key={recipe.recipe.label} name={recipe.recipe.label} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients} calories={recipe.recipe.calories} weight={recipe.recipe.totalWeight} time={recipe.recipe.totalTime}></Recipie>
          
        ))
        
      }
      </div>
    </div>
  );
}

export default App;
