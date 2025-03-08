
import '../App.css'

import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { CreateContentModal } from '../components/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
 export function Dashboard() {
  const [modalOpen , setModalOpen] = useState(true);

  const contents = useContent();

  return (
    
    <>

      <Sidebar />
    
      <div className="maincontent ml-72">
          
          <CreateContentModal open={modalOpen} onClose={()=>{
            setModalOpen(false);
          }}/>


          <div >

              <div className="buttons  flex flex-row m-2 justify-end gap-2">
                  <Button  variant="primary" size="md" onClick={()=>setModalOpen(true)} text="Add Content" startIcon={<PlusIcon/>}  /> 

                  <Button variant="secondary" size="sm" onClick={()=>{console.log("chl pea");
                  }} text="Share" startIcon={<ShareIcon/>} />
              </div>

        
        
              <div className='flex gap-3 ml-5'>
                  {/* { <Card type="twitter" link="https://x.com/sharad_banga/status/1895133785630650598" title="first tweet" />

                  <Card type="youtube" link="https://youtu.be/UYmwLk9Sja4?si=xMx_UiUC2kz1hm1Q" title="first video" /> } */}

                  {

                    contents.map(({type, link, title}) => <Card type={type} link={link} title={title} />)
                  }

              </div>


          </div>


      </div>

    </>
  )
}



