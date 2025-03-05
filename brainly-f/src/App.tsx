
import './App.css'
import { Card } from './components/Card'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
 function App() {

  return (
    <>
      <Button variant="primary" size="md" onClick={()=>{console.log("chl pea");
      }} text="Add Content" startIcon={<PlusIcon/>} /> 

      <Button variant="secondary" size="sm" onClick={()=>{console.log("chl pea");
      }} text="Share" startIcon={<ShareIcon/>} />

      <br />
      
      <Card />
 
    </>
  )
}

export default App
