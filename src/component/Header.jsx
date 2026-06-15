import style from "../component/Header.module.css";
import { BsList } from "react-icons/bs";

const Header = () => {
  return (
    <header className={`py-2 py-md-4 mb-3 ${style.header}`}>
      <div className="container">
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 gap-md-3">
          {/* Left Icon */}
          <span
            className="menu-list"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
          >
            <BsList className={style.menuIcon} />
          </span>
          {/* Center Search */}
          <form
            className="flex-grow-1 d-flex justify-content-center"
            role="search"
          >
            <input
              type="search"
              className="form-control py-1 py-lg-2 w-100"
              style={{ maxWidth: "600px" }} // desktop par chhota aur centered
              placeholder="Search..."
              aria-label="Search"
            />
          </form>

          {/* Right Dropdown */}
          <div className={`dropdown text-end ${style.dropdown}`}>
            <a
              href="#"
              className="d-block text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <img
                src="https://github.com/mdo.png/"
                alt="user"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
