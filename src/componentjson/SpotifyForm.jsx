import React from "react";

const SpotifyForm = () => {
  return (
    <section id="spotifyBlock">
      <article>
        <h1 style={{ margin: "25px 0px", fontSize: "26px" }}>Spotify</h1>
        <h2 style={{ margin: "15px 0px", fontSize: "26px" }}>
          Sign up for free to start listening.
        </h2>
        <div className="btn1">
          {/* should link cdn in html */}
          <button className="fa-brands fa-facebook">
            Sign up with Facebook
          </button>
        </div>
        <div className="btn2">
          <button>Sign up with Google</button>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="email">What's your email?</label>
            <input type="email" id="email" placeholder="Enter your email." />
            <a href="#">use phone number instead</a>
          </div>
          <div className="form-group">
            <label htmlFor="email">Confirm your email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email again."
            />
          </div>
          <div className="form-group">
            <label htmlFor="psw">Create a password</label>
            <input type="password" id="psw" placeholder="Create a password." />
          </div>
          <div className="form-group">
            <label htmlFor="username">What should we call you?</label>
            <input type="text" id="username" placeholder="Enter Profile name" />
            <span>This appear on your Profile</span>
          </div>
          <div className="date-div">
            <label htmlFor="date">What's your date of birth?</label>
            <input type="date" id="date" placeholder="Create a password." />

            {/* <span>Enter a valid year</span>

            <span>Select your birth month.</span>

            <span>Enter a valid day of the month.</span> */}
          </div>

          <div className="gender-inp">
            <label htmlFor="">What's your Gender?</label>
            <br />
            <input type="radio" id="" name="male" /> Male
            <input type="radio" id="" name="female" /> Female
            <input type="radio" id="" name="others" /> Others
          </div>

          <div className="check1">
            <input type="checkbox" />I would prefer not to receive marketing
            messages from Spotify
          </div>
          <div className="check1">
            <input type="checkbox" />
            Share my registration data with Spotify's content providers for
            marketing purposes.
          </div>

          <div className="check2">
            <input type="checkbox" />
            I'm not a robot
            {/* <div>
              <img src={recaptch} alt="" />
            </div> */}
          </div>
          <div className="para-line">
            <p>
              By clicking on sign-up, you agree to Spotify's
              <a href="">Terms and Conditions of Use.</a>
            </p>
            <p>
              To learn more about how Spotify collects, uses, shares and
              protects your personal data, please see
              <a href=""> Spotify's Privacy Policy.</a>
            </p>
          </div>
          <div>
            <button className="form-btn">Submit</button>
          </div>
          <div className="log">
            <p>
              Have an account ? <a href="">Log in.</a>
            </p>
          </div>
        </form>
      </article>
    </section>
  );
};

export default SpotifyForm;
