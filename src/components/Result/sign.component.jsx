import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

//true of false converts to + or -
const Sign = ({answer}) => (
  <div>
   {answer 
   ? <FaPlus/>
   : <FaMinus/>
   }
  </div>
);



export default Sign