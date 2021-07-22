import { v4 as uuidv4 } from 'uuid';

const todos=[
  {id:uuidv4(),title:"One",isCompleted:true},
  {id:uuidv4(),title:"Two",isCompleted:true},
  {id:uuidv4(),title:"Three",isCompleted:false}
];

export default todos;