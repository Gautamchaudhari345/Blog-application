import React from 'react';
import { getAuth } from 'firebase/auth';
import './Navbar.css';
import { useNavigate, Link, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth?.currentUser;
  const locattion=useLocation();

  const logout = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <div className="contain">
      {user ? (
        <div className="user-content">
          <img src={user.photoURL} alt="User Profile" />
          <h1 className='name' >{user.displayName}</h1>
        </div>
      ) : (
        <div className="user-content">
          <img src="default-avatar.png" alt="Default Avatar" /> {/* Fallback Image */}
          <h1>Guest User</h1>
        </div>
      )}

      <div className="email">
        {user ? (
          <>
           {( locattion.pathname ==='/blogs') &&(<Link to="/addBlog" className="btn btn-primary ">AddBlog</Link>)}

           {( locattion.pathname!=='/blogs') &&(<Link to="/blogs" className="btn btn-warning">BackToblogs</Link>)}
            <h2>{user.email}</h2>
            <button onClick={logout} className="btn btn-danger">Logout</button>
          </>
        ) : (
          <button onClick={() => navigate('/login')} className="btn btn-primary">
            Login
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
