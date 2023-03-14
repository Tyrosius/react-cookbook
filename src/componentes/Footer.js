import facebook from "./img/facebook.png"
import gplus from "./img/gplus.png"
import instagram from "./img/instagram.png"
import twitter from "./img/twitter.png"
export const Footer = () => {

    return (
        < div className="container-fluid footer" >

            <div className="row">
                <footer className="col-sm-12 col-md-12 col-lg-8 mx-auto">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            {/*                 <!-- Facebook -->
 */}                <a className="btn btn-floating m-1" href="#!" role="button">
                                <img src={facebook} className="fab fa-facebook-f"></img></a>

                            {/*                 <!-- Twitter -->
 */}                <a className="btn btn-floating m-1" href="#!" role="button"><img src={twitter}
                                className="fab fa-twitter"></img></a>

                            {/*                 <!-- Google -->
 */}                <a className="btn btn-floating m-1" href="#!" role="button"><img src={gplus}
                                className="fab fa-google"></img></a>

                            {/*                 <!-- Instagram -->
 */}                <a className="btn btn-floating m-1" href="#!" role="button"><img src={instagram}
                                className="fab fa-instagram"></img></a>

                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-6">
                            <form action="">
                                <div className="form-outline form-white">
                                    <input type="email" id="form5Example21" className="form-control" placeholder="Für Newsletter anmelden" />
                                    <button type="submit" className="btn btn-outline-light mb-4">Anmelden</button>
                                </div>
                            </form>
                        </div>
                    </div>


                </footer>
            </div>
        </div >)
}