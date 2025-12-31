import Sidebar from "./componentes/Sidebar";
import Route from "./componentes/Route";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import ButtonPage   from "./pages/ButtonPage";
import TablePage from "./pages/TablePage";
import Counter from "./pages/CounterPage";

function App() {
    return (<div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
        <Sidebar/>
        <div>
            <Route path="/accordion">
                <AccordionPage/>
            </Route>
            <Route path="/">
                <DropdownPage/>
            </Route>
            <Route path="/buttons">
                <ButtonPage/>
            </Route>
            <Route path="/table">
                <TablePage/>
            </Route>
            <Route path="/counter">
                <Counter initialCount={10}/>
            </Route>  
        </div>
    </div>);
   }
export default App;