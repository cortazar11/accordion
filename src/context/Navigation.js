import { use } from 'react';
import {createContext,useState, useEffect} from 'react';


const NavigationContext=createContext();

const NavigationProvider=({children})=>{
    const [currentPage,setCurrentPage]=useState(window.location.pathname);

    useEffect(()=>{
        const handleLocationChange=()=>{
            setCurrentPage(window.location.pathname);
        };

        window.addEventListener('popstate',handleLocationChange);

        return()=>{
            window.removeEventListener('popstate', handleLocationChange);
        };
    },[]);

    const navigate=(to)=>{
        window.history.pushState({},'',to);
        setCurrentPage(to);
    }

    return(
        <NavigationContext.Provider value={{currentPage,navigate}}>
            {children}
        </NavigationContext.Provider>
    );
};
export {NavigationProvider};
export default NavigationContext;