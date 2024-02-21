
import Greeting1 from "./components/greetings/Greeting1"
import Greeting from "./components/greetings/Greeting"
import Loginpage from "./components/loginpage/Loginpage"
import Counter from "./components/counters/Counter"
import Counter1 from "./components/counters/Counter1"

function App() {
  return (
    <>
   {/* <Greeting1 name ={'sali'}/> */}

   {/* <Greeting name ={"jake"}/> */}
    
    {/* <Loginpage/> */}

   <Counter initialvalue={0}/>

   <Counter1 initialvalue={3}/>
   
    </>
  )
}

export default App
