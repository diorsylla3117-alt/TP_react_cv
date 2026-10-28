
import './App.css';
import InfoPerso from './composants/infoperso'
import Competence from './composants/competence'
import Experience from './composants/experience'
function App() {
  return (
    <div>
        <h1>Mon cv</h1>
        <InfoPerso/>
        <Competence/>
        <Experience/>
    </div>
  )
}
export default App
