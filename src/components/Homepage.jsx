import { Component } from "react";

class Homepage extends Component {
  render() {
    return (
      <div
        className="homepage"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/bgtry.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "stretch",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="headerhome"></div>
        <img
          className="homepage-title"
          src={`${process.env.PUBLIC_URL}/images/logo2.png`}
        />
        <div className='ptag'>
            <p className='tagline'>
                unravel who you're meant to be.
            </p>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default Homepage;
