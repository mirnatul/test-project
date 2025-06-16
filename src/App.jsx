import Demo from "./components/Demo"
import Person from './components/Person/Person';

function App() {

  return (
    <>
      {/* <Demo name="Lipon" job="Developer"></Demo> */}
      <Person person={{ name: 'Lipon', job: 'Developer' }}></Person >
    </>
  )
}

export default App
