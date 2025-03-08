
import './App.css'
import { Card } from './components/Card'
import { Button } from './components/Button'
import { PlusIcon } from './icons/PlusIcon';
import { ShareIcon } from './icons/ShareIcon';
import { CreateContentModal } from './components/CreateContentModal';
import { useState } from 'react';
 function App() {
  const [modalOpen , setModalOpen] = useState(true);
  return (
    
    <>
    <CreateContentModal open={modalOpen} onClose={()=>{
      setModalOpen(false);
    }}/>
      <div>

      <Button  variant="primary" size="md" onClick={()=>setModalOpen(true)} text="Add Content" startIcon={<PlusIcon/>}  /> 

      <Button variant="secondary" size="sm" onClick={()=>{console.log("chl pea");
      }} text="Share" startIcon={<ShareIcon/>} />

      <br />
      
      <div className='flex gap-3'>
          <Card type="twitter" link="https://x.com/sharad_banga/status/1895133785630650598" title="first tweet" />

          <Card type="youtube" link="https://youtu.be/UYmwLk9Sja4?si=xMx_UiUC2kz1hm1Q" title="first video" />
          </div>
      </div>
 
    </>
  )
}

export default App
