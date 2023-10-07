import React from "react";
import { BsFillRocketTakeoffFill } from "react-icons/bs";
import { MdWorkspacePremium } from "react-icons/md";
import "../styles/premium-user/premium-user.scss";
import { Link } from "react-router-dom";
import { createPaymentOrder } from "../services/payment-api";

const PremiumUser = ({ isPremiumUser }) => {

  return (
    <div className="premium-user bg-7 text-center rounded">
      <div className="inner-wrapper">
        <div className="container">
          <div className="content-wrapper">
            {isPremiumUser ? (
              <>
                <div className="premium-logo">
                  <span className="premium-img premium">
                    <MdWorkspacePremium />
                  </span>
                </div>
                <div className="text-content mt-4">
                  <div className="heading">
                    <h4>Premium User</h4>
                  </div>
                  <div className="subheading">
                    <p>
                      Enjoy our premium services that we offer
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <button
                onClick={() => createPaymentOrder()}
                disabled={isPremiumUser}
              >
                <div className="premium-logo">
                  <span className="premium-img">
                    <BsFillRocketTakeoffFill />
                  </span>
                </div>
                <div className="text-content mt-4">
                  <div className="heading">
                    <h4>Upgrade to Pro</h4>
                  </div>
                  <div className="subheading">
                    <p>
                      Checkout the TrackWise Pro with various features in built
                    </p>
                  </div>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumUser;
