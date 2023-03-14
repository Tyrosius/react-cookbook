import { Dropdown, DropdownButton, Navbar, Nav } from "react-bootstrap"

export const NavBar = ({ recipes }) => {
    console.log(recipes)
    return (
        <header className="row">

            {/* <!--Navbar--> */}
            <Navbar className="navbar col-md-12 col-lg-8 mx-auto" expand="lg">
                <a className="navbar-brand" href="#"><lottie-player
                    src={`{https://assets5.lottiefiles.com/packages/lf20_ygOY09e7vS.json}`} background="transparent" speed="1"
                    style={{ width: 120 + "px", height: 120 + "px" }} loop autoplay></lottie-player></a>

                <Navbar.Toggle bsPrefix="navbar-toggler"
                    aria-controls="navbarSupportedContent" />
                {/* <Navbar.Collapse/> */}
                <Navbar.Collapse variant="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav variant="navbar-nav me-auto mb-2 mb-lg-0">
                        <Nav.Item bsPrefix="nav-item">
                            <Nav.Link bsPrefix="nav-link active" aria-current="page" href="index.html">NASCHBAR
                            </Nav.Link>
                        </Nav.Item>
                        <Nav.Item bsPrefix="nav-item">
                            <Nav.Link bsPrefix="nav-link" href="#">BLOG
                            </Nav.Link>
                        </Nav.Item>
                        <DropdownButton variant="nav-item" title="Rezepte">
                            {recipes ? recipes.map((recipe, i) => {
                                return (
                                    <>
                                        <Dropdown.Item eventKey={i}>{recipe.fields.rezeptName}</Dropdown.Item>
                                    </>
                                )
                            }) : null}
                        </DropdownButton>
                    </Nav>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Suche" aria-label="Search" />
                        <button className="btn-search" type="submit">Suchen</button>
                    </form>
                </Navbar.Collapse>
            </Navbar>
        </header >)
}