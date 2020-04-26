/**
 * Para criar: name, email, password
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  name?: string;
  email: string; //-> depois dos dois pontos sempre podemos usar o | para "OR"
  password: string;
  techs: Array<string | TechObject>; // -> Array de tipos variávels
  //techs: string[] -> Array de string
}


export default function createUser({ name = '', email, password}: CreateUserData) {
  const user = {
    name,
    email,
    password
  }
  
  return user;
}