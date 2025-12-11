import Button from "./componentes/Button";
import { GoBell } from "react-icons/go";
import Accordion from "./componentes/Accordion";

function App() {

    const items=[
        {title:'What is React?',content:'React is a front end javascript framework'},
        {title:'Why use React?',content:'React is a favorite JS library among engineers'},
        {title:'How do you use React?',content:'You use React by creating components'   }
    ]

    return <Accordion items={items}/>;
    
}
export default App;