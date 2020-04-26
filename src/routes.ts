import { Request, Response } from 'express';
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: 'luiz',
    password: '1234',
    techs: [
      'Node', 
      'React',
      { title: 'Javascript', experience: 90}
    ]
  });

  console.log(user.email)

  return response.json({ message: 'Hello World' });
}
