import { Link, useNavigate } from "react-router-dom";


const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <div>
    <img className="logo"  alt="pic" src="https://th.bing.com/th/id/R.cbb3574d8917c6e90afbde646abac360?rik=Fed6ooaBKk9E4g&riu=http%3a%2f%2fwww.dherbal.in%2fwp-content%2fuploads%2f2018%2f02%2fFlipkart-logo.png&ehk=VY1lt1KNLkVqlILPbsZQOtI5OgJKNiYgF3Q611ngxKk%3d&risl=&pid=ImgRaw&r=0" />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/add">Add Products</Link>
          </li>
          <li>
            <Link to="/update/:id"> Update Products</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to="/signup">
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <Link to="/signup">SignUp</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
