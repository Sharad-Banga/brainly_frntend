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
  const { contents, setContents } = useContent();


  const searchQueryRef = useRef("");


  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found!");
        return;
      }
  
      const response = await fetch(`http://localhost:3000/api/v1/content/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
  
      if (response.ok) {
        setContents((prevContents) => prevContents.filter((content) => content._id !== id));
        console.log("Deleted successfully");
      } else {
        const errorResponse = await response.json();
        console.error("Failed to delete content:", errorResponse.message);
      }
    } catch (error) {
      console.error("Error deleting content:", error);
    }
  };
  

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

          <div className=" mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-auto-flow-dense">
          {contents.map(({_id, type, link, title  }, index) => (
            <Card key={_id} id={_id} type={type} link={link} title={title}  onDelete={handleDelete}/>
          ))}
        </div>

        </div>
        
      </div>
    </div>
  )
}