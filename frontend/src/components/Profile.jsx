import React, { useEffect, useRef, useState } from "react";
import "../styles/profile/profile.scss";
import { BiEditAlt } from "react-icons/bi";
import { updateUserDetails } from "../services/user-api";
import toast from "react-hot-toast";

const Profile = ({ user }) => {
  const inputRef = useRef();
  const [isEdit, setIsEdit] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    password: "",
  });

  const handeInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (userData.name.trim() === "") {
      // newErrors.name = 'Name is required';
      valid = false;
    }

    // Name validation
    if (userData.password.trim() === "") {
      // newErrors.password = 'Password is required';
      valid = false;
    } else {
      newErrors.password = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleEditToggle = () => {
    setIsEdit(!isEdit);
    inputRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userData.name || userData.password) {
      const updateUser = updateUserDetails(userData);
      toast.promise(updateUser, {
        success: (response) => {
          setIsEdit(false);
          return response;
        },
        error: (err) => err,
      });
    }
  };

  useEffect(() => {}, [user]);

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
              <div className="title d-flex justify-content-center align-items-center">
                <h4>{user.name}</h4>
                <div className="edit-links ms-2">
                  <span className="icon">
                    <BiEditAlt onClick={handleEditToggle} />
                  </span>
                </div>
              </div>

              <div className="edit-profile content-wrapper mx-2">
                <form onSubmit={handleSubmit}>
                 
                  <div class="input">
                    <label htmlFor="nameupdate" class="form-label">
                      Name
                    </label>
                    <input
                        type="text"
                        value={isEdit ? userData.name : user.name}
                        name="name"
                        onChange={handeInputChange}
                        className=""
                        readOnly={!isEdit}
                        onFocus={isEdit}
                        ref={inputRef}
                        id="nameupdate"
                      />
                  
                  </div>
                  {errors.name && <p className="text-danger">{errors.name}</p>}
                  <div className="input">
                  <label htmlFor="emailupdate" class="form-label">
                      Email
                    </label>
                      <input type="text" value={user.email} disabled id="emailupdate"/>
                  </div>
                  {isEdit && (
                    <div className=" input">
                       <label htmlFor="passwordupdate" class="form-label">
                      Password
                    </label>
                        <input
                          type="password"
                          value={userData.password}
                          name="password"
                          onChange={handeInputChange}
                          className=""
                          id="passwordupdate"
                         
                        />
                    </div>
                  )}
                  {errors.password && (
                    <p className="text-danger">{errors.password}</p>
                  )}

                  {isEdit && (
                    <div className="update-btn mt-4">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-sm"
                      >
                        Update
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
