import React from 'react'
import './SignUpPlan.css'

// Assets
import { NetflixLogo, LoginBackground2 } from "../../assets/images/";


export const SignupPlanform = () => {
  return (
    <div>
      <div className="Signup">
        <img src={NetflixLogo} alt="Logo" />
        <p>Sign Out</p>
      </div>

      <div className="plancard__container">
        <div className="plancard__container__header">
          <h1>Choose your plan that’s right for you</h1>
        </div>
        <div className="plancard__container__body">
          <div className="plancard__container__body__card">
            <div className="plancard__container__body__card__header">
              <h2>Basic</h2>
              <h3>Perfect for your first time</h3>
            </div>
            <div className="plancard__container__body__card__body">
              <ul>
                <li>
                  <span>
                    <strong>₹ 199</strong> / month
                  </span>
                </li>
                <li>Unlimited movies and TV shows</li>
                <li>Watch on your laptop, TV, phone and tablet</li>
                <li>Cancel anytime</li>
              </ul>
            </div>
            <div className="plancard__container__body__card__footer">
              <button>Subscribe</button>
            </div>
          </div>
          <div className="plancard__container__body__card">
            <div className="plancard__container__body__card__header">
              <h2>Standard</h2>
              <h3>Perfect for your first time</h3>
            </div>
            <div className="plancard__container__body__card__body">
              <ul>
                <li>
                  <span>
                    <strong>₹ 649</strong> / month
                  </span>
                </li>
                <li>Unlimited movies and TV shows</li>
                <li>Watch on your laptop, TV, phone and tablet</li>
                <li>Cancel anytime</li>
              </ul>
            </div>
            <div className="plancard__container__body__card__footer">
              <button>Subscribe</button>
            </div>
          </div>
          <div className="plancard__container__body__card">
            <div className="plancard__container__body__card__header">
              <h2>Premium</h2>
              <h3>Perfect for your first time</h3>
            </div>
            <div className="plancard__container__body__card__body">
              <ul>
                <li>
                  <span>
                    <strong>₹ 799</strong> / month
                  </span>
                </li>
                <li>Unlimited movies and TV shows</li>
                <li>Watch on your laptop, TV, phone and tablet</li>
                <li>Cancel anytime</li>
              </ul>
            </div>
            <div className="plancard__container__body__card__footer">
              <button>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
