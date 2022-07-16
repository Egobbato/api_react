import { useEffect } from "react"
import { useState } from "react"
import './index.css'

function ApiBD (){

    const [repositorio,Setrepositorio] = useState ([])

    useEffect ( ()=>{
        fetch ('https://www.breakingbadapi.com/api/characters')
        // fetch ('https://rickandmortyapi.com/api/character')
        .then((response)=>response.json())
        .then((data) => Setrepositorio(data))

    
    },[])


    return(
<>
<div className="repositorio">
    <h1>Breaking Bad</h1>
    
        <ul>
            {repositorio.map(repo =>(
                <li key={repo.char_id}><img className="imagem" src={repo.img}/>
                <strong>
                <p>{repo.name}</p> </strong> <p>{repo.nickname}</p> 
                </li>
            ))}
            
        </ul>
        <br></br>
        </div>
        </>
    )
};

export default ApiBD