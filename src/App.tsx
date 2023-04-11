import Navbar from './components/Navbar/Navbar';
import Herobanner from './components/Herobanner/Herobanner';
import { Globalstyling } from './styles';


const App: React.FunctionComponent = () => {


  return (
    
  
    <div className="App">
     
        <Globalstyling />
        <Navbar />
        <Herobanner />
    </div>
  )
}

export default App
