import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css'
import App from './App.tsx'
import PokemonInfo from './routes/PokemonInfo.tsx';
import { PokemonModify } from './routes/PokemonModify.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/pokemonInfo/:id" element={<PokemonInfo/>}/>
      <Route path="/pokemonModify/:id" element={<PokemonModify/>}/>

      

    </Routes>
  </BrowserRouter>
)
