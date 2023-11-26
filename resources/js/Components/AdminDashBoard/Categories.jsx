import React from 'react'
import { Avatar, Typography } from "@material-tailwind/react";
import { FaTrashAlt } from "react-icons/fa";
import { BiEdit } from "react-icons/bi";
function Categories({typeOfWork}) {
   console.log(typeOfWork)
  return (
   <div className="p-4">
   <table className="w-full border">
       <thead>
           <tr className="text-left uppercase border">
            
               <th className="p-2">
                   <Typography variant="h6" color="blue-gray">
                       ID
                   </Typography>
               </th>
               <th className="p-2">
                   <Typography variant="h6" color="blue-gray">
                       Name
                   </Typography>
               </th>
             
      
           </tr>
       </thead>
       <tbody>
           {typeOfWork.map((typeOfWork) => (
               <tr key={typeOfWork.id} className="border">
                
                   <td className="p-2">
                       <Typography variant="small">
                           {typeOfWork.id}
                       </Typography>
                   </td>
                   <td className="p-2">
                       <Typography variant="small" color="blue-gray">
                           {typeOfWork.name}
                       </Typography>
                   </td>
                  
                   <td className="text-center">
                       <button className="mr-2 text-blue-600 duration-700 hover:scale-110">
                           <BiEdit size={20} />
                       </button>
                       <button className="text-red-600 duration-700 hover:scale-110">
                           <FaTrashAlt size={20} />
                       </button>
                   </td>
               </tr>
           ))}
       </tbody>
   </table>
</div>
  )
}

export default Categories