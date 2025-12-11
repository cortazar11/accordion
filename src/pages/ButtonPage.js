import Button from "../componentes/Button";
import { GoBell } from "react-icons/go";

function ButtonPage() {

    const handleClick = () => {
        console.log('Clicked!');
    };
    return <div>
        <div><Button secondary outline rounded onClick={handleClick}>
            <GoBell className='mr-1'/>
            Click me!
            </Button>
        </div>
        <div><Button secondary outline >Buy now!</Button></div>
        <div><Button success rounded outline>See deal!</Button></div>
        <div><Button warning onMouseLeave={handleClick}>Hide adds!</Button></div>
        <div><Button danger outline onMouseEnter={handleClick}>Something!</Button></div>
    </div>
}
export default ButtonPage;