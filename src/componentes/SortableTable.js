
import Table from "./Table";
import { GoArrowSmallDown, GoArrowSmallUp } from 'react-icons/go';
import useSort from "../hooks/use-sort";

function SortableTable(props) {
    const {sortedData,setSortColumn,sortBy,sortOrder}=useSort(props.data,props.config);
    
    const {config,data}=props;

    
    
    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {
          return column;
        }
      
        return {
          ...column,
          header: () => <th className="cursor-pointer hover:bg-gray-200" onClick={()=>setSortColumn(column.label)} >
            {getIcons(column.label, sortBy, sortOrder   )}
            {column.label} 
            </th>
        };
      }
    );

   
      
   

    return (
        <div>
            {sortOrder} - {sortBy}
            <Table {...props} config={updatedConfig} data={sortedData} />
        </div>
    )
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy) {
      return (
        <div>
          <GoArrowSmallDown />
          <GoArrowSmallUp />
        </div>
      );
    }
  
    if (sortOrder === null) {
      return (
        <div>
          <span className="text-lg inline-block">&#8597;</span>
        </div>
      );
    } else if (sortOrder === "asc") {
      return (
        <div>
          <span className="text-lg inline-block">&#8593;</span>
        </div>
      );
    } else if (sortOrder === "desc") {
      return (
        <div>
          <span className="text-lg inline-block">&#8595;</span>
        </div>
      );
    }
  }

export default SortableTable;