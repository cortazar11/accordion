import {useState} from "react";
import Table from "./Table";

function SortableTable(props) {
    const[sortOrder,setSortOrder]=useState(null);
    const[sortBy,setSortBy]=useState(null);
    const {config,data}=props;

    const handleClick=(label)=>{
        if(sortOrder===null){
            setSortOrder("asc");
            setSortBy(label);
           
        } else if(sortOrder==="asc"){
            setSortOrder("desc");
            setSortBy(label);
        } else if(sortOrder==="desc"){
            setSortOrder(null);
            setSortBy(null);
        }
    }
    
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
          return column;
        }
      
        return {
          ...column,
          header: () => <th className="cursor-pointer hover:bg-gray-200" onClick={()=>handleClick(column.label)} >{column.label} </th>
        };
      }
    );

   
   

    return (
        <div>
            {sortOrder} - {sortBy}
            <Table {...props} config={updatedConfig} data={data} />
        </div>
    )
}

export default SortableTable;