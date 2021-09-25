import React from "react";
import axios from "axios";
import Fade from "react-reveal/Fade";

class Journal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      journalData: [],
      inputEntry: "",
      inputDate: "",
    };
  }
  handleChange = (event) => {
    this.setState({ inputEntry: event.target.value });
  };
  handleDateChange = (event) => {
    this.setState({ inputDate: event.target.value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log("form was submitted");
    axios
      .post(`http://localhost:4000/api/journal`, {
        entry: this.state.inputEntry,
        date: this.state.inputDate,
      })
      .then((response) => {
        let updatedJournalData = [...this.state.journalData, response.data];
        this.setState({ journalData: updatedJournalData });
        this.props.history.push("/journal");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="create-page">
        <br />
        <br />
        <h1 className="create-title"> need to journal? </h1>
        <h3>
          <a className="jump" href="#form">
            jump to form
          </a>
        </h3>
        <br />
        <div className="prompts">
          <div className="cloud"></div>
          <h2 className="prompts-title">journaling prompts for you</h2>
          <br />
          <br />
          <br />
          <Fade left>
            <p className="prompt1">
              what does unconditional love look like for you? have you ever felt
              it?
            </p>
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade right>
            <p className="prompt2">
              dear past me... dear present me... dear future me...
            </p>
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade left>
            <p className="prompt3">
              write a letter to 1 of the 5 people you love the most, even if you
              don’t deliver it.
            </p>
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade right>
            <p className="prompt4">
              what have I learned about myself during the recovery process?
            </p>
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade left>
            <p className="prompt5">
              write down the words you most want to hear someone say to you
              right now.
            </p>
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade right>
            <p className="prompt6">
              write a goodbye letter to something in your life you want to
              eliminate during your recovery process.
            </p>
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade left>
            <p className="prompt7">
              what are the things in your life that make you smile?
            </p>
          </Fade>
          <br />
          <br />
          <br />
          <br />
          <br />
          <Fade right>
            <p className="prompt8">
              for more prompts click{" "}
              <a href="https://myrealrecovery.com/31-addiction-recovery-journal-prompts-to-use-during-your-healing-process/">
                here
              </a>
            </p>
          </Fade>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div id="form" className="whole-form">
          <div className="inputs">
            <div className="create-entry-div">
              <h3 className="create-entry-title"> create a journal entry</h3>
            </div>
            <br />
            <form onSubmit={this.handleFormSubmit}>
              <div className="input-date">
                <p>date:</p> &nbsp;
                <input
                  className="input-date-field"
                  type="text"
                  onChange={this.handleDateChange}
                  value={this.state.inputDate}
                />
              </div>
              <div className="input-entry">
                <p>entry:</p>
                <textarea
                  name="text"
                  wrap="soft"
                  className="input-entry-field"
                  type="text"
                  onChange={this.handleChange}
                  value={this.state.inputEntry}
                />
              </div>
              <br />
              <input className="submit-button" type="submit" />
            </form>
            <br />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
export default Journal;
