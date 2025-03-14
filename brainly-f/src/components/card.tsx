import { ShareIcon } from "../icons/ShareIcon";
import { TwitterIcon } from "../icons/TwitterIcon"; // Assuming you have a Twitter icon
import { YtIcon } from "../icons/YtIcon";

interface CardProps {
  title: string;
  link: string;
  type: "twitter" | "youtube";
}

export const Card = ({ title, link, type }: CardProps) => {
  // Function to get the icon based on content type
  const getTypeIcon = () => {
    if (type === "youtube") return <YtIcon  />;
    if (type === "twitter") return <TwitterIcon  />;
    return null;
  };

  return (
    <div className="bg-white  rounded-lg shadow-md overflow-hidden border border-gray-200 transition-all hover:shadow-lg">
      {/* Card Header */}
      <div className="p-4  border-b border-gray-100">
        <div className="flex h-5 justify-between items-center">
          <div className="flex items-center gap-2 font-medium truncate" title={title}>
            {getTypeIcon()}
            <span className="text-gray-800">{title}</span>
          </div>
          
          <div className="flex  items-center gap-2">
            <button 
              className="text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => window.open(link, '_blank')}
              title="Open link"
            >
              <ShareIcon />
            </button>
            <button 
              className="text-gray-500 hover:text-red-500 transition-colors"
              title="Remove"
            >
              <ShareIcon />
            </button>
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-4">
        {type === "youtube" && (
          <div className="aspect-video rounded-md overflow-hidden">
            <iframe 
              className="w-full h-full"
              src={link.replace("youtu.be", "www.youtube.com/embed")}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}
        
        {type === "twitter" && (
          <div >
            <blockquote className="twitter-tweet mb-2">
              <a href={link.replace("x.com", "twitter.com")}></a>
            </blockquote>
            <div className="text-sm text-blue-500 mt-3">
              <a href={link} target="_blank" rel="noopener noreferrer">
                View on Twitter →
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};