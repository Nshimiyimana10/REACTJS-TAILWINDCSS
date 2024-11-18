import Header from './assets/components/Header';
import SayHello from './assets/components/SayHello';
import List from './assets/components/List';
import Counter from './assets/components/Counter';
import ColorChange from './assets/components/ColorChange';
import ToDoList from './assets/components/ToDoList';


function App() {
  
  return (
    <>
    <Header/>
    <SayHello name ="Peter" age ={25} />
    <List/>
    <Counter/>
    <ColorChange/>
    <ToDoList />
    </>
  )
      
}

export default App
