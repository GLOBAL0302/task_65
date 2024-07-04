import { NavLink } from 'react-router-dom';
import { PAGES } from '../../constants';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5">
      <div className="container-fluid">
        <NavLink to="/page/home" className="navbar-brand">
          Static Pages
        </NavLink>
        <div className="collapse navbar-collapse d-flex gap-5" id="navbarNavAltMarkup">
          <ul className="navbar-nav ms-auto">
            {PAGES.map(page=>(
              <li
                key={page.id}
                className="nav-item">
                <NavLink to={`/page/${page.id}`} className="nav-link " aria-current="page">{page.title}</NavLink>
              </li>
            ))}
          </ul>
          <div>
            <NavLink to="/PageForm">
              <img
                style={{width:"25px"}}
                src='https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png'
                alt='' />
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;