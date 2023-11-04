import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Detail = () => {
   const { detailId } = useParams();
   const [character, setCharacter] = useState({});

   useEffect(() => {
      const URL = "http://localhost:3001/rickandmorty"
      axios(`${URL}/character/${detailId?.id}`)
         .then(({ data }) => {
            if (data.name) {
               setCharacter(data);
            } else {
               alert("No hay personajes con ese ID");
            }
         })
         .catch(() => {
            console.log('Se rompio')
         })

      return setCharacter({});
   }, [detailId?.id]);

   return (
      <div>
         {character.name ? (
            <>
               <h1>{character.name}</h1>
               <p>{character?.status}</p>
               <p>{character?.species}</p>
               <p>{character?.gender}</p>
               <p>{character?.origin?.name}</p>
               <img src={character?.image} alt="" />
               <button>
                  <Link to='/home'>HOME</Link>
               </button>
            </>
         ) : (
            <h3>Loading...</h3>
         )
         }

      </div>
   );
};

export default Detail;

/* {character.name ? (
   <>
      <h1>{character?.name}</h1>
      <p>{character?.status}</p>
      <p>{character?.species}</p>
      <p>{character?.gender}</p>
      <p>{character?.origin?.name}</p>
      <img src={character?.image} alt="" />
      <button>
         <Link to='/home'>HOME</Link>
      </button>
   </>
   ) : (
   <H3>Loading...</H3>
      )
} */