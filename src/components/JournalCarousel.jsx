import Slider from "react-slick";
import React from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class JournalCarousel extends React.Component {
  state = { redirect: null };

  handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/journal/${id}`).then(() => {
      this.props.deleteJournal(id);
    });
  };
  carouselItems = () => {
    const journalJSX = this.props.journalData.map((journalObj, idx) => {
      return (
        <div className="carousel-index" key={idx}>
          <h3 className="date">date: </h3>
          <div id="date-bg">
            <p className="journal-date">{journalObj.date}</p>
          </div>
          <h3 className="entry">entry:</h3>
          <br />
          <p className="journal-entry">{journalObj.entry}</p>
            <br />
          <div className="delete-button-wrapper">
            <img
              src={`${process.env.PUBLIC_URL}/images/trash.png`}
              className="delete-image"
              onClick={() => this.handleDelete(journalObj._id)}
              alt="trash"
            />
            <p className="trash">delete entry</p>
          </div>
        </div>
      );
    });
    return journalJSX;
  };
  render() {
    if (this.state.redirect === true || !this.props.journalData) {
      return <Redirect to="/journal" />;
    }
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    if (this.props.journalData.length < 1) {
      settings.slidesToShow = this.props.journalData.length;
    } else if (this.props.journalData.length >= 1) {
      settings.slidesToShow = 1;
    }
    return (
      <div>
        <Slider {...settings}>{this.carouselItems()}</Slider>
      </div>
    );
  }
}

export default JournalCarousel;
