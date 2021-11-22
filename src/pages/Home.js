import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../Contexts/User'
import { Link } from 'react-router-dom'
const Home = ()=> {
    
    const [pokemons, setPokemon] = useState(null)
    const [id, setId] = useState(1)
    const {isLogged, setIsLogged} = useContext(UserContext)

    useEffect(() => {
       fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(response => response.json())
      .then(result => setPokemon(result)) 
      
      }, [id])

    const handleButtonClick = () => {
        let randomId = Math.floor(Math.random() * (898 - 1 +1)) + 1;
        setId(randomId)
        console.log(id);
        console.log("id");
    }

    if(!pokemons) {
        return null
    }

    return(
        <>
            {isLogged 
                && <>
                    <div className="container">
                                <div className="pokemon">
                                    <img src={pokemons.sprites.other["official-artwork"].front_default} alt={pokemons.name}/>
                                    <h1 className="pokemon_name">{pokemons.name}</h1>
                                    <div className="description">
                                        <p>height : {pokemons.height}</p>
                                        <p>weight : {pokemons.weight}</p>
                                        <div>
                                            <p>Types : </p>
                                            {pokemons.types.map(pokemonType => (
                                                <p key={pokemonType.type.name}><span>. </span>{pokemonType.type.name}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                    </div>
                    <button className="random_btn" onClick={handleButtonClick}>Random pokemon</button>
                </>
            }
            {!isLogged 
                && <div className="container_login">
                    <h1>veiller vous connecter</h1>
                    <Link to ="/Login"><button>Go to Log in</button></Link>
                </div>
            }
        </>
    )
    
}
export default Home;