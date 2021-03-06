import React,{useState} from "react"
import axios from "axios";
import Search from "./components/Search"
import Results from "./components/Results"

function App() {
  const[state, setState] = useState ({
    s:"",
    results:[],
    selected:{}
  })
  const apiurl ="https://www.omdbapi.com/?apikey=4a47d759";
  

  const search = (e) => {
    if(e.key==="Enter"){
      axios(apiurl + "&s=" + state.s)
      .then(({data})=>{
        //console.log(data);

        let results= data.Search;

        setState(prevState =>{
          return{...prevState, results:results}
        })
      })
    }
  }


  const handleInput = (e) => {
    let s= e.target.value;

    setState(prevState =>{
      return{...prevState, s: s}
    })
  }



  return (
    <div className="App">
      <header className="App-header">
        <h1>Find Movies</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search}/>
        <Results results={state.results}/>
      </main>
    </div>
  );
}

export default App
