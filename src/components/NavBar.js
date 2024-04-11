import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography } from '@mui/material';
import cookie from "cookie";
// import MenuIcon from "@mui/icons-material/Menu";

// const navItems = ['Listings', 'Login'];
// const adminNavItems = ['Listings', 'Add', 'Logout'];

const NavBar = (props) => {
    const navigate = useNavigate();
    const cookies = cookie.parse(document.cookie)

//   const [loggedIn, setLoggedIn] = React.useState(false);

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

            {/* {cookies.loggedIn ?
                null :
                <li className="nav-list-item">
                    <Link to="/LoginPage">Login</Link>
                </li>
            } */}

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

          {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button>
            ))}
          </Box> */}
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
