import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import { action, Orginals,ComedyMovie , HorrorMovie,RomanceMovies,ActionMovies,Documentaries } from './urls'


function App() {
  return (
     <div>
       <NavBar />
       <Banner/>
       <RowPost url={action} title='Netflix Orginals'/>
       <RowPost url={Orginals} title='Actions' isSmall/>
       <RowPost url={ComedyMovie} title='comedy Movie' isSmall/>
       <RowPost url={HorrorMovie} title='Horror Movie' isSmall/>
       <RowPost url={RomanceMovies} title='Romantic Movie' isSmall/>
       <RowPost url={ActionMovies} title='Action Movie' isSmall/>
       <RowPost url={Documentaries} title='Documentaries Movie' isSmall/>
     </div>
  );
}

export default App;
