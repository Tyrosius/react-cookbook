export const Footer = () => {
    return (
        < div class="container-fluid footer" >

            <div class="row">
                <footer class="col-sm-12 col-md-12 col-lg-8 mx-auto">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            {/*                 <!-- Facebook -->
 */}                <a class="btn btn-floating m-1" href="#!" role="button">
                                <img src="./img/facebook.png" class="fab fa-facebook-f"></img>
                            </a>

                            {/*                 <!-- Twitter -->
 */}                <a class="btn btn-floating m-1" href="#!" role="button"><img src="./img/twitter.png"
                                class="fab fa-twitter"></img></a>

                            {/*                 <!-- Google -->
 */}                <a class="btn btn-floating m-1" href="#!" role="button"><img src="./img/gplus.png"
                                class="fab fa-google"></img></a>

                            {/*                 <!-- Instagram -->
 */}                <a class="btn btn-floating m-1" href="#!" role="button"><img src="./img/instagram.png"
                                class="fab fa-instagram"></img></a>

                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-6">
                            <form action="">
                                <div class="form-outline form-white">
                                    <input type="email" id="form5Example21" class="form-control" placeholder="Für Newsletter anmelden" />
                                    <button type="submit" class="btn btn-outline-light mb-4">Anmelden</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </footer>
            </div>
        </div >)
}