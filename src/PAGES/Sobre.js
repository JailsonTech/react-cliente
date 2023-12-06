import { useState, useEffect } from "react";

const Sobre = () => {
   const [count, setCount] = useState(0);
   const[count2, setCount2] = useState(0);

   useEffect(( ) => {
      console.log('Rodando!');
   });
   useEffect(() => {
      console.log('contador foi clicado!');
   }, [count]);
   useEffect(() => {
      console.log('Só executará uma vez!');
   }, []);

   return(
      <div>
         <h1>Sobre</h1>
         <p>Contador A: {count}</p>
         <p>Contador B:{count2}</p>
         <button onClick={() => setCount((prevCount) => prevCount+1)}>Contador A</button>
         <button onClick={() => setCount2((prevCount) => prevCount+1)}>Contador B</button>
      </div>
   )
};

export default Sobre;