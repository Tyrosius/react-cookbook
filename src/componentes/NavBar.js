<header class="row">

    {/* <!--Navbar--> */}
    <nav class="navbar navbar-expand-lg col-md-12 col-lg-8 mx-auto">
        <a class="navbar-brand" href="#"><lottie-player
            src="https://assets5.lottiefiles.com/packages/lf20_ygOY09e7vS.json" background="transparent" speed="1"
            style="width: 120px; height: 120px;" loop autoplay></lottie-player></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="index.html">NASCHBAR</a>

                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">BLOG</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        REZEPTE
                    </a>
                    <ul class="dropdown-menu">
                        {/*                     <!--durch map ersetzen-->
*/}                    {/* <navDropDown /> */}


                        {/*<!--ende durch map ersetzen--> */}
                    </ul>
                </li>
            </ul>
            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Suche" aria-label="Search" />
                <button class="btn-search" type="submit" onclick="notImplementedAlert()">Suchen</button>
            </form>
        </div>
    </nav>
</header >