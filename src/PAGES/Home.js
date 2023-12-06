import {useState} from "react";

const Home = () => {  
   const [nome, setNome] = useState();
   const [email, setEmail] = useState();
   const [senha, setSenha] = useState();

   const enviarDados = (e) => {
      e.preventDefault();
      console.log(`Usuário ${nome} com email ${email} e senha ${senha}`);
   }
   return (
      <div>
         <h1>Home</h1>
         <p>Nome digitado: {nome}</p>
         <form onSubmit={enviarDados}>
            <div>
               <label htmlFor ="nome">Nome:</label>
               <input type="text" id="nome" name="nome" placeholder="Digite seu nome" onChange={(e) => setNome(e.target.value)}/>
            </div>
            <div>
               <label htmlFor ="email">Email:</label>
               <input type="text" id="email" name="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div>
               <label htmlFor ="nome">Senha:</label>
               <input type="password" id="senha" name="senha" placeholder="Digite sua senha" onChange={(e) => setSenha(e.target.value)}/>
            </div>
            <div>
               <input type="submit" value="Cadastrar"/>
            </div>
         </form>
      </div>
   );
}

export default Home;
