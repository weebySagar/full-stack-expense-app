import React from "react";
import "../styles/profile/profile.scss";
import {BiEditAlt} from 'react-icons/bi'

const Profile = ({ user }) => {
  
  return (
    <div className="profile bg-7 h-100">
      <div className="inner-wrapper">
        <div className="row justify-content-center text-center">
          <div className="col ">
            <div className="user-profile">
              <div className="user-img">
                <span className="img-container">
                  <img
                    src="https://images.rawpixel.com/image_png_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvdjkzNy1hZXctMTM5LnBuZw.png?s=l21v8BeI92QVqoQNpZg9Fh75crN6sAg3YXaX5ekwSMk"
                    alt=""
                    height="100"
                    width="100"
                  />
                </span>
              </div>
              <div className="title">
                <h4>{user.name}</h4>
              </div>

              <div className="edit-links d-flex justify-content-center column-gap-3 content-wrapper">
                
                    <span className="icon">
                        <BiEditAlt/>
                  </span>
                  <span className="icon">
                        <BiEditAlt/>
                    </span>
                  <span className="icon">
                        <BiEditAlt/>
                  </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
