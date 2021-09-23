import { Component } from "react";
import JournalModel from "../models/JournalModel";
import { Link } from "react-router-dom";
import JournalCarousel from "../components/JournalCarousel";
import Fade from 'react-reveal/Fade'


class JournalIndex extends Component {
  state = {
    journalData: [],
  };

  fetchData = () => {
    JournalModel.all().then((data) => {
      console.log(data);
      this.setState({ journalData: data });
    });
  };

  deleteJournal = (id) => {
    console.log("delete journal activated");
    const journalDataArray = this.state.journalData.filter((journalObj) => {
      console.log(journalObj._id, id);
      if (journalObj._id == id) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({ journalData: journalDataArray });
  };

  componentDidMount = () => {
    console.log("mounted");
    this.fetchData();
  };

  render() {
    console.log(this.state);
    return (
      <div className="journal-index">
        <br />
        <br />
        <div className="head">
          <br />
          <br />
          <br />
          <br />
          <Fade left>
          <h1 className="journal-title">journal</h1>
          </Fade>
        </div>
        <br />
        <div className="entry-form">
          <div className="carousel-container">
            <JournalCarousel
              journalData={this.state.journalData}
              deleteJournal={this.deleteJournal}
            />
          </div>
          <p />
          <br />
          <Link to="/create">
            <button className="add-btn">add entry</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default JournalIndex;
