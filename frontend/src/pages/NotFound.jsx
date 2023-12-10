import React from "react";
import notFoundImg from "../assets/not_found.svg";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found text-center d-flex flex-column justify-content-center" style={{height:'100vh'}}>
      <div className="inner-wrapper">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col">
              <div className="img-wrapper">
                <img src={notFoundImg} alt="Not Found Image" className="img-fluid" />
              </div>

              <div className="text-wrapper content-wrapper">
                <h2>The page you are looking is not found</h2>
              </div>

              <div className="button-wrap">
                <Link to='/dashboard' className="btn btn-secondary mt-4">Go to Dashboard</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
