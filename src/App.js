import axios from 'axios'
import './App.css';
import React, { useState } from 'react'
import Chip from '@material-ui/core/Chip'
import PokCard from './component/PokCard';
import SearchIcon from '@material-ui/icons/Search';
import Chips from './component/Chips';

// Web App Link           https://pokedex-b35f4.web.app/
function App() {
  const [pokemon, setpokemon] = useState('')
  const [pokemon_data, setpokemon_data] = useState([])
  const [pokemon_type, setpokemon_type] = useState([])
  const la = ['Fire', 'Water', 'Psychic', 'Ice', 'Electric', 'Poison', 'Flying', 'Ground', 'Grass', 'Ghost']
  const [state, setstate] = useState(false)
  const [state1, setstate1] = useState(false)

  // To get Pokemon Stats
  const getpokemon = async () => {
    const pk_data = []
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      const res = await axios.get(url)
      pk_data.push(res.data)
      setpokemon_data(pk_data)

    } catch (error) {
      alert('You have entered the wrong name. Please Check the name of the Pokemon')
    }
  }
  const handle_submit = (e) => {
    e.preventDefault()
    if (pokemon !== '') {
      setstate(true)
      setstate1(false)
      getpokemon()
    }
    else {
      alert('Please enter the name to get the Pokemon')
    }
  }

  // To get Pokemon Types Name
  const getpokemonType = async (e) => {
    try {
      e.preventDefault()
      setstate(false)
      setstate1(true)
      const url = `https://pokeapi.co/api/v2/type/${e.target.innerHTML.toLowerCase()}`
      const res = await axios.get(url)
      setpokemon_type(res.data.pokemon)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <div className="pokemon__container">
        <h1 className='title'>PokeDex</h1>
        <div className="search__container">
          <form>
            <input type="text" className='input_field' id="outlined-basic" variant="outlined" onChange={(e) => setpokemon(e.target.value.toLowerCase())} placeholder='Enter your pokemon name' />
            <button className='search_btn' variant="contained" color="primary" onClick={handle_submit} type="submit">
              <SearchIcon></SearchIcon>
            </button>
          </form>
        </div>

        {/* Chips List */}
        <div className="chips_container">
          {
            la.map((l, index) => (
              <div className="mini_chip">
                <Chip
                  label={l}
                  onClick={getpokemonType}
                  key={index}

                />
              </div>
            ))
          }
        </div>

        {/* [Passing Pokemon Types name to Chips] */}
        <Chips data={pokemon_type} state={state1}></Chips>

        {/* Pokemon Stats Card */}
        {
          pokemon_data.map((p, index) => (
            <PokCard
              data={p}
              state={state}
              key={index}
            >
            </PokCard>
          ))
        }
      </div>
    </div >
  );
}

export default App;
