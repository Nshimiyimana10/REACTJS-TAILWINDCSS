import Header from './assets/components/Header'
import SayHello from './assets/components/SayHello'
import List from './assets/components/List'
import Counter from './assets/components/Counter'


function App() {
  
  return (
    <>
    <Header/>
    <SayHello name ="Peter" age ={25} />
    <List/>
    <Counter/>
    </>
  )
      
}

export default App
