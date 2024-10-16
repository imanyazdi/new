
import { useContext } from 'react';
import { Them } from '../Context/Themcontext';
export  function Usethem() {
    const color=useContext(Them)
    if (color===undefined) {
        throw new Error ("error please chech the app") 
    }
    return color
}
 