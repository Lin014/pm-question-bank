import { Navs } from "../components/nav"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

export const Home = () => {
    return (
        <div>
            <Navs />
            <div className="container">
                <img width="100%" height="100%" src={require('../components/godgwawa.jpeg')} />
            </div>
        </div>
    )

}