import Link from "next/link";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid ms-3 me-3">
          <Link className="navbar-brand" href="/">
            Sky Lieder
          </Link>
          <div>
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto align-items-center">
              <li className="nav-item">
                <Link className="nav-link" href="/checkout">
                  <i className="bi bi-cart-check-fill"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
