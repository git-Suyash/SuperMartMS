import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src="./assets/supermart.ico" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"></img>  SuperMartMS</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link" to="/employees">Employee</Link>
                            <Link className="nav-link" to="/inventory">Inventory</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;