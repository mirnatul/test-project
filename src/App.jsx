import Demo from "./components/Demo"
import Person from './components/Person/Person';
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
      {
        users.map(user => <User key={user.id} user={user}></User>)
      }
    </>
  )
}

export default App
