import '../App.css'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { CreateContentModal, Input } from '../components/CreateContentModal';
import { useRef, useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
import { Searchbar } from '../icons/Searchbar';

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const contents = useContent();

  const searchQueryRef = useRef("");


  return (
    <div className="flex">
      <Sidebar />
      
      <div className="flex-1 p-6 ml-72">
        <CreateContentModal 
          open={modalOpen} 
          onClose={() => setModalOpen(false)}
        />

        <div className="fixed mb-6 flex justify-between items-center bg-white  w-[78%]">
          <h1 className="text-2xl font-bold text-gray-800">My Content</h1>

          <div className="w-[30%] search flex justify-evenly items-center  h-14 border-gray-300 border-2 rounded-full">
            <Input widthh="-[70%]"  placeholder='Search' type="string" reference={searchQueryRef} />
            <Searchbar/>
          </div>
          
          <div className="flex gap-3">
            <Button
              variant="primary"
              size="md"
              onClick={() => setModalOpen(true)}
              text="Add Content"
              startIcon={<PlusIcon />}
            />
            <Button
              variant="secondary"
              size="sm"
              onClick={() => { console.log("Share clicked"); }}
              text="Share"
              startIcon={<ShareIcon />}
            />
          </div>
        </div>

        

        <div className='mt-24'>
          <hr />

          <div className=" mt-3 grid grid-cols-auto-fit gap-6">
          {contents.map(({ type, link, title }, index) => (
            <Card key={index} type={type} link={link} title={title} />
          ))}
        </div>

        </div>
        
      </div>
    </div>
  )
}