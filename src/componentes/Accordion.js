import { useState } from "react";
import { GoChevronDown,GoChevronLeft } from "react-icons/go";


function Accordion({items}) {
    const [expandedIndex,setExpandedIndex]=useState(-1);

     const handleClick=(nextIndex)=>{
            if(nextIndex===expandedIndex){
                setExpandedIndex(-1);
            }  else {setExpandedIndex(nextIndex);}
            
        }

    const renderedItems=items.map((item, index)=>{
        const isExpanded= index===expandedIndex; 
        const icon =(<span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>) ;
        
       
        if (index===expandedIndex){
            console.log('expanded');
        } else {
            console.log('not expanded');
        }
        return <div key={item.title}>
            <h3 className="flex p-3 bg-gray-50 border-b items-center justify-between cursor-pointer " onClick={()=>handleClick(index)}>
                {item.title}
                 {icon}</h3>
            {isExpanded && <div className="border-b p-5">{item.content}</div>}
        </div>
    })
    return <div className="border-x border-y rounded">{renderedItems} </div>
}

export default Accordion;
