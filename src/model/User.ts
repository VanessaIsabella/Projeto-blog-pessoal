import Postagem from "./Postagem";

interface User{
    postagem?: Postagem[];
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto: string;
  }
  
  export default User