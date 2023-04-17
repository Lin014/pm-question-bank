import { Navs } from "../components/nav"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

export const Home = () => {
    return (
        <div>
            <Navs id="top"/>
            <div className="container">
                <img alt="home background" style={{ marginTop: "80px"}} width="100%" height="100%" src={require('../pictures/godgwawa.jpeg')} />
                <a href="#top"><img alt="Go to top button" className="right-btn" src={require('../pictures/godgwawa2.png')}/></a>
            </div>
        </div>
    )

}