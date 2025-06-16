import Counter from "./components/Counter/Counter";
import Demo from "./components/Demo"
import Ehandler from "./components/Ehandler/Ehandler";
import Person from './components/Person/Person';
import TestUseEffect from "./components/TestUseEffect/TestUseEffect";
import User from "./components/User/User";

function App() {
  const users = [
    { id: 1, name: 'Ana de Armas', job: 'Actress' },
    { id: 2, name: 'Gigi Hadid', job: 'Model' }
  ]

  return (
    <>
      {/* <Demo name="Lipon" job="Developer"></Demo> */}
      {/* <Person person={{ name: 'Lipon', job: 'Developer' }}></Person > */}
      {/* {
        users.map(user => <User key={user.id} user={user}></User>)
      } */}
      {/* <Ehandler></Ehandler> */}
      {/* <Counter></Counter> */}
      <TestUseEffect></TestUseEffect>
    </>
  )
}

export default App
