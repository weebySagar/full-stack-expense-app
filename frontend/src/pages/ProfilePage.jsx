import React from "react";
import Profile from "../components/Profile";
import { useAuth } from "../context/AuthContext";
import PremiumUser from "../components/PremiumUser";
import { createPaymentOrder } from "../services/payment-api";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <section className="profile-page vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="container">
        <div className="profile-container">
          <Profile user={user} />
          {user.premiumUser ? (
            <button disabled className=" premium-btn btn-primary">Premium User</button>
          ) : (
            <div className="d-flex justify-content-center">

            <button onClick={() => createPaymentOrder()} className="buy-premium-btn mt-4 btn-primary">Buy Premium</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;
