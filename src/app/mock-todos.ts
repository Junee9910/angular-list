import { v4 as uuidv4 } from 'uuid';
import { Todos } from './todos';

export const TODOS:Todos[]=[
  {id:uuidv4(),title:"One",completed:true},
  {id:uuidv4(),title:"Two",completed:true},
  {id:uuidv4(),title:"Three",completed:false}
];

export default TODOS;