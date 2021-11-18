import { useState, useEffect } from 'react'
const Home = ()=> {
    
    const [pokemons, setPokemon] = useState([])
    const [id, setId] = useState(1)

    useEffect(() => { // => componentDidUpdate mais seulement le state counter
       fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(result => {
        setPokemon([result] )   
      }) 
      
      }, [id])

    const handleButtonClick = () => {
        let randomId = Math.floor(Math.random() * (898 - 1 +1)) + 1;
        setId(randomId)
        console.log(id);
        console.log("id");
    }
      
    return(
        <>
            <div className="container">
                    {pokemons.map(pokemon => (
                        <div key={pokemon.name} className="pokemon">
                            <img src={pokemon.sprites.other["official-artwork"].front_default} />
                            <div className="description">
                                <h2 className="pokemon_name">{pokemon.name}</h2>
                                <p>height : {pokemon.height}</p>
                                <p>weight : {pokemon.weight}</p>
                                <p>Types : </p>
                                <ul>{pokemon.types.map(pokemonType => (
                                    <li key={pokemonType.type.name}>{pokemonType.type.name}</li>
                                    // <p>{pokemonType.type.name}</p>
                                    // {console.log(pokemonType.type.name);}
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
            </div>
            <button className="random_btn" onClick={handleButtonClick}>Random pokemon</button>
        </>
    )
    
}
export default Home;