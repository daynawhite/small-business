import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from '@mui/material';
import cookie from "cookie";


const NavBar = (props) => {
    const navigate = useNavigate();
    const cookies = cookie.parse(document.cookie)

  return (
      <AppBar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            Austin Small Business
          </Typography>

          <ul className="nav-list">
            <li className="nav-list-item">
                <Link to="/Listings">Listings</Link>
            </li>

            {cookies.loggedIn ? 
              <div className="nav-list">
                <li className="nav-list-item">
                 <Link to="/AddBiz">Add</Link>
                </li>

                <li className="nav-list-item"
                    onClick={() => {
                    document.cookie = cookie.serialize("loggedIn", null, {
                        maxAge: 0,
                    });
                    navigate("/Listings");
                    }}>Logout
                </li>
              </div>
            : 
              <div>
                <li className="nav-list-item">
                 <Link to="/LoginPage">Login</Link>
                </li>
              </div> 
            }

          </ul>

        </Toolbar>
        {cookies.loggedIn ? 
        <div className="logged-in-bar">
            Logged in as: (Username)
        </div>
        :null
        }
      </AppBar>
  );
}

export default NavBar;
