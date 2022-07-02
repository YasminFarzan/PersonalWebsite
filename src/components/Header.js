import {Link} from "react-router-dom";

export default function Header(){
    return(
        <div>
            <h1>Yasmin's Page</h1>
            <nav>
                <Link to="/main">Main Page</Link> |{" "}
                <Link to="/projects">Projects</Link>
                {/*<Link to="/final">Final</Link> |{" "}*/}
                {/*<Link to="/pie">Pie Chart</Link> |{" "}*/}
                {/*<Link to="/drawRect">Draw Rectangle</Link>*/}
            </nav>
        </div>
    )
}
