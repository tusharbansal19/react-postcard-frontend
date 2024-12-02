import React from "react";
import { FaStar, FaComment, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";

import { AiOutlineSave } from "react-icons/ai";
const PostCard = ({ post }) => {
  const styleSettings = useSelector((state) => state.style);
console.log(styleSettings)
  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar
          key={i}
          className={`text-xl ${
            i <= rating ? "text-yellow-400" : "text-gray-400"
          }`}
        />
      );
    }
    return stars;
  };

  return (
    <div
      className="w-full mx-4   text-black shadow-lg rounded-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col md:flex-row  "
      style={{
       
        color: styleSettings.textColor || "black",
      }}
    >
      {/* Left: Image Section */}
      <div className="flex-shrink-0 w-full md:w-1/3">
        <img
          src={post.link||"https://th.bing.com/th/id/OIP.jZRqGWE45DXEPa9-iErvlgHaEK?rs=1&pid=ImgDetMain"}
          alt={post.title}
          className="w-full h-48 md:h-full object-cover"
        />
      </div>

      {/* Right: Content Section */}
      <div className="w-full">
        <h1 className="text-2xl font-bold  mb-4 p-4"  style={{
          background: styleSettings.bgGradient || styleSettings.bgColor,
        }}>{post.title}</h1>

      <div className=" flex-1 pt-0 pb-6 ml-3 ">
        <h2
          className="text-md font-semibold hover:text-sky-500 transition-all duration-300 text-sm italic opacity-35"
          style={{
            color: styleSettings.textColor || "black",
          }}
        >
         Author: {post.author}
        </h2>
        <p className="text-sm mt-2"><span  className=" bold text-[0.5rem]">
          Description :
          </span>
          <div className="h-20 overflow-y-scroll p-2 w-[80%]  text-amber-800 rounded-lg bg-gray-50">
            <p>
            {post.content.substring(0, 100)}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, cupiditate ipsam. Perferendis architecto beatae hic animi doloribus error earum, dolorem voluptatibus porro at quas illum sed fugit accusantium vel obcaecati consectetur ab facilis saepe. Animi laboriosam consequuntur sed officia ipsum quos, tenetur deleniti, nam dolore, magnam iure ut eum et aspernatur soluta molestiae possimus ex architecto ratione veritatis? Odio dicta, assumenda consectetur soluta dolores quisquam iste voluptatum commodi eveniet ipsam, temporibus minus facilis officiis illo et minima, ratione esse tempore similique! Cupiditate praesentium, illum reprehenderit et itaque, aut facere beatae ab, nam quidem quod. Cumque sit necessitatibus in soluta ipsa neque alias rerum voluptas error magnam quisquam recusandae illo ex odit optio at est, possimus nisi commodi? Numquam recusandae, sint quam ad, dolores facere earum reprehenderit vel tempora dolor corporis necessitatibus unde! Numquam culpa minima eligendi reprehenderit officia eaque similique. Optio ipsa quidem similique dolor nobis in saepe quaerat inventore earum error, odio, suscipit, eius dicta? Facilis earum excepturi nisi fugit magnam voluptatibus error at fugiat nemo molestiae, quam molestias perferendis dolorum velit! Blanditiis ab aliquid ipsa consequatur impedit voluptas sed numquam amet molestiae error, quam perferendis tempore omnis. Amet iusto illo pariatur! Eos vel blanditiis quasi dolore illum, impedit quia ad officia dolores adipisci ea explicabo beatae alias labore possimus nostrum quae, cum fugiat architecto maxime? Qui accusantium minima, fugit maiores, quas, eius consectetur natus enim commodi doloremque maxime tempore! Tempore, ab odio!
              
            </p>
          </div>
           <br />...</p>
  
        <div className="flex items-center space-x-4 mt-4 text-gray-600  transition-all duration-300 justify-between w-full pr-20 ">
          <div className=" flex  gap-2">

          
          <span className=" flex gap-1 hover:text-sky-500">
          <FaComment className="mr-1" />
            Comment</span>
          <span className="flex gap-1 hover:text-sky-500">
          <FaUser className="mr-1" />
            Author</span>
        </div>
          <AiOutlineSave className="  text-red-800  text-2xl hover:text-blue-600  mr-18" />
          </div>
      </div>
      
      </div>
    </div>
  );
};

export default PostCard;
