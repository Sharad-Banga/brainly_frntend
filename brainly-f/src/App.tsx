
import './App.css'
import { Card } from './components/card'
import { Button } from './components/button'
import { PlusIcon } from './icons/PlusIcon';
 function App() {

  return (
    <>
      <Button variant="primary" size="lg" onClick={()=>{console.log("chl pea");
      }} text="ss" startIcon={<PlusIcon/>} /> 

      <Button variant="secondary" size="md" onClick={()=>{console.log("chl pea");
      }} text="ss" startIcon={<PlusIcon/>} />

      <br />
      
      <Card />
 
    </>
  )
}

export default App
