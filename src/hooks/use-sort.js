import { useState } from "react";

function useSort(data,config) {
    const[sortOrder,setSortOrder]=useState(null);
    const[sortBy,setSortBy]=useState(null);

    const setSortColumn=(label)=>{
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


let sortedData=data;
    if(sortOrder && sortBy){
        const {sortValue}=config.find((column)=>column.label===sortBy);
        const reverseOrder=sortOrder==="asc"?1:-1;
        sortedData=[...data].sort((a,b)=>{
            const valueA=sortValue(a);
            const valueB=sortValue(b);
            if(typeof valueA==="number"){
                return (valueA-valueB)*reverseOrder;
            } else {
                return valueA.localeCompare(valueB)*reverseOrder;
            }
        });
    } 

    return {sortedData,setSortColumn,sortBy,sortOrder};
}
export default useSort;