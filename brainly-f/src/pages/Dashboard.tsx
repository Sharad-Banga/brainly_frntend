import '../App.css'
import { Card } from '../components/Card'
import { Button } from '../components/Button'
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { CreateContentModal } from '../components/CreateContentModal';
import { useState } from 'react';
import { Sidebar } from '../components/Sidebar';
import { useContent } from '../hooks/useContent';
// import { Searchbar } from '../icons/Searchbar';

export function Dashboard() {
  
  const [modalOpen, setModalOpen] = useState(false);
  const { contents, setContents } = useContent();


  // const searchQueryRef = useRef("");


  const handleDelete = async (id: string) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("No token found!");
        return;
      }
  
      const response = await fetch(`https://aristol-be.onrender.com/api/v1/content/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
      });
  
      if (response.ok ) {
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


  const handleShare = () =>{

  }
  

  return (
    <div className="flex bg-[url('./images/bg-2.png')] h-screen flex-col">
      <Sidebar />
      
      <div className="flex-1 p-6 ml-72">
        <CreateContentModal 
          open={modalOpen} 
          onClose={() => setModalOpen(false)}
        />

        <div className="fixed  flex justify-between items-center   w-[78%]">
          <h1 className="text-2xl font-bold text-white">My Content</h1>

          {/* <div className="w-[30%] search flex justify-evenly items-center  h-14 border-gray-300 border-2 rounded-full">
            <Input widthh="-[70%]"  placeholder='Search' type="string" reference={searchQueryRef} />
            <Searchbar/>
          </div> */}
          
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
              onClick={handleShare}
              text="Share"
              startIcon={<ShareIcon />}
            />
          </div>
        </div>

        

        <div className='mt-20'>
          <hr />

          <div className=" mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 grid-auto-flow-dense">
          {contents.map(({_id, type, link, title  }) => (
            <Card key={_id} id={_id} type={type as "twitter" | "youtube" | "Link"} link={link} title={title}  onDelete={handleDelete}/>
          ))}
        </div>

        </div>
        
      </div>
      <div className="mt-auto p-4 text-center text-white text-sm ">
                Developed and Designed By <a className="text-[#2AB7B1] hover:text-[#1e8682] transition-colors duration-300" href="https://x.com/sharad_banga" target="_blank" rel="noopener noreferrer">sharad banga</a>
              </div>
    </div>
  )
}