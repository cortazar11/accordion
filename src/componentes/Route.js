import {useContext} from 'react';
import NavigationContext from '../context/Navigation';
import useNavigation from '../hooks/use-navigation';

function Route({path, children}) {
    const {currentPage} = useNavigation();
    if(currentPage === path){
        return children;
    }
    return null;
}   

export default Route;