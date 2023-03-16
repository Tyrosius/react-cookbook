import { Player } from "@lottiefiles/react-lottie-player";

export const NavBar = ({ recipes }) => {
  console.log(recipes);

  return (
    <header className="row">
      {/* <!--Navbar--> */}
      <nav className="navbar navbar-expand-lg col-md-12 col-lg-8 mx-auto">
        <a className="navbar-brand" href="#"></a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="nav-link active" aria-current="page" href="index.html">
            <Player
              autoplay
              loop
              src="https://assets5.lottiefiles.com/packages/lf20_ygOY09e7vS.json"
              style={{ height: "90px", width: "90px" }}
            ></Player>
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">
                BLOG
              </a>
            </li>
            <li className="nav-item dropdown">
              {" "}
              {/* TODO dropdown toggle? https://react-bootstrap.github.io/components/dropdowns/ */}
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                REZEPTE
              </a>
              <ul className="dropdown-menu">
                {/*                     <!--durch map ersetzen-->
                 */}{" "}
                {/* <navDropDown /> */}
                {recipes
                  ? recipes.map((recipe, i) => {
                      return (
                        <>
                          <li key={i}>{recipe.fields.rezeptName}</li>
                          <hr
                            key={"divider" + i}
                            className="dropdown-divider"
                          />
                        </>
                      );
                    })
                  : null}
                {/*<!--ende durch map ersetzen--> */}
              </ul>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Suche"
              aria-label="Search"
            />
            <button className="btn-search" type="submit">
              Suchen
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};
