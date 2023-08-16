import './App.css'
import Navbar from './components/navbar/nav'
import Addnote from './components/addnote/add'

function App() {

  
  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>

      <main>
        <Addnote></Addnote>
      </main>
    </>
  )
}

export default App
