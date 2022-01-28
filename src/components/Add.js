import React ,{useState} from 'react'
import { ResultCard } from './ResultCard';

export const Add = () => {
    const [query,setQuery] = useState("");
    const [results,setResult] = useState([]);

    const onChange = e => {
        e.preventDefault();

        setQuery(e.target.value); 
        console.log(query)
        fetch(`
        https://imdb-internet-movie-database-unofficial.p.rapidapi.com/search/=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1&include_adult=false&query=${e.target.value}`)
        .then(res => res.json())
        .then((data) => {
            console.log(data);
            if(!data.errors){
                setResult(data.results)
            }else{
                setResult([]);
            }
        });
    }
    
    return (
        <div className="add-page">
            <div className="container">
                <div className="add-content">
                    <div className="input-wrapper">
                    <input type="text" placeholder='Search for a movie' value={query} 
                    onChange={(e)=> onChange(e)} />
                    </div>

                    {results.length > 0 && (
                        <ul className="results">
                            {results.map((movie) =>(
                               <li key={movie.id}>
                                   <ResultCard movie={movie}/>
                               </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}
