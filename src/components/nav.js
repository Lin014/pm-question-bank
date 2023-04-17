import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.scss';

import { Outlet, useMatch, useResolvedPath } from "react-router-dom"

export const Navs = () => {

    return (
        <div>
            <div style={{ width: "100%", position: "fixed", top: "0px", zIndex: "1" }}>
                <Navbar bg="light" variant="light">
                    <Container>
                        <Navbar.Brand className="title" href="/">PM Question bank</Navbar.Brand>
                        <Nav className="me-auto">
                            <CustomLink href="/">Home</CustomLink>
                            <CustomLink href="/manage">Manage</CustomLink>
                            <CustomLink href="/quesitions">Questions</CustomLink>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <Outlet />       
        </div>

    )
}

const CustomLink = ({ href, children }) => {
    const resolvedPath = useResolvedPath(href)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })

    return (
        <Nav.Link className={isActive ? "active" : ""} href={href}>{children}</Nav.Link>
    )
}

